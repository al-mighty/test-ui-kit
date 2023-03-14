import React from 'react';
import './ThSorted.scss'
// @ts-ignore
import ArrowDownwardUrl, {ReactComponent as ArrowDownward} from './ArrowDownward.svg'

const ThSorted = ({
                    className,
                    colspan,
                    name,
                    orderColumn,
                    isOrderColumn,
                    onClick,
                    children
                  }: {
  className?: string,
  colspan?: number,
  name: string,
  orderColumn: string,
  isOrderColumn: boolean,
  onClick: (name: string) => void,
  children: any;
}): JSX.Element => {
  return <th
    colSpan={colspan ? colspan : 0}
    className={`${className ? className : ''} ${name} sorted
    ${name === orderColumn ? 'active ' + (isOrderColumn ? 'desc' : '') : 'desc'}`}
    onClick={() => onClick(name)}>
    {children} <img src={ArrowDownwardUrl} alt=""/>
  </th>
}

export default ThSorted;