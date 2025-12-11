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


  ngOnInit() {}

}

