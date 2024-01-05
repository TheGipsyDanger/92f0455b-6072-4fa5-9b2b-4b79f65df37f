import * as React from 'react';
import {
  Div,
  Spacing,
  FormInput,
  Button,
  Text,
  ScreenContent,
  Header,
  ScreenWithHeader,
} from '~/components';
import {ICreateTask} from '~/pages/CreateTask/CreateTask.types';
import {useCreateTask} from '~/pages/CreateTask/CreateTask.model';
import S from '~/pages/CreateTask/CreateTask.styles';
import {Controller} from 'react-hook-form';

export const CreateTask = (props: ICreateTask.IView) => {
  const {control, trigger, errors, isValid, onSubmit, handleSubmit} =
    useCreateTask();

  return (
    <Div flex={1} bg="white">
      <Header.WithBack />
      <ScreenWithHeader mt={4} flex={1} testID={`CreateTask`}>
        <ScreenContent>
          <Div>
            <Spacing space={2}>
              <Text mb={4} font="bold" size="big">
                Criar Tarefa
              </Text>
              <Controller
                control={control}
                name="title"
                defaultValue=""
                render={({field: {onChange, onBlur, value, name}}) => (
                  <FormInput
                    label={<S.Label>Nome</S.Label>}
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
                    label={<S.Label>Descrição</S.Label>}
                    autoFocus={false}
                    placeholder="Compras no mercado"
                    {...{onChange, onBlur, value, name, trigger, errors}}
                  />
                )}
              />
              <Spacing space={4}>
                <Button.Centralize
                  variant="outline"
                  label="adicionar arquivo"
                  isLoading={false}
                />
                <Controller
                  control={control}
                  name="status"
                  defaultValue=""
                  render={({field: {onChange, onBlur, value, name}}) => (
                    <Div mb={4}>
                      <S.Label>E como ela está?</S.Label>
                      <Div
                        flexDirection="row"
                        justifyContent="space-between"
                        flex={1}
                      >
                        <Div flex={1} mr={1}>
                          <Button.Default
                            onPress={() => onChange('done')}
                            variant={value === 'done' ? 'primary' : 'outline'}
                            label="feito"
                            isLoading={false}
                          />
                        </Div>
                        <Div flex={1} ml={1}>
                          <Button.Default
                            onPress={() => onChange('open')}
                            variant={value !== 'done' ? 'primary' : 'outline'}
                            label="fazer"
                            isLoading={false}
                          />
                        </Div>
                      </Div>
                    </Div>
                  )}
                />
              </Spacing>
            </Spacing>
          </Div>
          <Button.Default
            mb={4}
            variant={isValid ? 'primary' : 'disable'}
            label="renan"
            isLoading={false}
          />
        </ScreenContent>
      </ScreenWithHeader>
    </Div>
  );
};
