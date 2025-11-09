import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../atoms/Icon';

@customElement('switcher-element')
export class SwitcherElement extends LitElement {
  static styles = switcherStyles();

  // ? Change to property decorator if needed in future
  private icons: Icon[] = [
    { name: 'browser', url: './icons/sun_and_moon.svg' },
    { name: 'light', url: './icons/sun.svg' },
    { name: 'dark', url: './icons/moon.svg' },
  ];

  constructor() {
    super();
  }

  private selected: string = 'browser';

  private _onThemeChange = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    this.selected = value;

    document.querySelector('#app')?.setAttribute('data-theme', value);

    this.requestUpdate();

    (e.target as HTMLElement).blur();
  };

  render() {
    setMaxHeight(this, this.icons.length);

    return switcherTemplate({
      icons: this.icons,
      selected: this.selected,
      onThemeChange: this._onThemeChange,
    });
  }
}

interface Icon {
  name: string;
  url: string;
}

function switcherTemplate({
  icons,
  selected,
  onThemeChange,
}: {
  icons: Icon[];
  selected: string;
  onThemeChange: (e: Event) => void;
}) {
  return html`
    <div yz-switcher role="radiogroup" aria-label="Theme selector">
      ${icons.map(
        ({ name, url }) => html`
          <label for="radio-${name}">
            <input
              id="radio-${name}"
              name="switch"
              type="radio"
              value="${name}"
              ?checked=${selected === name}
              @change=${onThemeChange}
              role="radio"
              aria-checked="${selected === name}"
              aria-label="${name} theme"
            />
            <icon-element url="${url}"></icon-element>
          </label>
        `
      )}
    </div>
  `;
}

function switcherStyles() {
  return css`
    :host {
      --switcher-max-height: 2rem;
    }

    [yz-switcher] {
      background-color: light-dark(#1d1d1d, #f5f5f5);
      color: light-dark(#dddddd, #1d1d1d);
      padding: 0.5rem;
      border-radius: 1rem;
      position: fixed;
      z-index: 1001;
      top: 1rem;
      right: 2rem;
      width: 2rem;
      height: 2rem;
      overflow: hidden;

      transition: height 0.3s ease;

      > label {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s ease;
        position: relative;

        > input {
          opacity: 0;
          position: absolute;
          width: 1px;
          height: 1px;
        }

        &:has(input:focus-visible + i) {
          outline: 2px solid #3caaff;
          outline-offset: 2px;
        }

        &:has(input:checked) {
          background-color: light-dark(#ee5656, #8cf777);
        }

        &:not(:has(input:checked)) {
          display: none;
        }
      }

      &:focus-within,
      &:hover {
        height: var(--switcher-max-height);
        > label:not(:has(input:checked)) {
          display: inline-flex;
        }
      }
    }
  `;
}

function setMaxHeight(host: HTMLElement, itemCount: number) {
  host.style.setProperty('--switcher-max-height', `${itemCount * 2}rem`);
}
