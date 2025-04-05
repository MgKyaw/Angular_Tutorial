import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockWithShowHideComponent } from './block-with-show-hide/block-with-show-hide.component';
import { MyTemplateRefVarSampleComponent } from './my-template-ref-var-sample/my-template-ref-var-sample.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlockWithShowHideComponent, MyTemplateRefVarSampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
