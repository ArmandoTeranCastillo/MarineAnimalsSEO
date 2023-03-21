import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { HomeComponent } from "./containers/home-component";
import { HomeRoutingModule } from "./containers/home-routing.module";
import { CellphoneCasesComponent } from "./home/components/cellphonecases/cellphonecases-component";
import { CupsComponent } from "./home/components/cups/cups-component";
import { FeaturesComponent } from "./home/components/features/features-component";
import { ProductsComponent } from "./home/components/products/products-component";
import { TShirtsComponent } from "./home/components/t-shirts/t-shirts-component";
import { PublicComponent } from "./public-component";
import { PublicRoutingModule } from "./public-routing.module";
import { PublicService } from "./public-service";



@NgModule({
    imports: [
        PublicRoutingModule,
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        HomeComponent,
        PublicComponent,
        ProductsComponent,
        CupsComponent,
        TShirtsComponent,
        CellphoneCasesComponent,
        FeaturesComponent
    ],
    exports: [],
    providers: [
        PublicService
    ]
})

export class PublicModule{
    constructor() {}
}