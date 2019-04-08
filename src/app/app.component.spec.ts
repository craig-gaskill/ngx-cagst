import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AppMaterialModule} from './app-material.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppMaterialModule,
        NoopAnimationsModule
      ],
      declarations: [
        AppComponent,
        NavigationComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should have the navigation component', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('ngx-cagst');
  // });

  it('should have the navigation component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('cagst-navigation').toBeTruthy());
  });
});
