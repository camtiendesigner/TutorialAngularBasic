import {Component,Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector:"app-product",
    template:`
    <h1>{{title}}</h1>
    <h2>Component Product {{name}}</h2>
    <div>
        <button [disabled]="vote" (click)="voted(true)">Like</button> 

        <button [disabled]="vote" (click)="voted(false)">UnLike</button>   
    </div>
    `
})

export class ProductComponent{
    @Input() name:string;s
    private title;
    @Output() OnVote = new EventEmitter<boolean>();
    public vote:boolean = false;

    public voted(valVote:boolean){
        this.vote = true;
        this.OnVote.emit(valVote);
    }
    setName(title:string){
        this.title = title;
    }
    constructor(){
        this.title = "Hello World";
    }
}