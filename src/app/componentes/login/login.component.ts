import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  loginError: string = '';

  ulogged: string = '';

  @Output() close = new EventEmitter();
  constructor(
    private router: Router,
    private loginService: UsuarioService,
    private route: ActivatedRoute,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.ulogged = this.loginService.getLoggedUser();
  }

  login() {
    const user = { username: this.username, password: this.password };
    this.loginService.login(user).subscribe((data) => {
      if (data == null) {
        this.loginError = 'Error!!!';
      } else {
        this.loginError = '';
        this.loginService.setToken(data.id_user);
        this.ulogged = this.loginService.getLoggedUser();
        this.close.emit();
      }
    });
  }

  loginOff() {
    this.loginService.deleteToken();
    console.log('HOlaaa' + this.ulogged);
    this.ulogged = '';
    console.log('HOlaaa' + this.ulogged);
    this.close.emit();
  }

  clickClose() {
    this.close.emit();
  }
}
