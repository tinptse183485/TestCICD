const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('index.html', () => {
  let dom;
  let container;

  beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
    dom = new JSDOM(html);
    container = dom.window.document.body;
  });

  test('contains BMI Calculator title', () => {
    const title = container.querySelector('h2');
    expect(title.textContent).toContain('BMI Calculator with User Accounts');
  });

  test('contains login form', () => {
    const loginForm = container.querySelector('#loginForm');
    expect(loginForm).not.toBeNull();
  });

  test('contains register form', () => {
    const registerForm = container.querySelector('#registerForm');
    expect(registerForm).not.toBeNull();
  });

  test('contains BMI calculation form', () => {
    const bmiForm = container.querySelector('#bmiForm');
    expect(bmiForm).not.toBeNull();
  });

  test('contains height and weight input fields', () => {
    const heightInput = container.querySelector('#height');
    const weightInput = container.querySelector('#weight');
    expect(heightInput).not.toBeNull();
    expect(weightInput).not.toBeNull();
  });

  test('contains calculate button', () => {
    const calculateButton = container.querySelector('#bmiForm button');
    expect(calculateButton.textContent).toContain('CalculateBMI');
  });
});