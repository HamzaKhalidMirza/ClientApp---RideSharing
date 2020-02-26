import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async openProfileModal() {
    const modal = await this.modalController.create({
      component: ProfileComponent
    });

    await modal.present();
  }

}
