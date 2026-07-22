import { Component } from '@angular/core'
import { TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { FaqItemDTO } from '../../../../core/models/FaqItemDTO'

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  items: FaqItemDTO[]
  openIdx: number | null = null

  constructor(private data: TraceabilityDataService) {
    this.items = this.data.getFaqItems()
  }

  toggle(i: number) {
    this.openIdx = this.openIdx === i ? null : i
  }
}
