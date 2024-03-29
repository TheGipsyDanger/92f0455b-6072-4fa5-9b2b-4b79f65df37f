export const useFileUtils = () => {
  const getExtensions = (value: string) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /\.([0-9a-z]+)(?:[\?#]|$)/i;
    const match = value.match(regex);
    return match ? match[1] : '';
  };
  return {getExtensions};
};
