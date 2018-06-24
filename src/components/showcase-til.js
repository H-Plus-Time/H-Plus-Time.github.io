import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { store } from '../store.js';
import { connect } from 'pwa-helpers';

class ShowcaseTil extends connect(store)(PageViewElement) {
    _stateChanged(change) {

    }
    _render(props) {
        return html``
    }
}

customElements.define('showcase-til', ShowcaseTil);