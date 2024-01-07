/* eslint-disable @typescript-eslint/no-var-requires */
import {renderHook} from '@testing-library/react-hooks';
import {usePermissionsRealm} from './usePermissionsRealm';
import {waitFor} from '@testing-library/react-native';

jest.mock('~/configs/realm', () => {
  const Realm = require('realm');
  const {PermissionsSchema} = require('../realm/models/permissions');
  return new Realm({inMemory: true, schema: [PermissionsSchema]});
});

describe('usePermissionsRealm', () => {
  it('deve criar, obter e limpar permissões corretamente', async () => {
    const {result} = renderHook(() => usePermissionsRealm());

    const newPermissions = {
      granted: 'true',
      status: 'true',
      requested: 'true'
    };

    await waitFor(() => {
      result.current.create(newPermissions);
    });

    const retrievedPermissions = await waitFor(() => result.current.get());
    expect(retrievedPermissions).toEqual(newPermissions);

    await waitFor(() => {
      result.current.clean();
    });

    const cleanedPermissions = await waitFor(() => result.current.get());
    expect(cleanedPermissions).toBeUndefined();
  });
});
