import { Component } from '@angular/core'
import { PRIMARY, PRIMARY_LIGHT, TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { StopDetailDTO } from '../../../../core/models/StopDetailDTO'

const TRUST_LINE = [
  { icon: 'link', label: 'Blockchain Verified' },
  { icon: 'tag', label: 'GS1 Compatible' },
  { icon: 'clipboard-list', label: 'ISO 22000' },
]

const DETAIL_ICONS: Record<string, string> = {
  'Batch Number': 'hash',
  Manufacturing: 'calendar-days',
  'Best Before': 'calendar-clock',
  'Net Weight': 'package',
  'Country of Origin': 'map-pin',
  Category: 'shapes',
}

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  details: StopDetailDTO[]
  trustLine = TRUST_LINE
  readonly PRIMARY = PRIMARY
  readonly PRIMARY_LIGHT = PRIMARY_LIGHT

  constructor(private data: TraceabilityDataService) {
    this.details = this.data.getHeroDetails()
  }

  detailIcon(label: string): string {
    return DETAIL_ICONS[label] ?? 'info'
  }
}
