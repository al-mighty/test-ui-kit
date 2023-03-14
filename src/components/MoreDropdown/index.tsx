import {DownOutlined, MoreOutlined} from '@ant-design/icons';
import {Button, Dropdown, Menu} from 'antd';
import React from 'react';
import {MoreIcon} from '..';

type actionsT = { title: string, onClick: (props: any) => void }[]
type MoreDropDownType = {
  className?: string,
  actions: actionsT,
  children?: any
}

const menu = (actions: actionsT) => <Menu style={{padding: 0}}>
  {actions.map((action, index) =>
    <Menu.Item key={index}>
      <div onClick={action.onClick}>{action.title}</div>
    </Menu.Item>
  )}
</Menu>

const MoreDropDown = ({className = '', actions, children}: MoreDropDownType) => {
  return <Dropdown className={`${className}`} overlay={() => menu(actions)} trigger={['click']}>
    <div style={{display: 'inline-block'}}>{children ? children :
      <Button type="primary">Actions <DownOutlined/></Button>}</div>
  </Dropdown>
}

export default MoreDropDown;