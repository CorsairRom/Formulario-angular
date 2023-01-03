import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaaracteristicasEmpleadoCComponent } from './caaracteristicas-empleado-c/caaracteristicas-empleado-c.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaaracteristicasEmpleadoCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
