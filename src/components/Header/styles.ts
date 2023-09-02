import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Poppins';
  width: 100%;
  display: flex;
  justify-content: center;

  border-bottom: 1px solid black;
`

export const Wrapper = styled.div`
  width: min(70rem, 100%);
  margin-inline: auto;
  padding-inline: 1rem;

  display: flex;
  align-items: center;

  justify-content: space-between;

  padding-block: 2rem;
`

export const Title = styled.h1`
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */

  gap: 1rem;
  width: 30%;
`

export const Input = styled.input`
  width: 100%;
  padding: 1rem;

  font-size: 'Poppins' sans-serif;
  font-size: 1rem;

  border: 1px solid black;

  border-radius: 5px;

  &:focus {
    border-color: blue;
  }

  outline: none;
`

export const Button = styled.button`
  width: 40%;
  padding: 1rem;

  background-color: transparent;

  font-size: 'Poppins' sans-serif;
  font-size: 1rem;

  border: 1px solid black;

  border-radius: 5px;

  cursor: pointer;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  transition: all 0.2s ease;

  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: #000 4px 4px 0 0;
  }

  &:active {
    transform: translate(-0px, -0px);
    box-shadow: #000 0px 0px 0 0;
  }
`

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  gap: 1.5rem;
`

export const IntroductionTitle = styled.h2`
  font-family: 'Poppins';
  font-size: 2rem;
  font-weight: 700;
`

export const ContainerBtn = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;
`

export const IntroductionBtn = styled.button`
  width: 100%;
  max-width: 100px;
  padding: 1.6rem;

  border-radius: 999px;
`
