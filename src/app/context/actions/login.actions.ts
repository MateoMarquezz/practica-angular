import { createAction ,props } from "@ngrx/store";

export const logIn = createAction('[login] abrir sesion',props<{ loginProps: any }>());
export const logOut = createAction('[login] cerrar sesion');
