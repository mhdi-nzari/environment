/*! For license information please see main.js.LICENSE */
(buildinfo = {
  buildname: "fs-webpack-build",
  ver: "5.8.0",
  template: "newclientcustom",
}),
  (function (e) {
    function t(i) {
      if (n[i]) return n[i].exports;
      var o = (n[i] = { i: i, l: !1, exports: {} });
      return e[i].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    (t.m = e),
      (t.c = n),
      (t.d = function (e, n, i) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 6));
  })([
    function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n =
          ((t.$body = $("body")),
          (t.$pageBodyWrapper = $("#fsPageBodyWrapper")),
          (t.$header = $("#fsHeader")),
          (t.$section = $("section")),
          (t.isHome = $(".home").length),
          (t.notDraftMode = !$(".fsDraftMode").length),
          (t.notComposeMode = !$(".fsComposeMode").length),
          (t.$window = $(window)),
          (t.$navMain = $(".nav-main")),
          (t.$navMain_level1 = $(".nav-main .fsNavLevel1"))),
        i =
          ((t.$navSub = $(".nav-sub")),
          (t.sectionTitle = n
            .find('> li[class*="fsNavCurrentPage"] > a')
            .text()),
          (t.$navMainMobile = $(".nav-main-mobile")));
      (t.mobileMenuToggle = ".menu-toggle"),
        (t.mobileMenuClose = ".mobile-close"),
        (t.$mobileParentNavs = i.find(".fsNavParentPage")),
        (t.$calendarGrid = $(".fsCalendar.fsGrid")),
        (t.$postElementAlign = $(".fsPostElement.fsThumbnailAlignLeft")),
        (t.$slideshowSubtypeHorizontal = $(
          ".fsSlideshow.fsSlideshowHorizontal"
        )),
        (t.$headerSearch = $(".header-search")),
        (t.$searchToggle = $(".search-toggle")),
        (t.$tableStyle = $("table.fs_style_50, table.fsElementTable")),
        (t.$heroElement = $(".hero")),
        (t.$postSlideshowElement = $(".post-slideshow")),
        (t.$imageButtonElement = $(".image-button"));
    },
    function (e, t) {
      function n(e, t) {
        if (0 === e.length || 0 === t.length) return !1;
        var n = $(e).eq(0),
          i = n.attr("data-image-sizes"),
          o = n.attr("data-aspect-ratio");
        $(t).eq(0).attr("data-image-sizes", i).attr("data-aspect-ratio", o),
          FS.util.updateDynamicImages($(t).eq(0));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.moveResourceImage = n);
    },
    function (e, t) {
      !(function (e, t) {
        function n(e, t, n) {
          var i = e.children(),
            o = !1;
          e.empty();
          for (var a = 0, r = i.length; a < r; a++) {
            var l = i.eq(a);
            if ((e.append(l), n && e.append(n), s(e, t))) {
              l.remove(), (o = !0);
              break;
            }
            n && n.detach();
          }
          return o;
        }
        function i(t, n, a, r, l) {
          var d = !1;
          return (
            t
              .contents()
              .detach()
              .each(function () {
                var c = this,
                  f = e(c);
                if (void 0 === c) return !0;
                if (f.is("script, .dotdotdot-keep")) t.append(f);
                else {
                  if (d) return !0;
                  t.append(f),
                    !l ||
                      f.is(r.after) ||
                      f.find(r.after).length ||
                      t[
                        t.is(
                          "a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style"
                        )
                          ? "after"
                          : "append"
                      ](l),
                    s(a, r) &&
                      (d =
                        3 == c.nodeType ? o(f, n, a, r, l) : i(f, n, a, r, l)),
                    d || (l && l.detach());
                }
              }),
            n.addClass("is-truncated"),
            d
          );
        }
        function o(t, n, i, o, r) {
          var c = t[0];
          if (!c) return !1;
          var u = d(c),
            h = -1 !== u.indexOf(" ") ? " " : "　",
            p = "letter" == o.wrap ? "" : h,
            m = u.split(p),
            v = -1,
            g = -1,
            $ = 0,
            b = m.length - 1;
          for (
            o.fallbackToLetter &&
            0 == $ &&
            0 == b &&
            ((p = ""), (m = u.split(p)), (b = m.length - 1));
            $ <= b && (0 != $ || 0 != b);

          ) {
            var w = Math.floor(($ + b) / 2);
            if (w == g) break;
            (g = w),
              l(c, m.slice(0, g + 1).join(p) + o.ellipsis),
              i.children().each(function () {
                e(this).toggle().toggle();
              }),
              s(i, o)
                ? ((b = g),
                  o.fallbackToLetter &&
                    0 == $ &&
                    0 == b &&
                    ((p = ""),
                    (m = m[0].split(p)),
                    (v = -1),
                    (g = -1),
                    ($ = 0),
                    (b = m.length - 1)))
                : ((v = g), ($ = g));
          }
          if (-1 == v || (1 == m.length && 0 == m[0].length)) {
            var y = t.parent();
            t.detach();
            var C = r && r.closest(y).length ? r.length : 0;
            if (
              (y.contents().length > C
                ? (c = f(y.contents().eq(-1 - C), n))
                : ((c = f(y, n, !0)), C || y.detach()),
              c && ((u = a(d(c), o)), l(c, u), C && r))
            ) {
              var x = r.parent();
              e(c).parent().append(r), e.trim(x.html()) || x.remove();
            }
          } else (u = a(m.slice(0, v + 1).join(p), o)), l(c, u);
          return !0;
        }
        function s(e, t) {
          return e.innerHeight() > t.maxHeight;
        }
        function a(t, n) {
          for (; e.inArray(t.slice(-1), n.lastCharacter.remove) > -1; )
            t = t.slice(0, -1);
          return (
            e.inArray(t.slice(-1), n.lastCharacter.noEllipsis) < 0 &&
              (t += n.ellipsis),
            t
          );
        }
        function r(e) {
          return { width: e.innerWidth(), height: e.innerHeight() };
        }
        function l(e, t) {
          e.innerText
            ? (e.innerText = t)
            : e.nodeValue
            ? (e.nodeValue = t)
            : e.textContent && (e.textContent = t);
        }
        function d(e) {
          return e.innerText
            ? e.innerText
            : e.nodeValue
            ? e.nodeValue
            : e.textContent
            ? e.textContent
            : "";
        }
        function c(e) {
          do {
            e = e.previousSibling;
          } while (e && 1 !== e.nodeType && 3 !== e.nodeType);
          return e;
        }
        function f(t, n, i) {
          var o,
            s = t && t[0];
          if (s) {
            if (!i) {
              if (3 === s.nodeType) return s;
              if (e.trim(t.text())) return f(t.contents().last(), n);
            }
            for (o = c(s); !o; ) {
              if (((t = t.parent()), t.is(n) || !t.length)) return !1;
              o = c(t[0]);
            }
            if (o) return f(e(o), n);
          }
          return !1;
        }
        function u(t, n) {
          return (
            !!t &&
            ("string" == typeof t
              ? ((t = e(t, n)), !!t.length && t)
              : !!t.jquery && t)
          );
        }
        function h(e) {
          for (
            var t = e.innerHeight(),
              n = ["paddingTop", "paddingBottom"],
              i = 0,
              o = n.length;
            i < o;
            i++
          ) {
            var s = parseInt(e.css(n[i]), 10);
            isNaN(s) && (s = 0), (t -= s);
          }
          return t;
        }
        if (!e.fn.dotdotdot) {
          (e.fn.dotdotdot = function (t) {
            if (0 == this.length)
              return (
                e.fn.dotdotdot.debug(
                  'No element found for "' + this.selector + '".'
                ),
                this
              );
            if (this.length > 1)
              return this.each(function () {
                e(this).dotdotdot(t);
              });
            var o = this,
              a = o.contents();
            o.data("dotdotdot") && o.trigger("destroy.dot"),
              o.data("dotdotdot-style", o.attr("style") || ""),
              o.css("word-wrap", "break-word"),
              "nowrap" === o.css("white-space") &&
                o.css("white-space", "normal"),
              (o.bind_events = function () {
                return (
                  o
                    .bind("update.dot", function (t, r) {
                      switch (
                        (o.removeClass("is-truncated"),
                        t.preventDefault(),
                        t.stopPropagation(),
                        typeof l.height)
                      ) {
                        case "number":
                          l.maxHeight = l.height;
                          break;
                        case "function":
                          l.maxHeight = l.height.call(o[0]);
                          break;
                        default:
                          l.maxHeight = h(o);
                      }
                      (l.maxHeight += l.tolerance),
                        void 0 !== r &&
                          (("string" == typeof r ||
                            ("nodeType" in r && 1 === r.nodeType)) &&
                            (r = e("<div />").append(r).contents()),
                          r instanceof e && (a = r)),
                        (m = o
                          .wrapInner('<div class="dotdotdot" />')
                          .children()),
                        m
                          .contents()
                          .detach()
                          .end()
                          .append(a.clone(!0))
                          .find("br")
                          .replaceWith("  <br />  ")
                          .end()
                          .css({
                            height: "auto",
                            width: "auto",
                            border: "none",
                            padding: 0,
                            margin: 0,
                          });
                      var c = !1,
                        f = !1;
                      return (
                        d.afterElement &&
                          ((c = d.afterElement.clone(!0)),
                          c.show(),
                          d.afterElement.detach()),
                        s(m, l) &&
                          (f =
                            "children" == l.wrap
                              ? n(m, l, c)
                              : i(m, o, m, l, c)),
                        m.replaceWith(m.contents()),
                        (m = null),
                        e.isFunction(l.callback) && l.callback.call(o[0], f, a),
                        (d.isTruncated = f),
                        f
                      );
                    })
                    .bind("isTruncated.dot", function (e, t) {
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        "function" == typeof t && t.call(o[0], d.isTruncated),
                        d.isTruncated
                      );
                    })
                    .bind("originalContent.dot", function (e, t) {
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        "function" == typeof t && t.call(o[0], a),
                        a
                      );
                    })
                    .bind("destroy.dot", function (e) {
                      e.preventDefault(),
                        e.stopPropagation(),
                        o
                          .unwatch()
                          .unbind_events()
                          .contents()
                          .detach()
                          .end()
                          .append(a)
                          .attr("style", o.data("dotdotdot-style") || "")
                          .removeClass("is-truncated")
                          .data("dotdotdot", !1);
                    }),
                  o
                );
              }),
              (o.unbind_events = function () {
                return o.unbind(".dot"), o;
              }),
              (o.watch = function () {
                if ((o.unwatch(), "window" == l.watch)) {
                  var t = e(window),
                    n = t.width(),
                    i = t.height();
                  t.bind("resize.dot" + d.dotId, function () {
                    (n == t.width() && i == t.height() && l.windowResizeFix) ||
                      ((n = t.width()),
                      (i = t.height()),
                      f && clearInterval(f),
                      (f = setTimeout(function () {
                        o.trigger("update.dot");
                      }, 100)));
                  });
                } else
                  (c = r(o)),
                    (f = setInterval(function () {
                      if (o.is(":visible")) {
                        var e = r(o);
                        (c.width == e.width && c.height == e.height) ||
                          (o.trigger("update.dot"), (c = e));
                      }
                    }, 500));
                return o;
              }),
              (o.unwatch = function () {
                return (
                  e(window).unbind("resize.dot" + d.dotId),
                  f && clearInterval(f),
                  o
                );
              });
            var l = e.extend(!0, {}, e.fn.dotdotdot.defaults, t),
              d = {},
              c = {},
              f = null,
              m = null;
            return (
              l.lastCharacter.remove instanceof Array ||
                (l.lastCharacter.remove =
                  e.fn.dotdotdot.defaultArrays.lastCharacter.remove),
              l.lastCharacter.noEllipsis instanceof Array ||
                (l.lastCharacter.noEllipsis =
                  e.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),
              (d.afterElement = u(l.after, o)),
              (d.isTruncated = !1),
              (d.dotId = p++),
              o.data("dotdotdot", !0).bind_events().trigger("update.dot"),
              l.watch && o.watch(),
              o
            );
          }),
            (e.fn.dotdotdot.defaults = {
              ellipsis: "... ",
              wrap: "word",
              fallbackToLetter: !0,
              lastCharacter: {},
              tolerance: 0,
              callback: null,
              after: null,
              height: null,
              watch: !1,
              windowResizeFix: !0,
            }),
            (e.fn.dotdotdot.defaultArrays = {
              lastCharacter: {
                remove: [" ", "　", ",", ";", ".", "!", "?"],
                noEllipsis: [],
              },
            }),
            (e.fn.dotdotdot.debug = function (e) {});
          var p = 1,
            m = e.fn.html;
          e.fn.html = function (t) {
            return void 0 != t && !e.isFunction(t) && this.data("dotdotdot")
              ? this.trigger("update", [t])
              : m.apply(this, arguments);
          };
          var v = e.fn.text;
          e.fn.text = function (t) {
            return void 0 != t && !e.isFunction(t) && this.data("dotdotdot")
              ? ((t = e("<div />").text(t).html()), this.trigger("update", [t]))
              : v.apply(this, arguments);
          };
        }
      })(jQuery),
        jQuery(document).ready(function (e) {
          e(".dot-ellipsis").each(function () {
            var t = e(this).hasClass("dot-resize-update"),
              n = e(this).hasClass("dot-timer-update"),
              i = 0,
              o = e(this).attr("class").split(/\s+/);
            e.each(o, function (e, t) {
              var n = t.match(/^dot-height-(\d+)$/);
              null !== n && (i = Number(n[1]));
            });
            var s = new Object();
            n && (s.watch = !0),
              t && (s.watch = "window"),
              i > 0 && (s.height = i),
              e(this).dotdotdot(s);
          });
        }),
        jQuery(window).on("load", function () {
          jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot");
        });
    },
    function (e, t) {
      !(function (e, t, n, i) {
        e.fn.doubleTapToGo = function (i) {
          return (
            !!(
              "ontouchstart" in t ||
              navigator.msMaxTouchPoints ||
              navigator.userAgent.toLowerCase().match(/windows phone os 7/i)
            ) &&
            (this.each(function () {
              var t = !1;
              e(this).on("click", function (n) {
                var i = e(this);
                i[0] != t[0] && (n.preventDefault(), (t = i));
              }),
                e(n).on("click touchstart MSPointerDown", function (n) {
                  for (
                    var i = !0, o = e(n.target).parents(), s = 0;
                    s < o.length;
                    s++
                  )
                    o[s] == t[0] && (i = !1);
                  i && (t = !1);
                });
            }),
            this)
          );
        };
      })(jQuery, window, document);
    },
    function (e, t) {
      function n(e) {
        (backgroundElement = e),
          $(backgroundElement).each(function () {
            var e = $(this).find("img").attr("src");
            $(this).css("background-image", 'url("' + e + '")');
          });
      }
      function i(e, t, n) {
        var i;
        return function () {
          var o = this,
            s = arguments,
            a = function () {
              (i = null), n || e.apply(o, s);
            },
            r = n && !i;
          clearTimeout(i), (i = setTimeout(a, t)), r && e.apply(o, s);
        };
      }
      function o(e, t) {
        var n,
          i,
          o = 100;
        (n = function n() {
          e.find("input.gsc-input").length
            ? $.support.placeholder
              ? e.find("input.gsc-input").attr("placeholder", t)
              : e.find("input.gsc-input").attr("value", t)
            : o > 0 && ((i = setTimeout(n, 100)), (o -= 1));
        }),
          (i = setTimeout(n, 100));
      }
      function s(e, t) {
        return e.replace(/\{([\w\.]*)\}/g, function (e, n) {
          for (
            var i = n.split("."), o = t[i.shift()], s = 0, a = i.length;
            s < a;
            s++
          )
            o = o[i[s]];
          return void 0 !== o && null !== o ? o : "";
        });
      }
      function a() {
        $.fn.randomize = function (e) {
          return (
            (e ? $(this).find(e) : $(this).children())
              .parent()
              .each(function () {
                $(this)
                  .children(e)
                  .sort(function () {
                    return Math.round(Math.random()) - 0.5;
                  })
                  .detach()
                  .appendTo(this);
              }),
            this
          );
        };
      }
      function r(e, t) {
        e.addEventListener("keydown", function (n) {
          var i = Array.from(
              e.querySelectorAll(
                'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
              )
            ).filter(function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            o = i[0];
          lastFocusableEl = i[i.length - 1];
          var s = "Tab" === n.key || 9 === n.keyCode,
            a = "Escape" === n.key || 27 === n.keyCode;
          (s || a) &&
            (a && ((this.callback = t), this.callback()),
            n.shiftKey
              ? document.activeElement === o &&
                (lastFocusableEl.focus(), n.preventDefault())
              : document.activeElement === lastFocusableEl &&
                (o.focus(), n.preventDefault()));
        });
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.backgroundImage = n),
        (t.debounce = i),
        (t.placeholder = o),
        (t.nano = s),
        (t.randomGenerator = a),
        (t.trapFocus = r);
    },
    function (e, t) {
      !(function () {
        "use strict";
        function e(i) {
          if (!i) throw new Error("No options passed to Waypoint constructor");
          if (!i.element)
            throw new Error("No element option passed to Waypoint constructor");
          if (!i.handler)
            throw new Error("No handler option passed to Waypoint constructor");
          (this.key = "waypoint-" + t),
            (this.options = e.Adapter.extend({}, e.defaults, i)),
            (this.element = this.options.element),
            (this.adapter = new e.Adapter(this.element)),
            (this.callback = i.handler),
            (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
            (this.enabled = this.options.enabled),
            (this.triggerPoint = null),
            (this.group = e.Group.findOrCreate({
              name: this.options.group,
              axis: this.axis,
            })),
            (this.context = e.Context.findOrCreateByElement(
              this.options.context
            )),
            e.offsetAliases[this.options.offset] &&
              (this.options.offset = e.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            (n[this.key] = this),
            (t += 1);
        }
        var t = 0,
          n = {};
        (e.prototype.queueTrigger = function (e) {
          this.group.queueTrigger(this, e);
        }),
          (e.prototype.trigger = function (e) {
            this.enabled && this.callback && this.callback.apply(this, e);
          }),
          (e.prototype.destroy = function () {
            this.context.remove(this),
              this.group.remove(this),
              delete n[this.key];
          }),
          (e.prototype.disable = function () {
            return (this.enabled = !1), this;
          }),
          (e.prototype.enable = function () {
            return this.context.refresh(), (this.enabled = !0), this;
          }),
          (e.prototype.next = function () {
            return this.group.next(this);
          }),
          (e.prototype.previous = function () {
            return this.group.previous(this);
          }),
          (e.invokeAll = function (e) {
            var t = [];
            for (var i in n) t.push(n[i]);
            for (var o = 0, s = t.length; o < s; o++) t[o][e]();
          }),
          (e.destroyAll = function () {
            e.invokeAll("destroy");
          }),
          (e.disableAll = function () {
            e.invokeAll("disable");
          }),
          (e.enableAll = function () {
            e.Context.refreshAll();
            for (var t in n) n[t].enabled = !0;
            return this;
          }),
          (e.refreshAll = function () {
            e.Context.refreshAll();
          }),
          (e.viewportHeight = function () {
            return window.innerHeight || document.documentElement.clientHeight;
          }),
          (e.viewportWidth = function () {
            return document.documentElement.clientWidth;
          }),
          (e.adapters = []),
          (e.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0,
          }),
          (e.offsetAliases = {
            "bottom-in-view": function () {
              return this.context.innerHeight() - this.adapter.outerHeight();
            },
            "right-in-view": function () {
              return this.context.innerWidth() - this.adapter.outerWidth();
            },
          }),
          (window.Waypoint = e);
      })(),
        (function () {
          "use strict";
          function e(e) {
            window.setTimeout(e, 1e3 / 60);
          }
          function t(e) {
            (this.element = e),
              (this.Adapter = o.Adapter),
              (this.adapter = new this.Adapter(e)),
              (this.key = "waypoint-context-" + n),
              (this.didScroll = !1),
              (this.didResize = !1),
              (this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop(),
              }),
              (this.waypoints = { vertical: {}, horizontal: {} }),
              (e.waypointContextKey = this.key),
              (i[e.waypointContextKey] = this),
              (n += 1),
              o.windowContext ||
                ((o.windowContext = !0), (o.windowContext = new t(window))),
              this.createThrottledScrollHandler(),
              this.createThrottledResizeHandler();
          }
          var n = 0,
            i = {},
            o = window.Waypoint,
            s = window.onload;
          (t.prototype.add = function (e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[t][e.key] = e), this.refresh();
          }),
            (t.prototype.checkEmpty = function () {
              var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical),
                n = this.element == this.element.window;
              e &&
                t &&
                !n &&
                (this.adapter.off(".waypoints"), delete i[this.key]);
            }),
            (t.prototype.createThrottledResizeHandler = function () {
              function e() {
                t.handleResize(), (t.didResize = !1);
              }
              var t = this;
              this.adapter.on("resize.waypoints", function () {
                t.didResize || ((t.didResize = !0), o.requestAnimationFrame(e));
              });
            }),
            (t.prototype.createThrottledScrollHandler = function () {
              function e() {
                t.handleScroll(), (t.didScroll = !1);
              }
              var t = this;
              this.adapter.on("scroll.waypoints", function () {
                (t.didScroll && !o.isTouch) ||
                  ((t.didScroll = !0), o.requestAnimationFrame(e));
              });
            }),
            (t.prototype.handleResize = function () {
              o.Context.refreshAll();
            }),
            (t.prototype.handleScroll = function () {
              var e = {},
                t = {
                  horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                  },
                  vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                  },
                };
              for (var n in t) {
                var i = t[n],
                  o = i.newScroll > i.oldScroll,
                  s = o ? i.forward : i.backward;
                for (var a in this.waypoints[n]) {
                  var r = this.waypoints[n][a];
                  if (null !== r.triggerPoint) {
                    var l = i.oldScroll < r.triggerPoint,
                      d = i.newScroll >= r.triggerPoint,
                      c = l && d,
                      f = !l && !d;
                    (c || f) && (r.queueTrigger(s), (e[r.group.id] = r.group));
                  }
                }
              }
              for (var u in e) e[u].flushTriggers();
              this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll,
              };
            }),
            (t.prototype.innerHeight = function () {
              return this.element == this.element.window
                ? o.viewportHeight()
                : this.adapter.innerHeight();
            }),
            (t.prototype.remove = function (e) {
              delete this.waypoints[e.axis][e.key], this.checkEmpty();
            }),
            (t.prototype.innerWidth = function () {
              return this.element == this.element.window
                ? o.viewportWidth()
                : this.adapter.innerWidth();
            }),
            (t.prototype.destroy = function () {
              var e = [];
              for (var t in this.waypoints)
                for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
              for (var i = 0, o = e.length; i < o; i++) e[i].destroy();
            }),
            (t.prototype.refresh = function () {
              var e,
                t = this.element == this.element.window,
                n = t ? void 0 : this.adapter.offset(),
                i = {};
              this.handleScroll(),
                (e = {
                  horizontal: {
                    contextOffset: t ? 0 : n.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left",
                  },
                  vertical: {
                    contextOffset: t ? 0 : n.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top",
                  },
                });
              for (var s in e) {
                var a = e[s];
                for (var r in this.waypoints[s]) {
                  var l,
                    d,
                    c,
                    f,
                    u,
                    h = this.waypoints[s][r],
                    p = h.options.offset,
                    m = h.triggerPoint,
                    v = 0,
                    g = null == m;
                  h.element !== h.element.window &&
                    (v = h.adapter.offset()[a.offsetProp]),
                    "function" == typeof p
                      ? (p = p.apply(h))
                      : "string" == typeof p &&
                        ((p = parseFloat(p)),
                        h.options.offset.indexOf("%") > -1 &&
                          (p = Math.ceil((a.contextDimension * p) / 100))),
                    (l = a.contextScroll - a.contextOffset),
                    (h.triggerPoint = Math.floor(v + l - p)),
                    (d = m < a.oldScroll),
                    (c = h.triggerPoint >= a.oldScroll),
                    (f = d && c),
                    (u = !d && !c),
                    !g && f
                      ? (h.queueTrigger(a.backward), (i[h.group.id] = h.group))
                      : !g && u
                      ? (h.queueTrigger(a.forward), (i[h.group.id] = h.group))
                      : g &&
                        a.oldScroll >= h.triggerPoint &&
                        (h.queueTrigger(a.forward), (i[h.group.id] = h.group));
                }
              }
              return (
                o.requestAnimationFrame(function () {
                  for (var e in i) i[e].flushTriggers();
                }),
                this
              );
            }),
            (t.findOrCreateByElement = function (e) {
              return t.findByElement(e) || new t(e);
            }),
            (t.refreshAll = function () {
              for (var e in i) i[e].refresh();
            }),
            (t.findByElement = function (e) {
              return i[e.waypointContextKey];
            }),
            (window.onload = function () {
              s && s(), t.refreshAll();
            }),
            (o.requestAnimationFrame = function (t) {
              (
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                e
              ).call(window, t);
            }),
            (o.Context = t);
        })(),
        (function () {
          "use strict";
          function e(e, t) {
            return e.triggerPoint - t.triggerPoint;
          }
          function t(e, t) {
            return t.triggerPoint - e.triggerPoint;
          }
          function n(e) {
            (this.name = e.name),
              (this.axis = e.axis),
              (this.id = this.name + "-" + this.axis),
              (this.waypoints = []),
              this.clearTriggerQueues(),
              (i[this.axis][this.name] = this);
          }
          var i = { vertical: {}, horizontal: {} },
            o = window.Waypoint;
          (n.prototype.add = function (e) {
            this.waypoints.push(e);
          }),
            (n.prototype.clearTriggerQueues = function () {
              this.triggerQueues = { up: [], down: [], left: [], right: [] };
            }),
            (n.prototype.flushTriggers = function () {
              for (var n in this.triggerQueues) {
                var i = this.triggerQueues[n],
                  o = "up" === n || "left" === n;
                i.sort(o ? t : e);
                for (var s = 0, a = i.length; s < a; s += 1) {
                  var r = i[s];
                  (r.options.continuous || s === i.length - 1) &&
                    r.trigger([n]);
                }
              }
              this.clearTriggerQueues();
            }),
            (n.prototype.next = function (t) {
              this.waypoints.sort(e);
              var n = o.Adapter.inArray(t, this.waypoints);
              return n === this.waypoints.length - 1
                ? null
                : this.waypoints[n + 1];
            }),
            (n.prototype.previous = function (t) {
              this.waypoints.sort(e);
              var n = o.Adapter.inArray(t, this.waypoints);
              return n ? this.waypoints[n - 1] : null;
            }),
            (n.prototype.queueTrigger = function (e, t) {
              this.triggerQueues[t].push(e);
            }),
            (n.prototype.remove = function (e) {
              var t = o.Adapter.inArray(e, this.waypoints);
              t > -1 && this.waypoints.splice(t, 1);
            }),
            (n.prototype.first = function () {
              return this.waypoints[0];
            }),
            (n.prototype.last = function () {
              return this.waypoints[this.waypoints.length - 1];
            }),
            (n.findOrCreate = function (e) {
              return i[e.axis][e.name] || new n(e);
            }),
            (o.Group = n);
        })(),
        (function () {
          "use strict";
          function e(e) {
            this.$element = t(e);
          }
          var t = window.jQuery,
            n = window.Waypoint;
          t.each(
            [
              "innerHeight",
              "innerWidth",
              "off",
              "offset",
              "on",
              "outerHeight",
              "outerWidth",
              "scrollLeft",
              "scrollTop",
            ],
            function (t, n) {
              e.prototype[n] = function () {
                var e = Array.prototype.slice.call(arguments);
                return this.$element[n].apply(this.$element, e);
              };
            }
          ),
            t.each(["extend", "inArray", "isEmptyObject"], function (n, i) {
              e[i] = t[i];
            }),
            n.adapters.push({ name: "jquery", Adapter: e }),
            (n.Adapter = e);
        })(),
        (function () {
          "use strict";
          function e(e) {
            return function () {
              var n = [],
                i = arguments[0];
              return (
                e.isFunction(arguments[0]) &&
                  ((i = e.extend({}, arguments[1])),
                  (i.handler = arguments[0])),
                this.each(function () {
                  var o = e.extend({}, i, { element: this });
                  "string" == typeof o.context &&
                    (o.context = e(this).closest(o.context)[0]),
                    n.push(new t(o));
                }),
                n
              );
            };
          }
          var t = window.Waypoint;
          window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)),
            window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto));
        })();
    },
    function (e, t, n) {
      e.exports = n(7);
    },
    function (e, t, n) {
      n(8), n(9), n(24);
    },
    function (e, t) {},
    function (e, t, n) {
      !(function () {
        if (void 0 !== window.buildinfo) {
          var e = document.getElementsByTagName("body")[0];
          e.setAttribute("data-buildver", window.buildinfo.ver),
            e.setAttribute("data-sitetemplate", window.buildinfo.template);
        }
      })(),
        n(10),
        n(11),
        INITIATE_ALL.init();
    },
    function (e, t) {
      !(function (e, t, n) {
        function i(e, t) {
          return typeof e === t;
        }
        function o() {
          return "function" != typeof t.createElement
            ? t.createElement(arguments[0])
            : C
            ? t.createElementNS.call(
                t,
                "http://www.w3.org/2000/svg",
                arguments[0]
              )
            : t.createElement.apply(t, arguments);
        }
        function s(e) {
          return e
            .replace(/([a-z])-([a-z])/g, function (e, t, n) {
              return t + n.toUpperCase();
            })
            .replace(/^-/, "");
        }
        function a() {
          var e = t.body;
          return e || ((e = o(C ? "svg" : "body")), (e.fake = !0)), e;
        }
        function r(e, n, i, s) {
          var r,
            l,
            d,
            c,
            f = "modernizr",
            u = o("div"),
            h = a();
          if (parseInt(i, 10))
            for (; i--; )
              (d = o("div")), (d.id = s ? s[i] : f + (i + 1)), u.appendChild(d);
          return (
            (r = o("style")),
            (r.type = "text/css"),
            (r.id = "s" + f),
            (h.fake ? h : u).appendChild(r),
            h.appendChild(u),
            r.styleSheet
              ? (r.styleSheet.cssText = e)
              : r.appendChild(t.createTextNode(e)),
            (u.id = f),
            h.fake &&
              ((h.style.background = ""),
              (h.style.overflow = "hidden"),
              (c = y.style.overflow),
              (y.style.overflow = "hidden"),
              y.appendChild(h)),
            (l = n(u, e)),
            h.fake
              ? (h.parentNode.removeChild(h),
                (y.style.overflow = c),
                y.offsetHeight)
              : u.parentNode.removeChild(u),
            !!l
          );
        }
        function l(e, t) {
          return !!~("" + e).indexOf(t);
        }
        function d(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        function c(e, t, n) {
          var o;
          for (var s in e)
            if (e[s] in t)
              return !1 === n
                ? e[s]
                : ((o = t[e[s]]), i(o, "function") ? d(o, n || t) : o);
          return !1;
        }
        function f(t, n, i) {
          var o;
          if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var s = e.console;
            if (null !== o) i && (o = o.getPropertyValue(i));
            else if (s) {
              var a = s.error ? "error" : "log";
              s[a].call(
                s,
                "getComputedStyle returning null, its possible modernizr test results are inaccurate"
              );
            }
          } else o = !n && t.currentStyle && t.currentStyle[i];
          return o;
        }
        function u(e) {
          return e
            .replace(/([A-Z])/g, function (e, t) {
              return "-" + t.toLowerCase();
            })
            .replace(/^ms-/, "-ms-");
        }
        function h(t, i) {
          var o = t.length;
          if ("CSS" in e && "supports" in e.CSS) {
            for (; o--; ) if (e.CSS.supports(u(t[o]), i)) return !0;
            return !1;
          }
          if ("CSSSupportsRule" in e) {
            for (var s = []; o--; ) s.push("(" + u(t[o]) + ":" + i + ")");
            return (
              (s = s.join(" or ")),
              r(
                "@supports (" + s + ") { #modernizr { position: absolute; } }",
                function (e) {
                  return "absolute" == f(e, null, "position");
                }
              )
            );
          }
          return n;
        }
        function p(e, t, a, r) {
          function d() {
            f && (delete I.style, delete I.modElem);
          }
          if (((r = !i(r, "undefined") && r), !i(a, "undefined"))) {
            var c = h(e, a);
            if (!i(c, "undefined")) return c;
          }
          for (
            var f, u, p, m, v, g = ["modernizr", "tspan", "samp"];
            !I.style && g.length;

          )
            (f = !0), (I.modElem = o(g.shift())), (I.style = I.modElem.style);
          for (p = e.length, u = 0; u < p; u++)
            if (
              ((m = e[u]),
              (v = I.style[m]),
              l(m, "-") && (m = s(m)),
              I.style[m] !== n)
            ) {
              if (r || i(a, "undefined")) return d(), "pfx" != t || m;
              try {
                I.style[m] = a;
              } catch (e) {}
              if (I.style[m] != v) return d(), "pfx" != t || m;
            }
          return d(), !1;
        }
        function m(e, t, n, o, s) {
          var a = e.charAt(0).toUpperCase() + e.slice(1),
            r = (e + " " + E.join(a + " ") + a).split(" ");
          return i(t, "string") || i(t, "undefined")
            ? p(r, t, o, s)
            : ((r = (e + " " + S.join(a + " ") + a).split(" ")), c(r, t, n));
        }
        function v(e, t, i) {
          return m(e, n, n, t, i);
        }
        var g = [],
          $ = [],
          b = {
            _version: "3.5.0",
            _config: {
              classPrefix: "",
              enableClasses: !0,
              enableJSClass: !0,
              usePrefixes: !0,
            },
            _q: [],
            on: function (e, t) {
              var n = this;
              setTimeout(function () {
                t(n[e]);
              }, 0);
            },
            addTest: function (e, t, n) {
              $.push({ name: e, fn: t, options: n });
            },
            addAsyncTest: function (e) {
              $.push({ name: null, fn: e });
            },
          },
          w = function () {};
        (w.prototype = b),
          (w = new w()),
          w.addTest(
            "svg",
            !!t.createElementNS &&
              !!t.createElementNS("http://www.w3.org/2000/svg", "svg")
                .createSVGRect
          );
        var y = t.documentElement,
          C = "svg" === y.nodeName.toLowerCase();
        w.addTest("audio", function () {
          var e = o("audio"),
            t = !1;
          try {
            (t = !!e.canPlayType),
              t &&
                ((t = new Boolean(t)),
                (t.ogg = e
                  .canPlayType('audio/ogg; codecs="vorbis"')
                  .replace(/^no$/, "")),
                (t.mp3 = e
                  .canPlayType('audio/mpeg; codecs="mp3"')
                  .replace(/^no$/, "")),
                (t.opus =
                  e.canPlayType('audio/ogg; codecs="opus"') ||
                  e
                    .canPlayType('audio/webm; codecs="opus"')
                    .replace(/^no$/, "")),
                (t.wav = e
                  .canPlayType('audio/wav; codecs="1"')
                  .replace(/^no$/, "")),
                (t.m4a = (
                  e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")
                ).replace(/^no$/, "")));
          } catch (e) {}
          return t;
        });
        var x = (function () {
          function e(e, t) {
            var s;
            return (
              !!e &&
              ((t && "string" != typeof t) || (t = o(t || "div")),
              (e = "on" + e),
              (s = e in t),
              !s &&
                i &&
                (t.setAttribute || (t = o("div")),
                t.setAttribute(e, ""),
                (s = "function" == typeof t[e]),
                t[e] !== n && (t[e] = n),
                t.removeAttribute(e)),
              s)
            );
          }
          var i = !("onblur" in t.documentElement);
          return e;
        })();
        b.hasEvent = x;
        var T = b._config.usePrefixes
          ? " -webkit- -moz- -o- -ms- ".split(" ")
          : ["", ""];
        b._prefixes = T;
        var k = "Moz O ms Webkit",
          S = b._config.usePrefixes ? k.toLowerCase().split(" ") : [];
        (b._domPrefixes = S),
          w.addTest("pointerevents", function () {
            var e = !1,
              t = S.length;
            for (e = w.hasEvent("pointerdown"); t-- && !e; )
              x(S[t] + "pointerdown") && (e = !0);
            return e;
          });
        var E = b._config.usePrefixes ? k.split(" ") : [];
        b._cssomPrefixes = E;
        var P = function (t) {
          var i,
            o = T.length,
            s = e.CSSRule;
          if (void 0 === s) return n;
          if (!t) return !1;
          if (
            ((t = t.replace(/^@/, "")),
            (i = t.replace(/-/g, "_").toUpperCase() + "_RULE") in s)
          )
            return "@" + t;
          for (var a = 0; a < o; a++) {
            var r = T[a];
            if (r.toUpperCase() + "_" + i in s)
              return "@-" + r.toLowerCase() + "-" + t;
          }
          return !1;
        };
        b.atRule = P;
        var A = (b.testStyles = r);
        w.addTest("touchevents", function () {
          var n;
          if (
            "ontouchstart" in e ||
            (e.DocumentTouch && t instanceof DocumentTouch)
          )
            n = !0;
          else {
            var i = [
              "@media (",
              T.join("touch-enabled),("),
              "heartz",
              ")",
              "{#modernizr{top:9px;position:absolute}}",
            ].join("");
            A(i, function (e) {
              n = 9 === e.offsetTop;
            });
          }
          return n;
        });
        var _ = { elem: o("modernizr") };
        w._q.push(function () {
          delete _.elem;
        });
        var I = { style: _.elem.style };
        w._q.unshift(function () {
          delete I.style;
        }),
          (b.testAllProps = m);
        var L = (b.prefixed = function (e, t, n) {
          return 0 === e.indexOf("@")
            ? P(e)
            : (-1 != e.indexOf("-") && (e = s(e)),
              t ? m(e, t, n) : m(e, "pfx"));
        });
        w.addTest("forcetouch", function () {
          return (
            !!x(L("mouseforcewillbegin", e, !1), e) &&
            MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN &&
            MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN
          );
        }),
          w.addTest("objectfit", !!L("objectFit"), { aliases: ["object-fit"] }),
          (b.testAllProps = v),
          w.addTest("flexbox", v("flexBasis", "1px", !0)),
          (function () {
            var e, t, n, o, s, a, r;
            for (var l in $)
              if ($.hasOwnProperty(l)) {
                if (
                  ((e = []),
                  (t = $[l]),
                  t.name &&
                    (e.push(t.name.toLowerCase()),
                    t.options && t.options.aliases && t.options.aliases.length))
                )
                  for (n = 0; n < t.options.aliases.length; n++)
                    e.push(t.options.aliases[n].toLowerCase());
                for (
                  o = i(t.fn, "function") ? t.fn() : t.fn, s = 0;
                  s < e.length;
                  s++
                )
                  (a = e[s]),
                    (r = a.split(".")),
                    1 === r.length
                      ? (w[r[0]] = o)
                      : (!w[r[0]] ||
                          w[r[0]] instanceof Boolean ||
                          (w[r[0]] = new Boolean(w[r[0]])),
                        (w[r[0]][r[1]] = o)),
                    g.push((o ? "" : "no-") + r.join("-"));
              }
          })(),
          (function (e) {
            var t = y.className,
              n = w._config.classPrefix || "";
            if ((C && (t = t.baseVal), w._config.enableJSClass)) {
              var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
              t = t.replace(i, "$1" + n + "js$2");
            }
            w._config.enableClasses &&
              ((t += " " + n + e.join(" " + n)),
              C ? (y.className.baseVal = t) : (y.className = t));
          })(g),
          delete b.addTest,
          delete b.addAsyncTest;
        for (var M = 0; M < w._q.length; M++) w._q[M]();
        e.Modernizr = w;
      })(window, document);
    },
    function (e, t, n) {
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var o = n(0),
        s = n(12),
        a = i(s),
        r = n(13),
        l = i(r),
        d = n(14),
        c = i(d),
        f = n(16),
        u = i(f),
        h = n(17),
        p = i(h),
        m = n(18),
        v = i(m),
        g = n(22),
        $ = i(g);
      INITIATE_ALL = {
        init: function () {
          o.notDraftMode && c.default.init(),
            u.default.init(),
            p.default.init(),
            o.isHome && $.default.init(),
            v.default.init(),
            o.$calendarGrid.length && a.default.init(),
            o.$slideshowSubtypeHorizontal.length && l.default.init();
        },
      };
    },
    function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (RESPONSIVE_CALENDAR_GRID = {
          init: function () {
            this.responsiveCalendarGrid();
          },
          responsiveCalendarGrid: function () {
            var e = function (e) {
                var t,
                  n = $(e.target).closest(".fsCalendar.fsGrid"),
                  i = $(e.target)
                    .closest(".fsCalendarDaybox")
                    .hasClass("fsCalendarWeekendDayBox")
                    ? $(e.target).closest("div[tabIndex]")
                    : $(e.target).closest(".fsCalendarDaybox"),
                  o = 0,
                  s = n.find("#event-view");
                n
                  .find(
                    ".fsCalendarEventGrid .fsCalendarDaybox, .fsCalendarWeekendDayBox > div"
                  )
                  .removeClass("selected"),
                  s.length &&
                    i.length &&
                    ((t = i.clone()),
                    i.addClass("selected"),
                    (o = s.offset().top - 16),
                    s.find("> div").remove(),
                    s.prepend(t)),
                  $(window).width() < 900 &&
                    $("html,body").animate({ scrollTop: o }, 450);
              },
              t = function (e) {
                $("html,body").animate({ scrollTop: e.offset().top }, 450),
                  e.find(".selected").length
                    ? e.find(".selected").focus()
                    : e
                        .find(
                          ".fsCalendarDaybox[tabIndex], .fsCalendarWeekendDayBox > div[tabIndex]"
                        )
                        .last()
                        .focus();
              },
              n = function (e) {
                if (e.hasClass("fsCalendar fsGrid"))
                  var t,
                    n = e.attr("id"),
                    o = 0,
                    s = setInterval(function () {
                      (t = $("#" + n).find(".fsCalendarEventGrid")),
                        t.length && (clearInterval(s), i(t)),
                        o++ > 20 && clearInterval(s);
                    }, 20);
              },
              i = function (n) {
                var i = $('<div id="event-view" />').insertAfter(n),
                  o = $(
                    '<button class="scroll-up">Back Up To Calendar</button>'
                  ).appendTo(i),
                  s = n
                    .find(".fsCalendarToday")
                    .clone()
                    .removeClass("fsCalendarToday");
                i.each(function () {
                  $(this).prepend(s);
                }),
                  o.on("click", function () {
                    t(n);
                  }),
                  n
                    .find(
                      ".fsCalendarDaybox:not(.fsCalendarWeekendDayBox), .fsCalendarWeekendDayBox > div"
                    )
                    .has(".fsCalendarInfo")
                    .attr("tabIndex", 0),
                  n.on(
                    "click",
                    ".fsCalendarDaybox:not(.fsCalendarWeekendDayBox), .fsCalendarWeekendDayBox > div ",
                    e
                  ),
                  n.on(
                    "keydown",
                    ".fsCalendarDaybox:not(.fsCalendarWeekendDayBox), .fsCalendarWeekendDayBox > div ",
                    function (e) {
                      13 == (e.keyCode ? e.keyCode : e.which) &&
                        $(window).width() < 900 &&
                        ($(this).trigger("click"),
                        i.find(":focusable").eq(0).focus());
                    }
                  ),
                  i.on("keydown", function (e) {
                    var t = i[0].querySelectorAll(
                        "a[href]:not([disabled]), div[tabIndex], .scroll-up"
                      ),
                      o = t[0],
                      s = "Tab" === e.key || 9 === e.keyCode;
                    (s || e.shiftKey) &&
                      e.shiftKey &&
                      s &&
                      document.activeElement === o &&
                      (n.find(".selected").length
                        ? n.find(".selected").focus()
                        : n
                            .find(
                              ".fsCalendarDaybox[tabIndex], .fsCalendarWeekendDayBox > div[tabIndex]"
                            )
                            .last()
                            .focus(),
                      e.preventDefault());
                  });
              };
            FS.events.onElementUpdated("Calendar", function (e) {
              n(e);
            }),
              $(".fsGrid .fsCalendarEventGrid").each(function () {
                i($(this));
              });
          },
        }),
        (t.default = RESPONSIVE_CALENDAR_GRID);
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(0);
      (RESPONSIVE_SLIDESHOW_SUBTYPE = {
        init: function () {
          this.responsiveSlideshows();
        },
        responsiveSlideshows: function () {
          i.$slideshowSubtypeHorizontal
            .find(".fsElementSlideshow")
            .each(function () {
              var e = this,
                t = $(e).data("slides-to-show"),
                n = t < 2 ? t : 2,
                i = t < 3 ? t : 3,
                o = t < 4 ? t : 4,
                s = [
                  {
                    breakpoint: 1100,
                    settings: { slidesToShow: o, slidesToScroll: o },
                  },
                  {
                    breakpoint: 1e3,
                    settings: { slidesToShow: i, slidesToScroll: i },
                  },
                  {
                    breakpoint: 800,
                    settings: { slidesToShow: n, slidesToScroll: n },
                  },
                  {
                    breakpoint: 600,
                    settings: { slidesToShow: 1, slidesToScroll: 1 },
                  },
                ];
              $(e).hasClass("slick-initialized")
                ? $(e).slick("slickSetOption", "responsive", s, !0)
                : $(e).on("init", function (t, n) {
                    setTimeout(function () {
                      $(e).slick("slickSetOption", "responsive", s, !0);
                    }, 1);
                  });
            });
        },
      }),
        (t.default = RESPONSIVE_SLIDESHOW_SUBTYPE);
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(0);
      n(15),
        (ACCESSIBILITY = {
          init: function () {
            i.notDraftMode && this.accessibleNavigation(),
              this.accessibleSearch();
          },
          accessibleNavigation: function () {
            i.$navMain_level1.accessibility_menu();
          },
          accessibleSearch: function () {
            i.$headerSearch.on("click", function () {
              i.$window.width() > 600
                ? (i.$body.addClass("search-is-active"),
                  $(".header-search .fsStyleDefaultField").focus())
                : i.$body.addClass("drawer-is-active");
            }),
              $(document).on("click", function (e) {
                $(e.target).closest(".search-button, .header-search").length ||
                  i.$body.removeClass("search-is-active");
              }),
              $(".header-search .fsSearchElementSearchButton").on(
                "focusout",
                function () {
                  i.$body.removeClass("search-is-active");
                }
              ),
              $(".nav-utility-header").on("focusin", function () {
                i.$body.removeClass("search-is-active");
              });
          },
          accessibleSectionLabel: function () {
            i.$section.each(function () {
              var e = $(this).find("> header .fsElementTitle").text();
              $(this).attr("aria-label") || $(this).attr("aria-label", e);
            });
          },
          googleTranslateAccessibility: function () {
            if ($("#google_translate_element").length)
              var e = 50,
                t = setInterval(function () {
                  (e -= 1),
                    $("#google_translate_element select.goog-te-combo").length
                      ? (clearInterval(t),
                        $(
                          "#google_translate_element select.goog-te-combo"
                        ).parent()[0].length ||
                          "LABEL" ===
                            $(
                              "#google_translate_element select.goog-te-combo"
                            ).parent()[0].tagName ||
                          ($(
                            "#google_translate_element select.goog-te-combo"
                          ).prev().length &&
                            "LABEL" ===
                              $(
                                "#google_translate_element select.goog-te-combo"
                              ).prev()[0].tagName) ||
                          ($(
                            "#google_translate_element select.goog-te-combo"
                          ).before(
                            '<label for="select-translate">Translate Website</label>'
                          ),
                          $(
                            "#google_translate_element select.goog-te-combo"
                          ).attr("id", "select-translate")))
                      : 0 === e && clearInterval(t);
                }, 200);
          },
        }),
        (t.default = ACCESSIBILITY);
    },
    function (e, t) {
      var n = {
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: ";",
        65: "a",
        66: "b",
        67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
      };
      $.fn.accessibility_menu = function (e) {
        var t = $.extend(
            {
              menuClass: "menu-item-open",
              mainMenuLabel: "Main",
              topMenuRole: "menubar",
              listItemsRole: "menuitem",
              subNavRole: "menu",
              firstTab: "level2",
            },
            e
          ),
          i = $(this),
          o = ".fsNavPageInfo",
          s = ".fsNavLevel1",
          a = 'ul[class^="fsNavLevel"]',
          r = ".fsNavPageDescription",
          l = i.find("> li > a");
        if (i.length) {
          $(this).parent()[0].hasAttribute("aria-label") ||
            $(this).parent().attr("aria-label", t.mainMenuLabel),
            $(this)
              .attr("role", t.topMenuRole)
              .find("li")
              .attr("role", t.listItemsRole),
            $(this).find(a).attr("role", t.subNavRole),
            $(this).find(o).find("a").attr("tabIndex", -1),
            $(l).each(function () {
              $(this).next(o).length > 0 &&
                $(this)
                  .parent("li")
                  .attr("aria-haspopup", "true")
                  .find(o)
                  .attr("aria-hidden", "true");
            }),
            $(l).unbind(),
            $(l).bind("focus mouseenter mouseleave keydown", function () {
              var e = new Array();
              if (
                ($(this).parents(s).find("> li > a").removeAttr("tabindex"),
                $(this)
                  .parents(s)
                  .find("." + t.menuClass)
                  .removeClass(t.menuClass)
                  .find(o)
                  .attr("aria-hidden", "true")
                  .find("a")
                  .attr("tabindex", -1),
                $(this)
                  .next(o)
                  .attr("aria-hidden", "false")
                  .parent("li")
                  .addClass(t.menuClass),
                e.push($(this)[0]),
                "level2" == t.firstTab)
              ) {
                if ($(this).next(o).find(a).find("a").length)
                  for (
                    var n = 0;
                    n < $(this).next(o).find(a).find("a").length;
                    n++
                  )
                    e.push($(this).next(o).find(a).find("a")[n]);
                if ($(this).next(o).find(r).find("a").length)
                  for (
                    var i = 0;
                    i < $(this).next(o).find(r).find("a").length;
                    i++
                  )
                    e.push($(this).next(o).find(r).find("a")[i]);
              } else if ("pagedesc" == t.firstTab) {
                if ($(this).next(o).find(r).find("a").length)
                  for (
                    var l = 0;
                    l < $(this).next(o).find(r).find("a").length;
                    l++
                  )
                    e.push($(this).next(o).find(r).find("a")[l]);
                if ($(this).next(o).find(a).find("a").length)
                  for (
                    var d = 0;
                    d < $(this).next(o).find(a).find("a").length;
                    d++
                  )
                    e.push($(this).next(o).find(a).find("a")[d]);
              }
              for (var c = 0; c < e.length; c++)
                e[c].setAttribute("tabindex", c);
            }),
            $(this).on("mouseleave", function () {
              $(this).find("> li > a").removeAttr("tabindex"),
                $(this)
                  .find("." + t.menuClass)
                  .removeClass(t.menuClass)
                  .find(o)
                  .attr("aria-hidden", "true")
                  .find("a")
                  .attr("tabIndex", -1);
            }),
            $(l).keydown(function (e) {
              var i = $(this).parent("li").find(o).find("a").length;
              if (38 == e.keyCode)
                e.preventDefault(),
                  $(this).parent("li").find(o).find("a").length &&
                    $(this)
                      .parent("li")
                      .find(o)
                      .find("a[tabindex=" + i + "]")
                      .focus();
              else if (39 == e.keyCode)
                e.preventDefault(),
                  0 == $(this).parent("li").next("li").length
                    ? $(this)
                        .parents(s)
                        .find("> li")
                        .first()
                        .find("a")
                        .first()
                        .focus()
                    : $(this).parent("li").next("li").find("a").first().focus();
              else if (40 == e.keyCode)
                $(this).parent("li").find(o).find("a").length &&
                  (e.preventDefault(),
                  $(this)
                    .parent("li")
                    .addClass(t.menuClass)
                    .find(o)
                    .attr("aria-hidden", "false"),
                  $(this).parent("li").find("a[tabindex=1]").focus());
              else if (37 == e.keyCode)
                e.preventDefault(),
                  0 == $(this).parent("li").prev("li").length
                    ? $(this)
                        .parents(s)
                        .find("> li")
                        .last()
                        .find("a")
                        .first()
                        .focus()
                    : $(this).parent("li").prev("li").find("a").first().focus();
              else if (9 == e.keyCode)
                if (e.shiftKey)
                  if (0 == $(this).parent("li").prev("li").length)
                    $(this).parents(s).find("> li > a").removeAttr("tabindex"),
                      $("." + t.menuClass)
                        .removeClass(t.menuClass)
                        .find(o)
                        .attr("aria-hidden", "true")
                        .find("a")
                        .attr("tabIndex", -1);
                  else if ($(this).parent("li").prev("li").length) {
                    e.preventDefault();
                    var a = $(this).parent("li").prev("li").find(o).find("a")
                      .length;
                    $(this).parents(s).find("> li > a").removeAttr("tabindex"),
                      $("." + t.menuClass)
                        .removeClass(t.menuClass)
                        .find(o)
                        .attr("aria-hidden", "true")
                        .find("a")
                        .attr("tabIndex", -1),
                      $(this)
                        .parent("li")
                        .prev("li")
                        .addClass(t.menuClass)
                        .find(o)
                        .attr("aria-hidden", "false"),
                      $(this)
                        .parent("li")
                        .prev("li")
                        .find(">a")
                        .focus()
                        .parent()
                        .find(o)
                        .find("a[tabindex=" + a + "]")
                        .focus();
                  } else
                    $(this).parents(s).find("> li > a").removeAttr("tabindex"),
                      $("." + t.menuClass)
                        .removeClass(t.menuClass)
                        .find(o)
                        .attr("aria-hidden", "true")
                        .find("a")
                        .attr("tabIndex", -1);
                else
                  $(this).parent("li").find(o).find("a").length &&
                    (e.preventDefault(),
                    $(this)
                      .parent("li")
                      .addClass(t.menuClass)
                      .find(o)
                      .attr("aria-hidden", "false"),
                    $(this).parent("li").find("a[tabindex=1]").focus());
              else
                32 == e.keyCode
                  ? (e.preventDefault(),
                    (window.location = $(this).attr("href")))
                  : 27 == e.keyCode
                  ? (e.preventDefault(),
                    $("." + t.menuClass)
                      .removeClass(t.menuClass)
                      .find("> a")
                      .removeAttr("tabindex")
                      .parent("li")
                      .find(o)
                      .attr("aria-hidden", "true")
                      .find("a")
                      .attr("tabIndex", -1))
                  : $(this)
                      .parent("li")
                      .find(".fsNavPageInfo[aria-hidden=false] a")
                      .each(function () {
                        if (
                          $(this).text().substring(0, 1).toLowerCase() ==
                          n[e.keyCode]
                        )
                          return $(this).focus(), !1;
                      });
            });
          var d = $(this).find(o).find("a");
          $(d).unbind(),
            $(d).bind("focus mouseenter mouseleave keydown", function () {
              $(this)
                .parent()
                .parent()
                .find("." + t.menuClass)
                .removeClass(t.menuClass)
                .find(o)
                .attr("aria-hidden", "true"),
                $(this)
                  .next(o)
                  .attr("aria-hidden", "false")
                  .parentsUntil(s, "li")
                  .addClass(t.menuClass);
            }),
            $(d).keydown(function (e) {
              var i = $(this).parents(o).find("a").length,
                a = parseInt($(this).attr("tabindex"));
              if (38 == e.keyCode)
                e.preventDefault(),
                  1 == a
                    ? $(this).parents(o).parent("li").find("a").first().focus()
                    : $(this)
                        .parents(o)
                        .find("a[tabindex=" + (a - 1) + "]")
                        .parentsUntil(s, "li")
                        .addClass(t.menuClass)
                        .find("a[tabindex=" + (a - 1) + "]")
                        .focus();
              else if (39 == e.keyCode)
                e.preventDefault(),
                  0 ==
                  $(this)
                    .parents(s)
                    .find("a[tabindex='0']")
                    .parent("li")
                    .next("li").length
                    ? $(this)
                        .parents(s)
                        .find("> li")
                        .first()
                        .find("a")
                        .first()
                        .focus()
                    : $(this)
                        .parents(s)
                        .find("a[tabindex='0']")
                        .parent("li")
                        .next("li")
                        .find("a")
                        .first()
                        .focus();
              else if (40 == e.keyCode)
                e.preventDefault(),
                  a == i
                    ? $(this).parents(o).parent("li").find("a").first().focus()
                    : $(this)
                        .parents(o)
                        .find("a[tabindex=" + (a + 1) + "]")
                        .focus();
              else if (27 == e.keyCode || 37 == e.keyCode)
                e.preventDefault(),
                  $("." + t.menuClass)
                    .removeClass(t.menuClass)
                    .find(o)
                    .attr("aria-hidden", "true")
                    .find("a")
                    .attr("tabIndex", -1),
                  $(this).parentsUntil(s, "li").find("a").first().focus();
              else if (9 == e.keyCode)
                e.shiftKey
                  ? (e.preventDefault(),
                    1 == a
                      ? $(this)
                          .parents(o)
                          .parent("li")
                          .find("a")
                          .first()
                          .focus()
                      : $(this)
                          .parents(o)
                          .find("a[tabindex=" + (a - 1) + "]")
                          .parentsUntil(s, "li")
                          .addClass(t.menuClass)
                          .find("a[tabindex=" + (a - 1) + "]")
                          .focus())
                  : a == i
                  ? $(this).parents(o).parent("li").next("li").length
                    ? (e.preventDefault(),
                      $(this)
                        .parents(o)
                        .parent("li")
                        .next("li")
                        .find("a")
                        .first()
                        .focus())
                    : ($(this)
                        .parents(s)
                        .find("> li > a")
                        .removeAttr("tabindex"),
                      $("." + t.menuClass)
                        .removeClass(t.menuClass)
                        .find(o)
                        .attr("aria-hidden", "true")
                        .find("a")
                        .attr("tabIndex", -1))
                  : (e.preventDefault(),
                    $(this)
                      .parents(o)
                      .find("a[tabindex=" + (a + 1) + "]")
                      .focus());
              else if (32 == e.keyCode)
                e.preventDefault(), (window.location = $(this).attr("href"));
              else {
                var r = !1;
                $(this)
                  .parent("li")
                  .nextAll("li")
                  .find("a")
                  .each(function () {
                    if (
                      $(this).text().substring(0, 1).toLowerCase() ==
                      n[e.keyCode]
                    )
                      return $(this).focus(), (r = !0), !1;
                  }),
                  r ||
                    $(this)
                      .parent("li")
                      .prevAll("li")
                      .find("a")
                      .each(function () {
                        if (
                          $(this).text().substring(0, 1).toLowerCase() ==
                          n[e.keyCode]
                        )
                          return $(this).focus(), !1;
                      });
              }
            }),
            $(document).click(function () {
              $(this).parents(s).find("> li > a").removeAttr("tabindex"),
                $("." + t.menuClass)
                  .removeClass(t.menuClass)
                  .find(o)
                  .attr("aria-hidden", "true")
                  .find("a")
                  .attr("tabIndex", -1);
            }),
            $(this).click(function (e) {
              e.stopPropagation();
            });
        }
      };
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(0),
        o = n(4),
        s = n(1);
      (NAVIGATION = {
        init: function () {
          this.breadCrumbs(),
            this.offCanvasMenu(),
            this.collapseSubNav(),
            this.navExpanders(),
            this.emptyNavs();
        },
        breadCrumbs: function () {
          $(".fsNavBreadcrumbSeperator:contains('>')").addClass("styled"),
            $(".fsHeader .fsBreadcrumb").prependTo(".fsPageBodyWrapper"),
            0 !== $(".fsPageBodyWrapper > .fsBreadcrumb a").length
              ? $(".fsPageBodyWrapper > .fsBreadcrumb").removeClass("nav-empty")
              : ($(".fsPageBodyWrapper > .fsBreadcrumb").addClass("nav-empty"),
                i.$body.addClass("no-breadcrumb"));
        },
        offCanvasMenu: function () {
          $(".menu-toggle.open .menu-button").on("click", function () {
            i.$body.addClass("drawer-is-active"),
              i.$body.hasClass("drawer-is-active") &&
                $(".fsMenu").find(":focusable").eq(0).focus();
          }),
            $(".menu-toggle.close .menu-button").on("click", function () {
              i.$body.removeClass("drawer-is-active"),
                $(".menu-toggle.open .menu-button").focus();
            }),
            $(".fsMenu").length &&
              (0, o.trapFocus)(document.querySelector(".fsMenu"), function () {
                i.$body.removeClass("drawer-is-active"),
                  $(".menu-toggle.open .menu-button").focus();
              }),
            $(document).on("click", function (e) {
              $(e.target).closest("#fsMenu, .menu-toggle, .header-search")
                .length || i.$body.removeClass("drawer-is-active");
            }),
            i.$navMain.find(".fsNavPageThumbnail").each(function () {
              var e = $(this).find("img"),
                t = $(this);
              (0, s.moveResourceImage)(e, t);
            }),
            i.$navMain.find(".fsElementHeaderContent").each(function () {
              var e = $(this).find("img"),
                t = $(this);
              (0, s.moveResourceImage)(e, t);
            });
        },
        collapseSubNav: function () {
          i.$navSub.each(function () {
            var e = $(this),
              t = e.find("> header"),
              n = e.find("> header > .fsElementTitle"),
              o = i.sectionTitle || n.text();
            e.find(".fsNavLevel1").length || e.addClass("nav-sub-empty"),
              e.parents(".fsHeader").length &&
                (t.append(
                  [
                    '<button class="nav-toggle" aria-expanded="false">',
                    "<span>Expand</span>",
                    '<span style="display: none;">Collapse</span>',
                    " " + o + " Navigation",
                    "</button>",
                  ].join("\n")
                ),
                t.on("click", function () {
                  e.toggleClass("active-nav"),
                    $(this)
                      .find(".nav-toggle")
                      .attr(
                        "aria-expanded",
                        "true" !==
                          $(this).find(".nav-toggle").attr("aria-expanded")
                      )
                      .find("span")
                      .toggle();
                }),
                $(document).on("click", function (t) {
                  !$(t.target).closest(e).length &&
                    e.hasClass("active-nav") &&
                    e
                      .removeClass("active-nav")
                      .find(".nav-toggle")
                      .attr("aria-expanded", "false")
                      .find("span")
                      .toggle();
                }));
          });
        },
        emptyNavs: function () {
          0 !== i.$navSub.find("nav .fsNavLevel1").length
            ? i.$navSub.removeClass("nav-sub-empty")
            : i.$navSub.addClass("nav-sub-empty"),
            0 !== $(".fsHeader .nav-sub").find("nav .fsNavLevel1").length
              ? i.$body.removeClass("nav-horizontal-empty")
              : i.$body.addClass("nav-horizontal-empty");
        },
        navExpanders: function () {
          $(".nav-sub li").each(function () {
            var e = $(this);
            if (e.find("> .fsNavPageInfo").length) {
              e.addClass("has-expander");
              var t = e.find("> a");
              $(
                '<button class="expander">expand this section</button>'
              ).insertAfter(t);
            }
            e.hasClass("fsNavCurrentPageAncestor") ||
            e.hasClass("fsNavCurrentPage")
              ? e.addClass("expanded")
              : (e.find("> .fsNavPageInfo > ul").hide(),
                e.removeClass("expanded")),
              e.hasClass("expanded") && e.find("> .fsNavPageInfo > ul").show();
          }),
            (navMainCollapse = function () {
              $(".nav-main.mobile li").each(function () {
                var e = $(this);
                if (e.find("> .fsNavPageInfo").length) {
                  e.addClass("has-expander");
                  var t = e.find("> a");
                  $(
                    '<button class="expander">expand this section</button>'
                  ).insertAfter(t);
                }
                e.hasClass("fsNavCurrentPageAncestor") ||
                e.hasClass("fsNavCurrentPage")
                  ? e.addClass("expanded")
                  : (e.find("> .fsNavPageInfo > ul").hide(),
                    e.removeClass("expanded")),
                  e.hasClass("expanded") &&
                    e.find("> .fsNavPageInfo > ul").show();
              });
            }),
            navMainCollapse(),
            $(".expander").click(function (e) {
              $(this).closest("li").toggleClass("expanded"),
                $(this).closest("li").find("> div > ul").slideToggle(300),
                e.preventDefault();
            });
        },
      }),
        (t.default = NAVIGATION);
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(0);
      (DEFAULT_STYLES = {
        init: function () {
          this.footerFuntions(),
            i.$tableStyle.length && this.tableStyle(),
            i.$postElementAlign.length && this.postAlignment();
        },
        footerFuntions: function () {
          $(".back-to-top button").on("click", function () {
            return (
              $("html, body").animate(
                { scrollTop: $(".fsHeader").offset().top },
                "slow"
              ),
              $("#fsSkipToMainContentLink").focus(),
              !1
            );
          });
        },
        tableStyle: function () {
          function e() {
            i.$tableStyle.each(function () {
              $(this).parent().hasClass("table-overflow") ||
                $(this).wrap('<div class="table-overflow" tabindex="0" />');
            });
          }
          i.notComposeMode && e(),
            FS.events.onComposeModeChanged(function (t) {
              !1 === t
                ? e()
                : !0 === t &&
                  i.$tableStyle.each(function () {
                    $(this).parent().hasClass("table-overflow") &&
                      $(this).unwrap();
                  });
            });
        },
        postAlignment: function () {
          var e = function (e, t, n) {
              var i,
                o,
                s,
                a = e.attr("id");
              void 0 !== a &&
                a.length &&
                ((o = a.split("_")),
                o.length > 1 &&
                  ((s = o[0] + "_" + o[1]),
                  (i = $("#" + s)),
                  i.length || (i = $("#" + void 0)),
                  i.length && i.hasClass(t) && "function" == typeof n && n()));
            },
            t = function (e) {
              var t = e.is(".fsDialog.fsElementDialog") ? e.find("article") : e,
                n = t.hasClass("fsThumbnailAlignLeft")
                  ? "left"
                  : !!t.hasClass("fsThumbnailAlignRight") && "right";
              n &&
                e.find("article").each(function () {
                  var e = $(this),
                    t = e.find(".fsThumbnail");
                  e.find("> .article-wrapper").length ||
                    (e.wrapInner('<div class="article-text"></div>'),
                    t.length &&
                      ("left" === n ? e.prepend(t) : e.append(t),
                      t.wrap('<div class="article-image"></div>')),
                    e.wrapInner('<div class="article-wrapper"></div>'));
                });
            };
          $('.fsPostElement[class*="fsThumbnailAlign"]').each(function () {
            t($(this));
          }),
            FS.events.onElementUpdated("Post", function (e) {
              t(e);
            }),
            FS.events.onElementAdded("Post", function (e) {
              t(e);
            }),
            FS.events.onElementMoreLoaded("Post", function (e) {
              t(e);
            }),
            FS.events.onElementDialogShown("Post", function (n) {
              e(n, "fsPostElement", function () {
                t(n.parent());
              });
            });
        },
      }),
        (t.default = DEFAULT_STYLES);
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(19),
        o = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(i),
        s = n(0),
        a = n(20),
        r = n(1);
      n(21),
        n(5),
        n(2),
        n(3),
        (ENHANCEMENTS = {
          init: function () {
            s.$heroElement.length && this.interiorHero(),
              s.notComposeMode && this.stickyHeader(),
              s.$imageButtonElement.length && this.imageButtons(),
              s.$postSlideshowElement.length && this.postSlideshow();
          },
          stickyHeader: function () {
            var e = document.querySelector(".fsHeader");
            new o.default(e, { tolerance: 25 }).init();
          },
          interiorHero: function () {
            function e() {
              s.$heroElement.find("article").each(function () {
                var e = $(this).find("img"),
                  t = $(this).find("picture");
                (0, r.moveResourceImage)(e, t);
                var n = $(this).find("figure > picture"),
                  i = $(this).find(".fsTitle:not(.fsResourceName)"),
                  o = $(this).find("figcaption"),
                  s = o.length,
                  a = i.length;
                if (!s && a) {
                  $(
                    '<figcaption><div class="inner" /></figcaption>'
                  ).insertAfter(n);
                  var o = $(this).find("figcaption .inner");
                  i.appendTo(o);
                } else o.addClass("no-title"), o.wrapInner('<div class="inner" />'), i.prependTo(o);
                0 == $(this).find("figcaption .inner").children().length &&
                  i.hasClass("fsResourceName") &&
                  $(this).addClass("hide-caption"),
                  0 == $(this).find("figcaption .inner").children().length
                    ? $(this).addClass("no-text")
                    : ($(this).addClass("has-text"),
                      $(this).find("figcaption .fs_style_23").appendTo(o));
              });
            }
            (0, a.heroElement)({ insertAfter: $(".header-container") }),
              $(".hero").hasClass("fsSingleItem") &&
                (e(),
                $(".hero").hasClass("fsProfile") &&
                  s.$heroElement
                    .find(".fsAthleticsTeamHeaderContent")
                    .each(function () {
                      var e = $(this).find("img").attr("src");
                      $(this).css("background-image", 'url("' + e + '")');
                    })),
              s.$heroElement
                .find("article.fsResourceTypeVideo")
                .each(function () {
                  s.$heroElement.addClass("has-video"),
                    $(this).append("<figcaption></figcaption>");
                  var e = $(this).find("video"),
                    t = $(this).find(".fsDescription > p"),
                    n = $(this).find(".fsTitle"),
                    i = $(this).find("figcaption");
                  n.appendTo(i),
                    t.appendTo(i),
                    t.dotdotdot({ truncate: "letter", watch: !0 }),
                    n.dotdotdot({ truncate: "letter", watch: !0 }),
                    objectFitPolyfill(s.$heroElement.find("video")[0]),
                    e.attr("autoplay") &&
                      s.$heroElement.find("video")[0].play(),
                    e.attr("controls")
                      ? s.$heroElement.addClass("has-controls")
                      : s.$heroElement.hasClass("fsSingleItem") &&
                        (s.$heroElement.addClass("no-controls playing"),
                        s.$heroElement.append(
                          '<button class="pause-video"><span>Click to Pause<span></button><button class="play-video"><span>Click to Play<span></button>'
                        ),
                        $(".pause-video").on("click", function () {
                          s.$heroElement.find("video")[0].pause(),
                            s.$heroElement.addClass("paused"),
                            s.$heroElement.removeClass("playing");
                        }),
                        $(".play-video").on("click", function () {
                          s.$heroElement.find("video")[0].play(),
                            s.$heroElement.addClass("playing"),
                            s.$heroElement.removeClass("paused");
                        })),
                    0 ==
                    $(this).find("figcaption .fsDescription").children().length
                      ? $(this).addClass("no-text")
                      : ($(this).addClass("has-text"),
                        $(this).removeClass("no-text"),
                        $(this).find("figcaption .fs_style_34").appendTo(i));
                }),
              s.$heroElement.hasClass("fsSlideshow") &&
                (s.$heroElement.on("init", function (t) {
                  e(),
                    $(
                      '<div class="arrows"><div class="inner"></div></div>'
                    ).appendTo(s.$heroElement.find(".fsElementSlideshow")),
                    s.$heroElement
                      .find(".fsPrevButton,.fsNextButton")
                      .prependTo(s.$heroElement.find(".arrows > .inner"));
                }),
                s.$heroElement.on("beforeChange", function (e, t, n, i) {
                  t.$slides.eq(i);
                })),
              $(".fsHeader").waypoint(
                function (e) {
                  "down" === e
                    ? $(".header-container").addClass("sticky-style")
                    : $(".header-container").removeClass("sticky-style");
                },
                { offset: "-380px" }
              ),
              s.$body.hasClass("home")
                ? s.$window.width() > 1e3
                  ? $(".hero").waypoint(
                      function (e) {
                        "down" === e
                          ? $(this.element).addClass("animate")
                          : $(this.element).removeClass("animate");
                      },
                      { offset: "0" }
                    )
                  : $(".hero").waypoint(
                      function (e) {
                        "down" === e
                          ? $(this.element).addClass("animate")
                          : $(this.element).removeClass("animate");
                      },
                      { offset: "75px" }
                    )
                : $(".hero").waypoint(
                    function (e) {
                      "down" === e
                        ? $(this.element).addClass("animate-hero")
                        : $(this.element).removeClass("animate-hero");
                    },
                    { offset: "0" }
                  );
          },
          imageButtons: function () {
            $(".image-button").each(function () {
              var e = $(this).find("> header"),
                t = $(this).find("figure > .fsResourceLink"),
                n = $(this).find("figcaption");
              e.clone();
              e.prependTo(n), n.appendTo(t);
              var i = $(this).find("img"),
                o = $(this).find("picture");
              (0, r.moveResourceImage)(i, o),
                n.wrapInner(
                  '<div class="button-inner"><div class="button-content" /></div>'
                ),
                $(".button-inner").each(function () {
                  var e = $(this).find("header"),
                    t = $(this).find("a");
                  $(this).prepend(e), $(this).append(t), $("p:empty").remove();
                }),
                $(".button-content").dotdotdot({
                  truncate: "letter",
                  watch: !0,
                }),
                $(this)
                  .find(".button-inner a")
                  .on("focus", function () {
                    $(this).parents(".image-button").addClass("focused");
                  }),
                $(this).on("focusout", function () {
                  $(this).removeClass("focused");
                }),
                t.attr("tabIndex", "0"),
                $(this).doubleTapToGo();
            });
          },
          postSlideshow: function () {
            var e = s.$postSlideshowElement.find(".fsListItems");
            e.find("article").each(function () {
              $(this).wrapInner('<div class="post-content" />');
              var e = $(this).find(".fsThumbnail"),
                t = $(this).find(".fsSummary"),
                n = $(this).find(".fsTags"),
                i = $(this).find(".fsCategories"),
                o = $(this).find(".fsTitle");
              e.prependTo($(this)),
                i.insertAfter(o),
                n.insertAfter(o),
                t.parents("article").addClass("has-caption");
            }),
              e.on("init", function (e, t) {
                $(this)
                  .find(".fsTitle")
                  .dotdotdot({ truncate: "letter", watch: !0 }),
                  $(this)
                    .find(".fsSummary")
                    .dotdotdot({ truncate: "letter", watch: !0 });
              }),
              e.slick({
                arrows: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: !1,
                fade: !0,
                speed: 500,
                adaptiveHeight: !0,
              });
          },
          postSlideshowUpdate: function (e) {
            e.find(".fsResourceTypeImage").each(function () {
              var e = $(this).find("figcaption"),
                t = $(this).find(".fsResourceTitle");
              e.parents("article").addClass("has-caption"),
                t.parents("article").addClass("has-title");
            }),
              e.on("init", function (t, n) {
                $(this)
                  .find("article")
                  .each(function () {
                    var e = $(this).find("img"),
                      t = $(this).find("picture");
                    (0, r.moveResourceImage)(e, t);
                  });
                var i = setInterval(function () {
                  e.each(function () {
                    0 !== $(this).find(".fsResourceTypeImage img").length &&
                      clearInterval(i);
                  }),
                    setTimeout(function () {
                      e.find(".fsListItems.fsStyleOneColumn").slick(
                        "slickSetOption",
                        "adaptiveHeight",
                        !0,
                        !0
                      );
                    }, 100);
                }, 100);
              }),
              e.find(".fsListItems.fsStyleOneColumn").slick({
                arrows: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: !1,
                fade: !0,
                speed: 500,
              });
          },
        }),
        (t.default = ENHANCEMENTS);
    },
    function (e, t, n) {
      !(function (t, n) {
        e.exports = n();
      })(0, function () {
        "use strict";
        function e() {
          return "undefined" != typeof window;
        }
        function t() {
          var e = !1;
          try {
            var t = {
              get passive() {
                e = !0;
              },
            };
            window.addEventListener("test", t, t),
              window.removeEventListener("test", t, t);
          } catch (t) {
            e = !1;
          }
          return e;
        }
        function n(e) {
          return 9 === e.nodeType;
        }
        function i(e) {
          return e && e.document && n(e.document);
        }
        function o(e) {
          var t = e.document,
            n = t.body,
            i = t.documentElement;
          return {
            scrollHeight: function () {
              return Math.max(
                n.scrollHeight,
                i.scrollHeight,
                n.offsetHeight,
                i.offsetHeight,
                n.clientHeight,
                i.clientHeight
              );
            },
            height: function () {
              return e.innerHeight || i.clientHeight || n.clientHeight;
            },
            scrollY: function () {
              return void 0 !== e.pageYOffset
                ? e.pageYOffset
                : (i || n.parentNode || n).scrollTop;
            },
          };
        }
        function s(e) {
          return {
            scrollHeight: function () {
              return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
            },
            height: function () {
              return Math.max(e.offsetHeight, e.clientHeight);
            },
            scrollY: function () {
              return e.scrollTop;
            },
          };
        }
        function a(e) {
          return i(e) ? o(e) : s(e);
        }
        function r(e, n, i) {
          function o() {
            var e = Math.round(c.scrollY()),
              t = c.height(),
              o = c.scrollHeight();
            (u.scrollY = e),
              (u.lastScrollY = f),
              (u.direction = e > f ? "down" : "up"),
              (u.distance = Math.abs(e - f)),
              (u.isOutOfBounds = e < 0 || e + t > o),
              (u.top = e <= n.offset),
              (u.bottom = e + t >= o),
              (u.toleranceExceeded = u.distance > n.tolerance[u.direction]),
              i(u),
              (f = e),
              (d = !1);
          }
          function s() {
            d || ((d = !0), (r = requestAnimationFrame(o)));
          }
          var r,
            l = t(),
            d = !1,
            c = a(e),
            f = c.scrollY(),
            u = {},
            h = !!l && { passive: !0, capture: !1 };
          return (
            e.addEventListener("scroll", s, h),
            o(),
            {
              destroy: function () {
                cancelAnimationFrame(r), e.removeEventListener("scroll", s, h);
              },
            }
          );
        }
        function l(e) {
          return e === Object(e) ? e : { down: e, up: e };
        }
        function d(e, t) {
          (t = t || {}),
            Object.assign(this, d.options, t),
            (this.classes = Object.assign({}, d.options.classes, t.classes)),
            (this.elem = e),
            (this.tolerance = l(this.tolerance)),
            (this.initialised = !1),
            (this.frozen = !1);
        }
        return (
          (d.prototype = {
            constructor: d,
            init: function () {
              return (
                d.cutsTheMustard &&
                  !this.initialised &&
                  (this.addClass("initial"),
                  (this.initialised = !0),
                  setTimeout(
                    function (e) {
                      e.scrollTracker = r(
                        e.scroller,
                        { offset: e.offset, tolerance: e.tolerance },
                        e.update.bind(e)
                      );
                    },
                    100,
                    this
                  )),
                this
              );
            },
            destroy: function () {
              (this.initialised = !1),
                Object.keys(this.classes).forEach(this.removeClass, this),
                this.scrollTracker.destroy();
            },
            unpin: function () {
              (!this.hasClass("pinned") && this.hasClass("unpinned")) ||
                (this.addClass("unpinned"),
                this.removeClass("pinned"),
                this.onUnpin && this.onUnpin.call(this));
            },
            pin: function () {
              this.hasClass("unpinned") &&
                (this.addClass("pinned"),
                this.removeClass("unpinned"),
                this.onPin && this.onPin.call(this));
            },
            freeze: function () {
              (this.frozen = !0), this.addClass("frozen");
            },
            unfreeze: function () {
              (this.frozen = !1), this.removeClass("frozen");
            },
            top: function () {
              this.hasClass("top") ||
                (this.addClass("top"),
                this.removeClass("notTop"),
                this.onTop && this.onTop.call(this));
            },
            notTop: function () {
              this.hasClass("notTop") ||
                (this.addClass("notTop"),
                this.removeClass("top"),
                this.onNotTop && this.onNotTop.call(this));
            },
            bottom: function () {
              this.hasClass("bottom") ||
                (this.addClass("bottom"),
                this.removeClass("notBottom"),
                this.onBottom && this.onBottom.call(this));
            },
            notBottom: function () {
              this.hasClass("notBottom") ||
                (this.addClass("notBottom"),
                this.removeClass("bottom"),
                this.onNotBottom && this.onNotBottom.call(this));
            },
            shouldUnpin: function (e) {
              return "down" === e.direction && !e.top && e.toleranceExceeded;
            },
            shouldPin: function (e) {
              return ("up" === e.direction && e.toleranceExceeded) || e.top;
            },
            addClass: function (e) {
              this.elem.classList.add(this.classes[e]);
            },
            removeClass: function (e) {
              this.elem.classList.remove(this.classes[e]);
            },
            hasClass: function (e) {
              return this.elem.classList.contains(this.classes[e]);
            },
            update: function (e) {
              e.isOutOfBounds ||
                (!0 !== this.frozen &&
                  (e.top ? this.top() : this.notTop(),
                  e.bottom ? this.bottom() : this.notBottom(),
                  this.shouldUnpin(e)
                    ? this.unpin()
                    : this.shouldPin(e) && this.pin()));
            },
          }),
          (d.options = {
            tolerance: { up: 0, down: 0 },
            offset: 0,
            scroller: e() ? window : null,
            classes: {
              frozen: "headroom--frozen",
              pinned: "headroom--pinned",
              unpinned: "headroom--unpinned",
              top: "headroom--top",
              notTop: "headroom--not-top",
              bottom: "headroom--bottom",
              notBottom: "headroom--not-bottom",
              initial: "headroom",
            },
          }),
          (d.cutsTheMustard = (function () {
            return !!(
              e() &&
              function () {}.bind &&
              "classList" in document.documentElement &&
              Object.assign &&
              Object.keys &&
              requestAnimationFrame
            );
          })()),
          d
        );
      });
    },
    function (e, t, n) {
      function i(e) {
        function t(e) {
          $("[data-hero]").length || $(e.hero).eq(0).attr("data-hero", !0),
            $("[data-hero]").insertAfter(e.insertAfter),
            FS.util.updateDynamicImages($("[data-hero]")),
            o.$body.addClass(e.defaultClass),
            e.callback.call(this);
        }
        var n = {
            hero: $(".fsPageLayout .hero"),
            insertAfter: $(".fsHeader .fsBanner"),
            defaultClass: "hero-loaded",
            callback: function () {},
          },
          i = $.extend({}, n, e);
        o.notComposeMode && $(i.hero).length && t(i),
          FS.events.onComposeModeChanged(function (e) {
            e
              ? $(".fsPageLayout > .fsDiv > .fsElement").length
                ? $("[data-hero]").insertBefore(
                    ".fsPageLayout > .fsDiv:eq(0) .fsElement:eq(0)"
                  )
                : $("[data-hero]").insertBefore(".fsPageLayout > .fsDiv:eq(0)")
              : t(i);
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.heroElement = i);
      var o = n(0);
    },
    function (e, t) {
      !(function () {
        "use strict";
        if ("undefined" != typeof window) {
          var e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
            t = e ? parseInt(e[1], 10) : null,
            n = !!t && 16 <= t && t <= 18;
          if ("objectFit" in document.documentElement.style == 0 || n) {
            var i = function (e, t, n) {
                var i, o, s, a, r;
                if (((n = n.split(" ")).length < 2 && (n[1] = n[0]), "x" === e))
                  (i = n[0]),
                    (o = n[1]),
                    (s = "left"),
                    (a = "right"),
                    (r = t.clientWidth);
                else {
                  if ("y" !== e) return;
                  (i = n[1]),
                    (o = n[0]),
                    (s = "top"),
                    (a = "bottom"),
                    (r = t.clientHeight);
                }
                if (i !== s && o !== s) {
                  if (i !== a && o !== a)
                    return "center" === i || "50%" === i
                      ? ((t.style[s] = "50%"),
                        void (t.style["margin-" + s] = r / -2 + "px"))
                      : void (0 <= i.indexOf("%")
                          ? (i = parseInt(i, 10)) < 50
                            ? ((t.style[s] = i + "%"),
                              (t.style["margin-" + s] = r * (i / -100) + "px"))
                            : ((i = 100 - i),
                              (t.style[a] = i + "%"),
                              (t.style["margin-" + a] = r * (i / -100) + "px"))
                          : (t.style[s] = i));
                  t.style[a] = "0";
                } else t.style[s] = "0";
              },
              o = function (e) {
                var t = e.dataset
                    ? e.dataset.objectFit
                    : e.getAttribute("data-object-fit"),
                  n = e.dataset
                    ? e.dataset.objectPosition
                    : e.getAttribute("data-object-position");
                (t = t || "cover"), (n = n || "50% 50%");
                var o = e.parentNode;
                return (
                  (function (e) {
                    var t = window.getComputedStyle(e, null),
                      n = t.getPropertyValue("position"),
                      i = t.getPropertyValue("overflow"),
                      o = t.getPropertyValue("display");
                    (n && "static" !== n) || (e.style.position = "relative"),
                      "hidden" !== i && (e.style.overflow = "hidden"),
                      (o && "inline" !== o) || (e.style.display = "block"),
                      0 === e.clientHeight && (e.style.height = "100%"),
                      -1 === e.className.indexOf("object-fit-polyfill") &&
                        (e.className = e.className + " object-fit-polyfill");
                  })(o),
                  (function (e) {
                    var t = window.getComputedStyle(e, null),
                      n = {
                        "max-width": "none",
                        "max-height": "none",
                        "min-width": "0px",
                        "min-height": "0px",
                        top: "auto",
                        right: "auto",
                        bottom: "auto",
                        left: "auto",
                        "margin-top": "0px",
                        "margin-right": "0px",
                        "margin-bottom": "0px",
                        "margin-left": "0px",
                      };
                    for (var i in n)
                      t.getPropertyValue(i) !== n[i] && (e.style[i] = n[i]);
                  })(e),
                  (e.style.position = "absolute"),
                  (e.style.width = "auto"),
                  (e.style.height = "auto"),
                  "scale-down" === t &&
                    (t =
                      e.clientWidth < o.clientWidth &&
                      e.clientHeight < o.clientHeight
                        ? "none"
                        : "contain"),
                  "none" === t
                    ? (i("x", e, n), void i("y", e, n))
                    : "fill" === t
                    ? ((e.style.width = "100%"),
                      (e.style.height = "100%"),
                      i("x", e, n),
                      void i("y", e, n))
                    : ((e.style.height = "100%"),
                      void (("cover" === t && e.clientWidth > o.clientWidth) ||
                      ("contain" === t && e.clientWidth < o.clientWidth)
                        ? ((e.style.top = "0"),
                          (e.style.marginTop = "0"),
                          i("x", e, n))
                        : ((e.style.width = "100%"),
                          (e.style.height = "auto"),
                          (e.style.left = "0"),
                          (e.style.marginLeft = "0"),
                          i("y", e, n))))
                );
              },
              s = function (e) {
                if (void 0 === e || e instanceof Event)
                  e = document.querySelectorAll("[data-object-fit]");
                else if (e && e.nodeName) e = [e];
                else {
                  if ("object" != typeof e || !e.length || !e[0].nodeName)
                    return !1;
                  e = e;
                }
                for (var t = 0; t < e.length; t++)
                  if (e[t].nodeName) {
                    var i = e[t].nodeName.toLowerCase();
                    if ("img" === i) {
                      if (n) continue;
                      e[t].complete
                        ? o(e[t])
                        : e[t].addEventListener("load", function () {
                            o(this);
                          });
                    } else
                      "video" === i
                        ? 0 < e[t].readyState
                          ? o(e[t])
                          : e[t].addEventListener(
                              "loadedmetadata",
                              function () {
                                o(this);
                              }
                            )
                        : o(e[t]);
                  }
                return !0;
              };
            "loading" === document.readyState
              ? document.addEventListener("DOMContentLoaded", s)
              : s(),
              window.addEventListener("resize", s),
              (window.objectFitPolyfill = s);
          } else
            window.objectFitPolyfill = function () {
              return !1;
            };
        }
      })();
    },
    function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1),
        o = n(0);
      n(5),
        n(2),
        n(23),
        n(3),
        (HOME = {
          init: function () {
            this.introPanel(),
              this.imageButtonPanel(),
              this.factPanel(),
              this.ctaPanel(),
              this.postsPanel(),
              this.socialPanel(),
              this.hpAnimations();
          },
          hpAnimations: function () {
            $(".hp-panel").waypoint(
              function (e) {
                "down" === e
                  ? $(this.element).addClass("animate")
                  : $(this.element).removeClass("animate"),
                  $(this.element).hasClass("cta-buttons") &&
                    ("down" === e
                      ? $(".hp-panel.facts").addClass("animate-down")
                      : $(".hp-panel.facts").removeClass("animate-down"));
              },
              { offset: "85%" }
            ),
              $(".hp-panel .intro-text").waypoint(
                function (e) {
                  "down" === e
                    ? ($(this.element).addClass("animate"),
                      $(".image-buttons").addClass("animate-left"))
                    : ($(this.element).removeClass("animate"),
                      $(".image-buttons").removeClass("animate-left"));
                },
                { offset: "50%" }
              ),
              $(".hp-panel.image-buttons > header").waypoint(
                function (e) {
                  "down" === e
                    ? $(".image-buttons, .hp-panel.facts").addClass(
                        "animate-right"
                      )
                    : $(".image-buttons, .hp-panel.facts").removeClass(
                        "animate-right"
                      );
                },
                { offset: "50%" }
              ),
              $(".hp-panel.facts").waypoint(
                function (e) {
                  "down" === e
                    ? $(this.element).addClass("fade-in")
                    : $(this.element).removeClass("fade-in");
                },
                { offset: "40%" }
              ),
              $(".hp-panel.posts > header").waypoint(
                function (e) {
                  "down" === e
                    ? $(".hp-panel.posts").addClass("fade-in")
                    : $(".hp-panel.posts").removeClass("fade-in");
                },
                { offset: "100%" }
              ),
              $(".hp-panel.posts > header").waypoint(
                function (e) {
                  "down" === e
                    ? ($(".lightbox-slideshow article:not(.slick-cloned)").each(
                        function (e) {
                          var t = $(this).find(".fsThumbnail img").attr("src");
                          $(".lightbox-slideshow .slick-dots li")
                            .eq(e)
                            .find("button")
                            .css("background-image", "url(" + t + ")");
                        }
                      ),
                      $(".hp-panel.posts").addClass("fade-thumbs"))
                    : $(".hp-panel.posts").removeClass("fade-thumbs");
                },
                { offset: "50%" }
              ),
              $(".hp-panel.social > header").waypoint(
                function (e) {
                  "down" === e
                    ? $(".hp-panel.social").addClass("fade-posts")
                    : $(".hp-panel.social").removeClass("fade-posts");
                },
                { offset: "50%" }
              );
          },
          introPanel: function () {
            $(".intro-image article").each(function () {
              var e = $(this).find("img"),
                t = $(this);
              (0, i.moveResourceImage)(e, t);
            });
          },
          imageButtonPanel: function () {
            (buttonSlideshow = function () {
              $(
                ".hp-panel.image-buttons > .fsElementContent:not(.slick-initialized)"
              ).slick({
                mobileFirst: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !0,
                dots: !1,
                responsive: [{ breakpoint: 600, settings: "unslick" }],
              });
            }),
              buttonSlideshow(),
              o.$window.on("resize", function () {
                o.$window.width() < 600 && buttonSlideshow();
              });
          },
          factPanel: function () {
            $(".facts-image article").each(function () {
              var e = $(this).find("img"),
                t = $(this);
              (0, i.moveResourceImage)(e, t);
            }),
              $(".hp-fact").attr("tabIndex", "0");
          },
          ctaPanel: function () {
            $(".cta-button").each(function () {
              var e = $(this).find("> header"),
                t = $(this).find("figure > .fsResourceLink"),
                n = $(this).find("figcaption");
              e.clone();
              e.prependTo(n), n.appendTo(t);
              var o = $(this).find("img"),
                s = $(this).find("picture");
              (0, i.moveResourceImage)(o, s),
                n.wrapInner(
                  '<div class="button-inner"><div class="button-content" /></div>'
                ),
                $(".button-inner").each(function () {
                  var e = $(this).find("header"),
                    t = $(this).find("a");
                  $(this).prepend(e), $(this).append(t), $("p:empty").remove();
                }),
                $(".button-content").dotdotdot({
                  truncate: "letter",
                  watch: !0,
                }),
                $(this)
                  .find(".button-inner a")
                  .on("focus", function () {
                    $(this).parents(".image-button").addClass("focused");
                  }),
                $(this).on("focusout", function () {
                  $(this).removeClass("focused");
                }),
                $(this).doubleTapToGo();
            });
          },
          postsPanel: function () {
            $(".posts-panel-image article").each(function () {
              var e = $(this).find("img"),
                t = $(this);
              (0, i.moveResourceImage)(e, t);
            }),
              $(".post-image-grid").each(function () {
                var e = $(this).find("article"),
                  t = $(this).find(".fsListItems");
                $(this).find("article:nth-child(n+22)").remove(),
                  t.addClass("lightbox-slideshow"),
                  e.each(function () {
                    $(this).wrapInner('<div class="post-content" />'),
                      $(this).find(".fsThumbnail").prependTo($(this));
                  }),
                  t
                    .clone()
                    .addClass("mobile-slideshow")
                    .removeClass("lightbox-slideshow")
                    .insertAfter(t),
                  $(".mobile-slideshow")
                    .find("article:nth-child(n+19)")
                    .remove();
              }),
              (postLightboxSlideshow = function () {
                var e = $(
                  ".fsListItems.lightbox-slideshow:not(.slick-initialized)"
                );
                e.on("init", function (e, t) {
                  $(this)
                    .find(".slick-prev")
                    .insertBefore($(this).find(".slick-next")),
                    $(this)
                      .find(".slick-dots")
                      .insertBefore($(this).find(".slick-list")),
                    $(this)
                      .find("article")
                      .prepend(
                        '<button class="lightbox-close"><span>Close Lightbox Slideshow</span></button>'
                      ),
                    $(".lightbox-slideshow article:not(.slick-cloned)").each(
                      function (e) {
                        var t = $(this).find(".fsThumbnail img").attr("src");
                        $(".lightbox-slideshow .slick-dots li")
                          .eq(e)
                          .find("button")
                          .css("background-image", "url(" + t + ")");
                      }
                    ),
                    $(".lightbox-slideshow .slick-dots li").attr(
                      "tabIndex",
                      "0"
                    );
                }),
                  e.on("beforeChange", function (e, t, n, i) {
                    $(this)
                      .find(".fsTitle")
                      .dotdotdot({ truncate: "letter", watch: !0 }),
                      $(this)
                        .find(".fsSummary")
                        .dotdotdot({ truncate: "letter", watch: !0 });
                  }),
                  e.slick({
                    dots: !0,
                    arrows: !0,
                    fade: !0,
                    slidesToScroll: 1,
                    autoplay: !1,
                    adaptiveHeight: !1,
                    infinite: !0,
                  });
                var t = e.find(".slick-dots li");
                t.on("keypress", function (e) {
                  13 == e.which && $(this).find("button").click();
                }),
                  t.find("button").on("click", function () {
                    FS.util.updateDynamicImages($(".lightbox-slidesho")),
                      e
                        .find(".fsTitle")
                        .dotdotdot({ truncate: "letter", watch: !0 }),
                      e
                        .find(".fsSummary")
                        .dotdotdot({ truncate: "letter", watch: !0 }),
                      e.addClass("show-overlay"),
                      $(".lightbox-slideshow .slick-dots li").removeAttr(
                        "tabIndex"
                      ),
                      FS.util.updateDynamicImages($(".post-image-grid")),
                      e
                        .find(".slick-current.slick-active .lightbox-close")
                        .focus();
                  }),
                  $(".lightbox-close").on("click", function () {
                    e.removeClass("show-overlay"),
                      $(".lightbox-slideshow .slick-dots li").attr(
                        "tabIndex",
                        "0"
                      );
                  });
              }),
              (postSlideshowMobile = function () {
                var e = $(
                  ".fsListItems.mobile-slideshow:not(.slick-initialized)"
                );
                e.on("init", function (e, t) {
                  $(this).prepend(
                    '<button class="lightbox-close"><span>Close Lightbox Slideshow</span></button>'
                  ),
                    $(this).find(".slick-slide > div").addClass("row-wrapper"),
                    $(this)
                      .find("article")
                      .each(function () {
                        var e = $(this).find(".post-content"),
                          t = $(this)
                            .find(".fsThumbnail")
                            .clone()
                            .addClass("content-thumb");
                        e.prepend(t),
                          e.append(
                            '<div class="mobile-slideshow-arrows"><button class="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button><button class="slick-next slick-arrow" aria-label="Next" type="button">Next</button></div>'
                          );
                      });
                }),
                  e.slick({
                    dots: !0,
                    arrows: !0,
                    rows: 3,
                    slidesPerRow: 2,
                    autoplay: !1,
                    adaptiveHeight: !1,
                    infinite: !1,
                  }),
                  e
                    .find(
                      ".slick-slide article:not(.lightbox-view) .fsThumbnail"
                    )
                    .on("click", function () {
                      e.addClass("lightbox-open"),
                        $(this).parent().addClass("lightbox-view"),
                        $(this)
                          .parent()
                          .find(".fsTitle")
                          .dotdotdot({ truncate: "letter", watch: !0 }),
                        $(this)
                          .parent()
                          .find(".fsSummary")
                          .dotdotdot({ truncate: "letter", watch: !0 });
                    }),
                  $(".mobile-slideshow article .slick-arrow").on(
                    "click",
                    function () {
                      $(".mobile-slideshow article").removeClass(
                        "lightbox-view"
                      ),
                        $(".mobile-slideshow").removeClass("lightbox-open");
                    }
                  ),
                  $(
                    ".mobile-slideshow .slick-slide article:first-child .slick-next"
                  ).on("click", function () {
                    $(this)
                      .parents("article")
                      .next()
                      .find(".fsThumbnail")
                      .click();
                  }),
                  $(
                    ".mobile-slideshow .slick-slide article:last-child .slick-next"
                  ).on("click", function () {
                    $(this)
                      .parents(".row-wrapper")
                      .next()
                      .find("article:first-child .fsThumbnail")
                      .click();
                  }),
                  $(
                    ".mobile-slideshow .slick-slide .row-wrapper:last-child article:last-child .slick-next"
                  ).on("click", function () {
                    $(".mobile-slideshow > .slick-next").click(),
                      $(this)
                        .parents(".slick-slide")
                        .next()
                        .find(
                          ".row-wrapper:first-child article:first-child .fsThumbnail"
                        )
                        .click();
                  }),
                  $(
                    ".mobile-slideshow .slick-slide article:last-child .slick-prev"
                  ).on("click", function () {
                    $(this)
                      .parents("article")
                      .prev()
                      .find(".fsThumbnail")
                      .click();
                  }),
                  $(
                    ".mobile-slideshow .slick-slide article:first-child .slick-prev"
                  ).on("click", function () {
                    $(this)
                      .parents(".row-wrapper")
                      .prev()
                      .find("article:first-child .fsThumbnail")
                      .click();
                  }),
                  $(
                    ".mobile-slideshow .slick-slide .row-wrapper:first-child article:first-child .slick-prev"
                  ).on("click", function () {
                    $(".mobile-slideshow > .slick-prev").click(),
                      $(this)
                        .parents(".slick-slide")
                        .prev()
                        .find(
                          ".row-wrapper:last-child article:last-child .fsThumbnail"
                        )
                        .click();
                  }),
                  $(".lightbox-close").on("click", function () {
                    $(".mobile-slideshow article").removeClass("lightbox-view"),
                      $(".mobile-slideshow").removeClass("lightbox-open");
                  });
              }),
              postLightboxSlideshow(),
              postSlideshowMobile();
          },
          socialPanel: function () {
            $(".social-slideshow").each(function () {
              var e = $(this),
                t = {
                  feed: { per: 12 },
                  filters: { instargram: 12 },
                  loadMore: !1,
                  loadMoreTemplate: "<button>More News</button>",
                  dateFormat: "D MMM",
                  templates: {
                    Instagram: [
                      '<article class="feeds-post instagram">',
                      '<a class="feed-post-link" href="{full_url}" title="Boys Latin Twitter" target="_blank">',
                      '<div class="feed-image-wrap" style="background-image: url({image})">',
                      '<img src="{image}" class="post-image-inline" alt="" aria-hidden="true" />',
                      "</div>",
                      '<div class="feed-inner-wrap"',
                      '<div class="feed-content">',
                      '<div class="post-description">{unformatted_message}</div>',
                      "</div>",
                      "</div>",
                      "</a>",
                      "</article>",
                    ],
                  },
                };
              e.fsFeedPull(t, function () {
                document.querySelectorAll(".fsFeeds img").forEach(function (e) {
                  e.onerror = function () {
                    this.style.display = "none";
                  };
                }),
                  e.find(".post-description").dotdotdot({ watch: !0 }),
                  ($socialSlideshow = e.find("> .fsElementContent")),
                  $socialSlideshow.on("init", function (e, t) {
                    $(this).find("article.slick-active").addClass("animate");
                  }),
                  $socialSlideshow.on("beforeChange", function (e, t, n, i) {
                    var o = (t.$slides.eq(i), t.$slides.eq(n));
                    t.$slides.eq(i + 1),
                      t.$slides.eq(n - 1),
                      o.removeClass("animate");
                  }),
                  $socialSlideshow.on("afterChange", function (e, t, n) {
                    var i = t.$slides.eq(n);
                    t.$slides.eq(n - 2),
                      t.$slides.eq(n + 2),
                      i.addClass("animate");
                  }),
                  $socialSlideshow.slick({
                    dots: !1,
                    arrows: !0,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    autoplay: !1,
                    adaptiveHeight: !1,
                    responsive: [
                      {
                        breakpoint: 800,
                        settings: { slidesToShow: 3, slidesToScroll: 3 },
                      },
                      {
                        breakpoint: 600,
                        settings: { slidesToShow: 2, slidesToScroll: 2 },
                      },
                      {
                        breakpoint: 400,
                        settings: { slidesToShow: 1, slidesToScroll: 1 },
                      },
                    ],
                  }),
                  $(".feeds-post").doubleTapToGo();
              });
            });
          },
        }),
        (t.default = HOME);
    },
    function (e, t, n) {
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MultiRequestFeed = t.FSFeeds = void 0);
      var a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        })(),
        r = n(4),
        l = (function () {
          function e(t, n, i) {
            s(this, e),
              (this.target = t),
              (this.endpoint = t.attr("data-feed-url")),
              (this.options = n),
              this.postData,
              (this.defaultTemplate = n.defaultTemplate || [
                '<article class="fsFeeds-post">',
                '<div class="post-image" style="background-image: url({image})">',
                '<img src="{image}" class="post-image-inline" />',
                "</div>",
                '<div class="post-content">',
                '<div class="like-count">{like_count}</div>',
                '<div class="post-description">{date} {unformatted_message}</div>',
                "</div>",
                "</article>",
              ]),
              (this.dateFormat = n.dateFormat || "D MMMM YYYY"),
              (this.templates = n.templates || {
                Facebook: this.defaultTemplate,
                Twitter: this.defaultTemplate,
                Instagram: this.defaultTemplate,
                YouTube: this.defaultTemplate,
              }),
              (this.loadMoreTemplate =
                n.loadMoreTemplate || "<button>Load More</button>"),
              (this.renderedTemplate = []),
              (this.callback = i),
              (this.loadMore = n.loadMore),
              (this.filters = n.filters || {});
          }
          return (
            a(e, [
              {
                key: "requestPostData",
                value: function (e, t, n) {
                  $.getJSON(e, t, function (e) {}.bind(this))
                    .done(
                      function (e) {
                        n(e.posts.items);
                      }.bind(this)
                    )
                    .fail(function () {
                      this.target
                        .append(
                          "<span>Sorry, an error occured when retrieving this feed data. Please refresh the page to try again.</span>"
                        )
                        .css("textAlign", "center");
                    });
                },
              },
              {
                key: "getTemplate",
                value: function (e) {
                  return this.templates
                    ? this.templates[e] || this.defaultTemplate
                    : this.defaultTemplate;
                },
              },
              {
                key: "construct",
                value: function () {
                  var e = this,
                    t = [];
                  return (
                    this.postData.forEach(function (n) {
                      var n = n,
                        i = n.source.source;
                      "Instagram" == i &&
                        n.additional_photos &&
                        n.additional_photos.length &&
                        (n.image = n.additional_photos[0]),
                        (n.date = moment(n.external_created_at).format(
                          e.dateFormat
                        )),
                        t.push((0, r.nano)(e.getTemplate(i).join("\n"), n));
                    }),
                    t
                  );
                },
              },
              {
                key: "render",
                value: function (e) {
                  this.target.find("> .fsElementContent").append(e.join(""));
                },
              },
              {
                key: "renderLoadMore",
                value: function () {
                  var e = this;
                  this.target.append(
                    $(this.loadMoreTemplate).addClass("fsFeeds-load-more")
                  ),
                    $(document).on("click", ".fsFeeds-load-more", function () {
                      (e.options.feed.page = e.options.feed.page + 1),
                        e.requestPostData(e.endpoint, e.options.feed, function (
                          t
                        ) {
                          (e.postData = e.postOrder ? e.sortPosts(t) : t),
                            (e.renderedTemplate = e.construct(e.postData)),
                            e.render(e.renderedTemplate),
                            e.callback();
                        });
                    });
                },
              },
              {
                key: "sortPosts",
                value: function (e) {
                  var t = [];
                  return (
                    this.postOrder.forEach(function (n) {
                      var i = e.find(function (e) {
                        return e.source.source == n;
                      });
                      t.push(i),
                        (e = e.filter(function (e) {
                          return e !== i;
                        }));
                    }),
                    t
                  );
                },
              },
              {
                key: "init",
                value: function () {
                  var e = this;
                  (this.options.feed.page = this.options.feed.page || 1),
                    this.loadMore && this.renderLoadMore(),
                    this.requestPostData(
                      this.endpoint,
                      this.options.feed,
                      function (t) {
                        (e.postData = e.postOrder ? e.sortPosts(t) : t),
                          (e.renderedTemplate = e.construct(e.postData)),
                          e.render(e.renderedTemplate),
                          e.callback();
                      }
                    );
                },
              },
            ]),
            e
          );
        })(),
        d = (function (e) {
          function t() {
            return (
              s(this, t),
              i(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            o(t, e),
            a(t, [
              {
                key: "requestPostData",
                value: function (e, t, n) {
                  var i = this,
                    o = Object.entries(this.filters),
                    s = e.match(/filter=([\d,]+)/),
                    a =
                      (null == s ||
                        s[1].split(",").filter(function (e) {
                          return e;
                        }),
                      {}),
                    r = Object.entries(e.split("?filter=").pop().split(",")),
                    l = r.map(function (t) {
                      return e.split("?")[0] + "?filter=" + t[1];
                    });
                  if ("" === r[0][1])
                    return void console.error(
                      "Error: Please select sources in the element"
                    );
                  Promise.all(
                    l.map(function (e) {
                      return fetch(e).then(function (e) {
                        return e.json();
                      });
                    })
                  ).then(function (t) {
                    t.forEach(function (t, n) {
                      t.posts.items[0].source.source.toLowerCase() in a
                        ? (a[t.posts.items[0].source.source.toLowerCase()] =
                            a[t.posts.items[0].source.source.toLowerCase()] +
                            "," +
                            l[n].split("?filter=")[1])
                        : (a[t.posts.items[0].source.source.toLowerCase()] =
                            e.split("?filter")[0] +
                            "?filter=" +
                            l[n].split("?filter=")[1]);
                    }),
                      o.forEach(function (t) {
                        void 0 === a[t[0]]
                          ? (a[t[0]] =
                              e.split("?filter")[0] +
                              "?filter=" +
                              t[0] +
                              "&per=" +
                              t[1] +
                              "&page=" +
                              i.options.feed.page)
                          : (a[t[0]] =
                              a[t[0]] +
                              "&per=" +
                              t[1] +
                              "&page=" +
                              i.options.feed.page);
                      });
                    var s = new Set(
                        o
                          .flatMap(function (e) {
                            return e[0] in a ? [e[0]] : [];
                          })
                          .concat(Object.keys(a))
                      ),
                      r = !0,
                      d = !1,
                      c = void 0;
                    try {
                      for (
                        var f, u = s[Symbol.iterator]();
                        !(r = (f = u.next()).done);
                        r = !0
                      ) {
                        var h = f.value,
                          p = a[h];
                        delete a[h], (a[h] = p);
                      }
                    } catch (e) {
                      (d = !0), (c = e);
                    } finally {
                      try {
                        !r && u.return && u.return();
                      } finally {
                        if (d) throw c;
                      }
                    }
                    Promise.all(
                      Object.values(a).map(function (e) {
                        return fetch(e).then(function (e) {
                          return e.json();
                        });
                      })
                    ).then(n);
                  });
                },
              },
              {
                key: "renderLoadMore",
                value: function () {
                  var e = this;
                  this.target.append(
                    $(this.loadMoreTemplate).addClass("fsFeeds-load-more")
                  ),
                    $(document).on("click", ".fsFeeds-load-more", function () {
                      (e.options.feed.page = e.options.feed.page + 1),
                        e.requestPostData(e.endpoint, e.options.feed, function (
                          t
                        ) {
                          (e.postData = e.combinePosts(t)),
                            (e.renderedTemplate = e.construct(e.postData)),
                            e.render(e.renderedTemplate),
                            e.callback();
                        });
                    });
                },
              },
              {
                key: "combinePosts",
                value: function (e) {
                  return e
                    .map(function (e) {
                      return e.posts.items;
                    })
                    .reduce(function (e, t) {
                      return e.concat(t);
                    }, []);
                },
              },
              {
                key: "init",
                value: function () {
                  var e = this;
                  (this.options.feed.page = this.options.feed.page || 1),
                    this.loadMore && this.renderLoadMore(),
                    this.requestPostData(
                      this.endpoint,
                      this.options.feed,
                      function (t) {
                        (e.postData = e.combinePosts(t)),
                          (e.renderedTemplate = e.construct(e.postData)),
                          e.render(e.renderedTemplate),
                          e.callback();
                      }
                    );
                },
              },
            ]),
            t
          );
        })(l);
      ($.fn.fsFeedPull = function (e, t) {
        new l(this, e, t).init();
      }),
        ($.fn.fsMultiFeedPull = function (e, t) {
          new d(this, e, t).init();
        }),
        (t.FSFeeds = l),
        (t.MultiRequestFeed = d);
    },
    function (e, t, n) {
      n(25), n(28);
    },
    function (e, t, n) {
      n(26), n(27);
    },
    function (e, t) {},
    function (e, t, n) {
      var i = n(0),
        o = $(".bpa-athletics-board-1"),
        s = ($(".bpa-athletics-toggle-1"), o.find(".bpa-athletic-events-1"));
      (BPA_ATHLETICS_BOARD_V1 = {
        init: function () {
          this.athleticBoardSlideshow(),
            this.athleticBoardStructure(),
            i.notComposeMode &&
              o.each(function () {
                $(this).hasClass("header")
                  ? $(this).insertBefore(i.$pageBodyWrapper)
                  : $(this).hasClass("footer") &&
                    $(this).insertAfter(i.$pageBodyWrapper);
              });
        },
        athleticBoardStructure: function () {
          o.each(function () {
            var e = $(this).find(
                ".bpa-athletics-toggle-1 > .fsElementContent button"
              ),
              t = $(this).find(".bpa-athletic-events-1");
            t.eq(0).addClass("on"),
              e.eq(0).addClass("on"),
              e.each(function (n) {
                $(this).on("click", function () {
                  e.removeClass("on"),
                    t.removeClass("on"),
                    $(this).addClass("on"),
                    t.eq(n).addClass("on");
                });
              });
          });
        },
        athleticBoardSlideshow: function () {
          function e() {
            t.each(function () {
              $(this).width() < 300
                ? ($(this).addClass("small"),
                  $(this).parents(".bpa-athletics-board-1").addClass("small"))
                : ($(this).removeClass("small"),
                  $(this)
                    .parents(".bpa-athletics-board-1")
                    .removeClass("small"));
            });
          }
          var t = s.find(".fsListItems");
          t.each(function () {
            $(this).slick({
              arrows: !0,
              infinite: !0,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: !0,
              respondTo: "slider",
              responsive: [
                {
                  breakpoint: 300,
                  settings: {
                    arrows: !0,
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: !1,
                    adaptiveHeight: !0,
                    respondTo: "slider",
                  },
                },
              ],
            });
          }),
            e(),
            i.$window.on("resize", function () {
              e();
            });
        },
        athleticBoardUpdate: function (e) {
          e.each(function () {
            $(this)
              .find(".fsListItems")
              .slick({
                arrows: !0,
                infinite: !0,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: !0,
                respondTo: "slider",
                responsive: [
                  {
                    breakpoint: 300,
                    settings: {
                      arrows: !0,
                      infinite: !0,
                      speed: 300,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      variableWidth: !1,
                      adaptiveHeight: !0,
                      respondTo: "slider",
                    },
                  },
                ],
              });
          });
        },
      }),
        o.length &&
          (BPA_ATHLETICS_BOARD_V1.init(),
          FS.events.onElementUpdated("AthleticsEvent", function (e) {
            BPA_ATHLETICS_BOARD_V1.athleticBoardUpdate(e);
          }),
          FS.events.onElementAdded("AthleticsEvent", function (e) {
            BPA_ATHLETICS_BOARD_V1.athleticBoardUpdate(e);
          }));
    },
    function (e, t, n) {
      n(29), n(30);
    },
    function (e, t) {},
    function (e, t, n) {
      function i() {
        s.$window.width() >= 600 &&
          ($(d).removeClass("is-active"), $(c).css("display", ""));
      }
      var o = n(1),
        s = n(0);
      n(2), n(3);
      var a = $(".fsGrid.bpa-post-filter-1"),
        r = $(".fsCategoryFilter.bpa-post-filter-1"),
        l = $(".fsTagFilter.bpa-post-filter-1"),
        d = $(".bpa-post-filter-1.fsToolsElement"),
        c = $(".bpa-post-filter-1.fsToolsElement > .fsElementContent"),
        f = $(".fsTwoColumnWideLeftLayout .fsStyleOneThird");
      $(".fsTwoColumnWideLeftLayout").length;
      (BPA_POST_FILTER_V1 = {
        init: function () {
          this.searchPlaceholder(),
            this.articleSetup(),
            this.filterDropdown(),
            this.moveFilters();
        },
        searchPlaceholder: function () {
          $(".fsSearch.bpa-post-filter-1")
            .find("input[type=text]")
            .each(function (e) {
              var t = s.$window.width();
              $(this).val() ||
                (t > 600 && !f.length
                  ? $(this).attr("placeholder", "What are you looking for?")
                  : $(this).attr("placeholder", "Search")),
                $(this)
                  .focus(function () {
                    $(this).parent().addClass("buttonClearActive");
                  })
                  .blur(function () {
                    $(this).parent().removeClass("buttonClearActive");
                  });
            });
        },
        articleSetup: function () {
          a.find("article").each(function () {
            var e = $(this),
              t = e.find(".fsSummary"),
              n = (e.find(".fsTitle"), e.find(".fsThumbnail")),
              i = e.find(".fsReadMoreLink");
            t.parent().addClass("has-summary"),
              n.parent().addClass("has-thumbnail");
            var s = $(this).find("img");
            (0, o.moveResourceImage)(s, n),
              t.dotdotdot({ fallbackToLetter: !0, watch: !0 }),
              $(i).focusin(function () {
                $(e).addClass("active");
              }),
              $(i).focusout(function () {
                $(e).removeClass("active");
              }),
              $(this)
                .find('a[data-opens-in="linked_url"]')
                .parents("article")
                .addClass("linked-url");
          }),
            a.find("article.linked-url").doubleTapToGo();
        },
        articleUpdate: function (e) {
          e.find("article").each(function () {
            var e = $(this),
              t = e.find(".fsSummary"),
              n = (e.find(".fsTitle"), e.find(".fsThumbnail"));
            t.parent().addClass("has-summary"),
              n.parent().addClass("has-thumbnail");
            var i = $(this).find("img");
            (0, o.moveResourceImage)(i, n),
              t.dotdotdot({ fallbackToLetter: !0, watch: !0 });
          });
        },
        filterDropdown: function () {
          s.notComposeMode &&
            (r.each(function () {
              var e = $(this),
                t = e.find("> header"),
                n = e.find("> header h2").html(),
                o = e.find("> .fsElementContent");
              $(t).append(
                "<button aria-label='category trigger' class='category_trigger'>" +
                  n +
                  "</button>"
              );
              var s = e.find(".category_trigger");
              $(s).on("click", function (t) {
                e.toggleClass("is-active"), o.slideToggle();
              }),
                $(window).resize(i),
                $(
                  ".fsCategoryFilter.bpa-post-filter-1 .fsToolsList > li:last-child .fsCategoryLink"
                ).on("blur", function () {
                  $(".category_trigger").is(":visible") &&
                    (e.removeClass("is-active"), o.slideToggle());
                });
            }),
            l.each(function () {
              var e = $(this),
                t = e.find("> header"),
                n = e.find("> header h2").html(),
                o = e.find("> .fsElementContent");
              $(t).append(
                "<button aria-label='tags trigger' class='tags_trigger'>" +
                  n +
                  "</button>"
              );
              var s = e.find(".tags_trigger");
              $(s).on("click", function (t) {
                e.toggleClass("is-active"), o.slideToggle();
              }),
                $(window).resize(i),
                $(
                  ".fsTagFilter.bpa-post-filter-1 .fsToolsList > li:last-child .fsTagLink"
                ).on("blur", function () {
                  $(".tags_trigger").is(":visible") &&
                    (e.removeClass("is-active"), o.slideToggle());
                });
            }));
        },
        moveFilters: function () {
          function e() {
            var e = s.$window.width();
            e >= 600
              ? $(".filter-elements-container")
                  .detach()
                  .prependTo(".right-column-elements-container")
              : e <= 599 &&
                $(".filter-elements-container").detach().insertBefore(a);
          }
          ".right-column-elements-container".length &&
            s.notComposeMode &&
            (e(), $(window).resize(e));
        },
      }),
        a.length &&
          (BPA_POST_FILTER_V1.init(),
          FS.events.onElementUpdated("Post", function (e) {
            BPA_POST_FILTER_V1.articleUpdate(e);
          }),
          FS.events.onElementAdded("Post", function (e) {
            BPA_POST_FILTER_V1.articleUpdate(e);
          }),
          FS.events.onElementMoreLoaded("Post", function (e) {
            BPA_POST_FILTER_V1.articleUpdate(e);
          }));
    },
  ]);

