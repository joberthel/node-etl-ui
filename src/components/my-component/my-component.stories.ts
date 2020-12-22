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
    title: 'Components/My Component',
    component: 'my-component',
    parameters: {
        notes: {
            markdown
        }
    }
};

const Template = ({ first, last }) => html` <my-component first="${first}" last="${last}"></my-component> `;

export const Default = Template.bind({});
Default.args = { ...args };
Default.argTypes = { ...argTypes };
