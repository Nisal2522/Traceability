import { Component, Input } from '@angular/core'
import { faIconClasses } from '../../../core/fa-icons'

@Component({
  selector: 'app-fa-icon',
  standalone: true,
  templateUrl: './fa-icon.component.html',
  styleUrl: './fa-icon.component.scss',
})
export class FaIconComponent {
  @Input({ required: true }) name!: string
  @Input() size = 16
  @Input() color?: string
  @Input() className = ''

  get classes(): string {
    return `${faIconClasses(this.name)} ${this.className}`.trim()
  }
}
