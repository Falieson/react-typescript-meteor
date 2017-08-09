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
  const goto = href || target || to || '#'

  return (
    <Link
      to={goto}
      target={self?'_self':'_blank'}
    >
      {children || label}
    </Link>
  )
}