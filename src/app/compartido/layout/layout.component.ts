import { Component } from '@angular/core';
import { CompartidoService } from '../compartido.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  userName: string = '';

  constructor(private router: Router, private compartidoService: CompartidoService,
              private cookieService: CookieService)
  {
      
  }

  ngOnInit(){
    const usuarioSesion = this.compartidoService.obtenerSesion();
    if(usuarioSesion!=null){
        this.userName = usuarioSesion.username;
    }    
  }

  cerrarSesion(){
    this.compartidoService.eliminarSesion();

    this.cookieService.delete('Authorization', '/');

    this.router.navigate(['login']);
  }

}
