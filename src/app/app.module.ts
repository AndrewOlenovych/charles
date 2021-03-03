import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwiperModule } from "swiper/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourceRegistryService } from './core/services/resource-registry.service';
import { LatestLoadsComponent } from './main/latest-loads/latest-loads.component';

import { EnvironmentService } from './core';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { PartnerComponent } from './main/partner/partner.component';
import { FeedbackComponent } from './main/feedback/feedback.component';
import { AutocompleteComponent } from './shared/components/autocomplete/autocomplete.component';


@NgModule({
  declarations: [
    AppComponent,
    LatestLoadsComponent,
    AboutUsComponent,
    PartnerComponent,
    FeedbackComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FlexModule,
    SwiperModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule, 
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
  ]
})
export class AppModule implements DoBootstrap {

  constructor(
      private resourceRegistryService: ResourceRegistryService,
      private environmentService: EnvironmentService) {
      this.registerSvgIcons();
  }

  public ngDoBootstrap(app: ApplicationRef): void {
      this.environmentService.currentEnvironment$.subscribe(() => {
          const componentElement = document.createElement('app');
          document.body.appendChild(componentElement);
          app.bootstrap(AppComponent);
      });
  }

  private registerSvgIcons(): void {
      this.registerSvgIcon('language');
      this.registerSvgIcon('arrow');
      this.registerSvgIcon('main-logo');
      this.registerSvgIcon('globe');
      this.registerSvgIcon('arrow-right');
      this.registerSvgIcon('route-fill');
      this.registerSvgIcon('map-pin-user-fill');
      this.registerSvgIcon('search-icon');
      this.registerSvgIcon('notice');
      this.registerSvgIcon('phone');
      this.registerSvgIcon('email');
      this.registerSvgIcon('award-fill');
      this.registerSvgIcon('global-fill');
      this.registerSvgIcon('map-pin-time-fill');
      this.registerSvgIcon('service-fill');
      this.registerSvgIcon('map-pin');
      this.registerSvgIcon('mail');
      this.registerSvgIcon('phone-call');
      this.registerSvgIcon('transport-manager-1');
      this.registerSvgIcon('transport-manager-2');

  }

  private registerSvgIcon(iconName: string): void {
      this.resourceRegistryService.registerSvgIcon('icons', iconName);
  }
}
