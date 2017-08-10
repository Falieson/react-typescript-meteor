import * as React from 'react';
import {Link} from 'react-router-dom'

interface IProps {
  href?: string,
  target?: string,
  to?: string,
  self?: boolean,
  label?: string,
  children?: void,
}

export default function LinkComponent({
  href=false,
  target=false,
  to=false,
  self=true,
  label='Link',
  children
}: IProps) {
  let goto = href || target || to
  if(!goto) goto = '#'

  return (
    <Link
      to={goto}
      target={self?'_self':'_blank'}
    >
      {children === undefined? label : children}
    </Link>
  )
}
