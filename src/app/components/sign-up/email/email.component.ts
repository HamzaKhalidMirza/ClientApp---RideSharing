import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PasswordSignupComponent } from '../password-signup/password-signup.component';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {

  loading: any;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async openPasswordSignupModal() {
    const modal = await this.modalController.create({
      component: PasswordSignupComponent
    });

    await modal.present();
  }

}
