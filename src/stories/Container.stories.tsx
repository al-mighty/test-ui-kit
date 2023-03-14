import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import '../styles/index.scss';
import Container from '../components/Container';
import AdminTable from '../components/AdminTable';
import moment from 'moment';
import {Button} from 'antd';

export default {
  title: 'Admin/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    data: []
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) =>
  <Container {...args}>
    {/* @ts-ignore */}
    <AdminTable {...args}>
      <table>
        <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Mode</th>
          <th>Instance</th>
          <th>
            Version
          </th>
          <th>Users</th>
          <th>
            Client visit
          </th>
          <th>Custom rules</th>
          <th/>
          <th>
            Last event
          </th>
          <th>
            Created
          </th>
        </tr>
        {/* @ts-ignore */}
        {args.data.map(row => <tr>
          {Object.values(row).map((key: any) => <td>
            {key}
          </td>)}
        </tr>)}
        </tbody>
      </table>
    </AdminTable>
  </Container>

const sourceData = [
  {
    apiURL: "http://11.31.242.127:1082/api/v1",
    apiUrl: "http://22.31.242.127:1082/api/v1",
    createdAt: 1647099579553,
    customRules: 0,
    status: 'online',
    dbEventsLogUsed: false,
    demo: false,
    displayName: "Getatel",
    gatewayId: 2,
    gatewayVersion: 3,
    id: 45,
    lastSourceEventId: 0,
    mode: "pro",
    name: "betatel",
    site: "ab1",
    staffUsers: 1,
    users: 1,
  },
  {
    apiURL: "http://11.31.242.127:1082/api/v1",
    apiUrl: "http://11.31.242.127:1082/api/v1",
    createdAt: 1647099579553,
    customRules: 0,
    dbEventsLogUsed: false,
    demo: false,
    displayName: "Setatel",
    gatewayId: 2,
    gatewayVersion: 3,
    id: 46,
    lastSourceEventId: 0,
    mode: "pro",
    name: "betatel",
    site: "ab",
    staffUsers: 1,
    users: 3,
  }
]
const formattedData = () => {
  return sourceData.map(item => ({
      id: item.id,
      name: <a href={`/admin/clients/${item.id}`}><strong>{item.name}</strong></a>,
      mode: item.mode,
      instance: `host/${item.gatewayId}`,
      gatewayVersion: item.gatewayVersion,
      version: item.gatewayVersion,
      users: item.users,
      lastClientActiveAt: moment(item.createdAt).utc().format('DD, MMM HH:mm:ss'),
      customRules: item.customRules,
      lastSourceEventId: item.lastSourceEventId,
      createdAt: moment(item.createdAt).utc().format('DD, MMM HH:mm:ss'),
    })
  )
}

export const ContainerUiTable = Template.bind({});
ContainerUiTable.args = {
  // @ts-ignore
  title: 'Admin Cointainer with table',
  caption: sourceData.length,
  data: formattedData(),
  buttons: <>
    <Button onClick={() => console.log('first btn')}>First Button</Button>
    <Button onClick={() => console.log('second btn')}>Second Button</Button>
  </>
};
