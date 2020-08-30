import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { LayoutComponent } from './layout/layout.component';
import { AddTruckModalComponent } from './components/add-truck-modal/add-truck-modal.component';
import { DeleteTruckModalComponent } from './components/delete-truck-modal/delete-truck-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackListComponent,
    LayoutComponent,
    AddTruckModalComponent,
    DeleteTruckModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvquCDRWvlZ2UCHtxAlNA3-M2_JRqd4mo'
    }),
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddTruckModalComponent
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
