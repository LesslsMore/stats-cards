var axios = require('axios');
const cheerio = require('cheerio');

async function getGeasyforkInfo(name) {

  var config = {
    method: 'get',
    url: `https://greasyfork.org/zh-CN/users/${name}`,
    headers: {
      'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
    }
  };
  try {
    const response = await axios(config);
    const $ = cheerio.load(response.data);

    const list = $('#user-script-list').children();

    const name = $('#about-user h2').text()
    let results = []
    list.each(function(index, element) {
      let result = {
        scriptAuthor: '',
        scriptLink: '',
        scriptDesc: '',
        totalInstalls: 0,
      };
      const scriptLink = $(this).find('.script-link').text();
      const scriptDesc = $(this).find('.script-description').text();
      const totalInstalls = $(this).find('.script-list-total-installs').eq(1).text();
      const scriptAuthor = $(this).find('.script-list-author').eq(1).text();
      result.scriptLink = scriptLink
      result.scriptDesc = scriptDesc
      result.totalInstalls = totalInstalls
      result.scriptAuthor = scriptAuthor
      // console.log(result)
      results.push(result)
    });
    // console.log(results)
    results.sort((a, b) => parseInt(b.totalInstalls.replace(/,/g, '')) - parseInt(a.totalInstalls.replace(/,/g, '')));
    return results.slice(0, 2)
  } catch (error) {
    console.log(error);
  }
}

// 1244493-lesslsmore
// getgGeasyforkInfo('1244493').then( res =>{
//     console.log(res)
// }
// )

module.exports = getGeasyforkInfo;

// document.querySelector('#user-script-list');
//
// document.querySelector('.script-link');
// document.querySelector('.script-link').text;
// document.querySelector('.script-description');
//
// document.querySelector('.script-list-total-installs');
