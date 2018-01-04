import { assert } from 'chai';

import { _test } from '../src/jsCreateElement';

const insertPseudoElement = _test.insertPseudoElement;

describe('insertPseudoElement', () => {
  it('should return DOM element with pseudo-element if valid', () => {
    const component = document.createElement('div');
    const pseudoStyle = {
      width: '10px',
      height: '20px',
      content: 'some-text',
      backgroundColor: 'red',
    };

    insertPseudoElement(pseudoStyle, component);

    assert.exists(component.querySelector('span'));
    assert.equal(component.querySelector('span').style.width, '10px');
    assert.equal(component.querySelector('span').style.height, '20px');
    assert.equal(component.querySelector('span').style.backgroundColor, 'red');
    assert.equal(component.querySelector('span').textContent, 'some-text');
  });

  it('should return DOM element without pseudo-element if undefined', () => {
    const component = document.createElement('div');

    insertPseudoElement(undefined, component);

    assert.notExists(component.querySelector('span'));
  });

  it('should return DOM element without pseudo-element if content undefined', () => {
    const component = document.createElement('div');
    const pseudoStyle = {
      width: '10px',
      height: '10px',
      color: 'red',
    };

    insertPseudoElement(pseudoStyle, component);

    assert.notExists(component.querySelector('span'));
  });
});
