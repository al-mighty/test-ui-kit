import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import '../styles/index.scss';
import {AdminHeader} from '../components/index';

export default {
  title: 'Admin/Header',
  component: AdminHeader,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AdminHeader>;

const Template: ComponentStory<typeof AdminHeader> = (args) => <AdminHeader {...args} />;

export const Header = Template.bind({});
Header.args = {
  logo: 'logo.svg',
  bgColor: '#004CE5',
  historyUrl:'https://aac-dev.example.com/user_actions?projectId=8',
  settingsUrl:'https://aac-dev.example.com/projects/8',
  user: {
    role: 'Voice support',
    email: 's.user@example.com',
    name: 'Lorem ipson',
    id: 1,
    photoUrl:'https://joeschmoe.io/api/v1/random',
  },
  onMenuClick: (test = 'menu click') => {
    console.log(test)
  },
  menu: [
    {
      title: 'Dashboard',
      url: '/admin/dashboard',
    },
    {
      title: 'Clients',
      url: '/admin/clients'
    },
    {
      title: 'Users',
      url: '/admin/users',
    },
    {
      title: 'Actions',
      url: '/admin/actions',
      submenu: [
        {
          title: 'User Actions',
          url: '/admin/actions/users'
        },
        {
          title: 'Person Actions',
          url: '/admin/actions/person'
        },
        {
          title: 'Admin Actions',
          url: '/admin/actions/admin'
        }
      ]
    }
  ],
};
