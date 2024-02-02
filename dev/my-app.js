// my-app.js
import {LitElement, html, css} from 'lit';

import './elements';
import './pages';

class MyApp extends LitElement {
  static styles = [css``];

  render() {
    return html`
      <my-header></my-header>
      <my-sidebar></my-sidebar>
    `;
  }
}

customElements.define('my-app', MyApp);
