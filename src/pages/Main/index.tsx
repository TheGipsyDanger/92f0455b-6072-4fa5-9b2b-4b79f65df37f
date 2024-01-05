import * as React from 'react';
import {Div, ScreenWithHeader, Text, Button} from '~/components';
import {IMain} from '~/pages/Main/Main.types';
import {useMain} from '~/pages/Main/Main.model';
import {Header} from '~/components';

export const Main = (props: IMain.IView) => {
  const {goToCreateTask} = useMain();
  return (
    <Div flex={1} bg="white">
      <Header.Home label="Tarefas do fulano" />
      <ScreenWithHeader>
        <Button.Action variant="primary" onPress={goToCreateTask} />
      </ScreenWithHeader>
    </Div>
  );
};
