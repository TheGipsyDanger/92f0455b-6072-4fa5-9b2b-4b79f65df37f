import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IHeader} from './Header.types';
import {useHeader} from './Header.model';
import S from './Header.styles';

export const Header = (props: IHeader.IView) => {
  const {top, action, type} = useHeader();

  const isAll = type === 'all';
  return (
    <Div testID={`Header`}>
      <Div height={top}></Div>
      <Div height={55} center>
        <S.Title>{`Header`}</S.Title>
      </Div>
      <Div height={55} flexDirection="row" justifyContent="space-between">
        <S.Action
          borderColor={isAll ? 'black' : 'transparent'}
          onPress={() => action('all')}
        >
          <S.Label>{`Todos`}</S.Label>
        </S.Action>
        <S.Action
          borderColor={!isAll ? 'black' : 'transparent'}
          onPress={() => action('open')}
        >
          <S.Label>{`Abertas`}</S.Label>
        </S.Action>
      </Div>
    </Div>
  );
};
