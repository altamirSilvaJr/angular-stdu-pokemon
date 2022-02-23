import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JogosComponent } from './components/jogos/jogos.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { TcgComponent } from './components/tcg/tcg.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "jogos",
        component: JogosComponent
    },
    {
        path: "tcg",
        component: TcgComponent
    },
    {
        path: "pokemon",
        component: PokemonComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }