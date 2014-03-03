$ ->
  $('.slideshow').each (n, slideshow) ->
    slideshow = $(slideshow)
    max = slideshow.data('max')
    image_name = slideshow.data('image-name')
    cur = 0

    next = ->
      slideshow.attr("src", "assets/images/#{image_name}_#{cur}.png")
      if cur < max
        cur += 1
      else
        cur = 0

      setTimeout(next, 500)

    next()

