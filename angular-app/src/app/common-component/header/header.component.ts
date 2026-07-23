import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FaIconComponent } from '../../shared/component/fa-icon/fa-icon.component'
import { PRIMARY, PRIMARY_LIGHT } from '../../core/service/traceability/traceability-data.service'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly PRIMARY = PRIMARY
  readonly PRIMARY_LIGHT = PRIMARY_LIGHT
}
