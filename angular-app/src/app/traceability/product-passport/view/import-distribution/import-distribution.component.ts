import { Component } from '@angular/core'
import { TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { StopDetailDTO } from '../../../../core/models/StopDetailDTO'

@Component({
  selector: 'app-import-distribution',
  standalone: false,
  templateUrl: './import-distribution.component.html',
  styleUrl: './import-distribution.component.scss',
})
export class ImportDistributionComponent {
  rows: StopDetailDTO[]

  constructor(private data: TraceabilityDataService) {
    this.rows = this.data.getImportRows()
  }
}
