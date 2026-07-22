import { Component } from '@angular/core'
import { PRIMARY, TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { GalleryItemDTO } from '../../../../core/models/GalleryItemDTO'

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  items: GalleryItemDTO[]
  active = 0
  readonly PRIMARY = PRIMARY

  constructor(private data: TraceabilityDataService) {
    this.items = this.data.getGalleryItems()
  }

  get activeItem(): GalleryItemDTO {
    return this.items[this.active]
  }

  setActive(i: number) {
    this.active = i
  }
}
