import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive'
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive'
import { BetterHighlightHostBindingDirective } from './better-highlight/better-highlight-host-binding.directive'
import { UnlessDirective } from './unless/unless.directive'

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    BetterHighlightHostBindingDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    UnlessDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
