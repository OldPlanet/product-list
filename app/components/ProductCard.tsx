import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from '@remix-run/react'
import { Product } from '~/utils/types'

export default function ProductCard({ product, layout = 'vertical' }: { product: Product; layout?: 'vertical' | 'horizontal' }) {
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
      }}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
    >
      <Link
        to={`/product/${product.code}`}
        style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flex: 1 }}
      >
        <CardActionArea
          sx={{
            flexGrow: 1,
            display: layout === 'horizontal' ? 'flex' : 'inline',
            alignItems: layout === 'horizontal' ? 'center' : 'normal',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              backgroundColor: 'red',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: 10,
              left: 10,
            }}
          >
            %{product.dropRatio}
          </Box>
          <CardMedia
            component='img'
            image={product.imageUrl}
            alt={product.name}
            sx={{
              width: layout === 'horizontal' ? '40%' : '100%',
              height: 120,
              objectFit: 'contain',
              p: 1,
            }}
          />
          <CardContent
            sx={{
              width: layout === 'horizontal' ? '60%' : '100%',
              height: layout === 'horizontal' ? '100%' : `calc(100% - 120px)`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 2,
            }}
          >
            <Typography color='secondary'>{product.name}</Typography>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Typography variant='h5'>{product.price.toLocaleString('tr-TR')}</Typography>
                <Typography>,00 TL</Typography>
              </Box>
              <Typography variant='body2'>{product.countOfPrices} satıcı &gt;</Typography>
              <Typography
                variant='subtitle1'
                mt={1}
              >
                {product.followCount}+ takip
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}
