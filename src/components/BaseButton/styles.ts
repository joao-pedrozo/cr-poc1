import styled from 'styled-components';

export const Wrapper = styled.button`
  padding: 10px 0;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.textDanger};
  color: #fff;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
`;
