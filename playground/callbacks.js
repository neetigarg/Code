var getUser = (id,callback) => {
  var user = {
    id: id,
    name: 'Garima'
  };
  callback(user);

setTimeout(() => {
  callback(user);},3000);
};
getUser(21, (userObject) => {
  console.log(userObject);
});
