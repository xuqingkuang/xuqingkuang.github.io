(function() {
  // Global functions
  
  // Stolen from http://james.padolsey.com/javascript/parsing-urls-with-the-dom/
  
  // This function creates a new anchor element and uses location
  // properties (inherent) to get the desired URL data. Some String
  // operations are used (to normalize results across browsers).
  function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
      source: url,
      protocol: a.protocol.replace(':',''),
      host: a.hostname,
      port: a.port,
      query: a.search,
      params: (function(){
        var ret = {},
        seg = a.search.replace(/^\?/,'').split('&'),
        len = seg.length, i = 0, s;
        for (;i<len;i++) {
          if (!seg[i]) { continue; }
          s = seg[i].split('=');
          ret[s[0]] = s[1];
        }
        return ret;
      })(),
      hash: a.hash.replace('#',''),
      path: a.pathname.replace(/^([^/])/,'/$1'),
    };
  }
  
  // Data
  var MAX_PRICE = 2500;
  var searchFilters = {
    sale: "",
    category: "",
    brand: "",
    gender: "womens",
    price: "0-2500",
    color: "",
    sort: ""
  };
  
  var overlayBinddings, authBinddings;
  var OpenMenu, CloseMenu, setFilterClass, setFilterText,
    changeFilterAndNavigate, PrettifyNumber, displayPriceRange;

  // Overlay bindings
  overlayBinddings = function() {
    $('.closeAction').click(function(e) {
      $(e.currentTarget).parents('.overlay').fadeOut();
    });
    $('.overlay').click(function(e) {
      $(e.currentTarget).fadeOut();
    });
    $('.popupView').click(function(e) {
      e.stopPropagation();
    });
  }
  
  // Authorizations binding
  authBinddings = function() {
    $('.signUpNavAction,.loginNavAction,.forgetPasswordNavAction').click(function(e) {
      target = $(e.currentTarget).data('target');
      if (target != undefined) {
        $('.overlay').hide()
        $(target).fadeIn();
      }
    });
  }
  
  // Open Menu
  OpenMenu = function(e, t, n) {
    if (e.hasClass("selected")) {
      e.removeClass("selected");
    } else {
      var i = t.find(".navItem");
      CloseMenu(i);
      e.addClass("selected");
      if(n) {
        $(document).one("click", function() {
          i.removeClass("selected");
        });
      }
    }
  };
  // Close Menu
  CloseMenu = function(e) {
    e.removeClass("selected")
  };
  // Toggle Profile Menu
  toggleProfileMenu = function() {
    $container = $('#utilNav');
    $container.find('.utilNavAction').click(function(e) {
      e.stopPropagation();
      $el = $(e.currentTarget);
      $menu = $el.parent().find('.menu');
      if($menu.css('display') === 'block') {
        $menu.hide();
      } else {
        $menu.show();
        $(document).one('click', function() {
          $menu.hide();
        });
      };
    });
  };
  // Toggle Profile Menu
  toggleFilterMenu = function() {
    $('.menuToggle').click(function(e) {
      e.stopPropagation();
      $el = $(e.currentTarget);
      $menu = $('#filters');
      var stopMenuPropagation = function(e) {
        e.stopPropagation();
      }
      if($menu.css('display') === 'block') {
        $menu.hide();
        $menu.off('click', stopMenuPropagation);
        $el.removeClass('expanded').addClass('collapsed');
      } else {
        $menu.show();
        $menu.on('click', stopMenuPropagation);
        $(document).one('click', function() {
          $menu.hide();
          $menu.off('click', stopMenuPropagation);
          $el.removeClass('expanded').addClass('collapsed');
        });
        $el.removeClass('collapsed').addClass('expanded');
      };
    });
  };
  // Toggle Filter tree
  toggleFilterTree = function() {
    $('#filters .filterNav.facet.fullcat a.toggle').click(function(e) {
      e.stopPropagation();
      $target = $(e.currentTarget).parent();
      $toggler = $target.children().first();
      if ($target.hasClass('collapsed')) {
        $toggler.text('-');
        $target.removeClass('collapsed');
        $target.addClass('expanded');
      } else {
        $toggler.text('+');
        $target.addClass('collapsed');
        $target.removeClass('expanded');
      }
    });
  }
  changeFilterAndNavigate = function(type, t, n, i) {
    var a = $('#filters').find(".filterNav");
    if (i) {
      OpenMenu(i, a, !1);
    }
    window.location.href = '?' + $.param(searchFilters)
  };
  prettifyNumber = function(e) {
    if (!e) return "";
    for (var t = [{
        divider: 1e6,
        suffix: "M"
      }, {
        divider: 1e3,
        suffix: "k"
      }], n = 0, i = t.length; i > n; n++) e >= t[n].divider && (e = Math.round(e / t[n].divider * 10) / 10 + t[n].suffix);
    return e.toString()
  };
  displayPriceRange = function(el, value) {
    var e = value[0],
      t = value[1],
      n = $("[data-min]"),
      i = $("[data-max]"),
      a = prettifyNumber(e),
      r = prettifyNumber(t);
    t >= MAX_PRICE && (r += "+"), i.text("$" + r), n.text("$" + a)
  };
  
  // Pbulic
  window.zitaola = {
    init: {
      home: function() {
        var e, t, n, i, a;
        setTimeout(function() {
          e = $(".unitsMasthead"), t = e.length, t > 1 && !window.homeMastheadTimer && (window.homeMastheadTimer = setInterval(function() {
            e = $(".unitsMasthead"), n = e.not(".backStage"), i = e.index(n), n.addClass("offStageLeft"), a = t - 1 > i ? i + 1 : 0, setTimeout(function() {
              n.removeClass("offStageLeft").addClass("backStage")
            }, 1e3), e.eq(a).removeClass("backStage")
          }, 8e3))
        }, 100);
        overlayBinddings();
        authBinddings();
      },
      list: function() {
        // searchFilter Initailize
        searchFilters = $.extend(
          searchFilters, parseURL(window.location.href).params
        );
        // Widgets initialize
        $('#pricerange').noUiSlider({
          start: [0, 5e3],
          connect: !0,
          direction: "ltr",
          orientation: "horizontal",
          behaviour: "tap-drag",
          range: {
            min: [0, 25],
            "30%": [100, 50],
            "50%": [500, 100],
            "70%": [1e3, 500],
            max: [2500]
          }
        }).on({
          slide: displayPriceRange,
          change: function(e, value) {
            searchFilters.price = value.join('-');
            changeFilterAndNavigate();
          }
        });

        // Events binding
        $('.hasSubMenu,.sortMenuOpener').click(function(e) {
          var t = $(e.target).closest(".navItem"),
            n = $(this.el).find(".filterNav");
          return OpenMenu(t, n, !1), !1
        });
        $('.sortMenuAction').click(function(e) {
          var value = $(e.currentTarget).data('value');
          searchFilters.sort = value;
          changeFilterAndNavigate();
        })
        $('.statusFilterItem a').click(function(e) {
          var value = $(e.currentTarget).data('value')
          searchFilters.sale = value;
          changeFilterAndNavigate();
        });
        $('.colorMenuAction').click(function(e) {
          var value = $(e.currentTarget).attr('title')
          searchFilters.color = value;
          changeFilterAndNavigate();
        });
        $('.facetTypecat').click(function(e) {
          var value = $(e.currentTarget).attr('title')
          searchFilters.category = value;
          changeFilterAndNavigate();
        });
        $('.facetTypebrand').click(function(e) {
          var value = $(e.currentTarget).attr('title')
          searchFilters.brand = value;
          changeFilterAndNavigate();
        });
        toggleFilterMenu();
        toggleFilterTree();
        overlayBinddings();
        authBinddings();
        toggleProfileMenu();
      },
      detail: function() {
        $('.secondaryBuyWrap .color').click(function(e) {
          var $el = $(e.currentTarget)
          $('.secondaryBuyWrap .color').removeClass('selected');
          $el.addClass('selected');
          $('.secondaryBuyWrap input[name="color"]').val($el.data('value'));
        });
        
        $('.thumbnailAction').click(function(e) {
          $('#primaryTemplateImg').attr(
            'src', $(e.currentTarget).data('lrg-image')
          )
        });
        toggleProfileMenu();
      },
      loves: function() {
        toggleProfileMenu();
      }
    }
  }
})();