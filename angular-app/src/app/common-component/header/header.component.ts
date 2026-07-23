import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LucideAngularModule } from 'lucide-angular'
import { PRIMARY, PRIMARY_LIGHT } from '../../core/service/traceability/traceability-data.service'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly PRIMARY = PRIMARY
  readonly PRIMARY_LIGHT = PRIMARY_LIGHT
}
