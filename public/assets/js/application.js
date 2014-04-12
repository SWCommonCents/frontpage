;(function($, window) {

  // init foundation
  jQuery(document).foundation();

  var app = (function(window) {

    function buildScroller() {
      jQuery('#fullpage').fullpage({
        resize: false,
        css3: true,
        navigation: true,
        navigationPosition: 'right'
      });
    }

    return {
      init: function () {
        buildScroller.apply(this);
      }
    };

  })(this),

  init = function () {
    app.init();
  };

  $(init);

})( window.Zepto || window.jQuery, this );
