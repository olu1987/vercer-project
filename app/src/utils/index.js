import _ from 'lodash';
import moize from 'moize';

export function arrayToMap (arr, propName, mutatePropName = propName => propName) {
  return _.cloneDeep(arr).reduce((mapObj, item) => {
    mapObj[mutatePropName(item[propName])] = item;
    return mapObj;
  }, {});
}

export const memoizedArrayToMap = moize(arrayToMap);