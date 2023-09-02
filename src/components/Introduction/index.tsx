import { useRouter } from 'next/router'
import { Btn, Container, ContainerBtn, Title, Wrapper } from './styles'

export function Introduction() {
  const router = useRouter()

  const pageIsHome = router.asPath === '/' ? 'true' : 'false'
  const pageIsProduct = router.asPath === '/products' ? 'true' : 'false'

  return (
    <Container>
      <Wrapper>
        <Title>Vários serviços e produtos a sua disposição</Title>

        <ContainerBtn>
          <Btn ishome={pageIsHome} onClick={() => router.push('/')}>
            Serviços
          </Btn>
          <Btn ishome={pageIsProduct} onClick={() => router.push('/products')}>
            Produtos
          </Btn>
        </ContainerBtn>
      </Wrapper>
    </Container>
  )
}
