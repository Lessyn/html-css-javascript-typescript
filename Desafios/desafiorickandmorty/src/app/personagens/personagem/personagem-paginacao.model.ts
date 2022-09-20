import { NavigationExtras } from "@angular/router";

export interface PersonagemPaginacaoModel{
 count: number;
 pages: number;
 next: string;
 prev: string;
}