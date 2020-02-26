import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GeneralTopicsComponent } from './general-topics/general-topics.component';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async openGeneralTopicsModal() {
    const modal = await this.modalController.create({
      component: GeneralTopicsComponent
    });

    await modal.present();
  }

}
