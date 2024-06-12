import styled from 'styled-components';

const Button = styled.button<{ color: string }>`
  padding: 1rem 1.3rem;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${(props) => props.theme.colors[props.color]};
  cursor: pointer;
  border-radius: 10px;
`;

export default Button;
