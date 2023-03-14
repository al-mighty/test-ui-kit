import {Spin} from 'antd'
import React from 'react'
import './index.scss'

type SummaryBlockType = {
  title?: JSX.Element | string,
  className?: string
  caption: string,
  value: JSX.Element,
  label?: string
  loading?: boolean
}
const SummaryBlock = ({title, loading = false, className, caption, value, label}: SummaryBlockType) => {
  return (
    <div className={`SummaryBlock ${loading ? 'loading' : 'loaded'} ${className ?? ''}`}>
      <div className="title">
        <h5>
          {title}
        </h5>
        {label ? <span className="label">
          {label}
        </span> : ''}
      </div>
      <div className="footer">
        <Spin spinning={loading}>
          <span className="caption">{caption}</span>
          <div className="value">
            {value}
          </div>
        </Spin>
      </div>
    </div>
  )
}

export default SummaryBlock;