import * as React from 'react';
import {Platform, ScrollView} from 'react-native';
import {Wrapped} from '~/components/Atomics/Wrapped';
import {type IPage} from '~/components/Atomics/Page/Page.types';
import S from '~/components/Atomics/Page/Page.styles';

export const PageWithHeader = ({
  children,
  bg = 'white',
  ...props
}: IPage.IView) => (
  <S.KeyboardAvoidStyled
    bg={bg}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  >
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps={'handled'}
    >
      <Wrapped flexGrow={1} bg={bg} {...props}>
        {children}
      </Wrapped>
    </ScrollView>
  </S.KeyboardAvoidStyled>
);
