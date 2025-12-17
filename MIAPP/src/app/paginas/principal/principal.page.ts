import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';
import { MasComponent } from 'src/app/componentes/mas/mas.component';
import { ModalController } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [HttpClientModule, IonContent, CommonModule, FormsModule,HeaderGlobalComponent, FooterGlobalComponent, NgFor]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalPage implements OnInit {
  imagenesCarrusel = [
  'assets/img/banner1.jpg',
  'assets/img/banner2.jpg',
  
];

slideOpts = { 
  initialSlide: 0, 
  speed: 600, 
  autoplay: { delay: 3000 }, 
  loop: true };
   
  productos: any[]=[];
  productosfiltrados: any[]= [];
  categoria: any[]=[];
   
   constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.cargarProductos();
    this.cargarCategorias();
  }

mostrarTodos() {
  this.productosfiltrados = [...this.productos];
}
  cargarCategorias(){
     this.http.get('assets/BD/categoria.json')
     .subscribe((data: any) => {
      this.categoria =data;
     });
  }

  filtrarPorSubcategoria(nombre:string ){
      this.productosfiltrados 
      = this.productos.filter(p =>p.subcategoria === nombre)
  }


  cargarProductos(){
     this.http.get('assets/BD/productos.json')
     .subscribe((data: any) => {this.productos = data;
      this.productosfiltrados = [...this.productos];
     } );
  }


  irvermas(producto: any){
    this.router.navigate(['/vermas'],  { queryParams:  producto });
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


 async verimagengrande(producto: any){
    const modal = await this.modalCtrl.create({
           component: MasComponent, 
           componentProps: { imagen: producto.imagen, 
            titulo: producto.titulo },
            cssClass: 'estilo-modal'
    });
    await modal.present();
}


}