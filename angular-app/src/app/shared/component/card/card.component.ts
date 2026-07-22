import { Component, Input } from '@angular/core'
import { SHADOW_SM } from '../../../core/service/traceability/traceability-data.service'

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() className = ''
  @Input() extraStyle = ''
  readonly SHADOW_SM = SHADOW_SM
}
