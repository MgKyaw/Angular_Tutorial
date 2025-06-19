import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockWithShowHideComponent } from './block-with-show-hide/block-with-show-hide.component';
import { MyTemplateRefVarSampleComponent } from './my-template-ref-var-sample/my-template-ref-var-sample.component';
import { AuthModule } from './auth/auth.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlockWithShowHideComponent, MyTemplateRefVarSampleComponent, AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
