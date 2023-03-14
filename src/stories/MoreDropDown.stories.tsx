import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import '../styles/index.scss';
import {MoreDropDown} from '../components';
import {Modal} from 'antd';

const confirm = Modal.confirm;

export default {
  title: 'Admin/MoreDropDown',
  component: MoreDropDown,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MoreDropDown>;

const Template: ComponentStory<typeof MoreDropDown> = (args) => <div
  style={{display: 'flex', justifyContent: 'space-between', width: 1200}} className={'wrapper-block'}>
  <MoreDropDown {...args}/>
</div>

export const MoreDropDownStory = Template.bind({});
MoreDropDownStory.args = {
  actions: [{
    title: 'Remove',
    onClick: (id) => confirm({
      title: 'Are you sure delete this user?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.info(`example click, props id - ${id}`)
      }
    })
  }
  ]
};
