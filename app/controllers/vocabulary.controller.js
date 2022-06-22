const vocaModule = require("../modules/vocabulary.module");

exports.get_VocabularyByLesson = function (req, res) {
  vocaModule.get_VocabularyByLesson(req.params.id, function (data) {
    res.send({ result: data });
  });
};
exports.get_AllVocabularyByCourse = function (req, res) {
  vocaModule.get_AllVocabularyByCourse(req.params.id, function (data) {
    res.send({ result: data });
  });
};
exports.get_AllVocabularyByFolder = function (req, res) {
  vocaModule.get_AllVocabularyByFolder(req.params.id, function (data) {
    res.send({ result: data });
  });
};
