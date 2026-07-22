import { Component } from '@angular/core'
import { PRIMARY, TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { StopDetailDTO } from '../../../../core/models/StopDetailDTO'
import { PassportTimelineStepDTO } from '../../../../core/models/PassportTimelineStepDTO'

@Component({
  selector: 'app-passport',
  standalone: false,
  templateUrl: './passport.component.html',
  styleUrl: './passport.component.scss',
})
export class PassportComponent {
  rows: StopDetailDTO[]
  timeline: PassportTimelineStepDTO[]
  readonly PRIMARY = PRIMARY

  constructor(private data: TraceabilityDataService) {
    this.rows = this.data.getPassportRows()
    this.timeline = this.data.getPassportTimeline()
  }
}
