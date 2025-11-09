import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

const icons = [
  { name: 'browser', url: './icons/sun_and_moon.svg' },
  { name: 'light', url: './icons/sun.svg' },
  { name: 'dark', url: './icons/moon.svg' },
];

function switcherTemplate(selected: string, onThemeChange: (e: Event) => void) {
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
            <i style="--icon: url('${url}');"></i>
          </label>
        `
      )}
    </div>
  `;
}

function switcherStyles() {
  return css`
    [yz-switcher] {
      background-color: light-dark(#1d1d1d, #f5f5f5);
      color: light-dark(#dddddd, #1d1d1d);
      padding: 0.5rem;
      border-radius: 1rem;
      position: absolute;
      top: 1rem;
      right: 1rem;
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

        > i {
          display: inline-flex;

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

        &:has(input:checked) {
          background-color: light-dark(#ee5656, #8cf777);
        }

        &:not(:has(input:checked)) {
          display: none;
        }
      }

      &:hover,
      &:focus-within {
        height: 6rem;
        > label:not(:has(input:checked)) {
          display: inline-flex;
        }
      }
    }
  `;
}

@customElement('switcher-element')
export class SwitcherElement extends LitElement {
  static styles = switcherStyles();

  constructor() {
    super();
  }

  private selected: string = 'browser';

  private _onThemeChange = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    this.selected = value;
    document.querySelector('#app')?.setAttribute('data-theme', value);
    this.requestUpdate();
  };

  render() {
    return switcherTemplate(this.selected, this._onThemeChange);
  }
}
