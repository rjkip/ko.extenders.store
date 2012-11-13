(function() {

  ko.extenders.store = function(observable, key_name) {
    observable(store.get(key_name));
    observable.subscribe(function(new_value) {
      store.set(key_name, new_value);
    });
  };

}).call(this);
