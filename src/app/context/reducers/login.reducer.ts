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
    on(logIn,(state,{username,password})=>{
        sessionStorage.setItem("user",username)
        sessionStorage.setItem("pass",password)
        return {
            ...state,
            username: username,
            password: password
        }
    })
)
