import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core'
import L from 'leaflet'
import { faIconClasses } from '../../../../core/fa-icons'
import { PRIMARY, PRIMARY_LIGHT, TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { JourneyStopDTO } from '../../../../core/models/JourneyStopDTO'

function createStopIcon(iconName: string, color: string) {
  return L.divIcon({
    html: `<div style="
      width:36px;height:36px;border-radius:50% 50% 50% 0;
      background:${color};border:2.5px solid white;
      box-shadow:0 2px 8px rgba(0,0,0,0.25);
      display:flex;align-items:center;justify-content:center;
      transform:rotate(-45deg);cursor:pointer;
    "><i class="${faIconClasses(iconName)}" style="transform:rotate(45deg);color:white;font-size:14px" aria-hidden="true"></i></div>`,
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
