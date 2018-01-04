/**
 *
 * js-create-element <https://github.com/athersharif/js-create-element>
 *
 * Copyright (c) 2018-Present, Ather Sharif.
 * Released under the MIT License.
 *
 */
import forEach from 'lodash/forEach';
import assign from 'lodash/assign';
import isString from 'lodash/isString';
import isPlainObject from 'lodash/isPlainObject';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';

/**
 *
 * Filters the argument to be a valid string type or a null object
 *
 * @param {string} str - The string to be filtered
 *
 * @return {string} A valid string object or null
 *
 */
const filterString = str => (isString(str) ? str : null);

/**
 *
 * Filters the argument to be a valid plain object type or a undefined object
 *
 * @param {object} obj - The object to filter
 *
 * @return {string} A valid object or undefined
 *
 */
const filterObject = obj => (isPlainObject(obj) ? obj : undefined);

/**
 *
 * Generates a DOM text node with the given text and appends it to the given
 * element
 *
 * @param {string} text - The text to insert
 * @param {Element} parent - The element to insert the text in
 *
 */
const insertTextElement = (text, parent) => {
  if (!isNull(text)) {
    const textNode = document.createTextNode(text);
    parent.appendChild(textNode);
  }
};

/**
 *
 * Generates a DOM element that replicates the behavior of a CSS pseudo-element
 * and appends it to the given element
 *
 * @param {object} pseudoElemStyle - The style object for the pseudo element
 * @param {Element} parent - The element to insert the pseudo element in
 *
 */
const insertPseudoElement = (pseudoElemStyle, parent) => {
  if (!isUndefined(pseudoElemStyle) && !isUndefined(pseudoElemStyle.content)) {
    let element = createElement('span', null, pseudoElemStyle);

    insertTextElement(pseudoElemStyle.content, element);
    parent.appendChild(element);
  }
};

/**
 *
 * Creates a DOM element using pure JS with the given attributes, style, text,
 * and pseudo elements
 *
 * @param {string} type - The HTML tag for the new element
 * @param {object} attributes - The attributes for the new element
 * @param {object} style - The CSS style for the new element
 * @param {text} string - The text content for the new element
 * @param {object} pseudoBefore - The CSS for a ::before pseudo-element
 * @param {object} pseudoAfter - The CSS for a ::after pseudo-element
 *
 * @return {string} The resulting element
 *
 */
export const createElement = (
  type,
  attributes,
  style,
  text,
  pseudoBefore,
  pseudoAfter
) => {
  type = filterString(type) || 'div';
  attributes = filterObject(attributes) || {};
  style = filterObject(style) || {};
  text = filterString(text);
  pseudoBefore = filterObject(pseudoBefore);
  pseudoAfter = filterObject(pseudoAfter);

  let element = document.createElement(type);

  forEach(attributes, (value, key) => element.setAttribute(key, value));
  forEach(style, (value, key) => assign(element.style, { [key]: value }));

  insertPseudoElement(pseudoBefore, element);
  insertTextElement(text, element);
  insertPseudoElement(pseudoAfter, element);

  return element;
};

// export remaining functions for testing
export const _test = {
  filterString,
  filterObject,
  insertTextElement,
  insertPseudoElement,
};
