import path from 'path'
import test from 'ava'
import sao from 'sao'

const generator = path.join(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mock({ generator })
  t.snapshot(stream.fileList, 'generated files')

  t.snapshot(await stream.readFile('pages/index.js'), 'content of index.js')
  t.snapshot(await stream.readFile('.babelrc'), '.babelrc')
})

test('add emotion', async t => {
  const stream = await sao.mock({ generator }, {
    emotion: true
  })
  t.snapshot(stream.fileList, 'generated files')

  t.snapshot(await stream.readFile('pages/index.js'), 'content of index.js')
  t.snapshot(await stream.readFile('.babelrc'), '.babelrc')
})
