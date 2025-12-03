import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FooterGlobalComponent, IonFooter]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalPage implements OnInit {
  productos = [
    {
      id: 1,
      titulo: "Terno",
      precio:60,
      descripcion:"Terno Celeste con crop top",
      imagen:"assets/img/Ternoceleste.jpg"
    },
    {
      id: 2,
      titulo: "Vestido",
      precio:60,
      descripcion:"Vestido Café con corte asimétrico",
      imagen:"assets/img/Cafe.jpg"
    },
    {
      id: 3,
      titulo: "Conjunto",
      precio:60,
      descripcion:"Conjunto Amarillo y Blusa blanca",
      imagen:"assets/img/Pantalonamarillo.jpg"
    },
    {
      id: 4,
      titulo: "Conjunto",
      precio:60,
      descripcion:"Conjunto Plomo con blusa cuello tortuga",
      imagen:"assets/img/Plomooscuro.jpg"
    },
    {
      id: 5,
      titulo: "Traje",
      precio:65,
      descripcion:"Traje Oliva con corset",
      imagen:"assets/img/Oliva.jpg"
    },
    {
      id: 6,
      titulo: "Dress Aguamarina",
      precio:65,
      descripcion:"Traje Aguamarina estilo princesa",
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
      titulo: "Terno",
      precio:65,
      descripcion:"Terno Rojo con brilos",
      imagen:"assets/img/Ternorojo.jpg"
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
    },

  ] 

   productosfiltrados = {...this.productos};

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  irvermas(producto:any){
    this.router.navigate(['/vermas'], { queryParams: producto});
  }

  filtrar(event:any){
    const texto = (event.target.value || ''). toLowerCase(). trim();

    if (texto === ''){
       this.productosfiltrados = [...this.productos];
       return;
  }

  this.productosfiltrados = this.productos.filter( 
    p => p.titulo.toLowerCase().includes(texto) || 
     p.descripcion.toLowerCase().includes(texto) ||
     p.precio.toString().includes(texto)

    );

}


}