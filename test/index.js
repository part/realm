var realm = require('../src/realm');

if(typeof realm === "function") {
  console.log('Realm exists ', typeof realm, " at all");
  console.log(typeof realm);
  console.log(" at all");
} else if (typeof realm === "object") {
  console.log('Realm exists ', realm.name, " at all");
  console.log(typeof realm);
} else {
  console.error('Boo Realm does not exist it is of type', typeof realm);
}
