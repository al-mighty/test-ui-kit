import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {MoreDropDown, AdminDetailsHead, MoreIcon} from '../components';
import {Modal} from 'antd';

import '../styles/index.scss';

const confirm = Modal.confirm;

export default {
  title: 'Admin/AdminDetailHead',
  component: AdminDetailsHead,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AdminDetailsHead>;

const Template: ComponentStory<typeof AdminDetailsHead> = (args) => <div style={{width: 900, margin: '0 auto'}}>
  <AdminDetailsHead title={args.title} buttons={args.buttons}>{args.children}</AdminDetailsHead>
</div>

const actions = () => (
  [{
    title: 'Remove',
    onClick: () => confirm({
      title: 'Are you sure delete this user?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.info(`example click`)
      }
    })
  }
  ]
)
const Buttons = () => <MoreDropDown actions={actions()}/>
export const AdminDetailsPage = Template.bind({});
AdminDetailsPage.args = {
  title: 'Client page...',
  buttons: Buttons(),
  children: <table>
    <tbody>
    <tr>
      <td>Mode:</td>
      <td><strong>Free</strong></td>
    </tr>
    <tr>
      <td>Instance:</td>
      <td><strong>Alpha</strong> Gamma - Gateway_21</td>
    </tr>
    <tr>
      <td>API URL:</td>
      <td>localhost.com</td>
    </tr>
    <tr>
      <td>Created:</td>
      <td>23.03.2010 22:11:00</td>
    </tr>
    </tbody>
  </table>
};
