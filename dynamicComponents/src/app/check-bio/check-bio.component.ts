import { Component, Input } from '@angular/core';
import { AdminBioComponent } from '../admin-bio/admin-bio.component';
import { StandardBioComponent } from '../standard-bio/standard-bio.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-check-bio',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './check-bio.component.html',
  styleUrl: './check-bio.component.css'
})
export class CheckBioComponent {
  @Input() user!: {name: string, isAdmin: boolean};
  getBioComponent() { 
    console.log(this.user.isAdmin)
    return this.user.isAdmin ? AdminBioComponent : StandardBioComponent;
  }
}