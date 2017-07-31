import path from 'path'
import test from 'ava'
import sao from 'sao'

const template = path.join(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mockPrompt(template)
  t.snapshot(stream.fileList, 'generated files')

  const content = stream.fileContents('pages/index.js')
  t.snapshot(content, 'content of index.js')
})

test('no emotion', async t => {
  const stream = await sao.mockPrompt(template, {
    emotion: false
  })
  t.snapshot(stream.fileList, 'generated files')

  const content = stream.fileContents('pages/index.js')
  t.snapshot(content, 'content of index.js')
})
