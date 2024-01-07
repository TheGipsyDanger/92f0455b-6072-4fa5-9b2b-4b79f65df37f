export const useMapUtils = () => {
  const toMap = (data: any[]) => {
    return new Map(data.map(item => [item.id, item]));
  };
  const toArray = (data: Map<any, any>) => {
    return Array.from(data.values());
  };
  return {toMap, toArray};
};
