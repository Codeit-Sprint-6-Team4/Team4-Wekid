export default (contextData: string, code: string) => {
  if (contextData === code) {
    return true;
  }
  return false;
};
