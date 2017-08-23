import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {
@ViewChild('f') form:NgForm;
  defValue:string='Select an option'
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(form)

  }
}
