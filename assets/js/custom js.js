$(document).ready(function(){
	// Collapse accordion every time dropdown is shown
	$('.dropdown-accordion').on('show.bs.dropdown', function (event) {
	  var accordion = $(this).find($(this).data('accordion'));
	  accordion.find('.panel-collapse.in').collapse('hide');
	});

	// Prevent dropdown to be closed when we click on an accordion link
	$('.dropdown-accordion').on('click', 'a[data-toggle="collapse"]', function (event) {
	  event.preventDefault();
	  event.stopPropagation();
	  $($(this).data('parent')).find('.panel-collapse.in').collapse('hide');
	  $($(this).attr('href')).collapse('show');
	});

	$('.collapse.cat1').on('shown.bs.collapse', function(){
	$(this).parent().find(".fa-plus-circle").removeClass("fa-plus-circle").addClass("fa-minus-circle");
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle");
	});

	$('.collapse.cat2').on('shown.bs.collapse', function(){
	$(this).parent().find(".fa-plus-circle").removeClass("fa-plus-circle").addClass("fa-minus-circle");
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle");
	});

	$('.collapse.cat3').on('shown.bs.collapse', function(){
	$(this).parent().find(".fa-plus-circle").removeClass("fa-plus-circle").addClass("fa-minus-circle");
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle");
	});

	$('.collapse.cat4').on('shown.bs.collapse', function(){
	$(this).parent().find(".fa-plus-circle").removeClass("fa-plus-circle").addClass("fa-minus-circle");
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle");
	});

	$('.collapse.catport1').on('shown.bs.collapse', function(){
	$(this).parent().find(".fa-folder").removeClass("fa-folder").addClass("fa-folder-open");
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".fa-folder-open").removeClass("fa-folder-open").addClass("fa-folder");
	});

	$('.collapse.catport2').on('shown.bs.collapse', function(){
	$(this).parent().find(".fa-folder").removeClass("fa-folder").addClass("fa-folder-open");
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".fa-folder-open").removeClass("fa-folder-open").addClass("fa-folder");
	});

	$('.collapse.catport3').on('shown.bs.collapse', function(){
	$(this).parent().find(".fa-folder").removeClass("fa-folder").addClass("fa-folder-open");
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".fa-folder-open").removeClass("fa-folder-open").addClass("fa-folder");
	});

	$('.collapse.catport4').on('shown.bs.collapse', function(){
	$(this).parent().find(".fa-folder").removeClass("fa-folder").addClass("fa-folder-open");
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".fa-folder-open").removeClass("fa-folder-open").addClass("fa-folder");
	});

	$('li.dropdown').on('shown.bs.dropdown', function(){
	$(this).find(".fa-folder").removeClass("fa-folder").addClass("fa-folder-open");
	}).on('hidden.bs.dropdown', function(){
	$(this).find(".fa-folder-open").removeClass("fa-folder-open").addClass("fa-folder");
	});

});