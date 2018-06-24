import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class ShowcaseHome extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <section>
        <p>
        Hi, you've reached the personal website of Nicholas Roberts, a Melbourne, Australia based Software Developer.
        </p>
        <p>Open up Chrome Dev Tools (or Web Console, if you're running Firefox) to poke around the salient features, namely:</p>
        <ul>
        <li>
        Service worker - background syncs, push notifications. Mainly used for robust resource caching here.
        </li>
        <li>
        WebComponents v1 (Polymer sugared) - standards-track UI components, sans-transpilation.
        </li>
        <li>
        Automated performance, accessibility auditing - check out <a href="https://audit.hplustime.com">audit.hplustime.com</a> for the report
        </li>
        <!-- <li>
        HTTP/2 server push - does what it says on the tin, pitfalls (i.e. unprompted extra bandwidth usage) neatly avoided via service worker request interception.
        </li> -->
        <li>
        Lazy-loaded resources - defers work until after users have engaged.
        </li>
        <li>
        Precisely <b>zero</b> webfonts - and zero kB to download them ;).
        </li>
        </ul>
        <p>Finally, the source code for this website is available at <a href="https://github.com/H-Plus-Time/hplustime.com">GitHub</a><p>
      </section>
    `;
  }
}

window.customElements.define('showcase-home', ShowcaseHome);