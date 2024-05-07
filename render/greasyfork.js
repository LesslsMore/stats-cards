const { render, constructItem } = require('./common');
const { isEndsWithASCII } = require('../common/utils');

function renderGreasyforkCard(data, lang) {
  console.log(data)
  let { scriptAuthor, scriptLink, scriptDesc, totalInstalls, theme } = data[0];
  let { scriptLink:scriptLink1, totalInstalls:totalInstalls1 } = data[1];
  let items = [];
  switch (lang) {
    case 'zh-CN':
      if (isEndsWithASCII(scriptAuthor)) {
        scriptAuthor += ' ';
      }
      items = [
        constructItem(97, 40, `${scriptAuthor}的 Greasy Fork 数据`, 'title', 18),
        constructItem(63, 80, `脚本名称`, 'label', 13.5),
        constructItem(63, 110, `总安装量`, 'label', 13.5),
        constructItem(63, 140, `脚本名称`, 'label', 13.5),
        constructItem(63, 170, `总安装量`, 'label', 13.5),

        constructItem(134, 80, `${scriptLink}`, 'value', 15),
        constructItem(134, 110, `${totalInstalls}`, 'value', 15),
        constructItem(134, 140, `${scriptLink1}`, 'value', 15),
        constructItem(134, 170, `${totalInstalls1}`, 'value', 15)
      ];
      break;
    default:
      items = [
        constructItem(97, 40, `${scriptAuthor}的 Greasy Fork 数据`, 'title', 18),
        constructItem(63, 80, `脚本名称`, 'label', 13.5),
        constructItem(63, 110, `总安装量`, 'label', 13.5),
        constructItem(63, 140, `脚本名称`, 'label', 13.5),
        constructItem(63, 170, `总安装量`, 'label', 13.5),

        constructItem(134, 80, `${scriptLink}`, 'value', 15),
        constructItem(134, 110, `${totalInstalls}`, 'value', 15),
        constructItem(134, 140, `${scriptLink1}`, 'value', 15),
        constructItem(134, 170, `${totalInstalls1}`, 'value', 15)
      ];
      break;
  }
  return render(items, theme);
}

module.exports = renderGreasyforkCard;
