/**
 * Created by hxstudio on 2018/5/2.
 */
const figlet = require('figlet');
const { version } = require('../../package.json');

module.exports = function (context) {
  const banner = `${figlet.textSync('IIU REACT', { font: 'big' }).replace(/[\n\s]*$/, '')}  v${version}\n`;
  banner.split('\n').forEach((line) => {
    context.log(line);
  });
}