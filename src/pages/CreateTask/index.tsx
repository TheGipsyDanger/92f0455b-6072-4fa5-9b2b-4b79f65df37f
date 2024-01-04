import * as React from 'react';
import {Div, Screen, Spacing, FormInput} from '~/components';
import {ICreateTask} from '~/pages/CreateTask/CreateTask.types';
import {useCreateTask} from '~/pages/CreateTask/CreateTask.model';
import {Controller} from 'react-hook-form';

export const CreateTask = (props: ICreateTask.IView) => {
  const {control, trigger, errors, isValid, onSubmit, handleSubmit} =
    useCreateTask();

  return (
    <Screen flex={1} testID={`CreateTask`}>
      <Spacing space={2}>
        <Controller
          control={control}
          name="title"
          defaultValue=""
          render={({field: {onChange, onBlur, value, name}}) => (
            <FormInput
              autoFocus={true}
              placeholder="Fazer compras"
              {...{onChange, onBlur, value, name, trigger, errors}}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          defaultValue=""
          render={({field: {onChange, onBlur, value, name}}) => (
            <FormInput
              autoFocus={false}
              placeholder="Compras no mercado"
              {...{onChange, onBlur, value, name, trigger, errors}}
            />
          )}
        />
      </Spacing>
    </Screen>
  );
};
