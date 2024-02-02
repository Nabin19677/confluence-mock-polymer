import {LitElement, css, html} from 'lit';
import {FaStyles} from '../../assets/js/fontawesome';

class MyButton extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }

      .button {
        gap: 6px;
        height: 2em;
        border: none;
        display: flex;
        font-size: 14px;
        padding: 0 10px;
        cursor: pointer;
        font-weight: bold;
        border-radius: 3px;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: space-between;
      }

      .button i {
        font-size: 14px;
        margin-top: 2px;
      }

      :host([iconPosition='right']) .button {
        flex-direction: row-reverse;
      }
    `,
    FaStyles,
  ];

  static properties = {
    /**
     * Font awesome class name of icon.
     */
    iconClassName: {type: String},

    /**
     * Position of icon "left" or "right". Default is "left"
     */
    iconPosition: {type: String},
  };

  constructor() {
    super();
    this.iconPosition = 'left';
  }

  render() {
    return html`
      <button class="button">
        <i class="${this.iconClassName}"></i> <slot></slot>
      </button>
    `;
  }
}

customElements.define('my-button', MyButton);
