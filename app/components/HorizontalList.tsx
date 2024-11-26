import { Box, Pagination, PaginationItem } from '@mui/material'
import ProductCard from './ProductCard'
import { Product } from '~/utils/types'
import { useRef, useState } from 'react'

export default function HorizontalList({ products }: { products: Product[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const isMouseDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const velocity = useRef(0)
  const isDragging = useRef(false)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft: currentScrollLeft, offsetWidth } = scrollRef.current
    const newIndex = Math.round(currentScrollLeft / offsetWidth)
    setActiveIndex(newIndex)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    isMouseDown.current = true
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = x - startX.current
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  const handleMouseUpOrLeave = () => {
    isMouseDown.current = false
  }

  return (
    <Box
      sx={{
        maxWidth: 400,
        padding: 1,
      }}
    >
      <Box
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        sx={{
          display: 'flex',
          padding: 1,
          gap: 1.5,
          overflow: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        {products.map((product) => (
          <Box
            key={product.code}
            sx={{
              flex: '0 0 100%',
              scrollSnapAlign: 'center',
            }}
          >
            <ProductCard
              product={product}
              layout='horizontal'
            />
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination
          count={products.length}
          page={activeIndex + 1}
          onChange={(e, value) => {
            setActiveIndex(value - 1)
            scrollRef.current?.scrollTo({
              left: scrollRef.current.offsetWidth * (value - 1),
              behavior: 'smooth',
            })
          }}
        />
      </Box>
    </Box>
  )
}
