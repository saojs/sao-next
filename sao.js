const superb = require('superb')

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:'
    },
    description: {
      message: 'How would you descripe the new project?',
      default: `my ${superb()} project`
    },
    emotion: {
      message: 'Use emotion (CSS-in-JS)',
      type: 'confirm',
      default: true,
    },
    username: {
      message: 'What is your GitHub username?',
      default: ':gitUser:',
      store: true
    },
    email: {
      message: 'What is your GitHub email?',
      default: ':gitEmail:',
      store: true
    },
    website: {
      message: 'The URL of your website?',
      default({username}) {
        return `github.com/${username}`
      },
      store: true
    }
  },
  move: {
    'gitignore': '.gitignore',
    'pages/index-*.js': 'pages/index.js'
  },
  filters: {
    'pages/_document.js': 'emotion',
    'pages/index-default.js': '!emotion',
    'pages/index-emotion.js': 'emotion'
  },
  showTip: true,
  gitInit: true,
  installDependencies: true
}
