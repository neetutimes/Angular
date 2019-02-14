import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './post/post/post.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './common/modal/modal.component';
import { ModalService } from './common/service/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PostService,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
