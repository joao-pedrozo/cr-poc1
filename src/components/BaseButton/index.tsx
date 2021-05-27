import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const BaseButton = ({ children, ...rest }: BaseButtonProps) => {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
};

export default BaseButton;
