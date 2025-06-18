import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  constructor(private auth: AuthService, private router: ActivatedRoute) {}
  allEmployees: any;
  ngOnInit(): void {
    this.auth.getAllEmployees().subscribe((res) => {
      this.allEmployees = res;
      console.log(this.allEmployees);
    });
  }
}
