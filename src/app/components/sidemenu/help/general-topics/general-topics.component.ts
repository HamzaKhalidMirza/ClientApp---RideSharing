import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-general-topics',
  templateUrl: './general-topics.component.html',
  styleUrls: ['./general-topics.component.scss'],
})
export class GeneralTopicsComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismiss: true,
    });
  }

}
