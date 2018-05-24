/**
 * Created by hxstudio on 2018/5/2.
 */
var Generator = require('yeoman-generator');
var logo = require('../libs/logo');
var colors = require('colors');
var mkdirp = require('mkdirp').sync;
var shell = require('shelljs');

class Iiureact extends Generator {

  constructor(args, opts) {
    super(args, opts);
    logo(this);
  }

  prompting() {
    var self = this;
    return this.prompt([
      {
        type: 'input',
        name: 'componentName',
        message: '组件名称:',
        default: this.appname
      },
      {
        type: 'input',
        name: 'componentVersion',
        message: '组件初始版本号:',
        default: '0.1.0'
      },
      {
        type: 'input',
        name: 'componentDesc',
        message: '组件描述:',
        default: ''
      },
      {
        type: 'confirm',
        name: 'shouldAutoNpmInstall',
        message: '是否自动执行' + ' npm i'.yellow + ' 以安装依赖?',
        default: true
      }
    ]).then(function (answers) {
      var componentName = answers.componentName;
      var firstChar = componentName.substr(0, 1);
      self.componentName = firstChar.toUpperCase() + componentName.substr(1);
      self.componentVersion = answers.componentVersion;
      self.componentDesc = answers.componentDesc;
      self.shouldAutoNpmInstall = answers.shouldAutoNpmInstall;
    });
  }

  writing() {
    this.log('-----------------------------------------------\n>>> 开始构建组件文件目录:');

    // 创建src和demo文件夹
    mkdirp('src');
    mkdirp('demo');
    mkdirp('vendor/scss');

    this.fs.copy(
      this.templatePath('src.index.scss.tpl'),
      this.destinationPath('src/index.scss'),
      {
        componentName: this.componentName
      }
    );

    this.fs.copy(
      this.templatePath('src.index.scss.tpl'),
      this.destinationPath('demo/index.scss'),
      {
        componentName: this.componentName
      }
    );

    this.fs.copyTpl(
      this.templatePath('src.index.jsx.tpl'),
      this.destinationPath('src/index.jsx'),
      {
        componentName: this.componentName
      }
    );

    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('webpack.config.js.tpl'),
      this.destinationPath('webpack.config.js')
    );

    this.fs.copyTpl(
      this.templatePath('demo.index.html.tpl'),
      this.destinationPath('demo/index.html'),
      {
        componentName: this.componentName
      }
    );

    this.fs.copyTpl(
      this.templatePath('demo.index.jsx.tpl'),
      this.destinationPath('demo/index.jsx'),
      {
        componentName: this.componentName
      }
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        componentName: this.componentName
      }
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        componentName: this.componentName,
        componentVersion: this.componentVersion,
        componentDesc: this.componentDesc
      }
    );

    this.fs.copy(
      this.templatePath('mixins.scss.tpl'),
      this.destinationPath('vendor/scss/mixins.scss')
    );

    this.fs.copy(
      this.templatePath('reset.scss.tpl'),
      this.destinationPath('vendor/scss/reset.scss')
    );
  }

  install() {
    var self = this;
    if(this.shouldAutoNpmInstall){
      this.log('\n>>> 开始安装依赖');
      this.runInstall('npm').then(function () {
        self.log('\n>>> 依赖安装完成，开始写代码吧');
      }).catch(function () {
        self.log('\n>>> 信赖安装出现问题，我也不知道为啥'.red);
      });
    } else {
      this.log('>>> 构建完成，请手动输入 ' + 'npm i'.yellow + ' 以安装项目依赖');
    }
  }
}

module.exports = Iiureact;