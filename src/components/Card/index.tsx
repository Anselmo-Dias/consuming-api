import Image from 'next/image'
import { Star, Trash2 } from 'lucide-react'
import {
  Box,
  BoxStar,
  Container,
  Description,
  Header,
  Price,
  Title,
} from './styles'

import productImage from '../../assets/product.avif'
import { api } from '@/lib/axios'

interface CardProps {
  id: number
  title: string
  description: string
  price: string

  handleFetchApi: () => Promise<void>
}

export function Card({
  id,
  title,
  description,
  price,
  handleFetchApi,
}: CardProps) {
  async function handleDeleteProduct() {
    console.log(id)

    const response = await api.delete(`/products/${id}`)
    const data = await response.data

    await handleFetchApi()
    console.log(data)
  }

  return (
    <Container>
      <Image src={productImage} width={300} quality={100} alt="" />

      <Header>
        <Title>{title || 'Sem titulo'}</Title>
        <button onClick={handleDeleteProduct}>
          <Trash2 />
        </button>
      </Header>

      <Description>
        {description ||
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempore, itaque ab, velit.'}
      </Description>

      <Box>
        <BoxStar>
          <Star />
          <p>Id: {id || 'sem identificação'} </p>
        </BoxStar>
        <Price>R$ {price || 12}</Price>
      </Box>
    </Container>
  )
}
