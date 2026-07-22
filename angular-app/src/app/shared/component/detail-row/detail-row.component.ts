import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-detail-row',
  standalone: false,
  templateUrl: './detail-row.component.html',
  styleUrl: './detail-row.component.scss',
})
export class DetailRowComponent {
  @Input({ required: true }) label!: string
  @Input({ required: true }) value!: string
}
