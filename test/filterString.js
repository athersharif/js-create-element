import { assert } from 'chai';

import { _test } from '../src/jsCreateElement';

const filterString = _test.filterString;

describe('filterString', () => {
  it('should return string if valid', () => {
    const result = filterString('some-string');

    assert.equal(result, 'some-string');
  });

  it('should return null if undefined', () => {
    const result = filterString(undefined);

    assert.isNull(result);
  });

  it('should return null if null', () => {
    const result = filterString(null);

    assert.isNull(result);
  });

  it('should return null if array type', () => {
    const result = filterString(['a']);

    assert.isNull(result);
  });

  it('should return null if object type', () => {
    const result = filterString({ a: 1 });

    assert.isNull(result);
  });

  it('should return null if boolean type', () => {
    const result = filterString(true);

    assert.isNull(result);
  });
});
