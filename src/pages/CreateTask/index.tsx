import * as React from 'react';
import {
  Div,
  Spacing,
  FormInput,
  Button,
  ScreenContent,
  Header,
  ScreenWithHeader
} from '~/components';
import {useCreateTask} from '~/pages/CreateTask/CreateTask.model';
import S from '~/pages/CreateTask/CreateTask.styles';
import {Controller} from 'react-hook-form';
import {useFileUtils} from '~/utils';

export const CreateTask = () => {
  const {
    control,
    trigger,
    errors,
    isValid,
    onSubmit,
    handleSubmit,
    isLoading,
    addFile
  } = useCreateTask();

  const {getExtensions} = useFileUtils();

  return (
    <Div flex={1} bg="white">
      <Header.WithBack label={'Criar Tarefa'} />
      <ScreenWithHeader mt={4} flex={1} testID={'CreateTask'}>
        <ScreenContent>
          <Div>
            <Spacing space={2}>
              <Div>
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
              </Div>
              <Div>
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
              </Div>
              <Div>
                <S.Label>Adicionar arquivo*</S.Label>
                <Controller
                  control={control}
                  name="file"
                  defaultValue=""
                  render={({field: {onChange, onBlur, value, name}}) => (
                    <>
                      <Button.Centralize
                        onPress={() => {
                          addFile(onChange);
                        }}
                        variant="outline"
                        label={value ? 'trocar arquivo' : 'adicionar arquivo'}
                        isLoading={false}
                      />
                      {value && (
                        <S.File>{`file.${getExtensions(value)}`}</S.File>
                      )}
                      {!value && <Div mb={3} />}
                    </>
                  )}
                />
              </Div>
              <Div>
                <Controller
                  control={control}
                  name="status"
                  defaultValue="open"
                  render={({field: {onChange, value}}) => (
                    <Div mb={4}>
                      <S.Label>E como ela está?</S.Label>
                      <Div
                        flexDirection="row"
                        justifyContent="space-between"
                        flex={1}
                      >
                        <Div flex={1} mr={1}>
                          <Button.Default
                            onPress={() => {
                              onChange('open');
                            }}
                            variant={value !== 'done' ? 'primary' : 'outline'}
                            label="fazer"
                            isLoading={false}
                          />
                        </Div>
                        <Div flex={1} ml={1}>
                          <Button.Default
                            onPress={() => {
                              onChange('done');
                            }}
                            variant={value === 'done' ? 'primary' : 'outline'}
                            label="feito"
                            isLoading={false}
                          />
                        </Div>
                      </Div>
                    </Div>
                  )}
                />
              </Div>
            </Spacing>
          </Div>
          <Button.Default
            mb={4}
            onPress={handleSubmit(onSubmit)}
            variant={isValid ? 'primary' : 'disable'}
            label="Criar"
            isLoading={isLoading}
          />
        </ScreenContent>
      </ScreenWithHeader>
    </Div>
  );
};
