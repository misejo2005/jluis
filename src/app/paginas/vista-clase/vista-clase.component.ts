import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-clase',
  templateUrl: './vista-clase.component.html',
  styleUrls: ['./vista-clase.component.css']
})
export class VistaClaseComponent implements OnInit {

  index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  siguiente() {
    this.index++;
  }

}
