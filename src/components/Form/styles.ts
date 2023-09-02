import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  width: 100%;

  padding-inline: 1rem;
  padding-bottom: 1rem;

  gap: 1rem;

  span {
    width: 100%;
    font-size: 0.8rem;
    color: red;
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

export const Textarea = styled.textarea``

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
