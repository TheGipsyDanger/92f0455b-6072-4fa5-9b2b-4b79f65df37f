import * as React from 'react';
import {
  Div,
  FormInput,
  Text,
  Screen,
  Spacing,
  Button,
  ScreenContent
} from '~/components';
import {useWelcome} from '~/pages/Welcome/Welcome.model';
import {Controller} from 'react-hook-form';

export const Welcome = () => {
  const {control, trigger, errors, isValid, onSubmit, handleSubmit, isLoading} =
    useWelcome();
  return (
    <Screen flex={1} testID={'Welcome'}>
      <ScreenContent mt={4}>
        <Div>
          <Spacing space={2}>
            <Div mb={4}>
              <Text textAlign="center" font="bold" size="big">
                Olá
              </Text>
              <Text textAlign="center" font="light" size="xbig">
                Como podemos te chamar?
              </Text>
            </Div>
            <Controller
              control={control}
              name="name"
              defaultValue=""
              render={({field: {onChange, onBlur, value, name}}) => (
                <FormInput
                  autoFocus={true}
                  placeholder="ex: vanesso"
                  {...{onChange, onBlur, value, name, trigger, errors}}
                />
              )}
            />
          </Spacing>
        </Div>
        <Button.Default
          mb={4}
          onPress={handleSubmit(onSubmit)}
          variant={isValid ? 'primary' : 'disable'}
          label="Continuar"
          isLoading={isLoading}
        />
      </ScreenContent>
    </Screen>
  );
};
