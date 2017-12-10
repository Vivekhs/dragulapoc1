//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import { DragulaModule } from '../ng2-dragula/ng2-dragula.ts';
import { DragulaService } from '../ng2-dragula/dragula.provider.ts';


@Component({
  selector: 'my-app',
  templateUrl: 'src/app.html'
})
export class App {
  
  source: any = ['a','b','c'];
  target: any = ['zz','yy','xx'];

  constructor(dragulaService: DragulaService) {
    dragulaService.setOptions('bag', {
      copy: function (el, source) {
        console.log("Element ", el);
  return el.className != 'card test';
},
accepts: function (el, target, source, sibling) {
  //console.log("my", el, target,source)
    return target.className != 'deck1'; // elements can be dropped in any of the `containers` by default
  },
    });
  }
  
}

@NgModule({
  imports: [ BrowserModule, DragulaModule ],
  declarations: [ App ],
  providers: [DragulaService],
  bootstrap: [ App ]
})
export class AppModule {}