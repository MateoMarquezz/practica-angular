import { createReducer, on } from "@ngrx/store";
import {logIn, logOut} from "../actions/login.actions"
import { LoginState } from "../states/login.state";


export const initialState:LoginState = {
    token: sessionStorage.getItem("token")??"",
    username: sessionStorage.getItem("user")??"",
    password: sessionStorage.getItem("pass")??"",
}

export const LoginReducer = createReducer(
    initialState,
    on(logIn,(state,{loginProps})=>{
        return {
            ...state,
            username: loginProps.nombre,
            password: loginProps.constrasenia
        }
    })
)