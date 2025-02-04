import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ChildComponentComponent } from './child-component/child-component.component'
import { FormsModule } from '@angular/forms'
import { LabelkaComponent } from './labelka/labelka.component'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    LabelkaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
