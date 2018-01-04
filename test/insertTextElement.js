import { assert } from 'chai';

import { _test } from '../src/jsCreateElement';

const insertTextElement = _test.insertTextElement;

describe('insertTextElement', () => {
  it('should return DOM element with text if valid', () => {
    const component = document.createElement('div');

    insertTextElement('some-string', component);

    assert.equal(component.textContent, 'some-string');
  });

  it('should return DOM element without text if null', () => {
    const component = document.createElement('div');

    insertTextElement(null, component);

    assert.isEmpty(component.textContent);
  });
});
