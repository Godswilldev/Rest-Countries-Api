import styled from "styled-components";
import { device } from "../MediaQueries";
export const Input = styled.input`
  border: none;
  outline: none;
  padding: 1.7rem;
  margin-bottom: 7rem;
  width: 40rem;
  font-size: 1.7rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
  @media ${device.mobileL} {
    margin-bottom: 3.5rem;
  }
  @media ${device.mobileM} {
    width: 30rem;
  }
`;
