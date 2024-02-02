import {LitElement, html, css} from 'lit';

class MyNoElement extends LitElement {
  constructor() {
    super();
    this.pageName = 'starred';
  }

  static styles = [
    css`
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20vh;
      }
    `,
  ];

  static properties = {
    /**
     * Name of the page.
     */
    pageName: {type: String},
  };

  render() {
    return html`
      <div class="content">
        <img
          src="https://confluence-v1.prod.atl-paas.net/master/y9aPJPqkCX.svg"
        />
        <h5>You haven’t ${this.pageName} any pages yet</h5>
        <p>
          Get back to pages that are important to you by marking them. You won’t
          get any notifications about pages you star.
        </p>
      </div>
    `;
  }
}

customElements.define('my-no-element', MyNoElement);
