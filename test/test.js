import path from 'path'
import test from 'ava'
import sao from 'sao'

const template = path.join(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mockPrompt(template)
  t.snapshot(stream.fileList, 'generated files')

  t.snapshot(stream.fileContents('pages/index.js'), 'content of index.js')
  t.snapshot(stream.fileContents('.babelrc'), '.babelrc')
})

test('add emotion', async t => {
  const stream = await sao.mockPrompt(template, {
    emotion: true
  })
  t.snapshot(stream.fileList, 'generated files')

  t.snapshot(stream.fileContents('pages/index.js'), 'content of index.js')
  t.snapshot(stream.fileContents('.babelrc'), '.babelrc')
})
