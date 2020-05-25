import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-games-listing',
    templateUrl: './games-listing.component.html',
    styleUrls: ['./games-listing.component.scss']
})
export class GamesListingComponent implements OnInit {
    public games: Array<{ title: string, desc: string, icon: string, path: string }>;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.games = this.activatedRoute.parent.routeConfig.children
            .filter(route => route.data)
            .map(route => {
                return {title: route.data.title, desc: route.data.desc, icon: route.data.title, path: route.path};
            });
    }
}
