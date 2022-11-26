import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.css']
})
export class CredentialComponent implements OnInit {
  credentialForm?:FormGroup;
  private _getSharingDetails!: any;
  @Input()
  get getSharingDetails(): any { return this._getSharingDetails; }
  set getSharingDetails(getSharingDetails: any) {
    this._getSharingDetails = getSharingDetails;
    if (this.getSharingDetails != undefined && this.getSharingDetails.toComp=='credential') {
      this.credentialForm?.get('credential')?.setValue(this.getSharingDetails.Name)
    }
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.credentialForm=this.fb.group({
      credential:[]
    });

  }
  ngAfterViewInit() {
    if (this.getSharingDetails != undefined && this.getSharingDetails.toComp=='credential') {
      this.credentialForm?.get('credential')?.setValue(this.getSharingDetails.Name)
    }
  }
}
