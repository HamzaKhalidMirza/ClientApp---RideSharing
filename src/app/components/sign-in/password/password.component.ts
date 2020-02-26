import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {

  loading: any;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismiss: true,
      data: 'Not-Empty'
    });
  }

  password() {
    this.modalController.dismiss({
      dismiss: true,
      data: 'Empty'
    });
  }
}
