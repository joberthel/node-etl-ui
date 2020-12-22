import { html } from 'lit-html';
import markdown from './readme.md';

const args = {
    first: 'John',
    last: 'Doe'
};

const argTypes = {
    first: {
        description: 'The first name'
    },
    last: {
        description: 'The last name'
    }
};

export default {
    title: 'Components/Node',
    component: 'etl-node',
    parameters: {
        notes: {
            markdown
        }
    }
};

const Template = ({ first, last }) => html` <etl-node first="${first}" last="${last}"></etl-node> `;

export const Default = Template.bind({});
Default.args = { ...args };
Default.argTypes = { ...argTypes };
