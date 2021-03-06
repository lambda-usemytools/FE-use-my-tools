import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%;
  border: 1px solid #979797;
  background-color: #DAAB1D;
  height: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1e4a56;
  
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
  
  h1 {
  a {
  font-size: 3.2rem;
  margin-left: 80px;
  font-weight: 600;
  
  @media (max-width: 800px) {
    margin-left: 0;
    }
  }
  }
  a {
    font-size: 2rem;
    margin-right: 32px;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
    &:last-child {
      margin-right: 78px;
      
      @media (max-width: 800px) {
        margin-right: 0;
      }
    }
  }
`;
