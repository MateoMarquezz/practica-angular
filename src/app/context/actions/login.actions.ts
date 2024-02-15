import { createAction ,props } from "@ngrx/store";

export const logIn = createAction('[login] abrir sesion',props<{ username:string,password:string }>());
export const logOut = createAction('[login] cerrar sesion');
