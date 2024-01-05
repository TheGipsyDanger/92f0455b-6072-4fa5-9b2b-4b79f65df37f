import * as React from 'react';
import {Div, ScreenWithHeader, Text, Button} from '~/components';
import {IMain} from '~/pages/Main/Main.types';
import S from '~/pages/Main/Main.styles';
import {Header} from '~/components';

export const Main = (props: IMain.IView) => (
  <Div flex={1} bg="white">
    <Header.Home />
    <ScreenWithHeader>
      <Button.Action variant="primary" onPress={() => alert('renan')} />
    </ScreenWithHeader>
  </Div>
);
