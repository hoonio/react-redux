var Promise = require('es6-promise').Promise;
var assign = require('object-assign');

var _callbacks = [];
var _promises = [];

var Dispatcher = function() {};
Dispatcher.prototype = assign({}, Dispatcher.prototype, {

  register: function(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1; // index
  },

  dispatch: function(payload){
    var resolves=[];
    var rejects=[];
    _promises = _callbacks.map(function(_, i){
      return new Promise(function(resolve, reject) {
        resolves[i]=resolve;
        reject[i]=reject;
      });
    });
    _callbacks.forEach(function(callback,i){
      Promise.resolve(callback(payload)).then(function(){
        resolves[i](payload);
      }, function(){
        rejects[i](new Error('Dispatcher callback unsuccessful'));
      });
    });
    _promises=[];
  }
});
module.exports=Dispatcher;
