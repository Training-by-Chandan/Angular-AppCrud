import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'div[app-btn-default]',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  
  ButtonTile = "Default Button";
  
  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
