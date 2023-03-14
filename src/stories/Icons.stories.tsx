import React from 'react';
import {ComponentStory} from '@storybook/react';
import {MoreIcon} from '../components';

import '../styles/index.scss';

export default {
  title: 'Admin/Icons',
  parameters: {
    layout: 'fullscreen',
  },
}

const Template: ComponentStory<any> = (args) => <div style={{width: 100, margin: '50 auto'}}>
  <MoreIcon/>
</div>

export const Icons = Template.bind({});
Icons.args = {};
