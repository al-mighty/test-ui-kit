import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import '../styles/index.scss';
import './stories.scss';
import {Tags} from '../components';

export default {
  title: 'Admin/Tags',
  component: Tags,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Tags>;

const Template: ComponentStory<typeof Tags> = (args) => <div style={{margin: 50}}>
    <Tags {...args}/>
</div>;

export const TagStory = Template.bind({});
TagStory.args = {
  values: [
    {
      name: 'UI',
      link: 'ui'
    },
    {
      name: 'Javascript',
      link: 'js'
    },
    {
      name: 'Reactjs',
      link: 'reactjs'
    },
    {
      name: 'Nginx',
      link: 'nginx'
    },
    {
      name: 'text',
    }
  ]
}
