import React from 'react';
import s from './tag.module.scss';

type TagsT = {
  className?: string,
  values: { name: string, link?: string }[]
}
const Tags = ({
                className = '',
                values
              }: TagsT) => {
  return <div className={className ?? ''}>
    {values.map((tag, i) => <a key={i} className={`${s.tag} ${!tag.link && s.notClicked}`} href={tag.link || ''}>{tag.name}</a>)}
  </div>
}

export default Tags;