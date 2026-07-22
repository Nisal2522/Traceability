import { Component } from '@angular/core'
import { TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { SustainabilityMetricDTO } from '../../../../core/models/SustainabilityMetricDTO'

@Component({
  selector: 'app-sustainability',
  standalone: false,
  templateUrl: './sustainability.component.html',
  styleUrl: './sustainability.component.scss',
})
export class SustainabilityComponent {
  metrics: SustainabilityMetricDTO[]

  constructor(private data: TraceabilityDataService) {
    this.metrics = this.data.getSustainabilityMetrics()
  }
}
