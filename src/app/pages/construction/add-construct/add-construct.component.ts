import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-construct',
  templateUrl: './add-construct.component.html',
  styleUrl: './add-construct.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AddConstructComponent implements OnInit {
  formAddConstruct: FormGroup = new FormGroup({});
  value: string | undefined;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.formAddConstruct = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      address: ['', Validators.required],
      startDate: ['', Validators.required],
      endDateEstimated: ['', Validators.required],
      manager: ['', Validators.required],
      budget: ['', Validators.required],
      status: ['', Validators.required],
      client: ['', Validators.required],
    });
  }

  submitForm() {
    console.log("submit")
  }
}
