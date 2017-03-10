angular.module('noodlio.services-orders', [])


.factory('OrdersManager', function($q, FireFunc) {
  var self = this;

  self.OrdersData = {}; //cache
  self.OrdersDataArray = [];

  self.getOrders = function(uid) {
    var qGet = $q.defer();

    var iter = 0;
    var childRef = "orders/" + uid;
    FireFunc.onValue(childRef).then(function(OrdersData){

        // --
        self.OrdersData = OrdersData;
        angular.forEach(OrdersData, function(value, key){
          self.OrdersDataArray[iter] = {
            key: key,
            value: value
          };
          iter = iter+1;
        })

        qGet.resolve(self.OrdersDataArray);
        // --

    },
    function(error){
      qGet.reject(error);
    })
    return qGet.promise;
  };


  // v3
  self.getAllOrders = function() {
    var qGet = $q.defer();

    var iter = 0;
    self.totalSales = {nb: 0, value: 0};

    var childRef = "orders";
    FireFunc.onValue(childRef).then(function(OrdersData){

        // --
        self.OrdersData = OrdersData;
        angular.forEach(OrdersData, function(childValue, childKey){

          // ---
          // 1
          var userId = childKey;
          angular.forEach(childValue, function(subchildValue, subchildKey){
            // 2
            var orderId = subchildKey;
            self.OrdersDataArray[iter] = {
              key:    orderId,
              userId: userId,
              value:  subchildValue
            };
            self.totalSales["nb"]     = self.totalSales["nb"] + 1;
            self.totalSales["value"]  = self.totalSales["value"] + self.OrdersDataArray[iter].value.CachedTotal.total_value_incl;
            iter = iter+1;
          })
          
          // ---

        })

        qGet.resolve(self.OrdersDataArray);
        // --

    },
    function(error){
      qGet.reject(error);
    })
    return qGet.promise;
  };



  // get user profile
  self.getUserProfile = function(userId) {
    var childRef = "users/" + userId;
    return FireFunc.onValue(childRef);
  };



  return self;

});
