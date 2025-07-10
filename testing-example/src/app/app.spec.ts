import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [
            provideZonelessChangeDetection
         ],
         declarations: [
            App
         ],
      }).compileComponents();
   });
   it('should create the app', () => {
      const fixture = TestBed.createComponent(App);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
   });
   it(`should have as title 'angular7-app'`, () => {
      const fixture = TestBed.createComponent(App);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('angular7-app');
   });
   it('should render title in a h1 tag', () => {
      const fixture = TestBed.createComponent(App);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain(
         'Welcome to angular7-app!');
   })
});