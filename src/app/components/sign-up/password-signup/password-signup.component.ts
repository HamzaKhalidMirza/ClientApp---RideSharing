import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-password-signup',
  templateUrl: './password-signup.component.html',
  styleUrls: ['./password-signup.component.scss'],
})
export class PasswordSignupComponent implements OnInit {

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

}
