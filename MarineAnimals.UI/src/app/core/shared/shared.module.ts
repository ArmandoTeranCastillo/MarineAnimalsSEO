import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./components/not-found-component";
import { MatCardModule } from "@angular/material/card";
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
    ],
    declarations: [
        NotFoundComponent
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
    ],
    providers: []
})

export class SharedModule{
    constructor() {}
}