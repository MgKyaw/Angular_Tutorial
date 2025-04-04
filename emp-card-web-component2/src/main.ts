import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { EmpCardComponent } from './app/emp-card/emp-card.component'

createApplication({ providers: [] }).then((appRef) => {
  const empCard = createCustomElement(
     EmpCardComponent,
     { injector: appRef.injector }
  );
});
