
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./MaterialModule";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {
//   MapModule,
//   MapAPILoader,
//   MarkerTypeId,
//   WindowRef,
//   DocumentRef,
//   MapServiceFactory,
//   BingMapAPILoaderConfig,
//   BingMapAPILoader,
//   GoogleMapAPILoader,
//   GoogleMapAPILoaderConfig,
//   IBox,
//   IMarkerIconInfo,
//   IMapOptions,
// } from 'angular-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FlexCssComponent } from './flex-css/flex-css.component';
import { JustifyContentComponent } from './flex-css/justify-content/justify-content.component';
import { TaskListAssignment1Component } from './task-list-assignment1/task-list-assignment1.component';
import { TaskDetailsComponent } from './task-list-assignment1/task-details/task-details.component';
import { TaskAboutComponent } from './task-list-assignment1/task-about/task-about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FlexCssComponent,
    JustifyContentComponent,
    TaskListAssignment1Component,
    TaskDetailsComponent,
    TaskAboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    // MapModule.forRoot(),
    // MapAPILoader,
    // MarkerTypeId,
    // IMapOptions,
    // IBox,
    // IMarkerIconInfo,
    // WindowRef,
    // DocumentRef,
    // MapServiceFactory,
    // BingMapAPILoaderConfig,
    // BingMapAPILoader,
    // GoogleMapAPILoader,
    // GoogleMapAPILoaderConfig


  ],
  providers: [
    // {
    //   provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory,
    
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export function MapServiceProviderFactory(){
//   let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
//   bc.apiKey ="..."; // your bing map key
//   bc.branch = "experimental"; 
//       // to use the experimental bing brach. There are some bug fixes for
//       // clustering in that branch you will need if you want to use 
//       // clustering.
//   return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
// }