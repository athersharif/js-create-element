import { assert } from 'chai';

import { createElement } from '../src/jsCreateElement';

const attributes = {
  id: 'some-id',
  class: 'some-class',
  'aria-hidden': false,
};

const style = {
  width: '100px',
  color: 'white',
  backgroundColor: 'blue',
};

const pseudoBefore = {
  content: 'some-content',
  width: '15px',
  height: '25px',
  backgroundColor: 'red',
};

const pseudoAfter = {
  width: '20px',
  height: '30px',
  backgroundColor: 'green',
  content: '',
  display: 'inline-block',
};

describe('createElement', () => {
  it('should return default DOM element without any parameters', () => {
    const result = createElement();

    assert.exists(result);
    assert.isNull(result.getAttribute('id'));
    assert.isEmpty(result.childNodes);
    assert.isEmpty(result.textContent);
  });

  it('should return correct DOM element with the specified type', () => {
    const result = createElement('p');

    assert.exists(result);
    assert.equal(result.tagName, 'P');
    assert.isNull(result.getAttribute('id'));
    assert.isEmpty(result.childNodes);
    assert.isEmpty(result.textContent);
  });

  it('should return correct DOM element without a svg type', () => {
    const result = createElement('svg');

    assert.exists(result);
    assert.equal(result.tagName, 'svg');
    assert.isNull(result.getAttribute('id'));
    assert.isEmpty(result.childNodes);
    assert.isEmpty(result.textContent);
  });

  it('should return correct DOM element with specified svg type', () => {
    const result = createElement('svg:g');

    assert.exists(result);
    assert.equal(result.tagName, 'g');
    assert.isNull(result.getAttribute('id'));
    assert.isEmpty(result.childNodes);
    assert.isEmpty(result.textContent);
  });

  it('should return correct DOM element with the specified attributes', () => {
    const result = createElement(null, { ...attributes });

    assert.exists(result);
    assert.equal(result.tagName, 'DIV');
    assert.equal(result.getAttribute('id'), 'some-id');
    assert.equal(result.getAttribute('class'), 'some-class');
    assert.equal(result.getAttribute('aria-hidden'), 'false');
    assert.isEmpty(result.childNodes);
    assert.isEmpty(result.textContent);
  });

  it('should return correct DOM element with the specified styles', () => {
    const result = createElement(null, { style: style });

    assert.exists(result);
    assert.equal(result.tagName, 'DIV');
    assert.isNull(result.getAttribute('id'));
    assert.equal(result.style.width, '100px');
    assert.equal(result.style.color, 'white');
    assert.equal(result.style.backgroundColor, 'blue');
    assert.isEmpty(result.childNodes);
    assert.isEmpty(result.textContent);
  });

  it('should return correct DOM element with the specified text', () => {
    const result = createElement(null, { text: 'some-text' });

    assert.exists(result);
    assert.isNull(result.getAttribute('id'));
    assert.equal(result.textContent, 'some-text');
  });

  it('should return correct DOM element with the specified pseudo-before-element', () => {
    const result = createElement(null, { pseudoBefore: pseudoBefore });

    assert.exists(result);
    assert.equal(result.tagName, 'DIV');
    assert.isNull(result.getAttribute('id'));
    assert.exists(result.querySelector('span'));
    assert.equal(result.querySelector('span').style.width, '15px');
    assert.equal(result.querySelector('span').style.height, '25px');
    assert.equal(result.querySelector('span').style.backgroundColor, 'red');
    assert.equal(result.querySelector('span').textContent, 'some-content');
    assert.lengthOf(result.childNodes, 1);
  });

  it('should return correct DOM element with the specified pseudo-after-element', () => {
    const result = createElement(null, { pseudoAfter: pseudoAfter });

    assert.exists(result);
    assert.equal(result.tagName, 'DIV');
    assert.isNull(result.getAttribute('id'));
    assert.exists(result.querySelector('span'));
    assert.equal(result.querySelector('span').style.width, '20px');
    assert.equal(result.querySelector('span').style.height, '30px');
    assert.equal(result.querySelector('span').style.backgroundColor, 'green');
    assert.equal(result.querySelector('span').style.display, 'inline-block');
    assert.isEmpty(result.querySelector('span').textContent);
    assert.lengthOf(result.childNodes, 1);
  });

  it('should return correct DOM element with the all parameters specified', () => {
    const result = createElement('a', {
      ...attributes,
      style: style,
      text: 'main-text',
      pseudoBefore: pseudoBefore,
      pseudoAfter: pseudoAfter,
    });

    assert.exists(result);
    assert.equal(result.tagName, 'A');
    assert.equal(result.getAttribute('id'), 'some-id');
    assert.equal(result.style.width, '100px');
    assert.lengthOf(result.childNodes, 3);
    assert.equal(result.textContent, pseudoBefore.content + 'main-text');
  });
});
