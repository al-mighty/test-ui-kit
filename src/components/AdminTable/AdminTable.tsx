import React from 'react';

import './index.scss';

type AdminTableTypes = {
  buttons?: any,
  children: React.ReactNode,
  title?: string,
  caption?: React.ReactNode,
  isPage?: boolean
}

const AdminTable = ({
                      buttons,
                      children,
                      title,
                      caption,
                      isPage
                    }: AdminTableTypes) => {
  return (<div className={`table-content ${isPage ? 'page' : 'subpage'}`}>
    <div className={`head ${isPage ? 'page' : 'subpage'}`}>
      {title && <div className={`title`}>
          <h2 className={`${isPage ? 'page' : 'subpage'}`}>{title}</h2>
        {caption ? <div className={'caption'}>{caption}</div> : ''}
      </div>}
      {buttons && <div className="buttons">
        {buttons}
      </div>}
    </div>
    {children}
  </div>)
}

export default AdminTable;