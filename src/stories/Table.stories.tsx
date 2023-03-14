import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import '../styles/index.scss';
import AdminTable from '../components/AdminTable/AdminTable';
import moment from 'moment';
import {Container, MoreDropDown, MoreIcon} from '../components';
import {Modal} from 'antd';
import ThSorted from '../components/ThSorted';

const confirm = Modal.confirm;

export default {
  title: 'Admin/AdminTable',
  component: AdminTable,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AdminTable>;

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
const formattedData = (): any[] => sourceData.map(item => ({
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

const MoreDropDownTemplate: ComponentStory<any> = (args) => <MoreDropDown actions={[{
  title: 'Remove',
  onClick: () => confirm({
    title: 'Are you sure delete this user?',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.info(`example click, props id - ${args.id}`)
    }
  })
}, {
  title: 'add',
  onClick: () => confirm({
    title: 'Are you sure add this user?',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.info(`example add click, props id - ${args.id}`)
    }
  })
}
]}><MoreIcon/></MoreDropDown>

const comparator = (column: string): any => {
  switch (column) {
    case "id":
      return (p1: any, p2: any) => p1.id - p2.id;
    case "version":
      return (p1: any, p2: any) => p1.gatewayVersion - p2.gatewayVersion;
    case "lastEvent":
      return (p1: any, p2: any) => (p1.lastEvent ? p1.lastEvent.createdAt : 0) - (p2.lastEvent ? p2.lastEvent.createdAt : 0)
    case "lastClientActiveAt":
      return (p1: any, p2: any) => (p1.lastClientActiveAt || 0) - (p2.lastClientActiveAt || 0)
    case "createdAt":
      return (p1: any, p2: any) => (p1.createdAt || 0) - (p2.createdAt || 0)
    case "activeAt":
      return (p1: any, p2: any) => (p1.activeAt || 0) - (p2.activeAt || 0)

    default:
      return null;
  }
}
const sort = (items: any[], column: string, desc: boolean): any[] => {
  items = items.sort(comparator(column));
  if (desc) items = items.reverse();
  return items;
};

const Table: ComponentStory<typeof AdminTable> = (args) => {
  const [orderingState, setOrdering] = useState({
    column: 'id',
    isDescOrdering: true,
  });
  const [data, setState] = useState(formattedData());
  const toggleSort = (column: string) => {
    const isDescOrdering = orderingState.column === column ? !orderingState.isDescOrdering : true
    setState(sort(data, column, isDescOrdering));
    setOrdering({column, isDescOrdering});
  }
  const Table = () =>
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
        <ThSorted
          orderColumn={orderingState.column}
          isOrderColumn={orderingState.isDescOrdering}
          onClick={toggleSort}
          name={'lastEvent'}>
          Last event
        </ThSorted>
        <th></th>
        <ThSorted
          orderColumn={orderingState.column}
          isOrderColumn={orderingState.isDescOrdering}
          onClick={toggleSort}
          name={'createdAt'}>
          Created
        </ThSorted>
        <th className={'options'}></th>
      </tr>
      {formattedData().map((row) => <tr>
        {Object.values(row).map((key: any, i) => <td>
          {key}
        </td>)}
        <td>
          <MoreDropDownTemplate id={row.id}/>
        </td>
      </tr>)}
      </tbody>
    </table>
  return (
    <div className={'page'} style={{margin: '20px auto 0 auto', width: '1100px'}}>
      <Container>
        <AdminTable
          isPage={true}
          caption={<><span style={{fontWeight: 600}}>11 match</span> of 11</>}
          title={'Users'}>
          <Table/>
        </AdminTable>
      </Container>
      <Container>
        <AdminTable
          caption={'caption of subpage'}
          title={'Users2'}>
          <Table/>
        </AdminTable>
      </Container>
    </div>)
}

export const UiTablePage = Table.bind({});
UiTablePage.args = {};