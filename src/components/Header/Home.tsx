import * as React from 'react';
import {Div} from '~/components/Atomics';
import {useHeader} from './Header.model';
import S from './Header.styles';

export const Home = () => {
  const {top, action, type, name} = useHeader();
  const isAll = type === 'all';
  return (
    <Div testID={'Header'}>
      <Div height={top}></Div>
      <Div height={55} center>
        <S.Title>{`Tarefas do ${name}`}</S.Title>
      </Div>
      <Div height={55} flexDirection="row" justifyContent="space-between">
        <S.Action
          borderColor={isAll ? 'primary' : 'transparent'}
          onPress={() => {
            action('all');
          }}
        >
          <S.Label>{'Todas'}</S.Label>
        </S.Action>
        <S.Action
          borderColor={!isAll ? 'primary' : 'transparent'}
          onPress={() => {
            action('open');
          }}
        >
          <S.Label>{'Abertas'}</S.Label>
        </S.Action>
      </Div>
    </Div>
  );
};
