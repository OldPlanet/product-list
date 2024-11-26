import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Box, Typography } from '@mui/material'
import HorizontalList from '~/components/HorizontalList'
import VerticalList from '~/components/VerticalList'
import { Product } from '~/utils/types'

export const meta: MetaFunction = () => {
  return [{ title: 'Product List' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export async function loader() {
  const response = await fetch('https://mock.akakce.dev/page.json')
  if (!response.ok) {
    throw new Response('Product list not found', { status: 404 })
  }

  return response.json()
}

export default function Index() {
  const { horizontalProductList, productList }: { horizontalProductList: Product[]; productList: Product[] } = useLoaderData()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, gap: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <img
          src='banayeni-icon.png'
          alt='banayeni-icon'
          height={60}
        />
        <Typography variant='h3'>Product List</Typography>
      </Box>
      <HorizontalList products={horizontalProductList} />
      <VerticalList
        initialProducts={productList}
        initialUrl={'https://mock.akakce.dev/page.json'}
      />
    </Box>
  )
}
