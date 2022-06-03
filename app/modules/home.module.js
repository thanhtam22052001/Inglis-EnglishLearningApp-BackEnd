const db = require('../common/connection');
const Home = function(user)
{
    this.ID_User = user.ID_User;
    this.Name = user.Name;
    this.Phone = user.Phone;
    this.Email = user.Email;
    this.Job =  user.Job;
}

Home.getall = function(result){
   db.query(
  'SELECT * FROM user',
  function(err, data, fields) {
    result(data);
  }
);

}
module.exports = Home;