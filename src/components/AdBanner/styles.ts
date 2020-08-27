import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-ad-text);
  text-align: center;
  padding: 8px 0;

  a {
    text-decoration: none;
    font-size: 15px;
    color: var(--color-ad-text);
    cursor: pointer;

    span {
      color: var(--color-link);
    }

    h3 {
    }
    &:hover {
      text-decoration: underline;

      span {
        text-decoration: underline;
      }
    }
  }
`;
