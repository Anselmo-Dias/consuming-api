import {
  Wrapper,
  Container,
  FormContainer,
  Title,
  Input,
  Button,
} from './styles'

export function Header() {
  function handleSubmitForm(event: any) {
    event.preventDefault()
  }

  return (
    <Container>
      <Wrapper>
        <Title>AK - Infinity Venture</Title>

        <FormContainer>
          <Input type="text" placeholder="Buscar serviços" />
          <Button onClick={handleSubmitForm}>Comprar</Button>
        </FormContainer>
      </Wrapper>
    </Container>
  )
}
