import { Component , OnInit, inject } from '@angular/core';
import { TopHeaderComponent } from "../../top-header/top-header.component";
import { HeaderComponent } from "../../header/header.component";
import { ConatinerComponent } from "../container.component";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-main-component',
    standalone: true,
    templateUrl: './main-component.component.html',
    styleUrl: './main-component.component.css',
    imports: [TopHeaderComponent, HeaderComponent, ConatinerComponent]
})
export class MainComponentComponent  implements OnInit{
    activatedRoute : ActivatedRoute = inject(ActivatedRoute);

    ngOnInit(): void {
        this.activatedRoute.fragment.subscribe(data => {
            this.jumpToFragment(data);
        });
    }
    jumpToFragment(section){
        document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
}
