const Main = require('../src/main')

beforeEach(() => {
  document.body.innerHTML = ''
  document.head.innerHTML = ''
})

/**
 * @jest-environment jsdom
 */
test('Verifica se o widget do helpdesk está sendo carregado', () => {
  const obj = new Main()
  obj.loadWidgetHelpDesk()

  const scriptTotals = document.head.querySelectorAll('script[data-key]').length

  expect(scriptTotals).toBe(1)
})

/**
 * @jest-environment jsdom
 */
test('Verifica se o campo com a URL de newsletter está sendo criado corretamente', () => {
  document.body.innerHTML = `<form psr></form>`

  const obj = new Main()
  obj.createInputNewsletterUrl()

  expect(document.body).toMatchSnapshot()
})

/**
 * @jest-environment jsdom
 */
test('Verifica se o campo com a URL para telemetria está sendo criado corretamente', () => {
  document.body.innerHTML = `<form psr></form>`

  const obj = new Main()
  obj.createInputTelemtryUrl()

  expect(document.body).toMatchSnapshot()
})