(function() {
  $(function() {
    return $('.slideshow').each(function(n, slideshow) {
      var cur, image_name, max, next;
      slideshow = $(slideshow);
      max = slideshow.data('max');
      image_name = slideshow.data('image-name');
      cur = 0;
      next = function() {
        slideshow.attr("src", "assets/images/" + image_name + "_" + cur + ".png");
        if (cur < max) {
          cur += 1;
        } else {
          cur = 0;
        }
        return setTimeout(next, 500);
      };
      return next();
    });
  });

}).call(this);
