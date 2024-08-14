import { Component } from "../Component.js";

const template = './src/components/TitleComponent/title.component.html';

export class TitleComponent extends Component {

    constructor(){
        super(template);
        // this.setElementContent(this.template, this);
        console.log(this);
    }
}