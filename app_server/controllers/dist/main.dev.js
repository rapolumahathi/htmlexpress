"use strict";

/* GET homepage*/
var index = function index(req, res) {
  res.render('index', {
    title: 'Loc8r'
  });
};

module.exports = {
  index: index
};
//# sourceMappingURL=main.dev.js.map
