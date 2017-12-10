Import the dragula styles in index.html

Import the dragula script by config.js. Add to map.

Normally we'd import ng2-dragula same way but it isn't working with angular2.1.0
so download it and import as a local module. Problem is with the dependencies 
being set too low but maybe also this issue with Plunker and file extensions not
resolving?

Plunker doesn't resolve imports that omit file extensions, so update the 
ng2-dragula module and directive, change dragula.directive and dragula.provider
to dragula.directive.ts and dragula.provider.ts
