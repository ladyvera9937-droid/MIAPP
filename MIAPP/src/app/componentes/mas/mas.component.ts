import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
@Component({
  selector: 'app-mas',
  templateUrl: './mas.component.html',
  styleUrls: ['./mas.component.scss'],
})
export class MasComponent  implements OnInit {
  @Input() imagen: string = '';
  @Input() titulo: string = '';

  constructor( 
    private modalCtrl: ModalController,
  ) { }
  async verimagengrande(producto: any){
    const modal = await this.modalCtrl.create({
           component: MasComponent, 
           componentProps: { imagen: producto.imagen, 
            titulo: producto.titulo },
            cssClass: 'estilo-modal'
    });
    await modal.present();
}

  ngOnInit() {}

}

