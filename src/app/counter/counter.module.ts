import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';

const routes: Routes = [{ path: 'counter', component: CounterComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    RouterModule.forChild(routes),
    StoreModule.forFeature('counter', counterReducer),
  ],
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterComponent,
  ],
})
export class CounterModule {}
