import { Component, Type } from '@angular/core'
import { AccordionItemDef } from '../../shared/component/accordion-panel/accordion-panel.component'
import { FarmInfoComponent } from './view/farm-info/farm-info.component'
import { ProductionInfoComponent } from './view/production-info/production-info.component'
import { LogisticsComponent } from './view/logistics/logistics.component'
import { ImportDistributionComponent } from './view/import-distribution/import-distribution.component'
import { CertificationsComponent } from './view/certifications/certifications.component'
import { SustainabilityComponent } from './view/sustainability/sustainability.component'
import { NutritionComponent } from './view/nutrition/nutrition.component'
import { QualityComponent } from './view/quality/quality.component'
import { GalleryComponent } from './view/gallery/gallery.component'
import { FarmersComponent } from './view/farmers/farmers.component'
import { PassportComponent } from './view/passport/passport.component'
import { FaqComponent } from './view/faq/faq.component'

const ACCORDION_ITEMS: AccordionItemDef[] = [
  { id: 'farm', icon: 'wheat', title: 'Farm Information', description: '10 farmers · 5 Sri Lankan districts · Karutha Kolomban · Grade A', component: FarmInfoComponent as Type<unknown> },
  { id: 'production', icon: 'factory', title: 'Production Information', description: 'Ceylon Fresh Processing · Aseptic Line 3 · HACCP · 12 May 2026', component: ProductionInfoComponent as Type<unknown> },
  { id: 'logistics', icon: 'ship', title: 'Logistics & Shipping', description: 'MSC AURORA · Colombo → Newark · 14 days · IoT cold chain', component: LogisticsComponent as Type<unknown> },
  { id: 'import', icon: 'building-2', title: 'Import & Distribution', description: 'Port of Newark · FDA cleared · ALDI DC Batavia, IL · 5 Jun 2026', component: ImportDistributionComponent as Type<unknown> },
  { id: 'certs', icon: 'award', title: 'Certifications', description: 'GlobalG.A.P. · ISO 22000 · HACCP · BRCGS · Control Union · All active', component: CertificationsComponent as Type<unknown> },
  { id: 'sustain', icon: 'leaf', title: 'Sustainability', description: '1.2 kg CO₂e · 78% renewable energy · Rain-fed · 10 families supported', component: SustainabilityComponent as Type<unknown> },
  { id: 'nutrition', icon: 'flask-conical', title: 'Nutrition & Ingredients', description: '100% Mango Puree · 60 kcal/100g · Vegan · No allergens', component: NutritionComponent as Type<unknown> },
  { id: 'quality', icon: 'check-circle-2', title: 'Quality Assurance', description: '7 inspection checkpoints · All passed · Lab-certified', component: QualityComponent as Type<unknown> },
  { id: 'gallery', icon: 'image', title: 'Media Gallery', description: 'Farm · Harvest · Factory · Packaging · Shipping · Warehouse · ALDI shelf', component: GalleryComponent as Type<unknown> },
  { id: 'farmers', icon: 'users', title: 'Meet the Farmers', description: '10 certified farmers · Kurunegala, Matale, Polonnaruwa, Anuradhapura, Dambulla', component: FarmersComponent as Type<unknown> },
  { id: 'passport', icon: 'file-text', title: 'Digital Product Passport', description: 'Blockchain-anchored record · DPP-2026-SL-MP240517 · Download PDF', component: PassportComponent as Type<unknown> },
  { id: 'faq', icon: 'help-circle', title: 'FAQ', description: 'Origin, freshness, certifications, quality verification', component: FaqComponent as Type<unknown> },
]

@Component({
  selector: 'app-product-passport',
  standalone: false,
  templateUrl: './product-passport.component.html',
  styleUrl: './product-passport.component.scss',
})
export class ProductPassportComponent {
  accordionItems = ACCORDION_ITEMS
}
