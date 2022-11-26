import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigComponent } from './config/config.component';
import { CredentialComponent } from './credential/credential.component';

@Component({
  selector: 'app-Add',
  templateUrl: './Add.component.html',
  styleUrls: ['./Add.component.css']
})
export class AddComponent implements OnInit {
  addForm?: FormGroup;
  selectionId: number = 2;
  configData: string = "configuration";
  credentialData: string = "credentail";
  @ViewChild(ConfigComponent) configComp?: ConfigComponent;
  @ViewChild(CredentialComponent) credentialComp?: CredentialComponent;
  public sharingDetails?:any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.fb.group({
      trigger: [2]
    })
  }
  onSubmit() {
    let data;
    if (this.configComp?.configForm?.value != undefined) {
      data = {
        add:this.addForm?.value,
        config: this.configComp?.configForm?.value
      }
    }
    else if (this.credentialComp?.credentialForm?.value != undefined) {
      data = {
        add:this.addForm?.value,
        credential: this.credentialComp?.credentialForm?.value
      }
    }
    console.log(data);

  }

  onSelection(e: any) {
    this.selectionId = e.target.value;
  }
  getConfig() {
    let data={
      Id:1,
      Name:"config",
      toComp:'config'

    }
    this.sharingDetails=data;
  this.selectionId=data.Id;
  this.addForm?.get('trigger')?.setValue(data.Id)
  }
  getCredential() {
    let data={
      Id:2,
      Name:"credential",
      toComp:'credential'
    }
    this.sharingDetails=data;
  this.selectionId=data.Id;
  this.addForm?.get('trigger')?.setValue(data.Id)
  }
}
