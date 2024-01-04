import * as React from 'react';
import {Div, Screen, Text} from '~/components/Atomics';
import {IMain} from '~/pages/Main/Main.types';
import S from '~/pages/Main/Main.styles';

export const Main = (props: IMain.IView) => (
  <Screen>
    <Div flex={1} center>
      <S.Image />
      <Text textAlign="center" mt={4}>
        {`yarn g, to generate components`}
      </Text>
    </Div>
  </Screen>
);
