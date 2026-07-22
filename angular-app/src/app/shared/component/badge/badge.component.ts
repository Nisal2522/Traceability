import { Component, Input } from '@angular/core'
import { PRIMARY, PRIMARY_LIGHT } from '../../../core/service/traceability/traceability-data.service'

@Component({
  selector: 'app-badge',
  standalone: false,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() color = PRIMARY
  @Input() bg = PRIMARY_LIGHT
}
