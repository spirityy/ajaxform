/*!
 *  form ajax submit
 */

(function($) {

  "use strict";

  $.fn.ajaxSubmit = function(options,callback) {


    var formurl = $(this).attr('action');
    if(!formurl) return;

    var opts = {};

    if (typeof options == 'function') {
        options.success=options;
    }

    var initopts = {
      url:formurl,
      method:$(this).attr('method')||'post',
      data:$(this).serialize(),
      success:callback
    };

    if(options.extraData){
      if(typeof options.extraData !== 'object') return;
      initopts.data+='&'+$.param(options.extraData);
    }

    opts = $.extend(initopts,options);

    $.ajax(opts);

  };

})(jQuery);

