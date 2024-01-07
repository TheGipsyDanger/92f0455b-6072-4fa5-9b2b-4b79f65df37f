import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '~/utils/navigator';
import Routes from '../../routes/Routes';
import {useInitalConfigs} from '~/utils/hooks/useInitalConfigs';

export const Application = (): JSX.Element => {
  const {isLoading} = useInitalConfigs();

  if (isLoading) return <></>;

  return (
    <NavigationContainer ref={navigationRef}>
      <Routes />
    </NavigationContainer>
  );
};
