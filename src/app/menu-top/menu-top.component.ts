import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hellow world');
  }

}
