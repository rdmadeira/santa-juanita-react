import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 6px;
  width: 50%;
  align-self: center;
  color: var(--snow);
  background-color: var(--mulberry);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--pink-lavender);
  }
  @media ${({ device }) => device} {
    order: 2;
    width: 28%;
    margin-left: 10px;
  }
`;
// device.laptop;
