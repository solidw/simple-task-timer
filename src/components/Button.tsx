import styled from 'styled-components';

import Colors from '../lib/Colors';
import BoxShadow from '../lib/BoxShadow';

interface ButtonProps {
  color?: string;
  background?: string;
  padding?: number | undefined;
  inset?: boolean;
  minWidth?: number;
  maxWidth?: number;
  nonActive?: boolean;
}

const Button = styled.button`
  color: ${({ color }) => color || Colors.black};
  background: ${({ background }) => background || Colors.primary};
  padding: ${({ padding }: ButtonProps) => `${padding}px` || '0.5rem'};

  max-width: ${({ maxWidth }: ButtonProps) => `${maxWidth}px` || '100%'};
  min-width: ${({ minWidth }: ButtonProps) => `${minWidth}px` || '30px'};
  outline: none;
  border: none;

  user-select: none;

  box-shadow: ${({ inset = false }: ButtonProps) =>
    inset ? BoxShadow.neumorphismInset : BoxShadow.neumorphism};

  &:active {
    box-shadow: ${({ inset = false }: ButtonProps) =>
      inset ? BoxShadow.neumorphism : BoxShadow.neumorphismInset};
  }
`;

export default Button;
