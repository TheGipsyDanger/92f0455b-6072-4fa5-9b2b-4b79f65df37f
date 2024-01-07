import * as React from 'react';
import {
  Button,
  Conditional,
  Div,
  Screen,
  ScreenContent,
  Spacing,
  Text
} from '~/components';
import {useRequestPermissions} from '~/pages/RequestPermissions/RequestPermissions.model';

export const RequestPermissions = () => {
  const {
    goToMain,
    requestAction,
    goToSettigs,
    isFirstTime,
    whereParam,
    goBack
  } = useRequestPermissions();

  return (
    <Screen flex={1} testID={'Welcome'}>
      <ScreenContent mt={4}>
        <Div>
          <Spacing space={4}>
            <Text textAlign="center" font="bold" size="big">
              Melhor experiência
            </Text>
            <Text textAlign="center" font="light" size="xbig">
              {
                'Para experiência completa, precisamos do acesso a seus arquivos.'
              }
            </Text>
            <Div>
              <Spacing space={2}>
                <Text>{'• Tarefas mais personalizadas.'}</Text>
                <Text>{'• Tarefas com documentos.'}</Text>
              </Spacing>
            </Div>
          </Spacing>
        </Div>
        <Div mb={3}>
          <Spacing space={2}>
            <Button.Default
              isLoading={false}
              label="Permitir"
              variant="primary"
              onPress={isFirstTime ? requestAction : goToSettigs}
            />
            <Conditional render={Boolean(whereParam)}>
              <Button.Default
                isLoading={false}
                label="Voltar"
                variant="link"
                onPress={goBack}
              />
              <Button.Default
                isLoading={false}
                label="Deixar para depois"
                variant="link"
                onPress={goToMain}
              />
            </Conditional>
          </Spacing>
        </Div>
      </ScreenContent>
    </Screen>
  );
};
