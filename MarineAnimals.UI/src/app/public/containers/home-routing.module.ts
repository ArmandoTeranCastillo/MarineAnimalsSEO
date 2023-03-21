import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CellphoneCasesComponent } from "../home/components/cellphonecases/cellphonecases-component";
import { CupsComponent } from "../home/components/cups/cups-component";
import { FeaturesComponent } from "../home/components/features/features-component";
import { ProductsComponent } from "../home/components/products/products-component";
import { TShirtsComponent } from "../home/components/t-shirts/t-shirts-component";
import { HomeComponent } from "./home-component";


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {path: 'products', component: ProductsComponent},
            {path: 'features', component: FeaturesComponent},
            {path: 'cups', component: CupsComponent},
            {path: 'tshirts', component: TShirtsComponent},
            {path:'cellphonecases', component: CellphoneCasesComponent}
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomeRoutingModule {}