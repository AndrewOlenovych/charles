import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  public feedbackControl: FormGroup;
  public isValid: boolean = true;

  constructor() { }

  public ngOnInit(): void {
    this.feedbackControl = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      notice: new FormControl('', Validators.required)
    })

    this.feedbackControl.statusChanges.subscribe(() => this.isValid = this.feedbackControl.invalid);
  }

  public onSubmit(): void {
    console.log(this.feedbackControl.value);
    this.feedbackControl.reset();
  }

}
