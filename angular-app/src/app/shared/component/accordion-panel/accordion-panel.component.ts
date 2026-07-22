import { Component, HostListener, Input, Type } from '@angular/core'
import { SHADOW_SM, PRIMARY, PRIMARY_LIGHT } from '../../../core/service/traceability/traceability-data.service'

export interface AccordionItemDef {
  id: string
  icon: string
  title: string
  description: string
  component: Type<unknown>
}

@Component({
  selector: 'app-accordion-panel',
  standalone: false,
  templateUrl: './accordion-panel.component.html',
  styleUrl: './accordion-panel.component.scss',
})
export class AccordionPanelComponent {
  @Input({ required: true }) items!: AccordionItemDef[]
  openId: string | null = null
  readonly SHADOW_SM = SHADOW_SM
  readonly PRIMARY = PRIMARY
  readonly PRIMARY_LIGHT = PRIMARY_LIGHT

  toggle(id: string) {
    this.openId = this.openId === id ? null : id
    this.syncBodyScroll()
  }

  close() {
    this.openId = null
    this.syncBodyScroll()
  }

  activeItem(): AccordionItemDef | null {
    return this.items.find((item) => item.id === this.openId) ?? null
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.openId) this.close()
  }

  private syncBodyScroll() {
    document.body.style.overflow = this.openId ? 'hidden' : ''
  }
}
