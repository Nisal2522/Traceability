import { Component } from '@angular/core'
import { TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { StopDetailDTO } from '../../../../core/models/StopDetailDTO'

@Component({
  selector: 'app-nutrition',
  standalone: false,
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.scss',
})
export class NutritionComponent {
  facts: StopDetailDTO[]

  constructor(private data: TraceabilityDataService) {
    this.facts = this.data.getNutritionFacts()
  }
}
