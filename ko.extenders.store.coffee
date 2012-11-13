ko.extenders.store = (observable, key_name) ->
	
	# Initialise our variable with the `store`d value.
	observable store.get key_name

	# `store` the new value in storage.
	observable.subscribe (new_value) ->
		store.set key_name, new_value
		return

	return