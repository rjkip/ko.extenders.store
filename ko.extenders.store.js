define(
    "ko.extenders.store",
    ["knockout", "store"],
    function (ko, store) {

        ko.extenders.store = function (observable, key_name) {
            observable(store.get(key_name));
            observable.subscribe(function (new_value) {
                store.set(key_name, new_value);
            });
        };

    }
);
