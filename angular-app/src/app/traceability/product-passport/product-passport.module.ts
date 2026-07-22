import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LucideAngularModule } from 'lucide-angular'
import { APP_ICONS } from '../../core/icons'
import { SharedModule } from '../../shared/shared.module'
import { ProductPassportRoutingModule } from './product-passport-routing.module'
import { ProductPassportComponent } from './product-passport.component'
import { HeroComponent } from './view/hero/hero.component'
import { QuickStatsComponent } from './view/quick-stats/quick-stats.component'
import { ProductJourneyComponent } from './view/product-journey/product-journey.component'
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

@NgModule({
  imports: [CommonModule, SharedModule, LucideAngularModule.pick(APP_ICONS), ProductPassportRoutingModule],
  declarations: [
    ProductPassportComponent,
    HeroComponent,
    QuickStatsComponent,
    ProductJourneyComponent,
    FarmInfoComponent,
    ProductionInfoComponent,
    LogisticsComponent,
    ImportDistributionComponent,
    CertificationsComponent,
    SustainabilityComponent,
    NutritionComponent,
    QualityComponent,
    GalleryComponent,
    FarmersComponent,
    PassportComponent,
    FaqComponent,
  ],
})
export class ProductPassportModule {}
