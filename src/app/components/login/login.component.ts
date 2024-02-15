import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../context/store/app.state';
import { logIn } from '../../context/actions/login.actions';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, MatInputModule,MatFormFieldModule,FormsModule,MatButtonModule,MatDividerModule,MatCheckboxModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private store:Store<AppState>){}
  Login(){
    this.store.dispatch(logIn({username:"test",password:"test2"}))
    // this.authService.Login().subscribe(
    //   (data:any)=>{
    //     console.log(data)
    //   }
    // )
  }
}
