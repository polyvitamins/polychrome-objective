define([
	'polyvitamins~polyscope@master',
	'polyvitamins~polyscope@master/system/sings/sRichArray',
	'polyvitamins~polyscope@master/system/sings/sArray'
	], function(core, extend) {
	/* Расширяем абстрактный класс Function */
	
	var Objective = core.registerClass('Objective', function() {
		return this;
	});
	
	
	Objective.assignTo('Object');
	Objective.assignTo('Selector');
	Objective.assignTo('Array');

	return Objective;
});