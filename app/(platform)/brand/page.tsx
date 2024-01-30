"use client" 

import { AspectRatio, Column, Grid, Stack } from '@carbon/react'
import React from 'react'

const BrandPage = () => {
  return <Grid style={{ backgroundColor: 'gray' }} >
  <Column sm={1} md={2} lg={4} style={{ margin: '0 8px' }}>
    <AspectRatio ratio="1x1">Content1</AspectRatio>
  </Column>
  <Column sm={1} md={2} lg={4} style={{ margin: '0 8px' }}>
    <AspectRatio ratio="1x1">Content2</AspectRatio>
  </Column>
  <Column sm={1} md={2} lg={4}style={{ margin: '0 8px' }}>
    <AspectRatio ratio="1x1">Content3</AspectRatio>
  </Column>
  <Column sm={1} md={2} lg={4}style={{ margin: '0 8px' }}>
    <AspectRatio ratio="1x1">Content4</AspectRatio>
  </Column>
</Grid>;
}

export default BrandPage
