import { Component } from '@angular/core'
import { PRIMARY, PRIMARY_LIGHT, SHADOW_SM, TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { QuickStatDTO } from '../../../../core/models/QuickStatDTO'

@Component({
  selector: 'app-quick-stats',
  standalone: false,
  templateUrl: './quick-stats.component.html',
  styleUrl: './quick-stats.component.scss',
})
export class QuickStatsComponent {
  stats: QuickStatDTO[]
  readonly SHADOW_SM = SHADOW_SM
  readonly PRIMARY = PRIMARY
  readonly PRIMARY_LIGHT = PRIMARY_LIGHT

  constructor(private data: TraceabilityDataService) {
    this.stats = this.data.getQuickStats()
  }
}
