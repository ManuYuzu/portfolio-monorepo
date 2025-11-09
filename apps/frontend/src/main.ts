import './styles/index.css';
import './components/organisms/sample-element';
import './components/molecules/Switcher';
import './components/organisms/Header';

const app = document.querySelector('#app');
if (app) {
  app.setAttribute('data-theme', 'browser');

  const header = document.createElement('header-component');
  app.appendChild(header);

  const switcher = document.createElement('switcher-element');
  app.appendChild(switcher);

  const el = document.createElement('sample-element');
  app.appendChild(el);

  Array.from({ length: 20 }, (_, i) => {
    const p = document.createElement('p');
    p.textContent = `This is sample element line number ${i + 1}.`;
    app.appendChild(p);
  });
}
