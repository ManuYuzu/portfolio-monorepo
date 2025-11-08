import './styles/index.css';
import './sample-element';
import './components/molecules/Switcher';

const app = document.querySelector('#app');
if (app) {
  app.setAttribute('data-theme', 'browser');

  const switcher = document.createElement('switcher-element');
  app.appendChild(switcher);

  const el = document.createElement('sample-element');
  app.appendChild(el);
}
