'use strict'

module.exports = (pluginContext) => {
  const shell = pluginContext.shell;

  function search(query, res) {
    const query_trim = query.trim();

    if (query_trim.length !== 0) {
      res.add({
        id: query_trim,
        payload: "open",
        title: query_trim,
        desc: "Search on DuckDuckGo",
      });
    }
  }

  function execute(id, payload) {
    if (payload === "open") {
      shell.openExternal(`https://duckduckgo.com/?q=${id}`);
    }
  }

  return { search, execute };
};