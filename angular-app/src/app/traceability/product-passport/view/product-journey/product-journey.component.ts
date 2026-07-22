import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core'
import L from 'leaflet'
import { PRIMARY, PRIMARY_LIGHT, TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { JourneyStopDTO } from '../../../../core/models/JourneyStopDTO'

const MARKER_ICON_PATHS: Record<string, string> = {
  sprout:
    '<path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"/><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"/><path d="M5 21h14"/>',
  factory:
    '<path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/>',
  package:
    '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/>',
  anchor: '<path d="M12 6v16"/><path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"/><path d="M9 11h6"/><circle cx="12" cy="4" r="2"/>',
  ship:
    '<path d="M12 10.189V14"/><path d="M12 2v3"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"/><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  'building-2':
    '<path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>',
  warehouse:
    '<path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"/><path d="M6 13h12"/><path d="M6 17h12"/>',
  'shopping-cart':
    '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
}

function createStopIcon(iconName: string, color: string) {
  const paths = MARKER_ICON_PATHS[iconName] ?? ''
  return L.divIcon({
    html: `<div style="
      width:36px;height:36px;border-radius:50% 50% 50% 0;
      background:${color};border:2.5px solid white;
      box-shadow:0 2px 8px rgba(0,0,0,0.25);
      display:flex;align-items:center;justify-content:center;
      transform:rotate(-45deg);cursor:pointer;
    "><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(45deg);display:block">${paths}</svg></div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    className: 'journey-stop-marker',
  })
}

@Component({
  selector: 'app-product-journey',
  standalone: false,
  templateUrl: './product-journey.component.html',
  styleUrl: './product-journey.component.scss',
})
export class ProductJourneyComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapEl') mapEl!: ElementRef<HTMLDivElement>

  stops: JourneyStopDTO[]
  routeCoords: [number, number][]
  selected: JourneyStopDTO | null = null
  readonly PRIMARY = PRIMARY
  readonly PRIMARY_LIGHT = PRIMARY_LIGHT

  private map: L.Map | null = null
  private markers: L.Marker[] = []
  private resizeTimer: ReturnType<typeof setTimeout> | null = null
  private readonly onWindowResize = () => this.refitOnResize()

  constructor(private data: TraceabilityDataService) {
    this.stops = this.data.getStops()
    this.routeCoords = this.data.getRouteCoords()
  }

  ngAfterViewInit() {
    this.destroyMap()

    const worldBounds = L.latLngBounds(L.latLng(-85, -180), L.latLng(85, 180))
    const routeBounds = L.latLngBounds(this.routeCoords)
    const mapContainer = this.mapEl.nativeElement as HTMLDivElement & { _leaflet_id?: number }

    mapContainer.replaceChildren()
    delete mapContainer._leaflet_id

    const map = L.map(mapContainer, {
      center: [25, 30],
      zoom: 2,
      minZoom: 0,
      scrollWheelZoom: true,
      zoomControl: true,
      maxBounds: worldBounds,
      maxBoundsViscosity: 1.0,
      worldCopyJump: false,
    })
    this.map = map

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
      noWrap: true,
      bounds: worldBounds,
      className: 'colored-global-map',
    }).addTo(map)

    L.polyline(this.routeCoords, { color: '#0F172A', weight: 5, opacity: 0.12 }).addTo(map)
    L.polyline(this.routeCoords, { color: '#22C55E', weight: 4, opacity: 0.82, dashArray: '16 12', className: 'route-animated' }).addTo(map)

    this.stops.forEach((stop) => {
      const marker = L.marker(stop.latlng, {
        icon: createStopIcon(stop.icon, stop.color),
        title: stop.stage,
      })
        .addTo(map)
        .on('click', () => this.select(stop))
      this.markers.push(marker)
    })

    map.fitBounds(routeBounds.pad(0.18), { maxZoom: 3 })
    setTimeout(() => this.map?.invalidateSize(), 80)

    window.addEventListener('resize', this.onWindowResize)
    window.addEventListener('orientationchange', this.onWindowResize)
  }

  private refitOnResize() {
    if (this.resizeTimer) clearTimeout(this.resizeTimer)
    this.resizeTimer = setTimeout(() => {
      if (!this.map || this.selected) return
      this.map.invalidateSize()
      const routeBounds = L.latLngBounds(this.routeCoords)
      this.map.fitBounds(routeBounds.pad(0.18), { maxZoom: 3 })
    }, 200)
  }

  select(stop: JourneyStopDTO) {
    this.selected = stop
    setTimeout(() => this.map?.invalidateSize(), 320)
  }

  close() {
    this.selected = null
    setTimeout(() => this.map?.invalidateSize(), 320)
  }

  ngOnDestroy() {
    this.destroyMap()
  }

  private destroyMap() {
    window.removeEventListener('resize', this.onWindowResize)
    window.removeEventListener('orientationchange', this.onWindowResize)
    if (this.resizeTimer) clearTimeout(this.resizeTimer)
    this.markers = []
    this.map?.remove()
    this.map = null
  }
}
