import {MoreOutlined} from '@ant-design/icons';
import React from 'react';
import s from './icons.module.scss'

export const MoreIcon = ({className}: { className?: string }) =>
  <MoreOutlined className={`${className} ${s.MoreIcon}`}/>

export default MoreIcon;