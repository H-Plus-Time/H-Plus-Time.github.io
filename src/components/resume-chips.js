import { LitElement, html } from "@polymer/lit-element";
import { repeat } from 'lit-html/lib/repeat';
import moment from 'moment/src/moment';

const humanizeDate = (date) => {
    if(date === 'present') { return date; }
    return moment(date).format("MMM, YYYY")
}
const humanizeDateFull = (date) => {
    return moment(date).format("D MMM, YYYY")
}
class WorkChip extends LitElement {
    _render({position, ...props}) {
        console.log(position);
        return html`
            <h3>${position.position}, ${position.employer}</h3>
            <h4>${humanizeDate(position.start)} - ${humanizeDate(position.end)}</h4>
            <p>${position.summary}</p>
            <h4>Highlights</h4>
            ${position.highlights ? html`
                <ul>
                ${repeat(position.highlights, (highlight) => highlight)}
                </ul>
            ` : ''
            }
        `
    }
    static get properties() {
        return {
            position: Object
        }
    }
}
customElements.define('work-chip', WorkChip);
class EduChip extends LitElement {
    _render({course, ...props}) {
        return html`
        `
    }
}
customElements.define('edu-chip', EduChip);
class VolunteerChip extends LitElement {
    _render({data}) {
        return html`
            <h3>${data.title} | ${data.role}</h3>
            <h4>${humanizeDate(data.start)} - ${humanizeDate(data.end)}</h4>
            <p>${data.description}</p>
        `
    }
    static get properties() {
        return {
            data: Object
        }
    }
}
class ProjectChip extends LitElement {}
class SkillChip extends LitElement {}
class AccoladeChip extends LitElement {}
customElements.define('skill-chip', SkillChip);
customElements.define('project-chip', ProjectChip);
customElements.define('volunteer-chip', VolunteerChip);
customElements.define('accolade-chip', AccoladeChip);