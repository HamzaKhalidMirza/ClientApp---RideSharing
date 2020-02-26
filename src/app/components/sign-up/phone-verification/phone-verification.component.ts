import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmailComponent } from '../email/email.component';

@Component({
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.component.html',
  styleUrls: ['./phone-verification.component.scss'],
})
export class PhoneVerificationComponent implements OnInit {

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

  async openEmailModal() {
    const modal = await this.modalController.create({
      component: EmailComponent
    });

    await modal.present();
  }

}
