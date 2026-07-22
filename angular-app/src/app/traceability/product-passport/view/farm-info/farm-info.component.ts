import { Component } from '@angular/core'
import { TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { StopDetailDTO } from '../../../../core/models/StopDetailDTO'

@Component({
  selector: 'app-farm-info',
  standalone: false,
  templateUrl: './farm-info.component.html',
  styleUrl: './farm-info.component.scss',
})
export class FarmInfoComponent {
  details: StopDetailDTO[]
  practices: string[]
  photos: string[]

  constructor(private data: TraceabilityDataService) {
    this.details = this.data.getFarmDetails()
    this.practices = this.data.getFarmPractices()
    this.photos = this.data.getFarmPhotos()
  }
}
