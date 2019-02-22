class DataUtils {
  static randomArrayItem = array =>
    array[Math.floor(Math.random() * array.length)];

  static isNullEmptyOrUndefinded = value =>
    value === null || value === [] || value === undefined || value.length === 0;

  static arrayFromArrayRandomItems = array => {
    const result = Array.from(array).filter(() => DataUtils.randomBoolean());
    return result.length === 0 ? [array[0]] : result;
  };

  static randomBoolean = () => Math.random() >= 0.5;

  static arrayContainsAllElementsFromAnother = (array0, array1) =>
    array1
      .map(a => {
        return array0.some(b => {
          return b === a;
        });
      })
      .every(e => e);
}

export default DataUtils;