import { NgModule} from "@angular/core";
import { SharedModule } from "./shared/shared.module";
//Estructura básica para la creación de Modulos (Porciones de código)
//Esta estructura será diferente de las demás
//El modulo CoreModule se cargará al iniciar la aplicación
@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: []
})

export class CoreModule{
    constructor() {}
}