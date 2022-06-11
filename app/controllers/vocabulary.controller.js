const vocaModule = require("../modules/vocabulary.module");

exports.get_VocabularyByLesson = function (req, res) {
  vocaModule.get_VocabularyByLesson(req.params.id, function (data) {
    res.send({ result: data });
  });
};
