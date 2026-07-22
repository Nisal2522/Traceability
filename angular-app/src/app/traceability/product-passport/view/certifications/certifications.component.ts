import { Component } from '@angular/core'
import { SHADOW_SM, TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { CertificationDTO } from '../../../../core/models/CertificationDTO'

@Component({
  selector: 'app-certifications',
  standalone: false,
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  certs: CertificationDTO[]
  flipped: string | null = null
  readonly SHADOW_SM = SHADOW_SM

  constructor(private data: TraceabilityDataService) {
    this.certs = this.data.getCertifications()
  }

  toggle(name: string) {
    this.flipped = this.flipped === name ? null : name
  }
}
