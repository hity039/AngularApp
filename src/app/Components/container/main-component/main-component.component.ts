import { Component } from '@angular/core';
import { TopHeaderComponent } from "../../top-header/top-header.component";
import { HeaderComponent } from "../../header/header.component";
import { ConatinerComponent } from "../container.component";

@Component({
    selector: 'app-main-component',
    standalone: true,
    templateUrl: './main-component.component.html',
    styleUrl: './main-component.component.css',
    imports: [TopHeaderComponent, HeaderComponent, ConatinerComponent]
})
export class MainComponentComponent {

}
