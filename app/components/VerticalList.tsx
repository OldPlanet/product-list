import { useEffect, useState } from 'react'
import { Box, Grid2, Pagination } from '@mui/material'
import ProductCard from './ProductCard'
import { Product } from '~/utils/types'

export default function VerticalList({ initialProducts, initialUrl }: { initialProducts: Product[]; initialUrl: string }) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [urls, setUrls] = useState<string[]>([initialUrl])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)

  useEffect(() => {
    const getPageUrls = async (nextUrl: string) => {
      const response = await fetch(nextUrl)
      const data = await response.json()

      if (data.nextUrl && !urls.includes(data.nextUrl)) {
        setUrls((prevUrls) => [...prevUrls, data.nextUrl])
        setTotalPages((prevTotal) => prevTotal + 1)

        getPageUrls(data.nextUrl)
      }
    }

    getPageUrls(initialUrl)
  }, [])

  const handlePageChange = async (_: unknown, page: number) => {
    const response = await fetch(urls[page - 1])
    if (!response.ok) {
      console.error('Failed to fetch data.')
      return
    }

    const data = await response.json()
    setProducts(data.productList)
    setCurrentPage(page)
  }

  return (
    <Box sx={{ maxWidth: 420, bgcolor: 'whitesmoke', borderRadius: 2, px: 1, py: 2 }}>
      <Grid2
        container
        spacing={1}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        {products.map((product) => (
          <Grid2
            height={300}
            size={6}
            key={product.code}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  )
}
