export class Component extends HTMLElement{

    constructor(template){
        super();
        fetch(template)
        .then(result => result.text())
        .then(text => this.innerHTML = text)
        .catch(console.error());
    }

    setElementContent = (template, obj) => {
        fetch(template)
        .then(result => result.text())
        .then(text => obj.innerHTML = text)
        .catch(console.error());
    }
}