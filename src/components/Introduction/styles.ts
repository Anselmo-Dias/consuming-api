import styled from 'styled-components'

export const Container = styled.div`
  border-bottom: 1px solid black;
`

export const Wrapper = styled.div`
  width: min(70rem, 100%);
  margin-inline: auto;
  padding-inline: 1rem;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  gap: 1.5rem;

  padding-block: 2rem;
`
export const Title = styled.h2`
  font-family: 'Poppins';
  font-size: 1.8rem;
  font-weight: 500;
`

export const ContainerBtn = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`

interface BtnProps {
  ishome?: string
}

export const Btn = styled.button<BtnProps>`
  width: 100%;
  max-width: 100px;
  padding: 0.5rem;

  background-color: transparent;

  border: 1px solid
    ${({ ishome }) => (ishome === 'true' ? ' black' : 'transparent')};

  border-radius: 999px;

  transition: border 0.01s;

  &:hover {
    border: 1px solid black;
  }
`
