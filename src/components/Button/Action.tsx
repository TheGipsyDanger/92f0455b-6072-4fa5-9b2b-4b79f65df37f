import * as React from 'react';
import {Div, Icon} from '~/components/Atomics';
import {type IButton} from './Button.types';
import S from './Button.styles';

export const Action = ({onPress, ...rest}: IButton.IViewAction) => {
  return (
    <Div
      onPress={onPress}
      testID={'Button'}
      position="absolute"
      right={30}
      bottom={44}
    >
      <S.Container {...rest} center width={55} height={55} radius={'circle'}>
        <Div flexDirection="row" center>
          <Icon name="plus" size={26} color="white" />
        </Div>
      </S.Container>
    </Div>
  );
};
