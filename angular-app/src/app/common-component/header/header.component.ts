import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { LucideAngularModule } from 'lucide-angular'
import { PRIMARY, PRIMARY_LIGHT } from '../../core/service/traceability/traceability-data.service'

const LANGS = ['EN', 'SI', 'ZH', 'ES', 'FR']

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  lang = 'EN'
  langs = LANGS
  readonly PRIMARY = PRIMARY
  readonly PRIMARY_LIGHT = PRIMARY_LIGHT
}
