import { Component } from '@angular/core'
import { PRIMARY, PRIMARY_LIGHT, TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { QualityCheckDTO } from '../../../../core/models/QualityCheckDTO'

@Component({
  selector: 'app-quality',
  standalone: false,
  templateUrl: './quality.component.html',
  styleUrl: './quality.component.scss',
})
export class QualityComponent {
  checks: QualityCheckDTO[]
  readonly PRIMARY = PRIMARY
  readonly PRIMARY_LIGHT = PRIMARY_LIGHT

  constructor(private data: TraceabilityDataService) {
    this.checks = this.data.getQualityChecks()
  }
}
