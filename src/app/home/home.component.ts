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
  public traicay2 = [
    {ten: 'táo', gia: 10,   giamgia: true},
    {ten: 'nho', gia: -15,  giamgia: false},
    {ten: 'xoài',gia: 20,   giamgia: false},
    {ten: 'ổi',  gia: -115, giamgia: true}
  ];
  constructor() { }

  public ngOnInit(): void {
    console.log('trai cay = ', this.traicay2);
  }

}
