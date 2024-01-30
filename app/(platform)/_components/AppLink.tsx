import Link from 'next/link';
import React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export const AppLink = ({ href, children = undefined, ...rest }: LinkProps) => (
  <Link href={href!} {...rest}>
    {children}
  </Link>
);