import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PhoneVerificationComponent } from './phone-verification/phone-verification.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  loading: any;

  constructor(
    private modalContoller: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalContoller.dismiss({
      dismissed: true
    });
  }

  async opePhoneVerificationModal() {
    const modal = await this.modalContoller.create({
      component: PhoneVerificationComponent
    });

    await modal.present();
  }

}
