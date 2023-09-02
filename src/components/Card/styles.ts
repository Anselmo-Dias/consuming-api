import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 300px;

  border: 1px solid black;
  font-family: 'Poppins';

  transition: all 0.2s ease;

  border-radius: 5px;

  &:hover {
    box-shadow: #000 4px 4px 0 0;
  }

  overflow: hidden;
`

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;

  margin-top: 1rem;
`

export const Header = styled.header`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  opacity: 0.6;

  margin-top: 0.5rem;

  text-align: justify;

  margin-inline: 1rem;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 2rem;

  border-top: 1px solid black;
`

export const BoxStar = styled.div`
  border-right: 1px solid black;

  width: 70%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.5rem;
  padding: 1rem;

  border-right: 1px solid black;
`

export const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 30%;
`
