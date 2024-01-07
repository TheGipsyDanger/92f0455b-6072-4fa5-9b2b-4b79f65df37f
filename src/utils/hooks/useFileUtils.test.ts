import {useFileUtils} from './useFileUtils';

describe('useFileUtils', () => {
  it('deve retornar a extensão correta', () => {
    const {getExtensions} = useFileUtils();

    const resultWithExtension = getExtensions('arquivo.txt');
    expect(resultWithExtension).toEqual('txt');

    const resultWithoutExtension = getExtensions('arquivoSemExtensao');
    expect(resultWithoutExtension).toEqual('');
  });
});
