import styled from "styled-components";

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 2rem;
  width: 22%;
  font-size: 2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;
