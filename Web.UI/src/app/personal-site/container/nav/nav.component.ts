import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  links: Array<{ title: string, path: string }>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.links = this.activatedRoute.routeConfig.children
      .filter(route => route.data)
      .map(route => { return {title: route.data.title, path: route.path} })
  }

}
