import * as React from 'react';
import {Div, ScreenWithHeader, Text} from '~/components/Atomics';
import {IMain} from '~/pages/Main/Main.types';
import S from '~/pages/Main/Main.styles';
import {Header} from '~/components';

export const Main = (props: IMain.IView) => (
  <Div flex={1}>
    <Header.Home />
    <ScreenWithHeader>
      <S.Image />
      <Text textAlign="center" mt={4}>
        {`yarn g, to generate components`}
      </Text>
    </ScreenWithHeader>
  </Div>
);
