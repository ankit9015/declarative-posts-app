import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './couter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './couter/counter-buttons/counter-buttons.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PostsComponent, CounterComponent, CounterOutputComponent, CounterButtonsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
