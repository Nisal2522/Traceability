import { Component } from '@angular/core'
import { TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { StopDetailDTO } from '../../../../core/models/StopDetailDTO'

@Component({
  selector: 'app-production-info',
  standalone: false,
  templateUrl: './production-info.component.html',
  styleUrl: './production-info.component.scss',
})
export class ProductionInfoComponent {
  rows: StopDetailDTO[]

  constructor(private data: TraceabilityDataService) {
    this.rows = this.data.getProductionRows()
  }
}
