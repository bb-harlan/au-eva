!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {i: i, l: !1, exports: {}};
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) n.d(i, r, function (t) {
      return e[t]
    }.bind(null, r));
    return i
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "/au-eva/", n(n.s = 24)
}({
  0: function (e, t, n) {
    "use strict";
    (function (e) {
      function i(e, t, n) {
        if (t) {
          if (t.innerError && n) return t;
          var i = "\n------------------------------------------------\n";
          e += i + "Inner Error:\n", "string" == typeof t ? e += "Message: " + t : (t.message ? e += "Message: " + t.message : e += "Unknown Inner Error Type. Displaying Inner Error as JSON:\n " + JSON.stringify(t, null, "  "), t.stack && (e += "\nInner Error Stack:\n" + t.stack, e += "\nEnd Inner Error Stack")), e += i
        }
        var r = new Error(e);
        return t && (r.innerError = t), r
      }

      n.d(t, "a", (function () {
        return i
      })), n.d(t, "c", (function () {
        return r
      })), n.d(t, "d", (function () {
        return o
      })), n.d(t, "b", (function () {
        return a
      })), n.d(t, "f", (function () {
        return s
      })), n.d(t, "e", (function () {
        return c
      }));
      var r = {}, o = {
        noop: function () {
        }, eachModule: function () {
        }, moduleName: function (e) {
          function t(t) {
            return e.apply(this, arguments)
          }

          return t.toString = function () {
            return e.toString()
          }, t
        }((function (e) {
          return e
        }))
      };
      o.global = "undefined" != typeof self ? self : void 0 !== e ? e : new Function("return this")();
      var a = {}, s = !1;

      function c(e) {
        s || (s = !0, "function" != typeof Object.getPropertyDescriptor && (Object.getPropertyDescriptor = function (e, t) {
          for (var n = Object.getOwnPropertyDescriptor(e, t), i = Object.getPrototypeOf(e); void 0 === n && null !== i;) n = Object.getOwnPropertyDescriptor(i, t), i = Object.getPrototypeOf(i);
          return n
        }), e(o, r, a))
      }
    }).call(this, n(12))
  }, 1: function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
      return a
    })), n.d(t, "a", (function () {
      return l
    })), n.d(t, "c", (function () {
      return u
    })), n.d(t, "d", (function () {
      return g
    }));
    var i = n(0), r = (Object.assign, "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    });

    function o(e) {
      return e && ("function" == typeof e || "object" === (void 0 === e ? "undefined" : r(e)))
    }

    var a = {
      resource: "aurelia:resource",
      paramTypes: "design:paramtypes",
      propertyType: "design:type",
      properties: "design:properties",
      get: function (e, t, n) {
        if (o(t)) {
          var i = a.getOwn(e, t, n);
          return void 0 === i ? a.get(e, Object.getPrototypeOf(t), n) : i
        }
      },
      getOwn: function (e, t, n) {
        if (o(t)) return Reflect.getOwnMetadata(e, t, n)
      },
      define: function (e, t, n, i) {
        Reflect.defineMetadata(e, t, n, i)
      },
      getOrCreateOwn: function (e, t, n, i) {
        var r = a.getOwn(e, n, i);
        return void 0 === r && (r = new t, Reflect.defineMetadata(e, r, n, i)), r
      }
    }, s = new Map, c = Object.freeze({moduleId: void 0, moduleMember: void 0}), l = function () {
      function e(e, t) {
        this.moduleId = e, this.moduleMember = t
      }

      return e.get = function (t) {
        var n = s.get(t);
        return void 0 === n && i.d.eachModule((function (i, o) {
          if ("object" === (void 0 === o ? "undefined" : r(o))) for (var a in o) try {
            if (o[a] === t) return s.set(t, n = new e(i, a)), !0
          } catch (e) {
          }
          return o === t && (s.set(t, n = new e(i, "default")), !0)
        })), n || c
      }, e.set = function (e, t) {
        s.set(e, t)
      }, e
    }();

    function u(e) {
      var t = Object.keys(e);
      return function (n) {
        var i = function (n) {
          for (var i = "function" == typeof n ? n.prototype : n, r = t.length; r--;) {
            var o = t[r];
            Object.defineProperty(i, o, {value: e[o], writable: !0})
          }
        };
        return n ? i(n) : i
      }
    }

    function d() {
      return !0
    }

    function h() {
    }

    function p(e) {
      return void 0 === e ? e = {} : "function" == typeof e && (e = {validate: e}), e.validate || (e.validate = d), e.compose || (e.compose = h), e
    }

    function f(e) {
      return function (t) {
        return !0 === e(t)
      }
    }

    function v(e, t) {
      return function (n) {
        var i = t(n);
        if (!0 !== i) throw new Error(i || e + " was not correctly implemented.")
      }
    }

    function g(e, t) {
      t = p(t);
      var n = function n(i) {
        var r = "function" == typeof i ? i.prototype : i;
        t.compose(r), n.assert(r), Object.defineProperty(r, "protocol:" + e, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: !0
        })
      };
      return n.validate = f(t.validate), n.assert = v(e, t.validate), n
    }

    g.create = function (e, t) {
      t = p(t);
      var n = "protocol:" + e, i = function (n) {
        var i = g(e, t);
        return n ? i(n) : i
      };
      return i.decorates = function (e) {
        return !0 === e[n]
      }, i.validate = f(t.validate), i.assert = v(e, t.validate), i
    }
  }, 10: function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
      return s
    })), n.d(t, "a", (function () {
      return c
    }));
    var i = n(7), r = n(1), o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }(), a = function (e, t) {
      this.src = e, this.name = t
    }, s = function () {
      function e(e) {
        this.templateIsLoaded = !1, this.factoryIsReady = !1, this.resources = null, this.dependencies = null, this.address = e, this.onReady = null, this._template = null, this._factory = null
      }

      return e.prototype.addDependency = function (e, t) {
        var n = "string" == typeof e ? Object(i.d)(e, this.address) : r.a.get(e).moduleId;
        this.dependencies.push(new a(n, t))
      }, o(e, [{
        key: "template", get: function () {
          return this._template
        }, set: function (e) {
          var t, n = this.address, r = void 0, o = void 0, s = void 0;
          this._template = e, this.templateIsLoaded = !0, t = e.content.querySelectorAll("require"), s = this.dependencies = new Array(t.length);
          for (var c = 0, l = t.length; c < l; ++c) {
            if (!(o = (r = t[c]).getAttribute("from"))) throw new Error("<require> element in " + n + ' has no "from" attribute.');
            s[c] = new a(Object(i.d)(o, n), r.getAttribute("as")), r.parentNode && r.parentNode.removeChild(r)
          }
        }
      }, {
        key: "factory", get: function () {
          return this._factory
        }, set: function (e) {
          this._factory = e, this.factoryIsReady = !0
        }
      }]), e
    }(), c = function () {
      function e() {
        this.templateRegistry = {}
      }

      return e.prototype.map = function (e, t) {
        throw new Error("Loaders must implement map(id, source).")
      }, e.prototype.normalizeSync = function (e, t) {
        throw new Error("Loaders must implement normalizeSync(moduleId, relativeTo).")
      }, e.prototype.normalize = function (e, t) {
        throw new Error("Loaders must implement normalize(moduleId: string, relativeTo: string): Promise<string>.")
      }, e.prototype.loadModule = function (e) {
        throw new Error("Loaders must implement loadModule(id).")
      }, e.prototype.loadAllModules = function (e) {
        throw new Error("Loader must implement loadAllModules(ids).")
      }, e.prototype.loadTemplate = function (e) {
        throw new Error("Loader must implement loadTemplate(url).")
      }, e.prototype.loadText = function (e) {
        throw new Error("Loader must implement loadText(url).")
      }, e.prototype.applyPluginToUrl = function (e, t) {
        throw new Error("Loader must implement applyPluginToUrl(url, pluginName).")
      }, e.prototype.addPlugin = function (e, t) {
        throw new Error("Loader must implement addPlugin(pluginName, implementation).")
      }, e.prototype.getOrCreateTemplateRegistryEntry = function (e) {
        return this.templateRegistry[e] || (this.templateRegistry[e] = new s(e))
      }, e
    }()
  }, 11: function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", (function () {
        return se
      })), n.d(t, "b", (function () {
        return P
      })), n.d(t, "c", (function () {
        return y
      }));
      var i = n(4), r = n(6), o = n(18), a = n(22), s = n("aurelia-event-aggregator"), c = function (e, t) {
        return (c = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
          e.__proto__ = t
        } || function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
      };
      var l = function () {
        function t(e) {
          this.plan = null, this.options = {}, Object.assign(this, e), this.params = this.params || {}, this.viewPortInstructions = {};
          var t = [], n = this;
          do {
            var i = Object.assign({}, n.params);
            n.config && n.config.hasChildRouter && delete i[n.getWildCardName()], t.unshift(i), n = n.parentInstruction
          } while (n);
          var r = Object.assign.apply(Object, [{}, this.queryParams].concat(t));
          this.lifecycleArgs = [r, this.config, this]
        }

        return t.prototype.getAllInstructions = function () {
          var e = [this], t = this.viewPortInstructions;
          for (var n in t) {
            var i = t[n].childNavigationInstruction;
            i && e.push.apply(e, i.getAllInstructions())
          }
          return e
        }, t.prototype.getAllPreviousInstructions = function () {
          return this.getAllInstructions().map((function (e) {
            return e.previousInstruction
          })).filter((function (e) {
            return e
          }))
        }, t.prototype.addViewPortInstruction = function (e, t, n, i) {
          var r, o = "string" == typeof e ? e : e.name, a = this.lifecycleArgs,
            s = Object.assign({}, a[1], {currentViewPort: o});
          return r = "string" == typeof e ? {
            name: e,
            strategy: t,
            moduleId: n,
            component: i,
            childRouter: i.childRouter,
            lifecycleArgs: [a[0], s, a[2]]
          } : {
            name: o,
            strategy: e.strategy,
            component: e.component,
            moduleId: e.moduleId,
            childRouter: e.component.childRouter,
            lifecycleArgs: [a[0], s, a[2]]
          }, this.viewPortInstructions[o] = r
        }, t.prototype.getWildCardName = function () {
          var e = this.config.route, t = e.lastIndexOf("*");
          return e.substr(t + 1)
        }, t.prototype.getWildcardPath = function () {
          var e = this.getWildCardName(), t = this.params[e] || "", n = this.queryString;
          return n && (t += "?" + n), t
        }, t.prototype.getBaseUrl = function () {
          var e = this, t = encodeURI, n = decodeURI(this.fragment);
          if ("" === n) {
            var i = this.router.routes.find((function (t) {
              return t.name === e.config.name && "" !== t.route
            }));
            i && (n = i.route)
          }
          if (!this.params) return t(n);
          var r = this.getWildCardName(), o = this.params[r] || "";
          return t(o ? n.substr(0, n.lastIndexOf(o)) : n)
        }, t.prototype._commitChanges = function (t) {
          var n = this, i = this.router;
          i.currentInstruction = this;
          var r = this.previousInstruction;
          r && (r.config.navModel.isActive = !1), this.config.navModel.isActive = !0, i.refreshNavigation();
          var o = [], a = [], s = this.viewPortInstructions, c = function (n) {
            var r = s[n], c = i.viewPorts[n];
            if (!c) throw new Error("There was no router-view found in the view for " + r.moduleId + ".");
            var l = r.childNavigationInstruction;
            "replace" === r.strategy ? l && l.parentCatchHandler ? o.push(l._commitChanges(t)) : (t && a.push({
              viewPort: c,
              viewPortInstruction: r
            }), o.push(c.process(r, t).then((function () {
              return l ? l._commitChanges(t) : e.resolve()
            })))) : l && o.push(l._commitChanges(t))
          };
          for (var l in s) c(l);
          return e.all(o).then((function () {
            return a.forEach((function (e) {
              return e.viewPort.swap(e.viewPortInstruction)
            })), null
          })).then((function () {
            return u(n)
          }))
        }, t.prototype._updateTitle = function () {
          var e = this.router, t = this._buildTitle(e.titleSeparator);
          t && e.history.setTitle(t)
        }, t.prototype._buildTitle = function (e) {
          void 0 === e && (e = " | ");
          var t = "", n = [], i = this.config.navModel.title, r = this.router, o = this.viewPortInstructions;
          for (var a in i && (t = r.transformTitle(i)), o) {
            var s = o[a].childNavigationInstruction;
            if (s) {
              var c = s._buildTitle(e);
              c && n.push(c)
            }
          }
          return n.length && (t = n.join(e) + (t ? e : "") + t), r.title && (t += (t ? e : "") + r.transformTitle(r.title)), t
        }, t
      }(), u = function (e) {
        e.previousInstruction = null, e.plan = null
      }, d = function () {
        function e(e, t) {
          this.isActive = !1, this.title = null, this.href = null, this.relativeHref = null, this.settings = {}, this.config = null, this.router = e, this.relativeHref = t
        }

        return e.prototype.setTitle = function (e) {
          this.title = e, this.isActive && this.router.updateTitle()
        }, e
      }();

      function h(e, t, n) {
        return void 0 === n && (n = !1), t || "#" === e[0] || (e = "#" + e), t && n && (e = e.substring(1, e.length)), e
      }

      function p(e, t, n, i) {
        if (g.test(e)) return e;
        var r = "";
        return t.length && "/" !== t[0] && (r += "/"), (r += t).length && "/" === r[r.length - 1] || "/" === e[0] || (r += "/"), r.length && "/" === r[r.length - 1] && "/" === e[0] && (r = r.substring(0, r.length - 1)), h(r + e, n, i)
      }

      function f(e) {
        var t = [];
        if (Array.isArray(e.route)) for (var n = 0, i = e.route.length; n < i; ++n) {
          var r = Object.assign({}, e);
          r.route = e.route[n], t.push(r)
        } else t.push(Object.assign({}, e));
        return t
      }

      var v = /^#?\//, g = /^([a-z][a-z0-9+\-.]*:)?\/\//i, m = function () {
        function e() {
          this.instructions = [], this.options = {}, this.pipelineSteps = []
        }

        return e.prototype.addPipelineStep = function (e, t) {
          if (null == t) throw new Error("Pipeline step cannot be null or undefined.");
          return this.pipelineSteps.push({name: e, step: t}), this
        }, e.prototype.addAuthorizeStep = function (e) {
          return this.addPipelineStep("authorize", e)
        }, e.prototype.addPreActivateStep = function (e) {
          return this.addPipelineStep("preActivate", e)
        }, e.prototype.addPreRenderStep = function (e) {
          return this.addPipelineStep("preRender", e)
        }, e.prototype.addPostRenderStep = function (e) {
          return this.addPipelineStep("postRender", e)
        }, e.prototype.fallbackRoute = function (e) {
          return this._fallbackRoute = e, this
        }, e.prototype.map = function (e) {
          var t = this;
          return Array.isArray(e) ? (e.forEach((function (e) {
            return t.map(e)
          })), this) : this.mapRoute(e)
        }, e.prototype.useViewPortDefaults = function (e) {
          return this.viewPortDefaults = e, this
        }, e.prototype.mapRoute = function (e) {
          return this.instructions.push((function (t) {
            for (var n, i = f(e), r = 0, o = i.length; r < o; ++r) {
              var a = i[r];
              a.settings = a.settings || {}, n || (n = t.createNavModel(a)), t.addRoute(a, n)
            }
          })), this
        }, e.prototype.mapUnknownRoutes = function (e) {
          return this.unknownRouteConfig = e, this
        }, e.prototype.exportToRouter = function (e) {
          for (var t = this.instructions, n = 0, i = t.length; n < i; ++n) t[n](e);
          var r = this, o = r.title, a = r.titleSeparator, s = r.unknownRouteConfig, c = r._fallbackRoute,
            l = r.viewPortDefaults;
          o && (e.title = o), a && (e.titleSeparator = a), s && e.handleUnknownRoutes(s), c && (e.fallbackRoute = c), l && e.useViewPortDefaults(l), Object.assign(e.options, this.options);
          var u = this.pipelineSteps, d = u.length;
          if (d) {
            if (!e.isRoot) throw new Error("Pipeline steps can only be added to the root router");
            var h = e.pipelineProvider;
            for (n = 0, i = d; n < i; ++n) {
              var p = u[n], f = p.name, v = p.step;
              h.addStep(f, v)
            }
          }
        }, e
      }(), y = function () {
        function t(e, t) {
          var n = this;
          this.parent = null, this.options = {}, this.viewPortDefaults = {}, this.transformTitle = function (e) {
            return n.parent ? n.parent.transformTitle(e) : e
          }, this.container = e, this.history = t, this.reset()
        }

        return t.prototype.reset = function () {
          var t = this;
          this.viewPorts = {}, this.routes = [], this.baseUrl = "", this.isConfigured = !1, this.isNavigating = !1, this.isExplicitNavigation = !1, this.isExplicitNavigationBack = !1, this.isNavigatingFirst = !1, this.isNavigatingNew = !1, this.isNavigatingRefresh = !1, this.isNavigatingForward = !1, this.isNavigatingBack = !1, this.couldDeactivate = !1, this.navigation = [], this.currentInstruction = null, this.viewPortDefaults = {}, this._fallbackOrder = 100, this._recognizer = new a.a, this._childRecognizer = new a.a, this._configuredPromise = new e((function (e) {
            t._resolveConfiguredPromise = e
          }))
        }, Object.defineProperty(t.prototype, "isRoot", {
          get: function () {
            return !this.parent
          }, enumerable: !0, configurable: !0
        }), t.prototype.registerViewPort = function (e, t) {
          t = t || "default", this.viewPorts[t] = e
        }, t.prototype.ensureConfigured = function () {
          return this._configuredPromise
        }, t.prototype.configure = function (t) {
          var n = this;
          this.isConfigured = !0;
          var i, r = t;
          return "function" == typeof t && (r = t(i = new m)), e.resolve(r).then((function (e) {
            e && e.exportToRouter && (i = e), i.exportToRouter(n), n.isConfigured = !0, n._resolveConfiguredPromise()
          }))
        }, t.prototype.navigate = function (e, t) {
          return !this.isConfigured && this.parent ? this.parent.navigate(e, t) : (this.isExplicitNavigation = !0, this.history.navigate(function (e, t, n) {
            return v.test(e) ? h(e, n) : p(e, t, n)
          }(e, this.baseUrl, this.history._hasPushState), t))
        }, t.prototype.navigateToRoute = function (e, t, n) {
          var i = this.generate(e, t);
          return this.navigate(i, n)
        }, t.prototype.navigateBack = function () {
          this.isExplicitNavigationBack = !0, this.history.navigateBack()
        }, t.prototype.createChild = function (e) {
          var n = new t(e || this.container.createChild(), this.history);
          return n.parent = this, n
        }, t.prototype.generate = function (e, t, n) {
          void 0 === t && (t = {}), void 0 === n && (n = {});
          var i = "childRoute" in t ? this._childRecognizer : this._recognizer;
          if (!i.hasRoute(e)) {
            if (this.parent) return this.parent.generate(e, t, n);
            throw new Error("A route with name '" + e + "' could not be found. Check that `name: '" + e + "'` was specified in the route's config.")
          }
          var r = p(i.generate(e, t), this.baseUrl, this.history._hasPushState, n.absolute);
          return n.absolute ? "" + this.history.getAbsoluteRoot() + r : r
        }, t.prototype.createNavModel = function (e) {
          var t = new d(this, "href" in e ? e.href : e.route);
          return t.title = e.title, t.order = e.nav, t.href = e.href, t.settings = e.settings, t.config = e, t
        }, t.prototype.addRoute = function (e, t) {
          if (Array.isArray(e.route)) {
            f(e).forEach(this.addRoute.bind(this))
          } else {
            w(e), "viewPorts" in e || e.navigationStrategy || (e.viewPorts = {
              default: {
                moduleId: e.moduleId,
                view: e.view
              }
            }), t || (t = this.createNavModel(e)), this.routes.push(e);
            var n = e.route;
            "/" === n.charAt(0) && (n = n.substr(1));
            var i = !0 === e.caseSensitive, r = this._recognizer.add({path: n, handler: e, caseSensitive: i});
            if (n) {
              var o = e.settings;
              delete e.settings;
              var a = JSON.parse(JSON.stringify(e));
              e.settings = o, a.route = n + "/*childRoute", a.hasChildRouter = !0, this._childRecognizer.add({
                path: a.route,
                handler: a,
                caseSensitive: i
              }), a.navModel = t, a.settings = e.settings, a.navigationStrategy = e.navigationStrategy
            }
            e.navModel = t;
            var s = this.navigation;
            if ((t.order || 0 === t.order) && -1 === s.indexOf(t)) {
              if (!t.href && "" !== t.href && (r.types.dynamics || r.types.stars)) throw new Error('Invalid route config for "' + e.route + '" : dynamic routes must specify an "href:" to be included in the navigation model.');
              "number" != typeof t.order && (t.order = ++this._fallbackOrder), s.push(t), s.sort((function (e, t) {
                return e.order - t.order
              }))
            }
          }
        }, t.prototype.hasRoute = function (e) {
          return !!(this._recognizer.hasRoute(e) || this.parent && this.parent.hasRoute(e))
        }, t.prototype.hasOwnRoute = function (e) {
          return this._recognizer.hasRoute(e)
        }, t.prototype.handleUnknownRoutes = function (e) {
          var t = this;
          if (!e) throw new Error("Invalid unknown route handler");
          this.catchAllHandler = function (n) {
            return t._createRouteConfig(e, n).then((function (e) {
              return n.config = e, n
            }))
          }
        }, t.prototype.updateTitle = function () {
          var e = this.parent;
          if (e) return e.updateTitle();
          var t = this.currentInstruction;
          t && t._updateTitle()
        }, t.prototype.refreshNavigation = function () {
          for (var e = this.navigation, t = 0, n = e.length; t < n; t++) {
            var i = e[t];
            i.config.href ? i.href = h(i.config.href, this.history._hasPushState) : i.href = p(i.relativeHref, this.baseUrl, this.history._hasPushState)
          }
        }, t.prototype.useViewPortDefaults = function (e) {
          var t = e;
          for (var n in t) {
            var i = t[n];
            this.viewPortDefaults[n] = {moduleId: i.moduleId}
          }
        }, t.prototype._refreshBaseUrl = function () {
          var e = this.parent;
          e && (this.baseUrl = b(e, e.currentInstruction))
        }, t.prototype._createNavigationInstruction = function (t, n) {
          void 0 === t && (t = ""), void 0 === n && (n = null);
          var i = t, r = "", o = t.indexOf("?");
          -1 !== o && (i = t.substr(0, o), r = t.substr(o + 1));
          var a = this._recognizer.recognize(t);
          a && a.length || (a = this._childRecognizer.recognize(t));
          var s, c = {
            fragment: i,
            queryString: r,
            config: null,
            parentInstruction: n,
            previousInstruction: this.currentInstruction,
            router: this,
            options: {compareQueryParams: this.options.compareQueryParams}
          };
          if (a && a.length) {
            var u = a[0], d = new l(Object.assign({}, c, {
              params: u.params,
              queryParams: u.queryParams || a.queryParams,
              config: u.config || u.handler
            }));
            s = "function" == typeof u.handler ? x(d, u.handler, u) : u.handler && "function" == typeof u.handler.navigationStrategy ? x(d, u.handler.navigationStrategy, u.handler) : e.resolve(d)
          } else if (this.catchAllHandler) {
            d = new l(Object.assign({}, c, {params: {path: i}, queryParams: a ? a.queryParams : {}, config: null}));
            s = x(d, this.catchAllHandler)
          } else if (this.parent) {
            var h = this._parentCatchAllHandler(this.parent);
            if (h) {
              var p = this._findParentInstructionFromRouter(h, n);
              d = new l(Object.assign({}, c, {
                params: {path: i},
                queryParams: a ? a.queryParams : {},
                router: h,
                parentInstruction: p,
                parentCatchHandler: !0,
                config: null
              }));
              s = x(d, h.catchAllHandler)
            }
          }
          return s && n && (this.baseUrl = b(this.parent, n)), s || e.reject(new Error("Route not found: " + t))
        }, t.prototype._findParentInstructionFromRouter = function (e, t) {
          return t.router === e ? (t.fragment = e.baseUrl, t) : t.parentInstruction ? this._findParentInstructionFromRouter(e, t.parentInstruction) : void 0
        }, t.prototype._parentCatchAllHandler = function (e) {
          return e.catchAllHandler ? e : !!e.parent && this._parentCatchAllHandler(e.parent)
        }, t.prototype._createRouteConfig = function (t, n) {
          var i = this;
          return e.resolve(t).then((function (e) {
            return "string" == typeof e ? {moduleId: e} : "function" == typeof e ? e(n) : e
          })).then((function (e) {
            return "string" == typeof e ? {moduleId: e} : e
          })).then((function (e) {
            return e.route = n.params.path, w(e), e.navModel || (e.navModel = i.createNavModel(e)), e
          }))
        }, t
      }(), b = function (e, t) {
        return "" + (e.baseUrl || "") + (t.getBaseUrl() || "")
      }, w = function (e) {
        if ("object" != typeof e) throw new Error("Invalid Route Config");
        if ("string" != typeof e.route) {
          var t = e.name || "(no name)";
          throw new Error('Invalid Route Config for "' + t + '": You must specify a "route:" pattern.')
        }
        if (!("redirect" in e || e.moduleId || e.navigationStrategy || e.viewPorts)) throw new Error('Invalid Route Config for "' + e.route + '": You must specify a "moduleId:", "redirect:", "navigationStrategy:", or "viewPorts:".')
      }, x = function (t, n, i) {
        return e.resolve(n.call(i, t)).then((function () {
          return "viewPorts" in t.config || (t.config.viewPorts = {default: {moduleId: t.config.moduleId}}), t
        }))
      }, _ = function (t, n) {
        return function (t) {
          return e.resolve({status: n, output: t, completed: "completed" === n})
        }
      }, C = function () {
        function e() {
          this.steps = []
        }

        return e.prototype.addStep = function (e) {
          var t;
          if ("function" == typeof e) t = e; else {
            if ("function" == typeof e.getSteps) {
              for (var n = e.getSteps(), i = 0, r = n.length; i < r; i++) this.addStep(n[i]);
              return this
            }
            t = e.run.bind(e)
          }
          return this.steps.push(t), this
        }, e.prototype.run = function (e) {
          return function (e, t) {
            var n = -1, i = function () {
              if (!(++n < t.length)) return i.complete();
              var r = t[n];
              try {
                return r(e, i)
              } catch (e) {
                return i.reject(e)
              }
            };
            return i.complete = _(i, "completed"), i.cancel = _(i, "canceled"), i.reject = _(i, "rejected"), i
          }(e, this.steps)()
        }, e
      }();

      function k(e) {
        return e && "function" == typeof e.navigate
      }

      var S = function () {
        function e(e, t) {
          void 0 === t && (t = {}), this.url = e, this.options = Object.assign({
            trigger: !0,
            replace: !0
          }, t), this.shouldContinueProcessing = !1
        }

        return e.prototype.setRouter = function (e) {
          this.router = e
        }, e.prototype.navigate = function (e) {
          (this.options.useAppRouter ? e : this.router || e).navigate(this.url, this.options)
        }, e
      }();
      !function () {
        function e(e, t, n) {
          void 0 === t && (t = {}), void 0 === n && (n = {}), this.route = e, this.params = t, this.options = Object.assign({
            trigger: !0,
            replace: !0
          }, n), this.shouldContinueProcessing = !1
        }

        e.prototype.setRouter = function (e) {
          this.router = e
        }, e.prototype.navigate = function (e) {
          (this.options.useAppRouter ? e : this.router || e).navigateToRoute(this.route, this.params, this.options)
        }
      }();

      function E(t, n) {
        var i = t.config;
        if ("redirect" in i) return A(t);
        var r = t.previousInstruction, o = t.router.viewPortDefaults;
        if (r) return T(t, r, o, n);
        var a = {}, s = i.viewPorts;
        for (var c in s) {
          var l = s[c];
          null === l.moduleId && c in o && (l = o[c]), a[c] = {name: c, strategy: "replace", config: l}
        }
        return e.resolve(a)
      }

      var R, A = function (t) {
        var n = t.config, i = t.router;
        return i._createNavigationInstruction(n.redirect).then((function (n) {
          var r = {}, o = t.params, a = n.params;
          for (var s in a) {
            var c = a[s];
            "string" == typeof c && ":" === c[0] ? (c = c.slice(1)) in o && (r[s] = o[c]) : r[s] = a[s]
          }
          var l = i.generate(n.config, r, t.options);
          for (var s in o) l = l.replace(":" + s, o[s]);
          var u = t.queryString;
          return u && (l += "?" + u), e.resolve(new S(l))
        }))
      }, T = function (t, n, i, r) {
        var o = {}, a = t.config, s = j(n, t), c = [], l = n.viewPortInstructions, u = function (n) {
          var u = l[n], d = u.component, h = a.viewPorts, p = n in h ? h[n] : u;
          null === p.moduleId && n in i && (p = i[n]);
          var f = O(t, u, p, s, r),
            v = o[n] = {name: n, config: p, prevComponent: d, prevModuleId: u.moduleId, strategy: f};
          if ("replace" !== f && u.childRouter) {
            var g = t.getWildcardPath(), m = u.childRouter._createNavigationInstruction(g, t).then((function (t) {
              return v.childNavigationInstruction = t, E(t, "invoke-lifecycle" === v.strategy).then((function (n) {
                return n instanceof S ? e.reject(n) : (t.plan = n, null)
              }))
            }));
            c.push(m)
          }
        };
        for (var d in l) u(d);
        return e.all(c).then((function () {
          return o
        }))
      }, O = function (e, t, n, i, r) {
        var o = e.config, a = t.component.viewModel;
        return t.moduleId !== n.moduleId ? "replace" : "determineActivationStrategy" in a ? a.determineActivationStrategy.apply(a, e.lifecycleArgs) : o.activationStrategy ? o.activationStrategy : i || r ? "invoke-lifecycle" : "no-change"
      }, j = function (e, t) {
        var n = e.params, i = t.params, r = t.config.hasChildRouter ? t.getWildCardName() : null;
        for (var o in i) if (o !== r && n[o] !== i[o]) return !0;
        for (var o in n) if (o !== r && n[o] !== i[o]) return !0;
        if (!t.options.compareQueryParams) return !1;
        var a = e.queryParams, s = t.queryParams;
        for (var o in s) if (a[o] !== s[o]) return !0;
        for (var o in a) if (a[o] !== s[o]) return !0;
        return !1
      }, B = function () {
        function e() {
        }

        return e.prototype.run = function (e, t) {
          return E(e).then((function (n) {
            return n instanceof S ? t.cancel(n) : (e.plan = n, t())
          })).catch(t.cancel)
        }, e
      }(), I = function (t, n) {
        var i = L(n).map((function (e) {
          return F(t, e.navigationInstruction, e.viewPortPlan)
        }));
        return e.all(i)
      }, L = function (e, t) {
        void 0 === t && (t = []);
        var n = e.plan;
        for (var i in n) {
          var r = n[i], o = r.childNavigationInstruction;
          if ("replace" === r.strategy) t.push({viewPortPlan: r, navigationInstruction: e}), o && L(o, t); else {
            var a = e.addViewPortInstruction({
              name: i,
              strategy: r.strategy,
              moduleId: r.prevModuleId,
              component: r.prevComponent
            });
            o && (a.childNavigationInstruction = o, L(o, t))
          }
        }
        return t
      }, F = function (t, n, i) {
        var r = i.config, o = r ? r.moduleId : null;
        return M(t, n, r).then((function (r) {
          var a = n.addViewPortInstruction({name: i.name, strategy: i.strategy, moduleId: o, component: r}),
            s = r.childRouter;
          if (s) {
            var c = n.getWildcardPath();
            return s._createNavigationInstruction(c, n).then((function (n) {
              return i.childNavigationInstruction = n, E(n).then((function (i) {
                return i instanceof S ? e.reject(i) : (n.plan = i, a.childNavigationInstruction = n, I(t, n))
              }))
            }))
          }
        }))
      }, M = function (t, n, i) {
        var r = n.router, o = n.lifecycleArgs;
        return e.resolve().then((function () {
          return t.loadRoute(r, i, n)
        })).then((function (e) {
          var t = e.viewModel, n = e.childContainer;
          if (e.router = r, e.config = i, "configureRouter" in t) {
            var a = n.getChildRouter();
            return e.childRouter = a, a.configure((function (e) {
              return t.configureRouter(e, a, o[0], o[1], o[2])
            })).then((function () {
              return e
            }))
          }
          return e
        }))
      }, P = function () {
        function e() {
        }

        return e.prototype.loadRoute = function (e, t, n) {
          throw new Error('Route loaders must implement "loadRoute(router, config, navigationInstruction)".')
        }, e
      }(), N = function () {
        function e(e) {
          this.routeLoader = e
        }

        return e.inject = function () {
          return [P]
        }, e.prototype.run = function (e, t) {
          return I(this.routeLoader, e).then(t, t.cancel)
        }, e
      }(), V = function () {
        function e() {
        }

        return e.prototype.run = function (e, t) {
          return e._commitChanges(!0).then((function () {
            return e._updateTitle(), t()
          }))
        }, e
      }();
      !function (e) {
        e.NoChange = "no-change", e.InvokeLifecycle = "invoke-lifecycle", e.Replace = "replace"
      }(R || (R = {}));
      var D, q, H, $ = "invoke-lifecycle", G = "replace", z = function (e, t, n, i) {
        var r = e.plan, o = U(r, t), a = o.length;

        function s(e) {
          return i || K(e) ? c() : n.cancel(e)
        }

        function c() {
          if (a--) try {
            var i = o[a][t](e);
            return Y(i, s, n.cancel)
          } catch (e) {
            return n.cancel(e)
          }
          return e.router.couldDeactivate = !0, n()
        }

        return c()
      }, U = function (e, t, n) {
        for (var i in void 0 === n && (n = []), e) {
          var r = e[i], o = r.prevComponent;
          if ((r.strategy === $ || r.strategy === G) && o) {
            var a = o.viewModel;
            t in a && n.push(a)
          }
          r.strategy === G && o ? W(o, t, n) : r.childNavigationInstruction && U(r.childNavigationInstruction.plan, t, n)
        }
        return n
      }, W = function (e, t, n) {
        var i = e.childRouter;
        if (i && i.currentInstruction) {
          var r = i.currentInstruction.viewPortInstructions;
          for (var o in r) {
            var a = r[o].component, s = a.viewModel;
            t in s && n.push(s), W(a, t, n)
          }
        }
      }, Q = function (e, t, n, i) {
        var r = J(e, t), o = r.length, a = -1;

        function s() {
          var e;
          if (++a < o) try {
            var c = r[a], l = (e = c.viewModel)[t].apply(e, c.lifecycleArgs);
            return Y(l, (function (e) {
              return function (e, t) {
                return i || K(e, t) ? s() : n.cancel(e)
              }(e, c.router)
            }), n.cancel)
          } catch (e) {
            return n.cancel(e)
          }
          return n()
        }

        return s()
      }, J = function (e, t, n, i) {
        void 0 === n && (n = []);
        var r = e.plan;
        return Object.keys(r).forEach((function (o) {
          var a = r[o], s = e.viewPortInstructions[o], c = s.component, l = c.viewModel;
          (a.strategy === $ || a.strategy === G) && t in l && n.push({
            viewModel: l,
            lifecycleArgs: s.lifecycleArgs,
            router: i
          });
          var u = a.childNavigationInstruction;
          u && J(u, t, n, c.childRouter || i)
        })), n
      }, K = function (e, t) {
        return !(e instanceof Error) && (k(e) ? ("function" == typeof e.setRouter && e.setRouter(t), !!e.shouldContinueProcessing) : void 0 === e || e)
      }, X = function () {
        function e(e) {
          this._subscribed = !0, this._subscription = e(this), this._subscribed || this.unsubscribe()
        }

        return Object.defineProperty(e.prototype, "subscribed", {
          get: function () {
            return this._subscribed
          }, enumerable: !0, configurable: !0
        }), e.prototype.unsubscribe = function () {
          this._subscribed && this._subscription && this._subscription.unsubscribe(), this._subscribed = !1
        }, e
      }(), Y = function (t, n, i) {
        if (t && "function" == typeof t.then) return e.resolve(t).then(n).catch(i);
        if (t && "function" == typeof t.subscribe) {
          var r = t;
          return new X((function (e) {
            return r.subscribe({
              next: function () {
                e.subscribed && (e.unsubscribe(), n(t))
              }, error: function (t) {
                e.subscribed && (e.unsubscribe(), i(t))
              }, complete: function () {
                e.subscribed && (e.unsubscribe(), n(t))
              }
            })
          }))
        }
        try {
          return n(t)
        } catch (e) {
          return i(e)
        }
      }, Z = function () {
        function e() {
        }

        return e.prototype.run = function (e, t) {
          return z(e, "canDeactivate", t)
        }, e
      }(), ee = function () {
        function e() {
        }

        return e.prototype.run = function (e, t) {
          return Q(e, "canActivate", t)
        }, e
      }(), te = function () {
        function e() {
        }

        return e.prototype.run = function (e, t) {
          return z(e, "deactivate", t, !0)
        }, e
      }(), ne = function () {
        function e() {
        }

        return e.prototype.run = function (e, t) {
          return Q(e, "activate", t, !0)
        }, e
      }(), ie = function () {
        function e(e, t, n) {
          this.steps = [], this.container = e, this.slotName = t, this.slotAlias = n
        }

        return e.prototype.getSteps = function () {
          var e = this;
          return this.steps.map((function (t) {
            return e.container.get(t)
          }))
        }, e
      }(), re = function () {
        function e(e) {
          this.container = e, this.steps = [B, Z, N, oe(e, "authorize"), ee, oe(e, "preActivate", "modelbind"), te, ne, oe(e, "preRender", "precommit"), V, oe(e, "postRender", "postcomplete")]
        }

        return e.inject = function () {
          return [r.a]
        }, e.prototype.createPipeline = function (e) {
          var t = this;
          void 0 === e && (e = !0);
          var n = new C;
          return this.steps.forEach((function (i) {
            (e || i !== Z) && n.addStep(t.container.get(i))
          })), n
        }, e.prototype._findStep = function (e) {
          return this.steps.find((function (t) {
            return t.slotName === e || t.slotAlias === e
          }))
        }, e.prototype.addStep = function (e, t) {
          var n = this._findStep(e);
          if (!n) throw new Error("Invalid pipeline slot name: " + e + ".");
          var i = n.steps;
          i.includes(t) || i.push(t)
        }, e.prototype.removeStep = function (e, t) {
          var n = this._findStep(e);
          if (n) {
            var i = n.steps;
            i.splice(i.indexOf(t), 1)
          }
        }, e.prototype._clearSteps = function (e) {
          void 0 === e && (e = "");
          var t = this._findStep(e);
          t && (t.steps = [])
        }, e.prototype.reset = function () {
          this._clearSteps("authorize"), this._clearSteps("preActivate"), this._clearSteps("preRender"), this._clearSteps("postRender")
        }, e
      }(), oe = function (e, t, n) {
        return new ie(e, t, n)
      }, ae = Object(i.getLogger)("app-router"), se = function (t) {
        function n(e, n, i, r) {
          var o = t.call(this, e, n) || this;
          return o.pipelineProvider = i, o.events = r, o
        }

        return function (e, t) {
          function n() {
            this.constructor = e
          }

          c(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }(n, t), n.inject = function () {
          return [r.a, o.a, re, s.a]
        }, n.prototype.reset = function () {
          t.prototype.reset.call(this), this.maxInstructionCount = 10, this._queue ? this._queue.length = 0 : this._queue = []
        }, n.prototype.loadUrl = function (e) {
          var t = this;
          return this._createNavigationInstruction(e).then((function (e) {
            return t._queueInstruction(e)
          })).catch((function (e) {
            ae.error(e), ue(t)
          }))
        }, n.prototype.registerViewPort = function (n, i) {
          var r = this, o = n;
          if (t.prototype.registerViewPort.call(this, o, i), this.isActive) this._dequeueInstruction(); else {
            var a = this._findViewModel(o);
            if ("configureRouter" in a) {
              if (!this.isConfigured) {
                var s = this._resolveConfiguredPromise;
                return this._resolveConfiguredPromise = function () {
                }, this.configure((function (t) {
                  return e.resolve(a.configureRouter(t, r)).then((function () {
                    return t
                  }))
                })).then((function () {
                  r.activate(), s()
                }))
              }
            } else this.activate()
          }
          return e.resolve()
        }, n.prototype.activate = function (e) {
          this.isActive || (this.isActive = !0, this.options = Object.assign({routeHandler: this.loadUrl.bind(this)}, this.options, e), this.history.activate(this.options), this._dequeueInstruction())
        }, n.prototype.deactivate = function () {
          this.isActive = !1, this.history.deactivate()
        }, n.prototype._queueInstruction = function (t) {
          var n = this;
          return new e((function (e) {
            t.resolve = e, n._queue.unshift(t), n._dequeueInstruction()
          }))
        }, n.prototype._dequeueInstruction = function (t) {
          var n = this;
          return void 0 === t && (t = 0), e.resolve().then((function () {
            if (!n.isNavigating || t) {
              var e = n._queue.shift();
              if (n._queue.length = 0, e) {
                n.isNavigating = !0;
                var i = n.history.getState("NavigationTracker"), r = n.currentNavigationTracker;
                i || r ? i ? r ? r < i ? n.isNavigatingForward = !0 : r > i && (n.isNavigatingBack = !0) : n.isNavigatingRefresh = !0 : n.isNavigatingNew = !0 : (n.isNavigatingFirst = !0, n.isNavigatingNew = !0), i || (i = Date.now(), n.history.setState("NavigationTracker", i)), n.currentNavigationTracker = i, e.previousInstruction = n.currentInstruction;
                var o = n.maxInstructionCount;
                if (t) {
                  if (t === o - 1) return ae.error(t + 1 + " navigation instructions have been attempted without success. Restoring last known good location."), ue(n), n._dequeueInstruction(t + 1);
                  if (t > o) throw new Error("Maximum navigation attempts exceeded. Giving up.")
                } else n.events.publish("router:navigation:processing", {instruction: e});
                return n.pipelineProvider.createPipeline(!n.couldDeactivate).run(e).then((function (i) {
                  return ce(e, i, t, n)
                })).catch((function (e) {
                  return {output: e instanceof Error ? e : new Error(e)}
                })).then((function (i) {
                  return le(e, i, !!t, n)
                }))
              }
            }
          }))
        }, n.prototype._findViewModel = function (e) {
          if (this.container.viewModel) return this.container.viewModel;
          if (e.container) for (var t = e.container; t;) {
            if (t.viewModel) return this.container.viewModel = t.viewModel, t.viewModel;
            t = t.parent
          }
        }, n
      }(y), ce = function (t, n, i, r) {
        n && "completed" in n && "output" in n || ((n = n || {}).output = new Error("Expected router pipeline to return a navigation result, but got [" + JSON.stringify(n) + "] instead."));
        var o = null, a = null;
        return k(n.output) ? a = n.output.navigate(r) : (o = n, n.completed || (n.output instanceof Error && ae.error(n.output.toString()), ue(r))), e.resolve(a).then((function (e) {
          return r._dequeueInstruction(i + 1)
        })).then((function (e) {
          return o || e || n
        }))
      }, le = function (e, t, n, i) {
        e.resolve(t);
        var r = i.events, o = {instruction: e, result: t};
        if (n) r.publish("router:navigation:child:complete", o); else {
          i.isNavigating = !1, i.isExplicitNavigation = !1, i.isExplicitNavigationBack = !1, i.isNavigatingFirst = !1, i.isNavigatingNew = !1, i.isNavigatingRefresh = !1, i.isNavigatingForward = !1, i.isNavigatingBack = !1, i.couldDeactivate = !1;
          var a = void 0;
          if (t.output instanceof Error) a = "router:navigation:error"; else if (t.completed) {
            var s = e.queryString ? "?" + e.queryString : "";
            i.history.previousLocation = e.fragment + s, a = "router:navigation:success"
          } else a = "router:navigation:canceled";
          r.publish(a, o), r.publish("router:navigation:complete", o)
        }
        return t
      }, ue = function (e) {
        var t = e.history.previousLocation;
        t ? e.navigate(t, {trigger: !1, replace: !0}) : e.fallbackRoute ? e.navigate(e.fallbackRoute, {
          trigger: !0,
          replace: !0
        }) : ae.error("Router navigation failed, and no previous location or fallbackRoute could be restored.")
      };
      !function (e) {
        e.Completed = "completed", e.Canceled = "canceled", e.Rejected = "rejected", e.Running = "running"
      }(D || (D = {})), function (e) {
        e.Processing = "router:navigation:processing", e.Error = "router:navigation:error", e.Canceled = "router:navigation:canceled", e.Complete = "router:navigation:complete", e.Success = "router:navigation:success", e.ChildComplete = "router:navigation:child:complete"
      }(q || (q = {})), function (e) {
        e.Authorize = "authorize", e.PreActivate = "preActivate", e.PreRender = "preRender", e.PostRender = "postRender"
      }(H || (H = {}))
    }).call(this, n(8))
  }, 12: function (e, t) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || new Function("return this")()
    } catch (e) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, 13: function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
      return a
    }));
    var i = n(0), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

    function o(e) {
      return function () {
        var t = setTimeout(i, 0), n = setInterval(i, 50);

        function i() {
          clearTimeout(t), clearInterval(n), e()
        }
      }
    }

    var a = function () {
      function e() {
        var e, t, n, r, a, s = this;
        this.flushing = !1, this.longStacks = !1, this.microTaskQueue = [], this.microTaskQueueCapacity = 1024, this.taskQueue = [], i.c.mutationObserver ? this.requestFlushMicroTaskQueue = (e = function () {
          return s.flushMicroTaskQueue()
        }, t = i.b.createMutationObserver(e), n = "a", r = i.b.createTextNode("a"), (a = Object.create(null)).a = "b", a.b = "a", t.observe(r, {characterData: !0}), function () {
          r.data = n = a[n]
        }) : this.requestFlushMicroTaskQueue = o((function () {
          return s.flushMicroTaskQueue()
        })), this.requestFlushTaskQueue = o((function () {
          return s.flushTaskQueue()
        }))
      }

      return e.prototype._flushQueue = function (e, t) {
        var n = 0, i = void 0;
        try {
          for (this.flushing = !0; n < e.length;) if (i = e[n], this.longStacks && (this.stack = "string" == typeof i.stack ? i.stack : void 0), i.call(), ++n > t) {
            for (var o = 0, a = e.length - n; o < a; o++) e[o] = e[o + n];
            e.length -= n, n = 0
          }
        } catch (e) {
          !function (e, t, n) {
            n && t.stack && "object" === (void 0 === e ? "undefined" : r(e)) && null !== e && (e.stack = s(e.stack) + t.stack), "onError" in t ? t.onError(e) : setTimeout((function () {
              throw e
            }), 0)
          }(e, i, this.longStacks)
        } finally {
          this.flushing = !1
        }
      }, e.prototype.queueMicroTask = function (e) {
        this.microTaskQueue.length < 1 && this.requestFlushMicroTaskQueue(), this.longStacks && (e.stack = this.prepareQueueStack("\nEnqueued in MicroTaskQueue by:\n")), this.microTaskQueue.push(e)
      }, e.prototype.queueTask = function (e) {
        this.taskQueue.length < 1 && this.requestFlushTaskQueue(), this.longStacks && (e.stack = this.prepareQueueStack("\nEnqueued in TaskQueue by:\n")), this.taskQueue.push(e)
      }, e.prototype.flushTaskQueue = function () {
        var e = this.taskQueue;
        this.taskQueue = [], this._flushQueue(e, Number.MAX_VALUE)
      }, e.prototype.flushMicroTaskQueue = function () {
        var e = this.microTaskQueue;
        this._flushQueue(e, this.microTaskQueueCapacity), e.length = 0
      }, e.prototype.prepareQueueStack = function (e) {
        var t = e + function (e) {
          return e.replace(/^[\s\S]*?\bqueue(Micro)?Task\b[^\n]*\n/, "")
        }(function () {
          var e = new Error;
          if (e.stack) return e.stack;
          try {
            throw e
          } catch (e) {
            return e.stack
          }
        }());
        return "string" == typeof this.stack && (t = s(t) + this.stack), t
      }, e
    }();

    function s(e) {
      var t = e.lastIndexOf("flushMicroTaskQueue");
      return t < 0 && (t = e.lastIndexOf("flushTaskQueue")) < 0 ? e : (t = e.lastIndexOf("\n", t)) < 0 ? e : e.substr(0, t)
    }
  }, 14: function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
      return r
    }));
    var i = n(5);

    class r {
      constructor(e) {
        this.acctList = [], this.listTotal = 0, this.id = e
      }

      sortAcctList() {
        this.acctList.sort((e, t) => e.compareTo(t))
      }

      reindexAcctList() {
        for (let e = 0; e <= this.acctList.length - 1; e++) this.acctList[e].intraSideIndex = e
      }

      refresh() {
        this.sortAcctList(), this.reindexAcctList(), this.listTotal = 0;
        for (let e of this.acctList) e instanceof i.a && (e.refresh(), this.listTotal += e.endingBalance)
      }

      clone() {
        let e = new r(this.id);
        for (let t of this.acctList) {
          let n = t.clone();
          e.acctList.push(n)
        }
        return e.listTotal = this.listTotal, e
      }
    }
  }, 15: function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
      return i
    }));

    class i {
      constructor(e, t, n, i) {
        this.totalChangesAssets = 0, this.totalChangesEquities = 0, this.bchgList = [], this.id = e, this.parentJrnl = t, this.date = n, this.intraDateSorter = i
      }

      compareToInJrnl(e) {
        return this.date == e.date ? this.intraDateSorter > e.intraDateSorter ? 1 : -1 : this.date > e.date ? 1 : -1
      }

      sortBchgList() {
        this.bchgList.sort((e, t) => e.compareToInTran(t))
      }

      refresh() {
        this.totalChangesAssets = 0, this.totalChangesEquities = 0;
        let e = 0;
        for (let t of this.bchgList) if (t.intraTranIndex = e++, t.targetAcct) switch (t.targetAcct.parentFaeSide.id) {
          case"Assets":
            this.totalChangesAssets += t.amt;
            break;
          case"Equities":
            this.totalChangesEquities += t.amt;
            break;
          default:
            throw new Error(`acct.parentFaeSide.id has invalid value: "${t.targetAcct.parentFaeSide.id}"`)
        }
      }

      register() {
        this.parentJrnl.tranList.push(this);
        for (let e of this.bchgList) e.registerToAcct(), e.targetAcct.refresh()
      }

      unregister() {
        for (let e of this.bchgList) e.unregisterFromAcct();
        this.bchgList = [];
        let e = this.parentJrnl.tranList.findIndex(e => e.id == this.id);
        this.parentJrnl.tranList.splice(e, 1)
      }

      clone() {
        let e = new i(this.id, this.parentJrnl, this.date, this.intraDateSorter);
        e.totalChangesAssets = this.totalChangesAssets, e.totalChangesEquities = this.totalChangesEquities;
        for (let t of this.bchgList) {
          let n = t.clone(e, t.targetAcct);
          e.bchgList.push(n)
        }
        return e
      }
    }
  }, 16: function (e, t) {
    var n, i, r = e.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined")
    }

    function a() {
      throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
      try {
        return n(e, 0)
      } catch (t) {
        try {
          return n.call(null, e, 0)
        } catch (t) {
          return n.call(this, e, 0)
        }
      }
    }

    !function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o
      } catch (e) {
        n = o
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : a
      } catch (e) {
        i = a
      }
    }();
    var c, l = [], u = !1, d = -1;

    function h() {
      u && c && (u = !1, c.length ? l = c.concat(l) : d = -1, l.length && p())
    }

    function p() {
      if (!u) {
        var e = s(h);
        u = !0;
        for (var t = l.length; t;) {
          for (c = l, l = []; ++d < t;) c && c[d].run();
          d = -1, t = l.length
        }
        c = null, u = !1, function (e) {
          if (i === clearTimeout) return clearTimeout(e);
          if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
          try {
            i(e)
          } catch (t) {
            try {
              return i.call(null, e)
            } catch (t) {
              return i.call(this, e)
            }
          }
        }(e)
      }
    }

    function f(e, t) {
      this.fun = e, this.array = t
    }

    function v() {
    }

    r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      l.push(new f(e, t)), 1 !== l.length || u || s(p)
    }, f.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = v, r.addListener = v, r.once = v, r.off = v, r.removeListener = v, r.removeAllListeners = v, r.emit = v, r.prependListener = v, r.prependOnceListener = v, r.listeners = function (e) {
      return []
    }, r.binding = function (e) {
      throw new Error("process.binding is not supported")
    }, r.cwd = function () {
      return "/"
    }, r.chdir = function (e) {
      throw new Error("process.chdir is not supported")
    }, r.umask = function () {
      return 0
    }
  }, 17: function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", (function () {
        return r
      })), n.d(t, "b", (function () {
        return o
      })), n.d(t, "c", (function () {
        return a
      }));
      var i = Object.assign || function (e) {
        for (var t, n = 1, i = arguments.length; n < i; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
      };

      function r(t, n) {
        void 0 === n && (n = {present: !0, interval: 50, timeout: 5e3});
        var r = !1;
        return n = i({present: !0, interval: 50, timeout: 5e3}, n), e.race([new e((function (e, t) {
          return setTimeout((function () {
            r = !0, t(new Error(n.present ? "Element not found" : "Element not removed"))
          }), n.timeout)
        })), function i() {
          var o = t(), a = null !== o && (!(o instanceof NodeList) && !o.jquery || o.length > 0);
          return !n.present == !a || r ? e.resolve(o) : new e((function (e) {
            return setTimeout(e, n.interval)
          })).then(i)
        }()])
      }

      function o(e, t) {
        return r((function () {
          return document.querySelector(e)
        }), t)
      }

      function a(e, t) {
        return r((function () {
          return document.querySelectorAll(e)
        }), t)
      }
    }).call(this, n(8))
  }, 18: function (e, t, n) {
    "use strict";

    function i(e) {
      throw new Error("History must implement " + e + "().")
    }

    n.d(t, "a", (function () {
      return r
    }));
    var r = function () {
      function e() {
      }

      return e.prototype.activate = function (e) {
        i("activate")
      }, e.prototype.deactivate = function () {
        i("deactivate")
      }, e.prototype.getAbsoluteRoot = function () {
        i("getAbsoluteRoot")
      }, e.prototype.navigate = function (e, t) {
        i("navigate")
      }, e.prototype.navigateBack = function () {
        i("navigateBack")
      }, e.prototype.setTitle = function (e) {
        i("setTitle")
      }, e.prototype.setState = function (e, t) {
        i("setState")
      }, e.prototype.getState = function (e) {
        i("getState")
      }, e.prototype.getHistoryIndex = function () {
        i("getHistoryIndex")
      }, e.prototype.go = function (e) {
        i("go")
      }, e
    }()
  }, 19: function (e, t, n) {
    (function (t, n, i, r) {
      var o;
      o = function () {
        var e, o, a;
        return function e(t, n, i) {
          function r(a, s) {
            if (!n[a]) {
              if (!t[a]) {
                var c = "function" == typeof _dereq_ && _dereq_;
                if (!s && c) return c(a, !0);
                if (o) return o(a, !0);
                var l = new Error("Cannot find module '" + a + "'");
                throw l.code = "MODULE_NOT_FOUND", l
              }
              var u = n[a] = {exports: {}};
              t[a][0].call(u.exports, (function (e) {
                var n = t[a][1][e];
                return r(n || e)
              }), u, u.exports, e, t, n, i)
            }
            return n[a].exports
          }

          for (var o = "function" == typeof _dereq_ && _dereq_, a = 0; a < i.length; a++) r(i[a]);
          return r
        }({
          1: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
              var t = e._SomePromiseArray;

              function n(e) {
                var n = new t(e), i = n.promise();
                return n.setHowMany(1), n.setUnwrap(), n.init(), i
              }

              e.any = function (e) {
                return n(e)
              }, e.prototype.any = function () {
                return n(this)
              }
            }
          }, {}], 2: [function (e, n, i) {
            "use strict";
            var r;
            try {
              throw new Error
            } catch (e) {
              r = e
            }
            var o = e("./schedule"), a = e("./queue");

            function s() {
              this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new a(16), this._normalQueue = new a(16), this._haveDrainedQueues = !1;
              var e = this;
              this.drainQueues = function () {
                e._drainQueues()
              }, this._schedule = o
            }

            function c(e) {
              for (; e.length() > 0;) l(e)
            }

            function l(e) {
              var t = e.shift();
              if ("function" != typeof t) t._settlePromises(); else {
                var n = e.shift(), i = e.shift();
                t.call(n, i)
              }
            }

            s.prototype.setScheduler = function (e) {
              var t = this._schedule;
              return this._schedule = e, this._customScheduler = !0, t
            }, s.prototype.hasCustomScheduler = function () {
              return this._customScheduler
            }, s.prototype.haveItemsQueued = function () {
              return this._isTickUsed || this._haveDrainedQueues
            }, s.prototype.fatalError = function (e, n) {
              n ? (t.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n"), t.exit(2)) : this.throwLater(e)
            }, s.prototype.throwLater = function (e, t) {
              if (1 === arguments.length && (t = e, e = function () {
                throw t
              }), "undefined" != typeof setTimeout) setTimeout((function () {
                e(t)
              }), 0); else try {
                this._schedule((function () {
                  e(t)
                }))
              } catch (e) {
                throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
              }
            }, s.prototype.invokeLater = function (e, t, n) {
              this._lateQueue.push(e, t, n), this._queueTick()
            }, s.prototype.invoke = function (e, t, n) {
              this._normalQueue.push(e, t, n), this._queueTick()
            }, s.prototype.settlePromises = function (e) {
              this._normalQueue._pushOne(e), this._queueTick()
            }, s.prototype._drainQueues = function () {
              c(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, c(this._lateQueue)
            }, s.prototype._queueTick = function () {
              this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues))
            }, s.prototype._reset = function () {
              this._isTickUsed = !1
            }, n.exports = s, n.exports.firstLineError = r
          }, {"./queue": 26, "./schedule": 29}], 3: [function (e, t, n) {
            "use strict";
            t.exports = function (e, t, n, i) {
              var r = !1, o = function (e, t) {
                this._reject(t)
              }, a = function (e, t) {
                t.promiseRejectionQueued = !0, t.bindingPromise._then(o, o, null, this, e)
              }, s = function (e, t) {
                0 == (50397184 & this._bitField) && this._resolveCallback(t.target)
              }, c = function (e, t) {
                t.promiseRejectionQueued || this._reject(e)
              };
              e.prototype.bind = function (o) {
                r || (r = !0, e.prototype._propagateFrom = i.propagateFromFunction(), e.prototype._boundValue = i.boundValueFunction());
                var l = n(o), u = new e(t);
                u._propagateFrom(this, 1);
                var d = this._target();
                if (u._setBoundTo(l), l instanceof e) {
                  var h = {promiseRejectionQueued: !1, promise: u, target: d, bindingPromise: l};
                  d._then(t, a, void 0, u, h), l._then(s, c, void 0, u, h), u._setOnCancel(l)
                } else u._resolveCallback(d);
                return u
              }, e.prototype._setBoundTo = function (e) {
                void 0 !== e ? (this._bitField = 2097152 | this._bitField, this._boundTo = e) : this._bitField = -2097153 & this._bitField
              }, e.prototype._isBound = function () {
                return 2097152 == (2097152 & this._bitField)
              }, e.bind = function (t, n) {
                return e.resolve(n).bind(t)
              }
            }
          }, {}], 4: [function (e, t, i) {
            "use strict";
            var r;
            void 0 !== n && (r = n);
            var o = e("./promise")();
            o.noConflict = function () {
              try {
                n === o && (n = r)
              } catch (e) {
              }
              return o
            }, t.exports = o
          }, {"./promise": 22}], 5: [function (e, t, n) {
            "use strict";
            var i = Object.create;
            if (i) {
              var r = i(null), o = i(null);
              r[" size"] = o[" size"] = 0
            }
            t.exports = function (t) {
              var n = e("./util"), i = n.canEvaluate;

              function r(e) {
                return function (e, i) {
                  var r;
                  if (null != e && (r = e[i]), "function" != typeof r) {
                    var o = "Object " + n.classString(e) + " has no method '" + n.toString(i) + "'";
                    throw new t.TypeError(o)
                  }
                  return r
                }(e, this.pop()).apply(e, this)
              }

              function o(e) {
                return e[this]
              }

              function a(e) {
                var t = +this;
                return t < 0 && (t = Math.max(0, t + e.length)), e[t]
              }

              n.isIdentifier, t.prototype.call = function (e) {
                var t = [].slice.call(arguments, 1);
                return t.push(e), this._then(r, void 0, void 0, t, void 0)
              }, t.prototype.get = function (e) {
                var t;
                if ("number" == typeof e) t = a; else if (i) {
                  var n = (void 0)(e);
                  t = null !== n ? n : o
                } else t = o;
                return this._then(t, void 0, void 0, e, void 0)
              }
            }
          }, {"./util": 36}], 6: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i, r) {
              var o = e("./util"), a = o.tryCatch, s = o.errorObj, c = t._async;
              t.prototype.break = t.prototype.cancel = function () {
                if (!r.cancellation()) return this._warn("cancellation is disabled");
                for (var e = this, t = e; e._isCancellable();) {
                  if (!e._cancelBy(t)) {
                    t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
                    break
                  }
                  var n = e._cancellationParent;
                  if (null == n || !n._isCancellable()) {
                    e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
                    break
                  }
                  e._isFollowing() && e._followee().cancel(), e._setWillBeCancelled(), t = e, e = n
                }
              }, t.prototype._branchHasCancelled = function () {
                this._branchesRemainingToCancel--
              }, t.prototype._enoughBranchesHaveCancelled = function () {
                return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0
              }, t.prototype._cancelBy = function (e) {
                return e === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), !0))
              }, t.prototype._cancelBranched = function () {
                this._enoughBranchesHaveCancelled() && this._cancel()
              }, t.prototype._cancel = function () {
                this._isCancellable() && (this._setCancelled(), c.invoke(this._cancelPromises, this, void 0))
              }, t.prototype._cancelPromises = function () {
                this._length() > 0 && this._settlePromises()
              }, t.prototype._unsetOnCancel = function () {
                this._onCancelField = void 0
              }, t.prototype._isCancellable = function () {
                return this.isPending() && !this._isCancelled()
              }, t.prototype.isCancellable = function () {
                return this.isPending() && !this.isCancelled()
              }, t.prototype._doInvokeOnCancel = function (e, t) {
                if (o.isArray(e)) for (var n = 0; n < e.length; ++n) this._doInvokeOnCancel(e[n], t); else if (void 0 !== e) if ("function" == typeof e) {
                  if (!t) {
                    var i = a(e).call(this._boundValue());
                    i === s && (this._attachExtraTrace(i.e), c.throwLater(i.e))
                  }
                } else e._resultCancelled(this)
              }, t.prototype._invokeOnCancel = function () {
                var e = this._onCancel();
                this._unsetOnCancel(), c.invoke(this._doInvokeOnCancel, this, e)
              }, t.prototype._invokeInternalOnCancel = function () {
                this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel())
              }, t.prototype._resultCancelled = function () {
                this.cancel()
              }
            }
          }, {"./util": 36}], 7: [function (e, t, n) {
            "use strict";
            t.exports = function (t) {
              var n = e("./util"), i = e("./es5").keys, r = n.tryCatch, o = n.errorObj;
              return function (e, a, s) {
                return function (c) {
                  var l = s._boundValue();
                  e:for (var u = 0; u < e.length; ++u) {
                    var d = e[u];
                    if (d === Error || null != d && d.prototype instanceof Error) {
                      if (c instanceof d) return r(a).call(l, c)
                    } else if ("function" == typeof d) {
                      var h = r(d).call(l, c);
                      if (h === o) return h;
                      if (h) return r(a).call(l, c)
                    } else if (n.isObject(c)) {
                      for (var p = i(d), f = 0; f < p.length; ++f) {
                        var v = p[f];
                        if (d[v] != c[v]) continue e
                      }
                      return r(a).call(l, c)
                    }
                  }
                  return t
                }
              }
            }
          }, {"./es5": 13, "./util": 36}], 8: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
              var t = !1, n = [];

              function i() {
                this._trace = new i.CapturedTrace(r())
              }

              function r() {
                var e = n.length - 1;
                if (e >= 0) return n[e]
              }

              return e.prototype._promiseCreated = function () {
              }, e.prototype._pushContext = function () {
              }, e.prototype._popContext = function () {
                return null
              }, e._peekContext = e.prototype._peekContext = function () {
              }, i.prototype._pushContext = function () {
                void 0 !== this._trace && (this._trace._promiseCreated = null, n.push(this._trace))
              }, i.prototype._popContext = function () {
                if (void 0 !== this._trace) {
                  var e = n.pop(), t = e._promiseCreated;
                  return e._promiseCreated = null, t
                }
                return null
              }, i.CapturedTrace = null, i.create = function () {
                if (t) return new i
              }, i.deactivateLongStackTraces = function () {
              }, i.activateLongStackTraces = function () {
                var n = e.prototype._pushContext, o = e.prototype._popContext, a = e._peekContext,
                  s = e.prototype._peekContext, c = e.prototype._promiseCreated;
                i.deactivateLongStackTraces = function () {
                  e.prototype._pushContext = n, e.prototype._popContext = o, e._peekContext = a, e.prototype._peekContext = s, e.prototype._promiseCreated = c, t = !1
                }, t = !0, e.prototype._pushContext = i.prototype._pushContext, e.prototype._popContext = i.prototype._popContext, e._peekContext = e.prototype._peekContext = r, e.prototype._promiseCreated = function () {
                  var e = this._peekContext();
                  e && null == e._promiseCreated && (e._promiseCreated = this)
                }
              }, i
            }
          }, {}], 9: [function (e, n, i) {
            "use strict";
            n.exports = function (n, i, r, o) {
              var a, s, c, l, u = n._async, d = e("./errors").Warning, h = e("./util"), p = e("./es5"),
                f = h.canAttachTrace, v = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
                g = /\((?:timers\.js):\d+:\d+\)/, m = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, y = null, b = null, w = !1,
                x = !(0 == h.env("BLUEBIRD_DEBUG")),
                _ = !(0 == h.env("BLUEBIRD_WARNINGS") || !x && !h.env("BLUEBIRD_WARNINGS")),
                C = !(0 == h.env("BLUEBIRD_LONG_STACK_TRACES") || !x && !h.env("BLUEBIRD_LONG_STACK_TRACES")),
                k = 0 != h.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (_ || !!h.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
              !function () {
                var e = [];

                function t() {
                  for (var t = 0; t < e.length; ++t) e[t]._notifyUnhandledRejection();
                  i()
                }

                function i() {
                  e.length = 0
                }

                l = function (n) {
                  e.push(n), setTimeout(t, 1)
                }, p.defineProperty(n, "_unhandledRejectionCheck", {value: t}), p.defineProperty(n, "_unhandledRejectionClear", {value: i})
              }(), n.prototype.suppressUnhandledRejections = function () {
                var e = this._target();
                e._bitField = -1048577 & e._bitField | 524288
              }, n.prototype._ensurePossibleRejectionHandled = function () {
                0 == (524288 & this._bitField) && (this._setRejectionIsUnhandled(), l(this))
              }, n.prototype._notifyUnhandledRejectionIsHandled = function () {
                Q("rejectionHandled", a, void 0, this)
              }, n.prototype._setReturnedNonUndefined = function () {
                this._bitField = 268435456 | this._bitField
              }, n.prototype._returnedNonUndefined = function () {
                return 0 != (268435456 & this._bitField)
              }, n.prototype._notifyUnhandledRejection = function () {
                if (this._isRejectionUnhandled()) {
                  var e = this._settledValue();
                  this._setUnhandledRejectionIsNotified(), Q("unhandledRejection", s, e, this)
                }
              }, n.prototype._setUnhandledRejectionIsNotified = function () {
                this._bitField = 262144 | this._bitField
              }, n.prototype._unsetUnhandledRejectionIsNotified = function () {
                this._bitField = -262145 & this._bitField
              }, n.prototype._isUnhandledRejectionNotified = function () {
                return (262144 & this._bitField) > 0
              }, n.prototype._setRejectionIsUnhandled = function () {
                this._bitField = 1048576 | this._bitField
              }, n.prototype._unsetRejectionIsUnhandled = function () {
                this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled())
              }, n.prototype._isRejectionUnhandled = function () {
                return (1048576 & this._bitField) > 0
              }, n.prototype._warn = function (e, t, n) {
                return G(e, t, n || this)
              }, n.onPossiblyUnhandledRejection = function (e) {
                var t = n._getContext();
                s = h.contextBind(t, e)
              }, n.onUnhandledRejectionHandled = function (e) {
                var t = n._getContext();
                a = h.contextBind(t, e)
              };
              var S = function () {
              };
              n.longStackTraces = function () {
                if (u.haveItemsQueued() && !ne.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                if (!ne.longStackTraces && K()) {
                  var e = n.prototype._captureStackTrace, t = n.prototype._attachExtraTrace,
                    r = n.prototype._dereferenceTrace;
                  ne.longStackTraces = !0, S = function () {
                    if (u.haveItemsQueued() && !ne.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                    n.prototype._captureStackTrace = e, n.prototype._attachExtraTrace = t, n.prototype._dereferenceTrace = r, i.deactivateLongStackTraces(), ne.longStackTraces = !1
                  }, n.prototype._captureStackTrace = q, n.prototype._attachExtraTrace = H, n.prototype._dereferenceTrace = $, i.activateLongStackTraces()
                }
              }, n.hasLongStackTraces = function () {
                return ne.longStackTraces && K()
              };
              var E = {
                unhandledrejection: {
                  before: function () {
                    var e = h.global.onunhandledrejection;
                    return h.global.onunhandledrejection = null, e
                  }, after: function (e) {
                    h.global.onunhandledrejection = e
                  }
                }, rejectionhandled: {
                  before: function () {
                    var e = h.global.onrejectionhandled;
                    return h.global.onrejectionhandled = null, e
                  }, after: function (e) {
                    h.global.onrejectionhandled = e
                  }
                }
              }, R = function () {
                var e = function (e, t) {
                  if (!e) return !h.global.dispatchEvent(t);
                  var n;
                  try {
                    return n = e.before(), !h.global.dispatchEvent(t)
                  } finally {
                    e.after(n)
                  }
                };
                try {
                  if ("function" == typeof CustomEvent) {
                    var t = new CustomEvent("CustomEvent");
                    return h.global.dispatchEvent(t), function (t, n) {
                      t = t.toLowerCase();
                      var i = new CustomEvent(t, {detail: n, cancelable: !0});
                      return p.defineProperty(i, "promise", {value: n.promise}), p.defineProperty(i, "reason", {value: n.reason}), e(E[t], i)
                    }
                  }
                  return "function" == typeof Event ? (t = new Event("CustomEvent"), h.global.dispatchEvent(t), function (t, n) {
                    t = t.toLowerCase();
                    var i = new Event(t, {cancelable: !0});
                    return i.detail = n, p.defineProperty(i, "promise", {value: n.promise}), p.defineProperty(i, "reason", {value: n.reason}), e(E[t], i)
                  }) : ((t = document.createEvent("CustomEvent")).initCustomEvent("testingtheevent", !1, !0, {}), h.global.dispatchEvent(t), function (t, n) {
                    t = t.toLowerCase();
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(t, !1, !0, n), e(E[t], i)
                  })
                } catch (e) {
                }
                return function () {
                  return !1
                }
              }(), A = h.isNode ? function () {
                return t.emit.apply(t, arguments)
              } : h.global ? function (e) {
                var t = "on" + e.toLowerCase(), n = h.global[t];
                return !!n && (n.apply(h.global, [].slice.call(arguments, 1)), !0)
              } : function () {
                return !1
              };

              function T(e, t) {
                return {promise: t}
              }

              var O = {
                promiseCreated: T,
                promiseFulfilled: T,
                promiseRejected: T,
                promiseResolved: T,
                promiseCancelled: T,
                promiseChained: function (e, t, n) {
                  return {promise: t, child: n}
                },
                warning: function (e, t) {
                  return {warning: t}
                },
                unhandledRejection: function (e, t, n) {
                  return {reason: t, promise: n}
                },
                rejectionHandled: T
              }, j = function (e) {
                var t = !1;
                try {
                  t = A.apply(null, arguments)
                } catch (e) {
                  u.throwLater(e), t = !0
                }
                var n = !1;
                try {
                  n = R(e, O[e].apply(null, arguments))
                } catch (e) {
                  u.throwLater(e), n = !0
                }
                return n || t
              };

              function B() {
                return !1
              }

              function I(e, t, n) {
                var i = this;
                try {
                  e(t, n, (function (e) {
                    if ("function" != typeof e) throw new TypeError("onCancel must be a function, got: " + h.toString(e));
                    i._attachCancellationCallback(e)
                  }))
                } catch (e) {
                  return e
                }
              }

              function L(e) {
                if (!this._isCancellable()) return this;
                var t = this._onCancel();
                void 0 !== t ? h.isArray(t) ? t.push(e) : this._setOnCancel([t, e]) : this._setOnCancel(e)
              }

              function F() {
                return this._onCancelField
              }

              function M(e) {
                this._onCancelField = e
              }

              function P() {
                this._cancellationParent = void 0, this._onCancelField = void 0
              }

              function N(e, t) {
                if (0 != (1 & t)) {
                  this._cancellationParent = e;
                  var n = e._branchesRemainingToCancel;
                  void 0 === n && (n = 0), e._branchesRemainingToCancel = n + 1
                }
                0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo)
              }

              n.config = function (e) {
                if ("longStackTraces" in (e = Object(e)) && (e.longStackTraces ? n.longStackTraces() : !e.longStackTraces && n.hasLongStackTraces() && S()), "warnings" in e) {
                  var t = e.warnings;
                  ne.warnings = !!t, k = ne.warnings, h.isObject(t) && "wForgottenReturn" in t && (k = !!t.wForgottenReturn)
                }
                if ("cancellation" in e && e.cancellation && !ne.cancellation) {
                  if (u.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
                  n.prototype._clearCancellationData = P, n.prototype._propagateFrom = N, n.prototype._onCancel = F, n.prototype._setOnCancel = M, n.prototype._attachCancellationCallback = L, n.prototype._execute = I, V = N, ne.cancellation = !0
                }
                if ("monitoring" in e && (e.monitoring && !ne.monitoring ? (ne.monitoring = !0, n.prototype._fireEvent = j) : !e.monitoring && ne.monitoring && (ne.monitoring = !1, n.prototype._fireEvent = B)), "asyncHooks" in e && h.nodeSupportsAsyncResource) {
                  var i = ne.asyncHooks, a = !!e.asyncHooks;
                  i !== a && (ne.asyncHooks = a, a ? r() : o())
                }
                return n
              }, n.prototype._fireEvent = B, n.prototype._execute = function (e, t, n) {
                try {
                  e(t, n)
                } catch (e) {
                  return e
                }
              }, n.prototype._onCancel = function () {
              }, n.prototype._setOnCancel = function (e) {
              }, n.prototype._attachCancellationCallback = function (e) {
              }, n.prototype._captureStackTrace = function () {
              }, n.prototype._attachExtraTrace = function () {
              }, n.prototype._dereferenceTrace = function () {
              }, n.prototype._clearCancellationData = function () {
              }, n.prototype._propagateFrom = function (e, t) {
              };
              var V = function (e, t) {
                0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo)
              };

              function D() {
                var e = this._boundTo;
                return void 0 !== e && e instanceof n ? e.isFulfilled() ? e.value() : void 0 : e
              }

              function q() {
                this._trace = new ee(this._peekContext())
              }

              function H(e, t) {
                if (f(e)) {
                  var n = this._trace;
                  if (void 0 !== n && t && (n = n._parent), void 0 !== n) n.attachExtraTrace(e); else if (!e.__stackCleaned__) {
                    var i = U(e);
                    h.notEnumerableProp(e, "stack", i.message + "\n" + i.stack.join("\n")), h.notEnumerableProp(e, "__stackCleaned__", !0)
                  }
                }
              }

              function $() {
                this._trace = void 0
              }

              function G(e, t, i) {
                if (ne.warnings) {
                  var r, o = new d(e);
                  if (t) i._attachExtraTrace(o); else if (ne.longStackTraces && (r = n._peekContext())) r.attachExtraTrace(o); else {
                    var a = U(o);
                    o.stack = a.message + "\n" + a.stack.join("\n")
                  }
                  j("warning", o) || W(o, "", !0)
                }
              }

              function z(e) {
                for (var t = [], n = 0; n < e.length; ++n) {
                  var i = e[n], r = "    (No stack trace)" === i || y.test(i), o = r && X(i);
                  r && !o && (w && " " !== i.charAt(0) && (i = "    " + i), t.push(i))
                }
                return t
              }

              function U(e) {
                var t = e.stack, n = e.toString();
                return t = "string" == typeof t && t.length > 0 ? function (e) {
                  for (var t = e.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < t.length; ++n) {
                    var i = t[n];
                    if ("    (No stack trace)" === i || y.test(i)) break
                  }
                  return n > 0 && "SyntaxError" != e.name && (t = t.slice(n)), t
                }(e) : ["    (No stack trace)"], {message: n, stack: "SyntaxError" == e.name ? t : z(t)}
              }

              function W(e, t, n) {
                if ("undefined" != typeof console) {
                  var i;
                  if (h.isObject(e)) {
                    var r = e.stack;
                    i = t + b(r, e)
                  } else i = t + String(e);
                  "function" == typeof c ? c(i, n) : "function" != typeof console.log && "object" != typeof console.log || console.log(i)
                }
              }

              function Q(e, t, n, i) {
                var r = !1;
                try {
                  "function" == typeof t && (r = !0, "rejectionHandled" === e ? t(i) : t(n, i))
                } catch (e) {
                  u.throwLater(e)
                }
                "unhandledRejection" === e ? j(e, n, i) || r || W(n, "Unhandled rejection ") : j(e, i)
              }

              function J(e) {
                var t;
                if ("function" == typeof e) t = "[function " + (e.name || "anonymous") + "]"; else {
                  if (t = e && "function" == typeof e.toString ? e.toString() : h.toString(e), /\[object [a-zA-Z0-9$_]+\]/.test(t)) try {
                    t = JSON.stringify(e)
                  } catch (e) {
                  }
                  0 === t.length && (t = "(empty array)")
                }
                return "(<" + function (e) {
                  return e.length < 41 ? e : e.substr(0, 38) + "..."
                }(t) + ">, no stack trace)"
              }

              function K() {
                return "function" == typeof te
              }

              var X = function () {
                return !1
              }, Y = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;

              function Z(e) {
                var t = e.match(Y);
                if (t) return {fileName: t[1], line: parseInt(t[2], 10)}
              }

              function ee(e) {
                this._parent = e, this._promisesCreated = 0;
                var t = this._length = 1 + (void 0 === e ? 0 : e._length);
                te(this, ee), t > 32 && this.uncycle()
              }

              h.inherits(ee, Error), i.CapturedTrace = ee, ee.prototype.uncycle = function () {
                var e = this._length;
                if (!(e < 2)) {
                  for (var t = [], n = {}, i = 0, r = this; void 0 !== r; ++i) t.push(r), r = r._parent;
                  for (i = (e = this._length = i) - 1; i >= 0; --i) {
                    var o = t[i].stack;
                    void 0 === n[o] && (n[o] = i)
                  }
                  for (i = 0; i < e; ++i) {
                    var a = n[t[i].stack];
                    if (void 0 !== a && a !== i) {
                      a > 0 && (t[a - 1]._parent = void 0, t[a - 1]._length = 1), t[i]._parent = void 0, t[i]._length = 1;
                      var s = i > 0 ? t[i - 1] : this;
                      a < e - 1 ? (s._parent = t[a + 1], s._parent.uncycle(), s._length = s._parent._length + 1) : (s._parent = void 0, s._length = 1);
                      for (var c = s._length + 1, l = i - 2; l >= 0; --l) t[l]._length = c, c++;
                      return
                    }
                  }
                }
              }, ee.prototype.attachExtraTrace = function (e) {
                if (!e.__stackCleaned__) {
                  this.uncycle();
                  for (var t = U(e), n = t.message, i = [t.stack], r = this; void 0 !== r;) i.push(z(r.stack.split("\n"))), r = r._parent;
                  !function (e) {
                    for (var t = e[0], n = 1; n < e.length; ++n) {
                      for (var i = e[n], r = t.length - 1, o = t[r], a = -1, s = i.length - 1; s >= 0; --s) if (i[s] === o) {
                        a = s;
                        break
                      }
                      for (s = a; s >= 0; --s) {
                        var c = i[s];
                        if (t[r] !== c) break;
                        t.pop(), r--
                      }
                      t = i
                    }
                  }(i), function (e) {
                    for (var t = 0; t < e.length; ++t) (0 === e[t].length || t + 1 < e.length && e[t][0] === e[t + 1][0]) && (e.splice(t, 1), t--)
                  }(i), h.notEnumerableProp(e, "stack", function (e, t) {
                    for (var n = 0; n < t.length - 1; ++n) t[n].push("From previous event:"), t[n] = t[n].join("\n");
                    return n < t.length && (t[n] = t[n].join("\n")), e + "\n" + t.join("\n")
                  }(n, i)), h.notEnumerableProp(e, "__stackCleaned__", !0)
                }
              };
              var te = function () {
                var e = /^\s*at\s*/, t = function (e, t) {
                  return "string" == typeof e ? e : void 0 !== t.name && void 0 !== t.message ? t.toString() : J(t)
                };
                if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                  Error.stackTraceLimit += 6, y = e, b = t;
                  var n = Error.captureStackTrace;
                  return X = function (e) {
                    return v.test(e)
                  }, function (e, t) {
                    Error.stackTraceLimit += 6, n(e, t), Error.stackTraceLimit -= 6
                  }
                }
                var i, r = new Error;
                if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return y = /@/, b = t, w = !0, function (e) {
                  e.stack = (new Error).stack
                };
                try {
                  throw new Error
                } catch (e) {
                  i = "stack" in e
                }
                return "stack" in r || !i || "number" != typeof Error.stackTraceLimit ? (b = function (e, t) {
                  return "string" == typeof e ? e : "object" != typeof t && "function" != typeof t || void 0 === t.name || void 0 === t.message ? J(t) : t.toString()
                }, null) : (y = e, b = t, function (e) {
                  Error.stackTraceLimit += 6;
                  try {
                    throw new Error
                  } catch (t) {
                    e.stack = t.stack
                  }
                  Error.stackTraceLimit -= 6
                })
              }();
              "undefined" != typeof console && void 0 !== console.warn && (c = function (e) {
                console.warn(e)
              }, h.isNode && t.stderr.isTTY ? c = function (e, t) {
                var n = t ? "[33m" : "[31m";
                console.warn(n + e + "[0m\n")
              } : h.isNode || "string" != typeof (new Error).stack || (c = function (e, t) {
                console.warn("%c" + e, t ? "color: darkorange" : "color: red")
              }));
              var ne = {warnings: _, longStackTraces: !1, cancellation: !1, monitoring: !1, asyncHooks: !1};
              return C && n.longStackTraces(), {
                asyncHooks: function () {
                  return ne.asyncHooks
                }, longStackTraces: function () {
                  return ne.longStackTraces
                }, warnings: function () {
                  return ne.warnings
                }, cancellation: function () {
                  return ne.cancellation
                }, monitoring: function () {
                  return ne.monitoring
                }, propagateFromFunction: function () {
                  return V
                }, boundValueFunction: function () {
                  return D
                }, checkForgottenReturns: function (e, t, n, i, r) {
                  if (void 0 === e && null !== t && k) {
                    if (void 0 !== r && r._returnedNonUndefined()) return;
                    if (0 == (65535 & i._bitField)) return;
                    n && (n += " ");
                    var o = "", a = "";
                    if (t._trace) {
                      for (var s = t._trace.stack.split("\n"), c = z(s), l = c.length - 1; l >= 0; --l) {
                        var u = c[l];
                        if (!g.test(u)) {
                          var d = u.match(m);
                          d && (o = "at " + d[1] + ":" + d[2] + ":" + d[3] + " ");
                          break
                        }
                      }
                      if (c.length > 0) {
                        var h = c[0];
                        for (l = 0; l < s.length; ++l) if (s[l] === h) {
                          l > 0 && (a = "\n" + s[l - 1]);
                          break
                        }
                      }
                    }
                    var p = "a promise was created in a " + n + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + a;
                    i._warn(p, !0, t)
                  }
                }, setBounds: function (e, t) {
                  if (K()) {
                    for (var n, i, r = (e.stack || "").split("\n"), o = (t.stack || "").split("\n"), a = -1, s = -1, c = 0; c < r.length; ++c) if (l = Z(r[c])) {
                      n = l.fileName, a = l.line;
                      break
                    }
                    for (c = 0; c < o.length; ++c) {
                      var l;
                      if (l = Z(o[c])) {
                        i = l.fileName, s = l.line;
                        break
                      }
                    }
                    a < 0 || s < 0 || !n || !i || n !== i || a >= s || (X = function (e) {
                      if (v.test(e)) return !0;
                      var t = Z(e);
                      return !!(t && t.fileName === n && a <= t.line && t.line <= s)
                    })
                  }
                }, warn: G, deprecated: function (e, t) {
                  var n = e + " is deprecated and will be removed in a future version.";
                  return t && (n += " Use " + t + " instead."), G(n)
                }, CapturedTrace: ee, fireDomEvent: R, fireGlobalEvent: A
              }
            }
          }, {"./errors": 12, "./es5": 13, "./util": 36}], 10: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
              function t() {
                return this.value
              }

              function n() {
                throw this.reason
              }

              e.prototype.return = e.prototype.thenReturn = function (n) {
                return n instanceof e && n.suppressUnhandledRejections(), this._then(t, void 0, void 0, {value: n}, void 0)
              }, e.prototype.throw = e.prototype.thenThrow = function (e) {
                return this._then(n, void 0, void 0, {reason: e}, void 0)
              }, e.prototype.catchThrow = function (e) {
                if (arguments.length <= 1) return this._then(void 0, n, void 0, {reason: e}, void 0);
                var t = arguments[1], i = function () {
                  throw t
                };
                return this.caught(e, i)
              }, e.prototype.catchReturn = function (n) {
                if (arguments.length <= 1) return n instanceof e && n.suppressUnhandledRejections(), this._then(void 0, t, void 0, {value: n}, void 0);
                var i = arguments[1];
                i instanceof e && i.suppressUnhandledRejections();
                var r = function () {
                  return i
                };
                return this.caught(n, r)
              }
            }
          }, {}], 11: [function (e, t, n) {
            "use strict";
            t.exports = function (e, t) {
              var n = e.reduce, i = e.all;

              function r() {
                return i(this)
              }

              e.prototype.each = function (e) {
                return n(this, e, t, 0)._then(r, void 0, void 0, this, void 0)
              }, e.prototype.mapSeries = function (e) {
                return n(this, e, t, t)
              }, e.each = function (e, i) {
                return n(e, i, t, 0)._then(r, void 0, void 0, e, void 0)
              }, e.mapSeries = function (e, i) {
                return n(e, i, t, t)
              }
            }
          }, {}], 12: [function (e, t, n) {
            "use strict";
            var i, r, o = e("./es5"), a = o.freeze, s = e("./util"), c = s.inherits, l = s.notEnumerableProp;

            function u(e, t) {
              function n(i) {
                if (!(this instanceof n)) return new n(i);
                l(this, "message", "string" == typeof i ? i : t), l(this, "name", e), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this)
              }

              return c(n, Error), n
            }

            var d = u("Warning", "warning"), h = u("CancellationError", "cancellation error"),
              p = u("TimeoutError", "timeout error"), f = u("AggregateError", "aggregate error");
            try {
              i = TypeError, r = RangeError
            } catch (e) {
              i = u("TypeError", "type error"), r = u("RangeError", "range error")
            }
            for (var v = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), g = 0; g < v.length; ++g) "function" == typeof Array.prototype[v[g]] && (f.prototype[v[g]] = Array.prototype[v[g]]);
            o.defineProperty(f.prototype, "length", {
              value: 0,
              configurable: !1,
              writable: !0,
              enumerable: !0
            }), f.prototype.isOperational = !0;
            var m = 0;

            function y(e) {
              if (!(this instanceof y)) return new y(e);
              l(this, "name", "OperationalError"), l(this, "message", e), this.cause = e, this.isOperational = !0, e instanceof Error ? (l(this, "message", e.message), l(this, "stack", e.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
            }

            f.prototype.toString = function () {
              var e = Array(4 * m + 1).join(" "), t = "\n" + e + "AggregateError of:\n";
              m++, e = Array(4 * m + 1).join(" ");
              for (var n = 0; n < this.length; ++n) {
                for (var i = this[n] === this ? "[Circular AggregateError]" : this[n] + "", r = i.split("\n"), o = 0; o < r.length; ++o) r[o] = e + r[o];
                t += (i = r.join("\n")) + "\n"
              }
              return m--, t
            }, c(y, Error);
            var b = Error.__BluebirdErrorTypes__;
            b || (b = a({
              CancellationError: h,
              TimeoutError: p,
              OperationalError: y,
              RejectionError: y,
              AggregateError: f
            }), o.defineProperty(Error, "__BluebirdErrorTypes__", {
              value: b,
              writable: !1,
              enumerable: !1,
              configurable: !1
            })), t.exports = {
              Error: Error,
              TypeError: i,
              RangeError: r,
              CancellationError: b.CancellationError,
              OperationalError: b.OperationalError,
              TimeoutError: b.TimeoutError,
              AggregateError: b.AggregateError,
              Warning: d
            }
          }, {"./es5": 13, "./util": 36}], 13: [function (e, t, n) {
            var i = function () {
              "use strict";
              return void 0 === this
            }();
            if (i) t.exports = {
              freeze: Object.freeze,
              defineProperty: Object.defineProperty,
              getDescriptor: Object.getOwnPropertyDescriptor,
              keys: Object.keys,
              names: Object.getOwnPropertyNames,
              getPrototypeOf: Object.getPrototypeOf,
              isArray: Array.isArray,
              isES5: i,
              propertyIsWritable: function (e, t) {
                var n = Object.getOwnPropertyDescriptor(e, t);
                return !(n && !n.writable && !n.set)
              }
            }; else {
              var r = {}.hasOwnProperty, o = {}.toString, a = {}.constructor.prototype, s = function (e) {
                var t = [];
                for (var n in e) r.call(e, n) && t.push(n);
                return t
              };
              t.exports = {
                isArray: function (e) {
                  try {
                    return "[object Array]" === o.call(e)
                  } catch (e) {
                    return !1
                  }
                }, keys: s, names: s, defineProperty: function (e, t, n) {
                  return e[t] = n.value, e
                }, getDescriptor: function (e, t) {
                  return {value: e[t]}
                }, freeze: function (e) {
                  return e
                }, getPrototypeOf: function (e) {
                  try {
                    return Object(e).constructor.prototype
                  } catch (e) {
                    return a
                  }
                }, isES5: i, propertyIsWritable: function () {
                  return !0
                }
              }
            }
          }, {}], 14: [function (e, t, n) {
            "use strict";
            t.exports = function (e, t) {
              var n = e.map;
              e.prototype.filter = function (e, i) {
                return n(this, e, i, t)
              }, e.filter = function (e, i, r) {
                return n(e, i, r, t)
              }
            }
          }, {}], 15: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i) {
              var r = e("./util"), o = t.CancellationError, a = r.errorObj, s = e("./catch_filter")(i);

              function c(e, t, n) {
                this.promise = e, this.type = t, this.handler = n, this.called = !1, this.cancelPromise = null
              }

              function l(e) {
                this.finallyHandler = e
              }

              function u(e, t) {
                return null != e.cancelPromise && (arguments.length > 1 ? e.cancelPromise._reject(t) : e.cancelPromise._cancel(), e.cancelPromise = null, !0)
              }

              function d() {
                return p.call(this, this.promise._target()._settledValue())
              }

              function h(e) {
                if (!u(this, e)) return a.e = e, a
              }

              function p(e) {
                var r = this.promise, s = this.handler;
                if (!this.called) {
                  this.called = !0;
                  var c = this.isFinallyHandler() ? s.call(r._boundValue()) : s.call(r._boundValue(), e);
                  if (c === i) return c;
                  if (void 0 !== c) {
                    r._setReturnedNonUndefined();
                    var p = n(c, r);
                    if (p instanceof t) {
                      if (null != this.cancelPromise) {
                        if (p._isCancelled()) {
                          var f = new o("late cancellation observer");
                          return r._attachExtraTrace(f), a.e = f, a
                        }
                        p.isPending() && p._attachCancellationCallback(new l(this))
                      }
                      return p._then(d, h, void 0, this, void 0)
                    }
                  }
                }
                return r.isRejected() ? (u(this), a.e = e, a) : (u(this), e)
              }

              return c.prototype.isFinallyHandler = function () {
                return 0 === this.type
              }, l.prototype._resultCancelled = function () {
                u(this.finallyHandler)
              }, t.prototype._passThrough = function (e, t, n, i) {
                return "function" != typeof e ? this.then() : this._then(n, i, void 0, new c(this, t, e), void 0)
              }, t.prototype.lastly = t.prototype.finally = function (e) {
                return this._passThrough(e, 0, p, p)
              }, t.prototype.tap = function (e) {
                return this._passThrough(e, 1, p)
              }, t.prototype.tapCatch = function (e) {
                var n = arguments.length;
                if (1 === n) return this._passThrough(e, 1, void 0, p);
                var i, o = new Array(n - 1), a = 0;
                for (i = 0; i < n - 1; ++i) {
                  var c = arguments[i];
                  if (!r.isObject(c)) return t.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + r.classString(c)));
                  o[a++] = c
                }
                o.length = a;
                var l = arguments[i];
                return this._passThrough(s(o, l, this), 1, void 0, p)
              }, c
            }
          }, {"./catch_filter": 7, "./util": 36}], 16: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i, r, o, a) {
              var s = e("./errors").TypeError, c = e("./util"), l = c.errorObj, u = c.tryCatch, d = [];

              function h(e, n, r, o) {
                if (a.cancellation()) {
                  var s = new t(i), c = this._finallyPromise = new t(i);
                  this._promise = s.lastly((function () {
                    return c
                  })), s._captureStackTrace(), s._setOnCancel(this)
                } else (this._promise = new t(i))._captureStackTrace();
                this._stack = o, this._generatorFunction = e, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof r ? [r].concat(d) : d, this._yieldedPromise = null, this._cancellationPhase = !1
              }

              c.inherits(h, o), h.prototype._isResolved = function () {
                return null === this._promise
              }, h.prototype._cleanup = function () {
                this._promise = this._generator = null, a.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), this._finallyPromise = null)
              }, h.prototype._promiseCancelled = function () {
                if (!this._isResolved()) {
                  var e;
                  if (void 0 !== this._generator.return) this._promise._pushContext(), e = u(this._generator.return).call(this._generator, void 0), this._promise._popContext(); else {
                    var n = new t.CancellationError("generator .return() sentinel");
                    t.coroutine.returnSentinel = n, this._promise._attachExtraTrace(n), this._promise._pushContext(), e = u(this._generator.throw).call(this._generator, n), this._promise._popContext()
                  }
                  this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(e)
                }
              }, h.prototype._promiseFulfilled = function (e) {
                this._yieldedPromise = null, this._promise._pushContext();
                var t = u(this._generator.next).call(this._generator, e);
                this._promise._popContext(), this._continue(t)
              }, h.prototype._promiseRejected = function (e) {
                this._yieldedPromise = null, this._promise._attachExtraTrace(e), this._promise._pushContext();
                var t = u(this._generator.throw).call(this._generator, e);
                this._promise._popContext(), this._continue(t)
              }, h.prototype._resultCancelled = function () {
                if (this._yieldedPromise instanceof t) {
                  var e = this._yieldedPromise;
                  this._yieldedPromise = null, e.cancel()
                }
              }, h.prototype.promise = function () {
                return this._promise
              }, h.prototype._run = function () {
                this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0)
              }, h.prototype._continue = function (e) {
                var n = this._promise;
                if (e === l) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(e.e, !1);
                var i = e.value;
                if (!0 === e.done) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(i);
                var o = r(i, this._promise);
                if (o instanceof t || null !== (o = function (e, n, i) {
                  for (var o = 0; o < n.length; ++o) {
                    i._pushContext();
                    var a = u(n[o])(e);
                    if (i._popContext(), a === l) {
                      i._pushContext();
                      var s = t.reject(l.e);
                      return i._popContext(), s
                    }
                    var c = r(a, i);
                    if (c instanceof t) return c
                  }
                  return null
                }(o, this._yieldHandlers, this._promise))) {
                  var a = (o = o._target())._bitField;
                  0 == (50397184 & a) ? (this._yieldedPromise = o, o._proxy(this, null)) : 0 != (33554432 & a) ? t._async.invoke(this._promiseFulfilled, this, o._value()) : 0 != (16777216 & a) ? t._async.invoke(this._promiseRejected, this, o._reason()) : this._promiseCancelled()
                } else this._promiseRejected(new s("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", String(i)) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")))
              }, t.coroutine = function (e, t) {
                if ("function" != typeof e) throw new s("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                var n = Object(t).yieldHandler, i = h, r = (new Error).stack;
                return function () {
                  var t = e.apply(this, arguments), o = new i(void 0, void 0, n, r), a = o.promise();
                  return o._generator = t, o._promiseFulfilled(void 0), a
                }
              }, t.coroutine.addYieldHandler = function (e) {
                if ("function" != typeof e) throw new s("expecting a function but got " + c.classString(e));
                d.push(e)
              }, t.spawn = function (e) {
                if (a.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof e) return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                var i = new h(e, this), r = i.promise();
                return i._run(t.spawn), r
              }
            }
          }, {"./errors": 12, "./util": 36}], 17: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i, r, o) {
              var a = e("./util");
              a.canEvaluate, a.tryCatch, a.errorObj, t.join = function () {
                var e, t = arguments.length - 1;
                t > 0 && "function" == typeof arguments[t] && (e = arguments[t]);
                var i = [].slice.call(arguments);
                e && i.pop();
                var r = new n(i).promise();
                return void 0 !== e ? r.spread(e) : r
              }
            }
          }, {"./util": 36}], 18: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i, r, o, a) {
              var s = e("./util"), c = s.tryCatch, l = s.errorObj, u = t._async;

              function d(e, n, i, r) {
                this.constructor$(e), this._promise._captureStackTrace();
                var a = t._getContext();
                if (this._callback = s.contextBind(a, n), this._preservedValues = r === o ? new Array(this.length()) : null, this._limit = i, this._inFlight = 0, this._queue = [], u.invoke(this._asyncInit, this, void 0), s.isArray(e)) for (var c = 0; c < e.length; ++c) {
                  var l = e[c];
                  l instanceof t && l.suppressUnhandledRejections()
                }
              }

              function h(e, n, r, o) {
                if ("function" != typeof n) return i("expecting a function but got " + s.classString(n));
                var a = 0;
                if (void 0 !== r) {
                  if ("object" != typeof r || null === r) return t.reject(new TypeError("options argument must be an object but it is " + s.classString(r)));
                  if ("number" != typeof r.concurrency) return t.reject(new TypeError("'concurrency' must be a number but it is " + s.classString(r.concurrency)));
                  a = r.concurrency
                }
                return new d(e, n, a = "number" == typeof a && isFinite(a) && a >= 1 ? a : 0, o).promise()
              }

              s.inherits(d, n), d.prototype._asyncInit = function () {
                this._init$(void 0, -2)
              }, d.prototype._init = function () {
              }, d.prototype._promiseFulfilled = function (e, n) {
                var i = this._values, o = this.length(), s = this._preservedValues, u = this._limit;
                if (n < 0) {
                  if (i[n = -1 * n - 1] = e, u >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0
                } else {
                  if (u >= 1 && this._inFlight >= u) return i[n] = e, this._queue.push(n), !1;
                  null !== s && (s[n] = e);
                  var d = this._promise, h = this._callback, p = d._boundValue();
                  d._pushContext();
                  var f = c(h).call(p, e, n, o), v = d._popContext();
                  if (a.checkForgottenReturns(f, v, null !== s ? "Promise.filter" : "Promise.map", d), f === l) return this._reject(f.e), !0;
                  var g = r(f, this._promise);
                  if (g instanceof t) {
                    var m = (g = g._target())._bitField;
                    if (0 == (50397184 & m)) return u >= 1 && this._inFlight++, i[n] = g, g._proxy(this, -1 * (n + 1)), !1;
                    if (0 == (33554432 & m)) return 0 != (16777216 & m) ? (this._reject(g._reason()), !0) : (this._cancel(), !0);
                    f = g._value()
                  }
                  i[n] = f
                }
                return ++this._totalResolved >= o && (null !== s ? this._filter(i, s) : this._resolve(i), !0)
              }, d.prototype._drainQueue = function () {
                for (var e = this._queue, t = this._limit, n = this._values; e.length > 0 && this._inFlight < t;) {
                  if (this._isResolved()) return;
                  var i = e.pop();
                  this._promiseFulfilled(n[i], i)
                }
              }, d.prototype._filter = function (e, t) {
                for (var n = t.length, i = new Array(n), r = 0, o = 0; o < n; ++o) e[o] && (i[r++] = t[o]);
                i.length = r, this._resolve(i)
              }, d.prototype.preservedValues = function () {
                return this._preservedValues
              }, t.prototype.map = function (e, t) {
                return h(this, e, t, null)
              }, t.map = function (e, t, n, i) {
                return h(e, t, n, i)
              }
            }
          }, {"./util": 36}], 19: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i, r, o) {
              var a = e("./util"), s = a.tryCatch;
              t.method = function (e) {
                if ("function" != typeof e) throw new t.TypeError("expecting a function but got " + a.classString(e));
                return function () {
                  var i = new t(n);
                  i._captureStackTrace(), i._pushContext();
                  var r = s(e).apply(this, arguments), a = i._popContext();
                  return o.checkForgottenReturns(r, a, "Promise.method", i), i._resolveFromSyncValue(r), i
                }
              }, t.attempt = t.try = function (e) {
                if ("function" != typeof e) return r("expecting a function but got " + a.classString(e));
                var i, c = new t(n);
                if (c._captureStackTrace(), c._pushContext(), arguments.length > 1) {
                  o.deprecated("calling Promise.try with more than 1 argument");
                  var l = arguments[1], u = arguments[2];
                  i = a.isArray(l) ? s(e).apply(u, l) : s(e).call(u, l)
                } else i = s(e)();
                var d = c._popContext();
                return o.checkForgottenReturns(i, d, "Promise.try", c), c._resolveFromSyncValue(i), c
              }, t.prototype._resolveFromSyncValue = function (e) {
                e === a.errorObj ? this._rejectCallback(e.e, !1) : this._resolveCallback(e, !0)
              }
            }
          }, {"./util": 36}], 20: [function (e, t, n) {
            "use strict";
            var i = e("./util"), r = i.maybeWrapAsError, o = e("./errors").OperationalError, a = e("./es5"),
              s = /^(?:name|message|stack|cause)$/;

            function c(e) {
              var t;
              if (function (e) {
                return e instanceof Error && a.getPrototypeOf(e) === Error.prototype
              }(e)) {
                (t = new o(e)).name = e.name, t.message = e.message, t.stack = e.stack;
                for (var n = a.keys(e), r = 0; r < n.length; ++r) {
                  var c = n[r];
                  s.test(c) || (t[c] = e[c])
                }
                return t
              }
              return i.markAsOriginatingFromRejection(e), e
            }

            t.exports = function (e, t) {
              return function (n, i) {
                if (null !== e) {
                  if (n) {
                    var o = c(r(n));
                    e._attachExtraTrace(o), e._reject(o)
                  } else if (t) {
                    var a = [].slice.call(arguments, 1);
                    e._fulfill(a)
                  } else e._fulfill(i);
                  e = null
                }
              }
            }
          }, {"./errors": 12, "./es5": 13, "./util": 36}], 21: [function (e, t, n) {
            "use strict";
            t.exports = function (t) {
              var n = e("./util"), i = t._async, r = n.tryCatch, o = n.errorObj;

              function a(e, t) {
                if (!n.isArray(e)) return s.call(this, e, t);
                var a = r(t).apply(this._boundValue(), [null].concat(e));
                a === o && i.throwLater(a.e)
              }

              function s(e, t) {
                var n = this._boundValue(), a = void 0 === e ? r(t).call(n, null) : r(t).call(n, null, e);
                a === o && i.throwLater(a.e)
              }

              function c(e, t) {
                if (!e) {
                  var n = new Error(e + "");
                  n.cause = e, e = n
                }
                var a = r(t).call(this._boundValue(), e);
                a === o && i.throwLater(a.e)
              }

              t.prototype.asCallback = t.prototype.nodeify = function (e, t) {
                if ("function" == typeof e) {
                  var n = s;
                  void 0 !== t && Object(t).spread && (n = a), this._then(n, c, void 0, this, e)
                }
                return this
              }
            }
          }, {"./util": 36}], 22: [function (e, n, i) {
            "use strict";
            n.exports = function () {
              var i = function () {
                return new y("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")
              }, r = function () {
                return new I.PromiseInspection(this._target())
              }, o = function (e) {
                return I.reject(new y(e))
              };

              function a() {
              }

              var s = {}, c = e("./util");
              c.setReflectHandler(r);
              var l = function () {
                var e = t.domain;
                return void 0 === e ? null : e
              }, u = function () {
                return {domain: l(), async: null}
              }, d = c.isNode && c.nodeSupportsAsyncResource ? e("async_hooks").AsyncResource : null, h = function () {
                return {domain: l(), async: new d("Bluebird::Promise")}
              }, p = c.isNode ? u : function () {
                return null
              };
              c.notEnumerableProp(I, "_getContext", p);
              var f = e("./es5"), v = e("./async"), g = new v;
              f.defineProperty(I, "_async", {value: g});
              var m = e("./errors"), y = I.TypeError = m.TypeError;
              I.RangeError = m.RangeError;
              var b = I.CancellationError = m.CancellationError;
              I.TimeoutError = m.TimeoutError, I.OperationalError = m.OperationalError, I.RejectionError = m.OperationalError, I.AggregateError = m.AggregateError;
              var w = function () {
                }, x = {}, _ = {}, C = e("./thenables")(I, w), k = e("./promise_array")(I, w, C, o, a),
                S = e("./context")(I), E = S.create, R = e("./debuggability")(I, S, (function () {
                  p = h, c.notEnumerableProp(I, "_getContext", h)
                }), (function () {
                  p = u, c.notEnumerableProp(I, "_getContext", u)
                })), A = (R.CapturedTrace, e("./finally")(I, C, _)), T = e("./catch_filter")(_), O = e("./nodeback"),
                j = c.errorObj, B = c.tryCatch;

              function I(e) {
                e !== w && function (e, t) {
                  if (null == e || e.constructor !== I) throw new y("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
                  if ("function" != typeof t) throw new y("expecting a function but got " + c.classString(t))
                }(this, e), this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this._resolveFromExecutor(e), this._promiseCreated(), this._fireEvent("promiseCreated", this)
              }

              function L(e) {
                this.promise._resolveCallback(e)
              }

              function F(e) {
                this.promise._rejectCallback(e, !1)
              }

              function M(e) {
                var t = new I(w);
                t._fulfillmentHandler0 = e, t._rejectionHandler0 = e, t._promise0 = e, t._receiver0 = e
              }

              return I.prototype.toString = function () {
                return "[object Promise]"
              }, I.prototype.caught = I.prototype.catch = function (e) {
                var t = arguments.length;
                if (t > 1) {
                  var n, i = new Array(t - 1), r = 0;
                  for (n = 0; n < t - 1; ++n) {
                    var a = arguments[n];
                    if (!c.isObject(a)) return o("Catch statement predicate: expecting an object but got " + c.classString(a));
                    i[r++] = a
                  }
                  if (i.length = r, "function" != typeof (e = arguments[n])) throw new y("The last argument to .catch() must be a function, got " + c.toString(e));
                  return this.then(void 0, T(i, e, this))
                }
                return this.then(void 0, e)
              }, I.prototype.reflect = function () {
                return this._then(r, r, void 0, this, void 0)
              }, I.prototype.then = function (e, t) {
                if (R.warnings() && arguments.length > 0 && "function" != typeof e && "function" != typeof t) {
                  var n = ".then() only accepts functions but was passed: " + c.classString(e);
                  arguments.length > 1 && (n += ", " + c.classString(t)), this._warn(n)
                }
                return this._then(e, t, void 0, void 0, void 0)
              }, I.prototype.done = function (e, t) {
                this._then(e, t, void 0, void 0, void 0)._setIsFinal()
              }, I.prototype.spread = function (e) {
                return "function" != typeof e ? o("expecting a function but got " + c.classString(e)) : this.all()._then(e, void 0, void 0, x, void 0)
              }, I.prototype.toJSON = function () {
                var e = {isFulfilled: !1, isRejected: !1, fulfillmentValue: void 0, rejectionReason: void 0};
                return this.isFulfilled() ? (e.fulfillmentValue = this.value(), e.isFulfilled = !0) : this.isRejected() && (e.rejectionReason = this.reason(), e.isRejected = !0), e
              }, I.prototype.all = function () {
                return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new k(this).promise()
              }, I.prototype.error = function (e) {
                return this.caught(c.originatesFromRejection, e)
              }, I.getNewLibraryCopy = n.exports, I.is = function (e) {
                return e instanceof I
              }, I.fromNode = I.fromCallback = function (e) {
                var t = new I(w);
                t._captureStackTrace();
                var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs, i = B(e)(O(t, n));
                return i === j && t._rejectCallback(i.e, !0), t._isFateSealed() || t._setAsyncGuaranteed(), t
              }, I.all = function (e) {
                return new k(e).promise()
              }, I.cast = function (e) {
                var t = C(e);
                return t instanceof I || ((t = new I(w))._captureStackTrace(), t._setFulfilled(), t._rejectionHandler0 = e), t
              }, I.resolve = I.fulfilled = I.cast, I.reject = I.rejected = function (e) {
                var t = new I(w);
                return t._captureStackTrace(), t._rejectCallback(e, !0), t
              }, I.setScheduler = function (e) {
                if ("function" != typeof e) throw new y("expecting a function but got " + c.classString(e));
                return g.setScheduler(e)
              }, I.prototype._then = function (e, t, n, i, r) {
                var o = void 0 !== r, a = o ? r : new I(w), s = this._target(), l = s._bitField;
                o || (a._propagateFrom(this, 3), a._captureStackTrace(), void 0 === i && 0 != (2097152 & this._bitField) && (i = 0 != (50397184 & l) ? this._boundValue() : s === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, a));
                var u = p();
                if (0 != (50397184 & l)) {
                  var d, h, f = s._settlePromiseCtx;
                  0 != (33554432 & l) ? (h = s._rejectionHandler0, d = e) : 0 != (16777216 & l) ? (h = s._fulfillmentHandler0, d = t, s._unsetRejectionIsUnhandled()) : (f = s._settlePromiseLateCancellationObserver, h = new b("late cancellation observer"), s._attachExtraTrace(h), d = t), g.invoke(f, s, {
                    handler: c.contextBind(u, d),
                    promise: a,
                    receiver: i,
                    value: h
                  })
                } else s._addCallbacks(e, t, a, i, u);
                return a
              }, I.prototype._length = function () {
                return 65535 & this._bitField
              }, I.prototype._isFateSealed = function () {
                return 0 != (117506048 & this._bitField)
              }, I.prototype._isFollowing = function () {
                return 67108864 == (67108864 & this._bitField)
              }, I.prototype._setLength = function (e) {
                this._bitField = -65536 & this._bitField | 65535 & e
              }, I.prototype._setFulfilled = function () {
                this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this)
              }, I.prototype._setRejected = function () {
                this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this)
              }, I.prototype._setFollowing = function () {
                this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this)
              }, I.prototype._setIsFinal = function () {
                this._bitField = 4194304 | this._bitField
              }, I.prototype._isFinal = function () {
                return (4194304 & this._bitField) > 0
              }, I.prototype._unsetCancelled = function () {
                this._bitField = -65537 & this._bitField
              }, I.prototype._setCancelled = function () {
                this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this)
              }, I.prototype._setWillBeCancelled = function () {
                this._bitField = 8388608 | this._bitField
              }, I.prototype._setAsyncGuaranteed = function () {
                if (!g.hasCustomScheduler()) {
                  var e = this._bitField;
                  this._bitField = e | (536870912 & e) >> 2 ^ 134217728
                }
              }, I.prototype._setNoAsyncGuarantee = function () {
                this._bitField = -134217729 & (536870912 | this._bitField)
              }, I.prototype._receiverAt = function (e) {
                var t = 0 === e ? this._receiver0 : this[4 * e - 4 + 3];
                if (t !== s) return void 0 === t && this._isBound() ? this._boundValue() : t
              }, I.prototype._promiseAt = function (e) {
                return this[4 * e - 4 + 2]
              }, I.prototype._fulfillmentHandlerAt = function (e) {
                return this[4 * e - 4 + 0]
              }, I.prototype._rejectionHandlerAt = function (e) {
                return this[4 * e - 4 + 1]
              }, I.prototype._boundValue = function () {
              }, I.prototype._migrateCallback0 = function (e) {
                e._bitField;
                var t = e._fulfillmentHandler0, n = e._rejectionHandler0, i = e._promise0, r = e._receiverAt(0);
                void 0 === r && (r = s), this._addCallbacks(t, n, i, r, null)
              }, I.prototype._migrateCallbackAt = function (e, t) {
                var n = e._fulfillmentHandlerAt(t), i = e._rejectionHandlerAt(t), r = e._promiseAt(t),
                  o = e._receiverAt(t);
                void 0 === o && (o = s), this._addCallbacks(n, i, r, o, null)
              }, I.prototype._addCallbacks = function (e, t, n, i, r) {
                var o = this._length();
                if (o >= 65531 && (o = 0, this._setLength(0)), 0 === o) this._promise0 = n, this._receiver0 = i, "function" == typeof e && (this._fulfillmentHandler0 = c.contextBind(r, e)), "function" == typeof t && (this._rejectionHandler0 = c.contextBind(r, t)); else {
                  var a = 4 * o - 4;
                  this[a + 2] = n, this[a + 3] = i, "function" == typeof e && (this[a + 0] = c.contextBind(r, e)), "function" == typeof t && (this[a + 1] = c.contextBind(r, t))
                }
                return this._setLength(o + 1), o
              }, I.prototype._proxy = function (e, t) {
                this._addCallbacks(void 0, void 0, t, e, null)
              }, I.prototype._resolveCallback = function (e, t) {
                if (0 == (117506048 & this._bitField)) {
                  if (e === this) return this._rejectCallback(i(), !1);
                  var n = C(e, this);
                  if (!(n instanceof I)) return this._fulfill(e);
                  t && this._propagateFrom(n, 2);
                  var r = n._target();
                  if (r !== this) {
                    var o = r._bitField;
                    if (0 == (50397184 & o)) {
                      var a = this._length();
                      a > 0 && r._migrateCallback0(this);
                      for (var s = 1; s < a; ++s) r._migrateCallbackAt(this, s);
                      this._setFollowing(), this._setLength(0), this._setFollowee(n)
                    } else if (0 != (33554432 & o)) this._fulfill(r._value()); else if (0 != (16777216 & o)) this._reject(r._reason()); else {
                      var c = new b("late cancellation observer");
                      r._attachExtraTrace(c), this._reject(c)
                    }
                  } else this._reject(i())
                }
              }, I.prototype._rejectCallback = function (e, t, n) {
                var i = c.ensureErrorObject(e), r = i === e;
                if (!r && !n && R.warnings()) {
                  var o = "a promise was rejected with a non-error: " + c.classString(e);
                  this._warn(o, !0)
                }
                this._attachExtraTrace(i, !!t && r), this._reject(e)
              }, I.prototype._resolveFromExecutor = function (e) {
                if (e !== w) {
                  var t = this;
                  this._captureStackTrace(), this._pushContext();
                  var n = !0, i = this._execute(e, (function (e) {
                    t._resolveCallback(e)
                  }), (function (e) {
                    t._rejectCallback(e, n)
                  }));
                  n = !1, this._popContext(), void 0 !== i && t._rejectCallback(i, !0)
                }
              }, I.prototype._settlePromiseFromHandler = function (e, t, n, i) {
                var r = i._bitField;
                if (0 == (65536 & r)) {
                  var o;
                  i._pushContext(), t === x ? n && "number" == typeof n.length ? o = B(e).apply(this._boundValue(), n) : (o = j).e = new y("cannot .spread() a non-array: " + c.classString(n)) : o = B(e).call(t, n);
                  var a = i._popContext();
                  0 == (65536 & (r = i._bitField)) && (o === _ ? i._reject(n) : o === j ? i._rejectCallback(o.e, !1) : (R.checkForgottenReturns(o, a, "", i, this), i._resolveCallback(o)))
                }
              }, I.prototype._target = function () {
                for (var e = this; e._isFollowing();) e = e._followee();
                return e
              }, I.prototype._followee = function () {
                return this._rejectionHandler0
              }, I.prototype._setFollowee = function (e) {
                this._rejectionHandler0 = e
              }, I.prototype._settlePromise = function (e, t, n, i) {
                var o = e instanceof I, s = this._bitField, c = 0 != (134217728 & s);
                0 != (65536 & s) ? (o && e._invokeInternalOnCancel(), n instanceof A && n.isFinallyHandler() ? (n.cancelPromise = e, B(t).call(n, i) === j && e._reject(j.e)) : t === r ? e._fulfill(r.call(n)) : n instanceof a ? n._promiseCancelled(e) : o || e instanceof k ? e._cancel() : n.cancel()) : "function" == typeof t ? o ? (c && e._setAsyncGuaranteed(), this._settlePromiseFromHandler(t, n, i, e)) : t.call(n, i, e) : n instanceof a ? n._isResolved() || (0 != (33554432 & s) ? n._promiseFulfilled(i, e) : n._promiseRejected(i, e)) : o && (c && e._setAsyncGuaranteed(), 0 != (33554432 & s) ? e._fulfill(i) : e._reject(i))
              }, I.prototype._settlePromiseLateCancellationObserver = function (e) {
                var t = e.handler, n = e.promise, i = e.receiver, r = e.value;
                "function" == typeof t ? n instanceof I ? this._settlePromiseFromHandler(t, i, r, n) : t.call(i, r, n) : n instanceof I && n._reject(r)
              }, I.prototype._settlePromiseCtx = function (e) {
                this._settlePromise(e.promise, e.handler, e.receiver, e.value)
              }, I.prototype._settlePromise0 = function (e, t, n) {
                var i = this._promise0, r = this._receiverAt(0);
                this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(i, e, r, t)
              }, I.prototype._clearCallbackDataAtIndex = function (e) {
                var t = 4 * e - 4;
                this[t + 2] = this[t + 3] = this[t + 0] = this[t + 1] = void 0
              }, I.prototype._fulfill = function (e) {
                var t = this._bitField;
                if (!((117506048 & t) >>> 16)) {
                  if (e === this) {
                    var n = i();
                    return this._attachExtraTrace(n), this._reject(n)
                  }
                  this._setFulfilled(), this._rejectionHandler0 = e, (65535 & t) > 0 && (0 != (134217728 & t) ? this._settlePromises() : g.settlePromises(this), this._dereferenceTrace())
                }
              }, I.prototype._reject = function (e) {
                var t = this._bitField;
                if (!((117506048 & t) >>> 16)) {
                  if (this._setRejected(), this._fulfillmentHandler0 = e, this._isFinal()) return g.fatalError(e, c.isNode);
                  (65535 & t) > 0 ? g.settlePromises(this) : this._ensurePossibleRejectionHandled()
                }
              }, I.prototype._fulfillPromises = function (e, t) {
                for (var n = 1; n < e; n++) {
                  var i = this._fulfillmentHandlerAt(n), r = this._promiseAt(n), o = this._receiverAt(n);
                  this._clearCallbackDataAtIndex(n), this._settlePromise(r, i, o, t)
                }
              }, I.prototype._rejectPromises = function (e, t) {
                for (var n = 1; n < e; n++) {
                  var i = this._rejectionHandlerAt(n), r = this._promiseAt(n), o = this._receiverAt(n);
                  this._clearCallbackDataAtIndex(n), this._settlePromise(r, i, o, t)
                }
              }, I.prototype._settlePromises = function () {
                var e = this._bitField, t = 65535 & e;
                if (t > 0) {
                  if (0 != (16842752 & e)) {
                    var n = this._fulfillmentHandler0;
                    this._settlePromise0(this._rejectionHandler0, n, e), this._rejectPromises(t, n)
                  } else {
                    var i = this._rejectionHandler0;
                    this._settlePromise0(this._fulfillmentHandler0, i, e), this._fulfillPromises(t, i)
                  }
                  this._setLength(0)
                }
                this._clearCancellationData()
              }, I.prototype._settledValue = function () {
                var e = this._bitField;
                return 0 != (33554432 & e) ? this._rejectionHandler0 : 0 != (16777216 & e) ? this._fulfillmentHandler0 : void 0
              }, "undefined" != typeof Symbol && Symbol.toStringTag && f.defineProperty(I.prototype, Symbol.toStringTag, {
                get: function () {
                  return "Object"
                }
              }), I.defer = I.pending = function () {
                return R.deprecated("Promise.defer", "new Promise"), {promise: new I(w), resolve: L, reject: F}
              }, c.notEnumerableProp(I, "_makeSelfResolutionError", i), e("./method")(I, w, C, o, R), e("./bind")(I, w, C, R), e("./cancel")(I, k, o, R), e("./direct_resolve")(I), e("./synchronous_inspection")(I), e("./join")(I, k, C, w, g), I.Promise = I, I.version = "3.7.2", e("./call_get.js")(I), e("./generators.js")(I, o, w, C, a, R), e("./map.js")(I, k, o, C, w, R), e("./nodeify.js")(I), e("./promisify.js")(I, w), e("./props.js")(I, k, C, o), e("./race.js")(I, w, C, o), e("./reduce.js")(I, k, o, C, w, R), e("./settle.js")(I, k, R), e("./some.js")(I, k, o), e("./timers.js")(I, w, R), e("./using.js")(I, o, C, E, w, R), e("./any.js")(I), e("./each.js")(I, w), e("./filter.js")(I, w), c.toFastProperties(I), c.toFastProperties(I.prototype), M({a: 1}), M({b: 2}), M({c: 3}), M(1), M((function () {
              })), M(void 0), M(!1), M(new I(w)), R.setBounds(v.firstLineError, c.lastLineError), I
            }
          }, {
            "./any.js": 1,
            "./async": 2,
            "./bind": 3,
            "./call_get.js": 5,
            "./cancel": 6,
            "./catch_filter": 7,
            "./context": 8,
            "./debuggability": 9,
            "./direct_resolve": 10,
            "./each.js": 11,
            "./errors": 12,
            "./es5": 13,
            "./filter.js": 14,
            "./finally": 15,
            "./generators.js": 16,
            "./join": 17,
            "./map.js": 18,
            "./method": 19,
            "./nodeback": 20,
            "./nodeify.js": 21,
            "./promise_array": 23,
            "./promisify.js": 24,
            "./props.js": 25,
            "./race.js": 27,
            "./reduce.js": 28,
            "./settle.js": 30,
            "./some.js": 31,
            "./synchronous_inspection": 32,
            "./thenables": 33,
            "./timers.js": 34,
            "./using.js": 35,
            "./util": 36,
            async_hooks: void 0
          }], 23: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i, r, o) {
              var a = e("./util");

              function s(e) {
                var i = this._promise = new t(n);
                e instanceof t && (i._propagateFrom(e, 3), e.suppressUnhandledRejections()), i._setOnCancel(this), this._values = e, this._length = 0, this._totalResolved = 0, this._init(void 0, -2)
              }

              return a.isArray, a.inherits(s, o), s.prototype.length = function () {
                return this._length
              }, s.prototype.promise = function () {
                return this._promise
              }, s.prototype._init = function e(n, o) {
                var s = i(this._values, this._promise);
                if (s instanceof t) {
                  var c = (s = s._target())._bitField;
                  if (this._values = s, 0 == (50397184 & c)) return this._promise._setAsyncGuaranteed(), s._then(e, this._reject, void 0, this, o);
                  if (0 == (33554432 & c)) return 0 != (16777216 & c) ? this._reject(s._reason()) : this._cancel();
                  s = s._value()
                }
                if (null !== (s = a.asArray(s))) 0 !== s.length ? this._iterate(s) : -5 === o ? this._resolveEmptyArray() : this._resolve(function (e) {
                  switch (e) {
                    case-2:
                      return [];
                    case-3:
                      return {};
                    case-6:
                      return new Map
                  }
                }(o)); else {
                  var l = r("expecting an array or an iterable object but got " + a.classString(s)).reason();
                  this._promise._rejectCallback(l, !1)
                }
              }, s.prototype._iterate = function (e) {
                var n = this.getActualLength(e.length);
                this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values;
                for (var r = this._promise, o = !1, a = null, s = 0; s < n; ++s) {
                  var c = i(e[s], r);
                  a = c instanceof t ? (c = c._target())._bitField : null, o ? null !== a && c.suppressUnhandledRejections() : null !== a ? 0 == (50397184 & a) ? (c._proxy(this, s), this._values[s] = c) : o = 0 != (33554432 & a) ? this._promiseFulfilled(c._value(), s) : 0 != (16777216 & a) ? this._promiseRejected(c._reason(), s) : this._promiseCancelled(s) : o = this._promiseFulfilled(c, s)
                }
                o || r._setAsyncGuaranteed()
              }, s.prototype._isResolved = function () {
                return null === this._values
              }, s.prototype._resolve = function (e) {
                this._values = null, this._promise._fulfill(e)
              }, s.prototype._cancel = function () {
                !this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel())
              }, s.prototype._reject = function (e) {
                this._values = null, this._promise._rejectCallback(e, !1)
              }, s.prototype._promiseFulfilled = function (e, t) {
                return this._values[t] = e, ++this._totalResolved >= this._length && (this._resolve(this._values), !0)
              }, s.prototype._promiseCancelled = function () {
                return this._cancel(), !0
              }, s.prototype._promiseRejected = function (e) {
                return this._totalResolved++, this._reject(e), !0
              }, s.prototype._resultCancelled = function () {
                if (!this._isResolved()) {
                  var e = this._values;
                  if (this._cancel(), e instanceof t) e.cancel(); else for (var n = 0; n < e.length; ++n) e[n] instanceof t && e[n].cancel()
                }
              }, s.prototype.shouldCopyValues = function () {
                return !0
              }, s.prototype.getActualLength = function (e) {
                return e
              }, s
            }
          }, {"./util": 36}], 24: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n) {
              var i = {}, r = e("./util"), o = e("./nodeback"), a = r.withAppended, s = r.maybeWrapAsError,
                c = r.canEvaluate, l = e("./errors").TypeError, u = {__isPromisified__: !0},
                d = new RegExp("^(?:" + ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"].join("|") + ")$"),
                h = function (e) {
                  return r.isIdentifier(e) && "_" !== e.charAt(0) && "constructor" !== e
                };

              function p(e) {
                return !d.test(e)
              }

              function f(e) {
                try {
                  return !0 === e.__isPromisified__
                } catch (e) {
                  return !1
                }
              }

              function v(e, t, n) {
                var i = r.getDataPropertyOrDefault(e, t + n, u);
                return !!i && f(i)
              }

              function g(e, t, n, i) {
                for (var o = r.inheritedDataKeys(e), a = [], s = 0; s < o.length; ++s) {
                  var c = o[s], u = e[c], d = i === h || h(c);
                  "function" != typeof u || f(u) || v(e, c, t) || !i(c, u, e, d) || a.push(c, u)
                }
                return function (e, t, n) {
                  for (var i = 0; i < e.length; i += 2) {
                    var r = e[i];
                    if (n.test(r)) for (var o = r.replace(n, ""), a = 0; a < e.length; a += 2) if (e[a] === o) throw new l("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", t))
                  }
                }(a, t, n), a
              }

              var m = c ? void 0 : function (e, c, l, u, d, h) {
                var p = function () {
                  return this
                }(), f = e;

                function v() {
                  var r = c;
                  c === i && (r = this);
                  var l = new t(n);
                  l._captureStackTrace();
                  var u = "string" == typeof f && this !== p ? this[f] : e, d = o(l, h);
                  try {
                    u.apply(r, a(arguments, d))
                  } catch (e) {
                    l._rejectCallback(s(e), !0, !0)
                  }
                  return l._isFateSealed() || l._setAsyncGuaranteed(), l
                }

                return "string" == typeof f && (e = u), r.notEnumerableProp(v, "__isPromisified__", !0), v
              };

              function y(e, t, n, o, a) {
                for (var s = new RegExp(t.replace(/([$])/, "\\$") + "$"), c = g(e, t, s, n), l = 0, u = c.length; l < u; l += 2) {
                  var d = c[l], h = c[l + 1], p = d + t;
                  if (o === m) e[p] = m(d, i, d, h, t, a); else {
                    var f = o(h, (function () {
                      return m(d, i, d, h, t, a)
                    }));
                    r.notEnumerableProp(f, "__isPromisified__", !0), e[p] = f
                  }
                }
                return r.toFastProperties(e), e
              }

              t.promisify = function (e, t) {
                if ("function" != typeof e) throw new l("expecting a function but got " + r.classString(e));
                if (f(e)) return e;
                var n = function (e, t, n) {
                  return m(e, t, void 0, e, null, n)
                }(e, void 0 === (t = Object(t)).context ? i : t.context, !!t.multiArgs);
                return r.copyDescriptors(e, n, p), n
              }, t.promisifyAll = function (e, t) {
                if ("function" != typeof e && "object" != typeof e) throw new l("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                var n = !!(t = Object(t)).multiArgs, i = t.suffix;
                "string" != typeof i && (i = "Async");
                var o = t.filter;
                "function" != typeof o && (o = h);
                var a = t.promisifier;
                if ("function" != typeof a && (a = m), !r.isIdentifier(i)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
                for (var s = r.inheritedDataKeys(e), c = 0; c < s.length; ++c) {
                  var u = e[s[c]];
                  "constructor" !== s[c] && r.isClass(u) && (y(u.prototype, i, o, a, n), y(u, i, o, a, n))
                }
                return y(e, i, o, a, n)
              }
            }
          }, {"./errors": 12, "./nodeback": 20, "./util": 36}], 25: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i, r) {
              var o, a = e("./util"), s = a.isObject, c = e("./es5");
              "function" == typeof Map && (o = Map);
              var l = function () {
                var e = 0, t = 0;

                function n(n, i) {
                  this[e] = n, this[e + t] = i, e++
                }

                return function (i) {
                  t = i.size, e = 0;
                  var r = new Array(2 * i.size);
                  return i.forEach(n, r), r
                }
              }();

              function u(e) {
                var t, n = !1;
                if (void 0 !== o && e instanceof o) t = l(e), n = !0; else {
                  var i = c.keys(e), r = i.length;
                  t = new Array(2 * r);
                  for (var a = 0; a < r; ++a) {
                    var s = i[a];
                    t[a] = e[s], t[a + r] = s
                  }
                }
                this.constructor$(t), this._isMap = n, this._init$(void 0, n ? -6 : -3)
              }

              function d(e) {
                var n, o = i(e);
                return s(o) ? (n = o instanceof t ? o._then(t.props, void 0, void 0, void 0, void 0) : new u(o).promise(), o instanceof t && n._propagateFrom(o, 2), n) : r("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")
              }

              a.inherits(u, n), u.prototype._init = function () {
              }, u.prototype._promiseFulfilled = function (e, t) {
                if (this._values[t] = e, ++this._totalResolved >= this._length) {
                  var n;
                  if (this._isMap) n = function (e) {
                    for (var t = new o, n = e.length / 2 | 0, i = 0; i < n; ++i) {
                      var r = e[n + i], a = e[i];
                      t.set(r, a)
                    }
                    return t
                  }(this._values); else {
                    n = {};
                    for (var i = this.length(), r = 0, a = this.length(); r < a; ++r) n[this._values[r + i]] = this._values[r]
                  }
                  return this._resolve(n), !0
                }
                return !1
              }, u.prototype.shouldCopyValues = function () {
                return !1
              }, u.prototype.getActualLength = function (e) {
                return e >> 1
              }, t.prototype.props = function () {
                return d(this)
              }, t.props = function (e) {
                return d(e)
              }
            }
          }, {"./es5": 13, "./util": 36}], 26: [function (e, t, n) {
            "use strict";

            function i(e) {
              this._capacity = e, this._length = 0, this._front = 0
            }

            i.prototype._willBeOverCapacity = function (e) {
              return this._capacity < e
            }, i.prototype._pushOne = function (e) {
              var t = this.length();
              this._checkCapacity(t + 1), this[this._front + t & this._capacity - 1] = e, this._length = t + 1
            }, i.prototype.push = function (e, t, n) {
              var i = this.length() + 3;
              if (this._willBeOverCapacity(i)) return this._pushOne(e), this._pushOne(t), void this._pushOne(n);
              var r = this._front + i - 3;
              this._checkCapacity(i);
              var o = this._capacity - 1;
              this[r + 0 & o] = e, this[r + 1 & o] = t, this[r + 2 & o] = n, this._length = i
            }, i.prototype.shift = function () {
              var e = this._front, t = this[e];
              return this[e] = void 0, this._front = e + 1 & this._capacity - 1, this._length--, t
            }, i.prototype.length = function () {
              return this._length
            }, i.prototype._checkCapacity = function (e) {
              this._capacity < e && this._resizeTo(this._capacity << 1)
            }, i.prototype._resizeTo = function (e) {
              var t = this._capacity;
              this._capacity = e, function (e, t, n, i, r) {
                for (var o = 0; o < r; ++o) n[o + i] = e[o + t], e[o + t] = void 0
              }(this, 0, this, t, this._front + this._length & t - 1)
            }, t.exports = i
          }, {}], 27: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i, r) {
              var o = e("./util");

              function a(e, s) {
                var c, l = i(e);
                if (l instanceof t) return (c = l).then((function (e) {
                  return a(e, c)
                }));
                if (null === (e = o.asArray(e))) return r("expecting an array or an iterable object but got " + o.classString(e));
                var u = new t(n);
                void 0 !== s && u._propagateFrom(s, 3);
                for (var d = u._fulfill, h = u._reject, p = 0, f = e.length; p < f; ++p) {
                  var v = e[p];
                  (void 0 !== v || p in e) && t.cast(v)._then(d, h, void 0, u, null)
                }
                return u
              }

              t.race = function (e) {
                return a(e, void 0)
              }, t.prototype.race = function () {
                return a(this, void 0)
              }
            }
          }, {"./util": 36}], 28: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i, r, o, a) {
              var s = e("./util"), c = s.tryCatch;

              function l(e, n, i, r) {
                this.constructor$(e);
                var a = t._getContext();
                this._fn = s.contextBind(a, n), void 0 !== i && (i = t.resolve(i))._attachCancellationCallback(this), this._initialValue = i, this._currentCancellable = null, this._eachValues = r === o ? Array(this._length) : 0 === r ? null : void 0, this._promise._captureStackTrace(), this._init$(void 0, -5)
              }

              function u(e, t) {
                this.isFulfilled() ? t._resolve(e) : t._reject(e)
              }

              function d(e, t, n, r) {
                return "function" != typeof t ? i("expecting a function but got " + s.classString(t)) : new l(e, t, n, r).promise()
              }

              function h(e) {
                this.accum = e, this.array._gotAccum(e);
                var n = r(this.value, this.array._promise);
                return n instanceof t ? (this.array._currentCancellable = n, n._then(p, void 0, void 0, this, void 0)) : p.call(this, n)
              }

              function p(e) {
                var n, i = this.array, r = i._promise, o = c(i._fn);
                r._pushContext(), (n = void 0 !== i._eachValues ? o.call(r._boundValue(), e, this.index, this.length) : o.call(r._boundValue(), this.accum, e, this.index, this.length)) instanceof t && (i._currentCancellable = n);
                var s = r._popContext();
                return a.checkForgottenReturns(n, s, void 0 !== i._eachValues ? "Promise.each" : "Promise.reduce", r), n
              }

              s.inherits(l, n), l.prototype._gotAccum = function (e) {
                void 0 !== this._eachValues && null !== this._eachValues && e !== o && this._eachValues.push(e)
              }, l.prototype._eachComplete = function (e) {
                return null !== this._eachValues && this._eachValues.push(e), this._eachValues
              }, l.prototype._init = function () {
              }, l.prototype._resolveEmptyArray = function () {
                this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue)
              }, l.prototype.shouldCopyValues = function () {
                return !1
              }, l.prototype._resolve = function (e) {
                this._promise._resolveCallback(e), this._values = null
              }, l.prototype._resultCancelled = function (e) {
                if (e === this._initialValue) return this._cancel();
                this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof t && this._currentCancellable.cancel(), this._initialValue instanceof t && this._initialValue.cancel())
              }, l.prototype._iterate = function (e) {
                var n, i;
                this._values = e;
                var r = e.length;
                void 0 !== this._initialValue ? (n = this._initialValue, i = 0) : (n = t.resolve(e[0]), i = 1), this._currentCancellable = n;
                for (var o = i; o < r; ++o) {
                  var a = e[o];
                  a instanceof t && a.suppressUnhandledRejections()
                }
                if (!n.isRejected()) for (; i < r; ++i) {
                  var s = {accum: null, value: e[i], index: i, length: r, array: this};
                  n = n._then(h, void 0, void 0, s, void 0), 0 == (127 & i) && n._setNoAsyncGuarantee()
                }
                void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), n._then(u, u, void 0, n, this)
              }, t.prototype.reduce = function (e, t) {
                return d(this, e, t, null)
              }, t.reduce = function (e, t, n, i) {
                return d(e, t, n, i)
              }
            }
          }, {"./util": 36}], 29: [function (e, n, o) {
            "use strict";
            var a, s, c, l, u, d = e("./util"), h = d.getNativePromise();
            if (d.isNode && "undefined" == typeof MutationObserver) {
              var p = i.setImmediate, f = t.nextTick;
              a = d.isRecentNode ? function (e) {
                p.call(i, e)
              } : function (e) {
                f.call(t, e)
              }
            } else if ("function" == typeof h && "function" == typeof h.resolve) {
              var v = h.resolve();
              a = function (e) {
                v.then(e)
              }
            } else a = "undefined" != typeof MutationObserver && ("undefined" == typeof window || !window.navigator || !window.navigator.standalone && !window.cordova) && "classList" in document.documentElement ? (s = document.createElement("div"), c = {attributes: !0}, l = !1, u = document.createElement("div"), new MutationObserver((function () {
              s.classList.toggle("foo"), l = !1
            })).observe(u, c), function (e) {
              var t = new MutationObserver((function () {
                t.disconnect(), e()
              }));
              t.observe(s, c), l || (l = !0, u.classList.toggle("foo"))
            }) : void 0 !== r ? function (e) {
              r(e)
            } : "undefined" != typeof setTimeout ? function (e) {
              setTimeout(e, 0)
            } : function () {
              throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
            };
            n.exports = a
          }, {"./util": 36}], 30: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i) {
              var r = t.PromiseInspection;

              function o(e) {
                this.constructor$(e)
              }

              e("./util").inherits(o, n), o.prototype._promiseResolved = function (e, t) {
                return this._values[e] = t, ++this._totalResolved >= this._length && (this._resolve(this._values), !0)
              }, o.prototype._promiseFulfilled = function (e, t) {
                var n = new r;
                return n._bitField = 33554432, n._settledValueField = e, this._promiseResolved(t, n)
              }, o.prototype._promiseRejected = function (e, t) {
                var n = new r;
                return n._bitField = 16777216, n._settledValueField = e, this._promiseResolved(t, n)
              }, t.settle = function (e) {
                return i.deprecated(".settle()", ".reflect()"), new o(e).promise()
              }, t.allSettled = function (e) {
                return new o(e).promise()
              }, t.prototype.settle = function () {
                return t.settle(this)
              }
            }
          }, {"./util": 36}], 31: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i) {
              var r = e("./util"), o = e("./errors").RangeError, a = e("./errors").AggregateError, s = r.isArray,
                c = {};

              function l(e) {
                this.constructor$(e), this._howMany = 0, this._unwrap = !1, this._initialized = !1
              }

              function u(e, t) {
                if ((0 | t) !== t || t < 0) return i("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
                var n = new l(e), r = n.promise();
                return n.setHowMany(t), n.init(), r
              }

              r.inherits(l, n), l.prototype._init = function () {
                if (this._initialized) if (0 !== this._howMany) {
                  this._init$(void 0, -5);
                  var e = s(this._values);
                  !this._isResolved() && e && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
                } else this._resolve([])
              }, l.prototype.init = function () {
                this._initialized = !0, this._init()
              }, l.prototype.setUnwrap = function () {
                this._unwrap = !0
              }, l.prototype.howMany = function () {
                return this._howMany
              }, l.prototype.setHowMany = function (e) {
                this._howMany = e
              }, l.prototype._promiseFulfilled = function (e) {
                return this._addFulfilled(e), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0)
              }, l.prototype._promiseRejected = function (e) {
                return this._addRejected(e), this._checkOutcome()
              }, l.prototype._promiseCancelled = function () {
                return this._values instanceof t || null == this._values ? this._cancel() : (this._addRejected(c), this._checkOutcome())
              }, l.prototype._checkOutcome = function () {
                if (this.howMany() > this._canPossiblyFulfill()) {
                  for (var e = new a, t = this.length(); t < this._values.length; ++t) this._values[t] !== c && e.push(this._values[t]);
                  return e.length > 0 ? this._reject(e) : this._cancel(), !0
                }
                return !1
              }, l.prototype._fulfilled = function () {
                return this._totalResolved
              }, l.prototype._rejected = function () {
                return this._values.length - this.length()
              }, l.prototype._addRejected = function (e) {
                this._values.push(e)
              }, l.prototype._addFulfilled = function (e) {
                this._values[this._totalResolved++] = e
              }, l.prototype._canPossiblyFulfill = function () {
                return this.length() - this._rejected()
              }, l.prototype._getRangeError = function (e) {
                var t = "Input array must contain at least " + this._howMany + " items but contains only " + e + " items";
                return new o(t)
              }, l.prototype._resolveEmptyArray = function () {
                this._reject(this._getRangeError(0))
              }, t.some = function (e, t) {
                return u(e, t)
              }, t.prototype.some = function (e) {
                return u(this, e)
              }, t._SomePromiseArray = l
            }
          }, {"./errors": 12, "./util": 36}], 32: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
              function t(e) {
                void 0 !== e ? (e = e._target(), this._bitField = e._bitField, this._settledValueField = e._isFateSealed() ? e._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0)
              }

              t.prototype._settledValue = function () {
                return this._settledValueField
              };
              var n = t.prototype.value = function () {
                if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
                return this._settledValue()
              }, i = t.prototype.error = t.prototype.reason = function () {
                if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
                return this._settledValue()
              }, r = t.prototype.isFulfilled = function () {
                return 0 != (33554432 & this._bitField)
              }, o = t.prototype.isRejected = function () {
                return 0 != (16777216 & this._bitField)
              }, a = t.prototype.isPending = function () {
                return 0 == (50397184 & this._bitField)
              }, s = t.prototype.isResolved = function () {
                return 0 != (50331648 & this._bitField)
              };
              t.prototype.isCancelled = function () {
                return 0 != (8454144 & this._bitField)
              }, e.prototype.__isCancelled = function () {
                return 65536 == (65536 & this._bitField)
              }, e.prototype._isCancelled = function () {
                return this._target().__isCancelled()
              }, e.prototype.isCancelled = function () {
                return 0 != (8454144 & this._target()._bitField)
              }, e.prototype.isPending = function () {
                return a.call(this._target())
              }, e.prototype.isRejected = function () {
                return o.call(this._target())
              }, e.prototype.isFulfilled = function () {
                return r.call(this._target())
              }, e.prototype.isResolved = function () {
                return s.call(this._target())
              }, e.prototype.value = function () {
                return n.call(this._target())
              }, e.prototype.reason = function () {
                var e = this._target();
                return e._unsetRejectionIsUnhandled(), i.call(e)
              }, e.prototype._value = function () {
                return this._settledValue()
              }, e.prototype._reason = function () {
                return this._unsetRejectionIsUnhandled(), this._settledValue()
              }, e.PromiseInspection = t
            }
          }, {}], 33: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n) {
              var i = e("./util"), r = i.errorObj, o = i.isObject, a = {}.hasOwnProperty;
              return function (e, s) {
                if (o(e)) {
                  if (e instanceof t) return e;
                  var c = function (e) {
                    try {
                      return function (e) {
                        return e.then
                      }(e)
                    } catch (e) {
                      return r.e = e, r
                    }
                  }(e);
                  if (c === r) {
                    s && s._pushContext();
                    var l = t.reject(c.e);
                    return s && s._popContext(), l
                  }
                  if ("function" == typeof c) return function (e) {
                    try {
                      return a.call(e, "_promise0")
                    } catch (e) {
                      return !1
                    }
                  }(e) ? (l = new t(n), e._then(l._fulfill, l._reject, void 0, l, null), l) : function (e, o, a) {
                    var s = new t(n), c = s;
                    a && a._pushContext(), s._captureStackTrace(), a && a._popContext();
                    var l = i.tryCatch(o).call(e, (function (e) {
                      s && (s._resolveCallback(e), s = null)
                    }), (function (e) {
                      s && (s._rejectCallback(e, !1, !0), s = null)
                    }));
                    return s && l === r && (s._rejectCallback(l.e, !0, !0), s = null), c
                  }(e, c, s)
                }
                return e
              }
            }
          }, {"./util": 36}], 34: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i) {
              var r = e("./util"), o = t.TimeoutError;

              function a(e) {
                this.handle = e
              }

              a.prototype._resultCancelled = function () {
                clearTimeout(this.handle)
              };
              var s = function (e) {
                return c(+this).thenReturn(e)
              }, c = t.delay = function (e, r) {
                var o, c;
                return void 0 !== r ? (o = t.resolve(r)._then(s, null, null, e, void 0), i.cancellation() && r instanceof t && o._setOnCancel(r)) : (o = new t(n), c = setTimeout((function () {
                  o._fulfill()
                }), +e), i.cancellation() && o._setOnCancel(new a(c)), o._captureStackTrace()), o._setAsyncGuaranteed(), o
              };

              function l(e) {
                return clearTimeout(this.handle), e
              }

              function u(e) {
                throw clearTimeout(this.handle), e
              }

              t.prototype.delay = function (e) {
                return c(e, this)
              }, t.prototype.timeout = function (e, t) {
                var n, s;
                e = +e;
                var c = new a(setTimeout((function () {
                  n.isPending() && function (e, t, n) {
                    var i;
                    i = "string" != typeof t ? t instanceof Error ? t : new o("operation timed out") : new o(t), r.markAsOriginatingFromRejection(i), e._attachExtraTrace(i), e._reject(i), null != n && n.cancel()
                  }(n, t, s)
                }), e));
                return i.cancellation() ? (s = this.then(), (n = s._then(l, u, void 0, c, void 0))._setOnCancel(c)) : n = this._then(l, u, void 0, c, void 0), n
              }
            }
          }, {"./util": 36}], 35: [function (e, t, n) {
            "use strict";
            t.exports = function (t, n, i, r, o, a) {
              var s = e("./util"), c = e("./errors").TypeError, l = e("./util").inherits, u = s.errorObj,
                d = s.tryCatch, h = {};

              function p(e) {
                setTimeout((function () {
                  throw e
                }), 0)
              }

              function f(e, n) {
                var r = 0, a = e.length, s = new t(o);
                return function o() {
                  if (r >= a) return s._fulfill();
                  var c = function (e) {
                    var t = i(e);
                    return t !== e && "function" == typeof e._isDisposable && "function" == typeof e._getDisposer && e._isDisposable() && t._setDisposable(e._getDisposer()), t
                  }(e[r++]);
                  if (c instanceof t && c._isDisposable()) {
                    try {
                      c = i(c._getDisposer().tryDispose(n), e.promise)
                    } catch (e) {
                      return p(e)
                    }
                    if (c instanceof t) return c._then(o, p, null, null, null)
                  }
                  o()
                }(), s
              }

              function v(e, t, n) {
                this._data = e, this._promise = t, this._context = n
              }

              function g(e, t, n) {
                this.constructor$(e, t, n)
              }

              function m(e) {
                return v.isDisposer(e) ? (this.resources[this.index]._setDisposable(e), e.promise()) : e
              }

              function y(e) {
                this.length = e, this.promise = null, this[e - 1] = null
              }

              v.prototype.data = function () {
                return this._data
              }, v.prototype.promise = function () {
                return this._promise
              }, v.prototype.resource = function () {
                return this.promise().isFulfilled() ? this.promise().value() : h
              }, v.prototype.tryDispose = function (e) {
                var t = this.resource(), n = this._context;
                void 0 !== n && n._pushContext();
                var i = t !== h ? this.doDispose(t, e) : null;
                return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, i
              }, v.isDisposer = function (e) {
                return null != e && "function" == typeof e.resource && "function" == typeof e.tryDispose
              }, l(g, v), g.prototype.doDispose = function (e, t) {
                return this.data().call(e, e, t)
              }, y.prototype._resultCancelled = function () {
                for (var e = this.length, n = 0; n < e; ++n) {
                  var i = this[n];
                  i instanceof t && i.cancel()
                }
              }, t.using = function () {
                var e = arguments.length;
                if (e < 2) return n("you must pass at least 2 arguments to Promise.using");
                var r, o = arguments[e - 1];
                if ("function" != typeof o) return n("expecting a function but got " + s.classString(o));
                var c = !0;
                2 === e && Array.isArray(arguments[0]) ? (e = (r = arguments[0]).length, c = !1) : (r = arguments, e--);
                for (var l = new y(e), h = 0; h < e; ++h) {
                  var p = r[h];
                  if (v.isDisposer(p)) {
                    var g = p;
                    (p = p.promise())._setDisposable(g)
                  } else {
                    var b = i(p);
                    b instanceof t && (p = b._then(m, null, null, {resources: l, index: h}, void 0))
                  }
                  l[h] = p
                }
                var w = new Array(l.length);
                for (h = 0; h < w.length; ++h) w[h] = t.resolve(l[h]).reflect();
                var x = t.all(w).then((function (e) {
                  for (var t = 0; t < e.length; ++t) {
                    var n = e[t];
                    if (n.isRejected()) return u.e = n.error(), u;
                    if (!n.isFulfilled()) return void x.cancel();
                    e[t] = n.value()
                  }
                  _._pushContext(), o = d(o);
                  var i = c ? o.apply(void 0, e) : o(e), r = _._popContext();
                  return a.checkForgottenReturns(i, r, "Promise.using", _), i
                })), _ = x.lastly((function () {
                  var e = new t.PromiseInspection(x);
                  return f(l, e)
                }));
                return l.promise = _, _._setOnCancel(l), _
              }, t.prototype._setDisposable = function (e) {
                this._bitField = 131072 | this._bitField, this._disposer = e
              }, t.prototype._isDisposable = function () {
                return (131072 & this._bitField) > 0
              }, t.prototype._getDisposer = function () {
                return this._disposer
              }, t.prototype._unsetDisposable = function () {
                this._bitField = -131073 & this._bitField, this._disposer = void 0
              }, t.prototype.disposer = function (e) {
                if ("function" == typeof e) return new g(e, this, r());
                throw new c
              }
            }
          }, {"./errors": 12, "./util": 36}], 36: [function (e, r, o) {
            "use strict";
            var a = e("./es5"), s = "undefined" == typeof navigator, c = {e: {}}, l,
              u = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== i ? i : void 0 !== this ? this : null;

            function d() {
              try {
                var e = l;
                return l = null, e.apply(this, arguments)
              } catch (e) {
                return c.e = e, c
              }
            }

            function h(e) {
              return l = e, d
            }

            var p = function (e, t) {
              var n = {}.hasOwnProperty;

              function i() {
                for (var i in this.constructor = e, this.constructor$ = t, t.prototype) n.call(t.prototype, i) && "$" !== i.charAt(i.length - 1) && (this[i + "$"] = t.prototype[i])
              }

              return i.prototype = t.prototype, e.prototype = new i, e.prototype
            };

            function f(e) {
              return null == e || !0 === e || !1 === e || "string" == typeof e || "number" == typeof e
            }

            function v(e) {
              return "function" == typeof e || "object" == typeof e && null !== e
            }

            function g(e) {
              return f(e) ? new Error(A(e)) : e
            }

            function m(e, t) {
              var n, i = e.length, r = new Array(i + 1);
              for (n = 0; n < i; ++n) r[n] = e[n];
              return r[n] = t, r
            }

            function y(e, t, n) {
              if (!a.isES5) return {}.hasOwnProperty.call(e, t) ? e[t] : void 0;
              var i = Object.getOwnPropertyDescriptor(e, t);
              return null != i ? null == i.get && null == i.set ? i.value : n : void 0
            }

            function b(e, t, n) {
              if (f(e)) return e;
              var i = {value: n, configurable: !0, enumerable: !1, writable: !0};
              return a.defineProperty(e, t, i), e
            }

            function w(e) {
              throw e
            }

            var x = function () {
              var e = [Array.prototype, Object.prototype, Function.prototype], t = function (t) {
                for (var n = 0; n < e.length; ++n) if (e[n] === t) return !0;
                return !1
              };
              if (a.isES5) {
                var n = Object.getOwnPropertyNames;
                return function (e) {
                  for (var i = [], r = Object.create(null); null != e && !t(e);) {
                    var o;
                    try {
                      o = n(e)
                    } catch (e) {
                      return i
                    }
                    for (var s = 0; s < o.length; ++s) {
                      var c = o[s];
                      if (!r[c]) {
                        r[c] = !0;
                        var l = Object.getOwnPropertyDescriptor(e, c);
                        null != l && null == l.get && null == l.set && i.push(c)
                      }
                    }
                    e = a.getPrototypeOf(e)
                  }
                  return i
                }
              }
              var i = {}.hasOwnProperty;
              return function (n) {
                if (t(n)) return [];
                var r = [];
                e:for (var o in n) if (i.call(n, o)) r.push(o); else {
                  for (var a = 0; a < e.length; ++a) if (i.call(e[a], o)) continue e;
                  r.push(o)
                }
                return r
              }
            }(), _ = /this\s*\.\s*\S+\s*=/;

            function C(e) {
              try {
                if ("function" == typeof e) {
                  var t = a.names(e.prototype), n = a.isES5 && t.length > 1,
                    i = t.length > 0 && !(1 === t.length && "constructor" === t[0]),
                    r = _.test(e + "") && a.names(e).length > 0;
                  if (n || i || r) return !0
                }
                return !1
              } catch (e) {
                return !1
              }
            }

            function k(e) {
              function t() {
              }

              t.prototype = e;
              var n = new t;

              function i() {
                return typeof n.foo
              }

              return i(), i(), e
            }

            var S = /^[a-z$_][a-z$_0-9]*$/i;

            function E(e) {
              return S.test(e)
            }

            function R(e, t, n) {
              for (var i = new Array(e), r = 0; r < e; ++r) i[r] = t + r + n;
              return i
            }

            function A(e) {
              try {
                return e + ""
              } catch (e) {
                return "[no string representation]"
              }
            }

            function T(e) {
              return e instanceof Error || null !== e && "object" == typeof e && "string" == typeof e.message && "string" == typeof e.name
            }

            function O(e) {
              try {
                b(e, "isOperational", !0)
              } catch (e) {
              }
            }

            function j(e) {
              return null != e && (e instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === e.isOperational)
            }

            function B(e) {
              return T(e) && a.propertyIsWritable(e, "stack")
            }

            var I = "stack" in new Error ? function (e) {
              return B(e) ? e : new Error(A(e))
            } : function (e) {
              if (B(e)) return e;
              try {
                throw new Error(A(e))
              } catch (e) {
                return e
              }
            };

            function L(e) {
              return {}.toString.call(e)
            }

            function F(e, t, n) {
              for (var i = a.names(e), r = 0; r < i.length; ++r) {
                var o = i[r];
                if (n(o)) try {
                  a.defineProperty(t, o, a.getDescriptor(e, o))
                } catch (e) {
                }
              }
            }

            var M = function (e) {
              return a.isArray(e) ? e : null
            };
            if ("undefined" != typeof Symbol && Symbol.iterator) {
              var P = "function" == typeof Array.from ? function (e) {
                return Array.from(e)
              } : function (e) {
                for (var t, n = [], i = e[Symbol.iterator](); !(t = i.next()).done;) n.push(t.value);
                return n
              };
              M = function (e) {
                return a.isArray(e) ? e : null != e && "function" == typeof e[Symbol.iterator] ? P(e) : null
              }
            }
            var N = void 0 !== t && "[object process]" === L(t).toLowerCase(), V = void 0 !== t && void 0 !== t.env, D;

            function q(e) {
              return V ? t.env[e] : void 0
            }

            function H() {
              if ("function" == typeof n) try {
                if ("[object Promise]" === L(new n((function () {
                })))) return n
              } catch (e) {
              }
            }

            function $(e, t) {
              if (null === e || "function" != typeof t || t === D) return t;
              null !== e.domain && (t = e.domain.bind(t));
              var n = e.async;
              if (null !== n) {
                var i = t;
                t = function () {
                  var e = new Array(2).concat([].slice.call(arguments));
                  return e[0] = i, e[1] = this, n.runInAsyncScope.apply(n, e)
                }
              }
              return t
            }

            var G = {
              setReflectHandler: function (e) {
                D = e
              },
              isClass: C,
              isIdentifier: E,
              inheritedDataKeys: x,
              getDataPropertyOrDefault: y,
              thrower: w,
              isArray: a.isArray,
              asArray: M,
              notEnumerableProp: b,
              isPrimitive: f,
              isObject: v,
              isError: T,
              canEvaluate: s,
              errorObj: c,
              tryCatch: h,
              inherits: p,
              withAppended: m,
              maybeWrapAsError: g,
              toFastProperties: k,
              filledRange: R,
              toString: A,
              canAttachTrace: B,
              ensureErrorObject: I,
              originatesFromRejection: j,
              markAsOriginatingFromRejection: O,
              classString: L,
              copyDescriptors: F,
              isNode: N,
              hasEnvVariables: V,
              env: q,
              global: u,
              getNativePromise: H,
              contextBind: $
            }, z;
            G.isRecentNode = G.isNode && (t.versions && t.versions.node ? z = t.versions.node.split(".").map(Number) : t.version && (z = t.version.split(".").map(Number)), 0 === z[0] && z[1] > 10 || z[0] > 0), G.nodeSupportsAsyncResource = G.isNode && function () {
              var t = !1;
              try {
                t = "function" == typeof e("async_hooks").AsyncResource.prototype.runInAsyncScope
              } catch (e) {
                t = !1
              }
              return t
            }(), G.isNode && G.toFastProperties(t);
            try {
              throw new Error
            } catch (e) {
              G.lastLineError = e
            }
            r.exports = G
          }, {"./es5": 13, async_hooks: void 0}]
        }, {}, [4])(4)
      }, e.exports = o(), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise)
    }).call(this, n(16), n(8), n(12), n(20).setImmediate)
  }, 2: function (e, t, n) {
    "use strict";
    n.d(t, "z", (function () {
      return k
    })), n.d(t, "x", (function () {
      return S
    })), n.d(t, "r", (function () {
      return R
    })), n.d(t, "t", (function () {
      return A
    })), n.d(t, "s", (function () {
      return N
    })), n.d(t, "v", (function () {
      return U
    })), n.d(t, "y", (function () {
      return te
    })), n.d(t, "w", (function () {
      return ce
    })), n.d(t, "a", (function () {
      return _e
    })), n.d(t, "n", (function () {
      return Ce
    })), n.d(t, "i", (function () {
      return Me
    })), n.d(t, "q", (function () {
      return $e
    })), n.d(t, "l", (function () {
      return Ge
    })), n.d(t, "u", (function () {
      return An
    })), n.d(t, "f", (function () {
      return Tn
    })), n.d(t, "g", (function () {
      return On
    })), n.d(t, "e", (function () {
      return Vn
    })), n.d(t, "m", (function () {
      return Zn
    })), n.d(t, "k", (function () {
      return ei
    })), n.d(t, "c", (function () {
      return ti
    })), n.d(t, "d", (function () {
      return ii
    })), n.d(t, "o", (function () {
      return oi
    })), n.d(t, "A", (function () {
      return ai
    })), n.d(t, "b", (function () {
      return si
    })), n.d(t, "p", (function () {
      return ci
    })), n.d(t, "h", (function () {
      return li
    })), n.d(t, "j", (function () {
      return hi
    }));
    var i, r, o, a, s, c, l, u, d, h, p, f, v, g = n(4), m = n(0), y = n(13), b = n(1), w = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }(), x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

    function _(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function C(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    var k = "Binding:target", S = "Binding:source", E = Object.create(null);

    function R(e) {
      if (e in E) return E[e];
      var t = e.charAt(0).toLowerCase() + e.slice(1).replace(/[_.-](\w|$)/g, (function (e, t) {
        return t.toUpperCase()
      }));
      return E[e] = t, t
    }

    function A(e, t) {
      return {bindingContext: e, parentOverrideContext: t || null}
    }

    function T(e, t, n) {
      var i = t.overrideContext;
      if (n) {
        for (; n && i;) n--, i = i.parentOverrideContext;
        if (n || !i) return;
        return e in i ? i : i.bindingContext
      }
      for (; i && !(e in i) && !(i.bindingContext && e in i.bindingContext);) i = i.parentOverrideContext;
      return i ? e in i ? i : i.bindingContext : t.bindingContext || t.overrideContext
    }

    var O = [], j = [], B = -1;

    function I(e) {
      if (e === B) {
        B += 5;
        for (var t = O.length = j.length = B + 1, n = e + 1; n < t; ++n) O[n] = "_observer" + n, j[n] = "_observerVersion" + n
      }
    }

    function L(e) {
      for (var t = void 0 === this._observerSlots ? 0 : this._observerSlots, n = t; n-- && this[O[n]] !== e;) ;
      if (-1 === n) {
        for (n = 0; this[O[n]];) n++;
        this[O[n]] = e, e.subscribe(S, this), n === t && (this._observerSlots = n + 1)
      }
      void 0 === this._version && (this._version = 0), this[j[n]] = this._version, I(n)
    }

    function F(e, t) {
      var n = this.observerLocator.getObserver(e, t);
      L.call(this, n)
    }

    function M(e) {
      var t = this.observerLocator.getArrayObserver(e);
      L.call(this, t)
    }

    function P(e) {
      for (var t = this._observerSlots; t--;) if (e || this[j[t]] !== this._version) {
        var n = this[O[t]];
        this[O[t]] = null, n && n.unsubscribe(S, this)
      }
    }

    function N() {
      return function (e) {
        e.prototype.observeProperty = F, e.prototype.observeArray = M, e.prototype.unobserve = P, e.prototype.addObserver = L
      }
    }

    I(-1);
    var V = [], D = {}, q = 0, H = 100, $ = !1, G = 0;

    function z(e) {
      for (var t = V.length, n = 0; n < t;) {
        var i = V[n];
        if (D[i.__connectQueueId] = !1, i.connect(!0), ++n % 100 == 0 && m.d.performance.now() - e > 15) break
      }
      V.splice(0, n), V.length ? m.d.requestAnimationFrame(z) : ($ = !1, G = 0)
    }

    function U(e) {
      if (G < H) G++, e.connect(!1); else {
        var t = e.__connectQueueId;
        void 0 === t && (t = q, q++, e.__connectQueueId = t), D[t] || (V.push(e), D[t] = !0)
      }
      $ || ($ = !0, m.d.requestAnimationFrame(z))
    }

    function W(e, t) {
      return !this.hasSubscriber(e, t) && (this._context0 ? this._context1 ? this._context2 ? this._contextsRest ? (this._contextsRest.push(e), this._callablesRest.push(t), !0) : (this._contextsRest = [e], this._callablesRest = [t], !0) : (this._context2 = e, this._callable2 = t, !0) : (this._context1 = e, this._callable1 = t, !0) : (this._context0 = e, this._callable0 = t, !0))
    }

    function Q(e, t) {
      if (this._context0 === e && this._callable0 === t) return this._context0 = null, this._callable0 = null, !0;
      if (this._context1 === e && this._callable1 === t) return this._context1 = null, this._callable1 = null, !0;
      if (this._context2 === e && this._callable2 === t) return this._context2 = null, this._callable2 = null, !0;
      var n = this._callablesRest;
      if (void 0 === n || 0 === n.length) return !1;
      for (var i = this._contextsRest, r = 0; (n[r] !== t || i[r] !== e) && n.length > r;) r++;
      return !(r >= n.length) && (i.splice(r, 1), n.splice(r, 1), !0)
    }

    var J = [], K = [], X = [];

    function Y(e, t) {
      var n = this._context0, i = this._callable0, r = this._context1, o = this._callable1, a = this._context2,
        s = this._callable2, c = this._contextsRest ? this._contextsRest.length : 0, l = void 0, u = void 0, d = void 0,
        h = void 0;
      if (c) {
        for (d = X.length; d-- && X[d];) ;
        for (d < 0 ? (d = X.length, l = [], u = [], X.push(!0), J.push(l), K.push(u)) : (X[d] = !0, l = J[d], u = K[d]), h = c; h--;) l[h] = this._contextsRest[h], u[h] = this._callablesRest[h]
      }
      if (n && (i ? i.call(n, e, t) : n(e, t)), r && (o ? o.call(r, e, t) : r(e, t)), a && (s ? s.call(a, e, t) : a(e, t)), c) {
        for (h = 0; h < c; h++) {
          var p = u[h], f = l[h];
          p ? p.call(f, e, t) : f(e, t), l[h] = null, u[h] = null
        }
        X[d] = !1
      }
    }

    function Z() {
      return !!(this._context0 || this._context1 || this._context2 || this._contextsRest && this._contextsRest.length)
    }

    function ee(e, t) {
      if (this._context0 === e && this._callable0 === t || this._context1 === e && this._callable1 === t || this._context2 === e && this._callable2 === t) return !0;
      var n = void 0, i = this._contextsRest;
      if (!i || 0 === (n = i.length)) return !1;
      for (var r = this._callablesRest; n--;) if (i[n] === e && r[n] === t) return !0;
      return !1
    }

    function te() {
      return function (e) {
        e.prototype.addSubscriber = W, e.prototype.removeSubscriber = Q, e.prototype.callSubscribers = Y, e.prototype.hasSubscribers = Z, e.prototype.hasSubscriber = ee
      }
    }

    var ne = N()(i = te()(i = function () {
      function e(e, t, n, i) {
        this.scope = e, this.expression = t, this.observerLocator = n, this.lookupFunctions = i
      }

      return e.prototype.getValue = function () {
        return this.expression.evaluate(this.scope, this.lookupFunctions)
      }, e.prototype.setValue = function (e) {
        this.expression.assign(this.scope, e)
      }, e.prototype.subscribe = function (e, t) {
        var n = this;
        if (this.hasSubscribers() || (this.oldValue = this.expression.evaluate(this.scope, this.lookupFunctions), this.expression.connect(this, this.scope)), this.addSubscriber(e, t), 1 === arguments.length && e instanceof Function) return {
          dispose: function () {
            n.unsubscribe(e, t)
          }
        }
      }, e.prototype.unsubscribe = function (e, t) {
        this.removeSubscriber(e, t) && !this.hasSubscribers() && (this.unobserve(!0), this.oldValue = void 0)
      }, e.prototype.call = function () {
        var e = this.expression.evaluate(this.scope, this.lookupFunctions), t = this.oldValue;
        e !== t && (this.oldValue = e, this.callSubscribers(e, t)), this._version++, this.expression.connect(this, this.scope), this.unobserve(!1)
      }, e
    }()) || i) || i;

    function ie(e) {
      return +e
    }

    function re(e, t, n) {
      return {index: e, removed: t, addedCount: n}
    }

    function oe() {
    }

    oe.prototype = {
      calcEditDistances: function (e, t, n, i, r, o) {
        for (var a = o - r + 1, s = n - t + 1, c = new Array(a), l = void 0, u = void 0, d = 0; d < a; ++d) c[d] = new Array(s), c[d][0] = d;
        for (var h = 0; h < s; ++h) c[0][h] = h;
        for (var p = 1; p < a; ++p) for (var f = 1; f < s; ++f) this.equals(e[t + f - 1], i[r + p - 1]) ? c[p][f] = c[p - 1][f - 1] : (l = c[p - 1][f] + 1, u = c[p][f - 1] + 1, c[p][f] = l < u ? l : u);
        return c
      }, spliceOperationsFromEditDistances: function (e) {
        for (var t = e.length - 1, n = e[0].length - 1, i = e[t][n], r = []; t > 0 || n > 0;) if (0 !== t) if (0 !== n) {
          var o = e[t - 1][n - 1], a = e[t - 1][n], s = e[t][n - 1], c = void 0;
          (c = a < s ? a < o ? a : o : s < o ? s : o) === o ? (o === i ? r.push(0) : (r.push(1), i = o), t--, n--) : c === a ? (r.push(3), t--, i = a) : (r.push(2), n--, i = s)
        } else r.push(3), t--; else r.push(2), n--;
        return r.reverse(), r
      }, calcSplices: function (e, t, n, i, r, o) {
        var a = 0, s = 0, c = Math.min(n - t, o - r);
        if (0 === t && 0 === r && (a = this.sharedPrefix(e, i, c)), n === e.length && o === i.length && (s = this.sharedSuffix(e, i, c - a)), r += a, o -= s, (n -= s) - (t += a) == 0 && o - r == 0) return [];
        if (t === n) {
          for (var l = re(t, [], 0); r < o;) l.removed.push(i[r++]);
          return [l]
        }
        if (r === o) return [re(t, [], n - t)];
        for (var u = this.spliceOperationsFromEditDistances(this.calcEditDistances(e, t, n, i, r, o)), d = void 0, h = [], p = t, f = r, v = 0; v < u.length; ++v) switch (u[v]) {
          case 0:
            d && (h.push(d), d = void 0), p++, f++;
            break;
          case 1:
            d || (d = re(p, [], 0)), d.addedCount++, p++, d.removed.push(i[f]), f++;
            break;
          case 2:
            d || (d = re(p, [], 0)), d.addedCount++, p++;
            break;
          case 3:
            d || (d = re(p, [], 0)), d.removed.push(i[f]), f++
        }
        return d && h.push(d), h
      }, sharedPrefix: function (e, t, n) {
        for (var i = 0; i < n; ++i) if (!this.equals(e[i], t[i])) return i;
        return n
      }, sharedSuffix: function (e, t, n) {
        for (var i = e.length, r = t.length, o = 0; o < n && this.equals(e[--i], t[--r]);) o++;
        return o
      }, calculateSplices: function (e, t) {
        return this.calcSplices(e, 0, e.length, t, 0, t.length)
      }, equals: function (e, t) {
        return e === t
      }
    };
    var ae = new oe;

    function se(e, t, n, i, r, o) {
      return ae.calcSplices(e, t, n, i, r, o)
    }

    function ce(e, t, n, i) {
      for (var r, o, a, s, c = re(t, n, i), l = !1, u = 0, d = 0; d < e.length; d++) {
        var h = e[d];
        if (h.index += u, !l) {
          var p = (r = c.index, o = c.index + c.removed.length, a = h.index, s = h.index + h.addedCount, o < a || s < r ? -1 : o === a || s === r ? 0 : r < a ? o < s ? o - a : s - a : s < o ? s - r : o - r);
          if (p >= 0) {
            e.splice(d, 1), d--, u -= h.addedCount - h.removed.length, c.addedCount += h.addedCount - p;
            var f = c.removed.length + h.removed.length - p;
            if (c.addedCount || f) {
              var v = h.removed;
              if (c.index < h.index) {
                var g = c.removed.slice(0, h.index - c.index);
                Array.prototype.push.apply(g, v), v = g
              }
              if (c.index + c.removed.length > h.index + h.addedCount) {
                var m = c.removed.slice(h.index + h.addedCount - c.index);
                Array.prototype.push.apply(v, m)
              }
              c.removed = v, h.index < c.index && (c.index = h.index)
            } else l = !0
          } else if (c.index < h.index) {
            l = !0, e.splice(d, 0, c), d++;
            var y = c.addedCount - c.removed.length;
            h.index += y, u += y
          }
        }
      }
      l || e.push(c)
    }

    function le(e, t) {
      var n = [];
      return function (e, t) {
        for (var n, i = [], r = 0; r < t.length; r++) {
          var o = t[r];
          switch (o.type) {
            case"splice":
              ce(i, o.index, o.removed.slice(), o.addedCount);
              break;
            case"add":
            case"update":
            case"delete":
              if (+(n = o.name) != n >>> 0) continue;
              var a = ie(o.name);
              if (a < 0) continue;
              ce(i, a, [o.oldValue], "delete" === o.type ? 0 : 1);
              break;
            default:
              console.error("Unexpected record type: " + JSON.stringify(o))
          }
        }
        return i
      }(0, t).forEach((function (t) {
        1 !== t.addedCount || 1 !== t.removed.length ? n = n.concat(se(e, t.index, t.index + t.addedCount, t.removed, 0, t.removed.length)) : t.removed[0] !== e[t.index] && n.push(t)
      })), n
    }

    var ue = te()(r = function () {
        function e(e, t) {
          this.taskQueue = e, this.queued = !1, this.changeRecords = null, this.oldCollection = null, this.collection = t, this.lengthPropertyName = t instanceof Map || t instanceof Set ? "size" : "length"
        }

        return e.prototype.subscribe = function (e, t) {
          this.addSubscriber(e, t)
        }, e.prototype.unsubscribe = function (e, t) {
          this.removeSubscriber(e, t)
        }, e.prototype.addChangeRecord = function (e) {
          if (this.hasSubscribers() || this.lengthObserver) {
            if ("splice" === e.type) {
              var t = e.index, n = e.object.length;
              t > n ? t = n - e.addedCount : t < 0 && (t = n + e.removed.length + t - e.addedCount), t < 0 && (t = 0), e.index = t
            }
            null === this.changeRecords ? this.changeRecords = [e] : this.changeRecords.push(e), this.queued || (this.queued = !0, this.taskQueue.queueMicroTask(this))
          }
        }, e.prototype.flushChangeRecords = function () {
          (this.changeRecords && this.changeRecords.length || this.oldCollection) && this.call()
        }, e.prototype.reset = function (e) {
          this.oldCollection = e, this.hasSubscribers() && !this.queued && (this.queued = !0, this.taskQueue.queueMicroTask(this))
        }, e.prototype.getLengthObserver = function () {
          return this.lengthObserver || (this.lengthObserver = new de(this.collection))
        }, e.prototype.call = function () {
          var e = this.changeRecords, t = this.oldCollection, n = void 0;
          this.queued = !1, this.changeRecords = [], this.oldCollection = null, this.hasSubscribers() && (n = t ? this.collection instanceof Map || this.collection instanceof Set ? function (e) {
            for (var t, n, i, r = new Array(e.size), o = e.keys(), a = 0, s = void 0; (s = o.next()) && !s.done;) r[a] = (t = "added", n = e, i = s.value, {
              type: t,
              object: n,
              key: i,
              oldValue: void 0
            }), a++;
            return r
          }(t) : se(this.collection, 0, this.collection.length, t, 0, t.length) : this.collection instanceof Map || this.collection instanceof Set ? e : le(this.collection, e), this.callSubscribers(n)), this.lengthObserver && this.lengthObserver.call(this.collection[this.lengthPropertyName])
        }, e
      }()) || r, de = te()(o = function () {
        function e(e) {
          this.collection = e, this.lengthPropertyName = e instanceof Map || e instanceof Set ? "size" : "length", this.currentValue = e[this.lengthPropertyName]
        }

        return e.prototype.getValue = function () {
          return this.collection[this.lengthPropertyName]
        }, e.prototype.setValue = function (e) {
          this.collection[this.lengthPropertyName] = e
        }, e.prototype.subscribe = function (e, t) {
          this.addSubscriber(e, t)
        }, e.prototype.unsubscribe = function (e, t) {
          this.removeSubscriber(e, t)
        }, e.prototype.call = function (e) {
          var t = this.currentValue;
          this.callSubscribers(e, t), this.currentValue = e
        }, e
      }()) || o, he = Array.prototype, pe = he.pop, fe = he.push, ve = he.reverse, ge = he.shift, me = he.sort,
      ye = he.splice, be = he.unshift;
    he.__au_patched__ ? g.getLogger("array-observation").warn("Detected 2nd attempt of patching array from Aurelia binding. This is probably caused by dependency mismatch between core modules and a 3rd party plugin. Please see https://github.com/aurelia/cli/pull/906 if you are using webpack.") : (Reflect.defineProperty(he, "__au_patched__", {value: 1}), he.pop = function () {
      var e = this.length > 0, t = pe.apply(this, arguments);
      return e && void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
        type: "delete",
        object: this,
        name: this.length,
        oldValue: t
      }), t
    }, he.push = function () {
      var e = fe.apply(this, arguments);
      return void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
        type: "splice",
        object: this,
        index: this.length - arguments.length,
        removed: [],
        addedCount: arguments.length
      }), e
    }, he.reverse = function () {
      var e = void 0;
      void 0 !== this.__array_observer__ && (this.__array_observer__.flushChangeRecords(), e = this.slice());
      var t = ve.apply(this, arguments);
      return void 0 !== this.__array_observer__ && this.__array_observer__.reset(e), t
    }, he.shift = function () {
      var e = this.length > 0, t = ge.apply(this, arguments);
      return e && void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
        type: "delete",
        object: this,
        name: 0,
        oldValue: t
      }), t
    }, he.sort = function () {
      var e = void 0;
      void 0 !== this.__array_observer__ && (this.__array_observer__.flushChangeRecords(), e = this.slice());
      var t = me.apply(this, arguments);
      return void 0 !== this.__array_observer__ && this.__array_observer__.reset(e), t
    }, he.splice = function () {
      var e = ye.apply(this, arguments);
      return void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
        type: "splice",
        object: this,
        index: +arguments[0],
        removed: e,
        addedCount: arguments.length > 2 ? arguments.length - 2 : 0
      }), e
    }, he.unshift = function () {
      var e = be.apply(this, arguments);
      return void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
        type: "splice",
        object: this,
        index: 0,
        removed: [],
        addedCount: arguments.length
      }), e
    });
    var we = function (e) {
      function t(t, n) {
        return _(this, e.call(this, t, n))
      }

      return C(t, e), t.for = function (e, n) {
        return "__array_observer__" in n || Reflect.defineProperty(n, "__array_observer__", {
          value: t.create(e, n),
          enumerable: !1,
          configurable: !1
        }), n.__array_observer__
      }, t.create = function (e, n) {
        return new t(e, n)
      }, t
    }(ue), xe = function () {
      function e() {
        this.isAssignable = !1
      }

      return e.prototype.evaluate = function (e, t, n) {
        throw new Error('Binding expression "' + this + '" cannot be evaluated.')
      }, e.prototype.assign = function (e, t, n) {
        throw new Error('Binding expression "' + this + '" cannot be assigned to.')
      }, e.prototype.toString = function () {
        return "undefined" == typeof FEATURE_NO_UNPARSER ? He.unparse(this) : Function.prototype.toString.call(this)
      }, e
    }(), _e = function (e) {
      function t(t, n, i) {
        var r = _(this, e.call(this));
        return r.expression = t, r.name = n, r.args = i, r
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        return this.expression.evaluate(e, t)
      }, t.prototype.assign = function (e, t, n) {
        return this.expression.assign(e, t, n)
      }, t.prototype.accept = function (e) {
        return e.visitBindingBehavior(this)
      }, t.prototype.connect = function (e, t) {
        this.expression.connect(e, t)
      }, t.prototype.bind = function (e, t, n) {
        this.expression.expression && this.expression.bind && this.expression.bind(e, t, n);
        var i = n.bindingBehaviors(this.name);
        if (!i) throw new Error('No BindingBehavior named "' + this.name + '" was found!');
        var r = "behavior-" + this.name;
        if (e[r]) throw new Error('A binding behavior named "' + this.name + '" has already been applied to "' + this.expression + '"');
        e[r] = i, i.bind.apply(i, [e, t].concat(De(t, this.args, e.lookupFunctions)))
      }, t.prototype.unbind = function (e, t) {
        var n = "behavior-" + this.name;
        e[n].unbind(e, t), e[n] = null, this.expression.expression && this.expression.unbind && this.expression.unbind(e, t)
      }, t
    }(xe), Ce = function (e) {
      function t(t, n, i) {
        var r = _(this, e.call(this));
        return r.expression = t, r.name = n, r.args = i, r.allArgs = [t].concat(i), r
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        var n = t.valueConverters(this.name);
        if (!n) throw new Error('No ValueConverter named "' + this.name + '" was found!');
        return "toView" in n ? n.toView.apply(n, De(e, this.allArgs, t)) : this.allArgs[0].evaluate(e, t)
      }, t.prototype.assign = function (e, t, n) {
        var i = n.valueConverters(this.name);
        if (!i) throw new Error('No ValueConverter named "' + this.name + '" was found!');
        return "fromView" in i && (t = i.fromView.apply(i, [t].concat(De(e, this.args, n)))), this.allArgs[0].assign(e, t, n)
      }, t.prototype.accept = function (e) {
        return e.visitValueConverter(this)
      }, t.prototype.connect = function (e, t) {
        for (var n = this.allArgs, i = n.length; i--;) n[i].connect(e, t);
        var r = e.lookupFunctions.valueConverters(this.name);
        if (!r) throw new Error('No ValueConverter named "' + this.name + '" was found!');
        var o = r.signals;
        if (void 0 !== o) for (i = o.length; i--;) yi(e, o[i])
      }, t
    }(xe), ke = function (e) {
      function t(t, n) {
        var i = _(this, e.call(this));
        return i.target = t, i.value = n, i.isAssignable = !0, i
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        return this.target.assign(e, this.value.evaluate(e, t))
      }, t.prototype.accept = function (e) {
        e.visitAssign(this)
      }, t.prototype.connect = function (e, t) {
      }, t.prototype.assign = function (e, t) {
        this.value.assign(e, t), this.target.assign(e, t)
      }, t
    }(xe), Se = function (e) {
      function t(t, n, i) {
        var r = _(this, e.call(this));
        return r.condition = t, r.yes = n, r.no = i, r
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        return this.condition.evaluate(e, t) ? this.yes.evaluate(e, t) : this.no.evaluate(e, t)
      }, t.prototype.accept = function (e) {
        return e.visitConditional(this)
      }, t.prototype.connect = function (e, t) {
        this.condition.connect(e, t), this.condition.evaluate(t) ? this.yes.connect(e, t) : this.no.connect(e, t)
      }, t
    }(xe), Ee = function (e) {
      function t(t) {
        var n = _(this, e.call(this));
        return n.ancestor = t, n
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        for (var n = e.overrideContext, i = this.ancestor; i-- && n;) n = n.parentOverrideContext;
        return i < 1 && n ? n.bindingContext : void 0
      }, t.prototype.accept = function (e) {
        return e.visitAccessThis(this)
      }, t.prototype.connect = function (e, t) {
      }, t
    }(xe), Re = function (e) {
      function t(t, n) {
        var i = _(this, e.call(this));
        return i.name = t, i.ancestor = n, i.isAssignable = !0, i
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        return T(this.name, e, this.ancestor)[this.name]
      }, t.prototype.assign = function (e, t) {
        var n = T(this.name, e, this.ancestor);
        return n ? n[this.name] = t : void 0
      }, t.prototype.accept = function (e) {
        return e.visitAccessScope(this)
      }, t.prototype.connect = function (e, t) {
        var n = T(this.name, t, this.ancestor);
        e.observeProperty(n, this.name)
      }, t
    }(xe), Ae = function (e) {
      function t(t, n) {
        var i = _(this, e.call(this));
        return i.object = t, i.name = n, i.isAssignable = !0, i
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        var n = this.object.evaluate(e, t);
        return null == n ? n : n[this.name]
      }, t.prototype.assign = function (e, t) {
        var n = this.object.evaluate(e);
        return null == n && (n = {}, this.object.assign(e, n)), n[this.name] = t, t
      }, t.prototype.accept = function (e) {
        return e.visitAccessMember(this)
      }, t.prototype.connect = function (e, t) {
        this.object.connect(e, t);
        var n = this.object.evaluate(t);
        n && e.observeProperty(n, this.name)
      }, t
    }(xe), Te = function (e) {
      function t(t, n) {
        var i = _(this, e.call(this));
        return i.object = t, i.key = n, i.isAssignable = !0, i
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        return function (e, t) {
          if (Array.isArray(e)) return e[parseInt(t, 10)];
          if (e) return e[t];
          if (null == e) return;
          return e[t]
        }(this.object.evaluate(e, t), this.key.evaluate(e, t))
      }, t.prototype.assign = function (e, t) {
        return function (e, t, n) {
          if (Array.isArray(e)) {
            var i = parseInt(t, 10);
            e.length <= i && (e.length = i + 1), e[i] = n
          } else e[t] = n;
          return n
        }(this.object.evaluate(e), this.key.evaluate(e), t)
      }, t.prototype.accept = function (e) {
        return e.visitAccessKeyed(this)
      }, t.prototype.connect = function (e, t) {
        this.object.connect(e, t);
        var n = this.object.evaluate(t);
        if (n instanceof Object) {
          this.key.connect(e, t);
          var i = this.key.evaluate(t);
          null == i || Array.isArray(n) && "number" == typeof i || e.observeProperty(n, i)
        }
      }, t
    }(xe), Oe = function (e) {
      function t(t, n, i) {
        var r = _(this, e.call(this));
        return r.name = t, r.args = n, r.ancestor = i, r
      }

      return C(t, e), t.prototype.evaluate = function (e, t, n) {
        var i = De(e, this.args, t), r = T(this.name, e, this.ancestor), o = qe(r, this.name, n);
        if (o) return o.apply(r, i)
      }, t.prototype.accept = function (e) {
        return e.visitCallScope(this)
      }, t.prototype.connect = function (e, t) {
        for (var n = this.args, i = n.length; i--;) n[i].connect(e, t)
      }, t
    }(xe), je = function (e) {
      function t(t, n, i) {
        var r = _(this, e.call(this));
        return r.object = t, r.name = n, r.args = i, r
      }

      return C(t, e), t.prototype.evaluate = function (e, t, n) {
        var i = this.object.evaluate(e, t), r = De(e, this.args, t), o = qe(i, this.name, n);
        if (o) return o.apply(i, r)
      }, t.prototype.accept = function (e) {
        return e.visitCallMember(this)
      }, t.prototype.connect = function (e, t) {
        if (this.object.connect(e, t), qe(this.object.evaluate(t), this.name, !1)) for (var n = this.args, i = n.length; i--;) n[i].connect(e, t)
      }, t
    }(xe), Be = function (e) {
      function t(t, n) {
        var i = _(this, e.call(this));
        return i.func = t, i.args = n, i
      }

      return C(t, e), t.prototype.evaluate = function (e, t, n) {
        var i = this.func.evaluate(e, t);
        if ("function" == typeof i) return i.apply(null, De(e, this.args, t));
        if (n || null != i) throw new Error(this.func + " is not a function")
      }, t.prototype.accept = function (e) {
        return e.visitCallFunction(this)
      }, t.prototype.connect = function (e, t) {
        if (this.func.connect(e, t), "function" == typeof this.func.evaluate(t)) for (var n = this.args, i = n.length; i--;) n[i].connect(e, t)
      }, t
    }(xe), Ie = function (e) {
      function t(t, n, i) {
        var r = _(this, e.call(this));
        return r.operation = t, r.left = n, r.right = i, r
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        var n = this.left.evaluate(e, t);
        switch (this.operation) {
          case"&&":
            return n && this.right.evaluate(e, t);
          case"||":
            return n || this.right.evaluate(e, t)
        }
        var i = this.right.evaluate(e, t);
        switch (this.operation) {
          case"==":
            return n == i;
          case"===":
            return n === i;
          case"!=":
            return n != i;
          case"!==":
            return n !== i;
          case"instanceof":
            return "function" == typeof i && n instanceof i;
          case"in":
            return "object" === (void 0 === i ? "undefined" : x(i)) && null !== i && n in i
        }
        if (null === n || null === i || void 0 === n || void 0 === i) {
          switch (this.operation) {
            case"+":
              return null != n ? n : null != i ? i : 0;
            case"-":
              return null != n ? n : null != i ? 0 - i : 0
          }
          return null
        }
        switch (this.operation) {
          case"+":
            return function (e, t) {
              if (null !== e && null !== t) return "string" == typeof e && "string" != typeof t ? e + t.toString() : "string" != typeof e && "string" == typeof t ? e.toString() + t : e + t;
              if (null !== e) return e;
              if (null !== t) return t;
              return 0
            }(n, i);
          case"-":
            return n - i;
          case"*":
            return n * i;
          case"/":
            return n / i;
          case"%":
            return n % i;
          case"<":
            return n < i;
          case">":
            return n > i;
          case"<=":
            return n <= i;
          case">=":
            return n >= i;
          case"^":
            return n ^ i
        }
        throw new Error("Internal error [" + this.operation + "] not handled")
      }, t.prototype.accept = function (e) {
        return e.visitBinary(this)
      }, t.prototype.connect = function (e, t) {
        this.left.connect(e, t);
        var n = this.left.evaluate(t);
        "&&" === this.operation && !n || "||" === this.operation && n || this.right.connect(e, t)
      }, t
    }(xe), Le = function (e) {
      function t(t, n) {
        var i = _(this, e.call(this));
        return i.operation = t, i.expression = n, i
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        switch (this.operation) {
          case"!":
            return !this.expression.evaluate(e, t);
          case"typeof":
            return x(this.expression.evaluate(e, t));
          case"void":
            return void this.expression.evaluate(e, t)
        }
        throw new Error("Internal error [" + this.operation + "] not handled")
      }, t.prototype.accept = function (e) {
        return e.visitPrefix(this)
      }, t.prototype.connect = function (e, t) {
        this.expression.connect(e, t)
      }, t
    }(xe), Fe = function (e) {
      function t(t) {
        var n = _(this, e.call(this));
        return n.value = t, n
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        return this.value
      }, t.prototype.accept = function (e) {
        return e.visitLiteralPrimitive(this)
      }, t.prototype.connect = function (e, t) {
      }, t
    }(xe), Me = function (e) {
      function t(t) {
        var n = _(this, e.call(this));
        return n.value = t, n
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        return this.value
      }, t.prototype.accept = function (e) {
        return e.visitLiteralString(this)
      }, t.prototype.connect = function (e, t) {
      }, t
    }(xe), Pe = function (e) {
      function t(t, n, i, r) {
        var o = _(this, e.call(this));
        if (o.cooked = t, o.expressions = n || [], o.length = o.expressions.length, o.tagged = void 0 !== r, o.tagged) if (o.cooked.raw = i, o.tag = r, r instanceof Re) o.contextType = "Scope"; else {
          if (!(r instanceof Ae || r instanceof Te)) throw new Error(o.tag + " is not a valid template tag");
          o.contextType = "Object"
        }
        return o
      }

      return C(t, e), t.prototype.getScopeContext = function (e, t) {
        return T(this.tag.name, e, this.tag.ancestor)
      }, t.prototype.getObjectContext = function (e, t) {
        return this.tag.object.evaluate(e, t)
      }, t.prototype.evaluate = function (e, t, n) {
        for (var i = new Array(this.length), r = 0; r < this.length; r++) i[r] = this.expressions[r].evaluate(e, t);
        if (this.tagged) {
          var o = this.tag.evaluate(e, t);
          if ("function" == typeof o) {
            var a = this["get" + this.contextType + "Context"](e, t);
            return o.call.apply(o, [a, this.cooked].concat(i))
          }
          if (!n) return null;
          throw new Error(this.tag + " is not a function")
        }
        for (var s = this.cooked[0], c = 0; c < this.length; c++) s = String.prototype.concat(s, i[c], this.cooked[c + 1]);
        return s
      }, t.prototype.accept = function (e) {
        return e.visitLiteralTemplate(this)
      }, t.prototype.connect = function (e, t) {
        for (var n = 0; n < this.length; n++) this.expressions[n].connect(e, t);
        this.tagged && this.tag.connect(e, t)
      }, t
    }(xe), Ne = function (e) {
      function t(t) {
        var n = _(this, e.call(this));
        return n.elements = t, n
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        for (var n = this.elements, i = [], r = 0, o = n.length; r < o; ++r) i[r] = n[r].evaluate(e, t);
        return i
      }, t.prototype.accept = function (e) {
        return e.visitLiteralArray(this)
      }, t.prototype.connect = function (e, t) {
        for (var n = this.elements.length, i = 0; i < n; i++) this.elements[i].connect(e, t)
      }, t
    }(xe), Ve = function (e) {
      function t(t, n) {
        var i = _(this, e.call(this));
        return i.keys = t, i.values = n, i
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        for (var n = {}, i = this.keys, r = this.values, o = 0, a = i.length; o < a; ++o) n[i[o]] = r[o].evaluate(e, t);
        return n
      }, t.prototype.accept = function (e) {
        return e.visitLiteralObject(this)
      }, t.prototype.connect = function (e, t) {
        for (var n = this.keys.length, i = 0; i < n; i++) this.values[i].connect(e, t)
      }, t
    }(xe);

    function De(e, t, n) {
      for (var i = t.length, r = [], o = 0; o < i; o++) r[o] = t[o].evaluate(e, n);
      return r
    }

    function qe(e, t, n) {
      var i = null == e ? null : e[t];
      if ("function" == typeof i) return i;
      if (!n && null == i) return null;
      throw new Error(t + " is not a function")
    }

    var He = null;
    "undefined" == typeof FEATURE_NO_UNPARSER && (He = function () {
      function e(e) {
        this.buffer = e
      }

      return e.unparse = function (e) {
        var t = [], n = new He(t);
        return e.accept(n), t.join("")
      }, e.prototype.write = function (e) {
        this.buffer.push(e)
      }, e.prototype.writeArgs = function (e) {
        this.write("(");
        for (var t = 0, n = e.length; t < n; ++t) 0 !== t && this.write(","), e[t].accept(this);
        this.write(")")
      }, e.prototype.visitBindingBehavior = function (e) {
        var t = e.args;
        e.expression.accept(this), this.write("&" + e.name);
        for (var n = 0, i = t.length; n < i; ++n) this.write(":"), t[n].accept(this)
      }, e.prototype.visitValueConverter = function (e) {
        var t = e.args;
        e.expression.accept(this), this.write("|" + e.name);
        for (var n = 0, i = t.length; n < i; ++n) this.write(":"), t[n].accept(this)
      }, e.prototype.visitAssign = function (e) {
        e.target.accept(this), this.write("="), e.value.accept(this)
      }, e.prototype.visitConditional = function (e) {
        e.condition.accept(this), this.write("?"), e.yes.accept(this), this.write(":"), e.no.accept(this)
      }, e.prototype.visitAccessThis = function (e) {
        if (0 !== e.ancestor) {
          this.write("$parent");
          for (var t = e.ancestor - 1; t--;) this.write(".$parent")
        } else this.write("$this")
      }, e.prototype.visitAccessScope = function (e) {
        for (var t = e.ancestor; t--;) this.write("$parent.");
        this.write(e.name)
      }, e.prototype.visitAccessMember = function (e) {
        e.object.accept(this), this.write("." + e.name)
      }, e.prototype.visitAccessKeyed = function (e) {
        e.object.accept(this), this.write("["), e.key.accept(this), this.write("]")
      }, e.prototype.visitCallScope = function (e) {
        for (var t = e.ancestor; t--;) this.write("$parent.");
        this.write(e.name), this.writeArgs(e.args)
      }, e.prototype.visitCallFunction = function (e) {
        e.func.accept(this), this.writeArgs(e.args)
      }, e.prototype.visitCallMember = function (e) {
        e.object.accept(this), this.write("." + e.name), this.writeArgs(e.args)
      }, e.prototype.visitPrefix = function (e) {
        this.write("(" + e.operation), e.operation.charCodeAt(0) >= 97 && this.write(" "), e.expression.accept(this), this.write(")")
      }, e.prototype.visitBinary = function (e) {
        e.left.accept(this), 105 === e.operation.charCodeAt(0) ? this.write(" " + e.operation + " ") : this.write(e.operation), e.right.accept(this)
      }, e.prototype.visitLiteralPrimitive = function (e) {
        this.write("" + e.value)
      }, e.prototype.visitLiteralArray = function (e) {
        var t = e.elements;
        this.write("[");
        for (var n = 0, i = t.length; n < i; ++n) 0 !== n && this.write(","), t[n].accept(this);
        this.write("]")
      }, e.prototype.visitLiteralObject = function (e) {
        var t = e.keys, n = e.values;
        this.write("{");
        for (var i = 0, r = t.length; i < r; ++i) 0 !== i && this.write(","), this.write("'" + t[i] + "':"), n[i].accept(this);
        this.write("}")
      }, e.prototype.visitLiteralString = function (e) {
        var t = e.value.replace(/'/g, "'");
        this.write("'" + t + "'")
      }, e.prototype.visitLiteralTemplate = function (e) {
        var t = e.cooked, n = e.expressions, i = n.length;
        this.write("`"), this.write(t[0]);
        for (var r = 0; r < i; r++) n[r].accept(this), this.write(t[r + 1]);
        this.write("`")
      }, e
    }());
    !function () {
      function e() {
      }

      e.prototype.cloneExpressionArray = function (e) {
        for (var t = [], n = e.length; n--;) t[n] = e[n].accept(this);
        return t
      }, e.prototype.visitBindingBehavior = function (e) {
        return new _e(e.expression.accept(this), e.name, this.cloneExpressionArray(e.args))
      }, e.prototype.visitValueConverter = function (e) {
        return new Ce(e.expression.accept(this), e.name, this.cloneExpressionArray(e.args))
      }, e.prototype.visitAssign = function (e) {
        return new ke(e.target.accept(this), e.value.accept(this))
      }, e.prototype.visitConditional = function (e) {
        return new Se(e.condition.accept(this), e.yes.accept(this), e.no.accept(this))
      }, e.prototype.visitAccessThis = function (e) {
        return new Ee(e.ancestor)
      }, e.prototype.visitAccessScope = function (e) {
        return new Re(e.name, e.ancestor)
      }, e.prototype.visitAccessMember = function (e) {
        return new Ae(e.object.accept(this), e.name)
      }, e.prototype.visitAccessKeyed = function (e) {
        return new Te(e.object.accept(this), e.key.accept(this))
      }, e.prototype.visitCallScope = function (e) {
        return new Oe(e.name, this.cloneExpressionArray(e.args), e.ancestor)
      }, e.prototype.visitCallFunction = function (e) {
        return new Be(e.func.accept(this), this.cloneExpressionArray(e.args))
      }, e.prototype.visitCallMember = function (e) {
        return new je(e.object.accept(this), e.name, this.cloneExpressionArray(e.args))
      }, e.prototype.visitUnary = function (e) {
        return new Le(prefix.operation, prefix.expression.accept(this))
      }, e.prototype.visitBinary = function (e) {
        return new Ie(e.operation, e.left.accept(this), e.right.accept(this))
      }, e.prototype.visitLiteralPrimitive = function (e) {
        return new Fe(e)
      }, e.prototype.visitLiteralArray = function (e) {
        return new Ne(this.cloneExpressionArray(e.elements))
      }, e.prototype.visitLiteralObject = function (e) {
        return new Ve(e.keys, this.cloneExpressionArray(e.values))
      }, e.prototype.visitLiteralString = function (e) {
        return new Me(e.value)
      }, e.prototype.visitLiteralTemplate = function (e) {
        return new Pe(e.cooked, this.cloneExpressionArray(e.expressions), e.raw, e.tag && e.tag.accept(this))
      }
    }();
    var $e = {oneTime: 0, toView: 1, oneWay: 1, twoWay: 2, fromView: 3}, Ge = function () {
      function e() {
        this.cache = Object.create(null)
      }

      return e.prototype.parse = function (e) {
        return e = e || "", this.cache[e] || (this.cache[e] = new Ue(e).parseBindingBehavior())
      }, e
    }(), ze = String.fromCharCode, Ue = function () {
      function e(e) {
        this.idx = 0, this.start = 0, this.src = e, this.len = e.length, this.tkn = st, this.val = void 0, this.ch = e.charCodeAt(0)
      }

      return w(e, [{
        key: "raw", get: function () {
          return this.src.slice(this.start, this.idx)
        }
      }]), e.prototype.parseBindingBehavior = function () {
        this.nextToken(), this.tkn & ot && this.err("Invalid start of expression");
        for (var e = this.parseValueConverter(); this.opt(It);) e = new _e(e, this.val, this.parseVariadicArgs());
        return this.tkn !== st && this.err("Unconsumed token " + this.raw), e
      }, e.prototype.parseValueConverter = function () {
        for (var e = this.parseExpression(); this.opt(Lt);) e = new Ce(e, this.val, this.parseVariadicArgs());
        return e
      }, e.prototype.parseVariadicArgs = function () {
        this.nextToken();
        for (var e = []; this.opt(jt);) e.push(this.parseExpression());
        return e
      }, e.prototype.parseExpression = function () {
        for (var e = this.idx, t = this.parseConditional(); this.tkn === tn;) t.isAssignable || this.err("Expression " + this.src.slice(e, this.start) + " is not assignable"), this.nextToken(), e = this.idx, t = new ke(t, this.parseConditional());
        return t
      }, e.prototype.parseConditional = function () {
        var e = this.parseBinary(0);
        if (this.opt(Bt)) {
          var t = this.parseExpression();
          this.expect(jt), e = new Se(e, t, this.parseExpression())
        }
        return e
      }, e.prototype.parseBinary = function (e) {
        for (var t = this.parseLeftHandSide(0); this.tkn & pt;) {
          var n = this.tkn;
          if ((n & rt) <= e) break;
          this.nextToken(), t = new Ie(on[n & it], t, this.parseBinary(n & rt))
        }
        return t
      }, e.prototype.parseLeftHandSide = function (e) {
        var t = void 0;
        e:switch (this.tkn) {
          case Qt:
            return this.nextToken(), this.parseLeftHandSide(0);
          case Jt:
            return this.nextToken(), new Ie("-", new Fe(0), this.parseLeftHandSide(0));
          case nn:
          case Kt:
          case Xt:
            var n = on[this.tkn & it];
            return this.nextToken(), new Le(n, this.parseLeftHandSide(0));
          case _t:
            do {
              if (this.nextToken(), e++, this.opt(St)) this.tkn === St && this.err(); else {
                if (this.tkn & at) {
                  t = new Ee(e & nt), e = e & et | Qe;
                  break e
                }
                this.err()
              }
            } while (this.tkn === _t);
          case ct:
            t = new Re(this.val, e & nt), this.nextToken(), e = e & et | Je;
            break;
          case xt:
            this.nextToken(), t = new Ee(0), e = e & et | Qe;
            break;
          case Ct:
            this.nextToken(), t = this.parseExpression(), this.expect(Rt), e = Ze;
            break;
          case Tt:
            this.nextToken();
            var i = [];
            if (this.tkn !== Ot) do {
              i.push(this.parseExpression())
            } while (this.opt(At));
            this.expect(Ot), t = new Ne(i), e = Ze;
            break;
          case kt:
            var r = [], o = [];
            for (this.nextToken(); this.tkn !== Et;) {
              if (this.tkn & lt) {
                var a = this.ch, s = this.tkn, c = this.idx;
                r.push(this.val), this.nextToken(), this.opt(jt) ? o.push(this.parseExpression()) : (this.ch = a, this.tkn = s, this.idx = c, o.push(this.parseLeftHandSide(et)))
              } else this.tkn & ut ? (r.push(this.val), this.nextToken(), this.expect(jt), o.push(this.parseExpression())) : this.err();
              this.tkn !== Et && this.expect(At)
            }
            this.expect(Et), t = new Ve(r, o), e = Ze;
            break;
          case ht:
            t = new Me(this.val), this.nextToken(), e = Ze;
            break;
          case vt:
            t = new Pe([this.val]), this.nextToken(), e = Ze;
            break;
          case gt:
            t = this.parseTemplate(0), e = Ze;
            break;
          case dt:
            t = new Fe(this.val), this.nextToken();
            break;
          case bt:
          case wt:
          case yt:
          case mt:
            t = new Fe(on[this.tkn & it]), this.nextToken(), e = Ze;
            break;
          default:
            this.idx >= this.len ? this.err("Unexpected end of expression") : this.err()
        }
        if (e & et) return t;
        for (var l = this.val; this.tkn & ft;) switch (this.tkn) {
          case St:
            if (this.nextToken(), this.tkn & lt || this.err(), l = this.val, this.nextToken(), e = e & Ze | (e & (Qe | Je)) << 1 | e & Ke | (e & Xe) >> 1 | (e & Ye) >> 2, this.tkn === Ct) continue;
            t = e & Je ? new Re(l, t.ancestor) : new Ae(t, l);
            continue;
          case Tt:
            this.nextToken(), e = Xe, t = new Te(t, this.parseExpression()), this.expect(Ot);
            break;
          case Ct:
            this.nextToken();
            for (var u = []; this.tkn !== Rt && (u.push(this.parseExpression()), this.opt(At));) ;
            this.expect(Rt), t = e & Je ? new Oe(l, u, t.ancestor) : e & (Ke | Ze) ? new je(t, l, u) : new Be(t, u), e = Ye;
            break;
          case vt:
            t = new Pe([this.val], [], [this.raw], t), this.nextToken();
            break;
          case gt:
            t = this.parseTemplate(e | tt, t)
        }
        return t
      }, e.prototype.parseTemplate = function (e, t) {
        var n = [this.val], i = e & tt ? [this.raw] : void 0;
        this.expect(gt);
        for (var r = [this.parseExpression()]; (this.tkn = this.scanTemplateTail()) !== vt;) n.push(this.val), e & tt && i.push(this.raw), this.expect(gt), r.push(this.parseExpression());
        return n.push(this.val), e & tt && i.push(this.raw), this.nextToken(), new Pe(n, r, i, t)
      }, e.prototype.nextToken = function () {
        for (; this.idx < this.len;) if (this.ch <= 32) this.next(); else {
          if (this.start = this.idx, 36 === this.ch || this.ch >= 97 && this.ch <= 122) return void (this.tkn = this.scanIdentifier());
          if (null !== (this.tkn = vn[this.ch](this))) return
        }
        this.tkn = st
      }, e.prototype.next = function () {
        return this.ch = this.src.charCodeAt(++this.idx)
      }, e.prototype.scanIdentifier = function () {
        for (; pn.has(this.next()) || this.ch > 127 && fn[this.ch];) ;
        return rn[this.val = this.raw] || ct
      }, e.prototype.scanNumber = function (e) {
        if (e) this.val = 0; else for (this.val = this.ch - 48; this.next() <= 57 && this.ch >= 48;) this.val = 10 * this.val + this.ch - 48;
        if (e || 46 === this.ch) {
          e || this.next();
          for (var t = this.idx, n = this.ch - 48; this.next() <= 57 && this.ch >= 48;) n = 10 * n + this.ch - 48;
          this.val = this.val + n / Math.pow(10, this.idx - t)
        }
        if (101 === this.ch || 69 === this.ch) {
          var i = this.idx;
          for (this.next(), 45 !== this.ch && 43 !== this.ch || this.next(), this.ch >= 48 && this.ch <= 57 || (this.idx = i, this.err("Invalid exponent")); this.next() <= 57 && this.ch >= 48;) ;
          this.val = parseFloat(this.src.slice(this.start, this.idx))
        }
        return dt
      }, e.prototype.scanString = function () {
        var e = this.ch;
        this.next();
        for (var t = void 0, n = this.idx; this.ch !== e;) if (92 === this.ch) {
          t || (t = []), t.push(this.src.slice(n, this.idx)), this.next();
          var i = void 0;
          if (117 === this.ch) if (this.next(), this.idx + 4 < this.len) {
            var r = this.src.slice(this.idx, this.idx + 4);
            /[A-Z0-9]{4}/i.test(r) || this.err("Invalid unicode escape [\\u" + r + "]"), i = parseInt(r, 16), this.idx += 4, this.ch = this.src.charCodeAt(this.idx)
          } else this.err(); else i = We(this.ch), this.next();
          t.push(ze(i)), n = this.idx
        } else 0 === this.ch || this.idx >= this.len ? this.err("Unterminated quote") : this.next();
        var o = this.src.slice(n, this.idx);
        this.next();
        var a = o;
        return null != t && (t.push(o), a = t.join("")), this.val = a, ht
      }, e.prototype.scanTemplate = function () {
        for (var e = !0, t = ""; 96 !== this.next();) if (36 === this.ch) {
          if (this.idx + 1 < this.len && 123 === this.src.charCodeAt(this.idx + 1)) {
            this.idx++, e = !1;
            break
          }
          t += "$"
        } else 92 === this.ch ? t += ze(We(this.next())) : 0 === this.ch || this.idx >= this.len ? this.err("Unterminated template literal") : t += ze(this.ch);
        return this.next(), this.val = t, e ? vt : gt
      }, e.prototype.scanTemplateTail = function () {
        return this.idx >= this.len && this.err("Unterminated template"), this.idx--, this.scanTemplate()
      }, e.prototype.err = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Unexpected token " + this.raw,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.start;
        throw new Error("Parser Error: " + e + " at column " + t + " in expression [" + this.src + "]")
      }, e.prototype.opt = function (e) {
        return this.tkn === e && (this.nextToken(), !0)
      }, e.prototype.expect = function (e) {
        this.tkn === e ? this.nextToken() : this.err("Missing expected token " + on[e & it], this.idx)
      }, e
    }();

    function We(e) {
      switch (e) {
        case 102:
          return 12;
        case 110:
          return 10;
        case 114:
          return 13;
        case 116:
          return 9;
        case 118:
          return 11;
        default:
          return e
      }
    }

    var Qe = 1024, Je = 2048, Ke = 4096, Xe = 8192, Ye = 16384, Ze = 32768, et = 65536, tt = 1 << 17, nt = 511, it = 63,
      rt = 448, ot = 2048, at = 16384, st = 65536 | at | ot, ct = 1 << 17, lt = 32768 | ct, ut = 1 << 18,
      dt = 1 << 19 | ut, ht = 1 << 20 | ut, pt = 1 << 21, ft = 1 << 24, vt = 1 << 25 | ft, gt = 1 << 26 | ft,
      mt = 32768 | ut, yt = 32769 | ut, bt = 32770 | ut, wt = 32771 | ut, xt = 4 | lt, _t = 5 | lt, Ct = 8198 | at | ft,
      kt = 8199, St = 8388616 | ft, Et = 4105 | at | ot, Rt = 4106 | at | ot, At = 11 | at,
      Tt = 8204 | at | 1 << 23 | ft, Ot = 4109 | ot, jt = 14 | at, Bt = 15, It = 18 | at, Lt = 19 | at, Ft = 84 | pt,
      Mt = 149 | pt, Pt = 214 | pt, Nt = 279 | pt, Vt = 280 | pt, Dt = 281 | pt, qt = 282 | pt, Ht = 347 | pt,
      $t = 348 | pt, Gt = 349 | pt, zt = 350 | pt, Ut = 33119 | pt, Wt = 33120 | pt, Qt = 417 | pt | 1 << 22,
      Jt = 418 | pt | 1 << 22, Kt = 4227107, Xt = 4227108, Yt = 485 | pt, Zt = 486 | pt, en = 487 | pt, tn = 40,
      nn = 4194345, rn = Object.create(null);
    rn.true = yt, rn.null = bt, rn.false = mt, rn.undefined = wt, rn.$this = xt, rn.$parent = _t, rn.in = Ut, rn.instanceof = Wt, rn.typeof = Kt, rn.void = Xt;
    var on = [!1, !0, null, void 0, "$this", "$parent", "(", "{", ".", "}", ")", ",", "[", "]", ":", "?", "'", '"', "&", "|", "||", "&&", "^", "==", "!=", "===", "!==", "<", ">", "<=", ">=", "in", "instanceof", "+", "-", "typeof", "void", "*", "%", "/", "=", "!"],
      an = [36, 0, 48, 58, 65, 91, 95, 0, 97, 123],
      sn = [36, 0, 65, 91, 95, 0, 97, 123, 170, 0, 186, 0, 192, 215, 216, 247, 248, 697, 736, 741, 7424, 7462, 7468, 7517, 7522, 7526, 7531, 7544, 7545, 7615, 7680, 7936, 8305, 0, 8319, 0, 8336, 8349, 8490, 8492, 8498, 0, 8526, 0, 8544, 8585, 11360, 11392, 42786, 42888, 42891, 42927, 42928, 42936, 42999, 43008, 43824, 43867, 43868, 43877, 64256, 64263, 65313, 65339, 65345, 65371],
      cn = [48, 58], ln = [0, 33, 127, 161];

    function un(e, t, n, i) {
      for (var r = n.length, o = 0; o < r; o += 2) {
        var a = n[o], s = n[o + 1];
        if (s = s > 0 ? s : a + 1, e) for (var c = a; c < s;) e[c] = i, c++;
        if (t) for (var l = a; l < s; l++) t.add(l)
      }
    }

    function dn(e) {
      return function (t) {
        return t.next(), e
      }
    }

    function hn(e) {
      return e.err("Unexpected character [" + ze(e.ch) + "]"), null
    }

    var pn = new Set;
    un(null, pn, an, !0);
    var fn = new Uint8Array(65535);
    un(fn, null, sn, 1), un(fn, null, cn, 1);
    for (var vn = new Array(65535), gn = 0; gn < 65535;) vn[gn] = hn, gn++;
    un(vn, null, ln, (function (e) {
      return e.next(), null
    })), un(vn, null, sn, (function (e) {
      return e.scanIdentifier()
    })), un(vn, null, cn, (function (e) {
      return e.scanNumber(!1)
    })), vn[34] = vn[39] = function (e) {
      return e.scanString()
    }, vn[96] = function (e) {
      return e.scanTemplate()
    }, vn[33] = function (e) {
      return 61 !== e.next() ? nn : 61 !== e.next() ? Vt : (e.next(), qt)
    }, vn[61] = function (e) {
      return 61 !== e.next() ? tn : 61 !== e.next() ? Nt : (e.next(), Dt)
    }, vn[38] = function (e) {
      return 38 !== e.next() ? It : (e.next(), Mt)
    }, vn[124] = function (e) {
      return 124 !== e.next() ? Lt : (e.next(), Ft)
    }, vn[46] = function (e) {
      return e.next() <= 57 && e.ch >= 48 ? e.scanNumber(!0) : St
    }, vn[60] = function (e) {
      return 61 !== e.next() ? Ht : (e.next(), Gt)
    }, vn[62] = function (e) {
      return 61 !== e.next() ? $t : (e.next(), zt)
    }, vn[37] = dn(Zt), vn[40] = dn(Ct), vn[41] = dn(Rt), vn[42] = dn(Yt), vn[43] = dn(Qt), vn[44] = dn(At), vn[45] = dn(Jt), vn[47] = dn(en), vn[58] = dn(jt), vn[63] = dn(Bt), vn[91] = dn(Tt), vn[93] = dn(Ot), vn[94] = dn(Pt), vn[123] = dn(kt), vn[125] = dn(Et);
    var mn = Map.prototype;
    var yn = function (e) {
      function t(t, n) {
        return _(this, e.call(this, t, n))
      }

      return C(t, e), t.for = function (e, n) {
        return "__map_observer__" in n || Reflect.defineProperty(n, "__map_observer__", {
          value: t.create(e, n),
          enumerable: !1,
          configurable: !1
        }), n.__map_observer__
      }, t.create = function (e, n) {
        var i = new t(e, n), r = mn;
        return r.set === n.set && r.delete === n.delete && r.clear === n.clear || (r = {
          set: n.set,
          delete: n.delete,
          clear: n.clear
        }), n.set = function () {
          var e = n.has(arguments[0]), t = e ? "update" : "add", o = n.get(arguments[0]), a = r.set.apply(n, arguments);
          return e && o === n.get(arguments[0]) || i.addChangeRecord({
            type: t,
            object: n,
            key: arguments[0],
            oldValue: o
          }), a
        }, n.delete = function () {
          var e = n.has(arguments[0]), t = n.get(arguments[0]), o = r.delete.apply(n, arguments);
          return e && i.addChangeRecord({type: "delete", object: n, key: arguments[0], oldValue: t}), o
        }, n.clear = function () {
          var e = r.clear.apply(n, arguments);
          return i.addChangeRecord({type: "clear", object: n}), e
        }, i
      }, t
    }(ue), bn = g.getLogger("event-manager");

    function wn(e) {
      return e.composedPath && e.composedPath()[0] || e.deepPath && e.deepPath()[0] || e.path && e.path[0] || e.target
    }

    function xn() {
      this.standardStopPropagation(), this.propagationStopped = !0
    }

    function _n(e) {
      e.propagationStopped = !1;
      for (var t = wn(e), n = []; t;) {
        if (t.capturedCallbacks) {
          var i = t.capturedCallbacks[e.type];
          i && (e.stopPropagation !== xn && (e.standardStopPropagation = e.stopPropagation, e.stopPropagation = xn), n.push(i))
        }
        t = t.parentNode
      }
      for (var r = n.length - 1; r >= 0 && !e.propagationStopped; r--) {
        var o = n[r];
        "handleEvent" in o ? o.handleEvent(e) : o(e)
      }
    }

    var Cn = function () {
      function e(e) {
        this.eventName = e, this.count = 0
      }

      return e.prototype.increment = function () {
        this.count++, 1 === this.count && m.b.addEventListener(this.eventName, _n, !0)
      }, e.prototype.decrement = function () {
        0 === this.count ? bn.warn("The same EventListener was disposed multiple times.") : 0 == --this.count && m.b.removeEventListener(this.eventName, _n, !0)
      }, e
    }(), kn = function () {
      function e(e, t) {
        this.eventName = e, this.count = 0, this.eventManager = t
      }

      return e.prototype.handleEvent = function (e) {
        e.propagationStopped = !1;
        for (var t = wn(e); t && !e.propagationStopped;) {
          if (t.delegatedCallbacks) {
            var n = t.delegatedCallbacks[e.type];
            n && (e.stopPropagation !== xn && (e.standardStopPropagation = e.stopPropagation, e.stopPropagation = xn), "handleEvent" in n ? n.handleEvent(e) : n(e))
          }
          var i = t.parentNode;
          t = this.eventManager.escapeShadowRoot && i instanceof ShadowRoot ? i.host : i
        }
      }, e.prototype.increment = function () {
        this.count++, 1 === this.count && m.b.addEventListener(this.eventName, this, !1)
      }, e.prototype.decrement = function () {
        0 === this.count ? bn.warn("The same EventListener was disposed multiple times.") : 0 == --this.count && m.b.removeEventListener(this.eventName, this, !1)
      }, e
    }(), Sn = function () {
      function e(e, t, n) {
        this.entry = e, this.lookup = t, this.targetEvent = n
      }

      return e.prototype.dispose = function () {
        this.lookup[this.targetEvent] ? (this.entry.decrement(), this.lookup[this.targetEvent] = null) : bn.warn("Calling .dispose() on already disposed eventListener")
      }, e
    }(), En = function () {
      function e(e, t, n) {
        this.target = e, this.targetEvent = t, this.callback = n
      }

      return e.prototype.dispose = function () {
        this.target.removeEventListener(this.targetEvent, this.callback)
      }, e
    }(), Rn = function () {
      function e(e) {
        this.delegatedHandlers = {}, this.capturedHandlers = {}, this.eventManager = e
      }

      return e.prototype.subscribe = function (e, t, n, i, r) {
        var o = void 0, a = void 0, s = void 0;
        if (i === An.bubbling) {
          o = this.delegatedHandlers, s = o[t] || (o[t] = new kn(t, this.eventManager));
          var c = e.delegatedCallbacks || (e.delegatedCallbacks = {});
          return c[t] ? bn.warn("Overriding previous callback for event listener", {
            event: t,
            callback: n,
            previousCallback: c[t]
          }) : s.increment(), c[t] = n, !0 === r ? new Sn(s, c, t) : function () {
            s.decrement(), c[t] = null
          }
        }
        if (i === An.capturing) {
          a = this.capturedHandlers, s = a[t] || (a[t] = new Cn(t));
          var l = e.capturedCallbacks || (e.capturedCallbacks = {});
          return l[t] ? bn.error("already have a callback for event", {
            event: t,
            callback: n
          }) : s.increment(), l[t] = n, !0 === r ? new Sn(s, l, t) : function () {
            s.decrement(), l[t] = null
          }
        }
        return e.addEventListener(t, n), !0 === r ? new En(e, t, n) : function () {
          e.removeEventListener(t, n)
        }
      }, e
    }(), An = {none: 0, capturing: 1, bubbling: 2}, Tn = function () {
      function e() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.elementHandlerLookup = {}, this.eventStrategyLookup = {}, this.escapeShadowRoot = e, this.registerElementConfig({
          tagName: "input",
          properties: {value: ["change", "input"], checked: ["change", "input"], files: ["change", "input"]}
        }), this.registerElementConfig({
          tagName: "textarea",
          properties: {value: ["change", "input"]}
        }), this.registerElementConfig({
          tagName: "select",
          properties: {value: ["change"]}
        }), this.registerElementConfig({
          tagName: "content editable",
          properties: {value: ["change", "input", "blur", "keyup", "paste"]}
        }), this.registerElementConfig({
          tagName: "scrollable element",
          properties: {scrollTop: ["scroll"], scrollLeft: ["scroll"]}
        }), this.defaultEventStrategy = new Rn(this)
      }

      return e.prototype.registerElementConfig = function (e) {
        var t = e.tagName.toLowerCase(), n = e.properties, i = void 0, r = this.elementHandlerLookup[t] = {};
        for (i in n) n.hasOwnProperty(i) && (r[i] = n[i])
      }, e.prototype.registerEventStrategy = function (e, t) {
        this.eventStrategyLookup[e] = t
      }, e.prototype.getElementHandler = function (e, t) {
        var n = void 0, i = this.elementHandlerLookup;
        if (e.tagName) {
          if (i[n = e.tagName.toLowerCase()] && i[n][t]) return new On(i[n][t]);
          if ("textContent" === t || "innerHTML" === t) return new On(i["content editable"].value);
          if ("scrollTop" === t || "scrollLeft" === t) return new On(i["scrollable element"][t])
        }
        return null
      }, e.prototype.addEventListener = function (e, t, n, i, r) {
        return (this.eventStrategyLookup[t] || this.defaultEventStrategy).subscribe(e, t, n, i, r)
      }, e
    }(), On = function () {
      function e(e) {
        this.events = e, this.element = null, this.handler = null
      }

      return e.prototype.subscribe = function (e, t) {
        this.element = e, this.handler = t;
        for (var n = this.events, i = 0, r = n.length; r > i; ++i) e.addEventListener(n[i], t)
      }, e.prototype.dispose = function () {
        if (null !== this.element) {
          for (var e = this.element, t = this.handler, n = this.events, i = 0, r = n.length; r > i; ++i) e.removeEventListener(n[i], t);
          this.element = this.handler = null
        }
      }, e
    }(), jn = function () {
      function e() {
        this.tracked = [], this.checkDelay = 120
      }

      return e.prototype.addProperty = function (e) {
        var t = this.tracked;
        t.push(e), 1 === t.length && this.scheduleDirtyCheck()
      }, e.prototype.removeProperty = function (e) {
        var t = this.tracked;
        t.splice(t.indexOf(e), 1)
      }, e.prototype.scheduleDirtyCheck = function () {
        var e = this;
        setTimeout((function () {
          return e.check()
        }), this.checkDelay)
      }, e.prototype.check = function () {
        for (var e = this.tracked, t = e.length; t--;) {
          var n = e[t];
          n.isDirty() && n.call()
        }
        e.length && this.scheduleDirtyCheck()
      }, e
    }(), Bn = te()(a = function () {
      function e(e, t, n) {
        this.dirtyChecker = e, this.obj = t, this.propertyName = n
      }

      return e.prototype.getValue = function () {
        return this.obj[this.propertyName]
      }, e.prototype.setValue = function (e) {
        this.obj[this.propertyName] = e
      }, e.prototype.call = function () {
        var e = this.oldValue, t = this.getValue();
        this.callSubscribers(t, e), this.oldValue = t
      }, e.prototype.isDirty = function () {
        return this.oldValue !== this.obj[this.propertyName]
      }, e.prototype.subscribe = function (e, t) {
        this.hasSubscribers() || (this.oldValue = this.getValue(), this.dirtyChecker.addProperty(this)), this.addSubscriber(e, t)
      }, e.prototype.unsubscribe = function (e, t) {
        this.removeSubscriber(e, t) && !this.hasSubscribers() && this.dirtyChecker.removeProperty(this)
      }, e
    }()) || a, In = g.getLogger("property-observation"), Ln = {
      getValue: function (e, t) {
        return e[t]
      }, setValue: function (e, t, n) {
        t[n] = e
      }
    }, Fn = function () {
      function e(e, t) {
        this.doNotCache = !0, this.primitive = e, this.propertyName = t
      }

      return e.prototype.getValue = function () {
        return this.primitive[this.propertyName]
      }, e.prototype.setValue = function () {
        var e = x(this.primitive);
        throw new Error("The " + this.propertyName + " property of a " + e + " (" + this.primitive + ") cannot be assigned.")
      }, e.prototype.subscribe = function () {
      }, e.prototype.unsubscribe = function () {
      }, e
    }(), Mn = te()(s = function () {
      function e(e, t, n) {
        this.taskQueue = e, this.obj = t, this.propertyName = n, this.queued = !1, this.observing = !1
      }

      return e.prototype.getValue = function () {
        return this.obj[this.propertyName]
      }, e.prototype.setValue = function (e) {
        this.obj[this.propertyName] = e
      }, e.prototype.getterValue = function () {
        return this.currentValue
      }, e.prototype.setterValue = function (e) {
        var t = this.currentValue;
        t !== e && (this.queued || (this.oldValue = t, this.queued = !0, this.taskQueue.queueMicroTask(this)), this.currentValue = e)
      }, e.prototype.call = function () {
        var e = this.oldValue, t = this.currentValue;
        this.queued = !1, this.callSubscribers(t, e)
      }, e.prototype.subscribe = function (e, t) {
        this.observing || this.convertProperty(), this.addSubscriber(e, t)
      }, e.prototype.unsubscribe = function (e, t) {
        this.removeSubscriber(e, t)
      }, e.prototype.convertProperty = function () {
        this.observing = !0, this.currentValue = this.obj[this.propertyName], this.setValue = this.setterValue, this.getValue = this.getterValue, Reflect.defineProperty(this.obj, this.propertyName, {
          configurable: !0,
          enumerable: !(this.propertyName in this.obj) || this.obj.propertyIsEnumerable(this.propertyName),
          get: this.getValue.bind(this),
          set: this.setValue.bind(this)
        }) || In.warn("Cannot observe property '" + this.propertyName + "' of object", this.obj)
      }, e
    }()) || s, Pn = function () {
      function e(e, t, n) {
        this.element = e, this.propertyName = t, this.attributeName = n
      }

      return e.prototype.getValue = function () {
        return this.element.getAttributeNS("http://www.w3.org/1999/xlink", this.attributeName)
      }, e.prototype.setValue = function (e) {
        return this.element.setAttributeNS("http://www.w3.org/1999/xlink", this.attributeName, e)
      }, e.prototype.subscribe = function () {
        throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.')
      }, e
    }(), Nn = {
      getValue: function (e, t) {
        return e.getAttribute(t)
      }, setValue: function (e, t, n) {
        null == e ? t.removeAttribute(n) : t.setAttribute(n, e)
      }
    }, Vn = function () {
      function e(e, t) {
        this.element = e, this.propertyName = t
      }

      return e.prototype.getValue = function () {
        return this.element.getAttribute(this.propertyName)
      }, e.prototype.setValue = function (e) {
        return null == e ? this.element.removeAttribute(this.propertyName) : this.element.setAttribute(this.propertyName, e)
      }, e.prototype.subscribe = function () {
        throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.')
      }, e
    }(), Dn = function () {
      function e(e, t) {
        this.element = e, this.propertyName = t, this.styles = null, this.version = 0
      }

      return e.prototype.getValue = function () {
        return this.element.style.cssText
      }, e.prototype._setProperty = function (e, t) {
        var n = "";
        null != t && "function" == typeof t.indexOf && -1 !== t.indexOf("!important") && (n = "important", t = t.replace("!important", "")), this.element.style.setProperty(e, t, n)
      }, e.prototype.setValue = function (e) {
        var t = this.styles || {}, n = void 0, i = this.version;
        if (null != e) if (e instanceof Object) {
          var r = void 0;
          for (n in e) e.hasOwnProperty(n) && (r = e[n], t[n = n.replace(/([A-Z])/g, (function (e) {
            return "-" + e.toLowerCase()
          }))] = i, this._setProperty(n, r))
        } else if (e.length) for (var o = /\s*([\w\-]+)\s*:\s*((?:(?:[\w\-]+\(\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[\w\-]+\(\s*(?:^"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^\)]*)\),?|[^\)]*)\),?|"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^;]*),?\s*)+);?/g, a = void 0; null !== (a = o.exec(e));) (n = a[1]) && (t[n] = i, this._setProperty(n, a[2]));
        if (this.styles = t, this.version += 1, 0 !== i) for (n in i -= 1, t) t.hasOwnProperty(n) && t[n] === i && this.element.style.removeProperty(n)
      }, e.prototype.subscribe = function () {
        throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.')
      }, e
    }(), qn = te()(c = function () {
      function e(e, t, n) {
        this.element = e, this.propertyName = t, this.handler = n, "files" === t && (this.setValue = function () {
        })
      }

      return e.prototype.getValue = function () {
        return this.element[this.propertyName]
      }, e.prototype.setValue = function (e) {
        e = null == e ? "" : e, this.element[this.propertyName] !== e && (this.element[this.propertyName] = e, this.notify())
      }, e.prototype.notify = function () {
        var e = this.oldValue, t = this.getValue();
        this.callSubscribers(t, e), this.oldValue = t
      }, e.prototype.handleEvent = function () {
        this.notify()
      }, e.prototype.subscribe = function (e, t) {
        this.hasSubscribers() || (this.oldValue = this.getValue(), this.handler.subscribe(this.element, this)), this.addSubscriber(e, t)
      }, e.prototype.unsubscribe = function (e, t) {
        this.removeSubscriber(e, t) && !this.hasSubscribers() && this.handler.dispose()
      }, e
    }()) || c, Hn = te()(l = function () {
      function e(e, t, n) {
        this.element = e, this.handler = t, this.observerLocator = n
      }

      return e.prototype.getValue = function () {
        return this.value
      }, e.prototype.setValue = function (e) {
        this.initialSync && this.value === e || (this.arrayObserver && (this.arrayObserver.unsubscribe("CheckedObserver:array", this), this.arrayObserver = null), "checkbox" === this.element.type && Array.isArray(e) && (this.arrayObserver = this.observerLocator.getArrayObserver(e), this.arrayObserver.subscribe("CheckedObserver:array", this)), this.oldValue = this.value, this.value = e, this.synchronizeElement(), this.notify(), this.initialSync || (this.initialSync = !0, this.observerLocator.taskQueue.queueMicroTask(this)))
      }, e.prototype.call = function (e, t) {
        this.synchronizeElement(), this.valueObserver || (this.valueObserver = this.element.__observers__.model || this.element.__observers__.value, this.valueObserver && this.valueObserver.subscribe("CheckedObserver:value", this))
      }, e.prototype.synchronizeElement = function () {
        var e = this.value, t = this.element, n = t.hasOwnProperty("model") ? t.model : t.value, i = "radio" === t.type,
          r = t.matcher || function (e, t) {
            return e === t
          };
        t.checked = i && !!r(e, n) || !i && !0 === e || !i && Array.isArray(e) && -1 !== e.findIndex((function (e) {
          return !!r(e, n)
        }))
      }, e.prototype.synchronizeValue = function () {
        var e = this.value, t = this.element, n = t.hasOwnProperty("model") ? t.model : t.value, i = void 0,
          r = t.matcher || function (e, t) {
            return e === t
          };
        if ("checkbox" === t.type) {
          if (Array.isArray(e)) return i = e.findIndex((function (e) {
            return !!r(e, n)
          })), void (t.checked && -1 === i ? e.push(n) : t.checked || -1 === i || e.splice(i, 1));
          e = t.checked
        } else {
          if (!t.checked) return;
          e = n
        }
        this.oldValue = this.value, this.value = e, this.notify()
      }, e.prototype.notify = function () {
        var e = this.oldValue, t = this.value;
        t !== e && this.callSubscribers(t, e)
      }, e.prototype.handleEvent = function () {
        this.synchronizeValue()
      }, e.prototype.subscribe = function (e, t) {
        this.hasSubscribers() || this.handler.subscribe(this.element, this), this.addSubscriber(e, t)
      }, e.prototype.unsubscribe = function (e, t) {
        this.removeSubscriber(e, t) && !this.hasSubscribers() && this.handler.dispose()
      }, e.prototype.unbind = function () {
        this.arrayObserver && (this.arrayObserver.unsubscribe("CheckedObserver:array", this), this.arrayObserver = null), this.valueObserver && this.valueObserver.unsubscribe("CheckedObserver:value", this)
      }, e
    }()) || l, $n = te()(u = function () {
      function e(e, t, n) {
        this.element = e, this.handler = t, this.observerLocator = n
      }

      return e.prototype.getValue = function () {
        return this.value
      }, e.prototype.setValue = function (e) {
        if (null != e && this.element.multiple && !Array.isArray(e)) throw new Error("Only null or Array instances can be bound to a multi-select.");
        this.value !== e && (this.arrayObserver && (this.arrayObserver.unsubscribe("SelectValueObserver:array", this), this.arrayObserver = null), Array.isArray(e) && (this.arrayObserver = this.observerLocator.getArrayObserver(e), this.arrayObserver.subscribe("SelectValueObserver:array", this)), this.oldValue = this.value, this.value = e, this.synchronizeOptions(), this.notify(), this.initialSync || (this.initialSync = !0, this.observerLocator.taskQueue.queueMicroTask(this)))
      }, e.prototype.call = function (e, t) {
        this.synchronizeOptions()
      }, e.prototype.synchronizeOptions = function () {
        var e = this.value, t = void 0;
        Array.isArray(e) && (t = !0);
        for (var n = this.element.options, i = n.length, r = this.element.matcher || function (e, t) {
          return e === t
        }, o = function () {
          var o = n.item(i), a = o.hasOwnProperty("model") ? o.model : o.value;
          if (t) return o.selected = -1 !== e.findIndex((function (e) {
            return !!r(a, e)
          })), "continue";
          o.selected = !!r(a, e)
        }; i--;) o()
      }, e.prototype.synchronizeValue = function () {
        for (var e = this, t = this.element.options, n = 0, i = [], r = 0, o = t.length; r < o; r++) {
          var a = t.item(r);
          a.selected && (i.push(a.hasOwnProperty("model") ? a.model : a.value), n++)
        }
        if (this.element.multiple) {
          if (Array.isArray(this.value)) {
            var s = function () {
              for (var t = e.element.matcher || function (e, t) {
                return e === t
              }, n = 0, r = function () {
                var r = e.value[n];
                -1 === i.findIndex((function (e) {
                  return t(r, e)
                })) ? e.value.splice(n, 1) : n++
              }; n < e.value.length;) r();
              n = 0;
              for (var o = function () {
                var r = i[n];
                -1 === e.value.findIndex((function (e) {
                  return t(r, e)
                })) && e.value.push(r), n++
              }; n < i.length;) o();
              return {v: void 0}
            }();
            if ("object" === (void 0 === s ? "undefined" : x(s))) return s.v
          }
        } else i = 0 === n ? null : i[0];
        i !== this.value && (this.oldValue = this.value, this.value = i, this.notify())
      }, e.prototype.notify = function () {
        var e = this.oldValue, t = this.value;
        this.callSubscribers(t, e)
      }, e.prototype.handleEvent = function () {
        this.synchronizeValue()
      }, e.prototype.subscribe = function (e, t) {
        this.hasSubscribers() || this.handler.subscribe(this.element, this), this.addSubscriber(e, t)
      }, e.prototype.unsubscribe = function (e, t) {
        this.removeSubscriber(e, t) && !this.hasSubscribers() && this.handler.dispose()
      }, e.prototype.bind = function () {
        var e = this;
        this.domObserver = m.b.createMutationObserver((function () {
          e.synchronizeOptions(), e.synchronizeValue()
        })), this.domObserver.observe(this.element, {childList: !0, subtree: !0, characterData: !0})
      }, e.prototype.unbind = function () {
        this.domObserver.disconnect(), this.domObserver = null, this.arrayObserver && (this.arrayObserver.unsubscribe("SelectValueObserver:array", this), this.arrayObserver = null)
      }, e
    }()) || u, Gn = function () {
      function e(e) {
        this.element = e, this.doNotCache = !0, this.value = "", this.version = 0
      }

      return e.prototype.getValue = function () {
        return this.value
      }, e.prototype.setValue = function (e) {
        var t = this.nameIndex || {}, n = this.version, i = void 0, r = void 0;
        if (null != e && e.length) for (var o = 0, a = (i = e.split(/\s+/)).length; o < a; o++) "" !== (r = i[o]) && (t[r] = n, this.element.classList.add(r));
        if (this.value = e, this.nameIndex = t, this.version += 1, 0 !== n) for (r in n -= 1, t) t.hasOwnProperty(r) && t[r] === n && this.element.classList.remove(r)
      }, e.prototype.subscribe = function () {
        throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "class" property is not supported.')
      }, e
    }();
    var zn = function (e) {
      function t(t, n) {
        var i = _(this, e.call(this));
        return i.name = t, i.dependencies = n, i.isAssignable = !0, i
      }

      return C(t, e), t.prototype.evaluate = function (e, t) {
        return e.bindingContext[this.name]
      }, t.prototype.assign = function (e, t) {
        e.bindingContext[this.name] = t
      }, t.prototype.accept = function (e) {
        throw new Error("not implemented")
      }, t.prototype.connect = function (e, t) {
        for (var n = this.dependencies, i = n.length; i--;) n[i].connect(e, t)
      }, t
    }(xe);
    var Un = void 0, Wn = void 0, Qn = void 0, Jn = void 0;
    if ("undefined" == typeof FEATURE_NO_SVG) {
      Un = {
        a: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "target", "transform", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
        altGlyph: ["class", "dx", "dy", "externalResourcesRequired", "format", "glyphRef", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
        altGlyphDef: ["id", "xml:base", "xml:lang", "xml:space"],
        altGlyphItem: ["id", "xml:base", "xml:lang", "xml:space"],
        animate: ["accumulate", "additive", "attributeName", "attributeType", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
        animateColor: ["accumulate", "additive", "attributeName", "attributeType", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
        animateMotion: ["accumulate", "additive", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keyPoints", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "origin", "path", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "rotate", "systemLanguage", "to", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
        animateTransform: ["accumulate", "additive", "attributeName", "attributeType", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "type", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
        circle: ["class", "cx", "cy", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "r", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
        clipPath: ["class", "clipPathUnits", "externalResourcesRequired", "id", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
        "color-profile": ["id", "local", "name", "rendering-intent", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
        cursor: ["externalResourcesRequired", "id", "requiredExtensions", "requiredFeatures", "systemLanguage", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
        defs: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
        desc: ["class", "id", "style", "xml:base", "xml:lang", "xml:space"],
        ellipse: ["class", "cx", "cy", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rx", "ry", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
        feBlend: ["class", "height", "id", "in", "in2", "mode", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        feColorMatrix: ["class", "height", "id", "in", "result", "style", "type", "values", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        feComponentTransfer: ["class", "height", "id", "in", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        feComposite: ["class", "height", "id", "in", "in2", "k1", "k2", "k3", "k4", "operator", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        feConvolveMatrix: ["bias", "class", "divisor", "edgeMode", "height", "id", "in", "kernelMatrix", "kernelUnitLength", "order", "preserveAlpha", "result", "style", "targetX", "targetY", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        feDiffuseLighting: ["class", "diffuseConstant", "height", "id", "in", "kernelUnitLength", "result", "style", "surfaceScale", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        feDisplacementMap: ["class", "height", "id", "in", "in2", "result", "scale", "style", "width", "x", "xChannelSelector", "xml:base", "xml:lang", "xml:space", "y", "yChannelSelector"],
        feDistantLight: ["azimuth", "elevation", "id", "xml:base", "xml:lang", "xml:space"],
        feFlood: ["class", "height", "id", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        feFuncA: ["amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space"],
        feFuncB: ["amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space"],
        feFuncG: ["amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space"],
        feFuncR: ["amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space"],
        feGaussianBlur: ["class", "height", "id", "in", "result", "stdDeviation", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        feImage: ["class", "externalResourcesRequired", "height", "id", "preserveAspectRatio", "result", "style", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
        feMerge: ["class", "height", "id", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        feMergeNode: ["id", "xml:base", "xml:lang", "xml:space"],
        feMorphology: ["class", "height", "id", "in", "operator", "radius", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        feOffset: ["class", "dx", "dy", "height", "id", "in", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        fePointLight: ["id", "x", "xml:base", "xml:lang", "xml:space", "y", "z"],
        feSpecularLighting: ["class", "height", "id", "in", "kernelUnitLength", "result", "specularConstant", "specularExponent", "style", "surfaceScale", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        feSpotLight: ["id", "limitingConeAngle", "pointsAtX", "pointsAtY", "pointsAtZ", "specularExponent", "x", "xml:base", "xml:lang", "xml:space", "y", "z"],
        feTile: ["class", "height", "id", "in", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        feTurbulence: ["baseFrequency", "class", "height", "id", "numOctaves", "result", "seed", "stitchTiles", "style", "type", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        filter: ["class", "externalResourcesRequired", "filterRes", "filterUnits", "height", "id", "primitiveUnits", "style", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
        font: ["class", "externalResourcesRequired", "horiz-adv-x", "horiz-origin-x", "horiz-origin-y", "id", "style", "vert-adv-y", "vert-origin-x", "vert-origin-y", "xml:base", "xml:lang", "xml:space"],
        "font-face": ["accent-height", "alphabetic", "ascent", "bbox", "cap-height", "descent", "font-family", "font-size", "font-stretch", "font-style", "font-variant", "font-weight", "hanging", "id", "ideographic", "mathematical", "overline-position", "overline-thickness", "panose-1", "slope", "stemh", "stemv", "strikethrough-position", "strikethrough-thickness", "underline-position", "underline-thickness", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "widths", "x-height", "xml:base", "xml:lang", "xml:space"],
        "font-face-format": ["id", "string", "xml:base", "xml:lang", "xml:space"],
        "font-face-name": ["id", "name", "xml:base", "xml:lang", "xml:space"],
        "font-face-src": ["id", "xml:base", "xml:lang", "xml:space"],
        "font-face-uri": ["id", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
        foreignObject: ["class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        g: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
        glyph: ["arabic-form", "class", "d", "glyph-name", "horiz-adv-x", "id", "lang", "orientation", "style", "unicode", "vert-adv-y", "vert-origin-x", "vert-origin-y", "xml:base", "xml:lang", "xml:space"],
        glyphRef: ["class", "dx", "dy", "format", "glyphRef", "id", "style", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
        hkern: ["g1", "g2", "id", "k", "u1", "u2", "xml:base", "xml:lang", "xml:space"],
        image: ["class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "preserveAspectRatio", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
        line: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "x1", "x2", "xml:base", "xml:lang", "xml:space", "y1", "y2"],
        linearGradient: ["class", "externalResourcesRequired", "gradientTransform", "gradientUnits", "id", "spreadMethod", "style", "x1", "x2", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y1", "y2"],
        marker: ["class", "externalResourcesRequired", "id", "markerHeight", "markerUnits", "markerWidth", "orient", "preserveAspectRatio", "refX", "refY", "style", "viewBox", "xml:base", "xml:lang", "xml:space"],
        mask: ["class", "externalResourcesRequired", "height", "id", "maskContentUnits", "maskUnits", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        metadata: ["id", "xml:base", "xml:lang", "xml:space"],
        "missing-glyph": ["class", "d", "horiz-adv-x", "id", "style", "vert-adv-y", "vert-origin-x", "vert-origin-y", "xml:base", "xml:lang", "xml:space"],
        mpath: ["externalResourcesRequired", "id", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
        path: ["class", "d", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "pathLength", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
        pattern: ["class", "externalResourcesRequired", "height", "id", "patternContentUnits", "patternTransform", "patternUnits", "preserveAspectRatio", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "viewBox", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
        polygon: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "points", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
        polyline: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "points", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
        radialGradient: ["class", "cx", "cy", "externalResourcesRequired", "fx", "fy", "gradientTransform", "gradientUnits", "id", "r", "spreadMethod", "style", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
        rect: ["class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rx", "ry", "style", "systemLanguage", "transform", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
        script: ["externalResourcesRequired", "id", "type", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
        set: ["attributeName", "attributeType", "begin", "dur", "end", "externalResourcesRequired", "fill", "id", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
        stop: ["class", "id", "offset", "style", "xml:base", "xml:lang", "xml:space"],
        style: ["id", "media", "title", "type", "xml:base", "xml:lang", "xml:space"],
        svg: ["baseProfile", "class", "contentScriptType", "contentStyleType", "externalResourcesRequired", "height", "id", "onabort", "onactivate", "onclick", "onerror", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onresize", "onscroll", "onunload", "onzoom", "preserveAspectRatio", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "version", "viewBox", "width", "x", "xml:base", "xml:lang", "xml:space", "y", "zoomAndPan"],
        switch: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
        symbol: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "preserveAspectRatio", "style", "viewBox", "xml:base", "xml:lang", "xml:space"],
        text: ["class", "dx", "dy", "externalResourcesRequired", "id", "lengthAdjust", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "textLength", "transform", "x", "xml:base", "xml:lang", "xml:space", "y"],
        textPath: ["class", "externalResourcesRequired", "id", "lengthAdjust", "method", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "spacing", "startOffset", "style", "systemLanguage", "textLength", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
        title: ["class", "id", "style", "xml:base", "xml:lang", "xml:space"],
        tref: ["class", "dx", "dy", "externalResourcesRequired", "id", "lengthAdjust", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "textLength", "x", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
        tspan: ["class", "dx", "dy", "externalResourcesRequired", "id", "lengthAdjust", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "textLength", "x", "xml:base", "xml:lang", "xml:space", "y"],
        use: ["class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
        view: ["externalResourcesRequired", "id", "preserveAspectRatio", "viewBox", "viewTarget", "xml:base", "xml:lang", "xml:space", "zoomAndPan"],
        vkern: ["g1", "g2", "id", "k", "u1", "u2", "xml:base", "xml:lang", "xml:space"]
      }, Wn = {
        a: !0,
        altGlyph: !0,
        animate: !0,
        animateColor: !0,
        circle: !0,
        clipPath: !0,
        defs: !0,
        ellipse: !0,
        feBlend: !0,
        feColorMatrix: !0,
        feComponentTransfer: !0,
        feComposite: !0,
        feConvolveMatrix: !0,
        feDiffuseLighting: !0,
        feDisplacementMap: !0,
        feFlood: !0,
        feGaussianBlur: !0,
        feImage: !0,
        feMerge: !0,
        feMorphology: !0,
        feOffset: !0,
        feSpecularLighting: !0,
        feTile: !0,
        feTurbulence: !0,
        filter: !0,
        font: !0,
        foreignObject: !0,
        g: !0,
        glyph: !0,
        glyphRef: !0,
        image: !0,
        line: !0,
        linearGradient: !0,
        marker: !0,
        mask: !0,
        "missing-glyph": !0,
        path: !0,
        pattern: !0,
        polygon: !0,
        polyline: !0,
        radialGradient: !0,
        rect: !0,
        stop: !0,
        svg: !0,
        switch: !0,
        symbol: !0,
        text: !0,
        textPath: !0,
        tref: !0,
        tspan: !0,
        use: !0
      }, Qn = {
        "alignment-baseline": !0,
        "baseline-shift": !0,
        "clip-path": !0,
        "clip-rule": !0,
        clip: !0,
        "color-interpolation-filters": !0,
        "color-interpolation": !0,
        "color-profile": !0,
        "color-rendering": !0,
        color: !0,
        cursor: !0,
        direction: !0,
        display: !0,
        "dominant-baseline": !0,
        "enable-background": !0,
        "fill-opacity": !0,
        "fill-rule": !0,
        fill: !0,
        filter: !0,
        "flood-color": !0,
        "flood-opacity": !0,
        "font-family": !0,
        "font-size-adjust": !0,
        "font-size": !0,
        "font-stretch": !0,
        "font-style": !0,
        "font-variant": !0,
        "font-weight": !0,
        "glyph-orientation-horizontal": !0,
        "glyph-orientation-vertical": !0,
        "image-rendering": !0,
        kerning: !0,
        "letter-spacing": !0,
        "lighting-color": !0,
        "marker-end": !0,
        "marker-mid": !0,
        "marker-start": !0,
        mask: !0,
        opacity: !0,
        overflow: !0,
        "pointer-events": !0,
        "shape-rendering": !0,
        "stop-color": !0,
        "stop-opacity": !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        "stroke-miterlimit": !0,
        "stroke-opacity": !0,
        "stroke-width": !0,
        stroke: !0,
        "text-anchor": !0,
        "text-decoration": !0,
        "text-rendering": !0,
        "unicode-bidi": !0,
        visibility: !0,
        "word-spacing": !0,
        "writing-mode": !0
      };
      Jn = function () {
        function e() {
          var e, t;
          "altglyph" === (e = "<svg><altGlyph /></svg>", t = m.b.createElement("div"), t.innerHTML = e, t.firstChild).firstElementChild.nodeName && Kn.altGlyph && (Kn.altglyph = Kn.altGlyph, delete Kn.altGlyph, Kn.altglyphdef = Kn.altGlyphDef, delete Kn.altGlyphDef, Kn.altglyphitem = Kn.altGlyphItem, delete Kn.altGlyphItem, Kn.glyphref = Kn.glyphRef, delete Kn.glyphRef)
        }

        return e.prototype.isStandardSvgAttribute = function (e, t) {
          return Xn[e] && Yn[t] || Kn[e] && -1 !== Kn[e].indexOf(t)
        }, e
      }()
    }
    var Kn = Un, Xn = Wn, Yn = Qn, Zn = Jn || function () {
      function e() {
      }

      return e.prototype.isStandardSvgAttribute = function () {
        return !1
      }, e
    }(), ei = (h = d = function () {
      function e(e, t, n, i, r) {
        this.taskQueue = e, this.eventManager = t, this.dirtyChecker = n, this.svgAnalyzer = i, this.parser = r, this.adapters = [], this.logger = g.getLogger("observer-locator")
      }

      return e.prototype.getObserver = function (e, t) {
        var n, i = e.__observers__;
        return i && t in i ? i[t] : ((n = this.createPropertyObserver(e, t)).doNotCache || (void 0 === i && (i = this.getOrCreateObserversLookup(e)), i[t] = n), n)
      }, e.prototype.getOrCreateObserversLookup = function (e) {
        return e.__observers__ || this.createObserversLookup(e)
      }, e.prototype.createObserversLookup = function (e) {
        var t = {};
        return Reflect.defineProperty(e, "__observers__", {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: t
        }) || this.logger.warn("Cannot add observers to object", e), t
      }, e.prototype.addAdapter = function (e) {
        this.adapters.push(e)
      }, e.prototype.getAdapterObserver = function (e, t, n) {
        for (var i = 0, r = this.adapters.length; i < r; i++) {
          var o = this.adapters[i].getObserver(e, t, n);
          if (o) return o
        }
        return null
      }, e.prototype.createPropertyObserver = function (e, t) {
        var n, i = void 0, r = void 0;
        if (!(e instanceof Object)) return new Fn(e, t);
        if (e instanceof m.b.Element) {
          if ("class" === t) return new Gn(e);
          if ("style" === t || "css" === t) return new Dn(e, t);
          if (i = this.eventManager.getElementHandler(e, t), "value" === t && "select" === e.tagName.toLowerCase()) return new $n(e, i, this);
          if ("checked" === t && "input" === e.tagName.toLowerCase()) return new Hn(e, i, this);
          if (i) return new qn(e, t, i);
          if (r = /^xlink:(.+)$/.exec(t)) return new Pn(e, t, r[1]);
          if ("role" === t && (e instanceof m.b.Element || e instanceof m.b.SVGElement) || /^\w+:|^data-|^aria-/.test(t) || e instanceof m.b.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(e.nodeName, t)) return new Vn(e, t)
        }
        if (function (e) {
          return !!(e && e.get && e.get.dependencies)
        }(n = Object.getPropertyDescriptor(e, t))) return function (e, t, n, i) {
          var r = n.get.dependencies;
          if (!(r instanceof zn)) {
            for (var o = r.length; o--;) r[o] = i.parser.parse(r[o]);
            r = n.get.dependencies = new zn(t, r)
          }
          var a = {bindingContext: e, overrideContext: A(e)};
          return new ne(a, r, i)
        }(e, t, n, this);
        if (n) {
          var o = n.get || n.set;
          if (o) {
            if (o.getObserver) return o.getObserver(e);
            var a = this.getAdapterObserver(e, t, n);
            return a || new Bn(this.dirtyChecker, e, t)
          }
        }
        return e instanceof Array ? "length" === t ? this.getArrayObserver(e).getLengthObserver() : new Bn(this.dirtyChecker, e, t) : e instanceof Map ? "size" === t ? this.getMapObserver(e).getLengthObserver() : new Bn(this.dirtyChecker, e, t) : e instanceof Set ? "size" === t ? this.getSetObserver(e).getLengthObserver() : new Bn(this.dirtyChecker, e, t) : new Mn(this.taskQueue, e, t)
      }, e.prototype.getAccessor = function (e, t) {
        if (e instanceof m.b.Element) {
          if ("class" === t || "style" === t || "css" === t || "value" === t && ("input" === e.tagName.toLowerCase() || "select" === e.tagName.toLowerCase()) || "checked" === t && "input" === e.tagName.toLowerCase() || "model" === t && "input" === e.tagName.toLowerCase() || /^xlink:.+$/.exec(t)) return this.getObserver(e, t);
          if (/^\w+:|^data-|^aria-/.test(t) || e instanceof m.b.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(e.nodeName, t) || "img" === e.tagName.toLowerCase() && "src" === t || "a" === e.tagName.toLowerCase() && "href" === t) return Nn
        }
        return Ln
      }, e.prototype.getArrayObserver = function (e) {
        return function (e, t) {
          return we.for(e, t)
        }(this.taskQueue, e)
      }, e.prototype.getMapObserver = function (e) {
        return function (e, t) {
          return yn.for(e, t)
        }(this.taskQueue, e)
      }, e.prototype.getSetObserver = function (e) {
        return function (e, t) {
          return gi.for(e, t)
        }(this.taskQueue, e)
      }, e
    }(), d.inject = [y.a, Tn, jn, Zn, Ge], h), ti = (function () {
      function e() {
      }

      e.prototype.getObserver = function (e, t, n) {
        throw new Error("BindingAdapters must implement getObserver(object, propertyName).")
      }
    }(), function () {
      function e(e, t, n, i, r, o) {
        this.observerLocator = e, this.targetProperty = t, this.sourceExpression = n, this.mode = i, this.lookupFunctions = r, this.attribute = o, this.discrete = !1
      }

      return e.prototype.createBinding = function (e) {
        return new ni(this.observerLocator, this.sourceExpression, e, this.targetProperty, this.mode, this.lookupFunctions)
      }, e
    }()), ni = N()(p = function () {
      function e(e, t, n, i, r, o) {
        this.observerLocator = e, this.sourceExpression = t, this.target = n, this.targetProperty = i, this.mode = r, this.lookupFunctions = o
      }

      return e.prototype.updateTarget = function (e) {
        this.targetObserver.setValue(e, this.target, this.targetProperty)
      }, e.prototype.updateSource = function (e) {
        this.sourceExpression.assign(this.source, e, this.lookupFunctions)
      }, e.prototype.call = function (e, t, n) {
        if (this.isBound) {
          if (e === S) return n = this.targetObserver.getValue(this.target, this.targetProperty), (t = this.sourceExpression.evaluate(this.source, this.lookupFunctions)) !== n && this.updateTarget(t), void (this.mode !== $e.oneTime && (this._version++, this.sourceExpression.connect(this, this.source), this.unobserve(!1)));
          if (e !== k) throw new Error("Unexpected call context " + e);
          t !== this.sourceExpression.evaluate(this.source, this.lookupFunctions) && this.updateSource(t)
        }
      }, e.prototype.bind = function (e) {
        if (this.isBound) {
          if (this.source === e) return;
          this.unbind()
        }
        this.isBound = !0, this.source = e, this.sourceExpression.bind && this.sourceExpression.bind(this, e, this.lookupFunctions);
        var t = this.mode;
        if (!this.targetObserver) {
          var n = t === $e.twoWay || t === $e.fromView ? "getObserver" : "getAccessor";
          this.targetObserver = this.observerLocator[n](this.target, this.targetProperty)
        }
        if ("bind" in this.targetObserver && this.targetObserver.bind(), this.mode !== $e.fromView) {
          var i = this.sourceExpression.evaluate(e, this.lookupFunctions);
          this.updateTarget(i)
        }
        t !== $e.oneTime && (t === $e.toView ? U(this) : t === $e.twoWay ? (this.sourceExpression.connect(this, e), this.targetObserver.subscribe(k, this)) : t === $e.fromView && this.targetObserver.subscribe(k, this))
      }, e.prototype.unbind = function () {
        this.isBound && (this.isBound = !1, this.sourceExpression.unbind && this.sourceExpression.unbind(this, this.source), this.source = null, "unbind" in this.targetObserver && this.targetObserver.unbind(), this.targetObserver.unsubscribe && this.targetObserver.unsubscribe(k, this), this.unobserve(!0))
      }, e.prototype.connect = function (e) {
        if (this.isBound) {
          if (e) {
            var t = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
            this.updateTarget(t)
          }
          this.sourceExpression.connect(this, this.source)
        }
      }, e
    }()) || p, ii = function () {
      function e(e, t, n, i) {
        this.observerLocator = e, this.targetProperty = t, this.sourceExpression = n, this.lookupFunctions = i
      }

      return e.prototype.createBinding = function (e) {
        return new ri(this.observerLocator, this.sourceExpression, e, this.targetProperty, this.lookupFunctions)
      }, e
    }(), ri = function () {
      function e(e, t, n, i, r) {
        this.sourceExpression = t, this.target = n, this.targetProperty = e.getObserver(n, i), this.lookupFunctions = r
      }

      return e.prototype.callSource = function (e) {
        var t = this.source.overrideContext;
        Object.assign(t, e), t.$event = e;
        var n = this.sourceExpression.evaluate(this.source, this.lookupFunctions, !0);
        for (var i in delete t.$event, e) delete t[i];
        return n
      }, e.prototype.bind = function (e) {
        var t = this;
        if (this.isBound) {
          if (this.source === e) return;
          this.unbind()
        }
        this.isBound = !0, this.source = e, this.sourceExpression.bind && this.sourceExpression.bind(this, e, this.lookupFunctions), this.targetProperty.setValue((function (e) {
          return t.callSource(e)
        }))
      }, e.prototype.unbind = function () {
        this.isBound && (this.isBound = !1, this.sourceExpression.unbind && this.sourceExpression.unbind(this, this.source), this.source = null, this.targetProperty.setValue(null))
      }, e
    }(), oi = function () {
      function e(e) {
        this.name = e
      }

      return e.convention = function (t) {
        if (t.endsWith("ValueConverter")) return new e(R(t.substring(0, t.length - 14)))
      }, e.prototype.initialize = function (e, t) {
        this.instance = e.get(t)
      }, e.prototype.register = function (e, t) {
        e.registerValueConverter(t || this.name, this.instance)
      }, e.prototype.load = function (e, t) {
      }, e
    }();

    function ai(e) {
      if (void 0 === e || "string" == typeof e) return function (t) {
        b.b.define(b.b.resource, new oi(e), t)
      };
      b.b.define(b.b.resource, new oi, e)
    }

    var si = function () {
      function e(e) {
        this.name = e
      }

      return e.convention = function (t) {
        if (t.endsWith("BindingBehavior")) return new e(R(t.substring(0, t.length - 15)))
      }, e.prototype.initialize = function (e, t) {
        this.instance = e.get(t)
      }, e.prototype.register = function (e, t) {
        e.registerBindingBehavior(t || this.name, this.instance)
      }, e.prototype.load = function (e, t) {
      }, e
    }();

    function ci(e) {
      if (void 0 === e || "string" == typeof e) return function (t) {
        b.b.define(b.b.resource, new si(e), t)
      };
      b.b.define(b.b.resource, new si, e)
    }

    var li = function () {
      function e(e, t, n, i, r, o) {
        this.eventManager = e, this.targetEvent = t, this.sourceExpression = n, this.delegationStrategy = i, this.discrete = !0, this.preventDefault = r, this.lookupFunctions = o
      }

      return e.prototype.createBinding = function (e) {
        return new ui(this.eventManager, this.targetEvent, this.delegationStrategy, this.sourceExpression, e, this.preventDefault, this.lookupFunctions)
      }, e
    }(), ui = function () {
      function e(e, t, n, i, r, o, a) {
        this.eventManager = e, this.targetEvent = t, this.delegationStrategy = n, this.sourceExpression = i, this.target = r, this.preventDefault = o, this.lookupFunctions = a
      }

      return e.prototype.callSource = function (e) {
        var t = this.source.overrideContext;
        t.$event = e;
        var n = this.sourceExpression.evaluate(this.source, this.lookupFunctions, !0);
        return delete t.$event, !0 !== n && this.preventDefault && e.preventDefault(), n
      }, e.prototype.handleEvent = function (e) {
        this.callSource(e)
      }, e.prototype.bind = function (e) {
        if (this.isBound) {
          if (this.source === e) return;
          this.unbind()
        }
        this.isBound = !0, this.source = e, this.sourceExpression.bind && this.sourceExpression.bind(this, e, this.lookupFunctions), this._handler = this.eventManager.addEventListener(this.target, this.targetEvent, this, this.delegationStrategy, !0)
      }, e.prototype.unbind = function () {
        this.isBound && (this.isBound = !1, this.sourceExpression.unbind && this.sourceExpression.unbind(this, this.source), this.source = null, this._handler.dispose(), this._handler = null)
      }, e
    }();

    function di(e) {
      var t = e.au;
      if (void 0 === t) throw new Error('No Aurelia APIs are defined for the element: "' + e.tagName + '".');
      return t
    }

    var hi = function () {
      function e(e, t, n) {
        this.sourceExpression = e, this.apiName = t, this.lookupFunctions = n, this.discrete = !0
      }

      return e.prototype.createBinding = function (t) {
        return new pi(this.sourceExpression, e.locateAPI(t, this.apiName), this.lookupFunctions)
      }, e.locateAPI = function (e, t) {
        switch (t) {
          case"element":
            return e;
          case"controller":
            return di(e).controller;
          case"view-model":
            return di(e).controller.viewModel;
          case"view":
            return di(e).controller.view;
          default:
            var n = di(e)[t];
            if (void 0 === n) throw new Error('Attempted to reference "' + t + "\", but it was not found amongst the target's API.");
            return n.viewModel
        }
      }, e
    }(), pi = function () {
      function e(e, t, n) {
        this.sourceExpression = e, this.target = t, this.lookupFunctions = n
      }

      return e.prototype.bind = function (e) {
        if (this.isBound) {
          if (this.source === e) return;
          this.unbind()
        }
        this.isBound = !0, this.source = e, this.sourceExpression.bind && this.sourceExpression.bind(this, e, this.lookupFunctions), this.sourceExpression.assign(this.source, this.target, this.lookupFunctions)
      }, e.prototype.unbind = function () {
        this.isBound && (this.isBound = !1, this.sourceExpression.evaluate(this.source, this.lookupFunctions) === this.target && this.sourceExpression.assign(this.source, null, this.lookupFunctions), this.sourceExpression.unbind && this.sourceExpression.unbind(this, this.source), this.source = null)
      }, e
    }(), fi = {
      bindingBehaviors: function (e) {
        return null
      }, valueConverters: function (e) {
        return null
      }
    }, vi = (v = f = function () {
      function e(e, t) {
        this.observerLocator = e, this.parser = t
      }

      return e.prototype.createBindingExpression = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : $e.toView,
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : fi;
        return new ti(this.observerLocator, e, this.parser.parse(t), n, i)
      }, e.prototype.propertyObserver = function (e, t) {
        var n = this;
        return {
          subscribe: function (i) {
            var r = n.observerLocator.getObserver(e, t);
            return r.subscribe(i), {
              dispose: function () {
                return r.unsubscribe(i)
              }
            }
          }
        }
      }, e.prototype.collectionObserver = function (e) {
        var t = this;
        return {
          subscribe: function (n) {
            var i = void 0;
            if (e instanceof Array) i = t.observerLocator.getArrayObserver(e); else if (e instanceof Map) i = t.observerLocator.getMapObserver(e); else {
              if (!(e instanceof Set)) throw new Error("collection must be an instance of Array, Map or Set.");
              i = t.observerLocator.getSetObserver(e)
            }
            return i.subscribe(n), {
              dispose: function () {
                return i.unsubscribe(n)
              }
            }
          }
        }
      }, e.prototype.expressionObserver = function (e, t) {
        var n = {bindingContext: e, overrideContext: A(e)};
        return new ne(n, this.parser.parse(t), this.observerLocator, fi)
      }, e.prototype.parseExpression = function (e) {
        return this.parser.parse(e)
      }, e.prototype.registerAdapter = function (e) {
        this.observerLocator.addAdapter(e)
      }, e
    }(), f.inject = [ei, Ge], Set.prototype);
    var gi = function (e) {
      function t(t, n) {
        return _(this, e.call(this, t, n))
      }

      return C(t, e), t.for = function (e, n) {
        return "__set_observer__" in n || Reflect.defineProperty(n, "__set_observer__", {
          value: t.create(e, n),
          enumerable: !1,
          configurable: !1
        }), n.__set_observer__
      }, t.create = function (e, n) {
        var i = new t(e, n), r = vi;
        return r.add === n.add && r.delete === n.delete && r.clear === n.clear || (r = {
          add: n.add,
          delete: n.delete,
          clear: n.clear
        }), n.add = function () {
          var e = "add", t = n.size, o = r.add.apply(n, arguments), a = n.size === t;
          return a || i.addChangeRecord({type: e, object: n, value: Array.from(n).pop()}), o
        }, n.delete = function () {
          var e = n.has(arguments[0]), t = r.delete.apply(n, arguments);
          return e && i.addChangeRecord({type: "delete", object: n, value: arguments[0]}), t
        }, n.clear = function () {
          var e = r.clear.apply(n, arguments);
          return i.addChangeRecord({type: "clear", object: n}), e
        }, i
      }, t
    }(ue);
    var mi = {};

    function yi(e, t) {
      mi.hasOwnProperty(t) || (mi[t] = 0), e.observeProperty(mi, t)
    }
  }, 20: function (e, t, n) {
    (function (e) {
      var i = void 0 !== e && e || "undefined" != typeof self && self || window, r = Function.prototype.apply;

      function o(e, t) {
        this._id = e, this._clearFn = t
      }

      t.setTimeout = function () {
        return new o(r.call(setTimeout, i, arguments), clearTimeout)
      }, t.setInterval = function () {
        return new o(r.call(setInterval, i, arguments), clearInterval)
      }, t.clearTimeout = t.clearInterval = function (e) {
        e && e.close()
      }, o.prototype.unref = o.prototype.ref = function () {
      }, o.prototype.close = function () {
        this._clearFn.call(i, this._id)
      }, t.enroll = function (e, t) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = t
      }, t.unenroll = function (e) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
      }, t._unrefActive = t.active = function (e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout((function () {
          e._onTimeout && e._onTimeout()
        }), t))
      }, n(21), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(this, n(12))
  }, 21: function (e, t, n) {
    (function (e, t) {
      !function (e, n) {
        "use strict";
        if (!e.setImmediate) {
          var i, r, o, a, s, c = 1, l = {}, u = !1, d = e.document,
            h = Object.getPrototypeOf && Object.getPrototypeOf(e);
          h = h && h.setTimeout ? h : e, "[object process]" === {}.toString.call(e.process) ? i = function (e) {
            t.nextTick((function () {
              f(e)
            }))
          } : !function () {
            if (e.postMessage && !e.importScripts) {
              var t = !0, n = e.onmessage;
              return e.onmessage = function () {
                t = !1
              }, e.postMessage("", "*"), e.onmessage = n, t
            }
          }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function (e) {
            f(e.data)
          }, i = function (e) {
            o.port2.postMessage(e)
          }) : d && "onreadystatechange" in d.createElement("script") ? (r = d.documentElement, i = function (e) {
            var t = d.createElement("script");
            t.onreadystatechange = function () {
              f(e), t.onreadystatechange = null, r.removeChild(t), t = null
            }, r.appendChild(t)
          }) : i = function (e) {
            setTimeout(f, 0, e)
          } : (a = "setImmediate$" + Math.random() + "$", s = function (t) {
            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && f(+t.data.slice(a.length))
          }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), i = function (t) {
            e.postMessage(a + t, "*")
          }), h.setImmediate = function (e) {
            "function" != typeof e && (e = new Function("" + e));
            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
            var r = {callback: e, args: t};
            return l[c] = r, i(c), c++
          }, h.clearImmediate = p
        }

        function p(e) {
          delete l[e]
        }

        function f(e) {
          if (u) setTimeout(f, 0, e); else {
            var t = l[e];
            if (t) {
              u = !0;
              try {
                !function (e) {
                  var t = e.callback, n = e.args;
                  switch (n.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(n[0]);
                      break;
                    case 2:
                      t(n[0], n[1]);
                      break;
                    case 3:
                      t(n[0], n[1], n[2]);
                      break;
                    default:
                      t.apply(void 0, n)
                  }
                }(t)
              } finally {
                p(e), u = !1
              }
            }
          }
        }
      }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(this, n(12), n(16))
  }, 22: function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
      return u
    }));
    var i = n(7), r = function () {
        function e(e) {
          this.charSpec = e, this.nextStates = []
        }

        return e.prototype.get = function (e) {
          var t = this.nextStates, n = Array.isArray(t), i = 0;
          for (t = n ? t : t[Symbol.iterator](); ;) {
            var r;
            if (n) {
              if (i >= t.length) break;
              r = t[i++]
            } else {
              if ((i = t.next()).done) break;
              r = i.value
            }
            var o = r;
            if (o.charSpec.validChars === e.validChars && o.charSpec.invalidChars === e.invalidChars) return o
          }
        }, e.prototype.put = function (t) {
          var n = this.get(t);
          return n || (n = new e(t), this.nextStates.push(n), t.repeat && n.nextStates.push(n), n)
        }, e.prototype.match = function (e) {
          for (var t = this.nextStates, n = [], i = 0, r = t.length; i < r; i++) {
            var o = t[i], a = o.charSpec;
            void 0 !== a.validChars ? -1 !== a.validChars.indexOf(e) && n.push(o) : void 0 !== a.invalidChars && -1 === a.invalidChars.indexOf(e) && n.push(o)
          }
          return n
        }, e
      }(),
      o = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].join("|\\") + ")", "g"),
      a = function () {
        function e(e, t) {
          this.string = e, this.caseSensitive = t
        }

        return e.prototype.eachChar = function (e) {
          for (var t = this.string, n = 0, i = t.length; n < i; ++n) {
            var r = t[n];
            e({validChars: this.caseSensitive ? r : r.toUpperCase() + r.toLowerCase()})
          }
        }, e.prototype.regex = function () {
          return this.string.replace(o, "\\$1")
        }, e.prototype.generate = function () {
          return this.string
        }, e
      }(), s = function () {
        function e(e, t) {
          this.name = e, this.optional = t
        }

        return e.prototype.eachChar = function (e) {
          e({invalidChars: "/", repeat: !0})
        }, e.prototype.regex = function () {
          return "([^/]+)"
        }, e.prototype.generate = function (e, t) {
          return t[this.name] = !0, e[this.name]
        }, e
      }(), c = function () {
        function e(e) {
          this.name = e
        }

        return e.prototype.eachChar = function (e) {
          e({invalidChars: "", repeat: !0})
        }, e.prototype.regex = function () {
          return "(.+)"
        }, e.prototype.generate = function (e, t) {
          return t[this.name] = !0, e[this.name]
        }, e
      }(), l = function () {
        function e() {
        }

        return e.prototype.eachChar = function () {
        }, e.prototype.regex = function () {
          return ""
        }, e.prototype.generate = function () {
          return ""
        }, e
      }(), u = function () {
        function e() {
          this.rootState = new r, this.names = {}, this.routes = new Map
        }

        return e.prototype.add = function (e) {
          var t = this;
          if (!Array.isArray(e)) {
            for (var n = this.rootState, i = [], r = "^", o = {
              statics: 0,
              dynamics: 0,
              stars: 0
            }, u = [], d = e.handler.name, h = !0, f = function (e, t, n, i) {
              var r = e;
              "/" === e.charAt(0) && (r = e.substr(1));
              for (var o = [], u = r.split("/"), d = 0, h = u.length; d < h; ++d) {
                var p = u[d], f = p.match(/^:([^?]+)(\?)?$/);
                if (f) {
                  var v = f, g = v[1], m = v[2];
                  if (-1 !== g.indexOf("=")) throw new Error("Parameter " + g + " in route " + e + " has a default value, which is not supported.");
                  o.push(new s(g, !!m)), t.push(g), n.dynamics++
                } else (f = p.match(/^\*(.+)$/)) ? (o.push(new c(f[1])), t.push(f[1]), n.stars++) : "" === p ? o.push(new l) : (o.push(new a(p, i)), n.statics++)
              }
              return o
            }(e.path, u, o, e.caseSensitive), v = 0, g = f.length; v < g; v++) {
              var m = f[v];
              if (!(m instanceof l)) {
                for (var y = p(n, m), b = y[0], w = y[1], x = 0, _ = i.length; x < _; x++) i[x].nextStates.push(b);
                m.optional ? (i.push(w), r += "(?:/" + m.regex() + ")?") : (n = w, r += "/" + m.regex(), i.length = 0, h = !1)
              }
            }
            h && (n = n.put({validChars: "/"}), r += "/?");
            var C = [{handler: e.handler, names: u}];
            if (this.routes.set(e.handler, {
              segments: f,
              handlers: C
            }), d) for (var k = Array.isArray(d) ? d : [d], S = 0; S < k.length; S++) k[S] in this.names || (this.names[k[S]] = {
              segments: f,
              handlers: C
            });
            for (var E = 0; E < i.length; E++) {
              var R = i[E];
              R.handlers = C, R.regex = new RegExp(r + "$", e.caseSensitive ? "" : "i"), R.types = o
            }
            return n.handlers = C, n.regex = new RegExp(r + "$", e.caseSensitive ? "" : "i"), n.types = o, n
          }
          e.forEach((function (e) {
            return t.add(e)
          }))
        }, e.prototype.getRoute = function (e) {
          return "string" == typeof e ? this.names[e] : this.routes.get(e)
        }, e.prototype.handlersFor = function (e) {
          var t = this.getRoute(e);
          if (!t) throw new Error("There is no route named " + e);
          return [].concat(t.handlers)
        }, e.prototype.hasRoute = function (e) {
          return !!this.getRoute(e)
        }, e.prototype.generate = function (e, t) {
          var n = this.getRoute(e);
          if (!n) throw new Error("There is no route named " + e);
          var r = n.handlers[0].handler;
          if (r.generationUsesHref) return r.href;
          for (var o = Object.assign({}, t), a = n.segments, s = {}, c = "", u = 0, d = a.length; u < d; u++) {
            var h = a[u];
            if (!(h instanceof l)) {
              var p = h.generate(o, s);
              if (null == p) {
                if (!h.optional) throw new Error("A value is required for route parameter '" + h.name + "' in route '" + e + "'.")
              } else c += "/", c += p
            }
          }
          for (var f in "/" !== c.charAt(0) && (c = "/" + c), s) delete o[f];
          var v = Object(i.a)(o);
          return c += v ? "?" + v : ""
        }, e.prototype.recognize = function (e) {
          var t = [this.rootState], n = {}, r = !1, o = e, a = o.indexOf("?");
          if (-1 !== a) {
            var s = o.substr(a + 1, o.length);
            o = o.substr(0, a), n = Object(i.c)(s)
          }
          "/" !== (o = decodeURI(o)).charAt(0) && (o = "/" + o);
          var c = o.length;
          c > 1 && "/" === o.charAt(c - 1) && (o = o.substr(0, c - 1), r = !0);
          for (var l = 0, u = o.length; l < u && (t = h(t, o.charAt(l))).length; l++) ;
          for (var p = [], f = 0, v = t.length; f < v; f++) t[f].handlers && p.push(t[f]);
          t = function (e) {
            return e.sort((function (e, t) {
              if (e.types.stars !== t.types.stars) return e.types.stars - t.types.stars;
              if (e.types.stars) {
                if (e.types.statics !== t.types.statics) return t.types.statics - e.types.statics;
                if (e.types.dynamics !== t.types.dynamics) return t.types.dynamics - e.types.dynamics
              }
              return e.types.dynamics !== t.types.dynamics ? e.types.dynamics - t.types.dynamics : e.types.statics !== t.types.statics ? t.types.statics - e.types.statics : 0
            }))
          }(p);
          var g = p[0];
          if (g && g.handlers) return r && "(.+)$" === g.regex.source.slice(-5) && (o += "/"), function (e, t, n) {
            for (var i = e.handlers, r = e.regex, o = t.match(r), a = 1, s = new d(n), c = 0, l = i.length; c < l; c++) {
              for (var u = i[c], h = u.names, p = {}, f = 0, v = h.length; f < v; f++) p[h[f]] = o[a++];
              s.push({handler: u.handler, params: p, isDynamic: !!h.length})
            }
            return s
          }(g, o, n)
        }, e
      }(), d = function (e) {
        this.splice = Array.prototype.splice, this.slice = Array.prototype.slice, this.push = Array.prototype.push, this.length = 0, this.queryParams = e || {}
      };

    function h(e, t) {
      for (var n = [], i = 0, r = e.length; i < r; i++) {
        var o = e[i];
        n.push.apply(n, o.match(t))
      }
      return n
    }

    function p(e, t) {
      var n = e.put({validChars: "/"}), i = n;
      return t.eachChar((function (e) {
        i = i.put(e)
      })), [n, i]
    }
  }, 23: function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "b", (function () {
        return o
      })), n.d(t, "a", (function () {
        return a
      }));
      var i = n(3), r = n(17), o = function () {
        function e() {
        }

        return e.withResources = function (e) {
          return void 0 === e && (e = []), (new a).withResources(e)
        }, e
      }(), a = function () {
        function t() {
          this.resources = []
        }

        return t.prototype.configure = function (e) {
          return e.use.standardConfiguration()
        }, t.prototype.bootstrap = function (e) {
          this.configure = e
        }, t.prototype.withResources = function (e) {
          return this.resources = e, this
        }, t.prototype.inView = function (e) {
          return this.html = e, this
        }, t.prototype.boundTo = function (e) {
          return this.bindingContext = e, this
        }, t.prototype.manuallyHandleLifecycle = function () {
          return this._prepareLifecycle(), this
        }, t.prototype.create = function (t) {
          var n = this;
          return t((function (t) {
            return e.resolve(n.configure(t)).then((function () {
              return n.resources && t.use.globalResources(n.resources), t.start().then((function () {
                return n.host = document.createElement("div"), n.host.innerHTML = n.html, document.body.appendChild(n.host), t.enhance(n.bindingContext, n.host).then((function () {
                  return n.rootView = t.root, n.element = n.host.firstElementChild, t.root.controllers.length && (n.viewModel = t.root.controllers[0].viewModel), new e((function (e) {
                    return setTimeout((function () {
                      return e()
                    }), 0)
                  }))
                }))
              }))
            }))
          }))
        }, t.prototype.dispose = function () {
          if (void 0 === this.host || void 0 === this.rootView) throw new Error("Cannot call ComponentTester.dispose() before ComponentTester.create()");
          return this.rootView.detached(), this.rootView.unbind(), this.host.parentNode.removeChild(this.host)
        }, t.prototype._prepareLifecycle = function () {
          var t = this, n = i.l.prototype.bind;
          i.l.prototype.bind = function () {
          }, this.bind = function (r) {
            return new e((function (e) {
              i.l.prototype.bind = n, void 0 !== r && (t.bindingContext = r), t.rootView.bind(t.bindingContext), setTimeout((function () {
                return e()
              }), 0)
            }))
          };
          var r = i.l.prototype.attached;
          i.l.prototype.attached = function () {
          }, this.attached = function () {
            return new e((function (e) {
              i.l.prototype.attached = r, t.rootView.attached(), setTimeout((function () {
                return e()
              }), 0)
            }))
          }, this.detached = function () {
            return new e((function (e) {
              t.rootView.detached(), setTimeout((function () {
                return e()
              }), 0)
            }))
          }, this.unbind = function () {
            return new e((function (e) {
              t.rootView.unbind(), setTimeout((function () {
                return e()
              }), 0)
            }))
          }
        }, t.prototype.waitForElement = function (e, t) {
          var n = this;
          return Object(r.a)((function () {
            return n.element.querySelector(e)
          }), t)
        }, t.prototype.waitForElements = function (e, t) {
          var n = this;
          return Object(r.a)((function () {
            return n.element.querySelectorAll(e)
          }), t)
        }, t
      }()
    }).call(this, n(8))
  }, 24: function (e, t, n) {
    n(25), n(27), e.exports = n(30)
  }, 25: function (e, t, n) {
  }, 26: function (e, t) {
    e.exports = function (e) {
      var t = [];
      return t.toString = function () {
        return this.map((function (t) {
          var n = function (e, t) {
            var n = e[1] || "", i = e[3];
            if (!i) return n;
            if (t && "function" == typeof btoa) {
              var r = (a = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                o = i.sources.map((function (e) {
                  return "/*# sourceURL=" + i.sourceRoot + e + " */"
                }));
              return [n].concat(o).concat([r]).join("\n")
            }
            var a;
            return [n].join("\n")
          }(t, e);
          return t[2] ? "@media " + t[2] + "{" + n + "}" : n
        })).join("")
      }, t.i = function (e, n) {
        "string" == typeof e && (e = [[null, e, ""]]);
        for (var i = {}, r = 0; r < this.length; r++) {
          var o = this[r][0];
          "number" == typeof o && (i[o] = !0)
        }
        for (r = 0; r < e.length; r++) {
          var a = e[r];
          "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
        }
      }, t
    }
  }, 27: function (e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n(0);
    Object.defineProperty(r.d, "Loader", {
      get: function () {
        return i || (i = n(28).WebpackLoader)
      }, set: function (e) {
        i = e
      }
    })
  }, 28: function (e, t, n) {
    "use strict";
    n.r(t), function (e, i) {
      n.d(t, "TextTemplateLoader", (function () {
        return d
      })), n.d(t, "ensureOriginOnExports", (function () {
        return h
      })), n.d(t, "WebpackLoader", (function () {
        return p
      }));
      var r, o = n(1), a = n(10), s = n(0),
        c = (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
          e.__proto__ = t
        } || function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }, function (e, t) {
          function n() {
            this.constructor = e
          }

          r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }), l = function (t, n, i, r) {
          return new (i || (i = e))((function (e, o) {
            function a(e) {
              try {
                c(r.next(e))
              } catch (e) {
                o(e)
              }
            }

            function s(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                o(e)
              }
            }

            function c(t) {
              t.done ? e(t.value) : new i((function (e) {
                e(t.value)
              })).then(a, s)
            }

            c((r = r.apply(t, n || [])).next())
          }))
        }, u = function (e, t) {
          var n, i, r, o, a = {
            label: 0, sent: function () {
              if (1 & r[0]) throw r[1];
              return r[1]
            }, trys: [], ops: []
          };
          return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
          }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
          }), o;

          function s(o) {
            return function (s) {
              return function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a;) try {
                  if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                  switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                    case 0:
                    case 1:
                      r = o;
                      break;
                    case 4:
                      return a.label++, {value: o[1], done: !1};
                    case 5:
                      a.label++, i = o[1], o = [0];
                      continue;
                    case 7:
                      o = a.ops.pop(), a.trys.pop();
                      continue;
                    default:
                      if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                        a = 0;
                        continue
                      }
                      if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                        a.label = o[1];
                        break
                      }
                      if (6 === o[0] && a.label < r[1]) {
                        a.label = r[1], r = o;
                        break
                      }
                      if (r && a.label < r[2]) {
                        a.label = r[2], a.ops.push(o);
                        break
                      }
                      r[2] && a.ops.pop(), a.trys.pop();
                      continue
                  }
                  o = t.call(e, a)
                } catch (e) {
                  o = [6, e], i = 0
                } finally {
                  n = r = 0
                }
                if (5 & o[0]) throw o[1];
                return {value: o[0] ? o[1] : void 0, done: !0}
              }([o, s])
            }
          }
        }, d = function () {
          function e() {
          }

          return e.prototype.loadTemplate = function (e, t) {
            return l(this, void 0, void 0, (function () {
              var n;
              return u(this, (function (i) {
                switch (i.label) {
                  case 0:
                    return [4, e.loadText(t.address)];
                  case 1:
                    return n = i.sent(), t.template = s.b.createTemplateFromMarkup(n), [2]
                }
              }))
            }))
          }, e
        }();

      function h(e, t) {
        var n, i, r = e;
        if (r.__useDefault && (r = r.default), o.a.set(r, new o.a(t, "default")), "object" == typeof r) for (n in r) "function" == typeof (i = r[n]) && o.a.set(i, new o.a(t, n));
        return e
      }

      var p = function (t) {
        function r() {
          var e = t.call(this) || this;
          return e.moduleRegistry = Object.create(null), e.loaderPlugins = Object.create(null), e.modulesBeingLoaded = new Map, e.useTemplateLoader(new d), e.addPlugin("template-registry-entry", {
            fetch: function (t) {
              return l(e, void 0, void 0, (function () {
                var e;
                return u(this, (function (n) {
                  switch (n.label) {
                    case 0:
                      return (e = this.getOrCreateTemplateRegistryEntry(t)).templateIsLoaded ? [3, 2] : [4, this.templateLoader.loadTemplate(this, e)];
                    case 1:
                      n.sent(), n.label = 2;
                    case 2:
                      return [2, e]
                  }
                }))
              }))
            }
          }), s.d.eachModule = function (e) {
            var t = n.c;
            Object.getOwnPropertyNames(t).some((function (n) {
              var i = t[n].exports;
              return "object" == typeof i && e(n, i)
            }))
          }, e
        }

        return c(r, t), r.prototype._import = function (t, r) {
          return void 0 === r && (r = !0), l(this, void 0, void 0, (function () {
            var o, a, s, c, l, d, h = this;
            return u(this, (function (u) {
              switch (u.label) {
                case 0:
                  if (o = t.split("!"), a = o.splice(o.length - 1, 1)[0], !(s = 1 === o.length ? o[0] : null)) return [3, 2];
                  if (!(c = this.loaderPlugins[s])) throw new Error("Plugin " + s + " is not registered in the loader.");
                  return [4, c.fetch(a)];
                case 1:
                  return [2, u.sent()];
                case 2:
                  return n.m[a] ? (r && i.hot && this.hmrContext && i.hot.accept(a, (function () {
                    return h.hmrContext.handleModuleChange(a, i.hot)
                  })), [2, n(a)]) : (l = "async!" + a, n.m[l] ? (r && i.hot && this.hmrContext && (i.hot.accept(a, (function () {
                    return h.hmrContext.handleModuleChange(a, i.hot)
                  })), i.hot.accept(l, (function () {
                    return h.hmrContext.handleModuleChange(a, i.hot)
                  }))), d = n(l), [4, new e(d)]) : [3, 4]);
                case 3:
                  return [2, u.sent()];
                case 4:
                  throw new Error("Unable to find module with ID: " + a)
              }
            }))
          }))
        }, r.prototype.map = function (e, t) {
        }, r.prototype.normalizeSync = function (e, t) {
          return e
        }, r.prototype.normalize = function (t, n) {
          return e.resolve(t)
        }, r.prototype.useTemplateLoader = function (e) {
          this.templateLoader = e
        }, r.prototype.loadAllModules = function (t) {
          var n = this;
          return e.all(t.map((function (e) {
            return n.loadModule(e)
          })))
        }, r.prototype.loadModule = function (e, t) {
          return void 0 === t && (t = !0), l(this, void 0, void 0, (function () {
            var n, i, r;
            return u(this, (function (o) {
              switch (o.label) {
                case 0:
                  return (n = this.moduleRegistry[e]) ? [2, n] : (i = this.modulesBeingLoaded.get(e)) ? [2, i] : (i = this._import(e, t), this.modulesBeingLoaded.set(e, i), [4, i]);
                case 1:
                  return r = o.sent(), this.moduleRegistry[e] = h(r, e), this.modulesBeingLoaded.delete(e), [2, r]
              }
            }))
          }))
        }, r.prototype.loadTemplate = function (e) {
          return this.loadModule(this.applyPluginToUrl(e, "template-registry-entry"), !1)
        }, r.prototype.loadText = function (e) {
          return l(this, void 0, void 0, (function () {
            var t;
            return u(this, (function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.loadModule(e, !1)];
                case 1:
                  return (t = n.sent()) instanceof Array && t[0] instanceof Array && t.hasOwnProperty("toString") ? [2, t.toString()] : [2, t]
              }
            }))
          }))
        }, r.prototype.applyPluginToUrl = function (e, t) {
          return t + "!" + e
        }, r.prototype.addPlugin = function (e, t) {
          this.loaderPlugins[e] = t
        }, r
      }(a.a);
      s.d.Loader = p
    }.call(this, n(8), n(29)(e))
  }, 29: function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []), Object.defineProperty(t, "loaded", {
          enumerable: !0, get: function () {
            return t.l
          }
        }), Object.defineProperty(t, "id", {
          enumerable: !0, get: function () {
            return t.i
          }
        }), Object.defineProperty(t, "exports", {enumerable: !0}), t.webpackPolyfill = 1
      }
      return t
    }
  }, 3: function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", (function () {
        return F
      })), n.d(t, "f", (function () {
        return N
      })), n.d(t, "b", (function () {
        return Q
      })), n.d(t, "j", (function () {
        return K
      })), n.d(t, "n", (function () {
        return oe
      })), n.d(t, "c", (function () {
        return se
      })), n.d(t, "h", (function () {
        return he
      })), n.d(t, "o", (function () {
        return ve
      })), n.d(t, "l", (function () {
        return ge
      })), n.d(t, "p", (function () {
        return ye
      })), n.d(t, "d", (function () {
        return Re
      })), n.d(t, "m", (function () {
        return De
      })), n.d(t, "g", (function () {
        return Qe
      })), n.d(t, "i", (function () {
        return et
      })), n.d(t, "e", (function () {
        return nt
      })), n.d(t, "v", (function () {
        return it
      })), n.d(t, "s", (function () {
        return rt
      })), n.d(t, "r", (function () {
        return ot
      })), n.d(t, "w", (function () {
        return at
      })), n.d(t, "q", (function () {
        return st
      })), n.d(t, "x", (function () {
        return lt
      })), n.d(t, "y", (function () {
        return dt
      })), n.d(t, "t", (function () {
        return ht
      })), n.d(t, "u", (function () {
        return pt
      })), n.d(t, "k", (function () {
        return ft
      }));
      var i, r, o, a, s, c, l, u, d, h, p, f, v, g, m, y, b, w, x, _, C, k, S = n(4), E = n(1), R = n(0), A = n(10),
        T = n(7), O = n(2), j = n(6), B = n(13), I = function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
          }

          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
          }
        }(), L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, F = function () {
          function t() {
          }

          return t.prototype.enter = function (t) {
            return e.resolve(!1)
          }, t.prototype.leave = function (t) {
            return e.resolve(!1)
          }, t.prototype.removeClass = function (t, n) {
            return t.classList.remove(n), e.resolve(!1)
          }, t.prototype.addClass = function (t, n) {
            return t.classList.add(n), e.resolve(!1)
          }, t.prototype.animate = function (t, n) {
            return e.resolve(!1)
          }, t.prototype.runSequence = function (e) {
          }, t.prototype.registerEffect = function (e, t) {
          }, t.prototype.unregisterEffect = function (e) {
          }, t
        }(), M = function () {
          function e(e) {
            this.owner = e, this.owner._compositionCount++
          }

          return e.prototype.done = function () {
            this.owner._compositionCount--, this.owner._tryCompleteTransaction()
          }, e
        }(), P = function () {
          function t(e) {
            this.owner = e, this.owner._ownershipToken = this, this.thenable = this._createThenable()
          }

          return t.prototype.waitForCompositionComplete = function () {
            return this.owner._tryCompleteTransaction(), this.thenable
          }, t.prototype.resolve = function () {
            this._resolveCallback()
          }, t.prototype._createThenable = function () {
            var t = this;
            return new e((function (e, n) {
              t._resolveCallback = e
            }))
          }, t
        }(), N = function () {
          function e() {
            this._ownershipToken = null, this._compositionCount = 0
          }

          return e.prototype.tryCapture = function () {
            return null === this._ownershipToken ? new P(this) : null
          }, e.prototype.enlist = function () {
            return new M(this)
          }, e.prototype._tryCompleteTransaction = function () {
            if (this._compositionCount <= 0 && (this._compositionCount = 0, null !== this._ownershipToken)) {
              var e = this._ownershipToken;
              this._ownershipToken = null, e.resolve()
            }
          }, e
        }(), V = /([A-Z])/g;

      function D(e) {
        return "-" + e.toLowerCase()
      }

      function q(e) {
        return (e.charAt(0).toLowerCase() + e.slice(1)).replace(V, D)
      }

      function H(e) {
        return !(e.auInterpolationTarget || /[^\t\n\r ]/.test(e.textContent))
      }

      var $ = function () {
        function e() {
        }

        return e.prototype.initialize = function (e, t) {
          this.instance = e.get(t)
        }, e.prototype.register = function (e, t) {
          e.registerViewEngineHooks(this.instance)
        }, e.prototype.load = function (e, t) {
        }, e.convention = function (t) {
          if (t.endsWith("ViewEngineHooks")) return new e
        }, e
      }();
      var G = (r = i = function () {
        function e(e) {
          this.element = e, this.subscriptions = {}
        }

        return e.prototype._enqueueHandler = function (e) {
          this.subscriptions[e.eventName] = this.subscriptions[e.eventName] || [], this.subscriptions[e.eventName].push(e)
        }, e.prototype._dequeueHandler = function (e) {
          var t = void 0, n = this.subscriptions[e.eventName];
          return n && (t = n.indexOf(e)) > -1 && n.splice(t, 1), e
        }, e.prototype.publish = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            r = R.b.createCustomEvent(e, {cancelable: i, bubbles: n, detail: t});
          this.element.dispatchEvent(r)
        }, e.prototype.subscribe = function (t, n, i) {
          if ("function" == typeof n) return void 0 === i && (i = e.defaultListenerOptions), new z(this, t, n, i, !1)
        }, e.prototype.subscribeOnce = function (t, n, i) {
          if ("function" == typeof n) return void 0 === i && (i = e.defaultListenerOptions), new z(this, t, n, i, !0)
        }, e.prototype.dispose = function (e) {
          if (e && "string" == typeof e) {
            var t = this.subscriptions[e];
            if (t) for (; t.length;) {
              var n = t.pop();
              n && n.dispose()
            }
          } else this.disposeAll()
        }, e.prototype.disposeAll = function () {
          for (var e in this.subscriptions) this.dispose(e)
        }, e
      }(), i.defaultListenerOptions = !0, r), z = function () {
        function e(e, t, n, i, r) {
          this.owner = e, this.eventName = t, this.handler = n, this.capture = "boolean" == typeof i ? i : i.capture, this.bubbles = !this.capture, this.captureOrOptions = i, this.once = r, e.element.addEventListener(t, this, i), e._enqueueHandler(this)
        }

        return e.prototype.handleEvent = function (e) {
          (0, this.handler)(e), this.once && this.dispose()
        }, e.prototype.dispose = function () {
          this.owner.element.removeEventListener(this.eventName, this, this.captureOrOptions), this.owner._dequeueHandler(this), this.owner = this.handler = null
        }, e
      }(), U = function () {
        function e() {
          this.dependencies = {}
        }

        return e.prototype.addDependency = function (e) {
          this.dependencies[e] = !0
        }, e.prototype.hasDependency = function (e) {
          return e in this.dependencies
        }, e
      }(), W = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.targetShadowDOM = e, this.compileSurrogate = t, this.associatedModuleId = null
      };
      W.normal = new W;
      var Q = function () {
        function e() {
        }

        return e.enhance = function () {
          var t = new e;
          return t.enhance = !0, t
        }, e.unitTest = function (t, n) {
          var i = new e;
          return i.type = t, i.attributes = n || {}, i
        }, e.element = function (t, n) {
          var i = new e;
          return i.type = n, i.attributes = {}, i.anchorIsContainer = !(t.hasAttribute("containerless") || n.containerless), i.initiatedByBehavior = !0, i
        }, e.attribute = function (t, n) {
          var i = new e;
          return i.attrName = t, i.type = n || null, i.attributes = {}, i
        }, e.dynamic = function (t, n, i) {
          var r = new e;
          return r.host = t, r.viewModel = n, r.viewFactory = i, r.inheritBindingContext = !0, r
        }, e
      }(), J = Q.prototype;
      J.initiatedByBehavior = !1, J.enhance = !1, J.partReplacements = null, J.viewFactory = null, J.originalAttrName = null, J.skipContentProcessing = !1, J.contentFactory = null, J.viewModel = null, J.anchorIsContainer = !1, J.host = null, J.attributes = null, J.type = null, J.attrName = null, J.inheritBindingContext = !1, Q.normal = new Q;
      var K = (a = o = function () {
        function e() {
        }

        return e.shadowSlot = function (t) {
          var n = new e;
          return n.parentInjectorId = t, n.shadowSlot = !0, n
        }, e.contentExpression = function (t) {
          var n = new e;
          return n.contentExpression = t, n
        }, e.letElement = function (t) {
          var n = new e;
          return n.expressions = t, n.letElement = !0, n
        }, e.lifting = function (t, n) {
          var i = new e;
          return i.parentInjectorId = t, i.expressions = e.noExpressions, i.behaviorInstructions = [n], i.viewFactory = n.viewFactory, i.providers = [n.type.target], i.lifting = !0, i
        }, e.normal = function (t, n, i, r, o, a) {
          var s = new e;
          return s.injectorId = t, s.parentInjectorId = n, s.providers = i, s.behaviorInstructions = r, s.expressions = o, s.anchorIsContainer = !a || a.anchorIsContainer, s.elementInstruction = a, s
        }, e.surrogate = function (t, n, i, r) {
          var o = new e;
          return o.expressions = i, o.behaviorInstructions = n, o.providers = t, o.values = r, o
        }, e
      }(), o.noExpressions = Object.freeze([]), a), X = K.prototype;
      X.injectorId = null, X.parentInjectorId = null, X.shadowSlot = !1, X.slotName = null, X.slotFallbackFactory = null, X.contentExpression = null, X.letElement = !1, X.expressions = null, X.expressions = null, X.providers = null, X.viewFactory = null, X.anchorIsContainer = !1, X.elementInstruction = null, X.lifting = !1, X.values = null;
      var Y = E.d.create("aurelia:view-strategy", {
        validate: function (e) {
          return "function" == typeof e.loadViewFactory || "View strategies must implement: loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>"
        }, compose: function (e) {
          "function" != typeof e.makeRelativeTo && (e.makeRelativeTo = R.d.noop)
        }
      }), Z = Y()(s = function () {
        function e(e) {
          this.path = e, this.absolutePath = null
        }

        return e.prototype.loadViewFactory = function (e, t, n, i) {
          return null === this.absolutePath && this.moduleId && (this.absolutePath = Object(T.d)(this.path, this.moduleId)), t.associatedModuleId = this.moduleId, e.loadViewFactory(this.absolutePath || this.path, t, n, i)
        }, e.prototype.makeRelativeTo = function (e) {
          null === this.absolutePath && (this.absolutePath = Object(T.d)(this.path, e))
        }, e
      }()) || s, ee = Y()(c = function () {
        function e(e, t) {
          this.moduleId = t.moduleId, this.viewUrl = e.convertOriginToViewUrl(t)
        }

        return e.prototype.loadViewFactory = function (e, t, n, i) {
          return t.associatedModuleId = this.moduleId, e.loadViewFactory(this.viewUrl, t, n, i)
        }, e
      }()) || c, te = Y()(l = function () {
        function t(e, t) {
          this.dependencies = e || null, this.dependencyBaseUrl = t || ""
        }

        return t.prototype.loadViewFactory = function (t, n, i, r) {
          var o = this.entry, a = this.dependencies;
          if (o && o.factoryIsReady) return e.resolve(null);
          if (this.entry = o = new A.b(this.moduleId || this.dependencyBaseUrl), o.dependencies = [], o.templateIsLoaded = !0, null !== a) for (var s = 0, c = a.length; s < c; ++s) {
            var l = a[s];
            "string" == typeof l || "function" == typeof l ? o.addDependency(l) : o.addDependency(l.from, l.as)
          }
          return n.associatedModuleId = this.moduleId, t.loadViewFactory(o, n, i, r)
        }, t
      }()) || l, ne = Y()(u = function () {
        function t(e, t) {
          this.moduleId = e, this.entry = t
        }

        return t.prototype.loadViewFactory = function (t, n, i, r) {
          var o = this.entry;
          return o.factoryIsReady ? e.resolve(o.factory) : (n.associatedModuleId = this.moduleId, t.loadViewFactory(o, n, i, r))
        }, t
      }()) || u, ie = Y()(d = function () {
        function t(e, t, n) {
          this.markup = e, this.dependencies = t || null, this.dependencyBaseUrl = n || ""
        }

        return t.prototype.loadViewFactory = function (t, n, i, r) {
          var o = this.entry, a = this.dependencies;
          if (o && o.factoryIsReady) return e.resolve(o.factory);
          if (this.entry = o = new A.b(this.moduleId || this.dependencyBaseUrl), o.template = R.b.createTemplateFromMarkup(this.markup), null !== a) for (var s = 0, c = a.length; s < c; ++s) {
            var l = a[s];
            "string" == typeof l || "function" == typeof l ? o.addDependency(l) : o.addDependency(l.from, l.as)
          }
          return n.associatedModuleId = this.moduleId, t.loadViewFactory(o, n, i, r)
        }, t
      }()) || d, re = Y()(h = function () {
        function t(e) {
          ("string" == typeof e || e instanceof R.b.Element && "TEMPLATE" === e.tagName) && (e = {template: e}), this.template = e.template, this.dependencies = e.dependencies || [], this.factoryIsReady = !1, this.onReady = null, this.moduleId = "undefined"
        }

        return t.prototype.loadViewFactory = function (t, n, i, r) {
          var o = this;
          if (this.factoryIsReady) return e.resolve(this.factory);
          var a = this.dependencies;
          return a = (a = "function" == typeof a ? a() : a) || [], a = Array.isArray(a) ? a : [a], e.all(a).then((function (i) {
            var a = t.container, s = t.appResources, c = t.viewCompiler, l = new ve(s), u = void 0, d = [];
            r && l.autoRegister(a, r);
            var h = i, p = Array.isArray(h), f = 0;
            for (h = p ? h : h[Symbol.iterator](); ;) {
              var v;
              if (p) {
                if (f >= h.length) break;
                v = h[f++]
              } else {
                if ((f = h.next()).done) break;
                v = f.value
              }
              var g = v;
              if ("function" == typeof g) null !== (u = l.autoRegister(a, g)).elementName && d.push(u); else {
                if (!g || "object" !== (void 0 === g ? "undefined" : L(g))) throw new Error('dependency neither function nor object. Received: "' + (void 0 === g ? "undefined" : L(g)) + '"');
                for (var m in g) {
                  var y = g[m];
                  "function" == typeof y && null !== (u = l.autoRegister(a, y)).elementName && d.push(u)
                }
              }
            }
            return e.all(d.map((function (e) {
              return e.load(a, e.target)
            }))).then((function () {
              var e = null !== o.template ? c.compile(o.template, l, n) : null;
              return o.factoryIsReady = !0, o.factory = e, e
            }))
          }))
        }, t
      }()) || h, oe = (f = p = function () {
        function e() {
        }

        return e.prototype.getViewStrategy = function (t) {
          if (!t) return null;
          if ("object" === (void 0 === t ? "undefined" : L(t)) && "getViewStrategy" in t) {
            var n = E.a.get(t.constructor);
            return "string" == typeof (t = t.getViewStrategy()) && (t = new Z(t)), Y.assert(t), n.moduleId && t.makeRelativeTo(n.moduleId), t
          }
          if ("string" == typeof t && (t = new Z(t)), Y.validate(t)) return t;
          if ("function" != typeof t && (t = t.constructor), "$view" in t) {
            var i = t.$view, r = void 0;
            return r = null === (i = "function" == typeof i ? i.call(t) : i) ? new te : i instanceof re ? i : new re(i), E.b.define(e.viewStrategyMetadataKey, r, t), r
          }
          var o = E.a.get(t), a = E.b.get(e.viewStrategyMetadataKey, t);
          if (a) o.moduleId && (a.moduleId = o.moduleId); else {
            if (!o.moduleId) throw new Error("Cannot determine default view strategy for object.", t);
            a = this.createFallbackViewStrategy(o)
          }
          return a
        }, e.prototype.createFallbackViewStrategy = function (e) {
          return new ee(this, e)
        }, e.prototype.convertOriginToViewUrl = function (e) {
          var t = e.moduleId;
          return (t.endsWith(".js") || t.endsWith(".ts") ? t.substring(0, t.length - 3) : t) + ".html"
        }, e
      }(), p.viewStrategyMetadataKey = "aurelia:view-strategy", f);

      function ae(e) {
        throw new Error("BindingLanguage must implement " + e + "().")
      }

      var se = function () {
        function e() {
        }

        return e.prototype.inspectAttribute = function (e, t, n, i) {
          ae("inspectAttribute")
        }, e.prototype.createAttributeInstruction = function (e, t, n, i) {
          ae("createAttributeInstruction")
        }, e.prototype.createLetExpressions = function (e, t) {
          ae("createLetExpressions")
        }, e.prototype.inspectTextContent = function (e, t) {
          ae("inspectTextContent")
        }, e
      }(), ce = Object.freeze([]), le = function () {
        function e(e) {
          this.element = e, this.element.auSlotAttribute = this
        }

        return e.inject = function () {
          return [R.b.Element]
        }, e.prototype.valueChanged = function (e, t) {
        }, e
      }(), ue = function () {
        function e(e, t, n, i) {
          this.anchor = e, this.anchor.viewSlot = this, this.name = t, this.destinationName = n, this.fallbackFactory = i, this.destinationSlot = null, this.projections = 0, this.contentView = null, new le(this.anchor).value = this.destinationName
        }

        return e.prototype.renderFallbackContent = function (e, t, n, i) {
          if (null === this.contentView) {
            this.contentView = this.fallbackFactory.create(this.ownerView.container), this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext);
            var r = Object.create(null);
            r[this.destinationSlot.name] = this.destinationSlot, he.distributeView(this.contentView, r, n, i, this.destinationSlot.name)
          }
        }, e.prototype.passThroughTo = function (e) {
          this.destinationSlot = e
        }, e.prototype.addNode = function (t, n, i, r) {
          null !== this.contentView && (this.contentView.removeNodes(), this.contentView.detached(), this.contentView.unbind(), this.contentView = null), n.viewSlot instanceof e ? n.viewSlot.passThroughTo(this) : (this.projections++, this.destinationSlot.addNode(t, n, i, r))
        }, e.prototype.removeView = function (e, t) {
          this.projections--, this.destinationSlot.removeView(e, t), this.needsFallbackRendering && this.renderFallbackContent(null, ce, t)
        }, e.prototype.removeAll = function (e) {
          this.projections = 0, this.destinationSlot.removeAll(e), this.needsFallbackRendering && this.renderFallbackContent(null, ce, e)
        }, e.prototype.projectFrom = function (e, t) {
          this.destinationSlot.projectFrom(e, t)
        }, e.prototype.created = function (e) {
          this.ownerView = e
        }, e.prototype.bind = function (e) {
          this.contentView && this.contentView.bind(e.bindingContext, e.overrideContext)
        }, e.prototype.attached = function () {
          this.contentView && this.contentView.attached()
        }, e.prototype.detached = function () {
          this.contentView && this.contentView.detached()
        }, e.prototype.unbind = function () {
          this.contentView && this.contentView.unbind()
        }, I(e, [{
          key: "needsFallbackRendering", get: function () {
            return this.fallbackFactory && 0 === this.projections
          }
        }]), e
      }(), de = function () {
        function e(e, t, n) {
          this.anchor = e, this.anchor.isContentProjectionSource = !0, this.anchor.viewSlot = this, this.name = t, this.fallbackFactory = n, this.contentView = null, this.projections = 0, this.children = [], this.projectFromAnchors = null, this.destinationSlots = null
        }

        return e.prototype.addNode = function (e, t, n, i, r) {
          if (null !== this.contentView && (this.contentView.removeNodes(), this.contentView.detached(), this.contentView.unbind(), this.contentView = null), t.viewSlot instanceof ue) t.viewSlot.passThroughTo(this); else if (null !== this.destinationSlots) he.distributeNodes(e, [t], this.destinationSlots, this, i); else {
            t.auOwnerView = e, t.auProjectionSource = n, t.auAssignedSlot = this;
            var o = this._findAnchor(e, t, n, i);
            o.parentNode.insertBefore(t, o), this.children.push(t), this.projections++
          }
        }, e.prototype.removeView = function (e, t) {
          if (null !== this.destinationSlots) he.undistributeView(e, this.destinationSlots, this); else if (this.contentView && this.contentView.hasSlots) he.undistributeView(e, this.contentView.slots, t); else {
            var n = this.children.find((function (e) {
              return e.auSlotProjectFrom === t
            }));
            if (n) {
              for (var i = n.auProjectionChildren, r = 0, o = i.length; r < o; ++r) {
                var a = i[r];
                a.auOwnerView === e && (i.splice(r, 1), e.fragment.appendChild(a), r--, o--, this.projections--)
              }
              this.needsFallbackRendering && this.renderFallbackContent(e, ce, t)
            }
          }
        }, e.prototype.removeAll = function (e) {
          if (null !== this.destinationSlots) he.undistributeAll(this.destinationSlots, this); else if (this.contentView && this.contentView.hasSlots) he.undistributeAll(this.contentView.slots, e); else {
            var t = this.children.find((function (t) {
              return t.auSlotProjectFrom === e
            }));
            if (t) {
              for (var n = t.auProjectionChildren, i = 0, r = n.length; i < r; ++i) {
                var o = n[i];
                o.auOwnerView.fragment.appendChild(o), this.projections--
              }
              t.auProjectionChildren = [], this.needsFallbackRendering && this.renderFallbackContent(null, ce, e)
            }
          }
        }, e.prototype._findAnchor = function (e, t, n, i) {
          if (n) {
            var r = this.children.find((function (e) {
              return e.auSlotProjectFrom === n
            }));
            if (r) {
              if (void 0 !== i) for (var o = r.auProjectionChildren, a = -1, s = void 0, c = 0, l = o.length; c < l; ++c) {
                var u = o[c];
                if (u.auOwnerView !== s && (a++, s = u.auOwnerView, a >= i && s !== e)) return o.splice(c, 0, t), u
              }
              return r.auProjectionChildren.push(t), r
            }
          }
          return this.anchor
        }, e.prototype.projectTo = function (e) {
          this.destinationSlots = e
        }, e.prototype.projectFrom = function (e, t) {
          var n = R.b.createComment("anchor"), i = this.anchor.parentNode;
          n.auSlotProjectFrom = t, n.auOwnerView = e, n.auProjectionChildren = [], i.insertBefore(n, this.anchor), this.children.push(n), null === this.projectFromAnchors && (this.projectFromAnchors = []), this.projectFromAnchors.push(n)
        }, e.prototype.renderFallbackContent = function (e, t, n, i) {
          if (null === this.contentView && (this.contentView = this.fallbackFactory.create(this.ownerView.container), this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext), this.contentView.insertNodesBefore(this.anchor)), this.contentView.hasSlots) {
            var r = this.contentView.slots, o = this.projectFromAnchors;
            if (null !== o) for (var a in r) for (var s = r[a], c = 0, l = o.length; c < l; ++c) {
              var u = o[c];
              s.projectFrom(u.auOwnerView, u.auSlotProjectFrom)
            }
            this.fallbackSlots = r, he.distributeNodes(e, t, r, n, i)
          }
        }, e.prototype.created = function (e) {
          this.ownerView = e
        }, e.prototype.bind = function (e) {
          this.contentView && this.contentView.bind(e.bindingContext, e.overrideContext)
        }, e.prototype.attached = function () {
          this.contentView && this.contentView.attached()
        }, e.prototype.detached = function () {
          this.contentView && this.contentView.detached()
        }, e.prototype.unbind = function () {
          this.contentView && this.contentView.unbind()
        }, I(e, [{
          key: "needsFallbackRendering", get: function () {
            return this.fallbackFactory && 0 === this.projections
          }
        }]), e
      }(), he = (g = v = function () {
        function e() {
        }

        return e.getSlotName = function (t) {
          return void 0 === t.auSlotAttribute ? e.defaultSlotKey : t.auSlotAttribute.value
        }, e.distributeView = function (t, n, i, r, o) {
          var a = void 0;
          if (null === t) a = ce; else {
            var s = t.fragment.childNodes, c = s.length;
            a = new Array(c);
            for (var l = 0; l < c; ++l) a[l] = s[l]
          }
          e.distributeNodes(t, a, n, i, r, o)
        }, e.undistributeView = function (e, t, n) {
          for (var i in t) t[i].removeView(e, n)
        }, e.undistributeAll = function (e, t) {
          for (var n in e) e[n].removeAll(t)
        }, e.distributeNodes = function (t, n, i, r, o, a) {
          for (var s = 0, c = n.length; s < c; ++s) {
            var l = n[s], u = l.nodeType;
            if (l.isContentProjectionSource) {
              for (var d in l.viewSlot.projectTo(i), i) i[d].projectFrom(t, l.viewSlot);
              n.splice(s, 1), c--, s--
            } else if (1 === u || 3 === u || l.viewSlot instanceof ue) if (3 === u && H(l)) n.splice(s, 1), c--, s--; else {
              var h = i[a || e.getSlotName(l)];
              h && (h.addNode(t, l, r, o), n.splice(s, 1), c--, s--)
            } else n.splice(s, 1), c--, s--
          }
          for (var p in i) {
            var f = i[p];
            f.needsFallbackRendering && f.renderFallbackContent(t, n, r, o)
          }
        }, e
      }(), v.defaultSlotKey = "__au-default-slot-key__", g);

      function pe(e, t, n, i) {
        if (t) {
          var r = e[t];
          if (r) {
            if (r !== n) throw new Error("Attempted to register " + i + " when one with the same name already exists. Name: " + t + ".")
          } else e[t] = n
        }
      }

      function fe(e, t) {
        if (/[A-Z]/.test(e)) {
          var n = q(e);
          return S.getLogger("templating").warn("'" + e + "' is not a valid " + t + " name and has been converted to '" + n + "'. Upper-case letters are not allowed because the DOM is not case-sensitive."), n
        }
        return e
      }

      var ve = function () {
        function e(e, t) {
          this.bindingLanguage = null, this.parent = e || null, this.hasParent = null !== this.parent, this.viewUrl = t || "", this.lookupFunctions = {
            valueConverters: this.getValueConverter.bind(this),
            bindingBehaviors: this.getBindingBehavior.bind(this)
          }, this.attributes = Object.create(null), this.elements = Object.create(null), this.valueConverters = Object.create(null), this.bindingBehaviors = Object.create(null), this.attributeMap = Object.create(null), this.values = Object.create(null), this.beforeCompile = this.afterCompile = this.beforeCreate = this.afterCreate = this.beforeBind = this.beforeUnbind = !1
        }

        return e.convention = function (e, t) {
          var n = void 0;
          if (t && "__au_resource__" in t) return t;
          if ("$resource" in e) {
            var i = e.$resource;
            if ("string" == typeof i) (n = t || new Qe).__au_resource__ = !0, n.elementName || (n.elementName = fe(i, "custom element")); else {
              "function" == typeof i && (i = i.call(e)), "string" == typeof i && (i = {name: i});
              var r = (i = Object.assign({}, i)).type || "element", o = i.name;
              switch (r) {
                case"element":
                case"attribute":
                  (n = t || new Qe).__au_resource__ = !0, "element" === r ? n.elementName || (n.elementName = o ? fe(o, "custom element") : q(e.name)) : n.attributeName || (n.attributeName = o ? fe(o, "custom attribute") : q(e.name)), "templateController" in i && (i.liftsContent = i.templateController, delete i.templateController), "defaultBindingMode" in i && void 0 !== n.attributeDefaultBindingMode && (i.attributeDefaultBindingMode = i.defaultBindingMode, delete i.defaultBindingMode), delete i.name, Object.assign(n, i);
                  break;
                case"valueConverter":
                  n = new O.o(Object(O.r)(o || e.name));
                  break;
                case"bindingBehavior":
                  n = new O.b(Object(O.r)(o || e.name));
                  break;
                case"viewEngineHooks":
                  n = new $
              }
            }
            if (n instanceof Qe) {
              var a = "string" == typeof i ? void 0 : i.bindables, s = n.properties;
              if (Array.isArray(a)) for (var c = 0, l = a.length; l > c; ++c) {
                var u = a[c];
                if (!u || "string" != typeof u && !u.name) throw new Error('Invalid bindable property at "' + c + '" for class "' + e.name + '". Expected either a string or an object with "name" property.');
                for (var d = new Ge(u), h = !1, p = 0, f = s.length; f > p; ++p) if (s[p].name === d.name) {
                  h = !0;
                  break
                }
                h || d.registerWith(e, n)
              }
            }
          }
          return n
        }, e.prototype._tryAddHook = function (e, t) {
          if ("function" == typeof e[t]) {
            for (var n = e[t].bind(e), i = 1, r = void 0; void 0 !== this[r = t + i.toString()];) i++;
            this[t] = !0, this[r] = n
          }
        }, e.prototype._invokeHook = function (e, t, n, i, r) {
          if (this.hasParent && this.parent._invokeHook(e, t, n, i, r), this[e]) {
            this[e + "1"](t, n, i, r);
            var o = e + "2";
            if (this[o] && (this[o](t, n, i, r), this[o = e + "3"])) {
              this[o](t, n, i, r);
              for (var a = 4; void 0 !== this[o = e + a.toString()];) this[o](t, n, i, r), a++
            }
          }
        }, e.prototype.registerViewEngineHooks = function (e) {
          this._tryAddHook(e, "beforeCompile"), this._tryAddHook(e, "afterCompile"), this._tryAddHook(e, "beforeCreate"), this._tryAddHook(e, "afterCreate"), this._tryAddHook(e, "beforeBind"), this._tryAddHook(e, "beforeUnbind")
        }, e.prototype.getBindingLanguage = function (e) {
          return this.bindingLanguage || (this.bindingLanguage = e)
        }, e.prototype.patchInParent = function (e) {
          var t = this.parent;
          this.parent = e || null, this.hasParent = null !== this.parent, null === e.parent && (e.parent = t, e.hasParent = null !== t)
        }, e.prototype.relativeToView = function (e) {
          return Object(T.d)(e, this.viewUrl)
        }, e.prototype.registerElement = function (e, t) {
          pe(this.elements, e, t, "an Element")
        }, e.prototype.getElement = function (e) {
          return this.elements[e] || (this.hasParent ? this.parent.getElement(e) : null)
        }, e.prototype.mapAttribute = function (e) {
          return this.attributeMap[e] || (this.hasParent ? this.parent.mapAttribute(e) : null)
        }, e.prototype.registerAttribute = function (e, t, n) {
          this.attributeMap[e] = n, pe(this.attributes, e, t, "an Attribute")
        }, e.prototype.getAttribute = function (e) {
          return this.attributes[e] || (this.hasParent ? this.parent.getAttribute(e) : null)
        }, e.prototype.registerValueConverter = function (e, t) {
          pe(this.valueConverters, e, t, "a ValueConverter")
        }, e.prototype.getValueConverter = function (e) {
          return this.valueConverters[e] || (this.hasParent ? this.parent.getValueConverter(e) : null)
        }, e.prototype.registerBindingBehavior = function (e, t) {
          pe(this.bindingBehaviors, e, t, "a BindingBehavior")
        }, e.prototype.getBindingBehavior = function (e) {
          return this.bindingBehaviors[e] || (this.hasParent ? this.parent.getBindingBehavior(e) : null)
        }, e.prototype.registerValue = function (e, t) {
          pe(this.values, e, t, "a value")
        }, e.prototype.getValue = function (e) {
          return this.values[e] || (this.hasParent ? this.parent.getValue(e) : null)
        }, e.prototype.autoRegister = function (t, n) {
          var i = E.b.getOwn(E.b.resource, n);
          return i ? i instanceof Qe && (e.convention(n, i), null === i.attributeName && null === i.elementName && Qe.convention(n.name, i), null === i.attributeName && null === i.elementName && (i.elementName = q(n.name))) : ((i = e.convention(n) || Qe.convention(n.name) || O.o.convention(n.name) || O.b.convention(n.name) || $.convention(n.name)) || ((i = new Qe).elementName = q(n.name)), E.b.define(E.b.resource, i, n)), i.initialize(t, n), i.register(this), i
        }, e
      }(), ge = function () {
        function e(e, t, n, i, r, o, a) {
          for (var s in this.container = e, this.viewFactory = t, this.resources = t.resources, this.fragment = n, this.firstChild = n.firstChild, this.lastChild = n.lastChild, this.controllers = i, this.bindings = r, this.children = o, this.slots = a, this.hasSlots = !1, this.fromCache = !1, this.isBound = !1, this.isAttached = !1, this.bindingContext = null, this.overrideContext = null, this.controller = null, this.viewModelScope = null, this.animatableElement = void 0, this._isUserControlled = !1, this.contentView = null, a) {
            this.hasSlots = !0;
            break
          }
        }

        return e.prototype.returnToCache = function () {
          this.viewFactory.returnViewToCache(this)
        }, e.prototype.created = function () {
          var e, t = void 0, n = this.controllers;
          for (t = 0, e = n.length; t < e; ++t) n[t].created(this)
        }, e.prototype.bind = function (e, t, n) {
          var i = void 0, r = void 0, o = void 0, a = void 0, s = void 0;
          if (!n || !this._isUserControlled) {
            if (this.isBound) {
              if (this.bindingContext === e) return;
              this.unbind()
            }
            for (this.isBound = !0, this.bindingContext = e, this.overrideContext = t || Object(O.t)(e), this.resources._invokeHook("beforeBind", this), a = 0, s = (r = this.bindings).length; a < s; ++a) r[a].bind(this);
            for (null !== this.viewModelScope && (e.bind(this.viewModelScope.bindingContext, this.viewModelScope.overrideContext), this.viewModelScope = null), a = 0, s = (i = this.controllers).length; a < s; ++a) i[a].bind(this);
            for (a = 0, s = (o = this.children).length; a < s; ++a) o[a].bind(e, t, !0);
            this.hasSlots && he.distributeView(this.contentView, this.slots)
          }
        }, e.prototype.addBinding = function (e) {
          this.bindings.push(e), this.isBound && e.bind(this)
        }, e.prototype.unbind = function () {
          var e = void 0, t = void 0, n = void 0, i = void 0, r = void 0;
          if (this.isBound) {
            for (this.isBound = !1, this.resources._invokeHook("beforeUnbind", this), null !== this.controller && this.controller.unbind(), i = 0, r = (t = this.bindings).length; i < r; ++i) t[i].unbind();
            for (i = 0, r = (e = this.controllers).length; i < r; ++i) e[i].unbind();
            for (i = 0, r = (n = this.children).length; i < r; ++i) n[i].unbind();
            this.bindingContext = null, this.overrideContext = null
          }
        }, e.prototype.insertNodesBefore = function (e) {
          e.parentNode.insertBefore(this.fragment, e)
        }, e.prototype.appendNodesTo = function (e) {
          e.appendChild(this.fragment)
        }, e.prototype.removeNodes = function () {
          for (var e = this.fragment, t = this.firstChild, n = this.lastChild, i = void 0; t && (i = t.nextSibling, e.appendChild(t), t !== n);) t = i
        }, e.prototype.attached = function () {
          var e = void 0, t = void 0, n = void 0, i = void 0;
          if (!this.isAttached) {
            for (this.isAttached = !0, null !== this.controller && this.controller.attached(), n = 0, i = (e = this.controllers).length; n < i; ++n) e[n].attached();
            for (n = 0, i = (t = this.children).length; n < i; ++n) t[n].attached()
          }
        }, e.prototype.detached = function () {
          var e = void 0, t = void 0, n = void 0, i = void 0;
          if (this.isAttached) {
            for (this.isAttached = !1, null !== this.controller && this.controller.detached(), n = 0, i = (e = this.controllers).length; n < i; ++n) e[n].detached();
            for (n = 0, i = (t = this.children).length; n < i; ++n) t[n].detached()
          }
        }, e
      }();

      function me(e) {
        if (void 0 !== e.animatableElement) return e.animatableElement;
        for (var t = e.firstChild; t && 1 !== t.nodeType;) t = t.nextSibling;
        return t && 1 === t.nodeType ? e.animatableElement = t.classList.contains("au-animate") ? t : null : e.animatableElement = null
      }

      var ye = function () {
        function t(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : F.instance;
          this.anchor = e, this.anchorIsContainer = t, this.bindingContext = null, this.overrideContext = null, this.animator = n, this.children = [], this.isBound = !1, this.isAttached = !1, this.contentSelectors = null, e.viewSlot = this, e.isContentProjectionSource = !1
        }

        return t.prototype.animateView = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "enter", n = me(e);
          if (null !== n) switch (t) {
            case"enter":
              return this.animator.enter(n);
            case"leave":
              return this.animator.leave(n);
            default:
              throw new Error("Invalid animation direction: " + t)
          }
        }, t.prototype.transformChildNodesIntoView = function () {
          var e = this.anchor;
          this.children.push({
            fragment: e,
            firstChild: e.firstChild,
            lastChild: e.lastChild,
            returnToCache: function () {
            },
            removeNodes: function () {
              for (var t = void 0; t = e.lastChild;) e.removeChild(t)
            },
            created: function () {
            },
            bind: function () {
            },
            unbind: function () {
            },
            attached: function () {
            },
            detached: function () {
            }
          })
        }, t.prototype.bind = function (e, t) {
          var n, i = void 0, r = void 0;
          if (this.isBound) {
            if (this.bindingContext === e) return;
            this.unbind()
          }
          for (this.isBound = !0, this.bindingContext = e = e || this.bindingContext, this.overrideContext = t = t || this.overrideContext, i = 0, n = (r = this.children).length; i < n; ++i) r[i].bind(e, t, !0)
        }, t.prototype.unbind = function () {
          if (this.isBound) {
            var e, t = void 0, n = this.children;
            for (this.isBound = !1, this.bindingContext = null, this.overrideContext = null, t = 0, e = n.length; t < e; ++t) n[t].unbind()
          }
        }, t.prototype.add = function (e) {
          if (this.anchorIsContainer ? e.appendNodesTo(this.anchor) : e.insertNodesBefore(this.anchor), this.children.push(e), this.isAttached) return e.attached(), this.animateView(e, "enter")
        }, t.prototype.insert = function (e, t) {
          var n = this.children, i = n.length;
          return 0 === e && 0 === i || e >= i ? this.add(t) : (t.insertNodesBefore(n[e].firstChild), n.splice(e, 0, t), this.isAttached ? (t.attached(), this.animateView(t, "enter")) : void 0)
        }, t.prototype.move = function (e, t) {
          if (e !== t) {
            var n = this.children, i = n[e];
            i.removeNodes(), i.insertNodesBefore(n[t].firstChild), n.splice(e, 1), n.splice(t, 0, i)
          }
        }, t.prototype.remove = function (e, t, n) {
          return this.removeAt(this.children.indexOf(e), t, n)
        }, t.prototype.removeMany = function (t, n, i) {
          var r = this, o = this.children, a = t.length, s = void 0, c = [];
          t.forEach((function (e) {
            if (i) e.removeNodes(); else {
              var t = r.animateView(e, "leave");
              t ? c.push(t.then((function () {
                return e.removeNodes()
              }))) : e.removeNodes()
            }
          }));
          var l = function () {
            if (r.isAttached) for (s = 0; s < a; ++s) t[s].detached();
            if (n) for (s = 0; s < a; ++s) t[s].returnToCache();
            for (s = 0; s < a; ++s) {
              var e = o.indexOf(t[s]);
              e >= 0 && o.splice(e, 1)
            }
          };
          return c.length > 0 ? e.all(c).then((function () {
            return l()
          })) : l()
        }, t.prototype.removeAt = function (e, t, n) {
          var i = this, r = this.children[e], o = function () {
            return e = i.children.indexOf(r), r.removeNodes(), i.children.splice(e, 1), i.isAttached && r.detached(), t && r.returnToCache(), r
          };
          if (!n) {
            var a = this.animateView(r, "leave");
            if (a) return a.then((function () {
              return o()
            }))
          }
          return o()
        }, t.prototype.removeAll = function (t, n) {
          var i = this, r = this.children, o = r.length, a = void 0, s = [];
          r.forEach((function (e) {
            if (n) e.removeNodes(); else {
              var t = i.animateView(e, "leave");
              t ? s.push(t.then((function () {
                return e.removeNodes()
              }))) : e.removeNodes()
            }
          }));
          var c = function () {
            if (i.isAttached) for (a = 0; a < o; ++a) r[a].detached();
            if (t) for (a = 0; a < o; ++a) {
              var e = r[a];
              e && e.returnToCache()
            }
            i.children = []
          };
          return s.length > 0 ? e.all(s).then((function () {
            return c()
          })) : c()
        }, t.prototype.attached = function () {
          var e, t, n = void 0, i = void 0;
          if (!this.isAttached) for (this.isAttached = !0, n = 0, e = (t = this.children).length; n < e; ++n) (i = t[n]).attached(), this.animateView(i, "enter")
        }, t.prototype.detached = function () {
          var e = void 0, t = void 0, n = void 0;
          if (this.isAttached) for (this.isAttached = !1, e = 0, t = (n = this.children).length; e < t; ++e) n[e].detached()
        }, t.prototype.projectTo = function (e) {
          var t = this;
          this.projectToSlots = e, this.add = this._projectionAdd, this.insert = this._projectionInsert, this.move = this._projectionMove, this.remove = this._projectionRemove, this.removeAt = this._projectionRemoveAt, this.removeMany = this._projectionRemoveMany, this.removeAll = this._projectionRemoveAll, this.children.forEach((function (n) {
            return he.distributeView(n, e, t)
          }))
        }, t.prototype._projectionAdd = function (e) {
          he.distributeView(e, this.projectToSlots, this), this.children.push(e), this.isAttached && e.attached()
        }, t.prototype._projectionInsert = function (e, t) {
          0 === e && !this.children.length || e >= this.children.length ? this.add(t) : (he.distributeView(t, this.projectToSlots, this, e), this.children.splice(e, 0, t), this.isAttached && t.attached())
        }, t.prototype._projectionMove = function (e, t) {
          if (e !== t) {
            var n = this.children, i = n[e];
            he.undistributeView(i, this.projectToSlots, this), he.distributeView(i, this.projectToSlots, this, t), n.splice(e, 1), n.splice(t, 0, i)
          }
        }, t.prototype._projectionRemove = function (e, t) {
          he.undistributeView(e, this.projectToSlots, this), this.children.splice(this.children.indexOf(e), 1), this.isAttached && e.detached(), t && e.returnToCache()
        }, t.prototype._projectionRemoveAt = function (e, t) {
          var n = this.children[e];
          he.undistributeView(n, this.projectToSlots, this), this.children.splice(e, 1), this.isAttached && n.detached(), t && n.returnToCache()
        }, t.prototype._projectionRemoveMany = function (e, t) {
          var n = this;
          e.forEach((function (e) {
            return n.remove(e, t)
          }))
        }, t.prototype._projectionRemoveAll = function (e) {
          he.undistributeAll(this.projectToSlots, this);
          for (var t = this.children, n = t.length, i = 0; i < n; ++i) e ? t[i].returnToCache() : this.isAttached && t[i].detached();
          this.children = []
        }, t
      }(), be = new (Object(j.d)(m = function () {
        function e() {
        }

        return e.prototype.get = function (e, t) {
          var n = t.__providerId__;
          return n in e ? e[n] : e[n] = e.invoke(t)
        }, e
      }()) || m);

      function we(e) {
        if (e === R.b.Element) return this.element;
        if (e === Re) {
          if (this.boundViewFactory) return this.boundViewFactory;
          var t = this.instruction.viewFactory, n = this.partReplacements;
          return n && (t = n[t.part] || t), this.boundViewFactory = new Re(this, t, n), this.boundViewFactory
        }
        return e === ye ? (void 0 === this.viewSlot && (this.viewSlot = new ye(this.element, this.instruction.anchorIsContainer), this.element.isContentProjectionSource = this.instruction.lifting, this.children.push(this.viewSlot)), this.viewSlot) : e === G ? this.elementEvents || (this.elementEvents = new G(this.element)) : e === N ? this.compositionTransaction || (this.compositionTransaction = this.parent.get(e)) : e === ve ? this.viewResources : e === K ? this.instruction : this.superGet(e)
      }

      function xe(e) {
        return this._element.hasAttribute(e)
      }

      function _e(e) {
        return this._element.getAttribute(e)
      }

      function Ce(e, t) {
        this._element.setAttribute(e, t)
      }

      function ke(e, t, n, i, r, o, a, s, c) {
        var l = n.behaviorInstructions, u = n.expressions, d = void 0, h = void 0, p = void 0, f = void 0, v = void 0;
        if (n.contentExpression) return r.push(n.contentExpression.createBinding(t.nextSibling)), t.nextSibling.auInterpolationTarget = !0, void t.parentNode.removeChild(t);
        if (n.shadowSlot) {
          var g = R.b.createComment("slot"), m = void 0;
          return m = n.slotDestination ? new ue(g, n.slotName, n.slotDestination, n.slotFallbackFactory) : new de(g, n.slotName, n.slotFallbackFactory), R.b.replaceNode(g, t), a[n.slotName] = m, void i.push(m)
        }
        if (n.letElement) {
          for (h = 0, p = u.length; h < p; ++h) r.push(u[h].createBinding());
          t.parentNode.removeChild(t)
        } else {
          if (l.length) for (n.anchorIsContainer || (t = function (e, t) {
            var n = R.b.createComment("anchor");
            if (t) {
              var i = e.firstChild;
              i && "AU-CONTENT" === i.tagName && (n.contentElement = i), n._element = e, n.hasAttribute = xe, n.getAttribute = _e, n.setAttribute = Ce
            }
            return R.b.replaceNode(n, e), n
          }(t, n.elementInstruction)), e[n.injectorId] = d = function (e, t, n, i, r, o) {
            var a, s = e.createChild(), c = void 0;
            for (s.element = t, s.instruction = n, s.children = i, s.viewResources = o, s.partReplacements = r, c = (a = n.providers).length; c--;) s._resolvers.set(a[c], be);
            return s.superGet = s.get, s.get = we, s
          }(e[n.parentInjectorId], t, n, o, s, c), h = 0, p = l.length; h < p; ++h) v = (f = l[h]).type.create(d, f, t, r), i.push(v);
          for (h = 0, p = u.length; h < p; ++h) r.push(u[h].createBinding(t))
        }
      }

      function Se(e, t) {
        var n = e.split(";"), i = void 0, r = void 0, o = void 0, a = void 0, s = void 0;
        for (t = t || {}, r = 0; r < n.length; r++) i = (o = n[r]).indexOf(":"), a = o.substring(0, i).trim(), s = o.substring(i + 1).trim(), t[a] = s;
        return t
      }

      function Ee(e) {
        var t = "";
        for (var n in e) t += n + ":" + e[n] + ";";
        return t
      }

      var Re = function () {
        function e(e, t, n) {
          this.parentContainer = e, this.viewFactory = t, this.factoryCreateInstruction = {partReplacements: n}
        }

        return e.prototype.create = function () {
          var e = this.viewFactory.create(this.parentContainer.createChild(), this.factoryCreateInstruction);
          return e._isUserControlled = !0, e
        }, e.prototype.setCacheSize = function (e, t) {
          this.viewFactory.setCacheSize(e, t)
        }, e.prototype.getCachedView = function () {
          return this.viewFactory.getCachedView()
        }, e.prototype.returnViewToCache = function (e) {
          this.viewFactory.returnViewToCache(e)
        }, I(e, [{
          key: "isCaching", get: function () {
            return this.viewFactory.isCaching
          }
        }]), e
      }(), Ae = function () {
        function e(e, t, n) {
          this.isCaching = !1, this.template = e, this.instructions = t, this.resources = n, this.cacheSize = -1, this.cache = null
        }

        return e.prototype.setCacheSize = function (e, t) {
          e && ("*" === e ? e = Number.MAX_VALUE : "string" == typeof e && (e = parseInt(e, 10))), -1 !== this.cacheSize && t || (this.cacheSize = e), this.cacheSize > 0 ? this.cache = [] : this.cache = null, this.isCaching = this.cacheSize > 0
        }, e.prototype.getCachedView = function () {
          return null !== this.cache && this.cache.pop() || null
        }, e.prototype.returnViewToCache = function (e) {
          e.isAttached && e.detached(), e.isBound && e.unbind(), null !== this.cache && this.cache.length < this.cacheSize && (e.fromCache = !0, this.cache.push(e))
        }, e.prototype.create = function (e, t, n) {
          t = t || Q.normal;
          var i = this.getCachedView();
          if (null !== i) return i;
          var r, o = t.enhance ? this.template : this.template.cloneNode(!0), a = o.querySelectorAll(".au-target"),
            s = this.instructions, c = this.resources, l = [], u = [], d = [], h = Object.create(null), p = {root: e},
            f = t.partReplacements, v = void 0, g = void 0, m = void 0, y = void 0;
          for (this.resources._invokeHook("beforeCreate", this, e, o, t), n && null !== this.surrogateInstruction && function (e, t, n, i, r, o) {
            var a = n.behaviorInstructions, s = n.expressions, c = n.providers, l = n.values, u = void 0, d = void 0,
              h = void 0, p = void 0, f = void 0;
            for (u = c.length; u--;) e._resolvers.set(c[u], be);
            for (var v in l) if (f = t.getAttribute(v)) {
              if ("class" === v) t.setAttribute("class", f + " " + l[v]); else if ("style" === v) {
                var g = Se(l[v]);
                Se(f, g), t.setAttribute("style", Ee(g))
              }
            } else t.setAttribute(v, l[v]);
            if (a.length) for (u = 0, d = a.length; u < d; ++u) (p = (h = a[u]).type.create(e, h, t, r)).contentView && o.push(p.contentView), i.push(p);
            for (u = 0, d = s.length; u < d; ++u) r.push(s[u].createBinding(t))
          }(e, n, this.surrogateInstruction, l, u, d), t.enhance && o.hasAttribute("au-target-id") && (y = s[(m = o).getAttribute("au-target-id")], ke(p, m, y, l, u, d, h, f, c)), v = 0, r = a.length; v < r; ++v) y = s[(m = a[v]).getAttribute("au-target-id")], ke(p, m, y, l, u, d, h, f, c);
          return g = new ge(e, this, o, l, u, d, h), t.initiatedByBehavior || g.created(), this.resources._invokeHook("afterCreate", g), g
        }, e
      }(), Te = 0;
      var Oe = 0;

      function je(e) {
        var t = e.getAttribute("class"), n = (++Oe).toString();
        return e.setAttribute("class", t ? t + " au-target" : "au-target"), e.setAttribute("au-target-id", n), n
      }

      var Be = se.prototype.createLetExpressions, Ie = Object(j.c)(se, ve)(y = function () {
        function e(e, t) {
          this.bindingLanguage = e, this.resources = t
        }

        return e.prototype.compile = function (e, t, n) {
          t = t || this.resources, n = n || W.normal;
          var i = void 0, r = void 0, o = void 0;
          (e = "string" == typeof e ? R.b.createTemplateFromMarkup(e) : e).content ? (r = e.getAttribute("part"), o = e.getAttribute("view-cache"), i = R.b.adoptNode(e.content)) : i = e, n.targetShadowDOM = n.targetShadowDOM && R.c.shadowDOM, t._invokeHook("beforeCompile", i, t, n);
          var a = {};
          this._compileNode(i, t, a, e, "root", !n.targetShadowDOM);
          var s = i.firstChild;
          if (s && 1 === s.nodeType) {
            var c = s.getAttribute("au-target-id");
            if (c) {
              var l = a[c];
              (l.shadowSlot || l.lifting || l.elementInstruction && !l.elementInstruction.anchorIsContainer) && i.insertBefore(R.b.createComment("view"), s)
            }
          }
          var u = new Ae(i, a, t);
          return u.surrogateInstruction = n.compileSurrogate ? this._compileSurrogate(e, t) : null, u.part = r, o && u.setCacheSize(o), t._invokeHook("afterCompile", u), u
        }, e.prototype._compileNode = function (e, t, n, i, r, o) {
          switch (e.nodeType) {
            case 1:
              return this._compileElement(e, t, n, i, r, o);
            case 3:
              var a = t.getBindingLanguage(this.bindingLanguage).inspectTextContent(t, e.wholeText);
              if (a) {
                var s = R.b.createElement("au-marker"), c = je(s);
                for ((e.parentNode || i).insertBefore(s, e), e.textContent = " ", n[c] = K.contentExpression(a); e.nextSibling && 3 === e.nextSibling.nodeType;) (e.parentNode || i).removeChild(e.nextSibling)
              } else for (; e.nextSibling && 3 === e.nextSibling.nodeType;) e = e.nextSibling;
              return e.nextSibling;
            case 11:
              for (var l = e.firstChild; l;) l = this._compileNode(l, t, n, e, r, o)
          }
          return e.nextSibling
        }, e.prototype._compileSurrogate = function (e, t) {
          var n = e.tagName.toLowerCase(), i = e.attributes, r = t.getBindingLanguage(this.bindingLanguage), o = void 0,
            a = void 0, s = void 0, c = void 0, l = void 0, u = void 0, d = void 0, h = void 0, p = void 0, f = void 0,
            v = [], g = void 0, m = [], y = {}, b = !1, w = [];
          for (c = 0, l = i.length; c < l; ++c) {
            if (d = (u = i[c]).name, h = u.value, p = r.inspectAttribute(t, n, d, h), (f = t.getAttribute(p.attrName)) && (o = t.mapAttribute(p.attrName)) && (a = f.attributes[o]) && (p.defaultBindingMode = a.defaultBindingMode, p.command || p.expression || (p.command = a.hasOptions ? "options" : null), p.command && "options" !== p.command && f.primaryProperty)) {
              var x = f.primaryProperty;
              d = p.attrName = x.attribute, p.defaultBindingMode = x.defaultBindingMode
            }
            if (s = r.createAttributeInstruction(t, e, p, void 0, f)) if (s.alteredAttr && (f = t.getAttribute(s.attrName)), s.discrete) v.push(s); else if (f) {
              if (s.type = f, this._configureProperties(s, t), f.liftsContent) throw new Error("You cannot place a template controller on a surrogate element.");
              m.push(s)
            } else v.push(s.attributes[s.attrName]); else if (f) {
              if ((s = Q.attribute(d, f)).attributes[t.mapAttribute(d)] = h, f.liftsContent) throw new Error("You cannot place a template controller on a surrogate element.");
              m.push(s)
            } else "id" !== d && "part" !== d && "replace-part" !== d && (b = !0, y[d] = h)
          }
          if (v.length || m.length || b) {
            for (c = 0, l = m.length; c < l; ++c) (s = m[c]).type.compile(this, t, e, s), w.push(s.type.target);
            for (c = 0, l = v.length; c < l; ++c) void 0 !== (g = v[c]).attrToRemove && e.removeAttribute(g.attrToRemove);
            return K.surrogate(w, m, v, y)
          }
          return null
        }, e.prototype._compileElement = function (e, t, n, i, r, o) {
          var a = e.tagName.toLowerCase(), s = e.attributes, c = [], l = void 0, u = [], d = [],
            h = t.getBindingLanguage(this.bindingLanguage), p = void 0, f = void 0, v = void 0, g = void 0, m = void 0,
            y = void 0, b = void 0, w = void 0, x = void 0, _ = void 0, C = void 0, k = void 0, S = void 0, E = void 0,
            A = void 0, T = void 0;
          if ("slot" === a) return o && (e = function (e, t, n, i, r) {
            var o = R.b.createElement("au-shadow-slot");
            R.b.replaceNode(o, n);
            var a = je(o), s = K.shadowSlot(r);
            if (s.slotName = n.getAttribute("name") || he.defaultSlotKey, s.slotDestination = n.getAttribute("slot"), n.innerHTML.trim()) {
              for (var c = R.b.createDocumentFragment(), l = void 0; l = n.firstChild;) c.appendChild(l);
              s.slotFallbackFactory = e.compile(c, t)
            }
            return i[a] = s, o
          }(this, t, e, n, r)), e.nextSibling;
          if ("template" === a) {
            if (!("content" in e)) throw new Error("You cannot place a template element within " + e.namespaceURI + " namespace");
            (f = this.compile(e, t)).part = e.getAttribute("part")
          } else {
            if (v = t.getElement(e.getAttribute("as-element") || a), "let" === a && !v && h.createLetExpressions !== Be) return c = h.createLetExpressions(t, e), n[je(e)] = K.letElement(c), e.nextSibling;
            v && (g = Q.element(e, v), v.processAttributes(this, t, e, s, g), u.push(g))
          }
          for (y = 0, b = s.length; y < b; ++y) {
            if (C = x = (w = s[y]).name, _ = w.value, S = h.inspectAttribute(t, a, x, _), o && "slot" === S.attrName && (S.attrName = x = "au-slot"), m = null, v = t.getAttribute(S.attrName)) {
              if ((A = t.mapAttribute(S.attrName)) && (E = v.attributes[A]) && (S.defaultBindingMode = E.defaultBindingMode, S.command || S.expression || (S.command = E.hasOptions ? "options" : null), S.command && "options" !== S.command && v.primaryProperty)) {
                var O = v.primaryProperty;
                x = S.attrName = O.attribute, S.defaultBindingMode = O.defaultBindingMode
              }
            } else g && (m = g.type.attributes[S.attrName]) && (S.defaultBindingMode = m.defaultBindingMode);
            if (k = m ? h.createAttributeInstruction(t, e, S, g) : h.createAttributeInstruction(t, e, S, void 0, v)) if (k.alteredAttr && (v = t.getAttribute(k.attrName)), k.discrete) c.push(k); else if (v) {
              if (k.type = v, this._configureProperties(k, t), v.liftsContent) {
                k.originalAttrName = C, p = k;
                break
              }
              u.push(k)
            } else m ? g.attributes[S.attrName].targetProperty = m.name : c.push(k.attributes[k.attrName]); else if (v) {
              if ((k = Q.attribute(x, v)).attributes[t.mapAttribute(x)] = _, v.liftsContent) {
                k.originalAttrName = C, p = k;
                break
              }
              u.push(k)
            } else m && (g.attributes[x] = _)
          }
          if (p) p.viewFactory = f, n[je(e = p.type.compile(this, t, e, p, i))] = K.lifting(r, p); else {
            var j = !1;
            if (c.length || u.length) {
              for (T = !!u.length && ++Te, y = 0, b = u.length; y < b; ++y) (k = u[y]).type.compile(this, t, e, k, i), d.push(k.type.target), j = j || k.skipContentProcessing;
              for (y = 0, b = c.length; y < b; ++y) void 0 !== (l = c[y]).attrToRemove && e.removeAttribute(l.attrToRemove);
              n[je(e)] = K.normal(T, r, d, u, c, g)
            }
            if (j) return e.nextSibling;
            for (var B = e.firstChild; B;) B = this._compileNode(B, t, n, e, T || r, o)
          }
          return e.nextSibling
        }, e.prototype._configureProperties = function (e, t) {
          var n = e.type, i = e.attrName, r = e.attributes, o = void 0, a = void 0, s = void 0, c = t.mapAttribute(i);
          for (a in c && i in r && c !== i && (r[c] = r[i], delete r[i]), r) null !== (s = r[a]) && "object" === (void 0 === s ? "undefined" : L(s)) && (o = n.attributes[a], s.targetProperty = void 0 !== o ? o.name : a)
        }, e
      }()) || y, Le = function () {
        function t(e) {
          this.id = e, this.moduleInstance = null, this.mainResource = null, this.resources = null, this.viewStrategy = null, this.isInitialized = !1, this.onLoaded = null, this.loadContext = null
        }

        return t.prototype.initialize = function (e) {
          var t = this.mainResource, n = this.resources, i = this.viewStrategy;
          if (!this.isInitialized) {
            this.isInitialized = !0, void 0 !== t && (t.metadata.viewStrategy = i, t.initialize(e));
            for (var r = 0, o = n.length; r < o; ++r) (t = n[r]).metadata.viewStrategy = i, t.initialize(e)
          }
        }, t.prototype.register = function (e, t) {
          var n = this.mainResource, i = this.resources;
          void 0 !== n && (n.register(e, t), t = null);
          for (var r = 0, o = i.length; r < o; ++r) i[r].register(e, t), t = null
        }, t.prototype.load = function (t, n) {
          if (null !== this.onLoaded) return this.loadContext === n ? e.resolve() : this.onLoaded;
          var i = this.mainResource, r = this.resources, o = void 0;
          if (void 0 !== i) {
            (o = new Array(r.length + 1))[0] = i.load(t, n);
            for (var a = 0, s = r.length; a < s; ++a) o[a + 1] = r[a].load(t, n)
          } else {
            o = new Array(r.length);
            for (var c = 0, l = r.length; c < l; ++c) o[c] = r[c].load(t, n)
          }
          return this.loadContext = n, this.onLoaded = e.all(o), this.onLoaded
        }, t
      }(), Fe = function () {
        function e(e, t, n) {
          n || (n = E.b.get(E.b.resource, t)) || ((n = new Qe).elementName = q(e), E.b.define(E.b.resource, n, t)), n instanceof Qe ? void 0 === n.elementName ? n.elementName = q(e) : void 0 === n.attributeName ? n.attributeName = q(e) : null === n.attributeName && null === n.elementName && Qe.convention(e, n) : n.name || (n.name = q(e)), this.metadata = n, this.value = t
        }

        return e.prototype.initialize = function (e) {
          this.metadata.initialize(e, this.value)
        }, e.prototype.register = function (e, t) {
          this.metadata.register(e, t)
        }, e.prototype.load = function (e, t) {
          return this.metadata.load(e, this.value, t)
        }, e
      }(), Me = function () {
        function e() {
          this.cache = Object.create(null)
        }

        return e.prototype.getAnalysis = function (e) {
          return this.cache[e]
        }, e.prototype.analyze = function (e, t, n) {
          var i = void 0, r = void 0, o = void 0, a = void 0, s = void 0, c = void 0, l = [], u = void 0, d = void 0,
            h = void 0;
          if (h = this.cache[e]) return h;
          for (s in h = new Le(e), this.cache[e] = h, "function" == typeof t && (t = {default: t}), n && (i = new Fe(n, t[n])), t) c = t[s], s !== n && "function" == typeof c && ((a = E.b.get(E.b.resource, c)) ? (a instanceof Qe && (ve.convention(c, a), null === a.attributeName && null === a.elementName && Qe.convention(s, a), null === a.attributeName && null === a.elementName && (a.elementName = q(s))), !i && a instanceof Qe && null !== a.elementName ? i = new Fe(s, c, a) : l.push(new Fe(s, c, a))) : Y.decorates(c) ? d = c : c instanceof A.b ? d = new ne(e, c) : (u = ve.convention(c)) ? (null === u.elementName || i ? l.push(new Fe(s, c, u)) : i = new Fe(s, c, u), E.b.define(E.b.resource, u, c)) : (u = Qe.convention(s)) ? (null === u.elementName || i ? l.push(new Fe(s, c, u)) : i = new Fe(s, c, u), E.b.define(E.b.resource, u, c)) : (u = O.o.convention(s) || O.b.convention(s) || $.convention(s)) ? (l.push(new Fe(s, c, u)), E.b.define(E.b.resource, u, c)) : r || (r = c, o = s));
          return !i && r && (i = new Fe(o, r)), h.moduleInstance = t, h.mainResource = i, h.resources = l, h.viewStrategy = d, h
        }, e
      }(), Pe = S.getLogger("templating");
      var Ne = function () {
        function e(e) {
          var t = this;
          e.then((function (e) {
            return t.viewFactory = e
          }))
        }

        return e.prototype.create = function (e, t, n, i) {
          return this.viewFactory.create(e, t, n, i)
        }, e.prototype.setCacheSize = function (e, t) {
          this.viewFactory.setCacheSize(e, t)
        }, e.prototype.getCachedView = function () {
          return this.viewFactory.getCachedView()
        }, e.prototype.returnViewToCache = function (e) {
          this.viewFactory.returnViewToCache(e)
        }, I(e, [{
          key: "isCaching", get: function () {
            return this.viewFactory.isCaching
          }
        }]), e
      }(), Ve = null, De = Object(j.c)(A.a, j.a, Ie, Me, ve)((x = w = function () {
        function t(e, t, n, i, r) {
          this.loader = e, this.container = t, this.viewCompiler = n, this.moduleAnalyzer = i, this.appResources = r, this._pluginMap = {}, null === Ve && ((Ve = new Qe).attributeName = "au-slot", E.b.define(E.b.resource, Ve, le)), Ve.initialize(t, le), Ve.register(r)
        }

        return t.prototype.addResourcePlugin = function (e, t) {
          var n = e.replace(".", "") + "-resource-plugin";
          this._pluginMap[e] = n, this.loader.addPlugin(n, t)
        }, t.prototype.loadViewFactory = function (t, n, i, r) {
          var o = this;
          return i = i || new U, function (t, n) {
            return n instanceof A.b ? e.resolve(n) : t.loadTemplate(n)
          }(this.loader, t).then((function (t) {
            var a = t.address;
            return t.onReady ? i.hasDependency(a) ? null === t.template ? t.onReady : e.resolve(new Ne(t.onReady)) : (i.addDependency(a), t.onReady) : (i.addDependency(a), t.onReady = o.loadTemplateResources(t, n, i, r).then((function (e) {
              if (t.resources = e, null === t.template) return t.factory = null;
              var i = o.viewCompiler.compile(t.template, e, n);
              return t.factory = i
            })), t.onReady)
          }))
        }, t.prototype.loadTemplateResources = function (n, i, r, o) {
          var a = new ve(this.appResources, n.address), s = n.dependencies, c = void 0, l = void 0;
          if (i = i || W.normal, 0 === s.length && !i.associatedModuleId) return e.resolve(a);
          if (c = s.map((function (e) {
            return e.src
          })), l = s.map((function (e) {
            return e.name
          })), Pe.debug("importing resources for " + n.address, c), o) {
            var u = E.b.get(t.viewModelRequireMetadataKey, o);
            if (u) {
              for (var d = c.length, h = 0, p = u.length; h < p; ++h) {
                var f = u[h], v = "function" == typeof f ? E.a.get(f).moduleId : Object(T.d)(f.src || f, n.address);
                -1 === c.indexOf(v) && (c.push(v), l.push(f.as))
              }
              Pe.debug("importing ViewModel resources for " + i.associatedModuleId, c.slice(d))
            }
          }
          return this.importViewResources(c, l, a, i, r)
        }, t.prototype.importViewModelResource = function (e, t) {
          var n = this;
          return this.loader.loadModule(e).then((function (i) {
            var r = E.a.get(i).moduleId, o = n.moduleAnalyzer.analyze(r, i, t);
            if (!o.mainResource) throw new Error('No view model found in module "' + e + '".');
            return o.initialize(n.container), o.mainResource
          }))
        }, t.prototype.importViewResources = function (t, n, i, r, o) {
          var a = this;
          return o = o || new U, r = r || W.normal, t = t.map((function (e) {
            return a._applyLoaderPlugin(e)
          })), this.loader.loadAllModules(t).then((function (t) {
            var s = void 0, c = void 0, l = void 0, u = void 0, d = void 0, h = void 0, p = a.container,
              f = a.moduleAnalyzer, v = new Array(t.length);
            for (s = 0, c = t.length; s < c; ++s) d = t[s], u = E.a.get(d).moduleId, (l = f.analyze(u, d)).initialize(p), l.register(i, n[s]), v[s] = l;
            for (r.associatedModuleId && (h = f.getAnalysis(r.associatedModuleId)) && h.register(i), s = 0, c = v.length; s < c; ++s) v[s] = v[s].load(p, o);
            return e.all(v).then((function () {
              return i
            }))
          }))
        }, t.prototype._applyLoaderPlugin = function (e) {
          var t = e.lastIndexOf(".");
          if (-1 !== t) {
            var n = e.substring(t), i = this._pluginMap[n];
            return void 0 === i ? e : this.loader.applyPluginToUrl(e, i)
          }
          return e
        }, t
      }(), w.viewModelRequireMetadataKey = "aurelia:view-model-require", b = x)) || b, qe = function () {
        function e(e, t, n, i) {
          this.behavior = e, this.instruction = t, this.viewModel = n, this.isAttached = !1, this.view = null, this.isBound = !1, this.scope = null, this.container = i, this.elementEvents = i.elementEvents || null;
          var r, o = e.observerLocator.getOrCreateObserversLookup(n), a = e.handlesBind, s = t.attributes,
            c = this.boundProperties = [], l = e.properties, u = void 0;
          for (e._ensurePropertiesDefined(n, o), u = 0, r = l.length; u < r; ++u) l[u]._initialize(n, o, s, a, c)
        }

        return e.prototype.created = function (e) {
          this.behavior.handlesCreated && this.viewModel.created(e, this.view)
        }, e.prototype.automate = function (e, t) {
          this.view.bindingContext = this.viewModel, this.view.overrideContext = e || Object(O.t)(this.viewModel), this.view._isUserControlled = !0, this.behavior.handlesCreated && this.viewModel.created(t || null, this.view), this.bind(this.view)
        }, e.prototype.bind = function (e) {
          var t, n = this.behavior.handlesBind, i = this.boundProperties, r = void 0, o = void 0, a = void 0,
            s = void 0;
          if (this.isBound) {
            if (this.scope === e) return;
            this.unbind()
          }
          for (this.isBound = !0, this.scope = e, r = 0, t = i.length; r < t; ++r) s = (a = (o = i[r]).observer).selfSubscriber, a.publishing = !1, n && (a.selfSubscriber = null), o.binding.bind(e), a.call(), a.publishing = !0, a.selfSubscriber = s;
          var c = void 0;
          null !== this.view ? (n && (this.view.viewModelScope = e), this.viewModel === e.overrideContext.bindingContext ? c = e.overrideContext : this.instruction.inheritBindingContext ? c = Object(O.t)(this.viewModel, e.overrideContext) : (c = Object(O.t)(this.viewModel)).__parentOverrideContext = e.overrideContext, this.view.bind(this.viewModel, c)) : n && (c = e.overrideContext, void 0 !== e.overrideContext.__parentOverrideContext && this.viewModel.viewFactory && this.viewModel.viewFactory.factoryCreateInstruction.partReplacements && ((c = Object.assign({}, e.overrideContext)).parentOverrideContext = e.overrideContext.__parentOverrideContext), this.viewModel.bind(e.bindingContext, c))
        }, e.prototype.unbind = function () {
          if (this.isBound) {
            var e, t = this.boundProperties, n = void 0;
            for (this.isBound = !1, this.scope = null, null !== this.view && this.view.unbind(), this.behavior.handlesUnbind && this.viewModel.unbind(), null !== this.elementEvents && this.elementEvents.disposeAll(), n = 0, e = t.length; n < e; ++n) t[n].binding.unbind()
          }
        }, e.prototype.attached = function () {
          this.isAttached || (this.isAttached = !0, this.behavior.handlesAttached && this.viewModel.attached(), null !== this.view && this.view.attached())
        }, e.prototype.detached = function () {
          this.isAttached && (this.isAttached = !1, null !== this.view && this.view.detached(), this.behavior.handlesDetached && this.viewModel.detached())
        }, e
      }(), He = Object(O.y)()(_ = function () {
        function e(e, t, n, i, r) {
          this.taskQueue = e, this.obj = t, this.propertyName = n, this.notqueued = !0, this.publishing = !1, this.selfSubscriber = i, this.currentValue = this.oldValue = r
        }

        return e.prototype.getValue = function () {
          return this.currentValue
        }, e.prototype.setValue = function (e) {
          var t = this.currentValue;
          Object.is(e, t) || (this.oldValue = t, this.currentValue = e, this.publishing && this.notqueued && (this.taskQueue.flushing ? this.call() : (this.notqueued = !1, this.taskQueue.queueMicroTask(this))))
        }, e.prototype.call = function () {
          var e = this.oldValue, t = this.currentValue;
          this.notqueued = !0, Object.is(t, e) || (this.selfSubscriber && this.selfSubscriber(t, e), this.callSubscribers(t, e), this.oldValue = t)
        }, e.prototype.subscribe = function (e, t) {
          this.addSubscriber(e, t)
        }, e.prototype.unsubscribe = function (e, t) {
          this.removeSubscriber(e, t)
        }, e
      }()) || _;

      function $e(e, t) {
        var n = e.__observers__;
        if (void 0 === n) {
          var i = Object.getPrototypeOf(e).constructor, r = E.b.get(E.b.resource, i);
          r.isInitialized || r.initialize(j.a.instance || new j.a, e.constructor), n = r.observerLocator.getOrCreateObserversLookup(e), r._ensurePropertiesDefined(e, n)
        }
        return n[t]
      }

      var Ge = function () {
        function e(e) {
          "string" == typeof e ? this.name = e : Object.assign(this, e), this.attribute = this.attribute || q(this.name);
          var t = this.defaultBindingMode;
          null == t ? this.defaultBindingMode = O.q.oneWay : "string" == typeof t && (this.defaultBindingMode = O.q[t] || O.q.oneWay), this.changeHandler = this.changeHandler || null, this.owner = null, this.descriptor = null
        }

        return e.prototype.registerWith = function (e, t, n) {
          if (t.properties.push(this), t.attributes[this.attribute] = this, this.owner = t, n) return this.descriptor = n, this._configureDescriptor(n)
        }, e.prototype._configureDescriptor = function (e) {
          var t = this.name;
          return e.configurable = !0, e.enumerable = !0, "initializer" in e && (this.defaultValue = e.initializer, delete e.initializer, delete e.writable), "value" in e && (this.defaultValue = e.value, delete e.value, delete e.writable), e.get = function () {
            return $e(this, t).getValue()
          }, e.set = function (e) {
            $e(this, t).setValue(e)
          }, e.get.getObserver = function (e) {
            return $e(e, t)
          }, e
        }, e.prototype.defineOn = function (e, t) {
          var n = this.name, i = void 0;
          null === this.changeHandler && (i = n + "Changed") in e.prototype && (this.changeHandler = i), null === this.descriptor && Object.defineProperty(e.prototype, n, this._configureDescriptor(t, {}))
        }, e.prototype.createObserver = function (e) {
          var t = null, n = this.defaultValue, i = this.changeHandler, r = this.name, o = void 0;
          if (!this.hasOptions) {
            if (i in e) t = "propertyChanged" in e ? function (t, n) {
              e[i](t, n), e.propertyChanged(r, t, n)
            } : function (t, n) {
              return e[i](t, n)
            }; else if ("propertyChanged" in e) t = function (t, n) {
              return e.propertyChanged(r, t, n)
            }; else if (null !== i) throw new Error("Change handler " + i + " was specified but not declared on the class.");
            return void 0 !== n && (o = "function" == typeof n ? n.call(e) : n), new He(this.owner.taskQueue, e, this.name, t, o)
          }
        }, e.prototype._initialize = function (e, t, n, i, r) {
          var o = void 0, a = void 0, s = void 0, c = this.defaultValue;
          if (this.isDynamic) for (var l in n) this._createDynamicProperty(e, t, i, l, n[l], r); else this.hasOptions || (a = t[this.name], null !== n && (o = a.selfSubscriber, s = n[this.attribute], i && (a.selfSubscriber = null), "string" == typeof s ? (e[this.name] = s, a.call()) : s ? r.push({
            observer: a,
            binding: s.createBinding(e)
          }) : void 0 !== c && a.call(), a.selfSubscriber = o), a.publishing = !0)
        }, e.prototype._createDynamicProperty = function (e, t, n, i, r, o) {
          var a = i + "Changed", s = null, c = void 0, l = void 0;
          a in e ? s = "propertyChanged" in e ? function (t, n) {
            e[a](t, n), e.propertyChanged(i, t, n)
          } : function (t, n) {
            return e[a](t, n)
          } : "propertyChanged" in e && (s = function (t, n) {
            return e.propertyChanged(i, t, n)
          }), c = t[i] = new He(this.owner.taskQueue, e, i, s), Object.defineProperty(e, i, {
            configurable: !0,
            enumerable: !0,
            get: c.getValue.bind(c),
            set: c.setValue.bind(c)
          }), n && (c.selfSubscriber = null), "string" == typeof r ? (e[i] = r, c.call()) : r && (l = {
            observer: c,
            binding: r.createBinding(e)
          }, o.push(l)), c.publishing = !0, c.selfSubscriber = s
        }, e
      }(), ze = 0;

      function Ue() {
        return !0
      }

      function We() {
      }

      var Qe = function () {
        function t() {
          this.elementName = null, this.attributeName = null, this.attributeDefaultBindingMode = void 0, this.liftsContent = !1, this.targetShadowDOM = !1, this.shadowDOMOptions = null, this.processAttributes = We, this.processContent = Ue, this.usesShadowDOM = !1, this.childBindings = null, this.hasDynamicOptions = !1, this.containerless = !1, this.properties = [], this.attributes = {}, this.isInitialized = !1, this.primaryProperty = null
        }

        return t.convention = function (e, n) {
          var i = void 0;
          return e.endsWith("CustomAttribute") && ((i = n || new t).attributeName = q(e.substring(0, e.length - 15))), e.endsWith("CustomElement") && ((i = n || new t).elementName = q(e.substring(0, e.length - 13))), i
        }, t.prototype.addChildBinding = function (e) {
          null === this.childBindings && (this.childBindings = []), this.childBindings.push(e)
        }, t.prototype.initialize = function (e, t) {
          var n = t.prototype, i = this.properties, r = this.attributeName, o = this.attributeDefaultBindingMode,
            a = void 0, s = void 0, c = void 0;
          if (!this.isInitialized) if (this.isInitialized = !0, t.__providerId__ = ++ze, this.observerLocator = e.get(O.k), this.taskQueue = e.get(B.a), this.target = t, this.usesShadowDOM = this.targetShadowDOM && R.c.shadowDOM, this.handlesCreated = "created" in n, this.handlesBind = "bind" in n, this.handlesUnbind = "unbind" in n, this.handlesAttached = "attached" in n, this.handlesDetached = "detached" in n, this.htmlName = this.elementName || this.attributeName, null !== r) if (0 === i.length && new Ge({
            name: "value",
            changeHandler: "valueChanged" in n ? "valueChanged" : null,
            attribute: r,
            defaultBindingMode: o
          }).registerWith(t, this), c = i[0], 1 === i.length && "value" === c.name) c.isDynamic = c.hasOptions = this.hasDynamicOptions, c.defineOn(t, this); else {
            for (a = 0, s = i.length; a < s; ++a) if (i[a].defineOn(t, this), i[a].primaryProperty) {
              if (this.primaryProperty) throw new Error("Only one bindable property on a custom element can be defined as the default");
              this.primaryProperty = i[a]
            }
            (c = new Ge({
              name: "value",
              changeHandler: "valueChanged" in n ? "valueChanged" : null,
              attribute: r,
              defaultBindingMode: o
            })).hasOptions = !0, c.registerWith(t, this)
          } else {
            for (a = 0, s = i.length; a < s; ++a) i[a].defineOn(t, this);
            this._copyInheritedProperties(e, t)
          }
        }, t.prototype.register = function (e, t) {
          var n = this;
          null !== this.attributeName && (e.registerAttribute(t || this.attributeName, this, this.attributeName), Array.isArray(this.aliases) && this.aliases.forEach((function (t) {
            e.registerAttribute(t, n, n.attributeName)
          }))), null !== this.elementName && e.registerElement(t || this.elementName, this)
        }, t.prototype.load = function (t, n, i, r, o) {
          var a = this, s = void 0;
          return null !== this.elementName ? (r = t.get(oe).getViewStrategy(r || this.viewStrategy || n), s = new W(this.targetShadowDOM, !0), r.moduleId || (r.moduleId = E.a.get(n).moduleId), r.loadViewFactory(t.get(De), s, i, n).then((function (e) {
            return o && a.viewFactory || (a.viewFactory = e), e
          }))) : e.resolve(this)
        }, t.prototype.compile = function (e, t, n, i, r) {
          if (this.liftsContent) {
            if (!i.viewFactory) {
              var o = R.b.createElement("template"), a = R.b.createDocumentFragment(), s = n.getAttribute("view-cache"),
                c = n.getAttribute("part");
              n.removeAttribute(i.originalAttrName), R.b.replaceNode(o, n, r), a.appendChild(n), i.viewFactory = e.compile(a, t), c && (i.viewFactory.part = c, n.removeAttribute("part")), s && (i.viewFactory.setCacheSize(s), n.removeAttribute("view-cache")), n = o
            }
          } else if (null !== this.elementName) {
            var l = {};
            if (this.processContent(e, t, n, i) && n.hasChildNodes()) {
              for (var u = n.firstChild, d = this.usesShadowDOM ? null : R.b.createElement("au-content"), h = void 0, p = void 0; u;) h = u.nextSibling, "TEMPLATE" === u.tagName && (p = u.getAttribute("replace-part")) ? (l[p] = e.compile(u, t), R.b.removeNode(u, r), i.partReplacements = l) : null !== d && (3 === u.nodeType && H(u) ? R.b.removeNode(u, r) : d.appendChild(u)), u = h;
              null !== d && d.hasChildNodes() && n.appendChild(d), i.skipContentProcessing = !1
            } else i.skipContentProcessing = !0
          } else this.processContent(e, t, n, i) || (i.skipContentProcessing = !0);
          return n
        }, t.prototype.create = function (e, t, n, i) {
          var r = void 0, o = null;
          t = t || Q.normal, n = n || null, i = i || null, null !== this.elementName && n && (this.usesShadowDOM ? (r = n.attachShadow(this.shadowDOMOptions), e.registerInstance(R.b.boundary, r)) : (r = n, this.targetShadowDOM && e.registerInstance(R.b.boundary, r))), null !== n && (n.au = o = n.au || {});
          var a = t.viewModel || e.get(this.target), s = new qe(this, t, a, e), c = this.childBindings, l = void 0;
          if (this.liftsContent) o.controller = s; else if (null !== this.elementName) {
            if (l = t.viewFactory || this.viewFactory, e.viewModel = a, l && (s.view = l.create(e, t, n)), null !== n) {
              if (o.controller = s, s.view) {
                if (!this.usesShadowDOM && (1 === n.childNodes.length || n.contentElement)) {
                  var u = n.childNodes[0] || n.contentElement;
                  s.view.contentView = {fragment: u}, u.parentNode && R.b.removeNode(u)
                }
                if (t.anchorIsContainer) {
                  if (null !== c) for (var d = 0, h = c.length; d < h; ++d) s.view.addBinding(c[d].create(n, a, s));
                  s.view.appendNodesTo(r)
                } else s.view.insertNodesBefore(r)
              } else if (null !== c) for (var p = 0, f = c.length; p < f; ++p) i.push(c[p].create(n, a, s))
            } else if (s.view) {
              if (s.view.controller = s, null !== c) for (var v = 0, g = c.length; v < g; ++v) s.view.addBinding(c[v].create(t.host, a, s))
            } else if (null !== c) for (var m = 0, y = c.length; m < y; ++m) i.push(c[m].create(t.host, a, s))
          } else if (null !== c) for (var b = 0, w = c.length; b < w; ++b) i.push(c[b].create(n, a, s));
          return null !== o && (o[this.htmlName] = s), t.initiatedByBehavior && l && s.view.created(), s
        }, t.prototype._ensurePropertiesDefined = function (e, t) {
          var n, i = void 0, r = void 0, o = void 0;
          if (!("__propertiesDefined__" in t)) for (t.__propertiesDefined__ = !0, r = 0, n = (i = this.properties).length; r < n; ++r) void 0 !== (o = i[r].createObserver(e)) && (t[o.propertyName] = o)
        }, t.prototype._copyInheritedProperties = function (e, t) {
          for (var n = this, i = void 0, r = t; ;) {
            var o = Object.getPrototypeOf(t.prototype);
            if (!(t = o && o.constructor)) return;
            if (i = E.b.getOwn(E.b.resource, t)) break
          }
          i.initialize(e, t);
          for (var a = function (e, t) {
            var o = i.properties[e];
            if (n.properties.some((function (e) {
              return e.name === o.name
            }))) return "continue";
            new Ge(o).registerWith(r, n)
          }, s = 0, c = i.properties.length; s < c; ++s) a(s)
        }, t
      }();
      !function () {
        function e(e) {
          this.name = e.name, this.changeHandler = e.changeHandler || this.name + "Changed", this.selector = e.selector, this.all = e.all
        }

        e.prototype.create = function (e, t, n) {
          return new Ye(this.selector, e, this.name, t, n, this.changeHandler, this.all)
        }
      }();
      var Je = [];

      function Ke(e, t, n) {
        var i = e.get(t);
        i || (i = [], e.set(t, i)), i.push(n)
      }

      function Xe(e, t) {
        for (var n = t.binders, i = n.length, r = new Map, o = 0, a = e.length; o < a; ++o) {
          for (var s = e[o], c = s.addedNodes, l = s.removedNodes, u = 0, d = l.length; u < d; ++u) {
            var h = l[u];
            if (1 === h.nodeType) for (var p = 0; p < i; ++p) {
              var f = n[p];
              f.onRemove(h) && Ke(r, f, s)
            }
          }
          for (var v = 0, g = c.length; v < g; ++v) {
            var m = c[v];
            if (1 === m.nodeType) for (var y = 0; y < i; ++y) {
              var b = n[y];
              b.onAdd(m) && Ke(r, b, s)
            }
          }
        }
        r.forEach((function (e, t) {
          null !== t.changeHandler && t.viewModel[t.changeHandler](e)
        }))
      }

      var Ye = function () {
        function e(e, t, n, i, r, o, a) {
          this.selector = e, this.viewHost = t, this.property = n, this.viewModel = i, this.controller = r, this.changeHandler = o in i ? o : null, this.usesShadowDOM = r.behavior.usesShadowDOM, this.all = a, !this.usesShadowDOM && r.view && r.view.contentView ? this.contentView = r.view.contentView : this.contentView = null
        }

        return e.prototype.matches = function (e) {
          if (e.matches(this.selector)) {
            if (null === this.contentView) return !0;
            var t = this.contentView, n = e.auAssignedSlot;
            if (n && n.projectFromAnchors) {
              for (var i = n.projectFromAnchors, r = 0, o = i.length; r < o; ++r) if (i[r].auOwnerView === t) return !0;
              return !1
            }
            return e.auOwnerView === t
          }
          return !1
        }, e.prototype.bind = function (e) {
          var t = this.viewHost, n = this.viewModel, i = t.__childObserver__;
          if (!i) {
            i = t.__childObserver__ = R.b.createMutationObserver(Xe);
            var r = {childList: !0, subtree: !this.usesShadowDOM};
            i.observe(t, r), i.binders = []
          }
          if (i.binders.push(this), this.usesShadowDOM) {
            var o = t.firstElementChild;
            if (this.all) {
              var a = n[this.property];
              for (a ? a.splice(0) : a = n[this.property] = []; o;) this.matches(o) && a.push(o.au && o.au.controller ? o.au.controller.viewModel : o), o = o.nextElementSibling;
              null !== this.changeHandler && this.viewModel[this.changeHandler](Je)
            } else for (; o;) {
              if (this.matches(o)) {
                var s = o.au && o.au.controller ? o.au.controller.viewModel : o;
                this.viewModel[this.property] = s, null !== this.changeHandler && this.viewModel[this.changeHandler](s);
                break
              }
              o = o.nextElementSibling
            }
          }
        }, e.prototype.onRemove = function (e) {
          if (this.matches(e)) {
            var t = e.au && e.au.controller ? e.au.controller.viewModel : e;
            if (this.all) {
              var n = this.viewModel[this.property] || (this.viewModel[this.property] = []), i = n.indexOf(t);
              return -1 !== i && n.splice(i, 1), !0
            }
            return !1
          }
          return !1
        }, e.prototype.onAdd = function (e) {
          if (this.matches(e)) {
            var t = e.au && e.au.controller ? e.au.controller.viewModel : e;
            if (this.all) {
              var n = this.viewModel[this.property] || (this.viewModel[this.property] = []);
              if ("*" === this.selector) return n.push(t), !0;
              for (var i = 0, r = e.previousElementSibling; r;) this.matches(r) && i++, r = r.previousElementSibling;
              return n.splice(i, 0, t), !0
            }
            this.viewModel[this.property] = t, null !== this.changeHandler && this.viewModel[this.changeHandler](t)
          }
          return !1
        }, e.prototype.unbind = function () {
          this.viewHost.__childObserver__ && (this.viewHost.__childObserver__.disconnect(), this.viewHost.__childObserver__ = null, this.viewModel[this.property] = null)
        }, e
      }();

      function Ze(e, t) {
        return Array.isArray(t) ? e.removeMany(t, !0) : e.remove(t, !0)
      }

      var et = {
        before: function (e, t, n) {
          return void 0 === t ? n() : n().then((function () {
            return Ze(e, t)
          }))
        }, with: function (t, n, i) {
          return void 0 === n ? i() : e.all([Ze(t, n), i()])
        }, after: function (t, n, i) {
          return e.resolve(t.removeAll(!0)).then(i)
        }
      };

      function tt(t) {
        return t.skipActivation || "function" != typeof t.viewModel.activate ? e.resolve() : t.viewModel.activate(t.model) || e.resolve()
      }

      var nt = Object(j.c)(De, oe)(C = function () {
        function t(e, t) {
          this.viewEngine = e, this.viewLocator = t
        }

        return t.prototype._swap = function (t, n) {
          var i = et[t.swapOrder] || et.after, r = t.viewSlot.children.slice();
          return i(t.viewSlot, r, (function () {
            return e.resolve(t.viewSlot.add(n)).then((function () {
              t.currentController && t.currentController.unbind()
            }))
          })).then((function () {
            t.compositionTransactionNotifier && t.compositionTransactionNotifier.done()
          }))
        }, t.prototype._createControllerAndSwap = function (e) {
          var t = this;
          return this.createController(e).then((function (n) {
            return e.compositionTransactionOwnershipToken ? e.compositionTransactionOwnershipToken.waitForCompositionComplete().then((function () {
              return n.automate(e.overrideContext, e.owningView), t._swap(e, n.view)
            })).then((function () {
              return n
            })) : (n.automate(e.overrideContext, e.owningView), t._swap(e, n.view).then((function () {
              return n
            })))
          }))
        }, t.prototype.createController = function (e) {
          var t = this, n = void 0, i = void 0, r = void 0, o = void 0;
          return this.ensureViewModel(e).then(tt).then((function () {
            n = e.childContainer, i = e.viewModel, r = e.viewModelResource, o = r.metadata;
            var a = t.viewLocator.getViewStrategy(e.view || i);
            return e.viewResources && a.makeRelativeTo(e.viewResources.viewUrl), o.load(n, r.value, null, a, !0)
          })).then((function (t) {
            return o.create(n, Q.dynamic(e.host, i, t))
          }))
        }, t.prototype.ensureViewModel = function (t) {
          var n = t.childContainer = t.childContainer || t.container.createChild();
          if ("string" == typeof t.viewModel) return t.viewModel = t.viewResources ? t.viewResources.relativeToView(t.viewModel) : t.viewModel, this.viewEngine.importViewModelResource(t.viewModel).then((function (e) {
            return n.autoRegister(e.value), t.host && n.registerInstance(R.b.Element, t.host), t.viewModel = n.viewModel = n.get(e.value), t.viewModelResource = e, t
          }));
          var i = t.viewModel.constructor, r = "function" == typeof t.viewModel;
          r && (i = t.viewModel, n.autoRegister(i));
          var o = E.b.getOrCreateOwn(E.b.resource, Qe, i);
          return o.elementName = o.elementName || "dynamic-element", o.initialize(r ? n : t.container || n, i), t.viewModelResource = {
            metadata: o,
            value: i
          }, t.host && n.registerInstance(R.b.Element, t.host), n.viewModel = t.viewModel = r ? n.get(i) : t.viewModel, e.resolve(t)
        }, t.prototype.compose = function (t) {
          var n = this;
          t.childContainer = t.childContainer || t.container.createChild(), t.view = this.viewLocator.getViewStrategy(t.view);
          var i = t.childContainer.get(N), r = i.tryCapture();
          return r ? t.compositionTransactionOwnershipToken = r : t.compositionTransactionNotifier = i.enlist(), t.viewModel ? this._createControllerAndSwap(t) : t.view ? (t.viewResources && t.view.makeRelativeTo(t.viewResources.viewUrl), t.view.loadViewFactory(this.viewEngine, new W).then((function (e) {
            var i = e.create(t.childContainer);
            return i.bind(t.bindingContext, t.overrideContext), t.compositionTransactionOwnershipToken ? t.compositionTransactionOwnershipToken.waitForCompositionComplete().then((function () {
              return n._swap(t, i)
            })).then((function () {
              return i
            })) : n._swap(t, i).then((function () {
              return i
            }))
          }))) : t.viewSlot ? (t.viewSlot.removeAll(), t.compositionTransactionNotifier && t.compositionTransactionNotifier.done(), e.resolve(null)) : e.resolve(null)
        }, t
      }()) || C;
      !function () {
        function e() {
        }

        e.prototype.initialize = function (e, t) {
        }, e.prototype.register = function (e, t) {
        }, e.prototype.load = function (e, t) {
          var n = new t;
          e.get(O.f).registerElementConfig(n)
        }
      }();

      function it(e) {
        return function (t) {
          "string" == typeof e || Object.getPrototypeOf(e) === Object.prototype ? t.$resource = e : E.b.define(E.b.resource, e, t)
        }
      }

      function rt(e) {
        return function (t) {
          E.b.getOrCreateOwn(E.b.resource, Qe, t).elementName = fe(e, "custom element")
        }
      }

      function ot(e, t, n) {
        return function (i) {
          var r = E.b.getOrCreateOwn(E.b.resource, Qe, i);
          r.attributeName = fe(e, "custom attribute"), r.attributeDefaultBindingMode = t, r.aliases = n
        }
      }

      function at(e) {
        var t = function (e) {
          E.b.getOrCreateOwn(E.b.resource, Qe, e).liftsContent = !0
        };
        return e ? t(e) : t
      }

      function st(e, t, n) {
        var i = function (t, n, i) {
          var r = n ? t.constructor : t, o = E.b.getOrCreateOwn(E.b.resource, Qe, r);
          return n && ((e = e || {}).name = n), new Ge(e).registerWith(r, o, i)
        };
        if (!e) return i;
        if (t) {
          var r = e;
          return e = null, i(r, t, n)
        }
        return i
      }

      var ct = {mode: "open"};

      function lt(e) {
        var t = "function" != typeof e && e ? e : ct, n = function (e) {
          var n = E.b.getOrCreateOwn(E.b.resource, Qe, e);
          n.targetShadowDOM = !0, n.shadowDOMOptions = t
        };
        return "function" == typeof e ? n(e) : n
      }

      function ut(e) {
        return function (t) {
          E.b.define(oe.viewStrategyMetadataKey, e, t)
        }
      }

      function dt(e) {
        return ut(new Z(e))
      }

      function ht(e, t, n) {
        return ut(new ie(e, t, n))
      }

      function pt(e, t) {
        var n = void 0, i = void 0;
        "function" == typeof e ? n = e : (i = e, n = void 0);
        var r = function (e) {
          E.b.define(oe.viewStrategyMetadataKey, new te(i, t), e)
        };
        return n ? r(n) : r
      }

      var ft = Object(j.c)(j.a, Me, Ie, nt)(k = function () {
        function e(e, t, n, i) {
          this._container = e, this._moduleAnalyzer = t, this._viewCompiler = n, this._compositionEngine = i, e.registerInstance(F, F.instance = new F)
        }

        return e.prototype.configureAnimator = function (e) {
          this._container.unregister(F), this._container.registerInstance(F, F.instance = e)
        }, e.prototype.compose = function (e) {
          return this._compositionEngine.compose(e)
        }, e.prototype.enhance = function (e) {
          e instanceof R.b.Element && (e = {element: e});
          var t = {letExpressions: []}, n = e.resources || this._container.get(ve);
          this._viewCompiler._compileNode(e.element, n, t, e.element.parentNode, "root", !0);
          var i = new Ae(e.element, t, n), r = e.container || this._container.createChild(),
            o = i.create(r, Q.enhance());
          return o.bind(e.bindingContext || {}, e.overrideContext), o.firstChild = o.lastChild = o.fragment, o.fragment = R.b.createDocumentFragment(), o.attached(), o
        }, e
      }()) || k
    }).call(this, n(8))
  }, 30: function (e, t, n) {
    "use strict";
    n.r(t), function (e, i) {
      n.d(t, "bootstrap", (function () {
        return p
      })), n.d(t, "starting", (function () {
        return f
      }));
      n(31);
      var r = n(0), o = ("function" == typeof Symbol && Symbol.iterator, []), a = void 0, s = new e((function (e) {
        return a = e
      })), c = r.d.global, l = void 0 !== i && !i.browser;

      function u() {
        return r.d.Loader ? e.resolve(new r.d.Loader) : e.reject("No PLATFORM.Loader is defined and there is neither a System API (ES6) or a Require API (AMD) globally available to load your app.")
      }

      function d(t) {
        var n = function (e, n) {
          return t.normalize(e, n).then((function (n) {
            return t.map(e, n), n
          }))
        };
        return function (t) {
          if (r.f) return e.resolve();
          var n = void 0, o = l && ("renderer" === i.type || i.versions["node-webkit"]);
          if (l && !o) n = "nodejs"; else if ("undefined" != typeof window) n = "browser"; else {
            if ("undefined" == typeof self) throw new Error("Could not determine platform implementation to load.");
            n = "worker"
          }
          return t.loadModule("aurelia-pal-" + n).then((function (e) {
            return "nodejs" === n && !r.f && e.globalize() || e.initialize()
          }))
        }(t).then((function () {
          return t.normalize("aurelia-bootstrapper")
        })).then((function (t) {
          var i = n("aurelia-framework", t);
          return e.all([i, i.then((function (e) {
            return n("aurelia-dependency-injection", e)
          })), n("aurelia-router", t), n("aurelia-logging-console", t)])
        })).then((function (e) {
          var n = e[0];
          return t.loadModule(n)
        })).then((function (e) {
          return a((function () {
            return new e.Aurelia(t)
          }))
        }))
      }

      function h(e, t, n) {
        return n.host = e, n.configModuleId = t || null, t ? n.loader.loadModule(t).then((function (e) {
          if (!e.configure) throw new Error("Cannot initialize module '" + t + "' without a configure function.");
          return e.configure(n)
        })) : (n.use.standardConfiguration().developmentLogging(), n.start().then((function () {
          return n.setRoot()
        })))
      }

      function p(e) {
        var t = s.then((function (t) {
          return e(t())
        }));
        return o && o.push(t), t
      }

      var f = (c.document && "complete" !== c.document.readyState ? new e((function (e) {
        function t() {
          c.document.removeEventListener("DOMContentLoaded", t), c.removeEventListener("load", t), e()
        }

        c.document.addEventListener("DOMContentLoaded", t), c.addEventListener("load", t)
      })) : e.resolve()).then(u).then(d).then((function () {
        for (var t = c.document.querySelectorAll("[aurelia-app],[data-aurelia-app]"), n = 0, i = t.length; n < i; ++n) {
          var r = t[n], a = r.getAttribute("aurelia-app") || r.getAttribute("data-aurelia-app");
          p(h.bind(null, r, a))
        }
        var s = console.error.bind(console), l = o.map((function (e) {
          return e.catch(s)
        }));
        return o = null, e.all(l)
      }))
    }.call(this, n(8), n(16))
  }, 31: function (e, t, n) {
    "use strict";
    var i, r, o, a, s, c, l, u, d = n(0),
      h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
    if ("undefined" == typeof FEATURE_NO_ES2015 && (function (e, t) {
      if (!(t in e)) {
        var n, i = d.d.global, r = 0, o = "" + Math.random(), a = "__symbol:", s = a.length, c = "__symbol@@" + o,
          l = "defineProperty", u = "defineProperties", p = "getOwnPropertyNames", f = "getOwnPropertyDescriptor",
          v = "propertyIsEnumerable", g = e[p], m = e[f], y = e.create, b = e.keys, w = e[l], x = e[u], _ = m(e, p),
          C = e.prototype, k = C.hasOwnProperty, S = C[v], E = C.toString,
          R = (Array.prototype.indexOf, function (e, t, n) {
            k.call(e, c) || w(e, c, {enumerable: !1, configurable: !1, writable: !1, value: {}}), e[c]["@@" + t] = n
          }), A = function (e, t) {
            var n = y(e);
            return null !== t && "object" === (void 0 === t ? "undefined" : h(t)) && g(t).forEach((function (e) {
              B.call(t, e) && N(n, e, t[e])
            })), n
          }, T = function () {
          }, O = function (e) {
            return e != c && !k.call(F, e)
          }, j = function (e) {
            return e != c && k.call(F, e)
          }, B = function (e) {
            var t = "" + e;
            return j(t) ? k.call(this, t) && this[c] && this[c]["@@" + t] : S.call(this, e)
          }, I = function (t) {
            return w(C, t, {
              enumerable: !1, configurable: !0, get: T, set: function (e) {
                n(this, t, {enumerable: !1, configurable: !0, writable: !0, value: e}), R(this, t, !0)
              }
            }), F[t] = w(e(t), "constructor", M)
          }, L = function (e) {
            if (this && this !== i) throw new TypeError("Symbol is not a constructor");
            return I(a.concat(e || "", o, ++r))
          }, F = y(null), M = {value: L}, P = function (e) {
            return F[e]
          }, N = function (e, t, i) {
            var r = "" + t;
            return j(r) ? (n(e, r, i.enumerable ? function (e) {
              var t = y(e);
              return t.enumerable = !1, t
            }(i) : i), R(e, r, !!i.enumerable)) : w(e, t, i), e
          }, V = function (t) {
            return t = "[object String]" === E.call(t) ? t.split("") : e(t), g(t).filter(j).map(P)
          };
        _.value = N, w(e, l, _), _.value = V, w(e, t, _);
        var D = "object" === ("undefined" == typeof window ? "undefined" : h(window)) ? e.getOwnPropertyNames(window) : [],
          q = e.getOwnPropertyNames;
        _.value = function (e) {
          if ("[object Window]" === E.call(e)) try {
            return q(e)
          } catch (e) {
            return [].concat([], D)
          }
          return g(e).filter(O)
        }, w(e, p, _), _.value = function (e, t) {
          var n = V(t);
          return n.length ? b(t).concat(n).forEach((function (n) {
            B.call(t, n) && N(e, n, t[n])
          })) : x(e, t), e
        }, w(e, u, _), _.value = B, w(C, v, _), _.value = L, w(i, "Symbol", _), _.value = function (e) {
          var t = a.concat(a, e, o);
          return t in C ? F[t] : I(t)
        }, w(L, "for", _), _.value = function (e) {
          return k.call(F, e) ? e.slice(2 * s, -o.length) : void 0
        }, w(L, "keyFor", _), _.value = function (e, t) {
          var n = m(e, t);
          return n && j(t) && (n.enumerable = B.call(e, t)), n
        }, w(e, f, _), _.value = function (e, t) {
          return 1 === arguments.length ? y(e) : A(e, t)
        }, w(e, "create", _), _.value = function () {
          var e = E.call(this);
          return "[object String]" === e && j(this) ? "[object Symbol]" : e
        }, w(C, "toString", _);
        try {
          n = y(w({}, a, {
            get: function () {
              return w(this, a, {value: !1})[a]
            }
          }))[a] || w
        } catch (e) {
          n = function (e, t, n) {
            var i = m(C, t);
            delete C[t], w(e, t, n), w(C, t, i)
          }
        }
      }
    }(Object, "getOwnPropertySymbols"), i = Object, Symbol, o = i.defineProperty, a = i.prototype, s = a.toString, ["iterator", "match", "replace", "search", "split", "hasInstance", "isConcatSpreadable", "unscopables", "species", "toPrimitive", c = "toStringTag"].forEach((function (e) {
      if (!(e in Symbol)) switch (o(Symbol, e, {value: Symbol(e)}), e) {
        case c:
          (r = i.getOwnPropertyDescriptor(a, "toString")).value = function () {
            var e = s.call(this), t = null == this ? void 0 : this[Symbol.toStringTag];
            return void 0 === t ? e : "[object " + t + "]"
          }, o(a, "toString", r)
      }
    })), function (e, t, n) {
      function i() {
        return this
      }

      t[e] || (t[e] = function () {
        var t = 0, n = this, r = {
          next: function () {
            var e = n.length <= t;
            return e ? {done: e} : {done: e, value: n[t++]}
          }
        };
        return r[e] = i, r
      }), n[e] || (n[e] = function () {
        var t = String.fromCodePoint, n = this, r = 0, o = n.length, a = {
          next: function () {
            var e = o <= r, i = e ? "" : t(n.codePointAt(r));
            return r += i.length, e ? {done: e} : {done: e, value: i}
          }
        };
        return a[e] = i, a
      })
    }(Symbol.iterator, Array.prototype, String.prototype)), "undefined" == typeof FEATURE_NO_ES2015 && (Number.isNaN = Number.isNaN || function (e) {
      return e != e
    }, Number.isFinite = Number.isFinite || function (e) {
      return "number" == typeof e && isFinite(e)
    }), String.prototype.endsWith && !function () {
      try {
        return !"ab".endsWith("a", 1)
      } catch (e) {
        return !0
      }
    }() || (String.prototype.endsWith = function (e, t) {
      var n = this.toString();
      ("number" != typeof t || !isFinite(t) || Math.floor(t) !== t || t > n.length) && (t = n.length), t -= e.length;
      var i = n.indexOf(e, t);
      return -1 !== i && i === t
    }), String.prototype.startsWith && !function () {
      try {
        return !"ab".startsWith("b", 1)
      } catch (e) {
        return !0
      }
    }() || (String.prototype.startsWith = function (e, t) {
      return t = t || 0, this.substr(t, e.length) === e
    }), "undefined" == typeof FEATURE_NO_ES2015 && (Array.from || (Array.from = (l = function (e) {
      return e > 0 ? Math.min(function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? Math.floor : Math.ceil)(e)
      }(e), 9007199254740991) : 0
    }, u = function (e, t, n, i) {
      try {
        return t(n, i)
      } catch (t) {
        throw"function" == typeof e.return && e.return(), t
      }
    }, function (e) {
      var t, n, i, r, o = Object(e), a = "function" == typeof this ? this : Array, s = arguments.length,
        c = s > 1 ? arguments[1] : void 0, d = void 0 !== c, h = 0, p = o[Symbol.iterator];
      if (d && (c = c.bind(s > 2 ? arguments[2] : void 0)), null == p || Array.isArray(e)) for (n = new a(t = l(o.length)); t > h; h++) n[h] = d ? c(o[h], h) : o[h]; else for (r = p.call(o), n = new a; !(i = r.next()).done; h++) n[h] = d ? u(r, c, i.value, h) : i.value;
      return n.length = h, n
    })), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
      configurable: !0,
      writable: !0,
      enumerable: !1,
      value: function (e) {
        if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
        if ("function" != typeof e) throw new TypeError("predicate must be a function");
        for (var t, n = Object(this), i = n.length >>> 0, r = arguments[1], o = 0; o < i; o++) if (t = n[o], e.call(r, t, o, n)) return t
      }
    }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
      configurable: !0,
      writable: !0,
      enumerable: !1,
      value: function (e) {
        if (null === this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
        if ("function" != typeof e) throw new TypeError("predicate must be a function");
        for (var t, n = Object(this), i = n.length >>> 0, r = arguments[1], o = 0; o < i; o++) if (t = n[o], e.call(r, t, o, n)) return o;
        return -1
      }
    })), "undefined" != typeof FEATURE_NO_ES2016 || Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
      configurable: !0,
      writable: !0,
      enumerable: !1,
      value: function (e) {
        var t = Object(this), n = parseInt(t.length) || 0;
        if (0 === n) return !1;
        var i, r, o = parseInt(arguments[1]) || 0;
        for (o >= 0 ? i = o : (i = n + o) < 0 && (i = 0); i < n;) {
          if (e === (r = t[i]) || e != e && r != r) return !0;
          i++
        }
        return !1
      }
    }), "undefined" == typeof FEATURE_NO_ES2015 && (!function () {
      var e, t, n, i, r = !1;
      try {
        var o = Object.keys("a");
        r = 1 !== o.length || "0" !== o[0]
      } catch (e) {
        r = !0
      }
      r && (Object.keys = (e = Object.prototype.hasOwnProperty, t = !{toString: null}.propertyIsEnumerable("toString"), i = (n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function (r) {
        if (null == r) throw TypeError("Cannot convert undefined or null to object");
        r = Object(r);
        var o, a, s = [];
        for (o in r) e.call(r, o) && s.push(o);
        if (t) for (a = 0; a < i; a++) e.call(r, n[a]) && s.push(n[a]);
        return s
      }))
    }(), function (e) {
      var t, n, i;
      "assign" in e || e.defineProperty(e, "assign", {
        configurable: !0,
        writable: !0,
        value: (t = e.getOwnPropertySymbols, n = e.propertyIsEnumerable, i = t ? function (e) {
          return t(e).filter(n, e)
        } : function () {
          return Array.prototype
        }, function (n) {
          function r(e) {
            n[e] = s[e]
          }

          !t || n instanceof e || console.warn("problematic Symbols", n);
          for (var o = 1, a = arguments.length; o < a; ++o) {
            var s = arguments[o];
            null != s && e.keys(s).concat(i(s)).forEach(r)
          }
          return n
        })
      })
    }(Object), Object.is || (Object.is = function (e, t) {
      return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    })), "undefined" == typeof FEATURE_NO_ES2015 && function (e) {
      var t, n, i, r = Object.defineProperty;
      ("undefined" == typeof WeakMap && (e.WeakMap = o({
        delete: s,
        clear: f,
        get: c,
        has: d,
        set: h
      }, !0)), "undefined" != typeof Map && "function" == typeof (new Map).values && (new Map).values().next) || (e.Map = o(((n = {
        delete: s,
        has: d,
        get: c,
        set: h,
        keys: function () {
          return m(this._itp, this._keys)
        },
        values: v,
        entries: g,
        forEach: b,
        clear: f
      })[Symbol.iterator] = g, n)));
      "undefined" != typeof Set && "function" == typeof (new Set).values && (new Set).values().next || (e.Set = o(((i = {
        has: u,
        add: p,
        delete: s,
        clear: f,
        keys: v,
        values: v,
        entries: function () {
          return m(this._itp, this._values, this._values)
        },
        forEach: b
      })[Symbol.iterator] = v, i)));

      function o(e, t) {
        function n(e) {
          if (!this || this.constructor !== n) return new n(e);
          this._keys = [], this._values = [], this._itp = [], this.objectOnly = t, e && a.call(this, e)
        }

        return t || r(e, "size", {get: y}), e.constructor = n, n.prototype = e, n
      }

      function a(e) {
        this.add ? e.forEach(this.add, this) : e.forEach((function (e) {
          this.set(e[0], e[1])
        }), this)
      }

      function s(e) {
        return this.has(e) && (this._keys.splice(t, 1), this._values.splice(t, 1), this._itp.forEach((function (e) {
          t < e[0] && e[0]--
        }))), -1 < t
      }

      function c(e) {
        return this.has(e) ? this._values[t] : void 0
      }

      function l(e, n) {
        if (this.objectOnly && n !== Object(n)) throw new TypeError("Invalid value used as weak collection key");
        if (n != n || 0 === n) for (t = e.length; t-- && ((i = e[t]) !== (r = n) && (i == i || r == r));) ; else t = e.indexOf(n);
        var i, r;
        return -1 < t
      }

      function u(e) {
        return l.call(this, this._values, e)
      }

      function d(e) {
        return l.call(this, this._keys, e)
      }

      function h(e, n) {
        return this.has(e) ? this._values[t] = n : this._values[this._keys.push(e) - 1] = n, this
      }

      function p(e) {
        return this.has(e) || this._values.push(e), this
      }

      function f() {
        (this._keys || 0).length = this._values.length = 0
      }

      function v() {
        return m(this._itp, this._values)
      }

      function g() {
        return m(this._itp, this._keys, this._values)
      }

      function m(e, t, n) {
        var i, r = [0], o = !1;
        return e.push(r), (i = {})[Symbol.iterator] = function () {
          return this
        }, i.next = function () {
          var i, a = r[0];
          return !o && a < t.length ? (i = n ? [t[a], n[a]] : t[a], r[0]++) : (o = !0, e.splice(e.indexOf(r), 1)), {
            done: o,
            value: i
          }
        }, i
      }

      function y() {
        return this._values.length
      }

      function b(e, t) {
        for (var n = this.entries(); ;) {
          var i = n.next();
          if (i.done) break;
          e.call(t, i.value[1], i.value[0], this)
        }
      }

      "undefined" == typeof WeakSet && (e.WeakSet = o({delete: s, add: p, clear: f, has: u}, !0))
    }(d.d.global), "undefined" == typeof FEATURE_NO_ES2015) {
      var p = Function.prototype.bind;
      void 0 === d.d.global.Reflect && (d.d.global.Reflect = {}), "function" != typeof Reflect.defineProperty && (Reflect.defineProperty = function (e, t, n) {
        if ("object" === (void 0 === e ? "undefined" : h(e)) ? null === e : "function" != typeof e) throw new TypeError("Reflect.defineProperty called on non-object");
        try {
          return Object.defineProperty(e, t, n), !0
        } catch (e) {
          return !1
        }
      }), "function" != typeof Reflect.construct && (Reflect.construct = function (e, t) {
        if (t) switch (t.length) {
          case 0:
            return new e;
          case 1:
            return new e(t[0]);
          case 2:
            return new e(t[0], t[1]);
          case 3:
            return new e(t[0], t[1], t[2]);
          case 4:
            return new e(t[0], t[1], t[2], t[3])
        }
        var n = [null];
        return n.push.apply(n, t), new (p.apply(e, n))
      }), "function" != typeof Reflect.ownKeys && (Reflect.ownKeys = function (e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
      })
    }
    if ("undefined" == typeof FEATURE_NO_ESNEXT) {
      var f = Object.freeze({});
      "function" != typeof Reflect.getOwnMetadata && (Reflect.getOwnMetadata = function (e, t, n) {
        if (t.hasOwnProperty("__metadata__")) return (t.__metadata__[n] || f)[e]
      }), "function" != typeof Reflect.defineMetadata && (Reflect.defineMetadata = function (e, t, n, i) {
        var r = n.hasOwnProperty("__metadata__") ? n.__metadata__ : n.__metadata__ = {};
        (r[i] || (r[i] = {}))[e] = t
      }), "function" != typeof Reflect.metadata && (Reflect.metadata = function (e, t) {
        return function (n, i) {
          Reflect.defineMetadata(e, t, n, i)
        }
      })
    }
  }, 4: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "logLevel", (function () {
      return i
    })), n.d(t, "getLogger", (function () {
      return p
    })), n.d(t, "addAppender", (function () {
      return f
    })), n.d(t, "removeAppender", (function () {
      return v
    })), n.d(t, "getAppenders", (function () {
      return g
    })), n.d(t, "clearAppenders", (function () {
      return m
    })), n.d(t, "addCustomLevel", (function () {
      return y
    })), n.d(t, "removeCustomLevel", (function () {
      return b
    })), n.d(t, "setLevel", (function () {
      return w
    })), n.d(t, "getLevel", (function () {
      return x
    })), n.d(t, "Logger", (function () {
      return _
    }));
    var i = {none: 0, error: 10, warn: 20, info: 30, debug: 40}, r = {}, o = [], a = i.none,
      s = ["none", "error", "warn", "info", "debug"];

    function c(e) {
      return s.filter((function (t) {
        return t === e
      })).length > 0
    }

    function l() {
      return [this].concat(Array.prototype.slice.call(arguments))
    }

    function u(e) {
      var t = i[e];
      return function () {
        if (!(this.level < t)) for (var n = l.apply(this, arguments), i = o.length; i--;) {
          var r;
          (r = o[i])[e].apply(r, n)
        }
      }
    }

    function d(e) {
      var t = i[e];
      return function () {
        if (!(this.level < t)) for (var n = l.apply(this, arguments), i = o.length; i--;) {
          var r = o[i];
          void 0 !== r[e] && r[e].apply(r, n)
        }
      }
    }

    function h() {
      var e = _.prototype;
      for (var t in i) c(t) ? "none" !== t && (e[t] = u(t)) : e[t] = d(t)
    }

    function p(e) {
      return r[e] || new _(e)
    }

    function f(e) {
      1 === o.push(e) && h()
    }

    function v(e) {
      o = o.filter((function (t) {
        return t !== e
      }))
    }

    function g() {
      return [].concat(o)
    }

    function m() {
      o = [], function () {
        var e = _.prototype;
        for (var t in i) "none" !== t && (e[t] = function () {
        })
      }()
    }

    function y(e, t) {
      if (void 0 !== i[e]) throw Error('Log level "' + e + '" already exists.');
      if (isNaN(t)) throw Error("Value must be a number.");
      i[e] = t, o.length > 0 ? h() : _.prototype[e] = function () {
      }
    }

    function b(e) {
      if (void 0 !== i[e]) {
        if (c(e)) throw Error('Built-in log level "' + e + '" cannot be removed.');
        delete i[e], delete _.prototype[e]
      }
    }

    function w(e) {
      for (var t in a = e, r) r[t].setLevel(e)
    }

    function x() {
      return a
    }

    var _ = function () {
      function e(e) {
        var t = r[e];
        if (t) return t;
        r[e] = this, this.id = e, this.level = a
      }

      return e.prototype.debug = function (e) {
      }, e.prototype.info = function (e) {
      }, e.prototype.warn = function (e) {
      }, e.prototype.error = function (e) {
      }, e.prototype.setLevel = function (e) {
        this.level = e
      }, e.prototype.isDebugEnabled = function () {
        return this.level === i.debug
      }, e
    }()
  }, 5: function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
      return r
    })), n.d(t, "a", (function () {
      return o
    }));

    class i {
      constructor(e, t, n) {
        this.id = e, this.parentFaeSide = t, this.intraSideIndex = n
      }

      isAcct() {
        return this instanceof o
      }

      isAnnotation() {
        return this instanceof r
      }

      compareTo(e) {
        return this.parentFaeSide.id == e.parentFaeSide.id ? this.intraSideIndex > e.intraSideIndex ? 1 : -1 : this.parentFaeSide.id > e.parentFaeSide.id ? 1 : -1
      }
    }

    class r extends i {
      constructor(e, t, n, i) {
        super(e, t, n), this.annoText = i
      }

      clone() {
        return new r(this.id, this.parentFaeSide, this.intraSideIndex, this.annoText)
      }
    }

    class o extends i {
      constructor(e, t, n, i, r) {
        super(e, t, n), this.bchgList = [], this.endingBalance = 0, this.title = i, this.normalBalance = r
      }

      sortBchgList() {
        this.bchgList.sort((e, t) => e.compareToInAcct(t))
      }

      refresh() {
        this.sortBchgList(), this.endingBalance = 0;
        for (let e of this.bchgList) this.endingBalance += e.amt, e.newBalance = this.endingBalance
      }

      clone() {
        let e = new o(this.id, this.parentFaeSide, this.intraSideIndex, this.title, this.normalBalance);
        e.endingBalance = this.endingBalance;
        for (let t of this.bchgList) {
          let n = t.clone(t.sourceTran, e);
          e.bchgList.push(n)
        }
        return e
      }
    }
  }, 6: function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
      return b
    })), n.d(t, "c", (function () {
      return c
    })), n.d(t, "d", (function () {
      return u
    })), n.d(t, "b", (function () {
      return p
    }));
    var i = n(1), r = n(0);

    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    function o(e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }

    function a(e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    }

    function s(e) {
      var t = function (e) {
        e.hasOwnProperty("inject") || (e.inject = (i.b.getOwn(i.b.paramTypes, e) || v).slice(), e.inject && e.inject.length > 0 && e.inject[e.inject.length - 1] === Object && e.inject.splice(-1, 1))
      };
      return function (e) {
        return !!e
      }(e) ? t(e) : t
    }

    function c() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return function (t, n, i) {
        if ("number" == typeof i) return s(t), void (1 === e.length && (t.inject[i] = e[0]));
        i ? i.value.inject = e : t.inject = e
      }
    }

    var l, u = i.d.create("aurelia:resolver", (function (e) {
      return "function" == typeof e.get || "Resolvers must implement: get(container: Container, key: any): any"
    }));

    function d(e, t, n) {
      return e === t
    }

    !function (e) {
      e[e.instance = 0] = "instance", e[e.singleton = 1] = "singleton", e[e.transient = 2] = "transient", e[e.function = 3] = "function", e[e.array = 4] = "array", e[e.alias = 5] = "alias"
    }(l || (l = {}));
    var h = function () {
      function e(e, t) {
        this.strategy = e, this.state = t
      }

      return e.prototype.get = function (e, t) {
        if (d(this.strategy, l.instance, this.state)) return this.state;
        if (d(this.strategy, l.singleton, this.state)) {
          var n = e.invoke(this.state);
          return this.state = n, this.strategy = 0, n
        }
        if (d(this.strategy, l.transient, this.state)) return e.invoke(this.state);
        if (d(this.strategy, l.function, this.state)) return this.state(e, t, this);
        if (d(this.strategy, l.array, this.state)) return this.state[0].get(e, t);
        if (d(this.strategy, l.alias, this.state)) return e.get(this.state);
        throw new Error("Invalid strategy: " + this.strategy)
      }, e = o([u(), a("design:paramtypes", [Number, Object])], e)
    }(), p = (function () {
      function e(e) {
        this._key = e
      }

      var t;
      t = e, e.prototype.get = function (e) {
        var t = this;
        return function () {
          return e.get(t._key)
        }
      }, e.of = function (e) {
        return new t(e)
      }, e = t = o([u(), a("design:paramtypes", [Object])], e)
    }(), function () {
      function e(e) {
        this._key = e
      }

      var t;
      t = e, e.prototype.get = function (e) {
        return e.getAll(this._key)
      }, e.of = function (e) {
        return new t(e)
      }, e = t = o([u(), a("design:paramtypes", [Object])], e)
    }(), function () {
      function e(e, t) {
        void 0 === t && (t = !0), this._key = e, this._checkParent = t
      }

      var t;
      return t = e, e.prototype.get = function (e) {
        return e.hasResolver(this._key, this._checkParent) ? e.get(this._key) : null
      }, e.of = function (e, n) {
        return void 0 === n && (n = !0), new t(e, n)
      }, e = t = o([u(), a("design:paramtypes", [Object, Boolean])], e)
    }());
    (function () {
      function e(e) {
        this._key = e
      }

      var t;
      t = e, e.prototype.get = function (e) {
        return e.parent ? e.parent.get(this._key) : null
      }, e.of = function (e) {
        return new t(e)
      }, e = t = o([u(), a("design:paramtypes", [Object])], e)
    })(), function () {
      function e(e) {
        this._key = e
      }

      var t;
      t = e, e.prototype.get = function (e) {
        var t = this._key, n = e.getResolver(t);
        return n && n.strategy === l.function && (t = n.state), function () {
          for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
          return e.invoke(t, n)
        }
      }, e.of = function (e) {
        return new t(e)
      }, e = t = o([u(), a("design:paramtypes", [Object])], e)
    }(), function () {
      function e(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.key = e, this.asKey = e, this.dynamicDependencies = t
      }

      var t;
      t = e, e.prototype.get = function (e) {
        var t = this.dynamicDependencies.length > 0 ? this.dynamicDependencies.map((function (t) {
          return t["protocol:aurelia:resolver"] ? t.get(e) : e.get(t)
        })) : void 0, n = this.key, i = e.getResolver(n);
        i && 3 === i.strategy && (n = i.state);
        var r = e.invoke(n, t);
        return e.registerInstance(this.asKey, r), r
      }, e.prototype.as = function (e) {
        return this.asKey = e, this
      }, e.of = function (e) {
        for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
        return new (t.bind.apply(t, [void 0, e].concat(n)))
      }, e = t = o([u(), a("design:paramtypes", [Object, Object])], e)
    }();

    function f(e) {
      if (null == e) throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")
    }

    var v = Object.freeze([]);
    i.b.registration = "aurelia:registration", i.b.invoker = "aurelia:invoker";
    var g = u.decorates, m = function () {
      function e(e, t, n) {
        this.fn = e, this.invoker = t, this.dependencies = n
      }

      return e.prototype.invoke = function (e, t) {
        return void 0 !== t ? this.invoker.invokeWithDynamicDependencies(e, this.fn, this.dependencies, t) : this.invoker.invoke(e, this.fn, this.dependencies)
      }, e
    }();
    var y = {
      invoke: function (e, t, n) {
        var i = n.map((function (t) {
          return e.get(t)
        }));
        return Reflect.construct(t, i)
      }, invokeWithDynamicDependencies: function (e, t, n, i) {
        for (var r, o = n.length, a = new Array(o); o--;) {
          if (null == (r = n[o])) throw new Error("Constructor Parameter with index " + o + " cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?");
          a[o] = e.get(r)
        }
        return void 0 !== i && (a = a.concat(i)), Reflect.construct(t, a)
      }
    };
    var b = function () {
      function e(e) {
        void 0 === e && (e = {}), this._configuration = e, this._onHandlerCreated = e.onHandlerCreated, this._handlers = e.handlers || (e.handlers = new Map), this._resolvers = new Map, this.root = this, this.parent = null
      }

      return e.prototype.makeGlobal = function () {
        return e.instance = this, this
      }, e.prototype.setHandlerCreatedCallback = function (e) {
        this._onHandlerCreated = e, this._configuration.onHandlerCreated = e
      }, e.prototype.registerInstance = function (e, t) {
        return this.registerResolver(e, new h(0, void 0 === t ? e : t))
      }, e.prototype.registerSingleton = function (e, t) {
        return this.registerResolver(e, new h(1, void 0 === t ? e : t))
      }, e.prototype.registerTransient = function (e, t) {
        return this.registerResolver(e, new h(2, void 0 === t ? e : t))
      }, e.prototype.registerHandler = function (e, t) {
        return this.registerResolver(e, new h(3, t))
      }, e.prototype.registerAlias = function (e, t) {
        return this.registerResolver(t, new h(5, e))
      }, e.prototype.registerResolver = function (e, t) {
        f(e);
        var n = this._resolvers, i = n.get(e);
        return void 0 === i ? n.set(e, t) : 4 === i.strategy ? i.state.push(t) : n.set(e, new h(4, [i, t])), t
      }, e.prototype.autoRegister = function (e, t) {
        if ("function" == typeof (t = void 0 === t ? e : t)) {
          var n = i.b.get(i.b.registration, t);
          return void 0 === n ? this.registerResolver(e, new h(1, t)) : n.registerResolver(this, e, t)
        }
        return this.registerResolver(e, new h(0, t))
      }, e.prototype.autoRegisterAll = function (e) {
        for (var t = e.length; t--;) this.autoRegister(e[t])
      }, e.prototype.unregister = function (e) {
        this._resolvers.delete(e)
      }, e.prototype.hasResolver = function (e, t) {
        return void 0 === t && (t = !1), f(e), this._resolvers.has(e) || t && null !== this.parent && this.parent.hasResolver(e, t)
      }, e.prototype.getResolver = function (e) {
        return this._resolvers.get(e)
      }, e.prototype.get = function (t) {
        if (f(t), t === e) return this;
        if (g(t)) return t.get(this, t);
        var n = this._resolvers.get(t);
        if (void 0 === n) {
          if (null === this.parent) return this.autoRegister(t).get(this, t);
          var r = i.b.get(i.b.registration, t);
          return void 0 === r ? this.parent._get(t) : r.registerResolver(this, t, t).get(this, t)
        }
        return n.get(this, t)
      }, e.prototype._get = function (e) {
        var t = this._resolvers.get(e);
        return void 0 === t ? null === this.parent ? this.autoRegister(e).get(this, e) : this.parent._get(e) : t.get(this, e)
      }, e.prototype.getAll = function (e) {
        f(e);
        var t = this._resolvers.get(e);
        if (void 0 === t) return null === this.parent ? v : this.parent.getAll(e);
        if (4 === t.strategy) {
          for (var n = t.state, i = n.length, r = new Array(i); i--;) r[i] = n[i].get(this, e);
          return r
        }
        return [t.get(this, e)]
      }, e.prototype.createChild = function () {
        var t = new e(this._configuration);
        return t.root = this.root, t.parent = this, t
      }, e.prototype.invoke = function (e, t) {
        try {
          var n = this._handlers.get(e);
          return void 0 === n && (n = this._createInvocationHandler(e), this._handlers.set(e, n)), n.invoke(this, t)
        } catch (t) {
          throw new r.a("Error invoking " + e.name + ". Check the inner error for details.", t, !0)
        }
      }, e.prototype._createInvocationHandler = function (e) {
        var t, n;
        if (void 0 === e.inject) t = i.b.getOwn(i.b.paramTypes, e) || v; else {
          t = [];
          for (var r = e; "function" == typeof r;) t.push.apply(t, (n = r).hasOwnProperty("inject") ? "function" == typeof n.inject ? n.inject() : n.inject : []), r = Object.getPrototypeOf(r)
        }
        var o = i.b.getOwn(i.b.invoker, e) || y, a = new m(e, o, t);
        return void 0 !== this._onHandlerCreated ? this._onHandlerCreated(a) : a
      }, e
    }();
    var w = function () {
      function e() {
      }

      return e.prototype.invoke = function (e, t, n) {
        for (var i = n.length, r = new Array(i); i--;) r[i] = e.get(n[i]);
        return t.apply(void 0, r)
      }, e.prototype.invokeWithDynamicDependencies = function (e, t, n, i) {
        for (var r = n.length, o = new Array(r); r--;) o[r] = e.get(n[r]);
        return void 0 !== i && (o = o.concat(i)), t.apply(void 0, o)
      }, e
    }();
    w.instance = new w;
    (function () {
      function e(e) {
        this._key = e
      }

      e.prototype.registerResolver = function (e, t, n) {
        var i = e.getResolver(this._key || t);
        return void 0 === i ? e.registerTransient(this._key || t, n) : i
      }
    })(), function () {
      function e(e, t) {
        void 0 === t && (t = !1), "boolean" == typeof e ? this._registerInChild = e : (this._key = e, this._registerInChild = t)
      }

      e.prototype.registerResolver = function (e, t, n) {
        var i = this._registerInChild ? e : e.root, r = i.getResolver(this._key || t);
        return void 0 === r ? i.registerSingleton(this._key || t, n) : r
      }
    }()
  }, 7: function (e, t, n) {
    "use strict";
    n.d(t, "d", (function () {
      return r
    })), n.d(t, "b", (function () {
      return o
    })), n.d(t, "a", (function () {
      return l
    })), n.d(t, "c", (function () {
      return h
    }));
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

    function r(e, t) {
      var n = t && t.split("/"), i = e.trim().split("/");
      if ("." === i[0].charAt(0) && n) {
        var r = n.slice(0, n.length - 1);
        i.unshift.apply(i, r)
      }
      return function (e) {
        for (var t = 0; t < e.length; ++t) {
          var n = e[t];
          if ("." === n) e.splice(t, 1), t -= 1; else if (".." === n) {
            if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1]) continue;
            t > 0 && (e.splice(t - 1, 2), t -= 2)
          }
        }
      }(i), i.join("/")
    }

    function o(e, t) {
      if (!e) return t;
      if (!t) return e;
      var n = e.match(/^([^/]*?:)\//), i = n && n.length > 0 ? n[1] : "", r = void 0;
      r = 0 === (e = e.substr(i.length)).indexOf("///") && "file:" === i ? "///" : 0 === e.indexOf("//") ? "//" : 0 === e.indexOf("/") ? "/" : "";
      for (var o = "/" === t.slice(-1) ? "/" : "", a = e.split("/"), s = t.split("/"), c = [], l = 0, u = a.length; l < u; ++l) if (".." === a[l]) c.length && ".." !== c[c.length - 1] ? c.pop() : c.push(a[l]); else {
        if ("." === a[l] || "" === a[l]) continue;
        c.push(a[l])
      }
      for (var d = 0, h = s.length; d < h; ++d) if (".." === s[d]) c.length && ".." !== c[c.length - 1] ? c.pop() : c.push(s[d]); else {
        if ("." === s[d] || "" === s[d]) continue;
        c.push(s[d])
      }
      return i + r + c.join("/") + o
    }

    var a = encodeURIComponent, s = function (e) {
      return a(e).replace("%24", "$")
    };

    function c(e, t, n) {
      var r = [];
      if (null == t) return r;
      if (Array.isArray(t)) for (var o = 0, l = t.length; o < l; o++) if (n) r.push(s(e) + "=" + a(t[o])); else {
        var u = e + "[" + ("object" === i(t[o]) && null !== t[o] ? o : "") + "]";
        r = r.concat(c(u, t[o]))
      } else if ("object" !== (void 0 === t ? "undefined" : i(t)) || n) r.push(s(e) + "=" + a(t)); else for (var d in t) r = r.concat(c(e + "[" + d + "]", t[d]));
      return r
    }

    function l(e, t) {
      for (var n = [], i = Object.keys(e || {}).sort(), r = 0, o = i.length; r < o; r++) {
        var a = i[r];
        n = n.concat(c(a, e[a], t))
      }
      return 0 === n.length ? "" : n.join("&")
    }

    function u(e, t) {
      return Array.isArray(e) ? (e.push(t), e) : void 0 !== e ? [e, t] : t
    }

    function d(e, t, n) {
      for (var r = e, o = t.length - 1, a = 0; a <= o; a++) {
        var s = "" === t[a] ? r.length : t[a];
        if (a < o) {
          var c = r[s] && "object" !== i(r[s]) ? [r[s]] : r[s];
          r = r[s] = c || (isNaN(t[a + 1]) ? {} : [])
        } else r = r[s] = n
      }
    }

    function h(e) {
      var t = {};
      if (!e || "string" != typeof e) return t;
      var n = e;
      "?" === n.charAt(0) && (n = n.substr(1));
      for (var i = n.replace(/\+/g, " ").split("&"), r = 0; r < i.length; r++) {
        var o = i[r].split("="), a = decodeURIComponent(o[0]);
        if (a) {
          var s = a.split("]["), c = s.length - 1;
          if (/\[/.test(s[0]) && /\]$/.test(s[c]) ? (s[c] = s[c].replace(/\]$/, ""), c = (s = s.shift().split("[").concat(s)).length - 1) : c = 0, o.length >= 2) {
            var l = o[1] ? decodeURIComponent(o[1]) : "";
            c ? d(t, s, l) : t[a] = u(t[a], l)
          } else t[a] = !0
        }
      }
      return t
    }
  }, 8: function (e, t, n) {
    (function (t) {
      e.exports = t.Promise = n(19)
    }).call(this, n(12))
  }, 9: function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
      return i
    }));

    class i {
      constructor(e, t, n, i, r) {
        this.newBalance = 0, this.id = e, this.sourceTran = t, this.targetAcct = n, this.desc = i, this.amt = r
      }

      compareToInAcct(e) {
        return this.sourceTran.date == e.sourceTran.date ? this.sourceTran.intraDateSorter > e.sourceTran.intraDateSorter ? 1 : -1 : this.sourceTran.date > e.sourceTran.date ? 1 : -1
      }

      compareToInTran(e) {
        return this.intraTranIndex > e.intraTranIndex ? 1 : this.intraTranIndex < e.intraTranIndex ? -1 : 0
      }

      clone(e, t) {
        let n = new i(this.id, e, t, this.desc, this.amt);
        return n.intraTranIndex = this.intraTranIndex, n.newBalance = this.newBalance, n
      }

      registerToAcct() {
        this.targetAcct.bchgList.push(this)
      }

      unregisterFromAcct() {
        let e = this.targetAcct.bchgList.findIndex(e => e.id == this.id);
        this.targetAcct.bchgList.splice(e, 1)
      }

      unregisterFromTran() {
        let e = this.sourceTran.bchgList.findIndex(e => e.id == this.id);
        this.sourceTran.bchgList.splice(e, 1)
      }

      setAmtToBalanceTran() {
        let e = 0, t = 0;
        for (let n of this.sourceTran.bchgList) if (n.id != this.id) switch (n.targetAcct.parentFaeSide.id) {
          case"Assets":
            e += n.amt;
            break;
          case"Equities":
            t += n.amt;
            break;
          default:
            throw new Error(`acct.parentFaeSide.id has invalid value: "${this.targetAcct.parentFaeSide.id}"`)
        }
        switch (this.targetAcct.parentFaeSide.id) {
          case"Assets":
            this.amt = t - e, e += this.amt;
            break;
          case"Equities":
            this.amt = e - t, t += this.amt;
            break;
          default:
            throw new Error(`acct.parentFaeSide.id has invalid value: "${this.targetAcct.parentFaeSide.id}"`)
        }
        this.sourceTran.totalChangesAssets = e, this.sourceTran.totalChangesEquities = t
      }
    }
  }, app: function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(14), r = n(5), o = n(9), a = n(15);

    class s {
      constructor(e) {
        this.tranList = [], this.id = e
      }

      sortTranList() {
        this.tranList.sort((e, t) => e.compareToInJrnl(t))
      }

      refresh() {
        this.sortTranList();
        for (let e of this.tranList) e.refresh()
      }
    }

    class c {
      constructor(e, t, n, r, o) {
        this._nextSorter = 1, this._nextAcctId = 1, this._nextTranId = 1, this._nextBchgId = 1, this.stringifiedData = "", this.entityName = "test entity", this.faeSideAssets = new i.a("Assets"), this.faeSideEquities = new i.a("Equities"), this.jrnl = new s("Journal"), this.entityName = e, this._nextSorter = t, this._nextAcctId = n, this._nextTranId = r, this._nextBchgId = o
      }

      get nextSorter() {
        return this._nextSorter++
      }

      get nextAcctId() {
        return this._nextAcctId++
      }

      get nextTranId() {
        return this._nextTranId++
      }

      get nextBchgId() {
        return this._nextBchgId++
      }

      generateEmptyData() {
        console.log("\n********************************************\nGenerating test data..."), this.entityName = "<programmatically generated empty data for testing>"
      }

      generateTestData() {
        let e, t, n, i, s, c, l;
        console.log("\n********************************************\nGenerating test data..."), this.entityName = "<programmatically generated test data for testing>", l = `anno${this.nextAcctId}`, e = new r.b(l, this.faeSideAssets, this.nextSorter, `Test annotation (equationSide: ${this.faeSideAssets.id}; annoId: ${l};)`), this.faeSideAssets.acctList.push(e);
        for (let e = 15; e > 0; e--) c = `acct${this.nextAcctId}`, t = new r.a(c, this.faeSideAssets, this.nextSorter, `Test account (equationSide: ${this.faeSideAssets.id}, acctId: ${c};)`, 1), this.faeSideAssets.acctList.push(t), c = `acct${this.nextAcctId}`, t = new r.a(c, this.faeSideEquities, this.nextSorter, `Test account (equationSide: ${this.faeSideEquities.id}; acctId: ${c};)`, 1), this.faeSideEquities.acctList.push(t);
        this.faeSideAssets.reindexAcctList(), this.faeSideEquities.reindexAcctList();
        let u = this.faeSideAssets.acctList.filter(e => e instanceof r.a),
          d = this.faeSideEquities.acctList.filter(e => e instanceof r.a), h = u.concat(d);
        for (let e = 1; e <= 50; ++e) {
          let t;
          i = new a.a(`tran${this.nextTranId}`, this.jrnl, e % 2 ? "2016-02-03" : "2016-02-20", this.nextSorter), n = h[(Math.random() * (h.length - 1)).toFixed(0)], t = `bchg${this.nextBchgId}`, s = new o.a(t, i, n, `<change desc: ${t}; ${i.id}; ${n.id}; >`, 0), i.bchgList.push(s), n.bchgList.push(s), n = h[(Math.random() * (h.length - 1)).toFixed(0)], t = `bchg${this.nextBchgId}`, s = new o.a(t, i, n, `<change desc: ${t}; ${i.id}; ${n.id}; >`, Math.round(1e6 * Math.random()) / 100), i.bchgList.push(s), n.bchgList.push(s), i.bchgList[0].setAmtToBalanceTran(), this.jrnl.tranList.push(i)
        }
        this.faeSideAssets.refresh(), this.faeSideEquities.refresh(), this.jrnl.refresh(), console.log(this), console.log("Generation of test data completed!")
      }

      generateExample1Data() {
        let e, t, n, i;
        console.log("\n********************************************\nGenerating example data..."), this.entityName = "Rene (an individual)", e = new r.a(`acct${this.nextAcctId}`, this.faeSideAssets, this.nextSorter, "Pocket money", 1), this.faeSideAssets.acctList.push(e), e = new r.a(`acct${this.nextAcctId}`, this.faeSideAssets, this.nextSorter, "Tallahassee Bank - checking account", 1), this.faeSideAssets.acctList.push(e), this.faeSideAssets.reindexAcctList(), e = new r.a(`acct${this.nextAcctId}`, this.faeSideEquities, this.nextSorter, "Rene's equity", 1), this.faeSideEquities.acctList.push(e), this.faeSideEquities.reindexAcctList(), t = new a.a(`tran${this.nextTranId}`, this.jrnl, "2018-08-01", this.nextSorter), i = this.faeSideAssets.acctList[0], n = new o.a(`bchg${this.nextBchgId}`, t, i, "Opening position", 12), t.bchgList.push(n), i.bchgList.push(n), i = this.faeSideAssets.acctList[1], n = new o.a(`bchg${this.nextBchgId}`, t, i, "Opening position", 1700), t.bchgList.push(n), i.bchgList.push(n), i = this.faeSideEquities.acctList[0], n = new o.a(`bchg${this.nextBchgId}`, t, i, "Opening position", 0), t.bchgList.push(n), i.bchgList.push(n), n.setAmtToBalanceTran(), this.jrnl.tranList.push(t), t = new a.a(`tran${this.nextTranId}`, this.jrnl, "2018-08-05", this.nextSorter), i = this.faeSideAssets.acctList[1], n = new o.a(`bchg${this.nextBchgId}`, t, i, "ATM cash withdrawal", -100), t.bchgList.push(n), i.bchgList.push(n), i = this.faeSideAssets.acctList[0], n = new o.a(`bchg${this.nextBchgId}`, t, i, "Deposit cash from ATM withdrawal", 0), t.bchgList.push(n), i.bchgList.push(n), n.setAmtToBalanceTran(), this.jrnl.tranList.push(t), this.faeSideAssets.refresh(), this.faeSideEquities.refresh(), this.jrnl.refresh(), console.log(this), console.log("\nGeneration of example data completed!\n********************************************")
      }

      stringifyData() {
        console.log("***** stringifiedData *****"), this.stringifiedData = JSON.stringify(this, this.replacer), console.log(this.stringifiedData)
      }

      replacer(e, t) {
        return "parentFaeSide" == e || "sourceTran" == e || "targetAcct" == e || "parentJrnl" == e ? t.id : t
      }

      reviveData() {
        console.log("***** parsedData *****");
        let e = JSON.parse(this.stringifiedData);
        console.log(e);
        let t, n, i, s, l, u = new c(e.entityName, e._nextSorter, e._nextAcctId, e._nextTranId, e._nextBchgId);
        console.log("***** revivedData *****");
        for (let i of [e.faeSideAssets, e.faeSideEquities]) {
          t = "Assets" == i.id ? u.faeSideAssets : u.faeSideEquities;
          for (let e of i.acctList) "anno" == e.id.substring(0, 4) ? n = new r.b(e.id, t, e.intraSideIndex, e.annoText) : (n = new r.a(e.id, t, e.intraSideIndex, e.title, e.normalBalance), n.endingBalance = e.endingBalance), t.acctList.push(n);
          l = u.faeSideAssets.acctList.concat(u.faeSideEquities.acctList), t.refresh()
        }
        for (let t of e.jrnl.tranList) {
          i = new a.a(t.id, u.jrnl, t.date, t.intraDateSorter);
          for (let e of t.bchgList) s = new o.a(e.id, i, l.find(t => t.id == e.targetAcct), e.desc, e.amt), i.bchgList.push(s);
          u.faeSideAssets.refresh(), u.faeSideEquities.refresh(), u.jrnl.refresh(), i.register()
        }
        u.jrnl.refresh(), console.log(u), this._nextSorter = u._nextSorter, this._nextAcctId = u._nextAcctId, this._nextTranId = u._nextTranId, this._nextBchgId = u._nextBchgId, this.entityName = u.entityName, this.faeSideAssets = u.faeSideAssets, this.faeSideEquities = u.faeSideEquities, this.jrnl = u.jrnl
      }
    }

    n.d(t, "App", (function () {
      return l
    }));

    class l {
      constructor() {
        this.navBtnReturn = null, this.selectedModule = this.MODULE_FAE, this.viewNavMode = !0, this.selectedAcct = null, this.selectedBchg = null, this.selectedTran = null, this.candidateSelectedAcct = null, this.candidateSelectedBchg = null, this.candidateSelectedTran = null, this.candidateTran = null, this.candidateFaeSideAssets = null, this.candidateFaeSideEquities = null, this.data = new c("", 1, 1, 1, 1)
      }

      get MODULE_FAE() {
        return "fae"
      }

      get MODULE_ACCT() {
        return "acct"
      }

      get MODULE_BCHG() {
        return "bchg"
      }

      get MODULE_TRAN() {
        return "tran"
      }

      get MODULE_JRNL() {
        return "jrnl"
      }

      get ROW_SELECTED_CHAR() {
        return "&#xf111;"
      }

      get NAV_RIGHT_CHAR() {
        return String.fromCharCode(61524)
      }

      bind() {
        this.data.generateEmptyData()
      }

      selectAcct(e) {
        this.selectedAcct = e
      }

      selectAcctGoAcct(e) {
        this.selectedAcct = e, this.filteredAcctList = this.selectedAcct.parentFaeSide.acctList.filter(e => e instanceof r.a), this.goAcctModule(event)
      }

      selectBchg(e) {
        this.selectedBchg = e, this.selectedAcct = e.targetAcct, this.selectedTran = e.sourceTran
      }

      selectAcctBchgGoTran(e) {
        this.selectedBchg = e, this.selectedAcct = e.targetAcct, this.selectedTran = e.sourceTran, this.goTranModule(event)
      }

      selectTranBchgGoAcct(e) {
        this.selectedBchg = e, this.selectedAcct = e.targetAcct, this.selectedTran = e.sourceTran, this.filteredAcctList = this.selectedAcct.parentFaeSide.acctList.filter(e => e instanceof r.a), this.goAcctModule(event)
      }

      selectTran(e) {
        this.selectedTran = e
      }

      selectTranGoTran(e) {
        this.selectedTran = e, this.goTranModule(event)
      }

      addHovering(e) {
      }

      removeHovering(e) {
      }

      goFaeModule(e) {
        e.target.classList.toggle("aaNavModuleHover", !1), this.selectedModule = null, this.viewmodelFae.observeForScrollIntoView(), this.selectedModule = this.MODULE_FAE
      }

      goAcctModule(e) {
        this.selectedBchg && this.selectedBchg.targetAcct.id != this.selectedAcct.id && (this.selectedBchg = null), e.target.classList.toggle("aaNavModuleBtnHover", !1), this.filteredAcctList = this.selectedAcct.parentFaeSide.acctList.filter(e => e instanceof r.a), this.selectedModule = null, this.viewmodelAcct.observeForScrollIntoView(), this.selectedModule = this.MODULE_ACCT
      }

      goBchgModule(e) {
        e.target.classList.toggle("aaNavModuleBtnHover", !1), this.selectedModule = null, this.selectedModule = this.MODULE_BCHG
      }

      goTranModule(e) {
        this.selectedBchg && this.selectedBchg.sourceTran.id != this.selectedTran.id && (this.selectedBchg = null), e.target.classList.toggle("aaNavModuleBtnHover", !1), this.selectedModule = null, this.viewmodelTran.observeForScrollIntoView(), this.selectedModule = this.MODULE_TRAN
      }

      goJrnlModule(e) {
        e.target.classList.toggle("aaNavModuleHover", !1), this.selectedModule = null, this.viewmodelJrnl.observeForScrollIntoView(), this.selectedModule = this.MODULE_JRNL
      }

      goPrevAcct(e) {
        let t = this.filteredAcctList.findIndex(e => e.id == this.selectedAcct.id);
        this.selectedAcct = this.filteredAcctList[t - 1]
      }

      goNextAcct(e) {
        let t = this.filteredAcctList.findIndex(e => e.id == this.selectedAcct.id);
        this.selectedAcct = this.filteredAcctList[t + 1]
      }

      goPrevTran(e) {
        let t = this.data.jrnl.tranList.findIndex(e => e.id == this.selectedTran.id);
        this.selectedTran = this.data.jrnl.tranList[t - 1]
      }

      goNextTran(e) {
        let t = this.data.jrnl.tranList.findIndex(e => e.id == this.selectedTran.id);
        this.selectedTran = this.data.jrnl.tranList[t + 1]
      }
    }
  }, "app.css": function (e, t, n) {
    (e.exports = n(26)(!1)).push([e.i, 'body {\n  text-align: center;\n  color: #000;\n  /*background-color: #fff;*/\n  background-color: #ddd;\n  /*background-color: #d0d0d0;*/\n  /*background-color: #ccc;*/\n  /*background-color: #c0c0c0;*/\n  /*background-color: #ABABAB;*/\n  /*background-color: #c0c0c0;*/\n  font-family: "Times New Roman", Cambria, serif, Serif;\n  font-weight: bold;\n  font-size: medium;\n}\n\nh1, h2, h3 {\n  font-family: Arial, Helvetica, sans-serif, SansSerif;\n  font-weight: normal;\n}\n\nh1 {\n  letter-spacing: 2px;\n}\n\n.aaSansSerif {\n  font-family: Arial, Helvetica, sans-serif, SansSerif;\n  font-weight: normal;\n}\n\n.aaFontLabel {\n  font-family: Arial, Helvetica, sans-serif, SansSerif;\n  font-weight: normal;\n  font-size: small;\n  background-color: transparent;\n}\n.aaFontBold {\n  font-weight: bold;\n}\n.aaFontData {\n  color: #000;\n  font-family: "Times New Roman", Cambria, serif, Serif;\n  font-size: medium;\n  /*font-weight: normal;*/\n  font-weight: bold;\n}\n.aaIconBlack {\n  color: #000;\n}\n.aaIconRed {\n  color: #e00;\n}\n.aaIconGreen {\n  color: #0c0;\n}\n.aaIconBlue {\n  color: #00e;\n}\n\n.aaAppToolBar {\n  display: inline-block;\n  margin: 0;\n  padding: 0.25pc 0;\n  border-top: 1px solid #58b;\n  border-bottom: 1px solid #58b;\n  /*background-color: #EBF2F8;*/\n  /*background-color: #58b;*/\n  background-color: #fff;\n  color: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  white-space: nowrap;\n}\n\n.aaNavCell {\n  padding: 2px;\n}\n\n.aaNavBtn {\n  display: inline-block;\n  padding: 2px 4px;\n  border: 1px solid #58b;\n  border-radius: 0.25pc;\n}\n\n.aaNavBtnInert {\n  display: inline-block;\n  padding: 2px 4px;;\n  border: 1px solid #58b;\n  border-radius: 0.25pc;\n  border-style: dotted;\n}\n\n.aaNavBtn:hover {\n  background-color: #DBE6F0 !important;\n  cursor: pointer;\n}\n.aaNavBtn:active {\n  -webkit-box-shadow: 0px 0px 3px 1px #58b;\n  -moz-box-shadow: 0px 0px 3px 1px #58b;\n  box-shadow: 0px 0px 3px 1px #58b;\n  background-color: #fff !important;\n  cursor: pointer;\n}\n\n.aaNavBtnSelected {\n  /*border-style: none;*/\n  -webkit-box-shadow: 0px 0px 3px 1px #58b;\n  -moz-box-shadow: 0px 0px 3px 1px #58b;\n  box-shadow: 0px 0px 3px 1px #58b;\n  /*background-color: #ffffee;*/\n  background-color: #DBE6F0 !important;\n}\n\n.aaPanelContainer {\n  margin: 1pc;\n  display: block;\n  text-align: center;\n}\n\n.aaPanel {\n  display: inline-block;\n  border: 1px solid #58b;\n  border-radius: 0.5pc;\n  background-color: #f0f0f0;\n  background-clip: border-box;\n  overflow: hidden;\n  font-size: medium;\n}\n\n.aaPanelBoxShadow {\n  -webkit-box-shadow: 4px 8px 5px 0px rgba(0, 0, 0, 0.4);\n  -moz-box-shadow: 4px 8px 5px 0px rgba(0, 0, 0, 0.4);\n  box-shadow: 4px 8px 5px 0px rgba(0, 0, 0, 0.4);\n}\n.aaPanelHeader {\n  padding: 0.25pc;\n  /*color: #f0f0f0;*/\n  color: #fff;\n  text-shadow:3px 3px 0 #000;\n  background-color: #58b;\n  font-family: Arial, Helvetica, sans-serif, SansSerif;\n  font-weight: bold;\n  letter-spacing: 2px;\n}\n.aaPanelHeaderModule {\n  font-size: 150%;\n  letter-spacing: 3px;\n}\n.aaPanelToolBar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25pc 1pc;\n  white-space: nowrap;\n  background-color: #fff;\n  text-align: left;\n  border-bottom: 1px solid #999;\n}\n.aaPanelBody {\n  padding: 1pc;\n  white-space: nowrap;\n  background-color: #f0f0f0;\n}\n.aaForm {\n  /*margin-top: 1pc;*/\n  text-align: left;\n  font-size: medium;\n}\n.aaFormItemLabel {\n  padding: 0.30pc 0 0.20pc 0;\n  text-align: right;\n  /*vertical-align: middle;*/\n  font-family: Arial, Helvetica, sans-serif, SansSerif;\n  font-weight: normal;\n  font-size: small;\n}\n.aaFormItemData {\n  padding: 0.30pc 0.5pc 0.20pc 0.5pc;\n  font-size: medium;\n}\n.aaFormInputText {\n  padding: 1px 0.5pc;\n  background-color: #fff;\n  font-size: medium;\n  font-wieght: normal;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #ccc;\n  cursor: inherit; /* for when dragging row in mover */\n}\n.aaFormInputText:disabled {\n  border-style: solid;\n  background-color: transparent;\n  cursor: inherit; /* for when dragging row in mover */\n}\n.aaFormInputText:read-only {\n  background-color: transparent;\n  cursor: inherit; /* for when dragging row in mover */\n}\n.aaInlineBlock {\n  display: inline-block;\n}\n.aaInlineFlex {\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n.aaVisible {\n  visibility: visible;\n}\n.aaHidden {\n  visibility: hidden;\n}\n.aaEquSideContainer {\n  display: inline-block;\n  vertical-align: top;\n}\n.aaBtn {\n  display: inline-flex;\n  color: #333;\n  padding: 2px 0.25pc;\n  margin: 0 0.25pc;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: top;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 0.25pc;\n  background-clip: border-box;\n  background-color: transparent;\n  outline-width: 0;\n  font-family: Arial, Helvetica, sans-serif, SansSerif;\n  font-weight: normal;\n  font-size: medium;\n}\n.aaBtn:disabled {\n  border-style: none;\n  opacity: 0.3;\n}\n.aaBtn:hover {\n  border-color: #333;\n  background-color: #ffffff;\n  cursor: pointer;\n}\n.aaBtn:active {\n  color: #000;\n  background-color: #B6CBE2;\n  border-color: #000;\n}\n.aaBtnFinish {\n  display: inline-flex;\n  padding: 2px 0.25pc;\n  margin: 0 0.25pc;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: top;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid #B6CBE2;\n  border-radius: 0.25pc;\n  background-clip: border-box;\n  font-family: Arial, Helvetica, sans-serif, SansSerif;\n  font-weight: normal;\n  font-size: medium;\n  color: #fff;\n  background-color: #58b;\n}\n.aaBtnFinish:hover {\n  box-shadow: 0 0 0 3px #B6CBE2;\n}\n.aaBtnFinish:active {\n  color: #B6CBE2;\n}\n\n.aaDummyBtn {\n  display: inline-flex;\n  color: #333;\n  padding: 2px 0.25pc;\n  margin: 0 0.25pc;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: top;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 0.25pc;\n  background-clip: border-box;\n  background-color: transparent;\n  outline-width: 0;\n  font-family: Arial, Helvetica, sans-serif, SansSerif;\n  font-weight: normal;\n  font-size: small;\n}\n.aaToolBarDivider {\n  display: inline-block;\n  color: transparent;\n  padding: 0.25pc 0;\n  margin: 0 1pc;\n  width: 0;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border-left: 1px solid #999;\n  border-right: 1px solid #bbb;\n  background-color: transparent;\n  font-family: Arial, Helvetica, sans-serif, SansSerif;\n  font-weight: normal;\n  font-size: small;\n}\n.aaGridContainer {\n  margin-top: 1pc;\n  padding: 0;\n  border: 1px solid #58b;\n  border-radius: 0.25pc;\n  background-clip: border-box;\n  overflow: hidden;\n  background: #ccc;\n}\n.aaGridTitleBar {\n  padding: 0.25pc;\n  color: #000;\n  /*text-shadow: 1px 1px 0 #f0f0f0;*/\n  background-color: #b6cbe2;\n  border-bottom: 1px solid #999;\n  font-family: Arial, Helvetica, sans-serif, SansSerif;\n  font-size: medium;\n  font-weight: bold;\n  letter-spacing: 1px;\n  text-align: center;\n}\n.aaGridFooterBar {\n  background-color: #b6cbe2;\n  border-top: 1px solid #999;\n  padding-bottom: 0.5pc;\n  margin: 0;\n}\n.aaGridScrollableRows {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  white-space: nowrap;\n  background-color: #ccc;\n}\n.aaGridHeightInFaeSide {\n  height: 20pc;\n}\n.aaGridHeightInAcct {\n  height: 22pc;\n}\n.aaGridHeightInTran {\n  height: 18pc;\n}\n.aaGridHeightInJrnl {\n  height: 25pc;\n}\n.aaGridFooterTotals {\n  padding-top: 0.5pc;\n  border-top: 3px solid #ccc;\n}\n.aaBgColorToolbar {\n  background-color: #fff;\n}\n.aaRowBgColorData {\n  background-color: #f0f0f0;\n}\n.aaRowBgColorNonData {\n  background-color: #f0f0f0;\n}\n.aaRow {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; /* vertical axis */\n  margin: 0;\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1px solid #ccc;\n  cursor: default;\n}\n.aaRowColumnHeaders {\n  color: #fff;\n  text-shadow: 1px 1px 0 #000;\n  background-color: #bbb;\n  border-bottom: 1px solid #58b;\n /* -webkit-box-shadow: 0px 0px 3px 1px #666 inset;\n  -moz-box-shadow: 0px 0px 3px 1px #666 inset;\n  box-shadow: 0px 0px 3px 1px #666 inset;*/\n}\n.aaRowTotals {\n  position: relative;\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin: 0;\n  text-align: left;\n  white-space: nowrap;\n}\n.aaRowOps {\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; /* vertical axis */\n  white-space: nowrap;\n  overflow: hidden;\n  /*padding-top: 0.25pc;*/\n  align-self: stretch;\n}\n.aaRowOpsSelected {\n  background-color: #58B;\n}\n.aaRowOpsEmpty {\n  width: 1.5pc;\n}\n.aaRowData {\n  display: inline-flex;\n  align-items: center; /* vertical axis */\n  align-self: stretch;\n  margin: 0;\n  text-align: left;\n  white-space: nowrap;\n  cursor: default;\n  }\n.aaRowDataHover {\n  cursor: default;\n  background-color: #DBE6F0 !important;\n}\n.aaRowDataSelected {\n  -webkit-box-shadow: 0 0 0 2px #58b inset;\n  -moz-box-shadow: 0 0 0 2px #58b inset;\n  box-shadow: 0 0 0 2px #58b inset;\n}\n.aaCellId {\n  display: inline-flex;\n  width: 3pc;\n  text-align: left;\n}\n.aaCellRowOps {\n  display: inline-flex;\n  /*vertical-align: middle;*/\n  align-items: center; /* vertical axis */\n  white-space: nowrap;\n  overflow: hidden;\n  width: 2.5pc;\n  text-align: center;\n}\n.aaCellRowOpsFiller {\n  display: inline-flex;\n  /*padding: 0 0.35pc;*/\n  /*vertical-align: top;*/\n  align-items: center; /* vertical axis */\n  width: 2.5pc;\n  text-align: center;\n}\n.aaCellRowSelected {\n  display: inline-flex;\n  width: 1.5pc;\n  text-align: center;\n  font-weight: bold;\n}\n.aaCellBorder {\n  border: 0.05pc solid #999;\n}\n.aaCellInGrid {\n  margin: 4px;\n}\n.aaBchgCells {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0.4pc;\n}\n.aaBchgCellsRow {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n}\n.aaBchgCellsRowSeparation {\n  margin-bottom: 0.4em; /* space between rows */\n}\n.aaCell {\n  display: inline-block;\n  padding: 0.30pc 0.5pc 0.20pc 0.5pc;\n  vertical-align: top;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.aaCellTextEOL {\n  color: #666;\n  font-size: small;\n}\n.aaCellAcctTitle {\n  width: 25pc;\n  text-align: left;\n}\n.aaMissingAcctTitle {\n  color: red;\n  font-weight: normal;\n}\n.aaCellAnnoTitle {\n  width: 25pc;\n  text-align: left;\n  font-family: Arial, Helvetica, sans-serif, SansSerif;\n  text-decoration: underline;\n}\n.aaCellTranDate {\n  min-width: 7pc;\n  text-align: center;\n}\n.aaCellBchgDesc {\n  width: 25pc;\n  text-align: left;\n}\ninput::placeholder {\n  color: #58b;\n  /*font-weight: normal;*/\n  font-style: italic;\n}\n.aaCellBchgAmt {\n  text-align: right;\n  width: 7pc;\n}\n.aaCellWrapper {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: stretch;\n}\n.aaCellHelper {\n  display: inline-flex;\n  flex-direction: row;\n  align-self: stretch;\n  align-items: center;\n  color: #000;\n  background-color: #ddd;\n  border: 1px solid #999;\n  border-left-style: none;\n}\n.aaHelperBtn {\n  padding: 2px;\n  margin: 0 2px;\n}\n.aaCellErrorIndicater {\n  /*color: red;*/\n  border-color: red;\n  -webkit-box-shadow: 0px 0px 0 2px red inset;\n  -moz-box-shadow: 0px 0px 0 2px red inset;\n  box-shadow: 0px 0px 0 2px red inset;\n  background-color: #fdd;\n}\n.aaCellBchgBal {\n  width: 7pc;\n  text-align: right;\n}\n\n.aaCellEquSide {\n  width: 8pc;\n  text-align: center;\n}\n\n.aaInputText {\n  background-color: inherit;\n  padding: 0.25pc;\n  margin: 0.25pc;\n}\n\n.aaInputText:disabled {\n  border-color: transparent;\n}\n\n.aaHasFocus {\n  outline: 2px solid #58b;\n  outline-radius: 0.25pc;\n}\n.aaVerticalGridline {\n  display: inline-block;\n  width: 1px;\n  align-self: stretch;\n  background-color: #ccc;\n  overflow: hidden;\n}\n.aaVerticalGridlineColHeaders {\n  background-color: #999;\n}\n.aaVerticalGridlineSpacer {\n  display: inline-block;\n  width: 1px;\n  align-self: stretch;\n  background-color: transparent;\n  overflow: hidden;\n}\n.aaBchgAmtComputed {\n  border-color: transparent;\n  background-color: inherit;\n}\n.aaModal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */\n}\n.aaModalContent {\n  border: 1px solid #58b;\n  border-radius: 0.25pc;\n  background-clip: border-box;\n  overflow: hidden;\n  position: absolute;\n}\n.aaDragRow {\n  /* margin: 2pc;  */\n  /* padding: 2pc;  */\n  /* border: 1px solid black;  */\n  text-align: left;\n  width: 20pc;\n  margin: 0;\n  padding: 0.25pc 0.5pc;\n  border: 1px solid black;\n  cursor: default;\n}\n.aaDragging {\n  cursor: n-resize;\n /* -webkit-box-shadow: 0px 0px 3px 1px #58b inset;\n  -moz-box-shadow: 0px 0px 3px 1px #58b inset;\n  box-shadow: 0 0 3px 1px #58b inset;*/\n  -webkit-box-shadow: 0px 0px 0px 2px #58b inset;\n  -moz-box-shadow: 0px 0px 0px 2px #58b inset;\n  box-shadow: 0 0 0px 2px #58b inset;\n  /*background-color: #C8D9E9 !important;*/\n  background-color: #EDF2F7 !important;\n}\n.aaPointerEventsNone {\n  pointer-events: none;\n}\n.aaMostRecentlySelectedRow {\n  -webkit-box-shadow: 0px 0px 3px 1px #58b inset;\n  -moz-box-shadow: 0px 0px 3px 1px #58b inset;\n  box-shadow: 0 0 3px 1px #58b inset;\n}\n', ""])
  }, "app.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="app.css"></require>\n  <require from="au-components/au-module-fae"></require>\n  <require from="au-components/au-module-acct"></require>\n  <require from="au-components/au-module-bchg"></require>\n  <require from="au-components/au-module-tran"></require>\n  <require from="au-components/au-module-jrnl"></require>\n  <require from="au-components/au-popup-alert"></require>\n  <require from="au-components/au-popup-acct-mover"></require>\n  <require from="au-components/au-popup-acct-picker"></require>\n  <require from="au-components/au-popup-bchg-mover"></require>\n  <require from="au-views/au-icon-nav-up.html"></require>\n  <require from="au-views/au-icon-nav-down.html"></require>\n  <require from="au-views/au-icon-map-marker.html"></require>\n  <require from="au-views/au-icon-map-marker-candidate.html"></require>\n  <style>\n    .aaAppTitleBar {\n      padding: 0.25pc;\n      color: #000;\n      background-color: #ddd;\n      font-family: Arial, Helvetica, sans-serif, SansSerif;\n      font-weight: normal;\n      letter-spacing: 2px;\n      font-size: 150%;\n      align-self: stretch;\n      border-top: 1px solid #58b;\n      border-bottom: 1px solid #58b;\n    }\n    .aaNavRibbon {\n      display: inline-flex;\n      flex-direction: row;\n      align-self: stretch;\n      justify-content: center;\n      background-color: #fff;\n      padding: 0.5pc;\n      border-bottom: 1px solid #58b;\n    }\n    .aaNavigator {\n      display: inline-flex;\n      flex-direction: column;\n      align-items: center;\n      align-self: stretch;\n      /*background-color: #f8f8f8;*/\n      /*margin-top: 0.5pc;*/\n      background-color: #fff;\n      padding: 5px;\n      font-family: Arial, Helvetica, sans-serif, SansSerif;\n      font-size: medium;\n      font-weight: normal;\n      /*-webkit-box-shadow: 4px 8px 5px 0px rgba(0, 0, 0, 0.2);\n      -moz-box-shadow: 4px 8px 5px 0px rgba(0, 0, 0, 0.2);\n      box-shadow: 4px 8px 5px 0px rgba(0, 0, 0, 0.2);*/\n    }\n\n    .aaNavMapHeader {\n      display: inline-flex;\n      flex-direction: row;\n      align-items: center;\n      letter-spacing: 2px;\n      font-weight: bold;\n    }\n\n    .aaNavMapBody {\n      display: inline-flex;\n      flex-direction: row;\n      align-items: flex-start;\n    }\n\n    .aaNavModuleColumn {\n      display: inline-flex;\n      flex-direction: column;\n      align-items: center;\n      margin: 0 5px;\n    }\n\n    .aaNavMapCell {\n      display: inline-flex;\n      flex-direction: row;\n      align-items: center;\n      height: 25px;\n      letter-spacing: 1px;\n    }\n\n    .aaNavMapBtn {\n      padding: 0 5px;\n      letter-spacing: 1px;\n      border: 1px solid black;\n      border-radius: 0.25pc;\n      background-color: #fff;\n    }\n\n    .aaNavMapBtn:disabled {\n      border-style: dotted;\n      color: #aaa;\n      /*background-color: #fff;*/\n      background-color: transparent;\n    }\n\n    .aaNavMapBtnHover {\n      /*outline: 2px solid #5588BB;*/\n      /*outline-radius: 0.25pc;*/\n      /*-webkit-box-shadow: 0 0 0 1px #58b;\n      -moz-box-shadow: 0 0 0 1px #58b;\n      box-shadow: 0 0 0 1px #58b;*/\n      background-color: #EDF2F7;\n    }\n\n    .aaNavMapBtnSelected {\n      /*outline: 2px solid #5588BB;*/\n      /*outline-radius: 0.25pc;*/\n      -webkit-box-shadow: 0 0 0 2px #58b;\n      -moz-box-shadow: 0 0 0 2px #58b;\n      box-shadow: 0 0 0 2px #58b;\n      padding: 0 5px;\n      color: #000;\n      background-color: #EDF2F7;\n      letter-spacing: 1px;\n      /*text-shadow: 1px 1px 0 #000;*/\n      /*background-color: #5588BB;*/\n      border-color: #5588BB;\n      /*font-weight: bold;*/\n      /*-webkit-box-shadow: 0px 0px 3px 1px #58b;*/\n      /*-moz-box-shadow: 0px 0px 3px 1px #58b;*/\n      /*box-shadow: 0px 0px 2px 2px #58b;*/\n    }\n    .aaNavMapArrow {\n      display: inline-flex;\n      color: #333;\n      padding: 2px 0.25pc;\n      margin: 0 0.25pc;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: top;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      background-image: none;\n      border: 1px solid transparent;\n      border-radius: 0.25pc;\n      background-clip: border-box;\n      background-color: transparent;\n      outline-width: 0;\n      font-family: Arial, Helvetica, sans-serif, SansSerif;\n      font-weight: normal;\n      font-size: medium;\n    }\n    .aaNavMapArrow:hover {\n      border-color: #333;\n      cursor: pointer;\n    }\n  </style>\n  <div style="display: flex; flex-direction: column; align-items: center;">\n    <div class="aaAppTitleBar">\n      ${data.entityName}\n    </div>\n    <div class="aaNavRibbon ${!viewNavMode ? \'aaHidden\' : \'\'}">\n      <span class="aaToolBarDivider">.</span>\n      <div class="aaNavigator">\n        <div class="aaNavMapHeader">Navigation map</div>\n        <div class="aaNavMapBody">\n          <div class="aaNavModuleColumn">\n            <div class="aaNavMapCell">\n              <i class="fas fa-map-marker-alt"\n                 css="color: ${selectedModule == MODULE_FAE ? \'#EA4335\' : \'#bbb\'};\n             font-size: large;\n             margin-right: 5px"></i>\n              <button type="button"\n                      class="aaNavMapBtn ${selectedModule == MODULE_FAE ? \'aaNavMapBtnSelected\' : \'\'}"\n                      mouseenter.trigger="addHovering($event)"\n                      mouseleave.trigger="removeHovering($event)"\n                      click.trigger="goFaeModule($event)"\n                      element.ref="navBtnFae">\n                Assets = Equities\n              </button>\n            </div>\n          </div>\n          <div class="aaNavModuleColumn">\n            <div class="aaNavMapCell">\n              <button type="button"\n                      class="aaNavMapArrow ${selectedModule != MODULE_ACCT ||\n                                   selectedAcct.id == filteredAcctList[0].id ?\n                                   \'aaHidden\' : \'\'}"\n                      click.trigger="goPrevAcct($event)">\n                <au-icon-nav-up></au-icon-nav-up>\n              </button>\n            </div>\n            <div class="aaNavMapCell">\n              <i class="fas fa-map-marker-alt ${!selectedAcct ? \'aaHidden\' : \'\'}"\n                 css="color: ${selectedModule == MODULE_ACCT ? \'#EA4335\' : \'#bbb\'};\n             font-size: large;\n             margin-right: 5px"></i>\n              <button type="button"\n                      class="aaNavMapBtn ${selectedModule == MODULE_ACCT ? \'aaNavMapBtnSelected\' : \'\'}"\n                      disabled.bind="!selectedAcct"\n                      mouseenter.trigger="addHovering($event)"\n                      mouseleave.trigger="removeHovering($event)"\n                      click.trigger="goAcctModule($event)"\n                      element.ref="navBtnAcct">\n                Account\n              </button>\n            </div>\n            <div class="aaNavMapCell">\n              <button type="button"\n                      class="aaNavMapArrow ${selectedModule != MODULE_ACCT ||\n                                   selectedAcct.id == filteredAcctList[filteredAcctList.length - 1].id ?\n                                   \'aaHidden\' : \'\'}"\n                      click.trigger="goNextAcct($event)">\n                <au-icon-nav-down></au-icon-nav-down>\n              </button>\n            </div>\n          </div>\n          <div class="aaNavModuleColumn">\n            <div class="aaNavMapCell">&nbsp;</div>\n            <div class="aaNavMapCell">&nbsp;</div>\n            <div class="aaNavMapCell">\n              <i class="fas fa-map-marker-alt ${!selectedBchg ? \'aaHidden\' : \'\'}"\n                 css="color: ${selectedModule == MODULE_BCHG ? \'#EA4335\' : \'#bbb\'};\n             font-size: large;\n             margin-right: 5px"></i>\n              <button type="button"\n                      class="aaNavMapBtn ${selectedModule == MODULE_BCHG ? \'aaNavMapBtnSelected\' : \'\'}"\n                      disabled.bind="!selectedBchg"\n                      mouseenter.trigger="addHovering($event)"\n                      mouseleave.trigger="removeHovering($event)"\n                      click.trigger="goBchgModule($event)"\n                      element.ref="navBtnBchg">\n                Account balance change\n              </button>\n            </div>\n          </div>\n          <div class="aaNavModuleColumn">\n            <div class="aaNavMapCell">\n              <button type="button"\n                      class="aaNavMapArrow ${selectedModule != MODULE_TRAN ||\n                                   selectedTran.id == data.jrnl.tranList[0].id ?\n                                   \'aaHidden\' : \'\'}"\n                      click.trigger="goPrevTran($event)">\n                <au-icon-nav-up></au-icon-nav-up>\n              </button>\n            </div>\n            <div class="aaNavMapCell">\n              <i class="fas fa-map-marker-alt ${!selectedTran ? \'aaHidden\' : \'\'}"\n                 css="color: ${selectedModule == MODULE_TRAN ? \'#EA4335\' : \'#bbb\'};\n             font-size: large;\n             margin-right: 5px"></i>\n              <button type="button"\n                      class="aaNavMapBtn ${selectedModule == MODULE_TRAN ? \'aaNavMapBtnSelected\' : \'\'}"\n                      disabled.bind="!selectedTran"\n                      mouseenter.trigger="addHovering($event)"\n                      mouseleave.trigger="removeHovering($event)"\n                      click.trigger="goTranModule($event)"\n                      element.ref="navBtnTran">\n                Transaction\n              </button>\n            </div>\n            <div class="aaNavMapCell">\n              <button type="button"\n                      class="aaNavMapArrow ${selectedModule != MODULE_TRAN ||\n                                   selectedTran.id == data.jrnl.tranList[data.jrnl.tranList.length - 1].id ?\n                                   \'aaHidden\' : \'\'}"\n                      click.trigger="goNextTran($event)">\n                <au-icon-nav-down></au-icon-nav-down>\n              </button>\n            </div>\n          </div>\n          <div class="aaNavModuleColumn">\n            <div class="aaNavMapCell">\n              <i class="fas fa-map-marker-alt"\n                 css="color: ${selectedModule == MODULE_JRNL ? \'#EA4335\' : \'#bbb\'};\n             font-size: large;\n             margin-right: 5px"></i>\n              <button type="button"\n                      class="aaNavMapBtn ${selectedModule == MODULE_JRNL ? \'aaNavMapBtnSelected\' : \'\'}"\n                      mouseenter.trigger="addHovering($event)"\n                      mouseleave.trigger="removeHovering($event)"\n                      click.trigger="goJrnlModule($event)"\n                      element.ref="navBtnJrnl">\n                Transaction journal\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <span class="aaToolBarDivider">.</span>\n    </div>\n    <div class="aaPanelContainer">\n      <au-module-fae view-model.ref="viewmodelFae"></au-module-fae>\n      <au-module-acct view-model.ref="viewmodelAcct"></au-module-acct>\n      <au-module-bchg view-model.ref="viewmodelBchg"></au-module-bchg>\n      <au-module-tran view-model.ref="viewmodelTran"></au-module-tran>\n      <au-module-jrnl view-model.ref="viewmodelJrnl"></au-module-jrnl>\n    </div>\n  </div>\n  <au-popup-alert view-model.ref="viewmodelPopupAlert"></au-popup-alert>\n  <au-popup-acct-mover view-model.ref="viewmodelPopupAcctMover"></au-popup-acct-mover>\n  <au-popup-acct-picker view-model.ref="viewmodelPopupAcctPicker"></au-popup-acct-picker>\n  <au-popup-bchg-mover view-model.ref="viewmodelPopupBchgMover"></au-popup-bchg-mover>\n</template>\n'
  }, "au-attributes/au-fae-side-data": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuFaeSideData", (function () {
      return a
    }));
    var i = n("aurelia-framework"), r = n("au-components/au-fae-side"), o = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let a = class {
      constructor(e) {
        this.auFaeSide = e
      }

      bind() {
        this.auFaeSide.faeSide = this.value
      }
    };
    a = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }([Object(i.c)("au-fae-side-data"), Object(i.e)(r.AuFaeSide), o("design:paramtypes", [r.AuFaeSide])], a)
  }, "au-components/au-fae-side": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuFaeSide", (function () {
      return u
    }));
    var i = n("aurelia-framework"), r = n(14), o = n(5), a = n("app"), s = n("au-components/au-module-fae"),
      c = function (e, t, n, i) {
        var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      }, l = function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      };
    let u = class {
      constructor(e, t) {
        this.Acct = o.a, this.Annotation = o.b, this.app = e, this.auModuleFae = t
      }

      onRowEnter(e, t) {
        e.target.children[2].classList.toggle("aaRowDataHover", !0)
      }

      onRowLeave(e, t) {
        e.target.children[2].classList.toggle("aaRowDataHover", !1)
      }

      onTitleFocus(e, t) {
        this.app.candidateSelectedAcct = t
      }

      onRowOpsOpen(e, t) {
        this.rowOpsBoundingClientRect = e.target.parentElement.getBoundingClientRect(), this.rowOpsMenuModal.style.display = "block"
      }

      onRowOpsCancel(e) {
        e.target == this.rowOpsMenuModal && (this.rowOpsMenuModal.style.display = "none")
      }

      acctNew(e, t) {
        let n, i;
        n = t ? t.intraSideIndex : this.faeSide.acctList.length, i = new o.a(`acct${this.app.data.nextAcctId}`, this.faeSide, 0, "", 1), this.faeSide.acctList.splice(n, 0, i), this.faeSide.reindexAcctList(), this.app.candidateSelectedAcct = i, this.auModuleFae.observeForSetInputFocus()
      }

      annotationNew(e, t) {
        let n, i;
        n = t ? t.intraSideIndex : this.faeSide.acctList.length, i = new o.b(`anno${this.app.data.nextAcctId}`, this.faeSide, 0, ""), this.faeSide.acctList.splice(n, 0, i), this.faeSide.reindexAcctList(), this.app.candidateSelectedAcct = i, this.auModuleFae.observeForSetInputFocus()
      }

      listItemDelete(e, t) {
        let n = t.intraSideIndex;
        this.faeSide.acctList.splice(n, 1), this.faeSide.reindexAcctList()
      }
    };
    c([i.b, l("design:type", r.a)], u.prototype, "faeSide", void 0), u = c([Object(i.d)("au-fae-side"), Object(i.e)(a.App, s.AuModuleFae), l("design:paramtypes", [Object, Object])], u)
  }, "au-components/au-fae-side-picker": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuFaeSidePicker", (function () {
      return u
    }));
    var i = n("aurelia-framework"), r = n(14), o = n(5), a = n("app"), s = n("au-components/au-popup-acct-picker"),
      c = function (e, t, n, i) {
        var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      }, l = function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      };
    let u = class {
      constructor(e, t) {
        this.Acct = o.a, this.Annotation = o.b, this.app = e, this.auPopupAcctPicker = t
      }

      onRowEnter(e, t) {
        e.target.children[0].children[0].classList.toggle("aaRowDataHover", !0)
      }

      onRowLeave(e, t) {
        e.target.children[0].children[0].classList.toggle("aaRowDataHover", !1)
      }
    };
    c([i.b, l("design:type", r.a)], u.prototype, "faeSide", void 0), u = c([Object(i.d)("au-fae-side-picker"), Object(i.e)(a.App, s.AuPopupAcctPicker), l("design:paramtypes", [Object, Object])], u)
  }, "au-components/au-fae-side-picker.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-converters/au-equation-side-converter"></require>\n\n  <h1 css="text-align: ${faeSide.id == \'Assets\' ? \'right\' : \'left\'};">\n    ${faeSide.id}\n  </h1>\n  <div class="aaGridContainer">\n    <div class="aaGridTitleBar" style="font-size: larger;">${faeSide.id | auEquationSideConverter:true: false}\n      accounts\n    </div>\n    <div class="aaGridScrollableRows aaGridHeightInFaeSide">\n      <template repeat.for="listItem of faeSide.acctList">\n        <div id="${listItem.id}"\n             class="aaRow">\n          <template if.bind="listItem.isAcct()">\n            <div class="aaRowOps"\n                 style="background-color: #fff; padding: 2px;">\n              <button type="button"\n                      class="aaBtn aaCellAcctTitle"\n                      click.trigger="auPopupAcctPicker.picked(listItem)">\n                ${listItem.title}\n              </button>\n            </div>\n          </template>\n          <template if.bind="listItem.isAnnotation()">\n            <div class="aaRowops aaRowBgColorData"\n                 style="padding: 2px;">\n              <span class="aaDummyBtn aaCellAnnoTitle">\n                ${listItem.annoText}\n              </span>\n            </div>\n          </template>\n          <div class="aaVerticalGridline"></div>\n        </div>\n      </template>\n      <template if.bind="faeSide.acctList.length == 0">\n        <div class="aaRowOps aaHidden">\n          <button type="button"\n                  class="aaBtn aaCellAcctTitle">\n            x\n          </button>\n        </div>\n      </template>\n\n    </div>\n    <div class="aaGridFooterBar"></div>\n  </div>\n  \x3c!--\n  Following is the coding for a row that shows the total of\n  all account balances. It is coded with invisible menu and nav buttons\n  as horizontal space holders to result in proper horizontal positioning\n  of the "Total" label amd the total amt.\n  --\x3e\n  </div>\n</template>\n'
  }, "au-components/au-fae-side.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-views/au-icon-edit.html"></require>\n  <require from="au-views/au-icon-row-mover.html"></require>\n  <require from="au-views/au-icon-new.html"></require>\n  <require from="au-views/au-icon-delete.html"></require>\n  <require from="au-views/au-text-ellipsis.html"></require>\n  <require from="au-converters/au-currency-converter"></require>\n  <require from="au-converters/au-equation-side-converter"></require>\n  <require from="au-components/au-popup-acct-mover"></require>\n\n  <h1 css="margin: 0; text-align: ${faeSide.id == \'Assets\' ? \'right\' : \'left\'};">\n    ${faeSide.id}\n  </h1>\n  <div class="aaGridContainer">\n    <div class="aaGridTitleBar" style="font-size: larger;">${faeSide.id | auEquationSideConverter:true: false}\n      accounts\n    </div>\n    <template if.bind="app.viewNavMode">\n      <div class="aaRow aaRowColumnHeaders aaFontLabel aaFontBold">\n        <div class="aaRowOps aaRowOpsEmpty aaHidden">\n        </div>\n        <div class="aaVerticalGridline" style="background-color: #fff;" element.ref="popupLeft"></div>\n        <div class="aaRowData">\n          <div class="aaCell aaCellAcctTitle">Title</div>\n          <div class="aaVerticalGridline" style="background-color: #fff;"></div>\n          <div class="aaCell aaCellBchgBal">Balance</div>\n          <div class="aaVerticalGridline" style="background-color: #fff;"></div>\n        </div>\n      </div>\n      <div class="aaGridScrollableRows aaGridHeightInFaeSide">\n        <template repeat.for="listItem of faeSide.acctList">\n          <template if.bind="listItem.isAcct()">\n            <div class="aaRow"\n                 id="${listItem.id}"\n                 mouseenter.trigger="onRowEnter($event, listItem)"\n                 mouseleave.trigger="onRowLeave($event, listItem)"\n                 click.trigger="app.selectAcct(listItem)"\n                 dblclick.trigger="app.selectAcctGoAcct(listItem)">\n              <div class="aaRowOps aaRowOpsEmpty aaBgColorToolbar ${app.selectedAcct.id == listItem.id ? \'aaRowOpsSelected\' : \'\'}">\n              </div>\n              <div class="aaVerticalGridline"></div>\n              <div class="aaRowData aaRowBgColorData ${app.selectedAcct.id == listItem.id ? \'aaRowDataSelected\' : \'\'}">\n                <span class="aaCell aaCellAcctTitle">${listItem.title}</span>\n                <div class="aaVerticalGridline"></div>\n                <span class="aaCell aaCellBchgBal">${listItem.endingBalance | auCurrencyConverter}</span>\n              </div>\n              <div class="aaVerticalGridline"></div>\n            </div>\n          </template>\n          <template if.bind="listItem.isAnnotation()">\n            <div class="aaRow"\n                 id="${listItem.id}"\n                 mouseenter.trigger="onRowEnter($event, listItem)"\n                 mouseleave.trigger="onRowLeave($event, listItem)">\n              <div class="aaRowOps aaRowOpsEmpty aaBgColorToolbar ${app.selectedBchg.id == listItem.id ? \'aaRowOpsSelected\' : \'\'}">\n              </div>\n              <div class="aaVerticalGridline"></div>\n              <div class="aaRowData aaRowBgColorData">\n                <span class="aaCell aaCellAnnoTitle ${listItem.annoText.length == 0 ? \'aaHidden\' : \'\'}">\n                  ${listItem.annoText.length == 0 ? \'x\' : listItem.annoText}\n                </span>\n                <div class="aaVerticalGridline"></div>\n                <span class="aaCell aaCellBchgBal"></span>\n              </div>\n              <div class="aaVerticalGridline"></div>\n            </div>\n          </template>\n        </template>\n        <template if.bind="faeSide.acctList.length == 0">\n          <div class="aaRow aaHidden">\n            <div class="aaRowOps aaRowOpsEmpty aaBgColorToolbar">\n            </div>\n            <div class="aaVerticalGridline"></div>\n            <div class="aaRowData aaRowBgColorData">\n              <span class="aaCell aaCellAcctTitle">x</span>\n              <div class="aaVerticalGridline"></div>\n              <span class="aaCell aaCellBchgBal">0</span>\n            </div>\n            <div class="aaVerticalGridline"></div>\n          </div>\n        </template>\n      </div>\n      <div class="aaGridFooterBar"></div>\n    </template>\n    <template if.bind="!app.viewNavMode">\n      <div class="aaPanelToolBar" element.ref="popupTop">\n        <button class="aaBtn"\n                type="button"\n                click.trigger="app.viewmodelPopupAcctMover.open(popupTop, popupLeft, faeSide)">\n          <au-icon-row-mover></au-icon-row-mover>\n          &nbsp;Move rows\n          <au-text-ellipsis></au-text-ellipsis>\n        </button>\n      </div>\n      <div class="aaRow aaRowColumnHeaders aaFontLabel aaFontBold">\n        <div class="aaRowOps aaHidden">\n          <span class="aaBtn">\n                      <au-icon-new></au-icon-new>\n                    </span>\n          <span class="aaBtn">\n                      <au-icon-new></au-icon-new>\n                    </span>\n          <span class="aaBtn">\n                      <au-icon-delete></au-icon-delete>\n                    </span>\n        </div>\n        <div class="aaVerticalGridline" style="background-color: #fff;" element.ref="popupLeft"></div>\n        <div class="aaRowData">\n          <div class="aaCell aaCellAcctTitle aaCellInGrid">Title</div>\n          <div class="aaVerticalGridline" style="background-color: #fff;"></div>\n          <div class="aaCell aaCellBchgBal">Balance</div>\n          <div class="aaVerticalGridline" style="background-color: #fff;"></div>\n        </div>\n      </div>\n      <div class="aaGridScrollableRows aaGridHeightInFaeSide">\n        <template repeat.for="listItem of faeSide.acctList">\n          \x3c!--\n          NOTE: This datagrid is NOT in navigating mode, so the following row element must NOT have\n\n                       click.trigger="app.selectAcct(listItem)"\n\n                as usual for in the navigating mode. While editing I use candidateSelectedAcct,\n                and if the user cancels editing, I need selectedAcct to have its saved value to restore from.\n                If the above click.trigger were included in the row element and user clicks on a row,\n                that would overwrite the saved value of selectedAcct.\n          --\x3e\n          <div class="aaRow"\n               id="${listItem.id}"\n               mouseenter.trigger="onRowEnter($event, listItem)"\n               mouseleave.trigger="onRowLeave($event, listItem)">\n            <template if.bind="listItem.isAcct()">\n              <div class="aaRowOps aaBgColorToolbar aaFontLabel">\n                <span class="aaBtn"\n                      title="Insert new account row..."\n                      click.trigger="acctNew($event, listItem)">\n                  <au-icon-new></au-icon-new>\n                </span>\n                <span class="aaBtn"\n                      title="Insert new annotation row..."\n                      click.trigger="annotationNew($event, listItem)">\n                  <au-icon-new></au-icon-new>\n                </span>\n                <span class="aaBtn ${listItem.bchgList.length > 0 ? \'aaHidden\' : \'\'}"\n                      title="Delete row..."\n                      click.trigger="listItemDelete($event, listItem)">\n                  <au-icon-delete></au-icon-delete>\n                </span>\n              </div>\n              <div class="aaVerticalGridline"></div>\n              <div class="aaRowData aaRowBgColorData">\n                <input class="aaFormInputText aaCellAcctTitle aaCellInGrid"\n                       id="${listItem.id}-title"\n                       type="text"\n                       placeholder="Account title"\n                       focus.trigger="onTitleFocus($event, listItem)"\n                       value.two-way="listItem.title">\n                <div class="aaVerticalGridline"></div>\n                <span class="aaCell aaCellBchgBal">${listItem.endingBalance | auCurrencyConverter}</span>\n              </div>\n              <div class="aaVerticalGridline"></div>\n            </template>\n            <template if.bind="listItem.isAnnotation()">\n              <div class="aaRowOps aaBgColorToolbar aaFontLabel">\n                <span class="aaBtn"\n                      title="Insert new account row..."\n                      click.trigger="acctNew($event, listItem)">\n                  <au-icon-new></au-icon-new>\n                </span>\n                <span class="aaBtn"\n                      title="Insert new annotation row..."\n                      click.trigger="annotationNew($event, listItem)">\n                  <au-icon-new></au-icon-new>\n                </span>\n                <span class="aaBtn"\n                      title="Delete row..."\n                      click.trigger="listItemDelete($event, listItem)">\n                  <au-icon-delete></au-icon-delete>\n                </span>\n              </div>\n              <div class="aaVerticalGridline"></div>\n              <div class="aaRowData aaRowBgColorData">\n                <input class="aaFormInputText aaCellAnnoTitle aaCellInGrid"\n                       id="${listItem.id}-title"\n                       type="text"\n                       placeholder="Annotation text"\n                       focus.trigger="onTitleFocus($event, listItem)"\n                       value.two-way="listItem.annoText">\n                <div class="aaVerticalGridline"></div>\n                <span class="aaCell aaCellBchgBal"></span>\n              </div>\n              <div class="aaVerticalGridline"></div>\n            </template>\n          </div>\n        </template>\n        \x3c!-- End of list row --\x3e\n        <div class="aaRow"\n             mouseenter.trigger="onRowEnter($event, null)"\n             mouseleave.trigger="onRowLeave($event, null)">\n          <div class="aaRowOps aaBgColorToolbar aaFontLabel">\n              <span class="aaBtn"\n                    title="Insert new account row"\n                    click.trigger="acctNew($event, null)">\n                <au-icon-new></au-icon-new>\n              </span>\n            <span class="aaBtn"\n                  title="Insert new annotation row"\n                  click.trigger="annotationNew($event, null)">\n              <au-icon-new></au-icon-new>\n            </span>\n            <span class="aaBtn aaHidden">\n              <au-icon-delete></au-icon-delete>\n            </span>\n          </div>\n          <div class="aaVerticalGridline"></div>\n          <div class="aaRowData aaHidden">\n            <span class="aaCell aaCellAcctTitle aaCellInGrid">x</span>\n            <div class="aaVerticalGridline"></div>\n            <span class="aaCell aaCellBchgBal">0</span>\n          </div>\n          <div class="aaVerticalGridline"></div>\n        </div>\n        <template if.bind="faeSide.acctList.length == 0">\n          <div class="aaRow aaHidden">\n            <div class="aaRowOps aaRowOpsEmpty">\n            </div>\n            <div class="aaVerticalGridline"></div>\n            <div class="aaRowData aaRowBgColorData">\n              <span class="aaCell aaCellAcctTitle aaCellInGrid">x</span>\n              <div class="aaVerticalGridline"></div>\n              <span class="aaCell aaCellBchgBal">0</span>\n            </div>\n            <div class="aaVerticalGridline"></div>\n          </div>\n        </template>\n      </div>\n      <div class="aaGridFooterBar"></div>\n    </template>\n  </div>\n  \x3c!--<div class="aaGridTotals">--\x3e\n  <div class="aaGridContainer" style="border-color: transparent; background-color: transparent;">\n    <div class="aaRow" style="border-bottom-color: transparent; background-color: transparent;">\n      <template if.bind="app.viewNavMode">\n        <div class="aaRowOps aaRowOpsEmpty aaHidden">\n        </div>\n      </template>\n      <template if.bind="!app.viewNavMode">\n        <div class="aaRowOps aaHidden aaFontLabel">\n          <span class="aaBtn"\n                type="button">\n            <au-icon-new></au-icon-new>\n          </span>\n          <span class="aaBtn"\n                type="button">\n            <au-icon-new></au-icon-new>\n          </span>\n          <span class="aaBtn"\n                type="button">\n            <au-icon-delete></au-icon-delete>\n          </span>\n        </div>\n      </template>\n      <div class="aaVerticalGridline aaHidden"></div>\n      <div class="aaRowData">\n        <span class="aaCell aaCellAcctTitle" style="text-align: right;"><span\n          class="aaFontLabel">Total:</span></span>\n        <div class="aaVerticalGridline aaHidden"></div>\n        <span class="aaCell aaCellBchgBal">${faeSide.listTotal | auCurrencyConverter}</span>\n      </div>\n      <div class="aaVerticalGridline aaHidden"></div>\n    </div>\n  </div>\n\n  <div element.ref="rowOpsMenuModal" class="aaModal"\n       style="background: transparent;"\n       click.delegate="onRowOpsCancel($event)">\n    <div element.ref="rowOpsMenuContent"\n         css="display: inline-block;\n         text-align: left;\n         position: fixed;\n         top: ${rowOpsBoundingClientRect.top}px;\n         left: ${rowOpsBoundingClientRect.left}px">\n      \x3c!--\n              <span class="aaBtn" click.delegate="onRowOpsClose($event)">\n                  <i class="fa fa-bars fa-fw" aria-hidden="true"></i></span>\n      --\x3e\n      <div class="btn-group">\n        \x3c!--\n                <a class="aaBtn dropdown-toggle" data-toggle="dropdown">\n                  <span class="fa fa-bars fa-fw" aria-hidden="true"></span>\n                </a>\n        --\x3e\n        <ul class="dropdown-menu aaSansSerif" style="display: block; font-family: ">\n          <li><a><i class="fa fa-plus-circle fa-fw aaIconGreen"></i> Insert new account row</a></li>\n          <li><a><i class="fa fa-plus-circle fa-fw aaIconGreen"></i> Insert new annotation row</a></li>\n          <li class="divider"></li>\n          <li><a><i class="fa fa-minus-circle fa-fw aaIconRed"></i> Delete row...</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n</template>\n'
  }, "au-components/au-grid-bchg-cells": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuGridBchgCells", (function () {
      return c
    }));
    var i = n("aurelia-framework"), r = n(9), o = n("app"), a = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }, s = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let c = class {
      constructor(e) {
        this.app = null, this.app = e
      }
    };
    a([i.b, s("design:type", r.a)], c.prototype, "bchg", void 0), c = a([Object(i.d)("au-grid-bchg-cells"), Object(i.e)(o.App), s("design:paramtypes", [Object])], c)
  }, "au-components/au-grid-bchg-cells-edit": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuGridBchgCells", (function () {
      return l
    }));
    var i = n("aurelia-framework"), r = n(9), o = n("app"), a = n("au-components/au-module-tran"),
      s = function (e, t, n, i) {
        var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      }, c = function (e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      };
    let l = class {
      constructor(e, t) {
        this.app = null, this.auModuleTran = null, this.app = e, this.auModuleTran = t
      }

      onInputFocus(e, t) {
        this.app.candidateSelectedBchg = t
      }

      pickAcct() {
        this.app.viewmodelPopupAcctPicker.open(this.bchg, this.callbackPickAcct)
      }

      callbackPickAcct(e, t, n) {
        t.targetAcct = null, t.targetAcct = n, t.sourceTran.refresh()
      }

      callbackUserChangedCurrencyAmt(e) {
        this.bchg.amt = e, this.bchg.sourceTran.refresh()
      }
    };
    s([i.b, c("design:type", r.a)], l.prototype, "bchg", void 0), l = s([Object(i.d)("au-grid-bchg-cells-edit"), Object(i.e)(o.App, a.AuModuleTran), c("design:paramtypes", [Object, Object])], l)
  }, "au-components/au-grid-bchg-cells-edit.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-components/au-input-currency"></require>\n  <require from="au-converters/au-currency-converter"></require>\n  <require from="au-views/au-icon-ellipsis.html"></require>\n  <require from="au-views/au-icon-balance-scale.html"></require>\n  <div class="aaBchgCells">\n    \x3c!-- 1st row --\x3e\n    <div class="aaBchgCellsRow aaBchgCellsRowSeparation">\n      \x3c!-- target account --\x3e\n      <div class="aaCellWrapper">\n        <div class="aaCell aaCellBorder aaCellAcctTitle ${bchg.targetAcct.title.length == 0 ? \'aaMissingAcctTitle\' : \'\'}">\n          ${bchg.targetAcct.title}\n          \x3c!--${bchg.targetAcct.title}--\x3e\n        </div>\n        <div class="aaCellHelper aaFontLabel">\n          <button type="button"\n                  class="aaBtn aaHelperBtn"\n                  title="Pick target account"\n                  click.trigger="pickAcct()">\n            <au-icon-ellipsis></au-icon-ellipsis>\n          </button>\n        </div>\n      </div>\n    </div>\n    \x3c!-- 2nd row --\x3e\n    <div class="aaBchgCellsRow">\n      \x3c!-- change description --\x3e\n      <input class="aaCell aaCellBorder aaCellBchgDesc"\n             id="${bchg.id}-desc"\n             type="text"\n             placeholder="Balance change descrption"\n             focus.trigger="onInputFocus($event, bchg)"\n             value.two-way="bchg.desc">\n      \x3c!-- change amount --\x3e\n      <div class="aaCellWrapper"\n           style="margin-left: 1pc;">\n        <au-input-currency\n          classes-string.one-time="\'aaCell aaCellBorder aaCellBchgAmt\'"\n          focus.trigger="onInputFocus($event, bchg)"\n          max-length.to-view="13"\n          currency-amt.to-view="bchg.amt"\n          user-changed-currency-amt.call="callbackUserChangedCurrencyAmt(newCurrencyAmt)">\n        </au-input-currency>\n      </div>\n      <div\n        class="aaCellHelper aaFontLabel ${bchg.sourceTran.totalChangesAssets == bchg.sourceTran.totalChangesEquities ? \'aaHidden\' : \'\'}">\n        <button type="button"\n                class="aaBtn aaHelperBtn"\n                title="Set amount to balance transaction"\n                click.trigger="bchg.setAmtToBalanceTran()">\n          <au-icon-balance-scale></au-icon-balance-scale>\n        </button>\n      </div>\n    </div>\n  </div>\n</template>\n'
  }, "au-components/au-grid-bchg-cells-heading": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuGridBchgCellsHeading", (function () {
      return s
    }));
    var i = n("aurelia-framework"), r = n("app"), o = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }, a = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let s = class {
      constructor(e) {
        this.app = null, this.app = e
      }
    };
    o([i.b, a("design:type", String)], s.prototype, "faeSide", void 0), s = o([Object(i.d)("au-grid-bchg-cells-heading"), Object(i.e)(r.App), a("design:paramtypes", [Object])], s)
  }, "au-components/au-grid-bchg-cells-heading.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-converters/au-equation-side-converter"></require>\n  <div class="aaBchgCells">\n    \x3c!-- 1st row --\x3e\n    <div class="aaBchgCellsRow aaBchgCellsRowSeparation">\n      \x3c!-- target account --\x3e\n      <div class="aaCellWrapper">\n        <div class="aaCell aaCellBorder aaCellAcctTitle" style="border-color: #fff;">\n\x3c!--\n          <span class="aaFontLabel aaFontBold">Target ${faeSideId | auEquationSideConverter:false:false} account</span>\n--\x3e\n          <span class="aaFontLabel aaFontBold">Target ${faeSide} account</span>\n        </div>\n        <div class="aaCellHelper aaHidden">\n          <button type="button" class="aaBtn aaHelperBtn">\n            <span class="fa fa-ellipsis-h fa-fw" aria-hidden="true"></span>\n          </button>\n        </div>\n      </div>\n    </div>\n    \x3c!-- 2nd row --\x3e\n    <div class="aaBchgCellsRow">\n      \x3c!-- change description --\x3e\n      <div class="aaCell aaCellBorder aaCellBchgDesc" style="border-color: #fff;">\n        <span class="aaFontLabel aaFontBold">Change description</span>\n      </div>\n      \x3c!-- change amount --\x3e\n      <div class="aaCellWrapper" style="margin-left: 1pc;">\n        <div class="aaCell aaCellBorder aaCellBchgAmt" style="border-color: #fff;">\n          <span class="aaFontLabel aaFontBold">Change amount</span>\n        </div>\n        <div class="aaCellHelper aaHidden">\n          <button type="button" class="aaBtn aaHelperBtn">\n            <span class="fa fa-balance-scale fa-fw" aria-hidden="true"></span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n'
  }, "au-components/au-grid-bchg-cells-total": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuGridBchgCellsTotal", (function () {
      return a
    }));
    var i = n("aurelia-framework"), r = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }, o = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let a = class {
      constructor() {
      }
    };
    r([i.b, o("design:type", String)], a.prototype, "faeSide", void 0), r([i.b, o("design:type", Number)], a.prototype, "sideTotalChanges", void 0), r([i.b, o("design:type", Number)], a.prototype, "otherSideTotalChanges", void 0), a = r([Object(i.d)("au-grid-bchg-cells-total"), o("design:paramtypes", [])], a)
  }, "au-components/au-grid-bchg-cells-total.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-converters/au-equation-side-converter"></require>\n  <require from="au-converters/au-currency-converter"></require>\n  <div class="aaBchgCells"\n       style="padding-top: 0; padding-bottom: 0;">\n    \x3c!-- 1st row\n    NOT NEEDED\n    --\x3e\n\n    \x3c!-- 2nd row --\x3e\n    <div class="aaBchgCellsRow aaFontData">\n      \x3c!-- change description --\x3e\n      <div class="aaCell aaCellBorder aaCellBchgDesc aaFontLabel"\n           style="text-align: right; border-color: transparent;">\n        Total changes to ${faeSide}:\n      </div>\n      \x3c!-- change amount --\x3e\n      <div class="aaCellWrapper" style="margin-left: 1pc;">\n        <div class="aaCell aaCellBorder aaCellBchgAmt ${sideTotalChanges != otherSideTotalChanges ? \'aaCellErrorIndicater\' : \'\'}">\n          ${sideTotalChanges | auCurrencyConverter}\n        </div>\n        <div class="aaCellHelper aaHidden">\n          <button type="button" class="aaBtn aaHelperBtn">\n            <span class="fa fa-balance-scale fa-fw" aria-hidden="true"></span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n'
  }, "au-components/au-grid-bchg-cells.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-converters/au-currency-converter"></require>\n  <require from="au-views/au-icon-ellipsis.html"></require>\n  <require from="au-views/au-icon-balance-scale.html"></require>\n  <div class="aaBchgCells">\n    \x3c!-- 1st row --\x3e\n    <div class="aaBchgCellsRow aaBchgCellsRowSeparation">\n      \x3c!-- target account\n           **************\n      --\x3e\n      <div class="aaCellWrapper">\n        <div class="aaCell aaCellBorder aaCellAcctTitle">\n          ${bchg.targetAcct.title}\n        </div>\n        <div class="aaCellHelper aaFontLabel aaHidden">\n          <button type="button" class="aaBtn aaHelperBtn">\n            <au-icon-ellipsis></au-icon-ellipsis>\n          </button>\n        </div>\n      </div>\n    </div>\n    \x3c!-- 2nd row --\x3e\n    <div class="aaBchgCellsRow">\n      \x3c!-- change description\n           ******************\n           declarations involving bchg.desc.length == 0\n           are for keeping the cell from collapsing vertically\n           when the change description is blank\n      --\x3e\n      <div class="aaCell aaCellBorder aaCellBchgDesc"\n           css="${bchg.desc.length == 0 ? \'color: transparent;\' : \'\'}">\n        ${bchg.desc.length == 0 ? "x" : bchg.desc}\n      </div>\n      \x3c!-- change amount\n           *************\n      --\x3e\n      <div class="aaCellWrapper"\n           style="margin-left: 1pc;">\n        <div class="aaCell aaCellBorder aaCellBchgAmt">\n          ${bchg.amt | auCurrencyConverter}\n        </div>\n        <div class="aaCellHelper aaHidden">\n          <button type="button" class="aaBtn aaHelperBtn">\n            <au-icon-balance-scale></au-icon-balance-scale>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n'
  }, "au-components/au-input-currency": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuInputCurrency", (function () {
      return a
    }));
    var i = n("aurelia-framework"), r = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }, o = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let a = class {
      constructor() {
        this.isReadonly = !1, this.isDisabled = !1, this.currencyAmt = 0
      }

      onFocus() {
        this.originalInputValue = this.inputCurrencyElement.value, this.inputCurrencyElement.value = this.wellformedFloatString(this.originalInputValue), this.inputCurrencyElement.setSelectionRange(0, 0), this.originalCurrencyAmt = parseFloat(this.inputCurrencyElement.value)
      }

      onBlur() {
        let e = parseFloat(this.inputCurrencyElement.value);
        e == this.originalCurrencyAmt ? this.inputCurrencyElement.value = this.originalInputValue : this.userChangedCurrencyAmt({newCurrencyAmt: e})
      }

      onKeydown(e) {
        let t = this.inputCurrencyElement.value.indexOf(".");
        if (e.key >= "0" && e.key <= "9") {
          if (!(this.inputCurrencyElement.selectionStart <= t)) {
            if (this.inputCurrencyElement.selectionStart == this.inputCurrencyElement.value.length) return !1;
            {
              let n = this.inputCurrencyElement.value.substring(t);
              if (this.inputCurrencyElement.selectionStart == t + 1) {
                let i = "." + e.key + this.inputCurrencyElement.value.charAt(t + 1);
                this.inputCurrencyElement.value = this.inputCurrencyElement.value.replace(n, i)
              } else {
                let i = "." + this.inputCurrencyElement.value.charAt(t + 1) + e.key;
                this.inputCurrencyElement.value = this.inputCurrencyElement.value.replace(n, i)
              }
              return this.inputCurrencyElement.setSelectionRange(t + 2, t + 2), !1
            }
          }
          if (0 == this.inputCurrencyElement.selectionStart && "-" == this.inputCurrencyElement.value.charAt(0)) return !1;
          if ("0" == e.key) {
            if (0 == this.inputCurrencyElement.selectionStart && "-" != this.inputCurrencyElement.value.charAt(0)) return !1;
            if (1 == this.inputCurrencyElement.selectionStart && "-" == this.inputCurrencyElement.value.charAt(0)) return !1
          }
          return !0
        }
        if ("." == e.key) {
          let e = this.inputCurrencyElement.value.indexOf(".") + 1;
          return this.inputCurrencyElement.setSelectionRange(e, e), !1
        }
        if ("-" == e.key) {
          let e = this.inputCurrencyElement.selectionStart;
          return 0 == e && ("-" != this.inputCurrencyElement.value.charAt(0) || (this.inputCurrencyElement.setSelectionRange(e + 1, e + 1), !1))
        }
        if ("Delete" == e.key) {
          if (this.inputCurrencyElement.selectionStart < t) return !0;
          if (this.inputCurrencyElement.selectionStart == t) return this.inputCurrencyElement.setSelectionRange(t + 1, t + 1), !1;
          {
            let e = this.inputCurrencyElement.value.substring(t);
            if (this.inputCurrencyElement.selectionStart == t + 1) {
              let n = "." + this.inputCurrencyElement.value.charAt(t + 2) + "0";
              this.inputCurrencyElement.value = this.inputCurrencyElement.value.replace(e, n), this.inputCurrencyElement.setSelectionRange(t + 1, t + 1)
            } else if (this.inputCurrencyElement.selectionStart == t + 2) {
              let n = "." + this.inputCurrencyElement.value.charAt(t + 1) + "0";
              this.inputCurrencyElement.value = this.inputCurrencyElement.value.replace(e, n), this.inputCurrencyElement.setSelectionRange(t + 2, t + 2)
            }
            return !1
          }
        }
        if ("Backspace" == e.key) {
          if (this.inputCurrencyElement.selectionStart <= t) return !0;
          {
            let e = this.inputCurrencyElement.value.substring(t);
            if (this.inputCurrencyElement.selectionStart == t + 1) this.inputCurrencyElement.setSelectionRange(t, t); else if (this.inputCurrencyElement.selectionStart == t + 2) {
              let n = "." + this.inputCurrencyElement.value.charAt(t + 2) + "0";
              this.inputCurrencyElement.value = this.inputCurrencyElement.value.replace(e, n), this.inputCurrencyElement.setSelectionRange(t + 1, t + 1)
            } else {
              let n = "." + this.inputCurrencyElement.value.charAt(t + 1) + "0";
              this.inputCurrencyElement.value = this.inputCurrencyElement.value.replace(e, n), this.inputCurrencyElement.setSelectionRange(t + 2, t + 2)
            }
            return !1
          }
        }
        return "Enter" == e.key || "Tab" == e.key || "Escape" == e.key || "ArrowLeft" == e.key || "ArrowRight" == e.key
      }

      onKeyup(e) {
        let t;
        return 0 == this.inputCurrencyElement.value.length ? (this.inputCurrencyElement.value = ".00", void this.inputCurrencyElement.setSelectionRange(0, 0)) : this.inputCurrencyElement.value.indexOf(".") < 0 ? (this.inputCurrencyElement.value = this.inputCurrencyElement.value + ".00", t = this.inputCurrencyElement.value.indexOf("."), void this.inputCurrencyElement.setSelectionRange(t, t)) : "Enter" == e.key ? (this.inputCurrencyElement.blur(), !1) : "Escape" == e.key ? (this.inputCurrencyElement.value = this.wellformedFloatString(this.originalInputValue), void this.inputCurrencyElement.setSelectionRange(0, 0)) : void 0
      }

      wellformedFloatString(e) {
        let t, n = e;
        for (; t = n.indexOf(","), !(t < 0);) n = n.substring(0, t) + n.substring(t + 1);
        return "0" == n.substring(0, 1) ? n = n.substring(1) : "-0" == n.substring(0, 2) && (n = "-" + n.substring(2)), n
      }
    };
    r([i.b, o("design:type", String)], a.prototype, "classesString", void 0), r([i.b, o("design:type", Boolean)], a.prototype, "isReadonly", void 0), r([i.b, o("design:type", Boolean)], a.prototype, "isDisabled", void 0), r([i.b, o("design:type", Number)], a.prototype, "currencyAmt", void 0), r([i.b, o("design:type", Function)], a.prototype, "userChangedCurrencyAmt", void 0), r([i.b, o("design:type", Number)], a.prototype, "maxLength", void 0), a = r([Object(i.d)("au-input-currency"), o("design:paramtypes", [])], a)
  }, "au-components/au-input-currency.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-converters/au-currency-converter"></require>\n  <input element.ref="inputCurrencyElement"\n         type="text"\n    class="${classesString}"\n    maxlength=${maxLength}\n    readonly="${isReadonly ? \'readonly\' : \'\'}"\n    disabled="${isDisabled ? \'disabled\' : \'\'}"\n    focus.trigger="onFocus()"\n    blur.trigger="onBlur()"\n    keydown.trigger="onKeydown($event)"\n    keyup.trigger="onKeyup($event)"\n    value.to-view="currencyAmt | auCurrencyConverter">\n</template>\n'
  }, "au-components/au-module-acct": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuModuleAcct", (function () {
      return s
    }));
    var i = n(5), r = n("aurelia-framework"), o = n("app"), a = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let s = class {
      constructor(e) {
        this.observerScrollIntoView = new MutationObserver(this.callbackScrollIntoView), this.Acct = i.a, this.Annotation = i.b, this.app = e
      }

      observeForScrollIntoView() {
        this.observerScrollIntoView.app = this.app, this.observerScrollIntoView.observe(this.moduleRootElement, {
          childList: !1,
          attributeFilter: ["style"],
          subtree: !1
        })
      }

      callbackScrollIntoView(e, t) {
        if (t.app.selectedBchg) {
          let e = document.getElementById(`acct-${t.app.selectedBchg.id}`);
          e && e.scrollIntoView({behavior: "smooth", block: "center"})
        }
        t.disconnect()
      }

      onRowEnter(e, t) {
        e.target.children[2].classList.toggle("aaRowDataHover", !0)
      }

      onRowLeave(e, t) {
        e.target.children[2].classList.toggle("aaRowDataHover", !1)
      }
    };
    s = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }([Object(r.d)("au-module-acct"), Object(r.e)(o.App), a("design:paramtypes", [Object])], s)
  }, "au-components/au-module-acct.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-views/au-icon-nav-up.html"></require>\n  <require from="au-views/au-icon-nav-down.html"></require>\n  <require from="au-views/au-icon-edit.html"></require>\n  <require from="au-converters/au-currency-converter"></require>\n  <require from="au-converters/au-equation-side-converter"></require>\n\n  <div class="aaPanel aaPanelBoxShadow"\n       css="${app.selectedModule == app.MODULE_ACCT ? \'\' : \'display: none;\'}"\n       element.ref="moduleRootElement"\n       id="observedElement">\n    <div class="aaPanelHeader aaPanelHeaderModule">Account</div>\n    <div class="aaPanelBody">\n      <div class="aaForm">\n        <table border="0" style="border-collapse: collapse;">\n          <tr>\n            <td class="aaFormItemLabel">Equation side:</td>\n            <td class="aaFormItemData">${app.selectedAcct.parentFaeSide.id | auEquationSideConverter:true:true}</td>\n          </tr>\n          <tr>\n            <td class="aaFormItemLabel">Title:</td>\n            <td class="aaFormItemData">\n              ${app.selectedAcct.title}\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class="aaGridContainer">\n        <div class="aaGridTitleBar">Balance changes</div>\n        <div class="aaRow aaRowColumnHeaders aaFontLabel aaFontBold">\n          <div class="aaRowOps aaRowOpsEmpty aaHidden">\n          </div>\n          <div class="aaVerticalGridline" style="background-color: #fff"></div>\n          <div class="aaRowData">\n            <div class="aaCell aaCellTranDate">Date</div>\n            <div class="aaVerticalGridline" style="background-color: #fff"></div>\n            <div class="aaCell aaCellBchgDesc">Change description</div>\n            <div class="aaVerticalGridline" style="background-color: #fff"></div>\n            <div class="aaCell aaCellBchgAmt">Change amount</div>\n            <div class="aaVerticalGridline" style="background-color: #fff"></div>\n            <div class="aaCell aaCellBchgBal">New balance</div>\n            <div class="aaVerticalGridline" style="background-color: #fff"></div>\n          </div>\n        </div>\n        <div class="aaGridScrollableRows aaGridHeightInAcct"\n             id="acctModule-${app.selectedAcct.id}">\n          <template repeat.for="bchg of app.selectedAcct.bchgList">\n            <div class="aaRow aaRowBgColorToolbar"\n                 id="acct-${bchg.id}"\n                 mouseenter.trigger="onRowEnter($event, bchg)"\n                 mouseleave.trigger="onRowLeave($event, bchg)"\n                 click.trigger="app.selectBchg(bchg)"\n                 dblclick.trigger="app.selectAcctBchgGoTran(bchg)">\n              <div class="aaRowOps aaRowOpsEmpty aaBgColorToolbar ${app.selectedBchg.id == bchg.id ? \'aaRowOpsSelected\' : \'\'}">\n              </div>\n              <div class="aaVerticalGridline"></div>\n              <div class="aaRowData aaRowBgColorData ${app.selectedBchg.id == bchg.id ? \'aaRowDataSelected\' : \'\'}">\n                <div class="aaCell aaFontData aaCellTranDate">${bchg.sourceTran.date}</div>\n                <div class="aaVerticalGridline"></div>\n                <div class="aaCell aaFontData aaCellBchgDesc">${bchg.desc}</div>\n                <div class="aaVerticalGridline"></div>\n                <div class="aaCell aaFontData aaCellBchgAmt">${bchg.amt | auCurrencyConverter}</div>\n                <div class="aaVerticalGridline"></div>\n                <div class="aaCell aaFontData aaCellBchgBal">${bchg.newBalance | auCurrencyConverter}</div>\n              </div>\n              <div class="aaVerticalGridline"></div>\n            </div>\n          </template>\n          \x3c!--\n          The purpose of having the following invisible end-of-list row\n          is to provide an invisible horizontal spacer if acct.bchgList is empty\n          so as to display the column headings row properly..\n          --\x3e\n          <div class="aaRow aaHidden">\n            <div class="aaRowOps aaRowOpsEmpty aaBgColorToolbar">\n            </div>\n            <div class="aaVerticalGridline"></div>\n            <div class="aaRowData aaRowBgColorData">\n              <div class="aaCell aaFontData aaCellTranDate"></div>\n              <div class="aaVerticalGridline"></div>\n              <div class="aaCell aaFontData aaCellBchgDesc"></div>\n              <div class="aaVerticalGridline"></div>\n              <div class="aaCell aaFontData aaCellBchgAmt"></div>\n              <div class="aaVerticalGridline"></div>\n              <div class="aaCell aaFontData aaCellBchgBal"></div>\n            </div>\n            <div class="aaVerticalGridline"></div>\n          </div>\n        </div>\n        <div class="aaGridFooterBar"></div>\n      </div>\n    </div>\n  </div>\n</template>\n'
  }, "au-components/au-module-bchg": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuModuleBchg", (function () {
      return a
    }));
    var i = n("aurelia-framework"), r = n("app"), o = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let a = class {
      constructor(e) {
        this.app = null, this.app = e
      }
    };
    a = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }([Object(i.d)("au-module-bchg"), Object(i.e)(r.App), o("design:paramtypes", [Object])], a)
  }, "au-components/au-module-bchg.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-converters/au-currency-converter"></require>\n  <require from="au-converters/au-equation-side-converter"></require>\n  <div class="aaPanel aaPanelBoxShadow"\n       css="${app.selectedModule == app.MODULE_BCHG ? \'\' : \'display: none;\'}">\n    <div class="aaPanelHeader aaPanelHeaderModule">Account balance change</div>\n    <div class="aaPanelBody">\n      <div style="text-align: center;">\n        \x3c!--Target account--\x3e\n        <div class="aaGridContainer aaInlineBlock" style="margin-right: 1pc;">\n          <div class="aaGridTitleBar">Target account</div>\n          <div class="aaRow aaRowColumnHeaders aaFontLabel aaFontBold">\n            <div class="aaCell aaCellEquSide">Equation side</div>\n            <div class="aaVerticalGridline" style="background-color: #fff"></div>\n            <div class="aaCell aaCellAcctTitle"><span class="aaFontLabel aaFontBold">Title</span></div>\n          </div>\n          <div class="aaRow aaRowBgColorNonData" style="border-bottom-style: none;">\n            <div class="aaRowData">\n              <div class="aaCell aaFontData aaCellEquSide">\n                ${app.selectedBchg.targetAcct.parentFaeSide.id}\n              </div>\n              <div class="aaVerticalGridline"></div>\n              <div class="aaCell aaFontData aaCellAcctTitle">${app.selectedBchg.targetAcct.title}</div>\n            </div>\n          </div>\n        </div>\n        \x3c!--Source transaction--\x3e\n        <div class="aaGridContainer aaInlineBlock">\n          <div class="aaGridTitleBar">\n            Source transaction\n          </div>\n          <div class="aaRow aaRowColumnHeaders aaFontLabel aaFontBold">\n            <div class="aaCell aaCellTranDate">Date</div>\n            <div class="aaVerticalGridline" style="background-color: #fff"></div>\n          </div>\n          <div class="aaRow aaRowBgColorNonData" style="border-bottom-style: none;">\n            <div class="aaRowData">\n              <div class="aaCell aaFontData aaCellTranDate">${app.selectedBchg.sourceTran.date}</div>\n              <div class="aaVerticalGridline"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div style="margin-top: 2pc; text-align: center;">\n        \x3c!--Balance change--\x3e\n        <div class="aaGridContainer aaInlineBlock" style="margin-top: 0;">\n          \x3c!--Balance change--\x3e\n          <div class="aaGridTitleBar">Balance change</div>\n          <div class="aaRow aaRowColumnHeaders aaFontLabel aaFontBold">\n            <div class="aaCell aaCellBchgDesc">Change description</div>\n            <div class="aaVerticalGridline" style="background-color: #fff"></div>\n            <div class="aaCell aaCellBchgAmt">Change amount</div>\n          </div>\n          <div class="aaRow aaRowBgColorNonData" style="border-bottom-style: none;">\n            <div class="aaRowData">\n              <div class="aaCell aaCellBchgDesc">${app.selectedBchg.desc}</div>\n              <div class="aaVerticalGridline"></div>\n              <div class="aaCell aaCellBchgAmt">${app.selectedBchg.amt | auCurrencyConverter}</div>\n            </div>\n          </div>\n        </div>\n        \x3c!--\n                <span click.trigger="onGoTran($event)"\n                      class="aaBtn">Show in source transaction\n                    <i class="fa fa-chevron-right fa-fw" aria-hidden="true"></i>\n                  </span>\n        --\x3e\n      </div>\n    </div>\n  </div>\n</template>\n'
  }, "au-components/au-module-fae": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuModuleFae", (function () {
      return s
    }));
    var i = n("aurelia-framework"), r = n("app"), o = n(5), a = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let s = class {
      constructor(e, t) {
        this.observerScrollIntoView = new MutationObserver(this.callbackScrollIntoView), this.observerSetInputFocus = new MutationObserver(this.callbackSetInputFocus), this.app = e
      }

      observeForScrollIntoView() {
        this.observerScrollIntoView.app = this.app, this.observerScrollIntoView.observe(this.moduleRootElement, {attributeFilter: ["style"]})
      }

      callbackScrollIntoView(e, t) {
        if (t.app.selectedAcct) {
          let e = document.getElementById(t.app.selectedAcct.id);
          e && e.scrollIntoView({behavior: "smooth", block: "center"})
        }
        t.disconnect()
      }

      observeForSetInputFocus() {
        this.observerSetInputFocus.app = this.app, this.observerSetInputFocus.observe(this.moduleRootElement, {
          childList: !0,
          subtree: !0
        })
      }

      callbackSetInputFocus(e, t) {
        if (t.app.candidateSelectedAcct) {
          let e = document.getElementById(`${t.app.candidateSelectedAcct.id}-title`);
          e && e.focus()
        }
        t.disconnect()
      }

      faeSidesEdit(e) {
        if (this.app.candidateFaeSideAssets = this.app.data.faeSideAssets.clone(), this.app.candidateFaeSideEquities = this.app.data.faeSideEquities.clone(), this.app.selectedAcct) {
          let e = null;
          e = "Assets" == this.app.selectedAcct.parentFaeSide.id ? this.app.candidateFaeSideAssets : this.app.candidateFaeSideEquities;
          let t = e.acctList.filter(e => e instanceof o.a);
          this.app.candidateSelectedAcct = t.find(e => e.id == this.app.selectedAcct.id)
        }
        this.app.viewNavMode = !1
      }

      faeSidesEditDone(e) {
        let t, n, i, r = 0;
        i = this.app.candidateFaeSideAssets.acctList.concat(this.app.candidateFaeSideEquities.acctList);
        for (let e of i) e instanceof o.a && 0 == e.title.length && r++;
        if (r > 0) this.app.viewmodelPopupAlert.open("Save changes", this.panelToolBar.getBoundingClientRect().bottom, `Account title is missing for ${r} account(s).`); else {
          for (let e of this.app.data.faeSideAssets.acctList) t = this.app.candidateFaeSideAssets.acctList.find(t => t.id == e.id), t || (n = this.app.data.faeSideAssets.acctList.findIndex(t => t.id == e.id), this.app.data.faeSideAssets.acctList.splice(n, 1));
          for (let e of this.app.candidateFaeSideAssets.acctList) e instanceof o.b ? (t = this.app.data.faeSideAssets.acctList.find(t => t.id == e.id), t ? (t.intraSideIndex = e.intraSideIndex, t.annoText = e.annoText) : this.app.data.faeSideAssets.acctList.push(e)) : e instanceof o.a && (t = this.app.data.faeSideAssets.acctList.find(t => t.id == e.id), t ? (t.intraSideIndex = e.intraSideIndex, t.title = e.title) : this.app.data.faeSideAssets.acctList.push(e));
          for (let e of this.app.data.faeSideEquities.acctList) t = this.app.candidateFaeSideEquities.acctList.find(t => t.id == e.id), t || (n = this.app.data.faeSideEquities.acctList.findIndex(t => t.id == e.id), this.app.data.faeSideEquities.acctList.splice(n, 1));
          for (let e of this.app.candidateFaeSideEquities.acctList) e instanceof o.b ? (t = this.app.data.faeSideEquities.acctList.find(t => t.id == e.id), t ? (t.intraSideIndex = e.intraSideIndex, t.annoText = e.annoText) : this.app.data.faeSideEquities.acctList.push(e)) : e instanceof o.a && (t = this.app.data.faeSideEquities.acctList.find(t => t.id == e.id), t ? (t.intraSideIndex = e.intraSideIndex, t.title = e.title) : this.app.data.faeSideEquities.acctList.push(e));
          this.app.selectedAcct = this.app.candidateSelectedAcct, this.app.candidateFaeSideAssets = null, this.app.candidateFaeSideEquities = null, this.app.candidateSelectedAcct = null, this.app.data.faeSideAssets.refresh(), this.app.data.faeSideEquities.refresh(), this.observerScrollIntoView.app = this.app, this.observerScrollIntoView.observe(this.moduleRootElement, {
            childList: !0,
            attributes: !0,
            subtree: !0,
            characterData: !0
          }), this.app.viewNavMode = !0
        }
      }

      faeSidesEditCancel(e) {
        this.observerScrollIntoView.app = this.app, this.observerScrollIntoView.observe(this.moduleRootElement, {
          childList: !0,
          attributes: !0,
          subtree: !0,
          characterData: !0
        }), this.app.viewNavMode = !0, this.app.candidateFaeSideAssets = null, this.app.candidateFaeSideEquities = null, this.app.candidateSelectedAcct = null
      }
    };
    s = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }([Object(i.d)("au-module-fae"), Object(i.e)(r.App), a("design:paramtypes", [Object, Object])], s)
  }, "au-components/au-module-fae.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-views/au-icon-edit.html"></require>\n  <require from="au-views/au-text-ellipsis.html"></require>\n  <require from="au-components/au-fae-side"></require>\n  <require from="au-attributes/au-fae-side-data"></require>\n  <require from="au-components/au-popup-acct-mover"></require>\n  <div class="aaPanel aaPanelBoxShadow"\n       css="${app.selectedModule == app.MODULE_FAE ? \'\' : \'display: none;\'}"\n       element.ref="moduleRootElement"\n       id="observedElement">\n    <div class="aaPanelHeader aaPanelHeaderModule">The fundamental accounting equation</div>\n    <template if.bind="app.viewNavMode">\n      <div class="aaPanelToolBar">\n        <span class="aaToolBarDivider">.</span>\n        <button type="button"\n                class="aaBtn"\n                click.trigger="faeSidesEdit($event)">\n          <au-icon-edit></au-icon-edit>\n          &nbsp;Edit account lists\n          <au-text-ellipsis></au-text-ellipsis>\n        </button>\n        <span class="aaToolBarDivider">.</span>\n      </div>\n      <div class="aaPanelBody">\n        <div class="aaEquSideContainer">\n          <au-fae-side\n            view-model.ref="viewmodelFaeSideAssets"\n            fae-side.to-view="app.data.faeSideAssets">\n          </au-fae-side>\n        </div>\n        <div class="aaEquSideContainer" style="padding: 0 1pc;">\n          <h1 style="margin: 0;">=</h1>\n        </div>\n        <div class="aaEquSideContainer">\n          <au-fae-side\n            view-model.ref="viewmodelFaeSideEquities"\n            fae-side.to-view="app.data.faeSideEquities">\n          </au-fae-side>\n        </div>\n      </div>\n    </template>\n    <template if.bind="!app.viewNavMode">\n      <div class="aaPanelToolBar"  element.ref="panelToolBar">\n        <span class="aaToolBarDivider">.</span>\n        <span class="aaFontLabel aaFontBold">Editing account lists:</span>\n        <span class="aaToolBarDivider aaHidden">.</span>\n        <button type="button" class="aaBtnFinish" click.trigger="faeSidesEditDone($event)">Save changes</button>\n        <span class="aaToolBarDivider aaHidden">.</span>\n        <button type="button" class="aaBtn" click.trigger="faeSidesEditCancel($event)">Cancel</button>\n        <span class="aaToolBarDivider">.</span>\n      </div>\n      <div class="aaPanelBody">\n        <div class="aaEquSideContainer">\n          <au-fae-side\n            fae-side.to-view="app.candidateFaeSideAssets">\n          </au-fae-side>\n        </div>\n        <div class="aaEquSideContainer" style="padding: 0 1pc;">\n          <h1 style="margin: 0;">=</h1>\n        </div>\n        <div class="aaEquSideContainer">\n          <au-fae-side\n            fae-side.to-view="app.candidateFaeSideEquities">\n          </au-fae-side>\n        </div>\n      </div>\n    </template>\n  </div>\n</template>\n'
  }, "au-components/au-module-jrnl": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuModuleJrnl", (function () {
      return a
    }));
    var i = n("aurelia-framework"), r = n("app"), o = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let a = class {
      constructor(e) {
        this.observerScrollIntoView = new MutationObserver(this.callbackScrollIntoView), this.app = e
      }

      observeForScrollIntoView() {
        this.observerScrollIntoView.app = this.app, this.observerScrollIntoView.observe(this.moduleRootElement, {
          childList: !1,
          attributeFilter: ["style"],
          attributeOldValue: !0,
          subtree: !1
        })
      }

      callbackScrollIntoView(e, t) {
        if (t.app.selectedTran) {
          let e = document.getElementById(t.app.selectedTran.id);
          e && e.scrollIntoView({behavior: "smooth", block: "center"})
        }
        t.disconnect()
      }

      onRowEnter(e) {
        e.target.children[2].children[0].classList.toggle("aaRowDataHover", !0), e.target.children[2].children[1].classList.toggle("aaRowDataHover", !0)
      }

      onRowLeave(e) {
        e.target.children[2].children[0].classList.toggle("aaRowDataHover", !1), e.target.children[2].children[1].classList.toggle("aaRowDataHover", !1)
      }

      tranNew(e) {
        this.app.navBtnReturn = this.app.navBtnJrnl, this.app.selectedModule = this.app.MODULE_TRAN, this.app.viewmodelTran.tranNew()
      }

      tranEdit(e) {
        this.app.selectedTran && (this.app.navBtnReturn = this.app.navBtnJrnl, this.app.navBtnTran.click(), this.app.viewmodelTran.tranEdit())
      }

      tranDelete(e) {
        this.app.selectedTran && (this.app.navBtnReturn = this.app.navBtnJrnl, this.app.navBtnTran.click(), this.app.viewmodelTran.tranDelete())
      }
    };
    a = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }([Object(i.d)("au-module-jrnl"), Object(i.e)(r.App), o("design:paramtypes", [Object])], a)
  }, "au-components/au-module-jrnl.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-views/au-icon-new.html"></require>\n  <require from="au-views/au-icon-edit.html"></require>\n  <require from="au-views/au-icon-delete.html"></require>\n  <require from="au-views/au-grid-bchg-cells-spacer.html"></require>\n  <require from="au-components/au-grid-bchg-cells"></require>\n  <require from="au-components/au-grid-bchg-cells-heading"></require>\n  <div class="aaPanel aaPanelBoxShadow"\n       css="${app.selectedModule == app.MODULE_JRNL ? \'\' : \'display: none;\'}"\n       element.ref="moduleRootElement"\n       id="observedElement">\n    <div class="aaPanelHeader aaPanelHeaderModule">Transaction journal</div>\n    <div class="aaPanelToolBar">\n      <div class="aaInlineFlex" style="justify-content: center;">\n        <span class="aaToolBarDivider">.</span>\n        <button type="button"\n                class="aaBtn"\n                click.trigger="tranNew($event)">\n          <au-icon-new></au-icon-new>\n          &nbsp;New transaction\n        </button>\n        <button type="button"\n                class="aaBtn"\n                click.trigger="tranEdit($event)"\n                disabled.bind="!app.selectedTran">\n          <au-icon-edit></au-icon-edit>\n          &nbsp;Edit selected transaction\n        </button>\n        <button type="button"\n                class="aaBtn"\n                click.trigger="tranDelete($event)"\n                disabled.bind="!app.selectedTran">\n          <au-icon-delete></au-icon-delete>\n          &nbsp;Delete selected transaction\n          <au-text-ellipsis></au-text-ellipsis>\n        </button>\n        <span class="aaToolBarDivider">.</span>\n      </div>\n    </div>\n    <div class="aaPanelBody">\n      <div class="aaGridContainer" style="margin-top: 0;">\n        <div class="aaGridTitleBar"></div>\n\x3c!--\n        <div class="aaGridFooterBar"></div>\n--\x3e\n\n        <div class="aaRow aaRowColumnHeaders aaFontLabel">\n          <div class="aaRowOps aaRowOpsEmpty aaHidden">\n          </div>\n          <div class="aaVerticalGridline" style="background-color: #fff; width: 3px;"></div>\n          <div style="display: inline-flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; padding: 2px;">\n            <div class="aaRowData aaFontBold">\n              <au-grid-bchg-cells-heading fae-side.one-time="\'asset\'"></au-grid-bchg-cells-heading>\n              <div class="aaVerticalGridline" style="background-color: #fff; width: 3px;"></div>\n              <au-grid-bchg-cells-heading fae-side.one-time="\'equity\'"></au-grid-bchg-cells-heading>\n            </div>\n          </div>\n          <div class="aaVerticalGridline" style="background-color: #fff; width: 3px;"></div>\n        </div>\n        <div class="aaGridScrollableRows aaGridHeightInJrnl"\n             id="jrnlGridBodyContainer">\n          <template repeat.for="tran of app.data.jrnl.tranList">\n            <div class="aaRow"\n                 id="${tran.id}"\n                 style="margin-bottom: 1.5pc;"\n                 mouseenter.trigger="onRowEnter($event)"\n                 mouseleave.trigger="onRowLeave($event)"\n                 click.trigger="app.selectTran(tran)"\n                 dblclick.trigger="app.selectTranGoTran(tran)">\n              <div class="aaRowOps aaRowOpsEmpty aaBgColorToolbar aaFontLabel ${app.selectedTran.id == tran.id ? \'aaRowOpsSelected\' : \'\'}"\n                   style="border-bottom: 3px solid #ccc;">\n              </div>\n              <div class="aaVerticalGridline" style="width: 3px;"></div>\n              <div class="${app.selectedTran.id == tran.id ? \'aaRowDataSelected\' : \'\'}"\n                   style="padding: 2px; display: inline-flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; padding: 2px;">\n                <div class="aaRowBgColorData"\n                     style="display: inline-flex; align-items: center; justify-content: center; border-bottom: 3px solid #ccc; padding: 0.4pc">\n                  <div class="aaCell aaFontData aaCellTranDate aaCellBorder">${tran.date}</div>\n                </div>\n                <div class="aaRowBgColorData"\n                     style="display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start">\n                  <template repeat.for="bchg of tran.bchgList">\n                    <div class="aaRow"\n                         style="border-bottom-width: 3px;">\n                      <div class="aaRowData">\n                        \x3c!-- spacer if equities side --\x3e\n                        <template if.bind="bchg.targetAcct.parentFaeSide.id == \'Equities\'">\n                          \x3c!-- put blank space in change-to-asset column --\x3e\n                          <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                          <div class="aaVerticalGridline" style="width: 3px;"></div>\n                        </template>\n                        \x3c!-- simulate data cells with spacer --\x3e\n                        <au-grid-bchg-cells bchg.one-way="bchg"></au-grid-bchg-cells>\n                        <template if.bind="bchg.targetAcct.parentFaeSide.id == \'Assets\'">\n                          \x3c!-- put blank space in change-to-equity column --\x3e\n                          <div class="aaVerticalGridline" style="width: 3px;"></div>\n                          <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                        </template>\n                      </div>\n                      <div class="aaVerticalGridline" style="width: 3px;"></div>\n                    </div>\n                  </template>\n                </div>\n              </div>\n              \x3c!--\n                            <div class="aaVerticalGridline"></div>\n              --\x3e\n            </div>\n            \x3c!-- End of tran --\x3e\n          </template>\n          \x3c!--\n          *** End of list row ***\n          In case no rows in the list, this hidden end-of-row list is needed to\n          take as much horizontal space as if there were some rows in order to keep\n          the scrollable rows div from collapsing, and to make grid column headings to look right.\n          --\x3e\n          <div class="aaRow aaHidden" style="border-bottom-width: 3px;">\n            <div class="aaRowOps aaRowOpsEmpty"\n                 style="border-bottom: 3px solid #ccc;">\n            </div>\n            <div class="aaVerticalGridline" style="width: 3px;"></div>\n            <div class="aaHidden"\n                 style="padding: 2px; display: inline-flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; padding: 2px;">\n              <div class="aaRowBgColorData"\n                   style="display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start">\n                <div class="aaRow"\n                     style="border-bottom-width: 3px;">\n                  <div class="aaRowData">\n                    <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                    <div class="aaVerticalGridline" style="width: 3px;"></div>\n                    <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                  </div>\n                  <div class="aaVerticalGridline" style="width: 3px;"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="aaGridFooterBar"></div>\n      </div>\n    </div>\n  </div>\n</template>\n'
  }, "au-components/au-module-tran": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuModuleTran", (function () {
      return c
    }));
    var i = n("aurelia-framework"), r = n("app"), o = n(15), a = n(9), s = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let c = class {
      constructor(e) {
        this.tranInputDate = document.getElementById("tranInputDate"), this.observerScrollIntoView = new MutationObserver(this.callbackScrollIntoView), this.observerSetInputFocus = new MutationObserver(this.callbackSetInputFocus), this.tranOp = "", this.app = e
      }

      get TRAN_OP_NEW() {
        return "new"
      }

      get TRAN_OP_EDIT() {
        return "edit"
      }

      get TRAN_OP_DELETE() {
        return "deleteedit"
      }

      observeForScrollIntoView() {
        this.observerScrollIntoView.app = this.app, this.observerScrollIntoView.observe(this.moduleRootElement, {
          childList: !0,
          attributeFilter: ["style"],
          subtree: !0
        })
      }

      callbackScrollIntoView(e, t) {
        if (t.app.selectedBchg) {
          let e = document.getElementById(`tran-${t.app.selectedBchg.id}`);
          e && e.scrollIntoView({behavior: "smooth", block: "center"})
        }
        t.disconnect()
      }

      observeForSetInputFocus() {
        this.observerSetInputFocus.app = this.app, this.observerSetInputFocus.observe(this.moduleRootElement, {
          attributeFilter: ["style"],
          childList: !0,
          subtree: !0
        })
      }

      callbackSetInputFocus(e, t) {
        let n;
        n = document.getElementById("tranInputDate"), n && n.focus(), t.app.candidateSelectedBchg && (n = document.getElementById(`${t.app.candidateSelectedBchg.id}-desc`), n && n.focus()), t.disconnect()
      }

      onRowEnter(e, t) {
        t && e.target.children[2].classList.toggle("aaRowDataHover", !0)
      }

      onRowLeave(e, t) {
        t && e.target.children[2].classList.toggle("aaRowDataHover", !1)
      }

      tranNew(e) {
        this.app.candidateSelectedBchg = null, this.app.candidateTran = new o.a(`tran${this.app.data.nextTranId}`, this.app.data.jrnl, (new Date).toISOString().slice(0, 10), this.app.data.nextSorter), this.app.viewNavMode = !1, this.tranOp = this.TRAN_OP_NEW, this.app.viewmodelTran.observeForSetInputFocus()
      }

      tranValid() {
        return this.app.candidateTran.totalChangesAssets != this.app.candidateTran.totalChangesEquities ? (this.app.viewmodelPopupAlert.open("Save changes", this.panelToolBar.getBoundingClientRect().bottom, "Transaction is out of balance."), !1) : "" != this.app.candidateTran.date || (this.app.viewmodelPopupAlert.open("Save changes", this.panelToolBar.getBoundingClientRect().bottom, "Transaction date is missing or invalid."), !1)
      }

      tranNewDone(e) {
        this.tranValid() && (this.app.candidateTran.intraDateSorter = this.app.data.nextSorter, this.app.candidateTran.register(), this.app.selectedTran = this.app.candidateTran, this.app.candidateSelectedBchg && (this.app.selectedBchg = this.app.candidateSelectedBchg, this.app.selectedAcct = this.app.selectedBchg.targetAcct), this.app.candidateTran = null, this.app.candidateSelectedBchg = null, this.app.data.jrnl.refresh(), this.app.data.faeSideAssets.refresh(), this.app.data.faeSideEquities.refresh(), this.tranOp = null, this.app.viewNavMode = !0, this.app.navBtnReturn && (this.app.navBtnReturn.click(), this.app.navBtnReturn = null))
      }

      tranNewCancel(e) {
        this.app.candidateTran = null, this.app.candidateSelectedBchg = null, this.tranOp = null, this.app.viewNavMode = !0, this.app.navBtnReturn && (this.app.navBtnReturn.click(), this.app.navBtnReturn = null)
      }

      tranEdit(e) {
        let t = document.activeElement;
        t && t.blur(), this.app.candidateTran = this.app.selectedTran.clone(), this.app.selectedBchg && (this.app.candidateSelectedBchg = this.app.candidateTran.bchgList.find(e => e.id == this.app.selectedBchg.id)), this.tranOp = this.TRAN_OP_EDIT, this.app.viewNavMode = !1, this.app.viewmodelTran.observeForSetInputFocus()
      }

      tranEditDone(e) {
        if (!this.tranValid()) return;
        let t = !1;
        this.app.candidateTran.date != this.app.selectedTran.date && (this.app.candidateTran.intraDateSorter = this.app.data.nextSorter, t = !0), this.app.selectedTran.unregister(), this.app.selectedTran = null, this.app.selectedBchg = null, this.app.candidateTran.refresh(), this.app.candidateTran.register(), this.app.selectedTran = this.app.candidateTran, this.app.candidateSelectedBchg && (this.app.selectedBchg = this.app.candidateSelectedBchg, this.app.selectedAcct = this.app.selectedBchg.targetAcct, this.app.candidateSelectedBchg = null), this.app.candidateTran = null, this.app.candidateSelectedAcct = null, this.app.data.jrnl.refresh(), t && this.app.data.jrnl.sortTranList(), this.app.data.faeSideAssets.refresh(), this.app.data.faeSideEquities.refresh(), this.tranOp = null, this.app.viewNavMode = !0, this.app.navBtnReturn && (this.app.navBtnReturn.click(), this.app.navBtnReturn = null)
      }

      tranEditCancel(e) {
        this.app.candidateTran = null, this.app.candidateSelectedBchg = null, this.tranOp = null, this.app.viewNavMode = !0, this.app.navBtnReturn && (this.app.navBtnReturn.click(), this.app.navBtnReturn = null)
      }

      tranDelete(e) {
        this.tranOp = this.TRAN_OP_DELETE, this.app.viewNavMode = !1
      }

      tranDeleteConfirmed(e) {
        let t;
        if (1 == this.app.selectedTran.parentJrnl.tranList.length) t = null; else {
          let e = this.app.selectedTran.parentJrnl.tranList.findIndex(e => e.id == this.app.selectedTran.id);
          t = e < this.app.selectedTran.parentJrnl.tranList.length - 1 ? this.app.selectedTran.parentJrnl.tranList[e + 1] : this.app.selectedTran.parentJrnl.tranList[e - 1]
        }
        this.app.selectedTran.unregister(), this.app.selectedTran = null, this.app.selectedBchg = null, this.app.data.faeSideAssets.refresh(), this.app.data.faeSideEquities.refresh(), this.app.selectedTran = t, this.tranOp = null, this.app.viewNavMode = !0, this.app.navBtnReturn ? (this.app.navBtnReturn.click(), this.app.navBtnReturn = null) : this.app.selectedTran || this.app.navBtnJrnl.click()
      }

      tranDeleteCancel(e) {
        this.app.viewNavMode = !0, this.app.navBtnReturn && (this.app.navBtnReturn.click(), this.app.navBtnReturn = null)
      }

      bchgNew(e) {
        this.app.viewmodelPopupAcctPicker.open(e, this.callbackBchgNew)
      }

      callbackBchgNew(e, t, n) {
        let i;
        i = t ? t.intraTranIndex : this.app.candidateTran.bchgList.length;
        let r = new a.a(`bchg${e.data.nextBchgId}`, e.candidateTran, n, "", 0);
        e.candidateSelectedBchg = r, e.candidateTran.bchgList.splice(i, 0, r), e.candidateTran.refresh(), e.viewmodelTran.observeForSetInputFocus()
      }

      bchgDelete(e) {
        let t = e.sourceTran;
        t.bchgList.splice(e.intraTranIndex, 1), t.refresh()
      }
    };
    c = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }([Object(i.d)("au-module-tran"), Object(i.e)(r.App), s("design:paramtypes", [Object])], c)
  }, "au-components/au-module-tran.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-views/au-icon-nav-up.html"></require>\n  <require from="au-views/au-icon-nav-down.html"></require>\n  <require from="au-views/au-icon-new.html"></require>\n  <require from="au-views/au-icon-edit.html"></require>\n  <require from="au-views/au-icon-delete.html"></require>\n  <require from="au-views/au-icon-row-mover.html"></require>\n  <require from="au-views/au-icon-ellipsis.html"></require>\n  <require from="au-views/au-text-ellipsis.html"></require>\n  <require from="au-views/au-grid-bchg-cells-spacer.html"></require>\n  <require from="au-converters/au-currency-converter"></require>\n  <require from="au-components/au-grid-bchg-cells-heading"></require>\n  <require from="au-components/au-grid-bchg-cells"></require>\n  <require from="au-components/au-grid-bchg-cells-edit"></require>\n  <require from="au-components/au-grid-bchg-cells-total"></require>\n\n  <div class="aaPanel aaPanelBoxShadow"\n       css="${app.selectedModule == app.MODULE_TRAN ? \'\' : \'display: none;\'}"\n       element.ref="moduleRootElement"\n       id="observedElement">\n    <div class="aaPanelHeader aaPanelHeaderModule">Transaction</div>\n    <template if.bind="app.viewNavMode">\n      <div class="aaPanelToolBar">\n        <div class="aaInlineFlex" style="justify-content: center;">\n          <span class="aaToolBarDivider">.</span>\n          <button type="button"\n                  class="aaBtn"\n                  click.trigger="tranNew($event)">\n            <au-icon-new></au-icon-new>\n            &nbsp;New transaction\n          </button>\n          <button type="button"\n                  class="aaBtn"\n                  click.trigger="tranEdit($event)">\n            <au-icon-edit></au-icon-edit>\n            &nbsp;Edit this transaction\n          </button>\n          <button type="button"\n                  class="aaBtn"\n                  click.trigger="tranDelete($event)">\n            <au-icon-delete></au-icon-delete>\n            &nbsp;Delete this transaction\n            <au-text-ellipsis></au-text-ellipsis>\n          </button>\n          <span class="aaToolBarDivider">.</span>\n        </div>\n      </div>\n      <div class="aaPanelBody">\n        <div class="aaRow"\n             style="border-bottom-style: none;">\n          <label class="aaFormItemLabel">\n            Date:&nbsp;&nbsp;\n          </label>\n          <span class="aaCell aaCellBorder aaCellTranDate">${app.selectedTran.date}</span>\n        </div>\n        <div class="aaGridContainer">\n          <div class="aaGridTitleBar">Account balance changes</div>\n          <div class="aaRow aaRowColumnHeaders aaFontLabel aaFontBold">\n            <div class="aaRowOps aaRowOpsEmpty aaHidden">\n            </div>\n            <div class="aaVerticalGridline" style="background-color: #fff; width: 3px;"></div>\n            <div class="aaRowData">\n              <au-grid-bchg-cells-heading fae-side.one-time="\'asset\'"></au-grid-bchg-cells-heading>\n              <div class="aaVerticalGridline" style="background-color: #fff; width: 3px;"></div>\n              <au-grid-bchg-cells-heading fae-side.one-time="\'equity\'"></au-grid-bchg-cells-heading>\n            </div>\n            <div class="aaVerticalGridline" style="background-color: #fff; width: 3px;"></div>\n          </div>\n          <div class="aaGridScrollableRows aaGridHeightInTran">\n            <template repeat.for="bchg of app.selectedTran.bchgList">\n              <div class="aaRow"\n                   style="border-bottom-width: 3px;"\n                   id="tran-${bchg.id}"\n                   mouseenter.trigger="onRowEnter($event, bchg)"\n                   mouseleave.trigger="onRowLeave($event, bchg)"\n                   click.trigger="app.selectBchg(bchg)"\n                   dblclick.trigger="app.selectTranBchgGoAcct(bchg)">\n                <div class="aaRowOps aaRowOpsEmpty aaBgColorToolbar ${app.selectedBchg.id == bchg.id ? \'aaRowOpsSelected\' : \'\'}">\n                </div>\n                <div class="aaVerticalGridline" style="width: 3px;"></div>\n                <div class="aaRowData aaRowBgColorData  ${app.selectedBchg.id == bchg.id ? \'aaRowDataSelected\' : \'\'}">\n                  <template if.bind="bchg.targetAcct.parentFaeSide.id == \'Equities\'">\n                    \x3c!-- blank space in change-to-asset column --\x3e\n                    <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                    <div class="aaVerticalGridline" style="width: 3px;"></div>\n                  </template>\n                  \x3c!-- column with read-only data cells --\x3e\n                  <au-grid-bchg-cells bchg.one-way="bchg"></au-grid-bchg-cells>\n                  <template if.bind="bchg.targetAcct.parentFaeSide.id == \'Assets\'">\n                    \x3c!-- blank space in change-to-equity column --\x3e\n                    <div class="aaVerticalGridline" style="width: 3px;"></div>\n                    <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                  </template>\n                </div>\n                <div class="aaVerticalGridline" style="width: 3px;"></div>\n              </div>\n            </template>\n            \x3c!--\n            The purpose of having the following invisible end-of-list row\n            is to provide an invisible horizontal spacer if tran.bchgList is empty\n            so as to display the column headings row properly..\n            --\x3e\n            <div class="aaRow aaHidden"\n                 style="border-bottom-width: 3px;">\n              <template if.bind="app.viewNavMode">\n                <div class="aaRowOps aaRowOpsEmpty aaBgColorToolbar">\n                </div>\n                <div class="aaVerticalGridline" style="width: 3px;"></div>\n              </template>\n              <div class="aaRowData aaHidden">\n                <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                <div class="aaVerticalGridline" style="width: 3px;"></div>\n                <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n              </div>\n              <div class="aaVerticalGridline" style="width: 3px;"></div>\n            </div>\n          </div>\n          <div class="aaGridFooterBar"></div>\n        </div>\n        \x3c!-- net change amt for eash side --\x3e\n        <div class="aaGridContainer"\n             style="border-color: transparent; background-color: transparent;">\n          <div class="aaRow aaFontLabel" style="border-color: transparent; background-color: transparent;">\n            <div class="aaRowOps aaRowOpsEmpty aaHidden">\n            </div>\n            <div class="aaVerticalGridline aaHidden" style="width: 3px;"></div>\n            <div class="aaRowData">\n              <au-grid-bchg-cells-total\n                fae-side.one-way="\'assets\'"\n                side-total-changes.one-way="app.selectedTran.totalChangesAssets"\n                other-side-total-changes.one-way="app.selectedTran.totalChangesEquities">\n              </au-grid-bchg-cells-total>\n\n              <div class="aaVerticalGridline aaHidden" style="width: 3px;"></div>\n              <au-grid-bchg-cells-total\n                fae-side.one-way="\'equities\'"\n                side-total-changes.one-way="app.selectedTran.totalChangesEquities"\n                other-side-total-changes.one-way="app.selectedTran.totalChangesAssets">\n              </au-grid-bchg-cells-total>\n            </div>\n            <div class="aaVerticalGridline aaHidden" style="width: 3px;"></div>\n          </div>\n        </div>\n      </div>\n    </template>\n    <template if.bind="!app.viewNavMode && tranOp == TRAN_OP_DELETE">\n      <div class="aaPanelToolBar">\n        <span class="aaToolBarDivider">.</span>\n        <span class="aaFontLabel aaFontBold">Delete transaction:</span>\n        <span class="aaToolBarDivider aaHidden">.</span>\n        <button type="button" class="aaBtnFinish" click.trigger="tranDeleteConfirmed($event)">Confirm</button>\n        <span class="aaToolBarDivider aaHidden">.</span>\n        <button type="button" class="aaBtn" click.trigger="tranDeleteCancel($event)">Cancel</button>\n        <span class="aaToolBarDivider">.</span>\n      </div>\n      <div class="aaPanelBody">\n        <div class="aaRow"\n             style="border-bottom-style: none;">\n          <label class="aaFormItemLabel">\n            Date:&nbsp;&nbsp;\n          </label>\n          <span class="aaCell aaCellBorder aaCellTranDate">${app.selectedTran.date}</span>\n        </div>\n        <div class="aaGridContainer">\n          <div class="aaGridTitleBar">Account balance changes</div>\n          <div class="aaRow aaRowColumnHeaders aaFontLabel aaFontBold">\n            <div class="aaRowData">\n              <au-grid-bchg-cells-heading fae-side.one-time="\'asset\'"></au-grid-bchg-cells-heading>\n              <div class="aaVerticalGridline" style="background-color: #fff; width: 3px;"></div>\n              <au-grid-bchg-cells-heading fae-side.one-time="\'equity\'"></au-grid-bchg-cells-heading>\n            </div>\n            <div class="aaVerticalGridline" style="background-color: #fff; width: 3px;"></div>\n          </div>\n\n          <div class="aaGridScrollableRows aaGridHeightInTran">\n            <template repeat.for="bchg of app.selectedTran.bchgList">\n              <div class="aaRow"\n                   style="border-bottom-width: 3px;"\n                   mouseenter.trigger="onRowEnter($event, bchg)"\n                   mouseleave.trigger="onRowLeave($event, bchg)">\n                <div class="aaRowOps aaRowOpsEmpty aaBgColorToolbar"\n                     style="display: none;">\n                </div>\n                <div class="aaVerticalGridline"\n                     style="width: display: none;"></div>\n                <div class="aaRowData aaRowBgColorData">\n                  <template if.bind="bchg.targetAcct.parentFaeSide.id == \'Equities\'">\n                    \x3c!-- blank space in change-to-asset column --\x3e\n                    <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                    <div class="aaVerticalGridline" style="width: 3px;"></div>\n                  </template>\n                  \x3c!-- column with read-only data cells --\x3e\n                  <au-grid-bchg-cells bchg.one-way="bchg"></au-grid-bchg-cells>\n                  <template if.bind="bchg.targetAcct.parentFaeSide.id == \'Assets\'">\n                    \x3c!-- blank space in change-to-equity column --\x3e\n                    <div class="aaVerticalGridline" style="width: 3px;"></div>\n                    <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                  </template>\n                </div>\n                <div class="aaVerticalGridline" style="width: 3px;"></div>\n              </div>\n            </template>\n            \x3c!--\n            The purpose of having the following invisible end-of-list row\n            is to provide an invisible horizontal spacer if tran.bchgList is empty\n            so as to display the column headings row properly..\n            --\x3e\n            <div class="aaRow aaHidden" style="border-bottom-width: 3px;">\n              <div class="aaRowData aaHidden">\n                <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                <div class="aaVerticalGridline" style="width: 3px;"></div>\n                <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n              </div>\n              <div class="aaVerticalGridline" style="width: 3px;"></div>\n            </div>\n          </div>\n          <div class="aaGridFooterBar"></div>\n        </div>\n        \x3c!-- net change amt for eash side --\x3e\n        <div class="aaGridContainer"\n             style="border-color: transparent; background-color: transparent;">\n          <div class="aaRow aaFontLabel" style="border-color: transparent; background-color: transparent;">\n            <div class="aaRowData">\n              <au-grid-bchg-cells-total\n                fae-side.one-way="\'assets\'"\n                side-total-changes.one-way="app.selectedTran.totalChangesAssets"\n                other-side-total-changes.one-way="app.selectedTran.totalChangesEquities">\n              </au-grid-bchg-cells-total>\n\n              <div class="aaVerticalGridline aaHidden" style="width: 3px;"></div>\n              <au-grid-bchg-cells-total\n                fae-side.one-way="\'equities\'"\n                side-total-changes.one-way="app.selectedTran.totalChangesEquities"\n                other-side-total-changes.one-way="app.selectedTran.totalChangesAssets">\n              </au-grid-bchg-cells-total>\n            </div>\n            <div class="aaVerticalGridline aaHidden" style="width: 3px;"></div>\n          </div>\n        </div>\n      </div>\n    </template>\n    <template if.bind="!app.viewNavMode && (tranOp == TRAN_OP_NEW || tranOp == TRAN_OP_EDIT)" )>\n      <div class="aaPanelToolBar"\n           element.ref="panelToolBar">\n        <span class="aaToolBarDivider">.</span>\n        <template if.bind="tranOp == TRAN_OP_EDIT">\n          <span class="aaFontLabel aaFontBold">Editing transaction:</span>\n          <span class="aaToolBarDivider aaHidden">.</span>\n          <button type="button" class="aaBtnFinish" click.trigger="tranEditDone($event)">Save changes</button>\n          <span class="aaToolBarDivider aaHidden">.</span>\n          <button type="button" class="aaBtn" click.trigger="tranEditCancel($event)">Cancel</button>\n          <span class="aaToolBarDivider">.</span>\n        </template>\n        <template if.bind="tranOp == TRAN_OP_NEW">\n          <span class="aaFontLabel aaFontBold">Creating new transaction:</span>\n          <span class="aaToolBarDivider aaHidden">.</span>\n          <button type="button" class="aaBtnFinish" click.trigger="tranNewDone($event)">Save changes</button>\n          <span class="aaToolBarDivider aaHidden">.</span>\n          <button type="button" class="aaBtn" click.trigger="tranNewCancel($event)">Cancel</button>\n          <span class="aaToolBarDivider">.</span>\n        </template>\n        <div class="aaInlineBlock"></div>\n      </div>\n      <div class="aaPanelBody"\n           element.ref="popupTop">\n        <div class="aaRow"\n             style="border-bottom-style: none;">\n          <label class="aaFormItemLabel">\n            Date:&nbsp;&nbsp;\n          </label>\n          <input type="date"\n                 class="aaCell aaFontData aaCellBorder aaCellTranDate  ${app.candidateTran.date.length == 0 ? \'aaCellErrorIndicater\' : \'\'}"\n                 id="tranInputDate"\n                 value.bind="app.candidateTran.date">\n        </div>\n        <div class="aaGridContainer">\n          <div class="aaGridTitleBar">Account balance changes</div>\n          <div class="aaPanelToolBar" style="text-align: center;">\n            <button type="button"\n                    class="aaBtn"\n                    click.trigger="app.viewmodelPopupBchgMover.open()">\n              <au-icon-row-mover></au-icon-row-mover>\n              &nbsp;Move rows\n              <au-text-ellipsis></au-text-ellipsis>\n            </button>\n          </div>\n          <div class="aaRow aaRowColumnHeaders aaFontLabel aaFontBold">\n            <div class="aaRowOps aaFontLabel aaHidden">\n                <span class="aaBtn">\n                  <au-icon-new></au-icon-new>\n                </span>\n              <span class="aaBtn">\n                  <au-icon-delete></au-icon-delete>\n                </span>\n            </div>\n            <div class="aaVerticalGridline" style="background-color: #fff;  width: 3px;"></div>\n            <div class="aaRowData">\n              <au-grid-bchg-cells-heading fae-side.one-time="\'asset\'"></au-grid-bchg-cells-heading>\n              <div class="aaVerticalGridline" style="background-color: #fff;  width: 3px;"></div>\n              <au-grid-bchg-cells-heading fae-side.one-time="\'equity\'"></au-grid-bchg-cells-heading>\n            </div>\n            <div class="aaVerticalGridline" style="background-color: #fff; width: 3px;"></div>\n          </div>\n          <div class="aaGridScrollableRows aaGridHeightInTran">\n            <template repeat.for="bchg of app.candidateTran.bchgList">\n              <div class="aaRow"\n                   style="border-bottom-width: 3px;"\n                   mouseenter.trigger="onRowEnter($event, bchg)"\n                   mouseleave.trigger="onRowLeave($event, bchg)">\n                <div class="aaRowOps aaBgColorToolbar aaFontLabel">\n                    <span class="aaBtn"\n                          title="Insert new row..."\n                          click.trigger="bchgNew(bchg)">\n                      <au-icon-new></au-icon-new>\n                    </span>\n                  <span class="aaBtn"\n                        title="Delete row..."\n                        click.trigger="bchgDelete(bchg)">\n                      <au-icon-delete></au-icon-delete>\n                    </span>\n                </div>\n                <div class="aaVerticalGridline" style="width: 3px;"></div>\n                <div class="aaRowData aaRowBgColorData">\n                  \x3c!-- spacer if equities side --\x3e\n                  <template if.bind="bchg.targetAcct.parentFaeSide.id == \'Equities\'">\n                    \x3c!-- blank space in change-to-asset column --\x3e\n                    <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                    <div class="aaVerticalGridline" style="width: 3px;"></div>\n                  </template>\n                  \x3c!-- column for editable data cells --\x3e\n                  <au-grid-bchg-cells-edit bchg.one-way="bchg"\n                                           viewmodel-popup-acct-picker.one-time="viewmodelPopupAcctPicker">\n                  </au-grid-bchg-cells-edit>\n                  <template if.bind="bchg.targetAcct.parentFaeSide.id == \'Assets\'">\n                    \x3c!-- blank space in change-to-equity column --\x3e\n                    <div class="aaVerticalGridline" style="width: 3px;"></div>\n                    <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                  </template>\n                </div>\n                <div class="aaVerticalGridline" style="width: 3px;"></div>\n              </div>\n            </template>\n            \x3c!-- End of list row --\x3e\n            <div class="aaRow" style="border-bottom-width: 3px;"\n                 mouseenter.trigger="onRowEnter($event, null)"\n                 mouseleave.trigger="onRowLeave($event, null)">\n              <div class="aaRowOps aaBgColorToolbar aaFontLabel">\n                  <span class="aaBtn"\n                        title="Insert new row..."\n                        click.trigger="bchgNew(null)">\n                    <au-icon-new></au-icon-new>\n                  </span>\n                <span class="aaBtn aaHidden">\n                      <au-icon-delete></au-icon-delete>\n                    </span>\n              </div>\n              <div class="aaVerticalGridline" style="width: 3px;"></div>\n              <div class="aaRowData aaHidden">\n                <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                <div class="aaVerticalGridline" style="width: 3px;"></div>\n                <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n              </div>\n              <div class="aaVerticalGridline" style="width: 3px;"></div>\n            </div>\n          </div>\n          <div class="aaGridFooterBar"></div>\n        </div>\n        \x3c!-- net change amt for eash side --\x3e\n        <div class="aaGridContainer"\n             style="border-color: transparent; background-color: transparent;">\n          <div class="aaRow aaFontLabel" style="border-color: transparent; background-color: transparent;">\n            <div class="aaRowOps aaFontLabel aaHidden">\n              <button type="button" class="aaBtn">\n                <au-icon-new></au-icon-new>\n              </button>\n              <button type="button" class="aaBtn">\n                <au-icon-delete></au-icon-delete>\n              </button>\n            </div>\n            <div class="aaVerticalGridline aaHidden" style="width: 3px;"></div>\n            <div class="aaRowData">\n              <au-grid-bchg-cells-total\n                fae-side.one-way="\'assets\'"\n                side-total-changes.one-way="app.candidateTran.totalChangesAssets"\n                other-side-total-changes.one-way="app.candidateTran.totalChangesEquities">\n              </au-grid-bchg-cells-total>\n              <div class="aaVerticalGridline aaHidden" style="width: 3px;"></div>\n              <au-grid-bchg-cells-total\n                fae-side.one-way="\'equities\'"\n                side-total-changes.one-way="app.candidateTran.totalChangesEquities"\n                other-side-total-changes.one-way="app.candidateTran.totalChangesAssets">\n              </au-grid-bchg-cells-total>\n            </div>\n            <div class="aaVerticalGridline aaHidden" style="width: 3px;"></div>\n          </div>\n        </div>\n      </div>\n    </template>\n  </div>\n</template>\n'
  }, "au-components/au-popup-acct-mover": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuPopupAcctMover", (function () {
      return a
    }));
    var i = n("aurelia-framework"), r = n("app"), o = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let a = class {
      constructor(e) {
        this.moverAcctList = [], this.mouseIsDown = !1, this.selectedMoverRow = null, this.app = e
      }

      open(e, t, n) {
        let i;
        i = e.getBoundingClientRect(), this.moverDialogContent.style.top = `${i.top}px`, i = t.getBoundingClientRect(), this.moverDialogContent.style.left = `${i.left}px`, this.faeSide = n, this.moverAcctList.push(...this.faeSide.acctList), this.moverDialogModal.style.display = "flex"
      }

      done() {
        if (this.moverAcctList.length >= 2) {
          for (let e = 0; e < this.moverGridRows.childElementCount; e++) {
            this.moverGridRows.children[e].listItem.intraSideIndex = e
          }
          this.faeSide.sortAcctList(), this.faeSide.reindexAcctList()
        }
        this.moverAcctList.splice(0, this.moverAcctList.length), this.moverDialogModal.style.display = "none"
      }

      cancel() {
        this.moverAcctList.splice(0, this.moverAcctList.length), this.moverDialogModal.style.display = "none"
      }

      onRowMouseDown(e) {
        let t = e.currentTarget;
        t.children[0].classList.toggle("aaRowOpsSelected", !0), t.children[2].classList.toggle("aaDragging", !0), t.children[2].classList.toggle("aaRowDataHover", !1), this.mouseIsDown = !0, this.selectedMoverRow = e.currentTarget
      }

      onRowMouseUp(e) {
        let t = e.currentTarget;
        t.children[0].classList.toggle("aaRowOpsSelected", !1), t.children[2].classList.toggle("aaDragging", !1), t.children[2].classList.toggle("aaRowDataHover", !0), this.mouseIsDown = !1, this.selectedMoverRow = null
      }

      onRowMouseLeave(e, t) {
        if (!this.mouseIsDown) {
          e.currentTarget.children[2].classList.toggle("aaRowDataHover", !1)
        }
      }

      onRowMouseEnter(e, t) {
        if (!this.mouseIsDown) {
          e.currentTarget.children[2].classList.toggle("aaRowDataHover", !0)
        }
      }

      onListMouseMove(e) {
        if (!this.mouseIsDown || !this.selectedMoverRow) return;
        let t = e.clientY, n = e.currentTarget, i = this.selectedMoverRow.previousElementSibling;
        if (i && t < this.selectedMoverRow.getBoundingClientRect().top) return void n.insertBefore(this.selectedMoverRow, i);
        let r = this.selectedMoverRow.nextElementSibling;
        r && t >= r.getBoundingClientRect().top && n.insertBefore(r, this.selectedMoverRow)
      }

      onListMouseLeave(e) {
        if (this.mouseIsDown && this.selectedMoverRow) return this.selectedMoverRow.children[0].classList.toggle("aaDragging", !1), this.selectedMoverRow.children[0].classList.toggle("aaRowDataHover", !1), this.mouseIsDown = !1, void (this.selectedMoverRow = null)
      }
    };
    a = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }([Object(i.d)("au-popup-acct-mover"), Object(i.e)(r.App), o("design:paramtypes", [Object])], a)
  }, "au-components/au-popup-acct-mover.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-views/au-icon-row-mover.html"></require>\n  <require from="au-converters/au-currency-converter"></require>\n  <require from="au-converters/au-equation-side-converter"></require>\n\n  <div class="aaModal"\n       style="display: none; flex-direction: row; align-items: flex-start; justify-content: center;"\n       element.ref="moverDialogModal">\n    <div class="aaModalContent aaInlineBlock aaPanelBoxShadow"\n         element.ref="moverDialogContent">\n      <div class="aaGridTitleBar" style="font-size: larger;">Move rows<br><span class="aaFontLabel">&mdash; Drag & drop row(s) to desired list position(s). &mdash;</span>\n      </div>\n      <div class="aaPanelToolBar">\n        <div style="text-align: center;">\n          <button type="button" class="aaBtnFinish" click.trigger="done()">Done</button>\n          <button type="button" class="aaBtn" style="margin-left: 4pc;" click.trigger="cancel()">Cancel</button>\n        </div>\n      </div>\n      <div class="aaRow aaRowColumnHeaders aaFontLabel aaFontBold">\n        <div class="aaRowOps aaRowOpsEmpty aaHidden">\n        </div>\n        <div class="aaVerticalGridline" style="background-color: #fff;"></div>\n        <div class="aaRowData">\n          <div class="aaCell aaCellAcctTitle">Title</div>\n          <div class="aaVerticalGridline" style="background-color: #fff;"></div>\n          <div class="aaCell aaCellBchgBal">Balance</div>\n          <div class="aaVerticalGridline" style="background-color: #fff;"></div>\n        </div>\n      </div>\n      <div class="aaGridScrollableRows aaGridHeightInFaeSide"\n           element.ref="moverGridRows"\n           mousemove.trigger="onListMouseMove($event)"\n           mouseleave.trigger="onListMouseLeave($event)">\n        <template repeat.for="listItem of moverAcctList">\n          <div class="aaRow"\n               list-item.to-view="listItem"\n               mouseenter.trigger="onRowMouseEnter($event, listItem)"\n               mouseleave.trigger="onRowMouseLeave($event, listItem)"\n               mousedown.trigger="onRowMouseDown($event)"\n               mouseup.trigger="onRowMouseUp($event)">\n            <div class="aaRowOps aaRowOpsEmpty aaBgColorToolbar">\n            </div>\n            <div class="aaVerticalGridline"></div>\n            <div class="aaRowData aaRowBgColorData">\n              <template if.bind="listItem.isAcct()">\n                <span class="aaCell aaFontData aaCellAcctTitle">${listItem.title}</span>\n                <div class="aaVerticalGridline"></div>\n                <span class="aaCell aaFontData aaCellBchgBal">${listItem.endingBalance | auCurrencyConverter}</span>\n              </template>\n              <template if.bind="listItem.isAnnotation()">\n                <span class="aaCell aaFontData aaCellAnnoTitle">${listItem.annoText}</span>\n                <div class="aaVerticalGridline"></div>\n                <span class="aaCell aaFontData aaCellBchgBal"></span>\n              </template>\n              <div class="aaVerticalGridline"></div>\n            </div>\n          </div>\n        </template>\n        <template if.bind="moverAcctList.length == 0">\n          <div class="aaRow aaHidden">\n            <div class="aaRowOps aaRowOpsEmpty aaBgColorToolbar">\n            </div>\n            <div class="aaVerticalGridline"></div>\n            <div class="aaRowData aaRowBgColorData">\n              <span class="aaCell aaFontData aaCellAcctTitle">x</span>\n              <div class="aaVerticalGridline"></div>\n              <span class="aaCell aaFontData aaCellBchgBal">0</span>\n              <div class="aaVerticalGridline"></div>\n            </div>\n          </div>\n        </template>\n      </div>\n      <div class="aaGridFooterBar"></div>\n    </div>\n  </div>\n</template>\n'
  }, "au-components/au-popup-acct-picker": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuPopupAcctPicker", (function () {
      return a
    }));
    var i = n("aurelia-framework"), r = n("app"), o = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let a = class {
      constructor(e) {
        this.app = e
      }

      open(e, t) {
        this.bchg = e, this.callbackPicked = t;
        let n = this.app.viewmodelTran.popupTop.getBoundingClientRect();
        this.pickerDialogContent.style.marginTop = `${n.top}px`, this.pickerDialogModal.style.display = "flex"
      }

      picked(e) {
        this.callbackPicked(this.app, this.bchg, e), this.pickerDialogModal.style.display = "none"
      }

      cancel() {
        this.pickerDialogModal.style.display = "none"
      }
    };
    a = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }([Object(i.d)("au-popup-acct-picker"), Object(i.e)(r.App), o("design:paramtypes", [Object])], a)
  }, "au-components/au-popup-acct-picker.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-components/au-fae-side-picker"></require>\n  <require from="au-converters/au-equation-side-converter"></require>\n  <div class="aaModal"\n       style="display: none; flex-direction: row; align-items: flex-start; justify-content: center;"\n       element.ref="pickerDialogModal">\n    <div class="aaModalContent aaInlineBlock aaPanelBoxShadow"\n         style="text-align: center;"\n         element.ref="pickerDialogContent">\n      <div\n        class="aaGridTitleBar"\n        style="font-size: larger;">Pick target account\n      </div>\n      <div class="aaPanelToolBar">\n        <div style="text-align: center;">\n          <button type="button" class="aaBtn" click.trigger="cancel()">Cancel</button>\n        </div>\n      </div>\n      <div class="aaPanelBody">\n        <div class="aaEquSideContainer">\n          <au-fae-side-picker\n            fae-side.one-way="app.data.faeSideAssets">\n          </au-fae-side-picker>\n        </div>\n        <div class="aaEquSideContainer" style="padding: 0 1pc;">\n          <h1>=</h1>\n        </div>\n        <div class="aaEquSideContainer">\n          <au-fae-side-picker\n            fae-side.one-way="app.data.faeSideEquities">\n          </au-fae-side-picker>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n'
  }, "au-components/au-popup-alert": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuPopupAlert", (function () {
      return a
    }));
    var i = n("aurelia-framework"), r = n("app"), o = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let a = class {
      constructor(e) {
        this.app = e
      }

      open(e, t, n) {
        this.alertTitle = e, this.marginTop = t, this.alertMsg = n, this.alertDialogModal.style.display = "flex"
      }

      close() {
        this.alertDialogModal.style.display = "none"
      }
    };
    a = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }([Object(i.d)("au-popup-alert"), Object(i.e)(r.App), o("design:paramtypes", [r.App])], a)
  }, "au-components/au-popup-alert.html": function (e, t) {
    e.exports = '<template>\n  <style>\n    .aaAlert {\n      background-color: #f0f0f0;\n      display: inline-flex;\n      flex-direction: column;\n      align-items: stretch;\n      justify-content: flex-start;\n      padding: 10px;\n    }\n\n    .aaAlertTitleBar {\n      display: block;\n      margin: 0 0 15px 0;\n      border-bottom: 1px solid #58b;\n    }\n\n    .aaAlertBody {\n      display: inline-flex;\n      flex-direction: row;\n      align-items: center;\n      background-color: #fff;\n      border: 1px solid #58B;\n      padding: 5px;\n    }\n\n    /* The Close Button */\n    .aaClose {\n      color: #000;\n      float: right;\n      font-weight: bold;\n      padding: 0 6px;\n      margin-bottom: 5px;\n      border: 1px solid transparent;\n      border-radius: 0.25pc;\n    }\n\n    .aaClose:hover,\n    .aaClose:focus {\n      color: #333;\n      text-decoration: none;\n      cursor: pointer;\n      border-color: #333;\n    }\n  </style>\n  <div class="aaModal"\n       style="display: none;\n              flex-direction: row;\n              align-items: flex-start;\n              justify-content: center;"\n       element.ref="alertDialogModal">\n    <div class="aaModalContent aaAlert aaPanelBoxShadow aaPanel aaSansSerif"\n         css="margin-top: ${marginTop}px;"\n         element.ref="alertDialogContent">\n      <div class="aaAlertTitleBar">\n        <span class="aaClose"\n              click.trigger="close()">\n            &times;\n        </span>\n        <div style="display: flex; color: #000;">\n          ${alertTitle}\n        </div>\n      </div>\n      <div class="aaAlertBody">\n        <div style="color:red;\n                    margin: 5px;\n                    font-size: x-large;">\n\x3c!--\n          <i class="fas fa-ban"></i>\n          <i class="fas fa-exclamation"></i>\n          <i class="fas fa-circle"></i>\n          <i class="far fa-exclamation-circle"></i>\n          <i class="fas fa-exclamation-triangle"></i>\n          <i class="far fa-exclamation-triangle"></i>\n          <i class="fas fa-exclamation-circle"></i>\n          <i class="far fa-meh"></i>\n--\x3e\n          <i class="fas fa-meh"></i>\n        </div>\n        <div class="aaFontData"\n             style="margin: 5px;">\n          ${alertMsg}\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n'
  }, "au-components/au-popup-bchg-mover": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuPopupBchgMover", (function () {
      return a
    }));
    var i = n("aurelia-framework"), r = n("app"), o = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let a = class {
      constructor(e) {
        this.moverBchgList = [], this.mouseIsDown = !1, this.selectedMoverRow = null, this.app = e
      }

      open() {
        this.moverBchgList.push(...this.app.candidateTran.bchgList);
        let e = this.app.viewmodelTran.popupTop.getBoundingClientRect();
        this.moverDialogContent.style.marginTop = `${e.top}px`, this.moverDialogModal.style.display = "flex"
      }

      done(e) {
        if (this.moverBchgList.length >= 2) {
          for (let e = 0; e < this.moverGridRows.childElementCount; e++) {
            this.moverGridRows.children[e].moverBchg.intraTranIndex = e
          }
          this.app.candidateTran.sortBchgList()
        }
        this.moverBchgList.splice(0, this.moverBchgList.length), this.moverDialogModal.style.display = "none"
      }

      cancel(e) {
        this.moverBchgList.splice(0, this.moverBchgList.length), this.moverDialogModal.style.display = "none"
      }

      onRowMouseDown(e) {
        let t = e.currentTarget;
        t.children[0].classList.toggle("aaRowOpsSelected", !0), t.children[2].classList.toggle("aaDragging", !0), t.children[2].classList.toggle("aaRowDataHover", !1), this.mouseIsDown = !0, this.selectedMoverRow = e.currentTarget
      }

      onRowMouseUp(e) {
        let t = e.currentTarget;
        t.children[0].classList.toggle("aaRowOpsSelected", !1), t.children[2].classList.toggle("aaDragging", !1), t.children[2].classList.toggle("aaRowDataHover", !0), this.mouseIsDown = !1, this.selectedMoverRow = null
      }

      onRowMouseLeave(e, t) {
        if (!this.mouseIsDown) {
          e.currentTarget.children[2].classList.toggle("aaRowDataHover", !1)
        }
      }

      onRowMouseEnter(e, t) {
        if (!this.mouseIsDown) {
          e.currentTarget.children[2].classList.toggle("aaRowDataHover", !0)
        }
      }

      onListMouseMove(e) {
        if (!this.mouseIsDown || !this.selectedMoverRow) return;
        let t = e.clientY, n = e.currentTarget, i = this.selectedMoverRow.previousElementSibling;
        if (i && t < this.selectedMoverRow.getBoundingClientRect().top) return void n.insertBefore(this.selectedMoverRow, i);
        let r = this.selectedMoverRow.nextElementSibling;
        r && t >= r.getBoundingClientRect().top && n.insertBefore(r, this.selectedMoverRow)
      }

      onListMouseLeave(e) {
        if (this.mouseIsDown && this.selectedMoverRow) return this.selectedMoverRow.children[0].classList.toggle("aaDragging", !1), this.selectedMoverRow.children[0].classList.toggle("aaRowDataHover", !1), this.mouseIsDown = !1, void (this.selectedMoverRow = null)
      }
    };
    a = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }([Object(i.d)("au-popup-bchg-mover"), Object(i.e)(r.App), o("design:paramtypes", [r.App])], a)
  }, "au-components/au-popup-bchg-mover.html": function (e, t, n) {
    e.exports = '<template>\n  <require from="au-converters/au-currency-converter"></require>\n  <require from="au-converters/au-equation-side-converter"></require>\n  <require from="au-components/au-grid-bchg-cells"></require>\n  <require from="au-views/au-grid-bchg-cells-spacer.html"></require>\n  <require from="au-components/au-grid-bchg-cells-heading"></require>\n\n  <div class="aaModal"\n       style="display: none; flex-direction: row; align-items: flex-start; justify-content: center;"\n       element.ref="moverDialogModal">\n    <div class="aaModalContent aaInlineBlock aaPanelBoxShadow"\n         element.ref="moverDialogContent">\n      <div class="aaGridTitleBar" style="font-size: larger;">Move rows<br><span class="aaFontLabel">&mdash; Drag & drop row(s) to desired list position(s). &mdash;</span>\n      </div>\n      <div class="aaPanelToolBar">\n        <div style="text-align: center;">\n          <span click.trigger="done($event)" class="aaBtnFinish">Done</span>\n          <span click.trigger="cancel($event)" class="aaBtn" style="margin-left: 4pc;">Cancel</span>\n        </div>\n      </div>\n      <div class="aaRow aaRowColumnHeaders aaFontLabel aaFontBold">\n        <div class="aaRowOps aaRowOpsEmpty aaHidden">\n        </div>\n        <div class="aaVerticalGridline" style="background-color: #fff; width: 3px;"></div>\n        <div class="aaRowData">\n          <au-grid-bchg-cells-heading fae-side.one-time="\'asset\'"></au-grid-bchg-cells-heading>\n          <div class="aaVerticalGridline" style="background-color: #fff; width: 3px;"></div>\n          <au-grid-bchg-cells-heading fae-side.one-time="\'equity\'"></au-grid-bchg-cells-heading>\n        </div>\n        <div class="aaVerticalGridline" style="background-color: #fff; width: 3px;"></div>\n      </div>\n      <div class="aaGridScrollableRows aaGridHeightInFaeSide"\n           element.ref="moverGridRows"\n           mousemove.trigger="onListMouseMove($event)"\n           mouseleave.trigger="onListMouseLeave($event)">\n        <template repeat.for="bchg of moverBchgList">\n          <div class="aaRow"\n               style="border-bottom-width: 3px;"\n               mover-bchg.one-time="bchg"\n               mouseenter.trigger="onRowMouseEnter($event, bchg)"\n               mouseleave.trigger="onRowMouseLeave($event, bchg)"\n               mousedown.trigger="onRowMouseDown($event)"\n               mouseup.trigger="onRowMouseUp($event)">\n            <div class="aaRowOps aaRowOpsEmpty aaBgColorToolbar">\n            </div>\n            <div class="aaVerticalGridline" style="width: 3px;"></div>\n            <div class="aaRowData aaRowBgColorData">\n              \x3c!-- spacer if equities side --\x3e\n              <template if.bind="bchg.targetAcct.parentFaeSide.id == \'Equities\'">\n                \x3c!-- put blank space in change-to-asset column --\x3e\n                <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                <div class="aaVerticalGridline" style="width: 3px;"></div>\n              </template>\n              \x3c!-- simulate data cells with spacer --\x3e\n              <au-grid-bchg-cells bchg.one-way="bchg"></au-grid-bchg-cells>\n              <template if.bind="bchg.targetAcct.parentFaeSide.id == \'Assets\'">\n                \x3c!-- put blank space in change-to-equity column --\x3e\n                <div class="aaVerticalGridline" style="width: 3px;"></div>\n                <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n              </template>\n            </div>\n            <div class="aaVerticalGridline" style="width: 3px;"></div>\n          </div>\n        </template>\n        <template if.bind="moverBchgList.length == 0">\n          <div class="aaRow aaHidden" style="border-bottom-width: 3px;">\n            <div class="aaRowOps aaRowOpsEmpty aaBgColorToolbar">\n            </div>\n            <div class="aaVerticalGridline" style="width: 3px;"></div>\n            <div class="aaRowData aaRowBgColorData">\n                <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n                <div class="aaVerticalGridline" style="width: 3px;"></div>\n                <au-grid-bchg-cells-spacer></au-grid-bchg-cells-spacer>\n            </div>\n            <div class="aaVerticalGridline" style="width: 3px;"></div>\n          </div>\n        </template>\n      </div>\n      <div class="aaGridFooterBar"></div>\n    </div>\n  </div>\n</template>\n'
  }, "au-converters/au-currency-converter": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuCurrencyConverter", (function () {
      return r
    }));
    var i = n("aurelia-framework");
    let r = class {
      toView(e) {
        return Intl.NumberFormat("en-US", {
          style: "decimal",
          useGrouping: !0,
          minimumIntegerDigits: 1,
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(e)
      }
    };
    r = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }([Object(i.f)("auCurrencyConverter")], r)
  }, "au-converters/au-equation-side-converter": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AuEquationSideConverter", (function () {
      return a
    }));
    var i = n("aurelia-framework"), r = n("app"), o = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let a = class {
      constructor(e) {
        this.app = null, this.app = e
      }

      toView(e, t, n) {
        return "Assets" == e ? `${t ? "A" : "a"}sset${n ? "s" : ""}` : "Equities" == e ? `${t ? "E" : "e"}quit${n ? "ies" : "y"}` : "[equation side logic fault]"
      }
    };
    a = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }([Object(i.f)("auEquationSideConverter"), Object(i.e)(r.App), o("design:paramtypes", [Object])], a)
  }, "au-views/au-grid-bchg-cells-spacer.html": function (e, t) {
    e.exports = '  <template>\n    <div class="aaBchgCells aaHidden">\n      \x3c!-- 1st row\n      NOT NEEDED\n      --\x3e\n\n      \x3c!-- 2nd row --\x3e\n      <div class="aaBchgCellsRow">\n        \x3c!-- change description --\x3e\n        <div class="aaCell aaCellBorder aaCellBchgDesc">\n        </div>\n        \x3c!-- change amount --\x3e\n        <div class="aaCellWrapper" style="margin-left: 1pc;">\n          <div class="aaCell aaCellBorder aaCellBchgAmt">\n          </div>\n          <div class="aaCellHelper aaHidden">\n            <button type="button" class="aaBtn aaHelperBtn">\n              <span class="fa fa-balance-scale fa-fw" aria-hidden="true"></span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </template>\n\n'
  }, "au-views/au-icon-balance-scale.html": function (e, t) {
    e.exports = '<template>\n  <span class="fa fa-balance-scale fa-fw aaIconBlack" aria-hidden="true" aria-hidden="true"></span>\n</template>\n'
  }, "au-views/au-icon-delete.html": function (e, t) {
    e.exports = '<template>\n  <span class="fa fa-minus-circle fa-fw aaIconRed" aria-hidden="true"></span>\n</template>\n'
  }, "au-views/au-icon-edit.html": function (e, t) {
    e.exports = '<template>\n  <span class="fa fa-pencil-square-o fa-fw aaIconBlue" aria-hidden="true"></span>\n</template>\n'
  }, "au-views/au-icon-ellipsis.html": function (e, t) {
    e.exports = '<template>\n  <span class="fa fa-ellipsis-h fa-fw aaIconBlack" aria-hidden="true" aria-hidden="true"></span>\n</template>\n'
  }, "au-views/au-icon-map-marker-candidate.html": function (e, t) {
    e.exports = '<template>\n  <i class="fas fa-map-marker-alt"\n     style="color: #ddd; font-size: large; margin-right: 5px"></i>\n</template>\n'
  }, "au-views/au-icon-map-marker.html": function (e, t) {
    e.exports = '<template>\n  <i class="fas fa-map-marker-alt"\n     style="color: #EA4335; font-size: large; margin-right: 5px"></i>\n</template>\n'
  }, "au-views/au-icon-nav-down.html": function (e, t) {
    e.exports = '<template>\n  <span class="fa fa-arrow-down fa-fw" aria-hidden="true"></span>\n</template>\n'
  }, "au-views/au-icon-nav-up.html": function (e, t) {
    e.exports = '<template>\n  <span class="fa fa-arrow-up fa-fw" aria-hidden="true"></span>\n</template>\n'
  }, "au-views/au-icon-new.html": function (e, t) {
    e.exports = '<template>\n  <span class="fa fa-plus-circle fa-fw aaIconGreen" aria-hidden="true"></span>\n</template>\n'
  }, "au-views/au-icon-row-mover.html": function (e, t) {
    e.exports = '<template>\n  <span class="fa fa-arrows-v fa-fw aaIconBlue" aria-hidden="true"></span>\n</template>\n'
  }, "au-views/au-text-ellipsis.html": function (e, t) {
    e.exports = '<template>\n  <span class="aaFontBold">...</span>\n</template>\n'
  }, "aurelia-event-aggregator": function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
      return s
    })), n.d(t, "configure", (function () {
      return c
    }));
    var i = n(4).getLogger("event-aggregator"), r = function () {
      function e(e, t) {
        this.messageType = e, this.callback = t
      }

      return e.prototype.handle = function (e) {
        e instanceof this.messageType && this.callback.call(null, e)
      }, e
    }();

    function o(e, t, n) {
      try {
        e(t, n)
      } catch (e) {
        i.error(e)
      }
    }

    function a(e, t) {
      try {
        e.handle(t)
      } catch (e) {
        i.error(e)
      }
    }

    var s = function () {
      function e() {
        this.eventLookup = {}, this.messageHandlers = []
      }

      return e.prototype.publish = function (e, t) {
        var n = void 0, i = void 0;
        if (!e) throw new Error("Event was invalid.");
        if ("string" == typeof e) {
          if (n = this.eventLookup[e]) for (i = (n = n.slice()).length; i--;) o(n[i], t, e)
        } else for (i = (n = this.messageHandlers.slice()).length; i--;) a(n[i], e)
      }, e.prototype.subscribe = function (e, t) {
        var n = void 0, i = void 0;
        if (!e) throw new Error("Event channel/type was invalid.");
        return "string" == typeof e ? (n = t, i = this.eventLookup[e] || (this.eventLookup[e] = [])) : (n = new r(e, t), i = this.messageHandlers), i.push(n), {
          dispose: function () {
            var e = i.indexOf(n);
            -1 !== e && i.splice(e, 1)
          }
        }
      }, e.prototype.subscribeOnce = function (e, t) {
        var n = this.subscribe(e, (function (e, i) {
          return n.dispose(), t(e, i)
        }));
        return n
      }, e
    }();

    function c(e) {
      var t, n;
      e.instance(s, (t = e.aurelia, n = new s, t.subscribeOnce = function (e, t) {
        return n.subscribeOnce(e, t)
      }, t.subscribe = function (e, t) {
        return n.subscribe(e, t)
      }, t.publish = function (e, t) {
        n.publish(e, t)
      }, n))
    }
  }, "aurelia-framework": function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "Aurelia", (function () {
        return d
      }));
      var i = n(4), r = n(6), o = n(10), a = n(3), s = n(0), c = n(7);
      n.d(t, "e", (function () {
        return r.c
      }));
      var l = n(2);
      n.d(t, "f", (function () {
        return l.A
      }));
      n(1);
      n.d(t, "b", (function () {
        return a.q
      })), n.d(t, "c", (function () {
        return a.r
      })), n.d(t, "d", (function () {
        return a.s
      }));
      n(13);
      var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      var d = function () {
        function t(e, n, c) {
          this.loader = e || new s.d.Loader, this.container = n || (new r.a).makeGlobal(), this.resources = c || new a.o, this.use = new w(this), this.logger = i.getLogger("aurelia"), this.hostConfigured = !1, this.host = null, this.use.instance(t, this), this.use.instance(o.a, this.loader), this.use.instance(a.o, this.resources)
        }

        return t.prototype.start = function () {
          var e = this;
          return this._started ? this._started : (this.logger.info("Aurelia Starting"), this._started = this.use.apply().then((function () {
            if (s.b.addEventListener("submit", (function (e) {
              var t = e.target, n = t.action;
              "form" !== t.tagName.toLowerCase() || n || e.preventDefault()
            })), !e.container.hasResolver(a.c)) {
              var t = "You must configure Aurelia with a BindingLanguage implementation.";
              throw e.logger.error(t), new Error(t)
            }
            e.logger.info("Aurelia Started");
            var n = s.b.createCustomEvent("aurelia-started", {bubbles: !0, cancelable: !0});
            return s.b.dispatchEvent(n), e
          })))
        }, t.prototype.enhance = function () {
          var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return this._configureHost(i || s.b.querySelectorAll("body")[0]), new e((function (e) {
            var i = t.container.get(a.k);
            t.root = i.enhance({
              container: t.container,
              element: t.host,
              resources: t.resources,
              bindingContext: n
            }), t.root.attached(), t._onAureliaComposed(), e(t)
          }))
        }, t.prototype.setRoot = function () {
          var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = {};
          this.root && this.root.viewModel && this.root.viewModel.router && (this.root.viewModel.router.deactivate(), this.root.viewModel.router.reset()), this._configureHost(n);
          var r = this.container.get(a.k), o = this.container.get(a.f);
          return delete o.initialComposition, t || (t = this.configModuleId ? Object(c.d)("./app", this.configModuleId) : "app"), i.viewModel = t, i.container = i.childContainer = this.container, i.viewSlot = this.hostSlot, i.host = this.host, r.compose(i).then((function (t) {
            return e.root = t, i.viewSlot.attached(), e._onAureliaComposed(), e
          }))
        }, t.prototype._configureHost = function (e) {
          if (!this.hostConfigured) {
            if (e = e || this.host, this.host = e && "string" != typeof e ? e : s.b.getElementById(e || "applicationHost"), !this.host) throw new Error("No applicationHost was specified.");
            this.hostConfigured = !0, this.host.aurelia = this, this.hostSlot = new a.p(this.host, !0), this.hostSlot.transformChildNodesIntoView(), this.container.registerInstance(s.b.boundary, this.host)
          }
        }, t.prototype._onAureliaComposed = function () {
          var e = s.b.createCustomEvent("aurelia-composed", {bubbles: !0, cancelable: !0});
          setTimeout((function () {
            return s.b.dispatchEvent(e)
          }), 1)
        }, t
      }(), h = i.getLogger("aurelia"), p = /\.[^/.]+$/;

      function f(t, n) {
        var i = void 0;
        return function r() {
          return (i = n.shift()) ? e.resolve(i(t)).then(r) : e.resolve()
        }()
      }

      function v(t, n, i) {
        if (0 === Object.keys(n).length) return e.resolve();
        var r = t.container.get(a.m);
        return e.all(Object.keys(n).map((function (e) {
          return function (e) {
            var n = e.moduleId, i = g(n);
            o(n) && (n = s(n));
            return t.loader.normalize(n, e.relativeTo).then((function (t) {
              return {name: e.moduleId, importId: o(e.moduleId) ? c(t, i) : t}
            }))
          }(n[e])
        }))).then((function (e) {
          var t = [], n = [];
          return e.forEach((function (e) {
            t.push(void 0), n.push(e.importId)
          })), r.importViewResources(n, t, i)
        }));

        function o(e) {
          var t = g(e);
          return !!t && ("" !== t && (".js" !== t && ".ts" !== t))
        }

        function s(e) {
          return e.replace(p, "")
        }

        function c(e, t) {
          return s(e) + "." + t
        }
      }

      function g(e) {
        var t = e.match(p);
        if (t && t.length > 0) return t[0].split(".")[1]
      }

      function m(t) {
        return e.all(t.behaviorsToLoad.map((function (e) {
          return e.load(t.container, e.target)
        }))).then((function () {
          t.behaviorsToLoad = null
        }))
      }

      function y(e) {
        if (e.processed) throw new Error("This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.")
      }

      function b(e, t) {
        return "Invalid " + t + " [" + e + "], " + t + " must be specified as functions or relative module IDs."
      }

      var w = function () {
        function t(e) {
          var t = this;
          this.aurelia = e, this.container = e.container, this.info = [], this.processed = !1, this.preTasks = [], this.postTasks = [], this.behaviorsToLoad = [], this.configuredPlugins = [], this.resourcesToLoad = {}, this.preTask((function () {
            return e.loader.normalize("aurelia-bootstrapper").then((function (e) {
              return t.bootstrapperName = e
            }))
          })), this.postTask((function () {
            return v(e, t.resourcesToLoad, e.resources)
          }))
        }

        return t.prototype.instance = function (e, t) {
          return this.container.registerInstance(e, t), this
        }, t.prototype.singleton = function (e, t) {
          return this.container.registerSingleton(e, t), this
        }, t.prototype.transient = function (e, t) {
          return this.container.registerTransient(e, t), this
        }, t.prototype.preTask = function (e) {
          return y(this), this.preTasks.push(e), this
        }, t.prototype.postTask = function (e) {
          return y(this), this.postTasks.push(e), this
        }, t.prototype.feature = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          switch (void 0 === e ? "undefined" : u(e)) {
            case"string":
              var n = /\/index$/i.test(e), i = n || g(e) ? e : e + "/index", r = n ? e.substr(0, e.length - 6) : e;
              this.info.push({moduleId: i, resourcesRelativeTo: [r, ""], config: t});
              break;
            case"function":
              this.info.push({configure: e, config: t || {}});
              break;
            default:
              throw new Error(b(e, "feature"))
          }
          return this
        }, t.prototype.globalResources = function (e) {
          var t = this;
          y(this);
          for (var n = Array.isArray(e) ? e : arguments, i = void 0, r = this.resourcesRelativeTo || ["", ""], o = 0, s = n.length; o < s; ++o) switch (void 0 === (i = n[o]) ? "undefined" : u(i)) {
            case"string":
              var l = r[0], d = r[1], h = i;
              (i.startsWith("./") || i.startsWith("../")) && "" !== l && (h = Object(c.b)(l, i)), this.resourcesToLoad[h] = {
                moduleId: h,
                relativeTo: d
              };
              break;
            case"function":
              var p = this.aurelia.resources.autoRegister(this.container, i);
              p instanceof a.g && null !== p.elementName && 1 === this.behaviorsToLoad.push(p) && this.postTask((function () {
                return m(t)
              }));
              break;
            default:
              throw new Error(b(i, "resource"))
          }
          return this
        }, t.prototype.globalName = function (e, t) {
          return y(this), this.resourcesToLoad[e] = {moduleId: t, relativeTo: ""}, this
        }, t.prototype.plugin = function (e, t) {
          y(this);
          var n = void 0;
          switch (void 0 === e ? "undefined" : u(e)) {
            case"string":
              n = {moduleId: e, resourcesRelativeTo: [e, ""], config: t || {}};
              break;
            case"function":
              n = {configure: e, config: t || {}};
              break;
            default:
              throw new Error(b(e, "plugin"))
          }
          return this.info.push(n), this
        }, t.prototype._addNormalizedPlugin = function (t, n) {
          var i = this, r = {moduleId: t, resourcesRelativeTo: [t, ""], config: n || {}};
          return this.info.push(r), this.preTask((function () {
            var n = [t, i.bootstrapperName];
            return r.moduleId = t, r.resourcesRelativeTo = n, e.resolve()
          })), this
        }, t.prototype.defaultBindingLanguage = function () {
          return this._addNormalizedPlugin("aurelia-templating-binding")
        }, t.prototype.router = function () {
          return this._addNormalizedPlugin("aurelia-templating-router")
        }, t.prototype.history = function () {
          return this._addNormalizedPlugin("aurelia-history-browser")
        }, t.prototype.defaultResources = function () {
          return this._addNormalizedPlugin("aurelia-templating-resources")
        }, t.prototype.eventAggregator = function () {
          return this._addNormalizedPlugin("aurelia-event-aggregator")
        }, t.prototype.basicConfiguration = function () {
          return this.defaultBindingLanguage().defaultResources().eventAggregator()
        }, t.prototype.standardConfiguration = function () {
          return this.basicConfiguration().history().router()
        }, t.prototype.developmentLogging = function (e) {
          var t = this, n = e ? i.logLevel[e] : void 0;
          return void 0 === n && (n = i.logLevel.debug), this.preTask((function () {
            return t.aurelia.loader.normalize("aurelia-logging-console", t.bootstrapperName).then((function (e) {
              return t.aurelia.loader.loadModule(e).then((function (e) {
                i.addAppender(new e.ConsoleAppender), i.setLevel(n)
              }))
            }))
          })), this
        }, t.prototype.apply = function () {
          var t = this;
          return this.processed ? e.resolve() : f(this, this.preTasks).then((function () {
            var n = t.aurelia.loader, i = t.info, r = void 0;
            return function o() {
              return (r = i.shift()) ? function (t, n, i) {
                if (h.debug("Loading plugin " + i.moduleId + "."), "string" == typeof i.moduleId) {
                  t.resourcesRelativeTo = i.resourcesRelativeTo;
                  var r = i.moduleId;
                  return i.resourcesRelativeTo.length > 1 ? n.normalize(i.moduleId, i.resourcesRelativeTo[1]).then((function (e) {
                    return o(e)
                  })) : o(r)
                }
                if ("function" == typeof i.configure) return -1 !== t.configuredPlugins.indexOf(i.configure) ? e.resolve() : (t.configuredPlugins.push(i.configure), e.resolve(i.configure.call(null, t, i.config || {})));
                throw new Error(b(i.moduleId || i.configure, "plugin"));

                function o(r) {
                  return n.loadModule(r).then((function (n) {
                    if ("configure" in n) return -1 !== t.configuredPlugins.indexOf(n.configure) ? e.resolve() : e.resolve(n.configure(t, i.config || {})).then((function () {
                      t.configuredPlugins.push(n.configure), t.resourcesRelativeTo = null, h.debug("Configured plugin " + i.moduleId + ".")
                    }));
                    t.resourcesRelativeTo = null, h.debug("Loaded plugin " + i.moduleId + ".")
                  }))
                }
              }(t, n, r).then(o) : (t.processed = !0, t.configuredPlugins = null, e.resolve())
            }().then((function () {
              return f(t, t.postTasks)
            }))
          }))
        }, t
      }()
    }).call(this, n(8))
  }, "aurelia-history-browser": function (e, t, n) {
    "use strict";
    n.d(t, "configure", (function () {
      return v
    }));
    var i = n(18), r = n(0), o = function (e, t) {
      return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
        e.__proto__ = t
      } || function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
      })(e, t)
    };

    function a(e, t) {
      function n() {
        this.constructor = e
      }

      o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }

    var s = function () {
      function e() {
      }

      return e.prototype.activate = function (e) {
      }, e.prototype.deactivate = function () {
      }, e
    }(), c = function (e) {
      function t() {
        var n = e.call(this) || this;
        return n.handler = function (e) {
          var i = t.getEventInfo(e), r = i.shouldHandleEvent, o = i.href;
          r && (e.preventDefault(), n.history.navigate(o))
        }, n
      }

      return a(t, e), t.prototype.activate = function (e) {
        e._hasPushState && (this.history = e, r.b.addEventListener("click", this.handler, !0))
      }, t.prototype.deactivate = function () {
        r.b.removeEventListener("click", this.handler, !0)
      }, t.getEventInfo = function (e) {
        var n = e, i = {shouldHandleEvent: !1, href: null, anchor: null}, r = t.findClosestAnchor(n.target);
        if (!r || !t.targetIsThisWindow(r)) return i;
        if (l(r, "download") || l(r, "router-ignore") || l(r, "data-router-ignore")) return i;
        if (n.altKey || n.ctrlKey || n.metaKey || n.shiftKey) return i;
        var o = r.getAttribute("href");
        i.anchor = r, i.href = o;
        var a = 1 === n.which, s = o && !("#" === o.charAt(0) || /^[a-z]+:/i.test(o));
        return i.shouldHandleEvent = a && s, i
      }, t.findClosestAnchor = function (e) {
        for (; e;) {
          if ("A" === e.tagName) return e;
          e = e.parentNode
        }
      }, t.targetIsThisWindow = function (e) {
        var t = e.getAttribute("target"), n = r.d.global;
        return !t || t === n.name || "_self" === t
      }, t
    }(s), l = function (e, t) {
      return e.hasAttribute(t)
    }, u = function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return n._isActive = !1, n._checkUrlCallback = n._checkUrl.bind(n), n.location = r.d.location, n.history = r.d.history, n.linkHandler = t, n
      }

      return a(t, e), t.prototype.activate = function (e) {
        if (this._isActive) throw new Error("History has already been activated.");
        var t = this.history, n = !!e.pushState;
        this._isActive = !0;
        var i, o = this.options = Object.assign({}, {root: "/"}, this.options, e),
          a = this.root = ("/" + o.root + "/").replace(h, "/"), s = this._wantsHashChange = !1 !== o.hashChange,
          c = this._hasPushState = !!(o.pushState && t && t.pushState);
        if (c ? i = "popstate" : s && (i = "hashchange"), r.d.addEventListener(i, this._checkUrlCallback), s && n) {
          var l = this.location, u = l.pathname.replace(/[^\/]$/, "$&/") === a;
          if (!c && !u) {
            var p = this.fragment = this._getFragment(null, !0);
            return l.replace(a + l.search + "#" + p), !0
          }
          if (c && u && l.hash) {
            p = this.fragment = this._getHash().replace(d, "");
            t.replaceState({}, r.b.title, a + p + l.search)
          }
        }
        if (this.fragment || (this.fragment = this._getFragment("")), this.linkHandler.activate(this), !o.silent) return this._loadUrl("")
      }, t.prototype.deactivate = function () {
        var e = this._checkUrlCallback;
        r.d.removeEventListener("popstate", e), r.d.removeEventListener("hashchange", e), this._isActive = !1, this.linkHandler.deactivate()
      }, t.prototype.getAbsoluteRoot = function () {
        var e, t, n, i = this.location;
        return "" + (e = i.protocol, t = i.hostname, n = i.port, e + "//" + t + (n ? ":" + n : "")) + this.root
      }, t.prototype.navigate = function (e, t) {
        var n = void 0 === t ? {} : t, i = n.trigger, o = void 0 === i || i, a = n.replace, s = void 0 !== a && a,
          c = this.location;
        if (e && f.test(e)) return c.href = e, !0;
        if (!this._isActive) return !1;
        if (e = this._getFragment(e || ""), this.fragment === e && !s) return !1;
        this.fragment = e;
        var l = this.root + e;
        return "" === e && "/" !== l && (l = l.slice(0, -1)), this._hasPushState ? (l = l.replace("//", "/"), this.history[s ? "replaceState" : "pushState"]({}, r.b.title, l)) : this._wantsHashChange ? function (e, t, n) {
          if (n) {
            var i = e.href.replace(/(javascript:|#).*$/, "");
            e.replace(i + "#" + t)
          } else e.hash = "#" + t
        }(c, e, s) : c.assign(l), !o || this._loadUrl(e)
      }, t.prototype.navigateBack = function () {
        this.history.back()
      }, t.prototype.setTitle = function (e) {
        r.b.title = e
      }, t.prototype.setState = function (e, t) {
        var n = this.history, i = Object.assign({}, n.state), r = this.location, o = r.pathname, a = r.search,
          s = r.hash;
        i[e] = t, n.replaceState(i, null, "" + o + a + s)
      }, t.prototype.getState = function (e) {
        return Object.assign({}, this.history.state)[e]
      }, t.prototype.getHistoryIndex = function () {
        var e = this.getState("HistoryIndex");
        return void 0 === e && (e = this.history.length - 1, this.setState("HistoryIndex", e)), e
      }, t.prototype.go = function (e) {
        this.history.go(e)
      }, t.prototype._getHash = function () {
        return this.location.hash.substr(1)
      }, t.prototype._getFragment = function (e, t) {
        var n;
        if (!e) if (this._hasPushState || !this._wantsHashChange || t) {
          var i = this.location;
          e = i.pathname + i.search, n = this.root.replace(p, ""), e.indexOf(n) || (e = e.substr(n.length))
        } else e = this._getHash();
        return "/" + e.replace(d, "")
      }, t.prototype._checkUrl = function () {
        this._getFragment("") !== this.fragment && this._loadUrl("")
      }, t.prototype._loadUrl = function (e) {
        var t = this.fragment = this._getFragment(e);
        return !!this.options.routeHandler && this.options.routeHandler(t)
      }, t.inject = [s], t
    }(i.a), d = /^#?\/*|\s+$/g, h = /^\/+|\/+$/g, p = /\/$/, f = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

    function v(e) {
      var t = e;
      t.singleton(i.a, u), t.transient(s, c)
    }
  }, "aurelia-logging-console": function (e, t, n) {
    "use strict";
    n.d(t, "ConsoleAppender", (function () {
      return i
    }));
    var i = function () {
      function e() {
      }

      return e.prototype.debug = function (e) {
        for (var t, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
        (t = console).debug.apply(t, ["DEBUG [" + e.id + "]"].concat(i))
      }, e.prototype.info = function (e) {
        for (var t, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
        (t = console).info.apply(t, ["INFO [" + e.id + "]"].concat(i))
      }, e.prototype.warn = function (e) {
        for (var t, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
        (t = console).warn.apply(t, ["WARN [" + e.id + "]"].concat(i))
      }, e.prototype.error = function (e) {
        for (var t, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
        (t = console).error.apply(t, ["ERROR [" + e.id + "]"].concat(i))
      }, e
    }()
  }, "aurelia-pal-browser": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "_PLATFORM", (function () {
      return o
    })), n.d(t, "_FEATURE", (function () {
      return E
    })), n.d(t, "_DOM", (function () {
      return O
    })), n.d(t, "initialize", (function () {
      return j
    }));
    var i = n(0), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, o = {
      location: window.location, history: window.history, addEventListener: function (e, t, n) {
        this.global.addEventListener(e, t, n)
      }, removeEventListener: function (e, t, n) {
        this.global.removeEventListener(e, t, n)
      }, performance: window.performance, requestAnimationFrame: function (e) {
        return this.global.requestAnimationFrame(e)
      }
    };
    if ("undefined" == typeof FEATURE_NO_IE) {
      void 0 === function () {
      }.name && Object.defineProperty(Function.prototype, "name", {
        get: function () {
          var e = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
          return Object.defineProperty(this, "name", {value: e}), e
        }
      })
    }
    if ("undefined" == typeof FEATURE_NO_IE) if ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
      var a = document.createElement("_");
      if (a.classList.add("c1", "c2"), !a.classList.contains("c2")) {
        var s = function (e) {
          var t = DOMTokenList.prototype[e];
          DOMTokenList.prototype[e] = function (e) {
            for (var n = 0, i = arguments.length; n < i; ++n) e = arguments[n], t.call(this, e)
          }
        };
        s("add"), s("remove")
      }
      if (a.classList.toggle("c3", !1), a.classList.contains("c3")) {
        var c = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function (e, t) {
          return 1 in arguments && !this.contains(e) == !t ? t : c.call(this, e)
        }
      }
      a = null
    } else {
      var l = String.prototype.trim, u = Array.prototype.indexOf, d = [], h = function (e, t) {
        this.name = e, this.code = DOMException[e], this.message = t
      }, p = function (e, t) {
        if ("" === t) throw new h("SYNTAX_ERR", "An invalid or illegal string was specified");
        if (/\s/.test(t)) throw new h("INVALID_CHARACTER_ERR", "String contains an invalid character");
        return u.call(e, t)
      }, f = function (e) {
        for (var t = l.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : d, i = 0, r = n.length; i < r; ++i) this.push(n[i]);
        this._updateClassName = function () {
          e.setAttribute("class", this.toString())
        }
      }, v = f.prototype = [];
      h.prototype = Error.prototype, v.item = function (e) {
        return this[e] || null
      }, v.contains = function (e) {
        return -1 !== p(this, e += "")
      }, v.add = function () {
        var e = arguments, t = 0, n = e.length, i = void 0, r = !1;
        do {
          i = e[t] + "", -1 === p(this, i) && (this.push(i), r = !0)
        } while (++t < n);
        r && this._updateClassName()
      }, v.remove = function () {
        var e = arguments, t = 0, n = e.length, i = void 0, r = !1, o = void 0;
        do {
          for (i = e[t] + "", o = p(this, i); -1 !== o;) this.splice(o, 1), r = !0, o = p(this, i)
        } while (++t < n);
        r && this._updateClassName()
      }, v.toggle = function (e, t) {
        e += "";
        var n = this.contains(e), i = n ? !0 !== t && "remove" : !1 !== t && "add";
        return i && this[i](e), !0 === t || !1 === t ? t : !n
      }, v.toString = function () {
        return this.join(" ")
      }, Object.defineProperty(Element.prototype, "classList", {
        get: function () {
          return new f(this)
        }, enumerable: !0, configurable: !0
      })
    }
    if ("undefined" == typeof FEATURE_NO_IE) {
      var g = function (e, t) {
        for (var n = 0, i = b.length, r = []; n < i; n++) b[n][e] == t && r.push(b[n]);
        return r
      }, m = function (e, t) {
        for (var n, i = b.length; i--;) (n = b[i]).entryType != e || void 0 !== t && n.name != t || b.splice(i, 1)
      };
      if (
// @license http://opensource.org/licenses/MIT
        "performance" in window == !1 && (window.performance = {}), "now" in window.performance == !1) {
        var y = Date.now();
        performance.timing && performance.timing.navigationStart && (y = performance.timing.navigationStart), window.performance.now = function () {
          return Date.now() - y
        }
      }
      Date.now ? Date.now() : new Date;
      var b = [], w = {};
      window.performance.mark || (window.performance.mark = window.performance.webkitMark || function (e) {
        var t = {name: e, entryType: "mark", startTime: window.performance.now(), duration: 0};
        b.push(t), w[e] = t
      }), window.performance.measure || (window.performance.measure = window.performance.webkitMeasure || function (e, t, n) {
        t = w[t].startTime, n = w[n].startTime, b.push({name: e, entryType: "measure", startTime: t, duration: n - t})
      }), window.performance.getEntriesByType || (window.performance.getEntriesByType = window.performance.webkitGetEntriesByType || function (e) {
        return g("entryType", e)
      }), window.performance.getEntriesByName || (window.performance.getEntriesByName = window.performance.webkitGetEntriesByName || function (e) {
        return g("name", e)
      }), window.performance.clearMarks || (window.performance.clearMarks = window.performance.webkitClearMarks || function (e) {
        m("mark", e)
      }), window.performance.clearMeasures || (window.performance.clearMeasures = window.performance.webkitClearMeasures || function (e) {
        m("measure", e)
      }), o.performance = window.performance
    }
    if ("undefined" == typeof FEATURE_NO_IE) {
      var x = window.console = window.console || {}, _ = function () {
      };
      x.memory || (x.memory = {}), "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",").forEach((function (e) {
        x[e] || (x[e] = _)
      })), "object" === r(x.log) && "log,info,warn,error,assert,dir,clear,profile,profileEnd".split(",").forEach((function (e) {
        console[e] = this.bind(console[e], console)
      }), Function.prototype.call)
    }
    if ("undefined" == typeof FEATURE_NO_IE && (!window.CustomEvent || "function" != typeof window.CustomEvent)) {
      var C = function (e, t) {
        t = t || {bubbles: !1, cancelable: !1, detail: void 0};
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
      };
      C.prototype = window.Event.prototype, window.CustomEvent = C
    }
    if (Element && !Element.prototype.matches) {
      var k = Element.prototype;
      k.matches = k.matchesSelector || k.mozMatchesSelector || k.msMatchesSelector || k.oMatchesSelector || k.webkitMatchesSelector
    }
    var S, E = {
      shadowDOM: !!HTMLElement.prototype.attachShadow,
      scopedCSS: "scoped" in document.createElement("style"),
      htmlTemplateElement: (S = document.createElement("div"), S.innerHTML = "<template></template>", "content" in S.children[0]),
      mutationObserver: !(!window.MutationObserver && !window.WebKitMutationObserver),
      ensureHTMLTemplateElement: function (e) {
        return e
      }
    };
    if ("undefined" == typeof FEATURE_NO_IE) {
      var R = function (e) {
        var t = e.ownerDocument.createElement("template"), n = e.attributes, i = n.length, r = void 0;
        for (e.parentNode.insertBefore(t, e); i-- > 0;) r = n[i], t.setAttribute(r.name, r.value), e.removeAttribute(r.name);
        return e.parentNode.removeChild(e), A(t)
      }, A = function (e) {
        for (var t = e.content = document.createDocumentFragment(), n = void 0; n = e.firstChild;) t.appendChild(n);
        return e
      };
      E.htmlTemplateElement || (E.ensureHTMLTemplateElement = function (e) {
        for (var t, n = A(e).content.querySelectorAll("template"), i = 0, r = n.length; i < r; ++i) {
          var o = n[i];
          "template" === (t = o).tagName && "http://www.w3.org/2000/svg" === t.namespaceURI ? R(o) : A(o)
        }
        return e
      })
    }
    var T = window.ShadowDOMPolyfill || null, O = {
      Element: Element,
      NodeList: NodeList,
      SVGElement: SVGElement,
      boundary: "aurelia-dom-boundary",
      addEventListener: function (e, t, n) {
        document.addEventListener(e, t, n)
      },
      removeEventListener: function (e, t, n) {
        document.removeEventListener(e, t, n)
      },
      adoptNode: function (e) {
        return document.adoptNode(e)
      },
      createAttribute: function (e) {
        return document.createAttribute(e)
      },
      createElement: function (e) {
        return document.createElement(e)
      },
      createTextNode: function (e) {
        return document.createTextNode(e)
      },
      createComment: function (e) {
        return document.createComment(e)
      },
      createDocumentFragment: function () {
        return document.createDocumentFragment()
      },
      createTemplateElement: function () {
        var e = document.createElement("template");
        return E.ensureHTMLTemplateElement(e)
      },
      createMutationObserver: function (e) {
        return new (window.MutationObserver || window.WebKitMutationObserver)(e)
      },
      createCustomEvent: function (e, t) {
        return new window.CustomEvent(e, t)
      },
      dispatchEvent: function (e) {
        document.dispatchEvent(e)
      },
      getComputedStyle: function (e) {
        return window.getComputedStyle(e)
      },
      getElementById: function (e) {
        return document.getElementById(e)
      },
      querySelector: function (e) {
        return document.querySelector(e)
      },
      querySelectorAll: function (e) {
        return document.querySelectorAll(e)
      },
      nextElementSibling: function (e) {
        if (e.nextElementSibling) return e.nextElementSibling;
        do {
          e = e.nextSibling
        } while (e && 1 !== e.nodeType);
        return e
      },
      createTemplateFromMarkup: function (e) {
        var t = document.createElement("div");
        t.innerHTML = e;
        var n = t.firstElementChild;
        if (!n || "TEMPLATE" !== n.nodeName) throw new Error("Template markup must be wrapped in a <template> element e.g. <template> \x3c!-- markup here --\x3e </template>");
        return E.ensureHTMLTemplateElement(n)
      },
      appendNode: function (e, t) {
        (t || document.body).appendChild(e)
      },
      replaceNode: function (e, t, n) {
        t.parentNode ? t.parentNode.replaceChild(e, t) : null !== T ? T.unwrap(n).replaceChild(T.unwrap(e), T.unwrap(t)) : n.replaceChild(e, t)
      },
      removeNode: function (e, t) {
        e.parentNode ? e.parentNode.removeChild(e) : t && (null !== T ? T.unwrap(t).removeChild(T.unwrap(e)) : t.removeChild(e))
      },
      injectStyles: function (e, t, n, i) {
        if (i) {
          var r = document.getElementById(i);
          if (r) {
            if ("style" === r.tagName.toLowerCase()) return void (r.innerHTML = e);
            throw new Error("The provided id does not indicate a style tag.")
          }
        }
        var o = document.createElement("style");
        return o.innerHTML = e, o.type = "text/css", i && (o.id = i), t = t || document.head, n && t.childNodes.length > 0 ? t.insertBefore(o, t.childNodes[0]) : t.appendChild(o), o
      }
    };

    function j() {
      i.f || Object(i.e)((function (e, t, n) {
        Object.assign(e, o), Object.assign(t, E), Object.assign(n, O), Object.defineProperty(n, "title", {
          get: function () {
            return document.title
          }, set: function (e) {
            document.title = e
          }
        }), Object.defineProperty(n, "activeElement", {
          get: function () {
            return document.activeElement
          }
        }), Object.defineProperty(e, "XMLHttpRequest", {
          get: function () {
            return e.global.XMLHttpRequest
          }
        })
      }))
    }
  }, "aurelia-templating-binding": function (e, t, n) {
    "use strict";
    n.d(t, "configure", (function () {
      return E
    }));
    var i, r, o, a, s, c, l, u, d = n(4), h = n(2), p = n(3);
    var f = (r = i = function () {
      function e(e) {
        this.elements = Object.create(null), this.allElements = Object.create(null), this.svg = e, this.registerUniversal("accesskey", "accessKey"), this.registerUniversal("contenteditable", "contentEditable"), this.registerUniversal("tabindex", "tabIndex"), this.registerUniversal("textcontent", "textContent"), this.registerUniversal("innerhtml", "innerHTML"), this.registerUniversal("scrolltop", "scrollTop"), this.registerUniversal("scrollleft", "scrollLeft"), this.registerUniversal("readonly", "readOnly"), this.register("label", "for", "htmlFor"), this.register("img", "usemap", "useMap"), this.register("input", "maxlength", "maxLength"), this.register("input", "minlength", "minLength"), this.register("input", "formaction", "formAction"), this.register("input", "formenctype", "formEncType"), this.register("input", "formmethod", "formMethod"), this.register("input", "formnovalidate", "formNoValidate"), this.register("input", "formtarget", "formTarget"), this.register("textarea", "maxlength", "maxLength"), this.register("td", "rowspan", "rowSpan"), this.register("td", "colspan", "colSpan"), this.register("th", "rowspan", "rowSpan"), this.register("th", "colspan", "colSpan")
      }

      return e.prototype.register = function (e, t, n) {
        e = e.toLowerCase(), t = t.toLowerCase(), (this.elements[e] = this.elements[e] || Object.create(null))[t] = n
      }, e.prototype.registerUniversal = function (e, t) {
        e = e.toLowerCase(), this.allElements[e] = t
      }, e.prototype.map = function (e, t) {
        if (this.svg.isStandardSvgAttribute(e, t)) return t;
        e = e.toLowerCase(), t = t.toLowerCase();
        var n = this.elements[e];
        return void 0 !== n && t in n ? n[t] : t in this.allElements ? this.allElements[t] : /(?:^data-)|(?:^aria-)|:/.test(t) ? t : Object(h.r)(t)
      }, e
    }(), i.inject = [h.m], r), v = function () {
      function e(e, t, n, i, r, o) {
        this.observerLocator = e, this.targetProperty = t, this.parts = n, this.mode = i, this.lookupFunctions = r, this.attribute = this.attrToRemove = o, this.discrete = !1
      }

      return e.prototype.createBinding = function (e) {
        return 3 === this.parts.length ? new y(e, this.observerLocator, this.parts[1], this.mode, this.lookupFunctions, this.targetProperty, this.parts[0], this.parts[2]) : new m(this.observerLocator, this.parts, e, this.targetProperty, this.mode, this.lookupFunctions)
      }, e
    }();

    function g(e, t) {
      if ("style" === t) d.getLogger("templating-binding").info('Internet Explorer does not support interpolation in "style" attributes.  Use the style attribute\'s alias, "css" instead.'); else if (e.parentElement && "TEXTAREA" === e.parentElement.nodeName && "textContent" === t) throw new Error('Interpolation binding cannot be used in the content of a textarea element.  Use <textarea value.bind="expression"></textarea> instead.')
    }

    var m = function () {
      function e(e, t, n, i, r, o) {
        g(n, i), this.observerLocator = e, this.parts = t, this.target = n, this.targetProperty = i, this.targetAccessor = e.getAccessor(n, i), this.mode = r, this.lookupFunctions = o
      }

      return e.prototype.interpolate = function () {
        if (this.isBound) {
          for (var e = "", t = this.parts, n = 0, i = t.length; n < i; n++) e += n % 2 == 0 ? t[n] : this["childBinding" + n].value;
          this.targetAccessor.setValue(e, this.target, this.targetProperty)
        }
      }, e.prototype.updateOneTimeBindings = function () {
        for (var e = 1, t = this.parts.length; e < t; e += 2) {
          var n = this["childBinding" + e];
          n.mode === h.q.oneTime && n.call()
        }
      }, e.prototype.bind = function (e) {
        if (this.isBound) {
          if (this.source === e) return;
          this.unbind()
        }
        this.source = e;
        for (var t = this.parts, n = 1, i = t.length; n < i; n += 2) {
          var r = new y(this, this.observerLocator, t[n], this.mode, this.lookupFunctions);
          r.bind(e), this["childBinding" + n] = r
        }
        this.isBound = !0, this.interpolate()
      }, e.prototype.unbind = function () {
        if (this.isBound) {
          this.isBound = !1, this.source = null;
          for (var e = 1, t = this.parts.length; e < t; e += 2) {
            this["childBinding" + e].unbind()
          }
        }
      }, e
    }(), y = Object(h.s)()(o = function () {
      function e(e, t, n, i, r, o, a, s) {
        e instanceof m ? this.parent = e : (g(e, o), this.target = e, this.targetProperty = o, this.targetAccessor = t.getAccessor(e, o)), this.observerLocator = t, this.sourceExpression = n, this.mode = i, this.lookupFunctions = r, this.left = a, this.right = s
      }

      return e.prototype.updateTarget = function (e) {
        (e = null == e ? "" : e.toString()) !== this.value && (this.value = e, this.parent ? this.parent.interpolate() : this.targetAccessor.setValue(this.left + e + this.right, this.target, this.targetProperty))
      }, e.prototype.call = function () {
        this.isBound && (this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions), this.updateTarget(this.rawValue), this.mode !== h.q.oneTime && (this._version++, this.sourceExpression.connect(this, this.source), this.rawValue instanceof Array && this.observeArray(this.rawValue), this.unobserve(!1)))
      }, e.prototype.bind = function (e) {
        if (this.isBound) {
          if (this.source === e) return;
          this.unbind()
        }
        this.isBound = !0, this.source = e;
        var t = this.sourceExpression;
        t.bind && t.bind(this, e, this.lookupFunctions), this.rawValue = t.evaluate(e, this.lookupFunctions), this.updateTarget(this.rawValue), this.mode === h.q.oneWay && Object(h.v)(this)
      }, e.prototype.unbind = function () {
        if (this.isBound) {
          this.isBound = !1;
          var e = this.sourceExpression;
          e.unbind && e.unbind(this, this.source), this.source = null, this.value = null, this.rawValue = null, this.unobserve(!0)
        }
      }, e.prototype.connect = function (e) {
        this.isBound && (e && (this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions), this.updateTarget(this.rawValue)), this.sourceExpression.connect(this, this.source), this.rawValue instanceof Array && this.observeArray(this.rawValue))
      }, e
    }()) || o, b = function () {
      function e(e, t, n, i, r) {
        this.observerLocator = e, this.sourceExpression = n, this.targetProperty = t, this.lookupFunctions = i, this.toBindingContext = r
      }

      return e.prototype.createBinding = function () {
        return new w(this.observerLocator, this.sourceExpression, this.targetProperty, this.lookupFunctions, this.toBindingContext)
      }, e
    }(), w = Object(h.s)()(a = function () {
      function e(e, t, n, i, r) {
        this.observerLocator = e, this.sourceExpression = t, this.targetProperty = n, this.lookupFunctions = i, this.source = null, this.target = null, this.toBindingContext = r
      }

      return e.prototype.updateTarget = function () {
        var e = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
        this.target[this.targetProperty] = e
      }, e.prototype.call = function (e) {
        if (this.isBound) {
          if (e !== h.x) throw new Error("Unexpected call context " + e);
          this.updateTarget()
        }
      }, e.prototype.bind = function (e) {
        if (this.isBound) {
          if (this.source === e) return;
          this.unbind()
        }
        this.isBound = !0, this.source = e, this.target = this.toBindingContext ? e.bindingContext : e.overrideContext, this.sourceExpression.bind && this.sourceExpression.bind(this, e, this.lookupFunctions), Object(h.v)(this)
      }, e.prototype.unbind = function () {
        this.isBound && (this.isBound = !1, this.sourceExpression.unbind && this.sourceExpression.unbind(this, this.source), this.source = null, this.target = null, this.unobserve(!0))
      }, e.prototype.connect = function () {
        this.isBound && (this.updateTarget(), this.sourceExpression.connect(this, this.source))
      }, e
    }()) || a, x = function () {
      function e(e, t, n, i, r) {
        this.observerLocator = e, this.targetProperty = t, this.parts = n, this.lookupFunctions = i, this.toBindingContext = r
      }

      return e.prototype.createBinding = function () {
        return new _(this.observerLocator, this.targetProperty, this.parts, this.lookupFunctions, this.toBindingContext)
      }, e
    }(), _ = function () {
      function e(e, t, n, i, r) {
        this.observerLocator = e, this.parts = n, this.targetProperty = t, this.lookupFunctions = i, this.toBindingContext = r, this.target = null
      }

      return e.prototype.bind = function (e) {
        if (this.isBound) {
          if (this.source === e) return;
          this.unbind()
        }
        this.isBound = !0, this.source = e, this.target = this.toBindingContext ? e.bindingContext : e.overrideContext, this.interpolationBinding = this.createInterpolationBinding(), this.interpolationBinding.bind(e)
      }, e.prototype.unbind = function () {
        this.isBound && (this.isBound = !1, this.source = null, this.target = null, this.interpolationBinding.unbind(), this.interpolationBinding = null)
      }, e.prototype.createInterpolationBinding = function () {
        return 3 === this.parts.length ? new y(this.target, this.observerLocator, this.parts[1], h.q.oneWay, this.lookupFunctions, this.targetProperty, this.parts[0], this.parts[2]) : new m(this.observerLocator, this.parts, this.target, this.targetProperty, h.q.oneWay, this.lookupFunctions)
      }, e
    }(), C = (c = s = function () {
      function e(e, t, n, i) {
        this.parser = e, this.observerLocator = t, this.eventManager = n, this.attributeMap = i
      }

      return e.prototype.interpret = function (e, t, n, i, r) {
        return n.command in this ? this[n.command](e, t, n, i, r) : this.handleUnknownCommand(e, t, n, i, r)
      }, e.prototype.handleUnknownCommand = function (e, t, n, i, r) {
        return d.getLogger("templating-binding").warn("Unknown binding command.", n), i
      }, e.prototype.determineDefaultBindingMode = function (e, t, n) {
        var i = e.tagName.toLowerCase();
        return "input" === i && ("value" === t || "files" === t) && "checkbox" !== e.type && "radio" !== e.type || "input" === i && "checked" === t && ("checkbox" === e.type || "radio" === e.type) || ("textarea" === i || "select" === i) && "value" === t || ("textcontent" === t || "innerhtml" === t) && "true" === e.contentEditable || "scrolltop" === t || "scrollleft" === t ? h.q.twoWay : n && t in n.attributes && n.attributes[t] && n.attributes[t].defaultBindingMode >= h.q.oneTime ? n.attributes[t].defaultBindingMode : h.q.oneWay
      }, e.prototype.bind = function (e, t, n, i, r) {
        var o = i || p.b.attribute(n.attrName);
        return o.attributes[n.attrName] = new h.c(this.observerLocator, this.attributeMap.map(t.tagName, n.attrName), this.parser.parse(n.attrValue), void 0 === n.defaultBindingMode || null === n.defaultBindingMode ? this.determineDefaultBindingMode(t, n.attrName, r) : n.defaultBindingMode, e.lookupFunctions), o
      }, e.prototype.trigger = function (e, t, n) {
        return new h.h(this.eventManager, n.attrName, this.parser.parse(n.attrValue), h.u.none, !0, e.lookupFunctions)
      }, e.prototype.capture = function (e, t, n) {
        return new h.h(this.eventManager, n.attrName, this.parser.parse(n.attrValue), h.u.capturing, !0, e.lookupFunctions)
      }, e.prototype.delegate = function (e, t, n) {
        return new h.h(this.eventManager, n.attrName, this.parser.parse(n.attrValue), h.u.bubbling, !0, e.lookupFunctions)
      }, e.prototype.call = function (e, t, n, i) {
        var r = i || p.b.attribute(n.attrName);
        return r.attributes[n.attrName] = new h.d(this.observerLocator, n.attrName, this.parser.parse(n.attrValue), e.lookupFunctions), r
      }, e.prototype.options = function (e, t, n, i, r) {
        var o, a = i || p.b.attribute(n.attrName), s = n.attrValue, c = this.language, l = null, u = "", d = void 0,
          h = void 0, f = !1, v = !1, g = !1;
        for (h = 0, o = s.length; h < o; ++h) {
          if (";" !== (d = s[h]) || f) if (":" === d && null === l) g = !0, l = u.trim(), u = ""; else {
            if ("\\" === d) {
              u += d, v = !0;
              continue
            }
            u += d, null !== l && !1 === v && "'" === d && (f = !f)
          } else g || (l = this._getPrimaryPropertyName(e, r)), n = c.inspectAttribute(e, "?", l, u.trim()), c.createAttributeInstruction(e, t, n, a, r), a.attributes[n.attrName] || (a.attributes[n.attrName] = n.attrValue), u = "", l = null;
          v = !1
        }
        return g || (l = this._getPrimaryPropertyName(e, r)), null !== l && (n = c.inspectAttribute(e, "?", l, u.trim()), c.createAttributeInstruction(e, t, n, a, r), a.attributes[n.attrName] || (a.attributes[n.attrName] = n.attrValue)), a
      }, e.prototype._getPrimaryPropertyName = function (e, t) {
        var n = e.getAttribute(t.attributeName);
        return n && n.primaryProperty ? n.primaryProperty.attribute : null
      }, e.prototype.for = function (e, t, n, i) {
        var r, o = void 0, a = void 0, s = void 0, c = void 0;
        if (2 !== (o = (r = (c = n.attrValue).match(/^ *[[].+[\]]/)) ? c.split("of ") : c.split(" of ")).length) throw new Error('Incorrect syntax for "for". The form is: "$local of $items" or "[$key, $value] of $items".');
        return s = i || p.b.attribute(n.attrName), r ? (a = o[0].replace(/[[\]]/g, "").replace(/,/g, " ").replace(/\s+/g, " ").trim().split(" "), s.attributes.key = a[0], s.attributes.value = a[1]) : s.attributes.local = o[0], s.attributes.items = new h.c(this.observerLocator, "items", this.parser.parse(o[1]), h.q.oneWay, e.lookupFunctions), s
      }, e.prototype["two-way"] = function (e, t, n, i) {
        var r = i || p.b.attribute(n.attrName);
        return r.attributes[n.attrName] = new h.c(this.observerLocator, this.attributeMap.map(t.tagName, n.attrName), this.parser.parse(n.attrValue), h.q.twoWay, e.lookupFunctions), r
      }, e.prototype["to-view"] = function (e, t, n, i) {
        var r = i || p.b.attribute(n.attrName);
        return r.attributes[n.attrName] = new h.c(this.observerLocator, this.attributeMap.map(t.tagName, n.attrName), this.parser.parse(n.attrValue), h.q.toView, e.lookupFunctions), r
      }, e.prototype["from-view"] = function (e, t, n, i) {
        var r = i || p.b.attribute(n.attrName);
        return r.attributes[n.attrName] = new h.c(this.observerLocator, this.attributeMap.map(t.tagName, n.attrName), this.parser.parse(n.attrValue), h.q.fromView, e.lookupFunctions), r
      }, e.prototype["one-time"] = function (e, t, n, i) {
        var r = i || p.b.attribute(n.attrName);
        return r.attributes[n.attrName] = new h.c(this.observerLocator, this.attributeMap.map(t.tagName, n.attrName), this.parser.parse(n.attrValue), h.q.oneTime, e.lookupFunctions), r
      }, e
    }(), s.inject = [h.l, h.k, h.f, f], c);
    C.prototype["one-way"] = C.prototype["to-view"];
    var k = {}, S = (u = l = function (e) {
      function t(t, n, i, r) {
        var o = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, e.call(this));
        return o.parser = t, o.observerLocator = n, o.syntaxInterpreter = i, o.emptyStringExpression = o.parser.parse("''"), i.language = o, o.attributeMap = r, o.toBindingContextAttr = "to-binding-context", o
      }

      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), t.prototype.inspectAttribute = function (e, t, n, i) {
        var r = n.split(".");
        if (k.defaultBindingMode = null, 2 === r.length) k.attrName = r[0].trim(), k.attrValue = i, k.command = r[1].trim(), "ref" === k.command ? (k.expression = new h.j(this.parser.parse(i), k.attrName, e.lookupFunctions), k.command = null, k.attrName = "ref") : k.expression = null; else if ("ref" === n) k.attrName = n, k.attrValue = i, k.command = null, k.expression = new h.j(this.parser.parse(i), "element", e.lookupFunctions); else {
          k.attrName = n, k.attrValue = i, k.command = null;
          var o = this.parseInterpolation(e, i);
          k.expression = null === o ? null : new v(this.observerLocator, this.attributeMap.map(t, n), o, h.q.oneWay, e.lookupFunctions, n)
        }
        return k
      }, t.prototype.createAttributeInstruction = function (e, t, n, i, r) {
        var o = void 0;
        if (n.expression) {
          if ("ref" === n.attrName) return n.expression;
          (o = i || p.b.attribute(n.attrName)).attributes[n.attrName] = n.expression
        } else n.command && (o = this.syntaxInterpreter.interpret(e, t, n, i, r));
        return o
      }, t.prototype.createLetExpressions = function (e, t) {
        for (var n = [], i = t.attributes, r = void 0, o = void 0, a = void 0, s = void 0, c = this.toBindingContextAttr, l = t.hasAttribute(c), u = 0, p = i.length; p > u; ++u) if (a = (r = i[u]).name, s = r.nodeValue, o = a.split("."), a !== c) if (2 === o.length) {
          if ("bind" !== o[1]) {
            d.getLogger("templating-binding-language").warn('Detected invalid let command. Expected "' + o[0] + '.bind", given "' + a + '"');
            continue
          }
          n.push(new b(this.observerLocator, Object(h.r)(o[0]), this.parser.parse(s), e.lookupFunctions, l))
        } else a = Object(h.r)(a), null === (o = this.parseInterpolation(e, s)) && d.getLogger("templating-binding-language").warn('Detected string literal in let bindings. Did you mean "' + a + ".bind=" + s + '" or "' + a + "=${" + s + '}" ?'), o ? n.push(new x(this.observerLocator, a, o, e.lookupFunctions, l)) : n.push(new b(this.observerLocator, a, new h.i(s), e.lookupFunctions, l));
        return n
      }, t.prototype.inspectTextContent = function (e, t) {
        var n = this.parseInterpolation(e, t);
        return null === n ? null : new v(this.observerLocator, "textContent", n, h.q.oneWay, e.lookupFunctions, "textContent")
      }, t.prototype.parseInterpolation = function (e, t) {
        for (var n = t.indexOf("${", 0), i = t.length, r = void 0, o = 0, a = 0, s = null, c = void 0, l = void 0, u = 0; n >= 0 && n < i - 2;) {
          a = 1, c = n, n += 2;
          do {
            r = t[n], n++, "'" !== r && '"' !== r ? "\\" !== r ? null === s && ("{" === r ? a++ : "}" === r && a--) : n++ : null === s ? s = r : s === r && (s = null)
          } while (a > 0 && n < i);
          if (0 !== a) break;
          l = l || [], "\\" === t[c - 1] && "\\" !== t[c - 2] ? (l[u] = t.substring(o, c - 1) + t.substring(c, n), l[++u] = this.emptyStringExpression, u++) : (l[u] = t.substring(o, c), l[++u] = this.parser.parse(t.substring(c + 2, n - 1)), u++), o = n, n = t.indexOf("${", n)
        }
        return 0 === u ? null : (l[u] = t.substr(o), l)
      }, t
    }(p.c), l.inject = [h.l, h.k, C, f], u);

    function E(e) {
      e.container.registerSingleton(p.c, S), e.container.registerAlias(p.c, S)
    }
  }, "aurelia-templating-resources": function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "configure", (function () {
        return xe
      }));
      var i, r = n(6), o = n(0), a = n(13), s = n(3), c = n(2), l = n(4), u = n(10), d = n(7), h = n(1),
        p = function (e, t) {
          return (p = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          })(e, t)
        };

      function f(e, t) {
        function n() {
          this.constructor = e
        }

        p(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }

      function v(e, t, n, i) {
        var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      }

      !function (e) {
        e.InvokeLifecycle = "invoke-lifecycle", e.Replace = "replace"
      }(i || (i = {}));
      var g = function () {
        function e(e, t, n, r, o, a) {
          this.activationStrategy = i.InvokeLifecycle, this.element = e, this.container = t, this.compositionEngine = n, this.viewSlot = r, this.viewResources = o, this.taskQueue = a, this.currentController = null, this.currentViewModel = null, this.changes = Object.create(null)
        }

        return e.inject = function () {
          return [o.b.Element, r.a, s.e, s.p, s.o, a.a]
        }, e.prototype.created = function (e) {
          this.owningView = e
        }, e.prototype.bind = function (e, t) {
          this.bindingContext = e, this.overrideContext = t;
          var n = this.changes;
          n.view = this.view, n.viewModel = this.viewModel, n.model = this.model, this.pendingTask || m(this)
        }, e.prototype.unbind = function () {
          this.changes = Object.create(null), this.bindingContext = null, this.overrideContext = null;
          this.viewSlot.removeAll(!0, !0)
        }, e.prototype.modelChanged = function (e, t) {
          this.changes.model = e, b(this)
        }, e.prototype.viewChanged = function (e, t) {
          this.changes.view = e, b(this)
        }, e.prototype.viewModelChanged = function (e, t) {
          this.changes.viewModel = e, b(this)
        }, v([s.q], e.prototype, "model", void 0), v([s.q], e.prototype, "view", void 0), v([s.q], e.prototype, "viewModel", void 0), v([s.q], e.prototype, "activationStrategy", void 0), v([s.q], e.prototype, "swapOrder", void 0), e = v([s.u, Object(s.s)("compose")], e)
      }();

      function m(t) {
        var n = t.changes;
        if (t.changes = Object.create(null), function (e, t) {
          var n = e.activationStrategy, r = e.currentViewModel;
          r && "function" == typeof r.determineActivationStrategy && (n = r.determineActivationStrategy());
          return "view" in t || "viewModel" in t || n === i.Replace
        }(t, n)) {
          var r = {view: t.view, viewModel: t.currentViewModel || t.viewModel, model: t.model};
          r = Object.assign(r, n), r = function (e, t) {
            return Object.assign(t, {
              bindingContext: e.bindingContext,
              overrideContext: e.overrideContext,
              owningView: e.owningView,
              container: e.container,
              viewSlot: e.viewSlot,
              viewResources: e.viewResources,
              currentController: e.currentController,
              host: e.element,
              swapOrder: e.swapOrder
            })
          }(t, r), t.pendingTask = t.compositionEngine.compose(r).then((function (e) {
            t.currentController = e, t.currentViewModel = e ? e.viewModel : null
          }))
        } else if (t.pendingTask = function (t, n) {
          if (t && "function" == typeof t.activate) return e.resolve(t.activate(n))
        }(t.currentViewModel, n.model), !t.pendingTask) return;
        t.pendingTask = t.pendingTask.then((function () {
          y(t)
        }), (function (e) {
          throw y(t), e
        }))
      }

      function y(e) {
        e.pendingTask = null, function (e) {
          for (var t in e) return !1;
          return !0
        }(e.changes) || m(e)
      }

      function b(e) {
        e.pendingTask || e.updateRequested || (e.updateRequested = !0, e.taskQueue.queueMicroTask((function () {
          e.updateRequested = !1, m(e)
        })))
      }

      var w = function () {
        function t(e, t) {
          this.viewFactory = e, this.viewSlot = t, this.view = null, this.bindingContext = null, this.overrideContext = null, this.showing = !1, this.cache = !0
        }

        return t.prototype.bind = function (e, t) {
          this.bindingContext = e, this.overrideContext = t
        }, t.prototype.unbind = function () {
          null !== this.view && (this.view.unbind(), this.viewFactory.isCaching && (this.showing ? (this.showing = !1, this.viewSlot.remove(this.view, !0, !0)) : this.view.returnToCache(), this.view = null))
        }, t.prototype._show = function () {
          if (!this.showing) return null === this.view && (this.view = this.viewFactory.create()), this.view.isBound || this.view.bind(this.bindingContext, this.overrideContext), this.showing = !0, this.viewSlot.add(this.view);
          this.view.isBound || this.view.bind(this.bindingContext, this.overrideContext)
        }, t.prototype._hide = function () {
          var t = this;
          if (this.showing) {
            this.showing = !1;
            var n = this.viewSlot.remove(this.view);
            if (n instanceof e) return n.then((function () {
              t._unbindView()
            }));
            this._unbindView()
          }
        }, t.prototype._unbindView = function () {
          var e = "false" !== this.cache && !!this.cache;
          this.view.unbind(), e || (this.view = null)
        }, t
      }(), x = function (t) {
        function n() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.cache = !0, e
        }

        return f(n, t), n.prototype.bind = function (e, n) {
          t.prototype.bind.call(this, e, n), this.condition ? this._show() : this._hide()
        }, n.prototype.conditionChanged = function (e) {
          this._update(e)
        }, n.prototype._update = function (e) {
          var t, n = this;
          this.animating || (t = this.elseVm ? e ? this._swap(this.elseVm, this) : this._swap(this, this.elseVm) : e ? this._show() : this._hide()) && (this.animating = !0, t.then((function () {
            n.animating = !1, n.condition !== n.showing && n._update(n.condition)
          })))
        }, n.prototype._swap = function (t, n) {
          switch (this.swapOrder) {
            case"before":
              return e.resolve(n._show()).then((function () {
                return t._hide()
              }));
            case"with":
              return e.all([t._hide(), n._show()]);
            default:
              var i = t._hide();
              return i ? i.then((function () {
                return n._show()
              })) : n._show()
          }
        }, v([Object(s.q)({primaryProperty: !0})], n.prototype, "condition", void 0), v([s.q], n.prototype, "swapOrder", void 0), v([s.q], n.prototype, "cache", void 0), n = v([Object(s.r)("if"), s.w, Object(r.c)(s.d, s.p)], n)
      }(w), _ = function (e) {
        function t(t, n) {
          var i = e.call(this, t, n) || this;
          return i._registerInIf(), i
        }

        return f(t, e), t.prototype.bind = function (t, n) {
          e.prototype.bind.call(this, t, n), this.ifVm.condition ? this._hide() : this._show()
        }, t.prototype._registerInIf = function () {
          for (var e = this.viewSlot.anchor.previousSibling; e && !e.au;) e = e.previousSibling;
          if (!e || !e.au.if) throw new Error("Can't find matching If for Else custom attribute.");
          this.ifVm = e.au.if.viewModel, this.ifVm.elseVm = this
        }, t = v([Object(s.r)("else"), s.w, Object(r.c)(s.d, s.p)], t)
      }(w), C = function () {
        function e(e, t) {
          this.viewFactory = e, this.viewSlot = t, this.parentOverrideContext = null, this.view = null
        }

        return e.prototype.bind = function (e, t) {
          this.parentOverrideContext = t, this.valueChanged(this.value)
        }, e.prototype.valueChanged = function (e) {
          var t = Object(c.t)(e, this.parentOverrideContext), n = this.view;
          n ? n.bind(e, t) : ((n = this.view = this.viewFactory.create()).bind(e, t), this.viewSlot.add(n))
        }, e.prototype.unbind = function () {
          var e = this.view;
          this.parentOverrideContext = null, e && e.unbind()
        }, e = v([Object(s.r)("with"), s.w, Object(r.c)(s.d, s.p)], e)
      }(), k = c.q.oneTime;

      function S(e, t) {
        var n = e.length;
        for (t > 0 && (t -= 1); t < n; ++t) R(e[t].overrideContext, t, n)
      }

      function E(e, t, n, i, r) {
        var o = {}, a = Object(c.t)(o, e.scope.overrideContext);
        return void 0 !== r ? (o[e.key] = r, o[e.value] = t) : o[e.local] = t, R(a, n, i), a
      }

      function R(e, t, n) {
        var i = 0 === t, r = t === n - 1, o = t % 2 == 0;
        e.$index = t, e.$first = i, e.$last = r, e.$middle = !(i || r), e.$odd = !o, e.$even = o
      }

      function A(e) {
        e.call && e.mode === k ? e.call(c.x) : e.updateOneTimeBindings && e.updateOneTimeBindings()
      }

      function T(e, t, n, i) {
        if (!n) return e.indexOf(t);
        for (var r = e.length, o = i || 0; o < r; o++) if (n(e[o], t)) return o;
        return -1
      }

      var O = function () {
        function t() {
        }

        return t.prototype.getCollectionObserver = function (e, t) {
          return e.getArrayObserver(t)
        }, t.prototype.instanceChanged = function (t, n) {
          var i = this, r = t, o = n.length;
          if (n && 0 !== o) {
            var a = r.views(), s = a.length;
            if (0 !== s) if (r.viewsRequireLifecycle) {
              for (var c = a.slice(0), l = r.local, u = r.matcher(), d = [], h = [], p = 0; p < s; p++) {
                var f = c[p], v = f.bindingContext[l];
                -1 === T(n, v, u) ? h.push(f) : d.push(v)
              }
              var g = void 0, m = void 0;
              d.length > 0 ? (m = r.removeViews(h, !0, !r.viewsRequireLifecycle), g = function () {
                for (var e = 0; e < o; e++) {
                  var t = n[e], s = T(d, t, u, e), c = void 0;
                  if (-1 === s) {
                    var l = E(r, n[e], e, o);
                    r.insertView(e, l.bindingContext, l), d.splice(e, 0, void 0)
                  } else s === e ? (c = a[s], d[s] = void 0) : (c = a[s], r.moveView(s, e), d.splice(s, 1), d.splice(e, 0, void 0));
                  c && R(c.overrideContext, e, o)
                }
                i._inPlaceProcessItems(r, n)
              }) : (m = r.removeAllViews(!0, !r.viewsRequireLifecycle), g = function () {
                return i._standardProcessInstanceChanged(r, n)
              }), m instanceof e ? m.then(g) : g()
            } else this._inPlaceProcessItems(r, n); else this._standardProcessInstanceChanged(r, n)
          } else r.removeAllViews(!0, !r.viewsRequireLifecycle)
        }, t.prototype._standardProcessInstanceChanged = function (e, t) {
          for (var n = 0, i = t.length; n < i; n++) {
            var r = E(e, t[n], n, i);
            e.addView(r.bindingContext, r)
          }
        }, t.prototype._inPlaceProcessItems = function (e, t) {
          for (var n = t.length, i = e.viewCount(); i > n;) i--, e.removeView(i, !0, !e.viewsRequireLifecycle);
          for (var r = e.local, o = 0; o < i; o++) {
            var a = e.view(o), s = o === n - 1, c = 0 !== o && !s, l = a.bindingContext, u = a.overrideContext;
            l[r] === t[o] && u.$middle === c && u.$last === s || (l[r] = t[o], u.$middle = c, u.$last = s, e.updateBindings(a))
          }
          for (o = i; o < n; o++) {
            u = E(e, t[o], o, n);
            e.addView(u.bindingContext, u)
          }
        }, t.prototype.instanceMutated = function (t, n, i) {
          var r = this;
          if (t.__queuedSplices) {
            for (var o = 0, a = i.length; o < a; ++o) {
              var s = i[o], l = s.index, u = s.removed, d = s.addedCount;
              Object(c.w)(t.__queuedSplices, l, u, d)
            }
            t.__array = n.slice(0)
          } else {
            var h = this._runSplices(t, n.slice(0), i);
            if (h instanceof e) {
              var p = t.__queuedSplices = [], f = function () {
                if (!p.length) return t.__queuedSplices = void 0, void (t.__array = void 0);
                var n = r._runSplices(t, t.__array, p) || e.resolve();
                p = t.__queuedSplices = [], n.then(f)
              };
              h.then(f)
            }
          }
        }, t.prototype._runSplices = function (t, n, i) {
          for (var r = this, o = 0, a = [], s = 0, c = i.length; s < c; ++s) {
            for (var l = i[s], u = 0, d = l.removed.length; u < d; ++u) {
              var h = t.removeView(l.index + o + a.length, !0);
              h instanceof e && a.push(h)
            }
            o -= l.addedCount
          }
          if (a.length > 0) return e.all(a).then((function () {
            var e = r._handleAddedSplices(t, n, i);
            S(t.views(), e)
          }));
          var p = this._handleAddedSplices(t, n, i);
          S(t.views(), p)
        }, t.prototype._handleAddedSplices = function (e, t, n) {
          for (var i, r, o = t.length, a = 0, s = n.length; a < s; ++a) {
            var c = n[a], l = i = c.index, u = c.index + c.addedCount;
            for ((null == r || r > c.index) && (r = i); l < u; ++l) {
              var d = E(e, t[l], l, o);
              e.insertView(l, d.bindingContext, d)
            }
          }
          return r
        }, t
      }(), j = function () {
        function t() {
        }

        return t.prototype.getCollectionObserver = function (e, t) {
          return e.getMapObserver(t)
        }, t.prototype.instanceChanged = function (t, n) {
          var i = this, r = t.removeAllViews(!0, !t.viewsRequireLifecycle);
          r instanceof e ? r.then((function () {
            return i._standardProcessItems(t, n)
          })) : this._standardProcessItems(t, n)
        }, t.prototype._standardProcessItems = function (e, t) {
          var n, i = 0;
          t.forEach((function (r, o) {
            n = E(e, r, i, t.size, o), e.addView(n.bindingContext, n), ++i
          }))
        }, t.prototype.instanceMutated = function (t, n, i) {
          var r, o, a, s, c, l, u, d, h = [];
          for (o = 0, a = i.length; o < a; ++o) switch (r = (u = i[o]).key, u.type) {
            case"update":
              c = this._getViewIndexByKey(t, r), (d = t.removeView(c, !0, !t.viewsRequireLifecycle)) instanceof e && h.push(d), s = E(t, n.get(r), c, n.size, r), t.insertView(c, s.bindingContext, s);
              break;
            case"add":
              l = t.viewCount() <= n.size - 1 ? t.viewCount() : n.size - 1, s = E(t, n.get(r), l, n.size, r), t.insertView(n.size - 1, s.bindingContext, s);
              break;
            case"delete":
              if (void 0 === u.oldValue) return;
              c = this._getViewIndexByKey(t, r), (d = t.removeView(c, !0, !t.viewsRequireLifecycle)) instanceof e && h.push(d);
              break;
            case"clear":
              t.removeAllViews(!0, !t.viewsRequireLifecycle);
              break;
            default:
              continue
          }
          h.length > 0 ? e.all(h).then((function () {
            S(t.views(), 0)
          })) : S(t.views(), 0)
        }, t.prototype._getViewIndexByKey = function (e, t) {
          var n, i;
          for (n = 0, i = e.viewCount(); n < i; ++n) if (e.view(n).bindingContext[e.key] === t) return n
        }, t
      }(), B = function () {
        function e() {
        }

        return e.prototype.instanceChanged = function (e, t) {
          e.removeAllViews(!0)
        }, e.prototype.getCollectionObserver = function (e, t) {
        }, e
      }(), I = function () {
        function t() {
        }

        return t.prototype.getCollectionObserver = function () {
          return null
        }, t.prototype.instanceChanged = function (t, n) {
          var i = this, r = t.removeAllViews(!0, !t.viewsRequireLifecycle);
          r instanceof e ? r.then((function () {
            return i._standardProcessItems(t, n)
          })) : this._standardProcessItems(t, n)
        }, t.prototype._standardProcessItems = function (e, t) {
          var n, i, r, o, a = e.viewCount();
          if ((o = a - (t = Math.floor(t))) > 0) for (o > a && (o = a), n = 0, i = o; n < i; ++n) e.removeView(a - (n + 1), !0, !e.viewsRequireLifecycle); else {
            for (n = a, i = t; n < i; ++n) r = E(e, n, n, i), e.addView(r.bindingContext, r);
            S(e.views(), 0)
          }
        }, t
      }(), L = function () {
        function t() {
        }

        return t.prototype.getCollectionObserver = function (e, t) {
          return e.getSetObserver(t)
        }, t.prototype.instanceChanged = function (t, n) {
          var i = this, r = t.removeAllViews(!0, !t.viewsRequireLifecycle);
          r instanceof e ? r.then((function () {
            return i._standardProcessItems(t, n)
          })) : this._standardProcessItems(t, n)
        }, t.prototype._standardProcessItems = function (e, t) {
          var n, i = 0;
          t.forEach((function (r) {
            n = E(e, r, i, t.size), e.addView(n.bindingContext, n), ++i
          }))
        }, t.prototype.instanceMutated = function (t, n, i) {
          var r, o, a, s, c, l, u, d = [];
          for (o = 0, a = i.length; o < a; ++o) switch (r = (l = i[o]).value, l.type) {
            case"add":
              var h = Math.max(n.size - 1, 0);
              s = E(t, r, h, n.size), t.insertView(h, s.bindingContext, s);
              break;
            case"delete":
              c = this._getViewIndexByValue(t, r), (u = t.removeView(c, !0, !t.viewsRequireLifecycle)) instanceof e && d.push(u);
              break;
            case"clear":
              t.removeAllViews(!0, !t.viewsRequireLifecycle);
              break;
            default:
              continue
          }
          d.length > 0 ? e.all(d).then((function () {
            S(t.views(), 0)
          })) : S(t.views(), 0)
        }, t.prototype._getViewIndexByValue = function (e, t) {
          var n, i;
          for (n = 0, i = e.viewCount(); n < i; ++n) if (e.view(n).bindingContext[e.local] === t) return n
        }, t
      }(), F = function () {
        function e() {
          this.matchers = [], this.strategies = [], this.addStrategy((function (e) {
            return null == e
          }), new B), this.addStrategy((function (e) {
            return e instanceof Array
          }), new O), this.addStrategy((function (e) {
            return e instanceof Map
          }), new j), this.addStrategy((function (e) {
            return e instanceof Set
          }), new L), this.addStrategy((function (e) {
            return "number" == typeof e
          }), new I)
        }

        return e.prototype.addStrategy = function (e, t) {
          this.matchers.push(e), this.strategies.push(t)
        }, e.prototype.getStrategy = function (e) {
          for (var t = this.matchers, n = 0, i = t.length; n < i; ++n) if (t[n](e)) return this.strategies[n];
          return null
        }, e
      }(), M = ["focus", "if", "else", "repeat", "show", "hide", "with"];

      function P(e) {
        var t = e.type, n = null !== t.elementName ? t.elementName : t.attributeName;
        return -1 === M.indexOf(n) && (t.handlesAttached || t.handlesBind || t.handlesCreated || t.handlesDetached || t.handlesUnbind) || t.viewFactory && V(t.viewFactory) || e.viewFactory && V(e.viewFactory)
      }

      function N(e) {
        var t = e.behaviorInstructions;
        if (t) for (var n = t.length; n--;) if (P(t[n])) return !0;
        return e.viewFactory && V(e.viewFactory)
      }

      function V(e) {
        if ("_viewsRequireLifecycle" in e) return e._viewsRequireLifecycle;
        if (e._viewsRequireLifecycle = !1, e.viewFactory) return e._viewsRequireLifecycle = V(e.viewFactory), e._viewsRequireLifecycle;
        if (e.template.querySelector(".au-animate")) return e._viewsRequireLifecycle = !0, !0;
        for (var t in e.instructions) if (N(e.instructions[t])) return e._viewsRequireLifecycle = !0, !0;
        return e._viewsRequireLifecycle = !1, !1
      }

      var D = function (e) {
        function t(t, n, i, r, o, a) {
          var s = e.call(this, {local: "item", viewsRequireLifecycle: V(t)}) || this;
          return s.viewFactory = t, s.instruction = n, s.viewSlot = i, s.lookupFunctions = r.lookupFunctions, s.observerLocator = o, s.key = "key", s.value = "value", s.strategyLocator = a, s.ignoreMutation = !1, s.sourceExpression = function (e, t) {
            return e.behaviorInstructions.filter((function (e) {
              return e.originalAttrName === t
            }))[0].attributes.items.sourceExpression
          }(s.instruction, "repeat.for"), s.isOneTime = function (e) {
            for (; e instanceof c.a;) {
              if ("oneTime" === e.name) return !0;
              e = e.expression
            }
            return !1
          }(s.sourceExpression), s.viewsRequireLifecycle = V(t), s
        }

        var n;
        return f(t, e), n = t, t.prototype.call = function (e, t) {
          this[e](this.items, t)
        }, t.prototype.bind = function (e, t) {
          this.scope = {
            bindingContext: e,
            overrideContext: t
          }, this.matcherBinding = this._captureAndRemoveMatcherBinding(), this.itemsChanged()
        }, t.prototype.unbind = function () {
          this.scope = null, this.items = null, this.matcherBinding = null, this.viewSlot.removeAll(!0, !0), this._unsubscribeCollection()
        }, t.prototype._unsubscribeCollection = function () {
          this.collectionObserver && (this.collectionObserver.unsubscribe(this.callContext, this), this.collectionObserver = null, this.callContext = null)
        }, t.prototype.itemsChanged = function () {
          var e = this;
          if (this._unsubscribeCollection(), this.scope) {
            var t = this.items;
            if (this.strategy = this.strategyLocator.getStrategy(t), !this.strategy) throw new Error("Value for '" + this.sourceExpression + "' is non-repeatable");
            this.isOneTime || this._observeInnerCollection() || this._observeCollection(), this.ignoreMutation = !0, this.strategy.instanceChanged(this, t), this.observerLocator.taskQueue.queueMicroTask((function () {
              e.ignoreMutation = !1
            }))
          }
        }, t.prototype._getInnerCollection = function () {
          var e = function (e) {
            for (var t = !1; e instanceof c.a;) e = e.expression;
            for (; e instanceof c.n;) e = e.expression, t = !0;
            return t ? e : null
          }(this.sourceExpression);
          return e ? e.evaluate(this.scope, null) : null
        }, t.prototype.handleCollectionMutated = function (e, t) {
          this.collectionObserver && (this.ignoreMutation || this.strategy.instanceMutated(this, e, t))
        }, t.prototype.handleInnerCollectionMutated = function (e, t) {
          var n = this;
          if (this.collectionObserver && !this.ignoreMutation) {
            this.ignoreMutation = !0;
            var i = this.sourceExpression.evaluate(this.scope, this.lookupFunctions);
            this.observerLocator.taskQueue.queueMicroTask((function () {
              return n.ignoreMutation = !1
            })), i === this.items ? this.itemsChanged() : this.items = i
          }
        }, t.prototype._observeInnerCollection = function () {
          var e = this._getInnerCollection(), t = this.strategyLocator.getStrategy(e);
          return !!t && (this.collectionObserver = t.getCollectionObserver(this.observerLocator, e), !!this.collectionObserver && (this.callContext = "handleInnerCollectionMutated", this.collectionObserver.subscribe(this.callContext, this), !0))
        }, t.prototype._observeCollection = function () {
          var e = this.items;
          this.collectionObserver = this.strategy.getCollectionObserver(this.observerLocator, e), this.collectionObserver && (this.callContext = "handleCollectionMutated", this.collectionObserver.subscribe(this.callContext, this))
        }, t.prototype._captureAndRemoveMatcherBinding = function () {
          var e = this.viewFactory.viewFactory;
          if (e) {
            var t = e.template, i = e.instructions;
            if (n.useInnerMatcher) return q(i);
            if (t.children.length > 1) return;
            var r = t.firstElementChild;
            if (!r.hasAttribute("au-target-id")) return;
            var o = r.getAttribute("au-target-id");
            return q(i, o)
          }
        }, t.prototype.viewCount = function () {
          return this.viewSlot.children.length
        }, t.prototype.views = function () {
          return this.viewSlot.children
        }, t.prototype.view = function (e) {
          return this.viewSlot.children[e]
        }, t.prototype.matcher = function () {
          var e = this.matcherBinding;
          return e ? e.sourceExpression.evaluate(this.scope, e.lookupFunctions) : null
        }, t.prototype.addView = function (e, t) {
          var n = this.viewFactory.create();
          n.bind(e, t), this.viewSlot.add(n)
        }, t.prototype.insertView = function (e, t, n) {
          var i = this.viewFactory.create();
          i.bind(t, n), this.viewSlot.insert(e, i)
        }, t.prototype.moveView = function (e, t) {
          this.viewSlot.move(e, t)
        }, t.prototype.removeAllViews = function (e, t) {
          return this.viewSlot.removeAll(e, t)
        }, t.prototype.removeViews = function (e, t, n) {
          return this.viewSlot.removeMany(e, t, n)
        }, t.prototype.removeView = function (e, t, n) {
          return this.viewSlot.removeAt(e, t, n)
        }, t.prototype.updateBindings = function (e) {
          for (var t = e, n = t.bindings.length; n--;) A(t.bindings[n]);
          for (n = t.controllers.length; n--;) for (var i = t.controllers[n].boundProperties.length; i--;) {
            A(t.controllers[n].boundProperties[i].binding)
          }
        }, t.useInnerMatcher = !0, v([s.q], t.prototype, "items", void 0), v([s.q], t.prototype, "local", void 0), v([s.q], t.prototype, "key", void 0), v([s.q], t.prototype, "value", void 0), t = n = v([Object(s.r)("repeat"), s.w, Object(r.c)(s.d, s.j, s.p, s.o, c.k, F)], t)
      }(function () {
        function e(e) {
          Object.assign(this, {local: "items", viewsRequireLifecycle: !0}, e)
        }

        return e.prototype.viewCount = function () {
          throw new Error("subclass must implement `viewCount`")
        }, e.prototype.views = function () {
          throw new Error("subclass must implement `views`")
        }, e.prototype.view = function (e) {
          throw new Error("subclass must implement `view`")
        }, e.prototype.matcher = function () {
          throw new Error("subclass must implement `matcher`")
        }, e.prototype.addView = function (e, t) {
          throw new Error("subclass must implement `addView`")
        }, e.prototype.insertView = function (e, t, n) {
          throw new Error("subclass must implement `insertView`")
        }, e.prototype.moveView = function (e, t) {
          throw new Error("subclass must implement `moveView`")
        }, e.prototype.removeAllViews = function (e, t) {
          throw new Error("subclass must implement `removeAllViews`")
        }, e.prototype.removeViews = function (e, t, n) {
          throw new Error("subclass must implement `removeView`")
        }, e.prototype.removeView = function (e, t, n) {
          throw new Error("subclass must implement `removeView`")
        }, e.prototype.updateBindings = function (e) {
          throw new Error("subclass must implement `updateBindings`")
        }, e
      }()), q = function (e, t) {
        for (var n = Object.keys(e), i = 0; i < n.length; i++) {
          var r = n[i];
          if (void 0 === t || r === t) {
            var o = e[r].expressions;
            if (o) for (var a = 0; a < o.length; a++) if ("matcher" === o[a].targetProperty) {
              var s = o[a];
              return o.splice(a, 1), s
            }
          }
        }
      };

      function H(e) {
        o.c.shadowDOM && e && !e.hasAureliaHideStyle && (e.hasAureliaHideStyle = !0, o.b.injectStyles(".aurelia-hide { display:none !important; }", e))
      }

      var $ = function () {
        function e(e, t, n) {
          this.element = e, this.animator = t, this.domBoundary = n
        }

        return e.inject = function () {
          return [o.b.Element, s.a, r.b.of(o.b.boundary, !0)]
        }, e.prototype.created = function () {
          H(this.domBoundary)
        }, e.prototype.valueChanged = function (e) {
          var t = this.element, n = this.animator;
          e ? n.removeClass(t, "aurelia-hide") : n.addClass(t, "aurelia-hide")
        }, e.prototype.bind = function (e) {
          this.valueChanged(this.value)
        }, e = v([Object(s.r)("show")], e)
      }(), G = function () {
        function e(e, t, n) {
          this.element = e, this.animator = t, this.domBoundary = n
        }

        return e.inject = function () {
          return [o.b.Element, s.a, r.b.of(o.b.boundary, !0)]
        }, e.prototype.created = function () {
          H(this.domBoundary)
        }, e.prototype.valueChanged = function (e) {
          e ? this.animator.addClass(this.element, "aurelia-hide") : this.animator.removeClass(this.element, "aurelia-hide")
        }, e.prototype.bind = function (e) {
          this.valueChanged(this.value)
        }, e.prototype.value = function (e) {
          throw new Error("Method not implemented.")
        }, e = v([Object(s.r)("hide")], e)
      }(), z = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, U = !0, W = function () {
        function e() {
        }

        return e.prototype.sanitize = function (e) {
          return U && (U = !1, Object(l.getLogger)("html-sanitizer").warn("CAUTION: The default HTMLSanitizer does NOT provide security against a wide variety of sophisticated XSS attacks,\nand should not be relied on for sanitizing input from unknown sources.\nPlease see https://aurelia.io/docs/binding/basics#element-content for instructions on how to use a secure solution like DOMPurify or sanitize-html.")), e.replace(z, "")
        }, e
      }(), Q = function () {
        function e(e) {
          this.sanitizer = e
        }

        return e.prototype.toView = function (e) {
          return null == e ? null : this.sanitizer.sanitize(e)
        }, e = v([Object(c.A)("sanitizeHTML"), Object(r.c)(W)], e)
      }(), J = function () {
        function e(e, t) {
          this.viewFactory = e, this.viewSlot = t, this.view = null
        }

        return e.prototype.bind = function (e, t) {
          null === this.view && (this.view = this.viewFactory.create(), this.viewSlot.add(this.view)), this.view.bind(e, t)
        }, e.prototype.unbind = function () {
          this.view.unbind()
        }, e = v([Object(s.r)("replaceable"), s.w, Object(r.c)(s.d, s.p)], e)
      }(), K = function () {
        function e(e, t) {
          this.element = e, this.taskQueue = t, this.isAttached = !1, this.needsApply = !1
        }

        return e.inject = function () {
          return [o.b.Element, a.a]
        }, e.prototype.valueChanged = function (e) {
          this.isAttached ? this._apply() : this.needsApply = !0
        }, e.prototype._apply = function () {
          var e = this;
          this.value ? this.taskQueue.queueMicroTask((function () {
            e.value && e.element.focus()
          })) : this.element.blur()
        }, e.prototype.attached = function () {
          this.isAttached = !0, this.needsApply && (this.needsApply = !1, this._apply()), this.element.addEventListener("focus", this), this.element.addEventListener("blur", this)
        }, e.prototype.detached = function () {
          this.isAttached = !1, this.element.removeEventListener("focus", this), this.element.removeEventListener("blur", this)
        }, e.prototype.handleEvent = function (e) {
          "focus" === e.type ? this.value = !0 : o.b.activeElement !== this.element && (this.value = !1)
        }, e = v([Object(s.r)("focus", c.q.twoWay)], e)
      }(), X = /url\((?!['"]data)([^)]+)\)/gi;
      var Y = function () {
        function e(e) {
          this.address = e, this._scoped = null, this._global = !1, this._alreadyGloballyInjected = !1
        }

        return e.prototype.initialize = function (e, t) {
          this._scoped = new t(this)
        }, e.prototype.register = function (e, t) {
          "scoped" === t ? e.registerViewEngineHooks(this._scoped) : this._global = !0
        }, e.prototype.load = function (e) {
          var t = this;
          return e.get(u.a).loadText(this.address).catch((function (e) {
            return null
          })).then((function (e) {
            e = function (e, t) {
              if ("string" != typeof t) throw new Error("Failed loading required CSS file: " + e);
              return t.replace(X, (function (t, n) {
                var i = n.charAt(0);
                return "'" !== i && '"' !== i || (n = n.substr(1, n.length - 2)), "url('" + Object(d.d)(n, e) + "')"
              }))
            }(t.address, e), t._scoped.css = e, t._global && (t._alreadyGloballyInjected = !0, o.b.injectStyles(e))
          }))
        }, e
      }(), Z = function () {
        function e(e) {
          this.owner = e, this.css = null
        }

        return e.prototype.beforeCompile = function (e, t, n) {
          if (n.targetShadowDOM) o.b.injectStyles(this.css, e, !0); else if (o.c.scopedCSS) {
            o.b.injectStyles(this.css, e, !0).setAttribute("scoped", "scoped")
          } else this._global && !this.owner._alreadyGloballyInjected && (o.b.injectStyles(this.css), this.owner._alreadyGloballyInjected = !0)
        }, e
      }();
      var ee = function () {
        function e() {
        }

        return e.prototype.bind = function (e, t) {
          e.targetObserver = new c.e(e.target, e.targetProperty)
        }, e.prototype.unbind = function (e, t) {
        }, e = v([Object(c.p)("attr")], e)
      }(), te = {
        bind: function (e, t, n) {
          e.originalMode = e.mode, e.mode = this.mode
        }, unbind: function (e, t) {
          e.mode = e.originalMode, e.originalMode = null
        }
      }, ne = function () {
        function e() {
          this.mode = c.q.oneTime
        }

        return e = v([Object(h.c)(te), Object(c.p)("oneTime")], e)
      }(), ie = function () {
        function e() {
          this.mode = c.q.toView
        }

        return e = v([Object(h.c)(te), Object(c.p)("oneWay")], e)
      }(), re = function () {
        function e() {
          this.mode = c.q.toView
        }

        return e = v([Object(h.c)(te), Object(c.p)("toView")], e)
      }(), oe = function () {
        function e() {
          this.mode = c.q.fromView
        }

        return e = v([Object(h.c)(te), Object(c.p)("fromView")], e)
      }(), ae = function () {
        function e() {
          this.mode = c.q.twoWay
        }

        return e = v([Object(h.c)(te), Object(c.p)("twoWay")], e)
      }();

      function se(e) {
        var t = this, n = this.throttleState, i = +new Date - n.last;
        if (i >= n.delay) return clearTimeout(n.timeoutId), n.timeoutId = null, n.last = +new Date, void this.throttledMethod(e);
        n.newValue = e, null === n.timeoutId && (n.timeoutId = setTimeout((function () {
          n.timeoutId = null, n.last = +new Date, t.throttledMethod(n.newValue)
        }), n.delay - i))
      }

      var ce = function () {
        function e() {
        }

        return e.prototype.bind = function (e, t, n) {
          void 0 === n && (n = 200);
          var i = "updateTarget";
          e.callSource ? i = "callSource" : e.updateSource && e.mode === c.q.twoWay && (i = "updateSource"), e.throttledMethod = e[i], e.throttledMethod.originalName = i, e[i] = se, e.throttleState = {
            delay: n,
            last: 0,
            timeoutId: null
          }
        }, e.prototype.unbind = function (e, t) {
          e[e.throttledMethod.originalName] = e.throttledMethod, e.throttledMethod = null, clearTimeout(e.throttleState.timeoutId), e.throttleState = null
        }, e = v([Object(c.p)("throttle")], e)
      }(), le = {};

      function ue(e) {
        var t = this, n = this.debounceState;
        clearTimeout(n.timeoutId), n.timeoutId = setTimeout((function () {
          return t.debouncedMethod(e)
        }), n.delay)
      }

      function de(e, t, n) {
        var i = this, r = this.debounceState;
        if (clearTimeout(r.timeoutId), e !== r.callContextToDebounce) return r.oldValue = le, void this.debouncedMethod(e, t, n);
        r.oldValue === le && (r.oldValue = n), r.timeoutId = setTimeout((function () {
          var n = r.oldValue;
          r.oldValue = le, i.debouncedMethod(e, t, n)
        }), r.delay)
      }

      var he = function () {
        function e() {
        }

        return e.prototype.bind = function (e, t, n) {
          void 0 === n && (n = 200);
          var i = void 0 !== e.callSource, r = i ? "callSource" : "call", o = i ? ue : de, a = e.mode,
            s = a === c.q.twoWay || a === c.q.fromView ? c.z : c.x;
          e.debouncedMethod = e[r], e.debouncedMethod.originalName = r, e[r] = o, e.debounceState = {
            callContextToDebounce: s,
            delay: n,
            timeoutId: 0,
            oldValue: le
          }
        }, e.prototype.unbind = function (e, t) {
          e[e.debouncedMethod.originalName] = e.debouncedMethod, e.debouncedMethod = null, clearTimeout(e.debounceState.timeoutId), e.debounceState = null
        }, e = v([Object(c.p)("debounce")], e)
      }();

      function pe(e) {
        var t = function (e) {
          return e.path && e.path[0] || e.deepPath && e.deepPath[0] || e.target
        }(e);
        this.target === t && this.selfEventCallSource(e)
      }

      var fe = function () {
          function e() {
          }

          return e.prototype.bind = function (e, t) {
            if (!e.callSource || !e.targetEvent) throw new Error("Self binding behavior only supports event.");
            e.selfEventCallSource = e.callSource, e.callSource = pe
          }, e.prototype.unbind = function (e, t) {
            e.callSource = e.selfEventCallSource, e.selfEventCallSource = null
          }, e = v([Object(c.p)("self")], e)
        }(), ve = function () {
          function e() {
            this.signals = {}
          }

          return e.prototype.signal = function (e) {
            var t = this.signals[e];
            if (t) for (var n = t.length; n--;) t[n].call(c.x)
          }, e
        }(), ge = function () {
          function e(e) {
            this.signals = e.signals
          }

          return e.inject = function () {
            return [ve]
          }, e.prototype.bind = function (e, t) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            if (!e.updateTarget) throw new Error("Only property bindings and string interpolation bindings can be signaled.  Trigger, delegate and call bindings cannot be signaled.");
            var r = this.signals;
            if (1 === n.length) {
              var o = n[0];
              (r[o] || (r[o] = [])).push(e), e.signalName = o
            } else {
              if (!(n.length > 1)) throw new Error("Signal name is required.");
              for (var a = n.length; a--;) {
                var s = n[a];
                (r[s] || (r[s] = [])).push(e)
              }
              e.signalName = n
            }
          }, e.prototype.unbind = function (e, t) {
            var n = this.signals, i = e.signalName;
            if (e.signalName = null, Array.isArray(i)) for (var r = i, o = r.length; o--;) {
              var a;
              (a = n[r[o]]).splice(a.indexOf(e), 1)
            } else (a = n[i]).splice(a.indexOf(e), 1)
          }, e = v([Object(c.p)("signal")], e)
        }(),
        me = "The updateTrigger binding behavior requires at least one event name argument: eg <input value.bind=\"firstName & updateTrigger:'blur'\">",
        ye = "The updateTrigger binding behavior can only be applied to two-way/ from-view bindings on input/select elements.",
        be = function () {
          function e() {
          }

          return e.prototype.bind = function (e, t) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            if (0 === n.length) throw new Error(me);
            if (e.mode !== c.q.twoWay && e.mode !== c.q.fromView) throw new Error(ye);
            var r = e.observerLocator.getObserver(e.target, e.targetProperty);
            if (!r.handler) throw new Error(ye);
            e.targetObserver = r, r.originalHandler = e.targetObserver.handler;
            var o = new c.g(n);
            r.handler = o
          }, e.prototype.unbind = function (e, t) {
            var n = e.targetObserver;
            n.handler.dispose(), n.handler = n.originalHandler, n.originalHandler = null
          }, e = v([Object(c.p)("updateTrigger")], e)
        }();

      function we(e) {
        var t = e.container.get(s.m), n = e.aurelia.loader;
        t.addResourcePlugin(".html", {
          fetch: function (e) {
            return n.loadTemplate(e).then((function (t) {
              var n, i = t.template.getAttribute("bindable"), r = t.template.getAttribute("use-shadow-dom"),
                o = /([^\/^\?]+)\.html/i.exec(e)[1].toLowerCase();
              return i ? (i = i.split(",").map((function (e) {
                return e.trim()
              })), t.template.removeAttribute("bindable")) : i = [], (n = {})[o] = function (e) {
                for (var t = e.name, n = e.viewUrl, i = e.bindableNames, r = e.useShadowDOMmode, o = function () {
                  function e() {
                  }

                  return e.prototype.bind = function (e) {
                    this.$parent = e
                  }, e = v([Object(s.s)(t), Object(s.y)(n)], e)
                }(), a = 0, c = i.length; a < c; ++a) Object(s.q)(i[a])(o);
                switch (r) {
                  case"open":
                    Object(s.x)({mode: "open"})(o);
                    break;
                  case"closed":
                    Object(s.x)({mode: "closed"})(o);
                    break;
                  case"":
                    Object(s.x)(o);
                    break;
                  case null:
                    break;
                  default:
                    Object(l.getLogger)("aurelia-html-only-element").warn('Expected \'use-shadow-dom\' value to be "close", "open" or "", received ' + r)
                }
                return o
              }({name: o, viewUrl: e, bindableNames: i, useShadowDOMmode: r}), n
            }))
          }
        })
      }

      function xe(e) {
        o.b.injectStyles(".aurelia-hide { display:none !important; }"), e.globalResources(g, x, _, C, D, $, G, J, K, Q, ne, ie, re, oe, ae, ce, he, fe, ge, be, ee), we(e);
        var t = e.container.get(s.m), n = {
          fetch: function (e) {
            var t;
            return (t = {})[e] = function (e) {
              return function (t) {
                function n() {
                  return null !== t && t.apply(this, arguments) || this
                }

                return f(n, t), n = v([Object(s.v)(new Y(e))], n)
              }(Z)
            }(e), t
          }
        };
        [".css", ".less", ".sass", ".scss", ".styl"].forEach((function (e) {
          return t.addResourcePlugin(e, n)
        }))
      }
    }).call(this, n(8))
  }, "aurelia-templating-router": function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "configure", (function () {
        return b
      }));
      var i = n(11), r = n(1), o = n(7), a = n(3), s = n(6), c = n(2), l = n(0), u = n(4), d = function (e, t) {
        return (d = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
          e.__proto__ = t
        } || function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
      };
      var h = function () {
      }, p = function () {
        function t(e, t, n, i, r, o, a) {
          this.element = e, this.container = t, this.viewSlot = n, this.router = i, this.viewLocator = r, this.compositionTransaction = o, this.compositionEngine = a, this.router.registerViewPort(this, this.element.getAttribute("name")), "initialComposition" in o || (o.initialComposition = !0, this.compositionTransactionNotifier = o.enlist())
        }

        return t.inject = function () {
          return [l.b.Element, s.a, a.p, i.c, a.n, a.f, a.e]
        }, t.prototype.created = function (e) {
          this.owningView = e
        }, t.prototype.bind = function (e, t) {
          this.container.viewModel = e, this.overrideContext = t
        }, t.prototype.process = function (e, t) {
          var n = this, i = e, o = i.component, s = o.childContainer, c = o.viewModel, l = o.viewModelResource,
            u = l.metadata, d = o.router.currentInstruction.config, h = d.viewPorts && d.viewPorts[i.name] || {};
          s.get(f)._notify(this);
          var p = {
            viewModel: h.layoutViewModel || d.layoutViewModel || this.layoutViewModel,
            view: h.layoutView || d.layoutView || this.layoutView,
            model: h.layoutModel || d.layoutModel || this.layoutModel,
            router: i.component.router,
            childContainer: s,
            viewSlot: this.viewSlot
          }, v = this.viewLocator.getViewStrategy(o.view || c);
          return v && o.view && v.makeRelativeTo(r.a.get(o.router.container.viewModel.constructor).moduleId), u.load(s, l.value, null, v, !0).then((function (e) {
            n.compositionTransactionNotifier || (n.compositionTransactionOwnershipToken = n.compositionTransaction.tryCapture()), (p.viewModel || p.view) && (i.layoutInstruction = p);
            var r = a.b.dynamic(n.element, c, e);
            if (i.controller = u.create(s, r), t) return null;
            n.swap(i)
          }))
        }, t.prototype.swap = function (t) {
          var n = this, i = t, r = i.controller, o = i.layoutInstruction, s = this.view, l = function () {
            var t = a.i[n.swapOrder] || a.i.after, i = n.viewSlot;
            t(i, s, (function () {
              return e.resolve(i.add(n.view))
            })).then((function () {
              n._notify()
            }))
          }, u = function (e) {
            r.automate(n.overrideContext, e);
            var t = n.compositionTransactionOwnershipToken;
            return t ? t.waitForCompositionComplete().then((function () {
              return n.compositionTransactionOwnershipToken = null, l()
            })) : l()
          };
          return o ? (o.viewModel || (o.viewModel = new h), this.compositionEngine.createController(o).then((function (e) {
            var t = e.view;
            return a.h.distributeView(r.view, e.slots || t.slots), e.automate(Object(c.t)(o.viewModel), n.owningView), t.children.push(r.view), t || e
          })).then((function (e) {
            return n.view = e, u(e)
          }))) : (this.view = r.view, u(this.owningView))
        }, t.prototype._notify = function () {
          var e = this.compositionTransactionNotifier;
          e && (e.done(), this.compositionTransactionNotifier = null)
        }, t.$view = null, t.$resource = {
          name: "router-view",
          bindables: ["swapOrder", "layoutView", "layoutViewModel", "layoutModel", "inherit-binding-context"]
        }, t
      }(), f = function () {
        function t() {
          var t = this;
          this.promise = new e((function (e) {
            return t.resolve = e
          }))
        }

        return t.prototype.findNearest = function () {
          return this.promise
        }, t.prototype._notify = function (e) {
          this.resolve(e)
        }, t
      }(), v = function () {
      };
      a.t("<template></template>")(v);
      var g = function (t) {
        function n(e) {
          var n = t.call(this) || this;
          return n.compositionEngine = e, n
        }

        return function (e, t) {
          function n() {
            this.constructor = e
          }

          d(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }(n, t), n.prototype.resolveViewModel = function (t, n) {
          return new e((function (e, i) {
            var s;
            if ("moduleId" in n) {
              var c = n.moduleId;
              return null === c ? s = v : (c = Object(o.d)(c, r.a.get(t.container.viewModel.constructor).moduleId), s = /\.html/i.test(c) ? function (e) {
                var t = /([^\/^\?]+)\.html/i.exec(e)[1], n = function () {
                  function e() {
                  }

                  return e.prototype.bind = function (e) {
                    this.$parent = e
                  }, e
                }();
                return Object(a.s)(t)(n), Object(a.y)(e)(n), n
              }(c) : c), e(s)
            }
            i(new Error('Invalid route config. No "moduleId" found.'))
          }))
        }, n.prototype.createChildContainer = function (e) {
          var t = e.container.createChild();
          return t.registerSingleton(f), t.getChildRouter = function () {
            var n;
            return t.registerHandler(i.c, (function () {
              return n || (n = e.createChild(t))
            })), t.get(i.c)
          }, t
        }, n.prototype.loadRoute = function (e, t, n) {
          var i = this;
          return this.resolveViewModel(e, t).then((function (n) {
            return i.compositionEngine.ensureViewModel({
              viewModel: n,
              childContainer: i.createChildContainer(e),
              view: t.view || t.viewStrategy,
              router: e
            })
          }))
        }, n.inject = [a.e], n
      }(i.b);
      var m = Object(u.getLogger)("route-href"), y = function () {
        function e(e, t) {
          this.router = e, this.element = t, this.attribute = "href"
        }

        return e.inject = function () {
          return [i.c, l.b.Element]
        }, e.prototype.bind = function () {
          this.isActive = !0, this.processChange()
        }, e.prototype.unbind = function () {
          this.isActive = !1
        }, e.prototype.attributeChanged = function (e, t) {
          return t && this.element.removeAttribute(t), this.processChange()
        }, e.prototype.processChange = function () {
          var e = this;
          return this.router.ensureConfigured().then((function () {
            if (!e.isActive) return null;
            var t = e.element, n = e.router.generate(e.route, e.params);
            return t.au.controller ? t.au.controller.viewModel[e.attribute] = n : t.setAttribute(e.attribute, n), null
          })).catch((function (e) {
            m.error(e)
          }))
        }, e.$resource = {
          type: "attribute",
          name: "route-href",
          bindables: [{name: "route", changeHandler: "processChange", primaryProperty: !0}, {
            name: "params",
            changeHandler: "processChange"
          }, "attribute"]
        }, e
      }();

      function b(e) {
        e.singleton(i.b, g).singleton(i.c, i.a).globalResources(p, y), e.container.registerAlias(i.c, i.a)
      }
    }).call(this, n(8))
  }, "aurelia-testing": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "configure", (function () {
      return s
    }));
    var i = n("aurelia-testing/compile-spy");
    n.d(t, "CompileSpy", (function () {
      return i.CompileSpy
    }));
    var r = n("aurelia-testing/view-spy");
    n.d(t, "ViewSpy", (function () {
      return r.ViewSpy
    }));
    var o = n(23);
    n.d(t, "StageComponent", (function () {
      return o.b
    })), n.d(t, "ComponentTester", (function () {
      return o.a
    }));
    var a = n(17);

    function s(e) {
      e.globalResources(["./compile-spy", "./view-spy"])
    }

    n.d(t, "waitFor", (function () {
      return a.a
    })), n.d(t, "waitForDocumentElement", (function () {
      return a.b
    })), n.d(t, "waitForDocumentElements", (function () {
      return a.c
    }))
  }, "aurelia-testing/compile-spy": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "CompileSpy", (function () {
      return c
    }));
    var i = n(3), r = n(6), o = n(4), a = n(0), s = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }, c = function () {
      function e(e, t) {
        Object(o.getLogger)("compile-spy").info(e.toString(), t)
      }

      return e = s([Object(i.r)("compile-spy"), Object(r.c)(a.b.Element, i.j)], e)
    }()
  }, "aurelia-testing/view-spy": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "ViewSpy", (function () {
      return a
    }));
    var i = n(3), r = n(4), o = function (e, t, n, i) {
      var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }, a = function () {
      function e() {
        this.logger = Object(r.getLogger)("view-spy")
      }

      return e.prototype._log = function (e, t) {
        this.value || "created" !== e ? this.value && -1 !== this.value.indexOf(e) && this.logger.info(e, this.view, t) : this.logger.info(e, this.view)
      }, e.prototype.created = function (e) {
        this.view = e, this._log("created")
      }, e.prototype.bind = function (e) {
        this._log("bind", e)
      }, e.prototype.attached = function () {
        this._log("attached")
      }, e.prototype.detached = function () {
        this._log("detached")
      }, e.prototype.unbind = function () {
        this._log("unbind")
      }, e = o([Object(i.r)("view-spy")], e)
    }()
  }, main: function (e, t, n) {
    "use strict";
    var i = !1, r = !1, o = (n(0), n(8));

    function a(e) {
      e.use.standardConfiguration().feature("resources/index"), i && e.use.developmentLogging(), r && e.use.plugin("aurelia-testing"), e.start().then(() => e.setRoot("app"))
    }

    n.d(t, "configure", (function () {
      return a
    })), o.config({warnings: {wForgottenReturn: !1}})
  }, "resources/index": function (e, t, n) {
    "use strict";

    function i(e) {
    }

    n.r(t), n.d(t, "configure", (function () {
      return i
    }))
  }
});
//# sourceMappingURL=app.9b48f2f1bb5f15b8e39a.bundle.map
