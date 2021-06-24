import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 7rem;
  font-size: 1.7rem;
  transition: all 0.3s;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;

export const Mode = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    margin-right: 2rem;
  }
`;