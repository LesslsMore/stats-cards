const getgGeasyforkInfo = require('../crawler/greasyfork');
const renderGreasyforkCard = require('../render/greasyfork');
const { cacheTime, cache } = require('../common/cache');
const { processData } = require('../common/utils');

module.exports = async (req, res) => {
  const { id, theme, lang, raw } = req.query;
  let key = 'c' + id;
  let data = cache.get(key);
  if (!data) {
    data = await getgGeasyforkInfo(id);
    cache.set(key, data);
  }
  if (raw) {
    return res.json(data);
  }
  data.forEach(d => {
    d.theme = theme;
    processData(d);
  })
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  return res.send(renderGreasyforkCard(data, lang));
};
