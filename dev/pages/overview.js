import {LitElement, html, css} from 'lit';

import {feeds} from '../../mocks/feeds';
import {recent} from '../../mocks/recent-activities';

class Overview extends LitElement {
  static styles = [
    css`
      .activities {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
      }

      .activity-card {
        width: 360px;
      }

      .feeds {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    `,
  ];

  render() {
    return html`
      <h5>PICK UP WHERE YOU LEFT OFF</h5>

      <div class="activities">
        ${recent.map((activity) => {
          return html`
            <div class="activity-card">
              <my-document-card
                .spaceName="${activity.spaceName}"
                .lastVisited="${activity.lastVisited}"
                .documentName="${activity.documentName}"
              ></my-document-card>
            </div>
          `;
        })}
      </div>

      <h5>DISCOVER WHAT'S HAPPENING</h5>

      <div class="feeds">
        ${feeds.map((activity) => {
          return html`
            <div class="feed-card">
              <my-feed-card
                .spaceName="${activity.spaceName}"
                .lastVisited="${activity.lastVisited}"
                .documentName="${activity.documentName}"
              ></my-feed-card>
            </div>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('my-overview', Overview);
