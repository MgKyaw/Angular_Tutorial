import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-item',
  imports: [],
  templateUrl: './view-item.component.html',
  styleUrl: './view-item.component.css'
})
export class ViewItemComponent implements OnInit{
  id: any;
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
      this.route.paramMap.subscribe(res=>{
        this.id = res.get('id');
      });
  }
}
