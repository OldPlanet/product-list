import { Box } from '@mui/material'
import { useLoaderData } from '@remix-run/react'
import ProductDetailCard from '~/components/ProductDetailCard'
import { ProductDetail } from '~/utils/types'

export async function loader({ params }: { params: { productId: string } }) {
  const response = await fetch(`https://mock.akakce.dev/product${params.productId}.json`)
  if (!response.ok) {
    throw new Response('Product not found', { status: 404 })
  }

  return response.json()
}

export default function ProductDetailPage() {
  const product: ProductDetail = useLoaderData()

  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ProductDetailCard product={product} />
    </Box>
  )
}
