import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name:String = 'Hiep';
  public age = 15;
  public traicay = ['tao','nho','xoai'];
  constructor() { }

  public ngOnInit(): void {
    console.log('trai cay = ', this.traicay);
  }

}
