const crawler = require('./crawler/greasyfork');

async function test() {
  let info = await crawler('1244493')
  console.log(info)
}

test();
