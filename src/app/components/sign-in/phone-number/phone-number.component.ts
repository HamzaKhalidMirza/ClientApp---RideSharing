import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PasswordComponent } from '../password/password.component';
import { SignInPage } from '../sign-in.page';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
})
export class PhoneNumberComponent implements OnInit {

  loading: any;
  name: any;

  constructor(
    private modalContoller: ModalController
  ) { }

  ngOnInit() {
    this.name = 'Hello';
    console.log(this.name);
  }

  dismiss() {
    this.modalContoller.dismiss({
      dismiss: true,
      data: 'Not-Empty'
    });
  }

  async openPasswordModal() {
    const modal = await this.modalContoller.create({
      component: PasswordComponent,
      componentProps: {
        firstName: 'Hamza',
        homeRef: this
      }
    });

    modal.onDidDismiss().then(data => {

      if (data.data && data.data.data === 'Empty') {

        setTimeout(() => {
          this.modalContoller.dismiss({
            dismiss: true,
            data: ''
          });
        }, 200);
        } else {
        this.dismiss();
      }
      });

    await modal.present();
  }


}
