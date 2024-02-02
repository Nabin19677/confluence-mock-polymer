import {LitElement, html, css} from 'lit';
import {sidebarmenu} from '../constants/navigation';

class MySidebar extends LitElement {
  constructor() {
    super();
    this._selectedButton = 'overview';
  }

  static properties = {
    _selectedButton: {state: true},
  };

  static styles = [
    css`
      :host {
        display: block;
      }

      .container {
        display: flex;
        height: calc(100vh - 64px);
        margin: 3vh 5vw;
      }

      .sidebar {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 300px;
      }

      .content {
        flex: 1;
        padding: 16px;
      }
    `,
  ];

  isSelected(buttonName) {
    return this._selectedButton === buttonName;
  }

  handleButtonClick(buttonName) {
    this._selectedButton = buttonName;
  }

  renderContent() {
    const selectedItem = sidebarmenu.find(
      (item) => item.key === this._selectedButton
    );
    return selectedItem.content
      ? selectedItem.content
      : html`<p>No content available</p>`;
  }

  render() {
    return html`
      <div class="container">
        <div class="sidebar">
          ${sidebarmenu.map(
            (item) => html` <my-sidebar-button
              .iconClassName="${item.iconClassName}"
              .selected="${this.isSelected(item.key)}"
              @click="${() => this.handleButtonClick(item.key)}"
            >
              ${item.name}
            </my-sidebar-button>`
          )}
        </div>
        <div class="content">${this.renderContent()}</div>
      </div>
    `;
  }
}

customElements.define('my-sidebar', MySidebar);
