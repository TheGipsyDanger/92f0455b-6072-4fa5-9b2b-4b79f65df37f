import * as React from 'react';
import {Image} from 'react-native';
import {
  Div,
  ScreenContent,
  Header,
  ScreenWithHeader,
  Text,
  Spacing,
  Button
} from '~/components';
import {useTaskDetails} from '~/pages/TaskDetails/TaskDetails.model';
import S from '~/pages/TaskDetails/TaskDetails.styles';

export const TaskDetails = () => {
  const {selectedTask} = useTaskDetails();
  return (
    <Div flex={1} bg="white">
      <Header.WithBack label={'Visualizar Tarefa'} />
      <ScreenWithHeader mt={4} flex={1} testID={'CreateTask'}>
        <ScreenContent>
          <Div>
            <Spacing space={2}>
              <Div>
                <S.Label>Nome</S.Label>
                <S.Container px={3}>
                  <Text>{selectedTask.title}</Text>
                </S.Container>
                <Text mt={1}>{''}</Text>
              </Div>
              <Div>
                <S.Label>Descrição</S.Label>
                <S.Container>
                  <Text numberOfLines={3}>{selectedTask.description}</Text>
                </S.Container>
                <Text mt={1}>{''}</Text>
              </Div>
              <Div mb={4}>
                <S.Label>E como ela está?</S.Label>
                <Div
                  flexDirection="row"
                  justifyContent="space-between"
                  flex={1}
                >
                  <Div flex={1} mr={1}>
                    <Button.Default
                      variant={
                        selectedTask.status === 'open' ? 'primary' : 'outline'
                      }
                      label="fazer"
                      isLoading={false}
                    />
                  </Div>
                  <Div flex={1} ml={1}>
                    <Button.Default
                      variant={
                        selectedTask.status === 'done' ? 'primary' : 'outline'
                      }
                      label="feito"
                      isLoading={false}
                    />
                  </Div>
                </Div>
              </Div>
              {selectedTask.file && (
                <Div>
                  <Image
                    resizeMode="contain"
                    source={{uri: selectedTask.file}}
                    style={{width: '100%', height: 200}}
                  />
                </Div>
              )}
            </Spacing>
          </Div>
          <Div>
            <Text textAlign="center" color="black-clean" mb={4}>
              {'Em breve você vai poder editar suas tarefas.'}
            </Text>
            <Button.Default
              mb={4}
              variant={'disable'}
              label="Editar"
              isLoading={false}
            />
          </Div>
        </ScreenContent>
      </ScreenWithHeader>
    </Div>
  );
};
