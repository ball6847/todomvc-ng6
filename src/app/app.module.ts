import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoDataService } from './todo-data.service';
import { TODO_SERVICE_PROVIDER } from './tokens';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: TODO_SERVICE_PROVIDER,
      useClass: TodoDataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
