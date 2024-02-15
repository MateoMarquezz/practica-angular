import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, MatInputModule,MatFormFieldModule,FormsModule,MatButtonModule,MatDividerModule,MatCheckboxModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService:AuthService){}
  Login(){
    this.authService.Login().subscribe(
      (data:any)=>{
        console.log(data)
      }
    )
  }
}
