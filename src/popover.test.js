import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let document;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: "dangerously" });
  document = dom.window.document;
});

test('Popover exists after click', () => {
  const btn = document.getElementById('popoverBtn');
  btn.click();
  const popover = document.querySelector('.popover');
  expect(popover).not.toBeNull();
});
