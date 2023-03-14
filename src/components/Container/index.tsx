import React from 'react'
import './index.scss'

const Container = (props: { className?: string, children: any }) => {
  const {className, children} = props;
  return (
    <div className={`container ${className}`}>
      {children && children}
    </div>
  )
}

export default Container;