import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

function switcherTemplate(onThemeChange: (e: Event) => void) {
  return html`
    <div yz-switcher>
      <label for="radio-browser">
        <input
          id="radio-browser"
          name="switch"
          type="radio"
          value="browser"
          checked
          @change=${onThemeChange}
        />
        <i style="--icon: url('src/utils/icons/sun_and_moon.svg');"></i>
      </label>
      <label for="radio-light">
        <input
          id="radio-light"
          name="switch"
          type="radio"
          value="light"
          @change=${onThemeChange}
        />
        <i style="--icon: url('src/utils/icons/sun.svg');"></i>
      </label>
      <label for="radio-dark">
        <input
          id="radio-dark"
          name="switch"
          type="radio"
          value="dark"
          @change=${onThemeChange}
        />
        <i style="--icon: url('src/utils/icons/moon.svg');"></i>
      </label>
    </div>
  `;
}

function switcherStyles() {
  return css`
    div[yz-switcher] {
      background-color: light-dark(#1d1d1d, #f5f5f5);
      color: light-dark(#dddddd, #1d1d1d);
      padding: 0.5rem;
      border-radius: 1rem;
      position: absolute;
      top: 1rem;
      right: 1rem;

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
      }

      > label:has(input:checked) {
        background-color: light-dark(#ee5656, #8cf777);
      }
    }
  `;
}

@customElement('switcher-element')
export class SwitcherElement extends LitElement {
  static styles = switcherStyles();

  @property({ type: Boolean })
  declare isOn;

  constructor() {
    super();
    this.isOn = false;
  }

  private _renderSwitcher() {
    return switcherTemplate(this._onThemeChange.bind(this));
  }

  private _onThemeChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    document.querySelector('#app')?.setAttribute('data-theme', value);
  }

  render() {
    return this._renderSwitcher();
  }
}
