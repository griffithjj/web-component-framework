import { AppComponent } from "./src/components/app.component.js";
import { TitleComponent } from "./src/components/TitleComponent/title.component.js";
import {MyCustomElement } from "./lib/MyCustomElement.js";

customElements.define("app-root", AppComponent);
customElements.define("title-component", TitleComponent);