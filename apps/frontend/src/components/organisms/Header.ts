import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('header-component')
export class HeaderComponent extends LitElement {
  static styles = headerStyles();

  constructor() {
    super();
  }

  render() {
    return headerTemplate();
  }
}

function headerTemplate() {
  return html` <header>
    <h1>My Application Header</h1>
  </header>`;
}

function headerStyles() {
  return css`
    :host {
      display: block;
      background-color: light-dark(
        var(--th-light-header-bg-color, #f0f0f0),
        var(--th-dark-header-bg-color, #2c2c2c)
      );
      width: 100%;
      position: sticky;
      top: 0;
      z-index: 1000;
      min-height: 80px;

      *,
      *:after,
      *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    }
  `;
}
