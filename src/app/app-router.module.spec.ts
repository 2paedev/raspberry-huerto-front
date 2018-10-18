import { TestBed, fakeAsync, tick, getTestBed } from '@angular/core/testing';
import { AppRouterModule, routesAppModule } from './app-router.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedComponentsModule } from './common/components/shared-components.module';
import { Router } from '@angular/router';
import { HomeModule } from './pages/home/home.module';

describe('AppRouterModule', () => {
  let appRouterModule: AppRouterModule;

  beforeEach(() => {
    appRouterModule = new AppRouterModule();
    TestBed.configureTestingModule({
      imports: [
        SharedComponentsModule,
        AppRouterModule,
        HomeModule,
        RouterTestingModule.withRoutes(routesAppModule),
      ],
    }).compileComponents();
  });

  it('fakeAsync funciona', fakeAsync(() => {
    const promise = new Promise((result) => {
      setTimeout(result, 10);
    });
    let completed = false;
    promise.then(() => (completed = true));
    tick(50);
    expect(completed).toBeTruthy();
  }));

  it('should create the app-router module', () => {
    expect(appRouterModule).toBeTruthy();
  });

  it('should be able to navigate to `/`', fakeAsync(() => {
    const injector = getTestBed();
    const router = injector.get(Router);
    router.navigate(['/']).then(() => {
      expect(router.url).toEqual('/home');
    });
  }));

  it('should be able to navigate to `/home`', fakeAsync(() => {
    const injector = getTestBed();
    const router = injector.get(Router);
    router.navigate(['/home']).then(() => {
      expect(router.url).toEqual('/home');
    });
  }));
});
