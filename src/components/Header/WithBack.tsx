import * as React from 'react';
import {Div, Icon} from '~/components/Atomics';
import {IHeader} from './Header.types';
import {useHeader} from './Header.model';
import S from './Header.styles';

export const WithBack = ({label = 'Header'}: IHeader.IView) => {
  const {top, goBack} = useHeader();
  return (
    <Div testID={`Header`}>
      <Div height={top}></Div>
      <Div flexDirection="row" mx={3} center>
        <Div onPress={goBack} width={26} height={26}>
          <Icon name="arrowleft" color="black" size={26} />
        </Div>
        <Div height={55} flex={1} center>
          <S.Title>{label}</S.Title>
        </Div>
        <Div width={26} height={26}>
          <Icon name="" color="black" size={26} />
        </Div>
      </Div>
    </Div>
  );
};
