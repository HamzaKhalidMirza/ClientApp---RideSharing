import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Router, ɵangular_packages_router_router_o } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async openPhoneNumberModal() {
    const modal = await this.modalController.create({
      component: PhoneNumberComponent
    });

    modal.onDidDismiss().then(data => {

      if (data.data.data === '') {
        this.router.navigateByUrl('/dashboard');
      } else {
      }
    });

    await modal.present();
  }

  async openSignUpModal() {
    const modal = await this.modalController.create({
      component: SignUpComponent
    });

    await modal.present();
  }

}
