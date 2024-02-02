import {LitElement, html, css} from 'lit';
import {FaStyles} from '../../assets/js/fontawesome';

class MySidebarButton extends LitElement {
  constructor() {
    super();
    this.selected = false;
  }
  static styles = [
    css`
      .sidebar-button {
        width: 100%;
        background: none;

        border: none;
        padding: 10px 16px;
        cursor: pointer;
        display: flex;
        font-size: 14px;
        border-radius: 3px;
      }

      .sidebar-button i {
        margin-right: 8px;
        margin-top: 1px;
        width: 20px;
      }

      .sidebar-button:hover {
        background-color: #ededed;
      }

      :host([selected]) .sidebar-button {
        background-color: rgb(204, 224, 255);
        color: rgb(12, 102, 228);
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
     * Check if button is selected.
     */
    selected: {type: Boolean, reflect: true},
  };

  render() {
    return html`
      <button class="sidebar-button">
        <i class="${this.iconClassName}"></i>
        <slot> </slot>
      </button>
    `;
  }
}

customElements.define('my-sidebar-button', MySidebarButton);
