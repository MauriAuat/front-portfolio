import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  loginError: string = '';

  @Output() close = new EventEmitter();
  constructor(
    private router: Router,
    private loginService: UsuarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  login() {
    const user = { username: this.username, password: this.password };
    this.loginService.login(user).subscribe((data) => {
      if (data == null) this.loginError = 'Error!!!';
      else {
        this.loginError = '';
        this.loginService;
      }
    });
  }
  clickClose() {
    this.close.emit();
  }
}
