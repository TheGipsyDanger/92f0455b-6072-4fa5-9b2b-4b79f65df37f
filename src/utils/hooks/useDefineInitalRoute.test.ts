import {useDefineInitalRoute} from './useDefineInitalRoute';

// Mock para useRouterRealm
jest.mock('./useRouterRealm', () => ({
  useRouterRealm: () => ({
    get: jest.fn(() => ({
      initialRouter: 'Welcome'
    }))
  })
}));

describe('useDefineInitalRoute', () => {
  it('deve retornar a rota inicial correta', () => {
    const result = useDefineInitalRoute();
    expect(result).toEqual('Welcome');
  });
});
