import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageService } from './image/shared/image.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
