import { Component, OnInit, ViewChildren } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starter-guide',
  templateUrl: './starter-guide.page.html',
  styleUrls: ['./starter-guide.page.scss'],
})
export class StarterGuidePage implements OnInit {

  @ViewChildren('slides') slides: IonSlides;
  selectSlide: any;
  continue: any;
  skip: any;

  constructor(private router: Router) { }

  ionSlideChange(slides) {
    this.selectSlide = slides;

    slides.getActiveIndex().then(
      (slidesIndex) => {
        if (slidesIndex === 2) {
          this.continue = true;
          this.skip = false;
        } else {
          this.continue = false;
          this.skip = true;
        }
      }
    );
  }


  ngOnInit() {
    this.continue = false;
    this.skip = true;
  }

  signIn() {
    this.router.navigateByUrl('/sign-in');
  }
}
