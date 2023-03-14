import React from 'react';
import './AdminDetailHead.scss'
// @ts-ignore
import ArrowBackUrl, {ReactComponent as ArrowBack} from './ArrowBack.svg'

const AdminDetailsHead = ({
                            title,
                            buttons,
                            className,
                            children,
                          }: {
  title: string,
  buttons?: React.ReactNode,
  className?: string,
  children?: React.ReactNode,
}): JSX.Element => {
  return <div className={`admin-details-head ${className}`}>
    <div className="header">
      <div>
        <img className="back" onClick={() => history.back()} src={ArrowBackUrl}/>
        <h1>
          {title}
        </h1>
      </div>

      <div className="buttons">
        {buttons}
      </div>
    </div>

    <div className="content">
      {children}
    </div>
  </div>
}

export default AdminDetailsHead;