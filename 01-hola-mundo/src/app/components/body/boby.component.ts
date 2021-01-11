import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {

  mostrar:boolean = true;

  frase: any = {
    mensaje: 'Un gran poder',
    autor: 'Parker'
  }

  personajes: string[] = ['Percy', 'Luis', 'Leon']

}
