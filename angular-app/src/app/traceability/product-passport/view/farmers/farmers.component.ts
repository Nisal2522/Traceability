import { Component } from '@angular/core'
import { PRIMARY, PRIMARY_LIGHT, TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { FarmerDTO } from '../../../../core/models/FarmerDTO'

@Component({
  selector: 'app-farmers',
  standalone: false,
  templateUrl: './farmers.component.html',
  styleUrl: './farmers.component.scss',
})
export class FarmersComponent {
  farmers: FarmerDTO[]
  readonly PRIMARY_LIGHT = PRIMARY_LIGHT
  readonly PRIMARY = PRIMARY

  constructor(private data: TraceabilityDataService) {
    this.farmers = this.data.getFarmers()
  }
}
