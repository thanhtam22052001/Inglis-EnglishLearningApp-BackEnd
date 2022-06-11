const db = require("../common/connection");
const Vocabulary = function (vocabulary) {
  this.ID_Vocabulary = vocabulary.ID_Vocabulary;
  this.Word = vocabulary.Word;
  this.IPA = vocabulary.IPA;
  this.Type = vocabulary.Type;
  this.Definition = vocabulary.Definition;
  this.VietNamese_Meaning = vocabulary.VietNamese_Meaning;
  this.Example = vocabulary.Example;
  this.Example_Meaning = vocabulary.Example_Meaning;
  this.Uri = vocabulary.Uri;
};

Vocabulary.get_VocabularyByLesson = function (id, result) {
  db.query(
    "select ID_Vocabulary as id, Word as word, IPA as pronunciation, Type as type, Definition as definition, VietNamese_Meaning as meaning ,Example as example , Example_Meaning as exampleMeaning , Uri as wordUri from vocabulary where ID_Lesson = ?",
    [id],
    function (err, data, fields) {
      console.log(err);
      result(data);
    }
  );
};

module.exports = Vocabulary;
