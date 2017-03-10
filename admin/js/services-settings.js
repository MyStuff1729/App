angular.module('noodlio.services-settings', [])

.factory('Categories', function($q, FireFunc) {

  var self = this;
  self.all = {};

  self.get = function() {
    var qCat = $q.defer();
    FireFunc.onValue('settings/categories').then(function(result){
      if(result != null) {
        self.all = result;
      } else {
        self.all = {};
      }
      qCat.resolve(self.all);
    },
    function(error){
      qCat.reject(error);
    })
    return qCat.promise;
  };

  self.set = function(CategoriesObj) {
    return FireFunc.set('settings/categories', CategoriesObj);
  };

  return self;
})

.factory('Settings_Fees', function($q, FireFunc) {
  /**
  * List of pre-defined fees
  */

  var self = this;
  self.all = null;

  self.get = function() {
    var qCat = $q.defer();
    FireFunc.onValue('settings/fees').then(function(result){
      self.all = result;
      qCat.resolve(self.all);
    },
    function(error){
      qCat.reject(error);
    })
    return qCat.promise;
  };

  self.set = function(FeesObj) {
    return FireFunc.set('settings/fees', FeesObj);
  };

  return self;
});
