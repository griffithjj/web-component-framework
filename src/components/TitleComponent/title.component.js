import { Component } from "../../../lib/Component.js";

const template = 'TitleComponent/title.component.html';

export class TitleComponent extends Component {

    constructor(){
        super(template);
        // this.setElementContent(this.template, this);
        console.log(this.className);
    }
}