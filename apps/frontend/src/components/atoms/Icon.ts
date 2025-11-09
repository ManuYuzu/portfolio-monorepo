import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('icon-element')
export class IconElement extends LitElement {
  static styles = iconStyles();

  @property({ type: String })
  declare url: string;

  constructor() {
    super();

    this.url = '';
  }

  render() {
    return iconTemplate({
      url: this.url,
    });
  }
}

function iconTemplate({ url }: { url: string }) {
  const iconStyle = `--icon: url('${url}');`;

  return html`<i style="${iconStyle}"></i>`;
}

function iconStyles() {
  return css`
    :host {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      color: inherit;
    }

    i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      &::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        mask: var(--icon) center / 1em no-repeat;
        background-color: currentColor;

        transition: background-color 0.3s ease;
      }
    }
  `;
}
