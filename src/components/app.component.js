import { Component } from "./Component.js";

const template = './src/components/app.component.html';

export class AppComponent extends Component{

    constructor(){
        super(template);
        // this.setElementContent(this.template, this)
        console.log(this);
    }
}
