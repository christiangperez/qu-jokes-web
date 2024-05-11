export const getCardClassName = (type: string) => {
  switch (type.toLocaleUpperCase()) {
    case 'PROGRAMMING':
      return 'programming';
    case 'KNOCK-KNOCK':
      return 'knock-knock';
    default:
      return 'default';
  }
};
