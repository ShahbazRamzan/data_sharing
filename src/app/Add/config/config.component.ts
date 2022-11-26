import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  configForm?: FormGroup;
  private _getSharingDetails!: any;
  @Input()
  get getSharingDetails(): any { return this._getSharingDetails; }
  set getSharingDetails(getSharingDetails: any) {
    this._getSharingDetails = getSharingDetails;
    if (this.getSharingDetails != undefined && this.getSharingDetails.toComp == 'config') {
      this.configForm?.get('Name')?.setValue(this.getSharingDetails.Name)

    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.configForm = this.fb.group({
      Name: []
    })
  }
  ngAfterViewInit() {
    if (this.getSharingDetails != undefined && this.getSharingDetails.toComp == 'config') {
      this.configForm?.get('Name')?.setValue(this.getSharingDetails.Name)
    }
  }
}
