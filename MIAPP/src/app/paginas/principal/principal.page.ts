import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from '../componentes/header-global/header-global.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderGlobalComponent]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalPage implements OnInit {
  productos = [
    {
      id: 1,
      titulo: "Enterizo Azul",
      precio:50,
      descripcion:"Enterizo Azul",
      imagen:"assets/img/Azul.jpg"
    },
    {
      id: 2,
      titulo: "Vestido",
      precio:60,
      descripcion:"Vestido Café",
      imagen:"assets/img/Cafe.jpg"
    },
    {
      id: 3,
      titulo: "Conjunto",
      precio:60,
      descripcion:"Conjunto Amarillo",
      imagen:"assets/img/Pantalonamarillo.jpg"
    },
    {
      id: 4,
      titulo: "Conjunto",
      precio:60,
      descripcion:"Conjunto Plomo",
      imagen:"assets/img/Plomooscuro.jpg"
    },
    {
      id: 5,
      titulo: "Traje",
      precio:65,
      descripcion:"Traje Oliva",
      imagen:"assets/img/Oliva.jpg"
    },
    {
      id: 6,
      titulo: "Traje",
      precio:65,
      descripcion:"Traje Aguamarina",
      imagen:"assets/img/Verdeagua.jpg"
    },
    {
      id: 7,
      titulo: "Dress Rosado",
      precio:60,
      descripcion:"Vestido Rosado con corte clásico",
      imagen:"assets/img/Rosado.jpg"
    },
    {
      id: 8,
      titulo: "Dress Rojo",
      precio:65,
      descripcion:"Vestido Rojo con falda de arandeles y corte asimétrico",
      imagen:"assets/img/Rojo.jpg"
    },
    {
      id: 9,
      titulo: "Dress Celeste",
      precio:60,
      descripcion:"Vestido Celeste con mangas largas y estilo campana",
      imagen:"assets/img/Celeste.jpg"
    },
    {
      id: 10,
      titulo: "Dress Negro",
      precio:65,
      descripcion:"Vestido Negro con corte corazón",
      imagen:"assets/img/Vestidonegro.jpg"
    }

  ] 
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  irvermas(producto:any){
    this.router.navigate(['/vermas'], { queryParams: producto });
  }

}