;(function($, window) {

  // init foundation
  jQuery(document).foundation();

  var app = (function(window) {

    var $wrapper = $('#fullpage'),
      $slides = $('#fullpage .section'),
      $background = $('#fullpage-bg');

    function buildScroller() {
      jQuery('#fullpage').fullpage({
        resize: false,
        css3: true,
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        scrollOverflow: true,
        scrollingSpeed: 500,
        touchSensitivity: 15,
        onLeave: function(index, direction) {
          // inform the wrapper of the direction
          $wrapper.removeClass('up down').addClass(direction);
        },
        afterLoad: function(anchorLink, index) {
          var i = index - 1,
            nextClass = $slides.eq(i).attr('id');
          // add the background color class
          $background.attr('class', '').addClass(nextClass);
        }
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
