# ajaxform
a simple ajax submit plugin


####ajaxSubmit( options,callback )

Submit the form via Jquery AJAX.

Url,Method,Data,etc.. params from the form.

````javascript
// bind submit to form
$('form').on('submit', function(e) {
	e.preventDefault(); // prevent native submit
	$(this).ajaxSubmit({
    extraData:{apple:1000}, //Additional parameters '&apple=1000'
		success:function(){
			//do something after form submit via ajax
		}
	});
});
````

####options( extend jquery ajax options and )

extraData(object) : Extra data，simulation of hidden input value.
