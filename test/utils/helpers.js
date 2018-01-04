import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const { window } = new JSDOM(
  '<!DOCTYPE html><html><head></head><body></body></html>'
);

global.window = window;
global.document = window.document;
global.HTMLElement = window.HTMLElement;
