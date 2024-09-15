import { Component } from "../../lib/Component.js";

const template = 'app.component.html';

export class AppComponent extends Component{

    constructor(){
        super(template);
        // this.setElementContent(this.template, this)
        console.log(AppComponent.name);
    }
}
