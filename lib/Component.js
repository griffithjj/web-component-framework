export class Component extends HTMLElement{

    constructor(temp){
        super();

        console.log();
        const template = './src/components/' + temp;
        fetch(template)
        .then(result => result.text())
        .then(text => this.innerHTML = text)
        .catch(console.error());
    }

    setElementContent = (temp, obj) => {
        fetch(temp)
        .then(result => result.text())
        .then(text => obj.innerHTML = text)
        .catch(console.error());
    }
}