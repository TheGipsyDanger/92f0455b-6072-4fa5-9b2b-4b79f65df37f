import * as React from 'react';
import {Div, FormInput, Text, Screen, Spacing, Button} from '~/components';
import {IWelcome} from '~/pages/Welcome/Welcome.types';
import {useWelcome} from '~/pages/Welcome/Welcome.model';
import {Controller} from 'react-hook-form';

export const Welcome = (_props: IWelcome.IView) => {
  const {control, trigger, errors, isValid, onSubmit, handleSubmit} =
    useWelcome();
  return (
    <Screen flex={1} testID={`Welcome`}>
      <Div mt={4} px={4} flex={1} justifyContent="space-between">
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
        <Div mb={4}>
          <Button
            onPress={handleSubmit(onSubmit)}
            variant={isValid ? 'primary' : 'disable'}
            label="Continuar"
            isLoading={false}
          />
        </Div>
      </Div>
    </Screen>
  );
};
