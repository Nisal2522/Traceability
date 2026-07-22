import { Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'
import { PRIMARY } from '../../core/service/traceability/traceability-data.service'

const TAGS = ['Digital Product Passport', 'Blockchain Verified', 'GS1 Compatible', 'ISO 22095']

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  tags = TAGS
  readonly PRIMARY = PRIMARY
}
