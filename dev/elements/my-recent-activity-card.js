import {LitElement, css, html} from 'lit';

import {FaStyles} from '../../assets/js/fontawesome';

class MyRecentActivityCard extends LitElement {
  static styles = [
    css`
      .card {
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
      }

      .card:hover {
        background-color: #eee;
        cursor: pointer;
      }

      .card__content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 16px;
      }

      .card__document-title {
        font-size: 14px;

        font-weight: 600;
      }

      .card__space-name {
        font-size: 12px;
      }

      .card__timepassed {
        font-size: 9px;
        color: rgb(68, 84, 111);
      }

      i {
        font-size: 32px;
        color: rgb(12, 102, 228);
      }
    `,
    FaStyles,
  ];

  static properties = {
    documentName: {type: String},
    spaceName: {type: String},
    lastVisited: {type: String},
  };

  getTimePassed = () => '21 hours ago';

  render() {
    return html`
      <div class="card">
        <div class="card__content">
          <div><i class="fa-solid fa-file-lines"></i></div>
          <div>
            <p class="card__document-title">${this.documentName}</p>
            <p class="card__space-name">${this.spaceName}</p>
          </div>
        </div>
        <div>
          <p class="card__timepassed">Visited ${this.getTimePassed()}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('my-recent-activity-card', MyRecentActivityCard);
