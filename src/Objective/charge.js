define(['polyvitamins~polychrome@master', './../Objective.js','polyvitamins~polychrome@master/internals/charge'], function($, Objective) {
	Objective.extend({
		charge: function(cn) {
			if ("string"===typeof cn && !$.classes[cn]) return $.warn("Undefined class "+cn);
			$.charge( (this.__subject__||this), cn );
			return this.__subject__||this;
		}
	});
});