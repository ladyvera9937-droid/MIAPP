import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent} from '@ionic/angular/standalone';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderGlobalComponent]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PreguntasPage implements OnInit {

  preguntas = [
    {
      icono: 'cart-outline', 
      titulo: '¿Cómo puedo realizar una compra?',
      respuesta: 'Puedes obtener nuestro productos visitando nuestra tienda en línea.',
    },

    {
      icono: 'shield-checkmark-outline', 
      titulo: '¿Las tallas son estándar o cómo saber mi talla? ',
      respuesta: 'No, las tallas no son estándar. Cada producto incluye su guía de medidas.',
    },

    {
      icono: 'cart-outline', 
      titulo: '¿Hacen envíos a todo el país?',
      respuesta: 'Sí, realizamos envíos a todas las provincias del país.',
    }
  
  ]

  constructor() { }

  ngOnInit() {
  }

}
