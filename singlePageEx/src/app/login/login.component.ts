import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auths/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username?: string
  password?: string
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    const success = this.authService.login(this.username, this.password)
    if (success)
      this.router.navigate(['/'])
  }
}
