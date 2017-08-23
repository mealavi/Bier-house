import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})

/*this will be load , when route to any page address other than contact and home */
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
