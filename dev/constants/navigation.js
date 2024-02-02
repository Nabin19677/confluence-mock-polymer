import {html} from 'lit';

export const sidebarmenu = [
  {
    key: 'overview',
    name: 'Overview',
    iconClassName: 'fa-solid fa-torii-gate',
    content: html`<my-overview> </my-overview>`,
  },
  {
    key: 'recent',
    name: 'Recent',
    iconClassName: 'fa-regular fa-clock',
    content: html`<my-recent> </my-recent>`,
  },
  {
    key: 'starred',
    name: 'Starred',
    iconClassName: 'fa-regular fa-star',
    content: html`<my-no-element pageName="starred"> </my-no-element>`,
  },
  {
    key: 'drafts',
    name: 'Drafts',
    iconClassName: 'fa-regular fa-file',
    content: html`<my-no-element pageName="drafts"> </my-no-element>`,
  },
  {
    key: 'tasks',
    name: 'Tasks',
    iconClassName: 'fa-regular fa-square-check',
    content: html`<my-no-element pageName="tasks"> </my-no-element>`,
  },
];
