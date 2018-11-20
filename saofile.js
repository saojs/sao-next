const superb = require('superb')
const pkg = require('./package')

module.exports = {
  description: pkg.description,
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outFolder
      },
      {
        name: 'description',
        message: 'How would you descripe the new project',
        default: `my ${superb()} project`
      },
      {
        name: 'emotion',
        message: 'Use emotion (CSS-in-JS)',
        type: 'confirm',
        default: false,
        store: true
      },
      {
        name: 'username',
        message: 'What is your GitHub username',
        default: this.gitUser.username || this.gitUser.name,
        filter: v => v.toLowerCase(),
        store: true
      },
      {
        name: 'email',
        message: 'What is your GitHub email',
        default: this.gitUser.email,
        store: true
      },
      {
        name: 'website',
        message: 'The URL of your website',
        default({ username }) {
          return `github.com/${username}`
        },
        store: true
      }
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**',
      filters: {
        'pages/_document.js': 'emotion',
        'pages/index-default.js': '!emotion',
        'pages/index-emotion.js': 'emotion'
      }
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        'pages/index-*.js': 'pages/index.js'
      }
    }
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  }
}
