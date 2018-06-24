import { LitElement, html } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';
import { fetchData } from '../actions/resume.js';
import resume from '../reducers/resume';
import { store } from '../store.js';
import { connect } from 'pwa-helpers';
import 'wired-card';
store.addReducers({
  resume
})
// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { emailIcon } from './showcase-icons.js';
import './resume-chips.js';
import { PageViewElement } from './page-view-element.js';
import '@material/mwc-button';
import {socialIcons} from './showcase-icons.js';

class ShowcaseResume extends connect(store)(PageViewElement) {
  _render({_resume: resume, ...props}) {
    return html`
      <style>
        :host [flexRoot] {
          font-family:'Roboto', 'Noto', sans-serif;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          max-width:1280px;
          margin:auto;
        }
        section.body {
            flex:1;
            display:flex;
            flex-direction:column;
            width:100%;
        }
        h3 > a {
            text-decoration:none;
            color:black;
        }
        h3 > a:hover {
            background:black;
            color:white;
        }
        wired-card {
          flex:1;
          padding:20px;
          margin:10px 0 10px 0;
          width:100%;
        }
        .profiles a {
          border-radius: 50%;
          height:24px;
          display:inline-block;
          padding:5px;
          text-decoration: none;
        }
        .profiles a:hover {
          box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px

        }
      </style>
      ${SharedStyles}
      <div flexRoot>
        <h1>${resume.name}</h1>
        <h2>${resume.info.label}</h2>
        ${resume.location ? 
            html`
              <h3 class="nomargin">${resume.location.city}, ${resume.location.region}, ${resume.location.country}</h3>
              <h3 class="nomargin">${resume.location.address}</h3>
            ` : ''
        }
        <div style="display:flex;flex-direction:row;align-items:center">
            ${emailIcon}
          <h3><a href="mailto:${resume.contact.email}">${resume.contact.email}</a></h3>
        </div>
        <div class="profiles">
          ${repeat(resume.social, account => html`
            <a href="${account.url}">
              ${socialIcons[account.network]}
            </a>
          `)}
        </div>
        <section class="body" style="display:none">
          <wired-card elevation=1>
            <h3>Employment</h3>
            ${repeat(resume.employment.history, item => {
              return html`<work-chip position="${item}"></work-chip>`
            })}
          </wired-card>
          <wired-card elevation=1>
            <h3>Education</h3>
            ${repeat(resume.education.history, item => {
              return html`<edu-chip position="${item}"></edu-chip>`
            })}
          </wired-card>
          <wired-card elevation=1>
            <h3>Projects</h3>
          </wired-card>
          <wired-card elevation=1>
            <h3>Skills</h3>
          </wired-card>
          <wired-card elevation=1>
            <h3>Volunteer Work</h3>
            ${repeat(resume.volunteer.history, item => {
              return html`<volunteer-chip data="${item}"></volunteer-chip>`
            })}
          </wired-card>
          <wired-card elevation=1>
            <h3>Accolades</h3>
          </wired-card>
        </section>
      </div>
    `;
  }
  static get properties() {
    return {
      _resume: Object
    }
  }
  _stateChanged(state) {
    this._resume = state.resume;
  }
}

window.customElements.define('showcase-resume', ShowcaseResume);
export { fetchData };