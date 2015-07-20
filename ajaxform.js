/*!
 *  form ajax submit
 */

(function($) {

  "use strict";

  $.fn.ajaxSubmit = function(options,callback) {

    var opts = {};

    if (typeof options == 'function') {
        options.success=options;
    }

    var initopts = {
      url:$(this).attr('action'),
      method:$(this).attr('method')||'post',
      data:$(this).serialize()||'',
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

