import { Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'

const TAGS = ['Digital Product Passport', 'GS1 Compatible', 'ISO 22095']

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  tags = TAGS
}
