import { Component,ViewChild } from '@angular/core';
import {ProductComponent} from './product.component';
@Component({
  selector: 'app-root',
  template: `
  <h2>Hello {{title}}</h2>
  <button (click)="change()">Change Title</button>
  <input #txtName (keyup)="0"/>
  <p>Like : {{countLike}} - UnLike : {{countUnLike}}</p>
  <app-product *ngFor="let person of names" [name]="person" (OnVote)="parenVote($event)"></app-product>`
})
export class AppComponent {
  title = 'Tien';
  countLike:number = 0;
  countUnLike:number = 0;
  names = ["Mr.A","Mr.B","Mr.C","Mr.D"]
  @ViewChild(ProductComponent)
  product:ProductComponent;
  change(){
    this.product.setName('Do Cam Tien');
  }

  parenVote(valVol:boolean){
    if(valVol) this.countLike++;
    else this.countUnLike++;
  }
  setName(title:string){
    this.title = title;
  }
}
