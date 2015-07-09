define(['./../Objective.js'], function(Objective) {
	Objective.extend({
		tie: function(fn) {
			fn.call(this);
			return this;
		}
	});
});