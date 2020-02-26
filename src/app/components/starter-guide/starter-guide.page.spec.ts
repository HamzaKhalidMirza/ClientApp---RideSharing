import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarterGuidePage } from './starter-guide.page';

describe('StarterGuidePage', () => {
  let component: StarterGuidePage;
  let fixture: ComponentFixture<StarterGuidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterGuidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarterGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