/*Dropdown Menu*/
$(".dropdown").click(function () {
  $(this).attr("tabindex", 1).focus();
  $(this).toggleClass("active");
  $(this).find(".dropdown-menu").slideToggle(300);
});
$(".dropdown").focusout(function () {
  $(this).removeClass("active");
  $(this).find(".dropdown-menu").slideUp(300);
});
$(".dropdown .dropdown-menu li").click(function () {
  $(this).parents(".dropdown").find("span").text($(this).text());
  $(this).parents(".dropdown").find("input").attr("value", $(this).attr("id"));
});
/*End Dropdown Menu*/

$(document).ready(function () {
  // برای هر دسته‌بندی با کلاس filterbar__item-detail
  $(".filterbar__item-detail").each(function () {
    var $category = $(this);

    // برای هر عنصر li در هر دسته‌بندی
    $category.find("li").click(function () {
      // حذف کلاس active از تمام عناصر li در همان دسته‌بندی
      $category.find("li").removeClass("active");

      // اضافه کردن کلاس active به عنصر کلیک شده
      $(this).addClass("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // این کد تنها زمانی اجرا می‌شود که صفحه HTML کاملاً بارگذاری شده است.
  var currentPage = window.location.pathname;

  if (currentPage === "/filter.html") {
    // اجرای کد هنگام اسکرول
    window.addEventListener("scroll", function () {
      // چک کردن عرض صفحه
      if (window.innerWidth > 992) {
        // چک کردن اسکرول به مقدار معین (مثلاً 400 پیکسل)
        if (window.scrollY >= 650) {
          // انجام اتفاق مورد نظر (برای مثال اضافه کردن کلاس به المنت "menuTwo")
          var menuTwo = document.getElementById("menuTwo");
          menuTwo.classList.add("fixedMenu");
        } else {
          // اگر اسکرول به 400 پیکسل برگردد، کلاس را حذف کنید
          var menuTwo = document.getElementById("menuTwo");
          menuTwo.classList.remove("fixedMenu");
        }
      }
    });
  } else if   (currentPage === "/article.html")  {

    // اجرای کد هنگام اسکرول
window.addEventListener("scroll", function () {
  // چک کردن عرض صفحه
  if (window.innerWidth > 992) {
    // چک کردن اسکرول به مقدار معین (مثلاً 400 پیکسل)
    if (window.scrollY >= 550) {
      // انجام اتفاق مورد نظر (برای مثال اضافه کردن کلاس به المنت "menuTwo")
      var menuTwo = document.getElementById("tagMenu");
      menuTwo.classList.add("fixedMenu");
    } else {
      // اگر اسکرول به 400 پیکسل برگردد، کلاس را حذف کنید
      var menuTwo = document.getElementById("tagMenu");
      menuTwo.classList.remove("fixedMenu");
    }
  }
});

  }
});



+$(document).ready(function () {
  // تعیین مقدار اسکرول مدنظر
  var scrollThreshold = 800; // مثال: 100 پیکسل
  var endOfScroll;

  // دریافت عرض المان دیگر
  var otherElementheight = $("#article_one").height();

  // محاسبه مقدار endOfScroll بر اساس عرض المان دیگر
  endOfScroll = otherElementheight;

  // اضافه کردن یا حذف کلاس به عنصر با شناسه ss در صورتی که عرض صفحه بیشتر از 992 پیکسل باشد
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if ($(window).innerWidth() > 992) {
      if (scrollTop >= scrollThreshold && scrollTop <= endOfScroll) {
        $("#i9-js-btt--conatiner").addClass("fixed");
      } else {
        $("#i9-js-btt--conatiner").removeClass("fixed");
      }
    } else {
      $("#i9-js-btt--conatiner").removeClass("fixed");
    }
  });
});
