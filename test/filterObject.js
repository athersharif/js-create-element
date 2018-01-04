import { assert } from 'chai';

import { _test } from '../src/jsCreateElement';

const filterObject = _test.filterObject;

describe('filterObject', () => {
  it('should return object if valid', () => {
    const result = filterObject({ a: 1 });

    assert.deepEqual(result, { a: 1 });
  });

  it('should return undefined if undefined', () => {
    const result = filterObject(undefined);

    assert.isUndefined(result);
  });

  it('should return undefined if null', () => {
    const result = filterObject(null);

    assert.isUndefined(result);
  });

  it('should return undefined if array type', () => {
    const result = filterObject(['a']);

    assert.isUndefined(result);
  });

  it('should return undefined if string type', () => {
    const result = filterObject('some-string');

    assert.isUndefined(result);
  });

  it('should return undefined if boolean type', () => {
    const result = filterObject(true);

    assert.isUndefined(result);
  });
});
