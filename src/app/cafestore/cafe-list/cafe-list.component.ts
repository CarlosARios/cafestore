import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafestoreService } from '../cafestore.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {


  cafes: Array<Cafe> = [];
  constructor(private cafestoreService: CafestoreService) { }

  getCafes(): void {
    this.cafestoreService.getCafes().subscribe((cafes) => 
    {this.cafes = cafes});
    
  }

  ngOnInit() {
    this.getCafes();
  }

}
