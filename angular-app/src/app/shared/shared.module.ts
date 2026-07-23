import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FaIconComponent } from './component/fa-icon/fa-icon.component'
import { CardComponent } from './component/card/card.component'
import { BadgeComponent } from './component/badge/badge.component'
import { DetailRowComponent } from './component/detail-row/detail-row.component'
import { GreenBarComponent } from './component/green-bar/green-bar.component'
import { AccordionPanelComponent } from './component/accordion-panel/accordion-panel.component'

@NgModule({
  imports: [CommonModule, FaIconComponent],
  declarations: [CardComponent, BadgeComponent, DetailRowComponent, GreenBarComponent, AccordionPanelComponent],
  exports: [CardComponent, BadgeComponent, DetailRowComponent, GreenBarComponent, AccordionPanelComponent, FaIconComponent],
})
export class SharedModule {}
