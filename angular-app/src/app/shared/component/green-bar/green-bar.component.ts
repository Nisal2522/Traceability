import { Component, Input } from '@angular/core'
import { PRIMARY } from '../../../core/service/traceability/traceability-data.service'

@Component({
  selector: 'app-green-bar',
  standalone: false,
  templateUrl: './green-bar.component.html',
  styleUrl: './green-bar.component.scss',
})
export class GreenBarComponent {
  @Input({ required: true }) pct!: number
  readonly PRIMARY = PRIMARY
}
