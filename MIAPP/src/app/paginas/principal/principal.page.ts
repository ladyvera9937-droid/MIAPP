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
    {
      id: 11,
      titulo: "Chaqueta de sastre",
      precio:75,
      descripcion:"Chaqueta larga y falda corta amarilla",
      imagen:"assets/img/Guantes.jpg"
    },
    {
      id: 12,
      titulo: "Corset",
      precio:65,
      descripcion:"Conjunto de chaqueta, short y corset",
      imagen:"assets/img/Corset.jpg"
    },
    {
      id: 13,
      titulo: "Falda Animal print",
      precio:40,
      descripcion:"Falda larga de animal print",
      imagen:"assets/img/Animalprint.jpg"
    },
    {
      id: 14,
      titulo: "Dress Cafe",
      precio:60,
      descripcion:"Vestido café con la parte superior formal",
      imagen:"assets/img/Cafeclaro.jpg"
    },
    {
      id: 15,
      titulo: "Abrigo",
      precio:35,
      descripcion:"Abrigo estilo arcoíris",
      imagen:"assets/img/Arcoiris.jpg"
    },
    {
      id: 16,
      titulo: "Terno Lila",
      precio:65,
      descripcion:"Terno de dos piezas color lila estilo semiformal",
      imagen:"assets/img/Lila.jpg"
    },
    {
      id: 17,
      titulo: "Blusa",
      precio:25,
      descripcion:"Blusa azul de mangas largas con abertura en el cuello",
      imagen:"assets/img/Jean.jpg"
    },
    {
      id: 18,
      titulo: "Suéter",
      precio: 25,
      descripcion:"Suéter verde estilo strapless",
      imagen:"assets/img/Verdelimon.jpg"
    },
    {
      id: 19,
      titulo: "Pantalón",
      precio:35,
      descripcion:"Pantalón naranja estilo campana",
      imagen:"assets/img/Blusa.jpg"
    },
    {
      id: 20,
      titulo: "Terno",
      precio:65,
      descripcion:"Blusa mangas largas estilo sastre y falda asimétrica",
      imagen:"assets/img/Faldaplizada.jpg"
    },


  ] 

   productosfiltrados = [...this.productos];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  irvermas(producto:any){
    this.router.navigate(['/vermas'], { queryParams: producto});
  }

  filtrar(event: any){
     const texto = (event.target.value || '').toLowerCase().trim();

     if (texto === '') { 
        this.productosfiltrados = [...this.productos ];
        return;
     }
     this.productosfiltrados = this.productos.filter( 
      p => p.titulo.toLowerCase().includes(texto) ||
       p.descripcion.toLowerCase().includes(texto) ||
       p.precio.toString().includes(texto)
     );
}


}