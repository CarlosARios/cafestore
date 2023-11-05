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
  blendcount: number = 0;
  origencount: number = 0;
  constructor(private cafestoreService: CafestoreService) { }

  getCafes(): void {
    this.cafestoreService.getCafes().subscribe((cafes) => 
    {this.cafes = cafes});
  }

  async loadData() {
    this.cafestoreService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.blendcount = this.cafes.filter(cafe => cafe.tipo.toLowerCase().includes('blend')).length;
      this.origencount = this.cafes.filter(cafe => cafe.tipo.toLowerCase().includes('café de origen')).length;
    });
  }

  ngOnInit() {
    this.loadData();
  }
  

}
