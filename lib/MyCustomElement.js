export class MyCustomElement extends HTMLElement {
  static observedAttributes = ['size'];

  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    console.log('Custom element added to page.');
  }

  disconnectedCallback() {
    console.log('Custom element removed from page.');
  }

  adoptedCallback() {
    console.log('Custom element moved to new page.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);
  }
}

customElements.define('my-custom-element', MyCustomElement);
