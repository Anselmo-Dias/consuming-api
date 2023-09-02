import styled from 'styled-components'

export const BoxFilter = styled.div`
  display: flex;
  align-items: flex-start;

  padding-inline: 1rem;

  flex-direction: column;

  border-bottom: 1px solid black;

  width: 100%;

  max-width: 300px;

  height: 300px;

  gap: 1rem;

  h4 {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 300;
    opacity: 0.6;

    border-bottom: 1px solid black;

    width: 100%;

    padding-bottom: 1rem;
  }
`

export const Input = styled.input`
  border: 1px solid black;
  outline: none;

  width: 100%;

  padding: 1rem;
  border-radius: 5px;
  font-size: 1rem;
`
