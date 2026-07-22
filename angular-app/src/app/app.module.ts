import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './common-component/header/header.component'
import { FooterComponent } from './common-component/footer/footer.component'
import { LucideAngularModule } from 'lucide-angular'
import { APP_ICONS } from './core/icons'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderComponent, FooterComponent, LucideAngularModule.pick(APP_ICONS)],
  bootstrap: [AppComponent],
})
export class AppModule {}
