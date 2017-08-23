import {Component, ElementRef, ViewChild, NgZone} from '@angular/core';
import {state, trigger, style, transition, animate} from "@angular/animations";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*creating menu animation */
  animations: [
    trigger('menuState', [
      state('close', style(
        {
          'margin-right': '0px'
        }
      )),
      state('open', style({
        'margin-right': '100px'
      })),
      transition('close => open', animate(200)),
      transition('open => close', animate(100)),
    ]),
    trigger('underLayer',
      [state('close', style({
        'width': '0px'
      })),
        state('open', style({
          'width': '100px'

        })),
        transition('close =>open', animate(200)),
        transition('open=>close', animate(100))
      ]
      ,)
  ]
})

export class AppComponent {


  state = 'close';
  underLayerState = 'close';
  @ViewChild('homeUnderLine') display: ElementRef;


  constructor(private ngZone: NgZone) {
    //  to detect window's size
    window.onresize = (e) => {

      this.ngZone.run(() => {
        if (window.innerWidth > 992) {
          this.state = 'close';
          this.underLayerState = 'close';
        }

      });
    };
  }


  onOpenMenu() {
    this.state == 'close' ? this.state = 'open' : this.state = 'close';
    this.underLayerState == 'close' ? this.underLayerState = 'open' : this.underLayerState = 'close';

  }


}
