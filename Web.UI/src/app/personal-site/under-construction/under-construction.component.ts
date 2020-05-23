import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {

  public bricks = Array<number>(100).fill(100).map((x,i)=> i);
  private mouseOverChecker: any;
  public shakeClass = '';

  set mouseOver(value: boolean) {
    if(value){
        this.shakeClass = this.shakeClass === '' ? 'shake--low' : this.shakeClass;
        this.mouseOverChecker = setInterval(() => {
          this.shakeClass = this.shakeClass === 'shake--low' ? 'shake--medium' : 'shake--high';
        }, 2000);
    }
    else {
      clearInterval(this.mouseOverChecker);
    }
  }

  constructor() {
  }

  ngOnInit() {
  }
}
