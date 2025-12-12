import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import {IonContent, IonTitle,IonButton,IonHeader, IonToolbar} from '@ionic/angular/standalone'

@Component({
  selector: 'app-mas',
  templateUrl: './mas.component.html',
  styleUrls: ['./mas.component.scss'],
   standalone: true,
  imports: [IonContent, CommonModule,IonTitle, IonButton, IonHeader,  IonToolbar]
})
export class MasComponent  implements OnInit {
  @Input() imagen: string = '';
  @Input() titulo: string = '';

  constructor( 
    private modalCtrl: ModalController,
  ) { }


  ngOnInit() {}
 cerrarModal() {
    this.modalCtrl.dismiss();
  }
}


