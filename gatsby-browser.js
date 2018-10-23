/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

var FX = {
  easing: {
    linear: function(progress) {
      return progress
    },
    quadratic: function(progress) {
      return Math.pow(progress, 2)
    },
    swing: function(progress) {
      return 0.5 - Math.cos(progress * Math.PI) / 2
    },
    circ: function(progress) {
      return 1 - Math.sin(Math.acos(progress))
    },
    back: function(progress, x) {
      return Math.pow(progress, 2) * ((x + 1) * progress - x)
    },
    bounce: function(progress) {
      for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (progress >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2)
        }
      }
    },
    elastic: function(progress, x) {
      return (
        Math.pow(2, 10 * (progress - 1)) *
        Math.cos(((20 * Math.PI * x) / 3) * progress)
      )
    },
  },
  animate: function(options) {
    var start = new Date()
    var id = setInterval(function() {
      var timePassed = new Date() - start
      var progress = timePassed / options.duration
      if (progress > 1) {
        progress = 1
      }
      options.progress = progress
      var delta = options.delta(progress)
      options.step(delta)
      if (progress == 1) {
        clearInterval(id)
        options.complete()
      }
    }, options.delay || 10)
  },
  fadeOut: function(element, options) {
    var to = 1
    this.animate({
      duration: options.duration,
      delta: function(progress) {
        progress = this.progress
        return FX.easing.swing(progress)
      },
      complete: options.complete,
      step: function(delta) {
        element.style.opacity = to - delta
      },
    })
  },
  fadeIn: function(element, options) {
    var to = 0
    this.animate({
      duration: options.duration,
      delta: function(progress) {
        progress = this.progress
        return FX.easing.swing(progress)
      },
      complete: options.complete,
      step: function(delta) {
        element.style.opacity = to + delta
      },
    })
  },
}

exports.onClientEntry = (a, pluginOptions = {}) => {
  console.log("We've started!")
}

exports.onRouteUpdateDelayed = () => {
  console.log('onRouteUpdateDelayed')
}

exports.onInitialClientRender = () => {
  console.log('onInitialClientRender')
  FX.fadeOut(document.getElementById('status'), {
    duration: 500,
    complete: () => {},
  })
  FX.fadeOut(document.getElementById('preloader'), {
    duration: 1000,
    complete: () => {
      // alert('Complete')
      document.body.style.overflow = 'visible'
    },
  })
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  )

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }

  const $mnuIcons = Array.prototype.slice.call(
    document.querySelectorAll('.menu-icon-trigger'),
    0
  )

  if ($mnuIcons.length > 0) {
    // Add a click event on each of them
    $mnuIcons.forEach(el => {
      el.addEventListener('click', evt => {
        evt.preventDefault()
        console.log('menu-icon-trigger clicked')
        // $('.menu-icon-wrapper').toggleClass('open')
        document.getElementById('menu-icon-wrapper').classList.toggle('open')
        document.getElementById('sidebar').classList.toggle('is-active')
        // $('.sidebar').toggleClass('is-active')
      })
    })
  }

  document.getElementById('sidebar-close').addEventListener('click', evt => {
    document.getElementById('sidebar').classList.remove('is-active')
    document.getElementById('menu-icon-wrapper').classList.remove('open')
  })
}
