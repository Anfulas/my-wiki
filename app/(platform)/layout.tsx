"use client"

import { Stack, Theme } from '@carbon/react'
import React from 'react'
import { SideNavRailWHeader } from './_components/SideNavRailWHeader'


export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Theme theme="g90">
        <SideNavRailWHeader />
      </Theme>
      <Stack className='p-44'>
        {children}
      </Stack>
    </div>
  )
}

