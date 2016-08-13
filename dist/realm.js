(function(g) {

  if(!g['Realm']){
    g['Realm'] = createRealm();
  }

})(resolveGlobal());


function resolveGlobal( ) {
  return typeof window === 'undefined' ? exports : window;
}

Object.prototype.forEachProp = function(callback) {

  var i, key, keys = Object.keys(this);

  for(i=0;i<keys.length;i++) {
    key = keys[i];

    if(this.hasOwnProperty(key)) {
      callback(this, key, this[key]);
    }

  }
};

function createRealm() {

  var _apps = [];

  var _register = function(namespace, app) {
    apps[namespace] = app;
  };

  var _start = function() {
    _apps.forEachProp(function( sender, key, value ) {
      if (value && value["start"] && typeof value.start === "function") {
        value.start();
      }
    })
  };

  return {
    register: _register,
    start: _start
  }
}