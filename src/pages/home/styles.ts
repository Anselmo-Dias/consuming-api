import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Poppins';
  width: 100%;
`

export const Content = styled.div`
  width: min(70rem, 100%);
  margin-inline: auto;
  padding-inline: 1rem;
`

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-block: 4rem;
`

export const BoxFilterAndForm = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;

  border: 1px solid black;

  width: 100%;

  max-width: 300px;

  max-height: 700px;

  gap: 1rem;

  border-radius: 5px;
`

export const BoxCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  flex-wrap: wrap;

  & + & {
    margin-top: 2rem;
  }
`
