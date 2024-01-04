import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IHeader} from './Header.types';
import {useHeader} from './Header.model';
import S from './Header.styles';

export const Header = (props: IHeader.IView) => {
  const {top, action} = useHeader();
  return (
    <Div testID={`Header`}>
      <Div height={top}></Div>
      <Div height={55} center>
        <S.Title>{`Header`}</S.Title>
      </Div>
      <Div height={55} flexDirection="row" justifyContent="space-between">
        <S.Action onPress={action}>
          <S.Label>{`Todos`}</S.Label>
        </S.Action>
        <S.Action onPress={action}>
          <S.Label>{`Abertas`}</S.Label>
        </S.Action>
      </Div>
    </Div>
  );
};
