import { Box, Button, Card, CardContent, CardMedia, Chip, Grid2, Rating, Typography } from '@mui/material'
import { useState } from 'react'
import { ProductDetail } from '~/utils/types'

export default function ProductDetailCard({ product }: { product: ProductDetail }) {
  const [selectedStorageOption, setSelectedStorageOption] = useState(0)

  const lastUpdateTranslateTurkish = (text: string) => {
    if (text === 'now') {
      return 'şimdi'
    } else if (text === 'yesterday') {
      return 'dün'
    } else if (text.includes('hours ago')) {
      return text.replace('hours ago', 'saat önce')
    }

    return text
  }

  return (
    <Card
      sx={{
        width: { xs: '80%', sm: '50%', md: '40%', lg: '30%' },
        height: { xs: '65%', sm: '60%' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CardContent
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          position: 'relative',
        }}
      >
        <Typography color='secondary'>{product.mkName}</Typography>
        <Typography>{product.productName}</Typography>
        <Chip
          label={product.badge}
          color='success'
          sx={{ my: 1 }}
        />
        <Rating
          value={product.rating}
          readOnly
          size='small'
          sx={{
            position: { md: 'absolute' },
            top: { md: 20 },
            right: { md: 20 },
          }}
        />
      </CardContent>
      <CardMedia
        component='img'
        image={product.imageUrl}
        alt={product.productName}
        sx={{
          height: { xs: 160, lg: 200 },
          objectFit: 'contain',
          pb: 2,
        }}
      />
      <CardContent
        sx={{
          width: '100%',
          height: '60%',
          p: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            bgcolor: 'whitesmoke',
            p: 1,
            gap: 1,
          }}
        >
          <Typography variant='body2'>Kapasite seçenekleri:</Typography>
          <Grid2
            container
            spacing={2}
          >
            {product.storageOptions.map((option, index) => (
              <Grid2 key={index}>
                <Button
                  variant={index === selectedStorageOption ? 'contained' : 'outlined'}
                  onClick={() => {
                    setSelectedStorageOption(index)
                  }}
                >
                  {option}
                </Button>
              </Grid2>
            ))}
          </Grid2>
        </Box>
        <Typography variant='subtitle2'>{product.countOfPrices} satıcı içinde kargo dahil en ucuz fiyat seçeneği</Typography>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Typography variant='h5'>{product.price.toLocaleString('tr-TR')}</Typography>
          <Typography>,00 TL</Typography>
        </Box>
        <Typography color='success'>{product.freeShipping ? 'Ücretsiz kargo' : ''}</Typography>
        <Typography color='textDisabled'>Son güncelleme: {lastUpdateTranslateTurkish(product.lastUpdate)}</Typography>
      </CardContent>
    </Card>
  )
}
