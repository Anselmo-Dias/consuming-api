import { Card } from '@/components/Card'
import { Header } from '../../components/Header'
import { Introduction } from '../../components/Introduction'
import { BoxCards, BoxFilterAndForm, Container, Content, Main } from './styles'
import { Filter } from '@/components/Filter'
import Form from '@/components/Form'
import { useContext } from 'react'
import { EcommerceContext } from '../../context/EcommerceContext'

export default function Home() {
  const { products, handleFetchEcommerceApi } = useContext(EcommerceContext)

  return (
    <Container>
      <Header />
      <Introduction />
      <Content>
        <Main>
          <BoxFilterAndForm>
            <Filter />
            <Form />
          </BoxFilterAndForm>
          <BoxCards>
            {products.length > 0
              ? products?.map((product) => {
                  return (
                    <Card
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      handleFetchApi={handleFetchEcommerceApi}
                    />
                  )
                })
              : null}
          </BoxCards>
        </Main>
      </Content>
    </Container>
  )
}
