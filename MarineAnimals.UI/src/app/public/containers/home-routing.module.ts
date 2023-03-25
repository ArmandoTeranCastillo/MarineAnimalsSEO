import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanteGuard } from 'src/app/vigilante.guard';
import { CellphoneCasesComponent } from '../home/components/cellphonecases/cellphonecases-component';
import { CupsComponent } from '../home/components/cups/cups-component';
import { FeaturesComponent } from '../home/components/features/features-component';
import { ProductsComponent } from '../home/components/products/products-component';
import { TShirtsComponent } from '../home/components/t-shirts/t-shirts-component';
import { HomeComponent } from './home-component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      {
        path: 'products',
        component: ProductsComponent,
        canActivate: [VigilanteGuard],
      },
      {
        path: 'features',
        component: FeaturesComponent,
        canActivate: [VigilanteGuard],
      },
      { path: 'mugs', component: CupsComponent, canActivate: [VigilanteGuard] },
      {
        path: 'tshirts',
        component: TShirtsComponent,
        canActivate: [VigilanteGuard],
      },
      {
        path: 'cellphonecases',
        component: CellphoneCasesComponent,
        canActivate: [VigilanteGuard],
      },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
