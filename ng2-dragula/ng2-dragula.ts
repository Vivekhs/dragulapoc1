import { NgModule } from '@angular/core';
import { DragulaDirective } from './dragula.directive.ts';
import { DragulaService } from './dragula.provider.ts';

export * from './dragula.provider.ts';
export * from './dragula.directive.ts';

@NgModule({
  exports: [DragulaDirective],
  declarations: [DragulaDirective],
  providers: [DragulaService]
})
export class DragulaModule {
}
