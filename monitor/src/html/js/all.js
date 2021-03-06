/******/
!function (modules) {
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      exports: {
      },
      id: moduleId,
      loaded: !1
    };
    return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__),
    module.loaded = !0,
    module.exports
  } // webpackBootstrap
  /******/

  var installedModules = {
  };
  return __webpack_require__.m = modules,
  __webpack_require__.c = installedModules,
  __webpack_require__.p = '',
  __webpack_require__(0)
}([function (module, exports, __webpack_require__) {
  'use strict';
  function handleResize(windowState) {
    switch (windowState) {
      case 2:
        try {
          $('.page-btn').show()
        } catch (e) {
        }
        try {
          $('.navbar-nav').addClass('m-r-20')
        } catch (e) {
        }
        break;
      default:
        try {
          $('.page-btn').hide()
        } catch (e) {
        }
        try {
          $('.navbar-nav').removeClass('m-r-20')
        } catch (e) {
        }
    }
  }
  var $__index_46_run__,
  $__index_46_config__,
  $__index_46_route__,
  $___46__46__47_components_47_navbar_47_navbar_46_controller__,
  $___46__46__47_components_47_sidebar_47_sidebar_46_controller__,
  $__about_47_about_46_controller_46_js__,
  $__util_47_color__,
  $__util_47_highcharts_45_i18n_45_zh_95_cn__;
  __webpack_require__(1),
  __webpack_require__(2),
  __webpack_require__(3),
  __webpack_require__(4),
  __webpack_require__(5),
  __webpack_require__(6),
  __webpack_require__(7),
  __webpack_require__(8),
  __webpack_require__(9),
  __webpack_require__(10),
  __webpack_require__(11),
  __webpack_require__(12),
  __webpack_require__(13),
  __webpack_require__(14),
  __webpack_require__(15),
  __webpack_require__(16),
  __webpack_require__(17),
  __webpack_require__(24),
  __webpack_require__(25);
  var runBlock = ($__index_46_run__ = __webpack_require__(18), $__index_46_run__ && $__index_46_run__.__esModule && $__index_46_run__ || {
    'default': $__index_46_run__
  }) ['default'],
  configBlock = ($__index_46_config__ = __webpack_require__(19), $__index_46_config__ && $__index_46_config__.__esModule && $__index_46_config__ || {
    'default': $__index_46_config__
  }) ['default'],
  routerConfig = ($__index_46_route__ = __webpack_require__(20), $__index_46_route__ && $__index_46_route__.__esModule && $__index_46_route__ || {
    'default': $__index_46_route__
  }) ['default'],
  NavbarCtrl = ($___46__46__47_components_47_navbar_47_navbar_46_controller__ = __webpack_require__(26), $___46__46__47_components_47_navbar_47_navbar_46_controller__ && $___46__46__47_components_47_navbar_47_navbar_46_controller__.__esModule && $___46__46__47_components_47_navbar_47_navbar_46_controller__ || {
    'default': $___46__46__47_components_47_navbar_47_navbar_46_controller__
  }) ['default'],
  SidebarCtrl = ($___46__46__47_components_47_sidebar_47_sidebar_46_controller__ = __webpack_require__(27), $___46__46__47_components_47_sidebar_47_sidebar_46_controller__ && $___46__46__47_components_47_sidebar_47_sidebar_46_controller__.__esModule && $___46__46__47_components_47_sidebar_47_sidebar_46_controller__ || {
    'default': $___46__46__47_components_47_sidebar_47_sidebar_46_controller__
  }) ['default'],
  AboutCtrl = ($__about_47_about_46_controller_46_js__ = __webpack_require__(21), $__about_47_about_46_controller_46_js__ && $__about_47_about_46_controller_46_js__.__esModule && $__about_47_about_46_controller_46_js__ || {
    'default': $__about_47_about_46_controller_46_js__
  }) ['default'],
  color = ($__util_47_color__ = __webpack_require__(22), $__util_47_color__ && $__util_47_color__.__esModule && $__util_47_color__ || {
    'default': $__util_47_color__
  }) ['default'],
  highcharts_i18n_zh_cn = ($__util_47_highcharts_45_i18n_45_zh_95_cn__ = __webpack_require__(23), $__util_47_highcharts_45_i18n_45_zh_95_cn__ && $__util_47_highcharts_45_i18n_45_zh_95_cn__.__esModule && $__util_47_highcharts_45_i18n_45_zh_95_cn__ || {
    'default': $__util_47_highcharts_45_i18n_45_zh_95_cn__
  }) ['default'];
  window.xssWatch = function () {
    var watcher = null;
    return {
      watch: function (callback) {
        return watcher = callback,
        function () {
          watcher = null
        }
      },
      trigger: function (event) {
        null !== watcher && 'http://sso.wajinzi.me' === event.origin && watcher(event.data)
      }
    }
  }(),
  window.addEventListener('message', window.xssWatch.trigger),
  window.appUpdateWatch = function () {
    var watcher = null;
    return {
      watch: function (callback) {
        return watcher = callback,
        function () {
          watcher = null
        }
      },
      trigger: function () {
        null !== watcher && watcher()
      }
    }
  }(),
  window.windowStateWatch = function () {
    var watcher = null;
    return {
      watch: function (callback) {
        return watcher = callback,
        function () {
          watcher = null
        }
      },
      trigger: function (windowState) {
        null !== watcher && watcher(windowState)
      }
    }
  }();
  try {
    frm_oper.setWindowsEvent('window.appUpdateWatch.trigger'),
    frm_oper.setFrmResizeEvent('window.windowStateWatch.trigger')
  } catch (e) {
  }
  window.windowStateWatch.watch(function (windowState) {
    handleResize(windowState)
  });
  var appInfo = {
  };
  try {
    var appTimeRegex = new RegExp('[^.]+$', 'i'),
    appVerRegex = new RegExp('^[0-9.]+(?=[.][0-9])', 'i'),
    appInfoRaw = frm_oper.version;
    appInfo.version = appVerRegex.exec(appInfoRaw) [0],
    appInfo.time = 1000 * parseInt(appTimeRegex.exec(appInfoRaw) [0])
  } catch (e) {
    appInfo.version = '-'
  }
  document.title = '掘金终端 V' + appInfo.version;
  {
    var newWindowFeature = 'width=' + screen.width + ',height=' + screen.height + ',top=0,left=0,toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes,location=yes,status=yes';
    angular.module('myApp', [
      'auth',
      'pinyin',
      'gmsdk',
      'auth.controllers',
      'myApp.account',
      'myApp.strategy',
      'myApp.backtest',
      'myApp.create',
      'myApp.risk',
      'myApp.message',
      'myApp.analysis',
      'util',
      'ngAnimate',
      'ngSanitize',
      'ngCsv',
      'ngLocale',
      'ui.bootstrap',
      'ui.router',
      'isteven-multi-select',
      'smart-table',
      'highcharts-ng',
      'custom-tip',
      'custom-flot',
      'custom-accordion',
      'custom-slimscroll',
      'datePicker',
      'ui.checkbox',
      'ui.ace',
      'ngTagsInput',
      'toastr',
      'dndLists',
      'angular-clipboard'
    ]).constant('color', color).constant('appInfo', appInfo).constant('newWindowFeature', newWindowFeature).factory('highcharts_i18n_zh_cn', highcharts_i18n_zh_cn).controller('NavbarCtrl', NavbarCtrl).controller('SidebarCtrl', SidebarCtrl).controller('AboutCtrl', AboutCtrl).config(routerConfig).config(configBlock).config(['toastrConfig',
    function (toastrConfig) {
      angular.extend(toastrConfig, {
        timeOut: 5000,
        progressBar: !0,
        allowHtml: !0
      })
    }
    ]).config(['$compileProvider',
    function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/./),
      $compileProvider.imgSrcSanitizationWhitelist(/./)
    }
    ]).run(runBlock).directive('keyEnter', function () {
      return function (scope, element, attrs) {
        element.bind('keydown keypress', function (event) {
          13 === event.which && (scope.$apply(function () {
            scope.$eval(attrs.keyEnter)
          }), event.preventDefault())
        })
      }
    })
  }
},
function (module, exports, __webpack_require__) {
  'use strict';
  Object.defineProperties(exports, {
    'default': {
      get: function () {
        return $__default
      }
    },
    __esModule: {
      value: !0
    }
  }),
  __webpack_require__(28),
  __webpack_require__(29);
  var moduleName = 'myApp.create',
  $__default = (angular.module(moduleName, [
    'create.controllers',
    'create.services'
  ]), moduleName)
},
function (module, exports, __webpack_require__) {
  'use strict';
  Object.defineProperties(exports, {
    'default': {
      get: function () {
        return $__default
      }
    },
    __esModule: {
      value: !0
    }
  }),
  __webpack_require__(30),
  __webpack_require__(31),
  __webpack_require__(32);
  var moduleName = 'myApp.backtest',
  $__default = (angular.module(moduleName, [
    'backtest.controllers',
    'backtest.services',
    'strategy.filters',
    'smart-table',
    'highcharts-ng',
    'custom-tip',
    'custom-accordion',
    'custom-slimscroll'
  ]), moduleName)
},
function (module, exports, __webpack_require__) {
  'use strict';
  Object.defineProperties(exports, {
    'default': {
      get: function () {
        return $__default
      }
    },
    __esModule: {
      value: !0
    }
  }),
  __webpack_require__(33),
  __webpack_require__(34),
  __webpack_require__(32);
  var moduleName = 'myApp.strategy',
  $__default = (angular.module(moduleName, [
    'strategy.controllers',
    'strategy.services',
    'strategy.filters'
  ]), moduleName)
},
function (module, exports, __webpack_require__) {
  'use strict';
  __webpack_require__(35),
  __webpack_require__(36),
  __webpack_require__(37);
  angular.module('myApp.account', [
    'account.controllers',
    'account.services',
    'account.filters'
  ])
},
function (module, exports, __webpack_require__) {
  'use strict';
  Object.defineProperties(exports, {
    'default': {
      get: function () {
        return $__default
      }
    },
    __esModule: {
      value: !0
    }
  }),
  __webpack_require__(38),
  __webpack_require__(39),
  __webpack_require__(40);
  var moduleName = 'myApp.risk',
  $__default = (angular.module(moduleName, [
    'risk.controllers',
    'risk.services',
    'risk.filters'
  ]), moduleName)
},
function (module, exports, __webpack_require__) {
  'use strict';
  __webpack_require__(41);
  angular.module('myApp.message', [
    'message.services'
  ])
},
function (module, exports, __webpack_require__) {
  'use strict';
  __webpack_require__(42),
  __webpack_require__(43);
  angular.module('myApp.analysis', [
    'analysis.controllers',
    'analysis.service'
  ])
},
function () {
  'use strict';
  var auth = angular.module('auth', [
  ]);
  auth.provider('auth.helper', function () {
    this.$get = [
      '$window',
      '$modal',
      '$rootScope',
      function ($window, $modal, $rootScope) {
        function PermissionCtrl($scope, $modalInstance, title, description) {
          this.title = title || '未通过权限认证',
          this.description = description || '您当前的用户权限不能使用该功能。'
        }
        var modalTemplate = 'app/auth/permission.deny.dialog.html';
        PermissionCtrl.$inject = [
          '$scope',
          '$modalInstance',
          'title',
          'description'
        ];
        var _default_profile = {
          group_infos: [
            'free'
          ],
          group_extinfo: {
            allowed_nonlive_strategies: 1,
            allowed_live_strategies: 1,
            allowed_broker_accounts: 1
          },
          nick_name: '-',
          username: '-',
          out_of_date: '-',
          uid: null,
          avatar_file: 'assets/images/user.jpg',
          mobile: '',
          orginfo: {
            tpl_list: [
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8'
            ],
            name: '-',
            doc_entry: 1,
            about_software_entry: 1,
            validity_period_tag: 1,
            user_profile_entry: 1,
            logo_url: 'assets/images/logo-null.png',
            login_title: '',
            third_part_login_entry: 1,
            login_logo: 'assets/images/login-logo.png',
            registe_entry: 1,
            login_backbround_img: 'assets/images/1.jpg'
          },
          email: '-',
          introduction: null
        },
        _default_permission = {
          account: '0',
          riskcontrol: '0',
          SignalAnalysis: '0',
          simtrade: '1',
          template: '1',
          realtrade: '0',
          backtest: '1'
        },
        ret = {
          setToken: function (token) {
            $window.sessionStorage.token = token
          },
          getToken: function () {
            return $window.sessionStorage.token
          },
          setProfile: function (p) {
            var userGroup = null;
            try {
              userGroup = p.group_infos[0]
            } catch (e) {
            }
            var profile = angular.extend({
            }, _default_profile, {
              username: p.nick_name || p.email || p.mobile
            }, p);
            profile.orginfo = angular.extend({
            }, _default_profile.orginfo, p.orginfo),
            0 === profile.orginfo.logo_url.length && (profile.orginfo.logo_url = 'assets/images/logo-' + userGroup + '.png'),
            0 === profile.orginfo.login_logo.length && (profile.orginfo.login_logo = 'assets/images/login-logo.png'),
            0 === profile.orginfo.login_backbround_img.length && (profile.orginfo.login_backbround_img = 'assets/images/1.jpg'),
            $window.localStorage.profile = JSON.stringify(profile),
            $rootScope.$broadcast('event:got-profile', profile)
          },
          getProfile: function () {
            return JSON.parse($window.localStorage.getItem('profile')) || _default_profile
          },
          setPermissions: function (p) {
            var permission = {
              templatePMSN: p.template,
              riskControlPMSN: p.riskcontrol,
              simTradePMSN: p.simtrade,
              realTradePMSN: p.realtrade,
              accountPMSN: p.account,
              backtestPMSN: p.backtest,
              analysisPMSN: p.SignalAnalysis
            };
            $window.sessionStorage.permission = JSON.stringify(permission),
            $rootScope.$broadcast('event:got-permission', permission)
          },
          getPermissions: function () {
            return JSON.parse($window.sessionStorage.getItem('permission')) || _default_permission
          },
          clearAll: function () {
            delete $window.sessionStorage.token,
            delete $window.sessionStorage.permission
          },
          permission_deny: function (title, description) {
            return new Promise(function (resolve) {
              var modalInstance = $modal.open({
                templateUrl: modalTemplate,
                controller: PermissionCtrl,
                controllerAs: 'modal',
                resolve: {
                  title: function () {
                    return title
                  },
                  description: function () {
                    return description
                  }
                }
              });
              modalInstance.result.then(resolve)
            })
          }
        };
        return ret
      }
    ]
  })
},
function () {
  'use strict';
  var gm = angular.module('gmsdk', [
    'http-auth-interceptor',
    'pinyin',
    'auth'
  ]);
  gm.provider('gmsdk.sso', function () {
    this.ssoAddr = '';
    var that = this;
    this.$get = [
      '$http',
      '$rootScope',
      'authService',
      'auth.helper',
      function ($http, scope, authService, authHelper) {
        function authSuccess(token) {
          _jwt_token = token,
          _user.password = '-',
          _user.username = '-',
          $http.defaults.headers.common.Authorization = 'Bearer ' + _jwt_token,
          authHelper.setToken(_jwt_token),
          authService.loginConfirmed(),
          $http({
            method: 'GET',
            withCredentials: !0,
            url: addr + 'me/'
          }).then(function (resp) {
            var profile = resp.data;
            profile && authHelper.setProfile(profile)
          }, function () {
          }),
          $http({
            method: 'GET',
            withCredentials: !0,
            url: addr + 'api/v1/userpermission/'
          }).then(function (resp) {
            var permission = resp.data.permission;
            permission && authHelper.setPermissions(permission)
          }, function () {
          })
        }
        var addr = 'http://' + that.ssoAddr + '/',
        _sso_token = '',
        _jwt_token = '',
        _user = {
        };
        return {
          user: function () {
            return _user
          },
          token: function () {
            return _jwt_token || authHelper.getToken()
          },
          loginWithToken: function (token) {
            authSuccess(token)
          },
          login: function (username, password) {
            var usr = '{"username":"' + username + '","password":"' + password + '"}';
            $http({
              method: 'POST',
              withCredentials: !0,
              headers: {
                'Content-Type': 'application/json'
              },
              data: usr,
              url: addr + 'login/?type=jwt&__nocheck=true'
            }).success(function (data) {
              authSuccess(data.jwttoken)
            }).error(function (data) {
              _jwt_token = '',
              _user = {
              },
              $http.defaults.headers.common.Authorization = '',
              authHelper.clearAll(),
              scope.$broadcast('event:auth-loginFailed', data)
            })
          },
          logout: function () {
            function clearThenBroadcast() {
              _jwt_token = '',
              _sso_token = '',
              _user = {
              },
              authHelper.clearAll(),
              $http.defaults.headers.common.Authorization = '',
              authService.loginCancelled()
            }
            $http({
              method: 'GET',
              withCredentials: !0,
              url: addr + 'logout/?__nocheck=true'
            }).then(function () {
              clearThenBroadcast()
            }, function (resp) {
              403 == resp.status && clearThenBroadcast()
            })
          },
          getServiceEntry: function (serviceName) {
            return $http.get(addr + 'service-entries/' + serviceName)
          }
        }
      }
    ],
    this.setSsoAddr = function (addr) {
      this.ssoAddr = addr
    }
  }),
  gm.provider('gmsdk.md', function () {
    var restAddr = '',
    liveAddr = '';
    this.$get = [
      '$http',
      'gmsdk.sso',
      'pinyin',
      function ($http, sso, pinyin) {
        var ws = null,
        subSymbols = [
        ],
        unsubSymbols = [
        ],
        onTick = null,
        onBar = null,
        querySymbol = !1,
        g = this;
        return g.obj = {
          symbolTypeAhead: {
          },
          getBrokers: function () {
            return $http.get(restAddr + 'brokers/')
          },
          getBrokerChannelTypes: function () {
            return $http.get(restAddr + 'broker_channels')
          },
          getBrokersByChannelType: function (ct) {
            return $http.get(restAddr + 'brokers_by_ct/' + ct)
          },
          setBroker: function (broker) {
            return $http.post(restAddr + 'brokers', broker)
          },
          getSymbols: function () {
            function _makeTypeAhead(data) {
              var res = {
              };
              return data.forEach(function (datum) {
                var symbol = datum.symbol.toUpperCase(),
                sec_id = datum.sec_id.toUpperCase(),
                sec_name = datum.sec_name.toUpperCase();
                res[symbol] ? res[symbol].push(datum)  : res[symbol] = [
                  datum
                ],
                res[sec_name] ? res[sec_name].push(datum)  : res[sec_name] = [
                  datum
                ],
                pinyin.makePy(sec_name).forEach(function (abbr) {
                  abbr = abbr.toUpperCase(),
                  abbr !== sec_id && (res[abbr] ? res[abbr].push(datum)  : res[abbr] = [
                    datum
                  ])
                })
              }),
              res
            }
            if (!Object.keys(g.obj.symbolTypeAhead).length && querySymbol === !1) {
              querySymbol = !0;
              var lastTime = window.localStorage.instrumentsUpdateTime,
              inst = window.localStorage.getItem('instruments'),
              now = (new Date).getTime(),
              aday = 43200000;
              if (lastTime && Math.abs(lastTime - now) < aday && inst) inst = JSON.parse(window.localStorage.getItem('instruments')),
              g.obj.symbolTypeAhead = _makeTypeAhead(inst);
               else {
                var sym_uri = restAddr + 'instruments?fields=sec_type,exchange,is_active,sec_id,sec_name,symbol';
                $http.get(sym_uri).success(function (data) {
                  void 0 !== data.data && (window.localStorage.instruments = JSON.stringify(data.data), window.localStorage.instrumentsUpdateTime = (new Date).getTime(), g.obj.symbolTypeAhead = _makeTypeAhead(data.data))
                }).error(function () {
                  inst && (inst = JSON.parse(window.localStorage.getItem('instruments')), g.obj.symbolTypeAhead = _makeTypeAhead(inst))
                })
              }
            }
          },
          getTicks: function (symbols, start_time, end_time) {
            var uri = restAddr + 'ticks?symbols=' + symbols + '&start_time=' + start_time + '&end_time=' + end_time;
            return $http.get(uri)
          },
          getBars: function (symbols, bar_type, start_time, end_time) {
            var uri = restAddr + 'bars?symbols=' + symbols + '&bar_type=' + bar_type + '&start_time=' + start_time + '&end_time=' + end_time;
            return $http.get(uri)
          },
          getDailyBars: function (symbols, start_time, end_time) {
            var uri = restAddr + 'dailybars?symbols=' + symbols + '&start_time=' + start_time + '&end_time=' + end_time;
            return $http.get(uri)
          },
          getLastTicks: function (symbols) {
            var uri = restAddr + 'last_ticks?symbols=' + symbols;
            return $http.get(uri)
          },
          connect: function (feed, symbols) {
            null === ws && (subSymbols = [
            ], subSymbols.push(symbols), ws = new ReconnectingWebSocket(liveAddr + feed + '?access_token=' + sso.token()), ws.onopen = function () {
              g.obj.sub(subSymbols.join(','))
            }, ws.onclose = function () {
            }, ws.onerror = function () {
            }, ws.onmessage = function (evt) {
              var mt = evt.data.slice(0, 3),
              msg = JSON.parse(evt.data.slice(4));
              switch (mt) {
                case '100':
                  null !== onTick && onTick(msg);
                  break;
                case '101':
                  null !== onBar && onBar(msg)
              }
            })
          },
          sub: function (symbols) {
            subSymbols.push(symbols),
            null !== ws && 1 == ws.readyState && ws.send('5004,' + JSON.stringify({
              uris: symbols
            }))
          },
          unsub: function (symbols) {
            unsubSymbols.push(symbols),
            null !== ws && 1 == ws.readyState && ws.send('5006,' + JSON.stringify({
              uris: symbols
            }))
          },
          setOnTick: function (cb) {
            onTick = cb
          },
          setOnBar: function (cb) {
            onBar = cb
          },
          getBrokerAddr: function (uuid) {
            return $http.get(restAddr + 'brokers/' + uuid)
          }
        },
        g.obj
      }
      ],
      this.setRestAddr = function (addr) {
        restAddr = 'http://' + addr + '/v1/'
      },
      this.setLiveAddr = function (addr) {
        liveAddr = 'ws://' + addr + '/v1/'
      }
    }), gm.provider('gmsdk.td', function () {
      var rawAddr = '',
      restAddr = '',
      liveAddr = '';
      this.$get = [
        '$http',
        'gmsdk.sso',
        function ($http, sso) {
          var ws = null,
          subSymbols = [
          ],
          unsubSymbols = [
          ],
          onOrderStatus = null,
          onExecRpt = null,
          onCash = null,
          onPosition = null,
          onIndicator = null,
          onBrokerCash = null,
          onBrokerPosition = null,
          onBrokerStatus = null,
          onStrategyStatus = null,
          onRiskLog = null,
          g = this;
          return g.obj = {
            getStrategies: function () {
              return $http.get(restAddr + 'strategies')
            },
            getStrategy: function (strategy_id) {
              return $http.get(restAddr + 'strategies/' + strategy_id)
            },
            insertStrategy: function (strategy) {
              return $http.post(restAddr + 'strategies', strategy)
            },
            updateStrategy: function (strategy) {
              return $http.put(restAddr + 'strategies/' + strategy.strategy_id, strategy)
            },
            deleteStrategy: function (strategy_id) {
              return $http['delete'](restAddr + 'strategies/' + strategy_id)
            },
            getAccounts: function () {
              return $http.get(restAddr + 'broker_accounts')
            },
            getAccount: function (account_id) {
              return $http.get(restAddr + 'broker_accounts/' + account_id)
            },
            insertAccount: function (account) {
              return $http.post(restAddr + 'broker_accounts', account)
            },
            updateAccount: function (account) {
              return $http.put(restAddr + 'broker_accounts/' + account.account_id, account)
            },
            deleteAccount: function (account_id) {
              return $http['delete'](restAddr + 'broker_accounts/' + account_id)
            },
            getOrderRoute: function (strategy_id) {
              return $http.get(restAddr + 'routes/' + strategy_id)
            },
            setOrderRoute: function (strategy_id, account_ids) {
              return $http.put(restAddr + 'routes/' + strategy_id, {
                account_ids: account_ids
              })
            },
            deleteOrderRoute: function (strategy_id) {
              return $http['delete'](restAddr + 'routes/' + strategy_id)
            },
            getCashInout: function (strategy_id) {
              return $http.get(restAddr + 'cash_inout/' + strategy_id)
            },
            setCashInout: function (strategy_id, amount) {
              return $http.post(restAddr + 'cash_inout/' + strategy_id, {
                strategy_id: strategy_id,
                amount: amount
              })
            },
            getPositionInout: function (strategy_id) {
              return $http.get(restAddr + 'position_inout/' + strategy_id)
            },
            setPositionInout: function (strategy_id, positions) {
              return $http.post(restAddr + 'position_inout/' + strategy_id, positions)
            },
            placeOrder: function (strategy_id, exchange, sec_id, position_effect, side, order_type, price, volume) {
              var order = {
                strategy_id: strategy_id,
                exchange: exchange,
                sec_id: sec_id,
                position_effect: position_effect,
                side: side,
                order_type: order_type,
                price: price,
                volume: volume
              };
              return $http.post(restAddr + 'orders', order)
            },
            cancelOrder: function (cl_ord_id) {
              return $http.post(restAddr + 'cancel_orders/' + cl_ord_id)
            },
            getOrders: function (strategy_id, start_time, end_time) {
              return $http.get(restAddr + 'orders?strategy_id=' + strategy_id + '&start_time=' + start_time + '&end_time=' + end_time)
            },
            getOrder: function (cl_ord_id) {
              return $http.get(restAddr + 'orders/' + cl_ord_id)
            },
            getLastNOrder: function (strategy_id, n) {
              return $http.get(restAddr + 'last_n_orders?strategy_id=' + strategy_id + '&n=' + n)
            },
            getLastNTrades: function (strategy_id, n) {
              return $http.get(restAddr + 'last_n_trades?strategy_id=' + strategy_id + '&n=' + n)
            },
            getTrades: function (strategy_id, start_time, end_time) {
              return $http.get(restAddr + 'trades?strategy_id=' + strategy_id + '&start_time=' + start_time + '&end_time=' + end_time + ' ')
            },
            getUnfinishedOrders: function (strategy_id) {
              return $http.get(restAddr + 'unfinished_orders/' + strategy_id)
            },
            getCash: function (strategy_id) {
              return $http.get(restAddr + 'cash/' + strategy_id)
            },
            getPositions: function (strategy_id) {
              return $http.get(restAddr + 'positions/' + strategy_id)
            },
            getPosition: function (strategy_id, exchange, sec_id, side) {
              return $http.get(restAddr + 'positions/' + strategy_id + '/' + exchange + '/' + sec_id + '/' + side)
            },
            getIndicator: function (strategy_id) {
              return $http.get(restAddr + 'indicators/' + strategy_id)
            },
            getIndicators: function (strategy_id, start_date, end_date) {
              return $http.get(restAddr + 'indicators?strategy_id=' + strategy_id + '&start_date=' + start_date + '&end_date=' + end_date)
            },
            getLastNIndicators: function (strategy_id, n) {
              return $http.get(restAddr + 'last_n_indicators?strategy_id=' + strategy_id + '&n=' + n)
            },
            getIntradayIndicators: function (strategy_id) {
              return $http.get(restAddr + 'intraday_indicators/' + strategy_id)
            },
            getTodayIndicators: function (strategy_id) {
              return $http.get(restAddr + 'today_indicators/' + strategy_id)
            },
            getDailyIndicators: function (strategy_id, start_date, end_date) {
              return $http.get(restAddr + 'dailyindicators?strategy_id=' + strategy_id + '&start_date=' + start_date + '&end_date=' + end_date)
            },
            getLastNDailyIndicators: function (strategy_id, n) {
              return $http.get(restAddr + 'last_n_dailyindicators?strategy_id=' + strategy_id + '&n=' + n)
            },
            getBrokerCash: function (account_id) {
              return $http.get(restAddr + 'broker_cash/' + account_id)
            },
            getBrokerPositions: function (account_id) {
              return $http.get(restAddr + 'broker_positions/' + account_id)
            },
            getBrokerPosition: function (account_id, exchange, sec_id, side) {
              return $http.get(restAddr + 'broker_positions/' + account_id + '/' + exchange + '/' + sec_id + '/' + side)
            },
            getBrokerStatus: function (account_id) {
              return $http.get(restAddr + 'broker_status/' + account_id)
            },
            loginBroker: function (account_id, pwd, captcha) {
              return $http.post(restAddr + 'login_broker', {
                account_id: account_id,
                password: pwd,
                captcha: captcha
              })
            },
            logoutBroker: function (account_id) {
              return $http.post(restAddr + 'logout_broker/' + account_id)
            },
            getRiskConfig: function (strategy_id) {
              return $http.get(restAddr + 'risk_config/' + strategy_id)
            },
            setRiskConfig: function (strategy_id, risk_config) {
              return $http.put(restAddr + 'risk_config/' + strategy_id, risk_config)
            },
            deleteRiskConfig: function (strategy_id) {
              return $http['delete'](restAddr + 'risk_config/' + strategy_id)
            },
            getRiskLog: function (strategy_id, start_time, end_time) {
              return $http.get(restAddr + 'risk_log', {
                strategy_id: strategy_id,
                start_time: start_time,
                end_time: end_time
              })
            },
            getTodayRiskLog: function (strategy_id) {
              return $http.get(restAddr + 'today_risk_log/' + strategy_id)
            },
            getLastNRiskLog: function (strategy_id, n) {
              return $http.get(restAddr + 'last_n_risk_log?strategy_id=' + strategy_id + '&n=' + n)
            },
            deleteRiskLog: function (strategy_id) {
              return $http['delete'](restAddr + 'risk_log/' + strategy_id)
            },
            connect: function (feed, symbols) {
              null === ws && (subSymbols = [
              ], subSymbols.push(symbols), ws = new ReconnectingWebSocket(liveAddr + feed + '?access_token=' + sso.token()), ws.onopen = function () {
                g.obj.sub(subSymbols.join(','))
              }, ws.onclose = function () {
              }, ws.onerror = function () {
              }, ws.onmessage = function (evt) {
                var mt = evt.data.slice(0, 3),
                msg = JSON.parse(evt.data.slice(4));
                switch (mt) {
                  case '201':
                    null !== onOrderStatus && onOrderStatus(msg);
                    break;
                  case '202':
                    null !== onExecRpt && onExecRpt(msg);
                    break;
                  case '203':
                    null !== onCash && onCash(msg);
                    break;
                  case '204':
                    null !== onPosition && onPosition(msg);
                    break;
                  case '205':
                    null !== onIndicator && onIndicator(msg);
                    break;
                  case '206':
                    null !== onBrokerCash && onBrokerCash(msg);
                    break;
                  case '207':
                    null !== onBrokerPosition && onBrokerPosition(msg);
                    break;
                  case '208':
                    null !== onBrokerStatus && onBrokerStatus(msg);
                    break;
                  case '209':
                    null !== onStrategyStatus && onStrategyStatus(msg);
                    break;
                  case '211':
                    null !== onRiskLog && onRiskLog(msg)
                }
              })
            },
            sub: function (symbols) {
              subSymbols.push(symbols),
              null !== ws && 1 == ws.readyState && ws.send('5004,' + JSON.stringify({
                uris: symbols
              }))
            },
            unsub: function (symbols) {
              unsubSymbols.push(symbols),
              null !== ws && 1 == ws.readyState && ws.send('5006,' + JSON.stringify({
                uris: symbols
              }))
            },
            setOnOrderStatus: function (cb) {
              onOrderStatus = cb
            },
            setOnExecRpt: function (cb) {
              onExecRpt = cb
            },
            setOnCash: function (cb) {
              onCash = cb
            },
            setOnPosition: function (cb) {
              onPosition = cb
            },
            setOnIndicator: function (cb) {
              onIndicator = cb
            },
            setOnBrokerCash: function (cb) {
              onBrokerCash = cb
            },
            setOnBrokerPosition: function (cb) {
              onBrokerPosition = cb
            },
            setOnBrokerStatus: function (cb) {
              onBrokerStatus = cb
            },
            setOnStrategyStatus: function (cb) {
              onStrategyStatus = cb
            },
            setOnRiskLog: function (cb) {
              onRiskLog = cb
            },
            getRestAddr: function () {
              return rawAddr
            }
          },
          g.obj
        }
        ],
        this.setRestAddr = function (addr) {
          rawAddr = addr,
          restAddr = 'http://' + addr + '/v1/'
        },
        this.setLiveAddr = function (addr) {
          liveAddr = 'ws://' + addr + '/v1/'
        }
      }), gm.provider('gmsdk.bt', function () {
        var restAddr,
        restFeed,
        liveAddr,
        liveFeed;
        this.$get = [
          '$http',
          function ($http) {
            var ws = null,
            onBacktest = null,
            subStrategies = [
            ],
            unsubStrategies = [
            ],
            g = this;
            return g.obj = {
              getBacktest: function (bid, parm) {
                return parm ? $http.get(restAddr + 'backtests/' + bid, {
                  params: {
                    limit: parm.limit,
                    fields: parm.fields
                  }
                })  : void $http.get(restAddr + 'backtests/' + bid)
              },
              getUserBacktest: function (uid, parm) {
                return parm ? $http.get(restAddr + 'backtests_by_user/' + uid, {
                  params: {
                    limit: parm.limit,
                    fields: parm.fields
                  }
                })  : void $http.get(restAddr + 'backtests_by_user/' + uid)
              },
              getStrategyBacktest: function (sid, parm) {
                return parm ? $http.get(restAddr + 'backtests_by_strategy/' + sid, {
                  params: {
                    limit: parm.limit,
                    fields: parm.fields
                  }
                })  : $http.get(restAddr + 'backtests_by_strategy/' + sid)
              },
              deleteBacktests: function (bids) {
                return $http['delete'](restAddr + 'backtests?ids=' + bids)
              },
              deleteBacktest: function (bid) {
                return $http['delete'](restAddr + 'backtests/' + bid)
              },
              deleteUserBacktest: function (uid) {
                return $http['delete'](restAddr + 'backtests_by_user/' + uid)
              },
              deleteStrategyBacktest: function (sid) {
                return $http['delete'](restAddr + 'backtests_by_strategy/' + sid)
              },
              connect: function () {
                null === ws && (ws = new ReconnectingWebSocket(liveAddr + liveFeed + '?format=json'), ws.onopen = function () {
                  g.obj.sub(subStrategies.join(','))
                }, ws.onclose = function () {
                }, ws.onerror = function () {
                }, ws.onmessage = function (evt) {
                  var mt = evt.data.slice(0, 3),
                  msg = JSON.parse(evt.data.slice(4));
                  switch (mt) {
                    case '210':
                      null !== onBacktest && onBacktest(msg)
                  }
                })
              },
              sub: function (strategy) {
                subStrategies.push(strategy),
                null !== ws && 1 == ws.readyState && ws.send('5004,' + JSON.stringify({
                  uris: strategy
                }))
              },
              unsub: function (strategy) {
                unsubStrategies.push(strategy),
                null !== ws && 1 == ws.readyState && ws.send('5006,' + JSON.stringify({
                  uris: strategy
                }))
              },
              setOnBacktest: function (cb) {
                onBacktest = cb
              }
            },
            g.obj
          }
          ],
          this.setRestAddr = function (addr) {
            restAddr || (restAddr = 'http://' + addr + '/v1/')
          },
          this.setRestFeed = function (feed) {
            restFeed = feed
          },
          this.setLiveAddr = function (addr) {
            liveAddr = 'ws://' + addr + '/'
          },
          this.setLiveFeed = function (feed) {
            liveFeed = feed
          }
        }), gm.provider('gmsdk.tmpl', function () {
          var restAddr;
          this.$get = [
            '$http',
            function ($http) {
              var g = this;
              return g.obj = {
                getTemplate: function (args) {
                  return $http({
                    method: 'GET',
                    url: restAddr + 'template',
                    params: args
                  })
                },
                getTemplateZip: function (args) {
                  return $http({
                    method: 'GET',
                    url: restAddr + 'template_zip',
                    params: args,
                    responseType: 'arraybuffer'
                  })
                }
              },
              g.obj
            }
          ],
          this.setRestAddr = function (addr) {
            restAddr = 'http://' + addr + '/'
          }
        })
      }, function () {
        'use strict';
        !function (angular) {
          var pinyin = angular.module('pinyin', [
          ]);
          pinyin.provider('pinyin', [
            function () {
              var strChineseFirstPY = 'YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY',
              oMultiDiff = {
                19969: 'DZ',
                19975: 'WM',
                19988: 'QJ',
                20048: 'YL',
                20056: 'SC',
                20060: 'NM',
                20094: 'QG',
                20127: 'QJ',
                20167: 'QC',
                20193: 'YG',
                20250: 'KH',
                20256: 'ZC',
                20282: 'SC',
                20285: 'QJG',
                20291: 'TD',
                20314: 'YD',
                20340: 'NE',
                20375: 'TD',
                20389: 'YJ',
                20391: 'CZ',
                20415: 'PB',
                20446: 'YS',
                20447: 'SQ',
                20857: 'ZC',
                20911: 'PF',
                20504: 'TC',
                20608: 'KG',
                20854: 'QJ',
                20985: 'AW',
                21032: 'PB',
                21048: 'XQ',
                21049: 'SC',
                21089: 'YS',
                21119: 'JC',
                21242: 'SB',
                21273: 'SC',
                21305: 'YP',
                21306: 'QO',
                21330: 'ZC',
                21333: 'SDC',
                21345: 'QK',
                21378: 'CA',
                21397: 'SC',
                21414: 'XS',
                21442: 'SC',
                21477: 'JG',
                21480: 'TD',
                21484: 'ZS',
                21494: 'YX',
                21505: 'YX',
                21512: 'HG',
                21523: 'XH',
                21537: 'PB',
                21542: 'PF',
                21549: 'KH',
                21571: 'E',
                21574: 'DA',
                21588: 'TD',
                21589: 'O',
                21618: 'ZC',
                21621: 'KHA',
                21632: 'ZJ',
                21654: 'KG',
                21679: 'LKG',
                21683: 'KH',
                21710: 'A',
                21719: 'YH',
                21734: 'WOE',
                21769: 'A',
                21780: 'WN',
                21804: 'XH',
                21834: 'A',
                21899: 'ZD',
                21903: 'RN',
                21908: 'WO',
                21939: 'ZC',
                21956: 'SA',
                21964: 'YA',
                21970: 'TD',
                22003: 'A',
                22031: 'JG',
                22040: 'XS',
                22060: 'ZC',
                22066: 'ZC',
                22079: 'MH',
                22129: 'XJ',
                22179: 'XA',
                22237: 'NJ',
                22244: 'TD',
                22280: 'JQ',
                22300: 'YH',
                22313: 'XW',
                22331: 'YQ',
                22343: 'YJ',
                22351: 'PH',
                22395: 'DC',
                22412: 'TD',
                22484: 'PB',
                22500: 'PB',
                22534: 'ZD',
                22549: 'DH',
                22561: 'PB',
                22612: 'TD',
                22771: 'KQ',
                22831: 'HB',
                22841: 'JG',
                22855: 'QJ',
                22865: 'XQ',
                23013: 'ML',
                23081: 'WM',
                23487: 'SX',
                23558: 'QJ',
                23561: 'YW',
                23586: 'YW',
                23614: 'YW',
                23615: 'SN',
                23631: 'PB',
                23646: 'ZS',
                23663: 'ZT',
                23673: 'YG',
                23762: 'TD',
                23769: 'ZS',
                23780: 'QJ',
                23884: 'QK',
                24055: 'XH',
                24113: 'DC',
                24162: 'ZC',
                24191: 'GA',
                24273: 'QJ',
                24324: 'NL',
                24377: 'TD',
                24378: 'QJ',
                24439: 'PF',
                24554: 'ZS',
                24683: 'TD',
                24694: 'WE',
                24733: 'LK',
                24925: 'TN',
                25094: 'ZG',
                25100: 'XQ',
                25103: 'XH',
                25153: 'PB',
                25170: 'PB',
                25179: 'KG',
                25203: 'PB',
                25240: 'ZS',
                25282: 'FB',
                25303: 'NA',
                25324: 'KG',
                25341: 'ZY',
                25373: 'WZ',
                25375: 'XJ',
                25384: 'A',
                25457: 'A',
                25528: 'SD',
                25530: 'SC',
                25552: 'TD',
                25774: 'ZC',
                25874: 'ZC',
                26044: 'YW',
                26080: 'WM',
                26292: 'PB',
                26333: 'PB',
                26355: 'ZY',
                26366: 'CZ',
                26397: 'ZC',
                26399: 'QJ',
                26415: 'ZS',
                26451: 'SB',
                26526: 'ZC',
                26552: 'JG',
                26561: 'TD',
                26588: 'JG',
                26597: 'CZ',
                26629: 'ZS',
                26638: 'YL',
                26646: 'XQ',
                26653: 'KG',
                26657: 'XJ',
                26727: 'HG',
                26894: 'ZC',
                26937: 'ZS',
                26946: 'ZC',
                26999: 'KJ',
                27099: 'KJ',
                27449: 'YQ',
                27481: 'XS',
                27542: 'ZS',
                27663: 'ZS',
                27748: 'TS',
                27784: 'SC',
                27788: 'ZD',
                27795: 'TD',
                27812: 'O',
                27850: 'PB',
                27852: 'MB',
                27895: 'SL',
                27898: 'PL',
                27973: 'QJ',
                27981: 'KH',
                27986: 'HX',
                27994: 'XJ',
                28044: 'YC',
                28065: 'WG',
                28177: 'SM',
                28267: 'QJ',
                28291: 'KH',
                28337: 'ZQ',
                28463: 'TL',
                28548: 'DC',
                28601: 'TD',
                28689: 'PB',
                28805: 'JG',
                28820: 'QG',
                28846: 'PB',
                28952: 'TD',
                28975: 'ZC',
                29100: 'A',
                29325: 'QJ',
                29575: 'SL',
                29602: 'FB',
                30010: 'TD',
                30044: 'CX',
                30058: 'PF',
                30091: 'YSP',
                30111: 'YN',
                30229: 'XJ',
                30427: 'SC',
                30465: 'SX',
                30631: 'YQ',
                30655: 'QJ',
                30684: 'QJG',
                30707: 'SD',
                30729: 'XH',
                30796: 'LG',
                30917: 'PB',
                31074: 'NM',
                31085: 'JZ',
                31109: 'SC',
                31181: 'ZC',
                31192: 'MLB',
                31293: 'JQ',
                31400: 'YX',
                31584: 'YJ',
                31896: 'ZN',
                31909: 'ZY',
                31995: 'XJ',
                32321: 'PF',
                32327: 'ZY',
                32418: 'HG',
                32420: 'XQ',
                32421: 'HG',
                32438: 'LG',
                32473: 'GJ',
                32488: 'TD',
                32521: 'QJ',
                32527: 'PB',
                32562: 'ZSQ',
                32564: 'JZ',
                32735: 'ZD',
                32793: 'PB',
                33071: 'PF',
                33098: 'XL',
                33100: 'YA',
                33152: 'PB',
                33261: 'CX',
                33324: 'BP',
                33333: 'TD',
                33406: 'YA',
                33426: 'WM',
                33432: 'PB',
                33445: 'JG',
                33486: 'ZN',
                33493: 'TS',
                33507: 'QJ',
                33540: 'QJ',
                33544: 'ZC',
                33564: 'XQ',
                33617: 'YT',
                33632: 'QJ',
                33636: 'XH',
                33637: 'YX',
                33694: 'WG',
                33705: 'PF',
                33728: 'YW',
                33882: 'SR',
                34067: 'WM',
                34074: 'YW',
                34121: 'QJ',
                34255: 'ZC',
                34259: 'XL',
                34425: 'JH',
                34430: 'XH',
                34485: 'KH',
                34503: 'YS',
                34532: 'HG',
                34552: 'XS',
                34558: 'YE',
                34593: 'ZL',
                34660: 'YQ',
                34892: 'XH',
                34928: 'SC',
                34999: 'QJ',
                35048: 'PB',
                35059: 'SC',
                35098: 'ZC',
                35203: 'TQ',
                35265: 'JX',
                35299: 'JX',
                35782: 'SZ',
                35828: 'YS',
                35830: 'E',
                35843: 'TD',
                35895: 'YG',
                35977: 'MH',
                36158: 'JG',
                36228: 'QJ',
                36426: 'XQ',
                36466: 'DC',
                36710: 'JC',
                36711: 'ZYG',
                36767: 'PB',
                36866: 'SK',
                36951: 'YW',
                37034: 'YX',
                37063: 'XH',
                37218: 'ZC',
                37325: 'ZC',
                38063: 'PB',
                38079: 'TD',
                38085: 'QY',
                38107: 'DC',
                38116: 'TD',
                38123: 'YD',
                38224: 'HG',
                38241: 'XTC',
                38271: 'ZC',
                38415: 'YE',
                38426: 'KH',
                38461: 'YD',
                38463: 'AE',
                38466: 'PB',
                38477: 'XJ',
                38518: 'YT',
                38551: 'WK',
                38585: 'ZC',
                38704: 'XS',
                38739: 'LJ',
                38761: 'GJ',
                38808: 'SQ',
                39048: 'JG',
                39049: 'XJ',
                39052: 'HG',
                39076: 'CZ',
                39271: 'XT',
                39534: 'TD',
                39552: 'TD',
                39584: 'PB',
                39647: 'SB',
                39730: 'LG',
                39748: 'TPB',
                40109: 'ZQ',
                40479: 'ND',
                40516: 'HG',
                40536: 'HG',
                40583: 'QJ',
                40765: 'YQ',
                40784: 'QJ',
                40840: 'YK',
                40863: 'QJG'
              },
              checkCh = function (ch) {
                var uni = ch.charCodeAt(0);
                return uni > 40869 || 19968 > uni ? ch : oMultiDiff[uni] ? oMultiDiff[uni] : strChineseFirstPY.charAt(uni - 19968)
              },
              mkRslt = function (arr) {
                for (var arrRslt = [
                  ''
                ], i = 0, len = arr.length; len > i; i++) {
                  var str = arr[i],
                  strlen = str.length;
                  if (1 == strlen) for (var k = 0; k < arrRslt.length; k++) arrRslt[k] += str;
                   else {
                    var tmpArr = arrRslt.slice(0);
                    arrRslt = [
                    ];
                    for (var k$__0 = 0; strlen > k$__0; k$__0++) {
                      for (var tmp = tmpArr.slice(0), j = 0; j < tmp.length; j++) tmp[j] += str.charAt(k$__0);
                      arrRslt = arrRslt.concat(tmp)
                    }
                  }
                }
                return arrRslt
              };
              this.makePy = function (str) {
                if ('string' != typeof str) throw new Error( - 1, '函数makePy需要字符串类型参数!');
                str = str.replace(/\s*/g, ''),
                str = str.replace('Ａ', 'A');
                for (var arrResult = [
                ], i = 0, len = str.length; len > i; i++) {
                  var ch = str.charAt(i);
                  arrResult.push(checkCh(ch))
                }
                return mkRslt(arrResult)
              },
              this.$get = [
                function () {
                  return this
                }
              ]
            }
          ])
        }(angular)
      }, function (module, exports) {
        'use strict';
        Object.defineProperties(exports, {
          'default': {
            get: function () {
              return $__default
            }
          },
          __esModule: {
            value: !0
          }
        });
        var moduleName = 'custom-flot';
        angular.module(moduleName, [
        ]).directive('flotchart', function () {
          return {
            restrict: 'A',
            scope: {
              data: '=data',
              options: '=options'
            },
            link: function (scope, ele) {
              function e(l, t, n) {
                $('<div id="charttooltip" class="flot-tooltip">' + n + '</div>').css({
                  position: 'absolute',
                  top: t - 60,
                  left: l - 65
                }).appendTo('body').show()
              }
              var d = {
                data: scope.data
              },
              plot = $.plot(angular.element(ele), [
                d
              ], scope.options);
              scope.$watchCollection('data', function () {
                d = {
                  data: scope.data
                },
                plot = $.plot(angular.element(ele), [
                  d
                ], scope.options)
              }, !0);
              var previousPoint = null;
              angular.element(ele).bind('plothover', function (event, pos, item) {
                if (item) {
                  if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex,
                    $('#charttooltip').remove();
                    var year,
                    month,
                    day,
                    hour,
                    mins,
                    secs,
                    datetime = new Date(item.datapoint[0]),
                    y = item.datapoint[1].toFixed(2);
                    year = datetime.getFullYear(),
                    month = datetime.getMonth() + 1,
                    day = datetime.getDate(),
                    hour = datetime.getHours(),
                    mins = datetime.getMinutes(),
                    secs = datetime.getSeconds();
                    var time_str = year + '/' + month + '/' + day + '  ' + hour + ':' + mins + ':' + secs;
                    e(item.pageX, item.pageY, time_str + ' <br> ' + y + '万元')
                  }
                } else $('#charttooltip').remove(),
                previousPoint = null
              })
            }
          }
        });
        var $__default = moduleName
      }, function () {
        'use strict';
        var moduleName = 'custom-tip';
        angular.module(moduleName, [
        ]).directive('tip', function () {
          return {
            restrict: 'EA',
            template: '<div class="custom-tip" style="display:inline;position:absolute;white-space: nowrap;width: 565px;margin-top: 11px;margin-left: 0px;z-index: 998;background: rgba(256, 256, 256, 0.8);border: 1.5px solid rgb(0, 138, 138);border-radius: 2px;visibility: visible;"><div ng-include="template"></div><div class="tip-arrow aft" style="content: \'\';position: absolute;bottom: 100%;margin-left: -10px;width: 0;height: 0;border-bottom: 10px solid rgb(0, 138, 138);border-right: 10px solid transparent;border-left: 10px solid transparent;"></div><div class="tip-arrow fwd" style="content: \'\';position: absolute;bottom: 100%;margin-left: -8px;width: 0;height: 0;border-bottom: 8px solid rgba(256, 256, 256, 1);border-right: 8px solid transparent;border-left: 8px solid transparent;"></div>',
            scope: {
              content: '=content',
              position: '=position',
              template: '=template'
            },
            link: function (scope) {
              function changeTip() {
                var tip_width = $('.custom-tip').outerWidth(),
                wd_width = $(window).width(),
                x_offset = scope.position.left;
                if (tip_width + x_offset - 50 > wd_width) {
                  var tip_x_offset = wd_width - 3 * tip_width / 2 - 50,
                  arrow_x_offset = (x_offset - tip_x_offset) / tip_width;
                  $('.tip-arrow').css({
                    left: 100 * arrow_x_offset + '%'
                  }),
                  $('.custom-tip').css({
                    top: scope.position.top,
                    left: tip_x_offset
                  }).show()
                } else $('.tip-arrow').css({
                  left: '50%'
                }),
                $('.custom-tip').css({
                  top: scope.position.top,
                  left: scope.position.left - tip_width / 2
                }).show()
              }
              scope.content = [
              ],
              scope.position = {
                top: - 100,
                left: - 200
              },
              $('.custom-tip').hide(),
              scope.$watch('position', function (n, o) {
                n !== o && changeTip()
              }, !0),
              $(document).mousedown(function (e) {
                var container = $('.custom-tip');
                container.is(e.target) || 0 !== container.has(e.target).length || container.hide()
              })
            }
          }
        })
      }, function () {
        'use strict';
        var moduleName = 'custom-accordion';
        angular.module(moduleName, [
        ]).directive('customAccordion', function () {
          return {
            restrict: 'EA',
            link: function (scope, element) {
              scope.clickingCallback = function () {
                var e = $(element).next('.sub-menu'),
                t = '.sidebar .nav > li.has-sub > .sub-menu';
                $(t).not(e).slideUp(250, function () {
                  $(element).closest('li').removeClass('expand')
                }),
                $(e).slideToggle(250, function () {
                  var l = $(element).closest('li');
                  l.hasClass('expand') ? l.removeClass('expand')  : l.addClass('expand')
                })
              },
              element.bind('click', scope.clickingCallback)
            }
          }
        })
      }, function () {
        'use strict';
        var moduleName = 'custom-slimscroll';
        angular.module(moduleName, [
        ]).directive('customSlimscroll', function () {
          return {
            restrict: 'EA',
            link: function (scope, element) {
              var t = $(element).attr('data-height');
              t = t ? t : $(element).height();
              var n = {
                height: t,
                alwaysVisible: !0
              };
              $(element).slimScroll(n)
            }
          }
        })
      }, function () {
        'use strict';
        angular.module('smart-table').directive('stPaginationScroll', [
          '$timeout',
          function (timeout) {
            return {
              require: 'stTable',
              link: function (scope, element, attr, ctrl) {
                var itemByPage = 20,
                timeThreshold = 400,
                pagination = ctrl.tableState().pagination,
                handler = function () {
                  ctrl.slice(pagination.start + itemByPage, itemByPage)
                },
                promise = null,
                container = angular.element(element.parent());
                container.bind('scroll', function () {
                  var remaining = container[0].scrollHeight - (container[0].clientHeight + container[0].scrollTop);
                  0 === remaining && (null !== promise && timeout.cancel(promise), promise = timeout(function () {
                    handler(),
                    promise = null
                  }, timeThreshold))
                })
              }
            }
          }
        ])
      }, function (module, exports, __webpack_require__) {
        'use strict';
        var $__tradeConst_46_js__,
        SEC_TYPE_MAP = ($__tradeConst_46_js__ = __webpack_require__(45), $__tradeConst_46_js__ && $__tradeConst_46_js__.__esModule && $__tradeConst_46_js__ || {
          'default': $__tradeConst_46_js__
        }).SEC_TYPE_MAP,
        util = angular.module('util', [
        ]);
        util.provider('util.typeahead', function () {
          this.$get = [
            function () {
              var g = this;
              return g.obj = {
                options: {
                  hint: !1
                },
                getDataSets: function (source, filterKey, filterValue) {
                  return Object.keys(SEC_TYPE_MAP).map(function (key) {
                    return {
                      name: 'sec-type-' + key,
                      display: function (s) {
                        return s.sec_name
                      },
                      source: g.obj.getSymbolByAbbr(source, [
                        filterKey,
                        'sec_type'
                      ], [
                        filterValue,
                        key
                      ]),
                      limit: 3,
                      templates: {
                        header: '<div class="tt-group">' + SEC_TYPE_MAP[key] + '</div>',
                        suggestion: function (s) {
                          return '<p>' + s.sec_name + '<br/><small>' + s.exchange + '.' + s.sec_id + '</small></p>'
                        }
                      }
                    }
                  })
                },
                getSymbolSuggestions: function (source, filterKey, filterValue) {
                  return g.obj.getSymbolByAbbr(source, filterKey, filterValue)
                },
                getSymbolByAbbr: function (source, filterKey, filterValue) {
                  return function (input, syncResults) {
                    for (var objs = [
                    ], uniSymbols = [
                    ], LIMIT = filterKey ? 3 : 10, key = null, keys = Object.keys(source), i = 0; i < keys.length && objs.length < LIMIT; i++) key = keys[i],
                    key.includes(input.toUpperCase()) && source[key].forEach(function (symbolObj) {
                      var need = !0;
                      if (filterKey && Array.isArray(filterKey)) for (var i = 0; i < filterKey.length; i++) filterKey[i] && (need = need && symbolObj[filterKey[i]] == '' + filterValue[i]);
                      filterKey && 'String' == typeof filterKey && (need = symbolObj[filterKey] == '' + filterValue),
                      - 1 === uniSymbols.indexOf(symbolObj.symbol) && need && (objs.push(symbolObj), uniSymbols.push(symbolObj.symbol))
                    });
                    return syncResults ? void syncResults(objs)  : objs.splice(0, LIMIT)
                  }
                },
                getFirstMapSymbol: function (source, resolve, fine) {
                  var dataSets = g.obj.getDataSets(source, 'is_active', 1);
                  return function (evt) {
                    if (13 == evt.which) {
                      var symbol = dataSets.map(function (s) {
                        return s.source(evt.target.value, null, null)
                      }).map(function (l) {
                        return l.length > 0 ? l[0] : {
                        }
                      }).filter(function (symObj) {
                        return symObj.hasOwnProperty('sec_type')
                      }).sort(function (a, b) {
                        return a.sec_type > b.sec_type
                      }).shift();
                      return symbol && 'function' == typeof resolve && resolve(symbol),
                      'function' == typeof fine && fine(),
                      symbol || {
                      }
                    }
                  }
                },
                getByExactSymbol: function (source, symbol) {
                  var ret = {
                  };
                  try {
                    ret = source[symbol][0]
                  } catch (e) {
                  }
                  return ret
                }
              },
              g.obj
            }
          ]
        })
      }, function (module, exports, __webpack_require__) {
        'use strict';
        Object.defineProperties(exports, {
          'default': {
            get: function () {
              return $__default
            }
          },
          __esModule: {
            value: !0
          }
        });
        var $__login_46_controller__,
        LoginController = ($__login_46_controller__ = __webpack_require__(44), $__login_46_controller__ && $__login_46_controller__.__esModule && $__login_46_controller__ || {
          'default': $__login_46_controller__
        }) ['default'],
        moduleName = 'auth.controllers';
        angular.module(moduleName, [
        ]).controller('LoginController', LoginController);
        var $__default = moduleName
      }, function (module, exports) {
        'use strict';
        Object.defineProperties(exports, {
          'default': {
            get: function () {
              return $__default
            }
          },
          __esModule: {
            value: !0
          }
        });
        var runBlock = function ($http, $location, $rootScope, $state, sso, md, td, bt, AccountService, StrategyService, BacktestService, MessageService, RiskService, authHelper) {
          $rootScope.$state = $state,
          $rootScope.previousState = '',
          $rootScope.currentState = '',
          $rootScope.redirect = '',
          $rootScope.$stateParams = '',
          $rootScope.loggedIn = !1,
          $rootScope.token = null,
          $rootScope.noPhone = null,
          $rootScope.modalCount = 0;
          var re = new RegExp('[^/]+$', 'i');
          authHelper.getToken() && ($http.defaults.headers.common.Authorization = 'Bearer ' + authHelper.getToken()),
          $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from) {
            $rootScope.previousState = from.name,
            $rootScope.currentState = to.name,
            $location.url().indexOf('/') !== $location.url().lastIndexOf('/') && ($rootScope.$stateParams = re.exec($location.url()) [0]);
            {
              var token = authHelper.getToken(),
              restricted = - 1 === $.inArray(to.name, [
                'home',
                'login',
                '404'
              ]);
              'login' === $rootScope.currentState,
              'home' === $rootScope.currentState
            }
            if (restricted && !token && ($rootScope.redirect = $rootScope.currentState, ev.preventDefault(), $rootScope.loggedIn = !1, $rootScope.$state.go('login')), !$rootScope.previousState) switch ($rootScope.currentState) {
              case 'login':
                $rootScope.loggedIn = !1;
                break;
              case 'home':
                var goto = null,
                id = null;
                if ($location.search().token) {
                  goto = 'login',
                  $rootScope.token = $location.search().token;
                  try {
                    $rootScope.noPhone = 'true' === $location.search().nophone
                  } catch (e) {
                    $rootScope.noPhone = !1
                  }
                }
                if ($location.search().to && (goto = $location.search().to), $location.search().id && (id = $location.search().id), null !== goto && null === id) switch (ev.preventDefault(), goto) {
                  case '404':
                  case 'home':
                  case 'login':
                    $rootScope.$state.go(goto);
                    break;
                  case 'about':
                    $rootScope.$state.go('app.about');
                    break;
                  case 'help':
                    $rootScope.$state.go('app.help');
                    break;
                  case 'backtest':
                  case 'create':
                  case 'account':
                  case 'simtrade':
                  case 'realtrade':
                  case 'analysis':
                    $rootScope.$state.go('app.' + goto + '.list');
                    break;
                  case 'strategy':
                    $rootScope.$state.go('app.create.list');
                    break;
                  default:
                    $rootScope.$state.go('404')
                } else if (null !== goto && null !== id) if (ev.preventDefault(), 'create' === goto && 'base' === id) $rootScope.$state.go('app.create.base');
                 else if ('account' === goto) {
                  var arg = {
                    account_id: id
                  };
                  $rootScope.$state.go('app.account.info', arg)
              } else if ('simtrade' === goto || 'realtrade' === goto || 'analysis' === goto || 'strategy' === goto) {
                var module = 'app.' + goto + '.detail',
                arg$__0 = {
                };
                arg$__0.strategy_id = id,
                $rootScope.$state.go(module, arg$__0)
            } else if ('backtest' === goto) {
              var arg$__1 = {
              };
              arg$__1.backtest_id = id,
              $rootScope.$state.go('app.backtest.detail', arg$__1)
          } else $rootScope.$state.go('404');
          break;
        case '404':
          break;
        default:
          $rootScope.loggedIn = !0,
          md.getSymbols(),
          td.connect('livetd', '*'),
          bt.connect(),
          AccountService.fetchBrokerChannel()
        }
    }),
    $rootScope.$on('event:auth-loginRequired', function () {
      $rootScope.loggedIn = !1,
      $rootScope.$state.go('login')
    }),
    $rootScope.$on('event:auth-loginCancelled', function () {
      $rootScope.loggedIn = !1,
      $rootScope.$state.go('login')
    }),
    $rootScope.$on('event:auth-loginConfirmed', function () {
      if ($rootScope.loggedIn = !0, $rootScope.token = null, md.getSymbols(), td.connect('livetd', '*'), bt.connect(), AccountService.fetchBrokerChannel(), $rootScope.redirect) {
        var tmp = $rootScope.redirect;
        if ($rootScope.redirect = '', $rootScope.$stateParams) {
          var moduleRegEx = new RegExp('(?:[.])(w+)(?:[.])', 'i'),
          module = moduleRegEx.exec(tmp) [1];
          if ('create' === module) $rootScope.$state.go('app.create.base');
           else if ('account' === module) {
            var arg = {
              account_id: $rootScope.$stateParams
            };
            $rootScope.$state.go('app.account.info', arg)
          } else if ('simtrade' === module || 'realtrade' === module || 'analysis' === module) {
            var mod = 'app.' + module + '.detail',
            arg$__2 = {
            };
            arg$__2.strategy_id = $rootScope.$stateParams,
            $rootScope.$state.go(mod, arg$__2)
          } else {
            var arg$__3 = {
            };
            arg$__3.backtest_id = $rootScope.$stateParams,
            $rootScope.$state.go('app.backtest.detail', arg$__3)
          }
        } else $rootScope.$state.go(tmp)
      } else $rootScope.$state.go('app.create.list')
    })
  }; runBlock.$inject = [
    '$http',
    '$location',
    '$rootScope',
    '$state',
    'gmsdk.sso',
    'gmsdk.md',
    'gmsdk.td',
    'gmsdk.bt',
    'AccountService',
    'StrategyService',
    'BacktestService',
    'MessageService',
    'RiskService',
    'auth.helper'
  ]; var $__default = runBlock
},
function (module, exports) {
  'use strict';
  Object.defineProperties(exports, {
    'default': {
      get: function () {
        return $__default
      }
    },
    __esModule: {
      value: !0
    }
  });
  var configBlock = function (sso, md, td, bt, tmpl) {
    var ssoAddr,
    tdAddr,
    addr;
    try {
      ssoAddr = user.quoteAddr,
      tdAddr = user.checkAddr
    } catch (e) {
      ssoAddr = 'sso.wajinzi.me',
      tdAddr = 'localhost:8001'
    } finally {
      addr = 'http://' + ssoAddr + '/v1/service-entries/'
    }
    sso.setSsoAddr(ssoAddr),
    window.sessionStorage.getItem('livemd') ? md.setLiveAddr(window.sessionStorage.getItem('livemd'))  : $.ajax(addr + 'livemd').done(function (data) {
      md.setLiveAddr(data.entries[0]),
      window.sessionStorage.setItem('livemd', data.entries[0])
    }).error(function () {
      md.setLiveAddr('cloud.myquant.cn:7000')
    }),
    window.sessionStorage.getItem('restmd') ? md.setRestAddr(window.sessionStorage.getItem('restmd'))  : $.ajax(addr + 'restmd').done(function (data) {
      md.setRestAddr(data.entries[0]),
      window.sessionStorage.setItem('restmd', data.entries[0])
    }).error(function () {
      md.setRestAddr('cloud.myquant.cn:7000')
    }),
    td.setLiveAddr(tdAddr),
    td.setRestAddr(tdAddr),
    bt.setRestAddr(tdAddr),
    bt.setRestFeed('v1/backtest'),
    bt.setLiveAddr(tdAddr),
    bt.setLiveFeed('v1/backtests_ws'),
    window.sessionStorage.getItem('resttmpl') ? tmpl.setRestAddr(window.sessionStorage.getItem('resttmpl'))  : $.ajax(addr + 'strategy_template').done(function (data) {
      tmpl.setRestAddr(data.entries[0]),
      window.sessionStorage.setItem('resttmpl', data.entries[0])
    }).error(function () {
      tmpl.setRestAddr('cloud.myquant.cn:8004')
    })
  };
  configBlock.$inject = [
    'gmsdk.ssoProvider',
    'gmsdk.mdProvider',
    'gmsdk.tdProvider',
    'gmsdk.btProvider',
    'gmsdk.tmplProvider'
  ];
  var $__default = configBlock
},
function (module, exports) {
  'use strict';
  function routerConfig($locationProvider, $urlRouterProvider, $stateProvider) {
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.path();
      '/' !== path && '/' === path.slice( - 1) && $location.replace().path(path.slice(0, - 1))
    }),
    $locationProvider.html5Mode(!0),
    $stateProvider.state('app', {
      'abstract': !0,
      url: '',
      views: {
        header: {
          templateUrl: 'components/navbar/navbar.html',
          Controller: 'NavbarCtrl'
        },
        sidebar: {
          templateUrl: 'components/sidebar/sidebar.html',
          Controller: 'SidebarCtrl'
        }
      }
    }).state('home', {
      url: '/',
      views: {
        content: {
          templateUrl: 'app/auth/login.html',
          controller: 'LoginController'
        }
      }
    }).state('login', {
      url: '/login',
      views: {
        content: {
          templateUrl: 'app/auth/login.html',
          controller: 'LoginController'
        }
      }
    }).state('404', {
      url: '/404',
      views: {
        content: {
          templateUrl: 'app/error/404.html'
        }
      }
    }).state('app.create', {
      'abstract': !0,
      url: '/create'
    }).state('app.create.list', {
      url: '',
      views: {
        'content@': {
          templateUrl: 'app/create/template.list.html',
          Controller: 'TmplListCrtl'
        }
      }
    }).state('app.create.base', {
      url: '/base',
      views: {
        'content@': {
          templateUrl: 'app/create/create.base.html',
          Controller: 'CreateBaseCtrl'
        }
      }
    }).state('app.strategy', {
      'abstract': !0,
      url: '/strategy'
    }).state('app.strategy.list', {
      url: '',
      views: {
        'content@': {
          templateUrl: 'app/strategy/strategy.list.html',
          Controller: 'StrategyListCtrl'
        }
      }
    }).state('app.strategy.detail', {
      url: '/:strategy_id',
      views: {
        'content@': {
          templateUrl: 'app/strategy/strategy.detail.html',
          Controller: 'StrategyDetailCtrl'
        },
        'sidebar_right@': {
          templateUrl: 'app/strategy/strategy.sidebar.html',
          Controller: 'StrategySidebarCtrl'
        }
      }
    }).state('app.simtrade', {
      'abstract': !0,
      url: '/simtrade'
    }).state('app.simtrade.list', {
      url: '',
      views: {
        'content@': {
          templateUrl: 'app/strategy/strategy.list.html',
          Controller: 'StrategyListCtrl'
        }
      }
    }).state('app.simtrade.detail', {
      url: '/:strategy_id',
      views: {
        'content@': {
          templateUrl: 'app/strategy/strategy.detail.html',
          Controller: 'StrategyDetailCtrl'
        },
        'sidebar_right@': {
          templateUrl: 'app/strategy/strategy.sidebar.html',
          Controller: 'StrategySidebarCtrl'
        }
      }
    }).state('app.realtrade', {
      'abstract': !0,
      url: '/realtrade'
    }).state('app.realtrade.list', {
      url: '',
      views: {
        'content@': {
          templateUrl: 'app/strategy/strategy.list.html',
          Controller: 'StrategyListCtrl'
        }
      }
    }).state('app.realtrade.detail', {
      url: '/:strategy_id',
      views: {
        'content@': {
          templateUrl: 'app/strategy/strategy.detail.html',
          Controller: 'StrategyDetailCtrl'
        },
        'sidebar_right@': {
          templateUrl: 'app/strategy/strategy.sidebar.html',
          Controller: 'StrategySidebarCtrl'
        }
      }
    }).state('app.backtest', {
      'abstract': !0,
      url: '/backtest'
    }).state('app.backtest.list', {
      url: '',
      views: {
        'content@': {
          templateUrl: 'app/backtest/backtest.list.html',
          Controller: 'BacktestListCtrl'
        }
      }
    }).state('app.backtest.detail', {
      url: '/:backtest_id',
      views: {
        'content@': {
          templateUrl: 'app/backtest/backtest.detail.html',
          controller: 'BacktestDetailCtrl'
        }
      }
    }).state('app.account', {
      'abstract': !0,
      url: '/account'
    }).state('app.account.list', {
      url: '',
      views: {
        'content@': {
          templateUrl: 'app/account/account.list.html',
          Controller: 'AccListCtrl'
        }
      }
    }).state('app.account.info', {
      url: '/:account_id',
      views: {
        'content@': {
          templateUrl: 'app/account/account.info.html',
          Controller: 'AccInfoCtrl'
        }
      }
    }).state('app.about', {
      url: '/about',
      views: {
        'content@': {
          templateUrl: 'app/about/about.html'
        }
      }
    }).state('app.help', {
      url: '/help',
      views: {
        'content@': {
          templateUrl: 'app/about/help.html'
        }
      }
    }).state('app.analysis', {
      'abstract': !0,
      url: '/analysis'
    }).state('app.analysis.list', {
      url: '',
      views: {
        'content@': {
          templateUrl: 'app/analysis/analysis.list.html',
          Controller: 'AnalysisListCtrl'
        }
      }
    }).state('app.analysis.detail', {
      url: '/:strategy_id',
      views: {
        'content@': {
          templateUrl: 'app/analysis/analysis.list.html',
          Controller: 'AnalysisListCtrl'
        }
      }
    })
  }
  Object.defineProperties(exports, {
    'default': {
      get: function () {
        return $__default
      }
    },
    __esModule: {
      value: !0
    }
  });
  var $__default = routerConfig
},
function (module, exports) {
  'use strict';
  Object.defineProperties(exports, {
    'default': {
      get: function () {
        return $__default
      }
    },
    __esModule: {
      value: !0
    }
  });
  var AboutCtrl = function ($scope, $modalInstance, appInfo) {
    this.appInfo = appInfo
  };
  $traceurRuntime.createClass(AboutCtrl, {
  }, {
  }),
  AboutCtrl.$inject = [
    '$scope',
    '$modalInstance',
    'appInfo'
  ];
  var $__default = AboutCtrl
},
function (module, exports) {
  'use strict';
  Object.defineProperties(exports, {
    'default': {
      get: function () {
        return $__default
      }
    },
    __esModule: {
      value: !0
    }
  });
  var color = {
    blue: '#348fe2',
    blueLight: '#5da5e8',
    blueDark: '#1993E4',
    aqua: '#49b6d6',
    aquaLight: '#6dc5de',
    aquaDark: '#3a92ab',
    green: '#00acac',
    greenLight: '#1EB414',
    greenDark: '#008a8a',
    orange: '#f59c1a',
    orangeLight: '#f7b048',
    orangeDark: '#c47d15',
    dark: '#2d353c',
    grey: '#b6c2c9',
    purple: '#727cb6',
    purpleLight: '#8e96c5',
    purpleDark: '#5b6392',
    red: '#ff5b57',
    redDark: '#AE0000',
    golden: '#FFD700'
  },
  $__default = color
},
function (module, exports) {
  'use strict';
  Object.defineProperties(exports, {
    'default': {
      get: function () {
        return $__default
      }
    },
    __esModule: {
      value: !0
    }
  });
  var highcharts_i18n_zh_cn = function () {
    return {
      lang: {
        thousandsSep: ',',
        numericSymbols: [
          ' 千',
          ' 百万'
        ],
        rangeSelectorZoom: '',
        rangeSelectorFrom: '从',
        rangeSelectorTo: '到',
        weekdays: [
          '周日',
          '周一',
          '周二',
          '周三',
          '周四',
          '周五',
          '周六'
        ],
        shortMonths: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ],
        months: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ]
      },
      today_buttons: [
        {
          type: 'minute',
          count: 15,
          text: '15分钟'
        },
        {
          type: 'minute',
          count: 30,
          text: '30分钟'
        },
        {
          type: 'minute',
          count: 60,
          text: '1小时'
        },
        {
          type: 'minute',
          count: 120,
          text: '2小时'
        },
        {
          type: 'all',
          text: '全部'
        }
      ],
      history_buttons: [
        {
          type: 'week',
          count: 1,
          text: '1周'
        },
        {
          type: 'month',
          count: 1,
          text: '1月'
        },
        {
          type: 'all',
          text: '全部'
        }
      ],
      all_buttons: [
        {
          type: 'hour',
          count: 1,
          text: '1小时'
        },
        {
          type: 'day',
          count: 1,
          text: '1天'
        },
        {
          type: 'week',
          count: 1,
          text: '1周'
        },
        {
          type: 'month',
          count: 1,
          text: '1个月'
        },
        {
          type: 'month',
          count: 3,
          text: '3个月'
        },
        {
          type: 'month',
          count: 6,
          text: '6个月'
        },
        {
          type: 'year',
          count: 1,
          text: '1年'
        },
        {
          type: 'all',
          text: '全部'
        }
      ]
    }
  },
  $__default = highcharts_i18n_zh_cn
},
function () {
  'use strict';
  angular.module('isteven-multi-select', [
    'ng'
  ]).directive('istevenMultiSelect', [
    '$sce',
    '$timeout',
    '$templateCache',
    function ($sce, $timeout) {
      return {
        restrict: 'AE',
        scope: {
          inputModel: '=',
          outputModel: '=',
          isDisabled: '=',
          onClear: '&',
          onClose: '&',
          onSearchChange: '&',
          onItemClick: '&',
          onOpen: '&',
          onReset: '&',
          onSelectAll: '&',
          onSelectNone: '&',
          translation: '='
        },
        templateUrl: 'isteven-multi-select.htm',
        link: function ($scope, element, attrs) {
          function genRandomString(length) {
            for (var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', temp = '', i = 0; length > i; i++) temp += possible.charAt(Math.floor(Math.random() * possible.length));
            return temp
          }
          $scope.backUp = [
          ],
          $scope.varButtonLabel = '',
          $scope.spacingProperty = '',
          $scope.indexProperty = '',
          $scope.orientationH = !1,
          $scope.orientationV = !0,
          $scope.filteredModel = [
          ],
          $scope.inputLabel = {
            labelFilter: ''
          },
          $scope.tabIndex = 0,
          $scope.lang = {
          },
          $scope.helperStatus = {
            all: !0,
            none: !0,
            reset: !0,
            filter: !0
          };
          var prevTabIndex = 0,
          helperItems = [
          ],
          helperItemsLength = 0,
          checkBoxLayer = '',
          formElements = [
          ],
          vMinSearchLength = 0,
          clickedItem = null;
          $scope.clearClicked = function (e) {
            $scope.inputLabel.labelFilter = '',
            $scope.updateFilter(),
            $scope.select('clear', e)
          },
          $scope.numberToArray = function (num) {
            return new Array(num)
          },
          $scope.searchChanged = function () {
            return $scope.inputLabel.labelFilter.length < vMinSearchLength && $scope.inputLabel.labelFilter.length > 0 ? !1 : void $scope.updateFilter()
          },
          $scope.updateFilter = function () {
            $scope.filteredModel = [
            ];
            var i = 0;
            if ('undefined' == typeof $scope.inputModel) return !1;
            for (i = $scope.inputModel.length - 1; i >= 0; i--) {
              'undefined' != typeof $scope.inputModel[i][attrs.groupProperty] && $scope.inputModel[i][attrs.groupProperty] === !1 && $scope.filteredModel.push($scope.inputModel[i]);
              var gotData = !1;
              if ('undefined' == typeof $scope.inputModel[i][attrs.groupProperty]) {
                if ('undefined' != typeof attrs.searchProperty && '' !== attrs.searchProperty) {
                  for (var key in $scope.inputModel[i]) if ('boolean' != typeof $scope.inputModel[i][key] && String($scope.inputModel[i][key]).toUpperCase().indexOf($scope.inputLabel.labelFilter.toUpperCase()) >= 0 && attrs.searchProperty.indexOf(key) > - 1) {
                    gotData = !0;
                    break
                  }
                } else for (var key in $scope.inputModel[i]) if ('boolean' != typeof $scope.inputModel[i][key] && String($scope.inputModel[i][key]).toUpperCase().indexOf($scope.inputLabel.labelFilter.toUpperCase()) >= 0) {
                  gotData = !0;
                  break
                }
                gotData === !0 && $scope.filteredModel.push($scope.inputModel[i])
              }
              'undefined' != typeof $scope.inputModel[i][attrs.groupProperty] && $scope.inputModel[i][attrs.groupProperty] === !0 && ('undefined' != typeof $scope.filteredModel[$scope.filteredModel.length - 1][attrs.groupProperty] && $scope.filteredModel[$scope.filteredModel.length - 1][attrs.groupProperty] === !1 ? $scope.filteredModel.pop()  : $scope.filteredModel.push($scope.inputModel[i]))
            }
            $scope.filteredModel.reverse(),
            $timeout(function () {
              if ($scope.getFormElements(), $scope.inputLabel.labelFilter.length > vMinSearchLength) {
                var filterObj = [
                ];
                angular.forEach($scope.filteredModel, function (value) {
                  if ('undefined' != typeof value && 'undefined' == typeof value[attrs.groupProperty]) {
                    var tempObj = angular.copy(value),
                    index = filterObj.push(tempObj);
                    delete filterObj[index - 1][$scope.indexProperty],
                    delete filterObj[index - 1][$scope.spacingProperty]
                  }
                }),
                $scope.onSearchChange({
                  data: {
                    keyword: $scope.inputLabel.labelFilter,
                    result: filterObj
                  }
                })
              }
            }, 0)
          },
          $scope.getFormElements = function () {
            formElements = [
            ];
            var selectButtons = [
            ],
            inputField = [
            ],
            checkboxes = [
            ],
            clearButton = [
            ];
            $scope.helperStatus.all || $scope.helperStatus.none || $scope.helperStatus.reset ? (selectButtons = element.children().children().next().children().children() [0].getElementsByTagName('button'), $scope.helperStatus.filter && (inputField = element.children().children().next().children().children().next() [0].getElementsByTagName('input'), clearButton = element.children().children().next().children().children().next() [0].getElementsByTagName('button')))  : $scope.helperStatus.filter && (inputField = element.children().children().next().children().children() [0].getElementsByTagName('input'), clearButton = element.children().children().next().children().children() [0].getElementsByTagName('button')),
            checkboxes = $scope.helperStatus.all || $scope.helperStatus.none || $scope.helperStatus.reset || $scope.helperStatus.filter ? element.children().children().next().children().next() [0].getElementsByTagName('input')  : element.children().children().next() [0].getElementsByTagName('input');
            for (var i = 0; i < selectButtons.length; i++) formElements.push(selectButtons[i]);
            for (var i = 0; i < inputField.length; i++) formElements.push(inputField[i]);
            for (var i = 0; i < clearButton.length; i++) formElements.push(clearButton[i]);
            for (var i = 0; i < checkboxes.length; i++) formElements.push(checkboxes[i])
          },
          $scope.isGroupMarker = function (item, type) {
            return 'undefined' != typeof item[attrs.groupProperty] && item[attrs.groupProperty] === type ? !0 : !1
          },
          $scope.removeGroupEndMarker = function (item) {
            return 'undefined' != typeof item[attrs.groupProperty] && item[attrs.groupProperty] === !1 ? !1 : !0
          },
          $scope.syncItems = function (item, e, ng_repeat_index) {
            if (e.preventDefault(), e.stopPropagation(), 'undefined' != typeof attrs.disableProperty && item[attrs.disableProperty] === !0) return !1;
            if ('undefined' != typeof attrs.isDisabled && $scope.isDisabled === !0) return !1;
            if ('undefined' != typeof item[attrs.groupProperty] && item[attrs.groupProperty] === !1) return !1;
            var index = $scope.filteredModel.indexOf(item);
            if ('undefined' != typeof item[attrs.groupProperty] && item[attrs.groupProperty] === !0) {
              if ('undefined' != typeof attrs.selectionMode && 'SINGLE' === attrs.selectionMode.toUpperCase()) return !1;
              var i,
              j,
              startIndex = 0,
              endIndex = $scope.filteredModel.length - 1,
              tempArr = [
              ],
              nestLevel = 0;
              for (i = index; i < $scope.filteredModel.length && !(0 === nestLevel && i > index); i++) if ('undefined' != typeof $scope.filteredModel[i][attrs.groupProperty] && $scope.filteredModel[i][attrs.groupProperty] === !0) 0 === tempArr.length && (startIndex = i + 1),
              nestLevel += 1;
               else if ('undefined' != typeof $scope.filteredModel[i][attrs.groupProperty] && $scope.filteredModel[i][attrs.groupProperty] === !1) {
                if (nestLevel -= 1, tempArr.length > 0 && 0 === nestLevel) {
                  var allTicked = !0;
                  for (endIndex = i, j = 0; j < tempArr.length; j++) if ('undefined' != typeof tempArr[j][$scope.tickProperty] && tempArr[j][$scope.tickProperty] === !1) {
                    allTicked = !1;
                    break
                  }
                  if (allTicked === !0) for (j = startIndex; endIndex >= j; j++) 'undefined' == typeof $scope.filteredModel[j][attrs.groupProperty] && ('undefined' == typeof attrs.disableProperty ? ($scope.filteredModel[j][$scope.tickProperty] = !1, inputModelIndex = $scope.filteredModel[j][$scope.indexProperty], $scope.inputModel[inputModelIndex][$scope.tickProperty] = !1)  : $scope.filteredModel[j][attrs.disableProperty] !== !0 && ($scope.filteredModel[j][$scope.tickProperty] = !1, inputModelIndex = $scope.filteredModel[j][$scope.indexProperty], $scope.inputModel[inputModelIndex][$scope.tickProperty] = !1));
                   else for (j = startIndex; endIndex >= j; j++) 'undefined' == typeof $scope.filteredModel[j][attrs.groupProperty] && ('undefined' == typeof attrs.disableProperty ? ($scope.filteredModel[j][$scope.tickProperty] = !0, inputModelIndex = $scope.filteredModel[j][$scope.indexProperty], $scope.inputModel[inputModelIndex][$scope.tickProperty] = !0)  : $scope.filteredModel[j][attrs.disableProperty] !== !0 && ($scope.filteredModel[j][$scope.tickProperty] = !0, inputModelIndex = $scope.filteredModel[j][$scope.indexProperty], $scope.inputModel[inputModelIndex][$scope.tickProperty] = !0))
                }
              } else tempArr.push($scope.filteredModel[i])
            } else {
              if ('undefined' != typeof attrs.selectionMode && 'SINGLE' === attrs.selectionMode.toUpperCase()) {
                for (i = 0; i < $scope.filteredModel.length; i++) $scope.filteredModel[i][$scope.tickProperty] = !1;
                for (i = 0; i < $scope.inputModel.length; i++) $scope.inputModel[i][$scope.tickProperty] = !1;
                $scope.filteredModel[index][$scope.tickProperty] = !0
              } else $scope.filteredModel[index][$scope.tickProperty] = !$scope.filteredModel[index][$scope.tickProperty];
              var inputModelIndex = $scope.filteredModel[index][$scope.indexProperty];
              $scope.inputModel[inputModelIndex][$scope.tickProperty] = $scope.filteredModel[index][$scope.tickProperty]
            }
            clickedItem = angular.copy(item),
            null !== clickedItem && $timeout(function () {
              delete clickedItem[$scope.indexProperty],
              delete clickedItem[$scope.spacingProperty],
              $scope.onItemClick({
                data: clickedItem
              }),
              clickedItem = null
            }, 0),
            $scope.refreshOutputModel(),
            $scope.refreshButton(),
            prevTabIndex = $scope.tabIndex,
            $scope.tabIndex = ng_repeat_index + helperItemsLength,
            e.target.focus(),
            $scope.removeFocusStyle(prevTabIndex),
            $scope.setFocusStyle($scope.tabIndex),
            'undefined' != typeof attrs.selectionMode && 'SINGLE' === attrs.selectionMode.toUpperCase() && $scope.toggleCheckboxes(e)
          },
          $scope.refreshOutputModel = function () {
            $scope.outputModel = [
            ];
            var outputProps = [
            ],
            tempObj = {
            };
            'undefined' != typeof attrs.outputProperties ? (outputProps = attrs.outputProperties.split(' '), angular.forEach($scope.inputModel, function (value) {
              if ('undefined' != typeof value && 'undefined' == typeof value[attrs.groupProperty] && value[$scope.tickProperty] === !0) {
                tempObj = {
                },
                angular.forEach(value, function (value1, key1) {
                  outputProps.indexOf(key1) > - 1 && (tempObj[key1] = value1)
                });
                var index = $scope.outputModel.push(tempObj);
                delete $scope.outputModel[index - 1][$scope.indexProperty],
                delete $scope.outputModel[index - 1][$scope.spacingProperty]
              }
            }))  : angular.forEach($scope.inputModel, function (value) {
              if ('undefined' != typeof value && 'undefined' == typeof value[attrs.groupProperty] && value[$scope.tickProperty] === !0) {
                var temp = angular.copy(value),
                index = $scope.outputModel.push(temp);
                delete $scope.outputModel[index - 1][$scope.indexProperty],
                delete $scope.outputModel[index - 1][$scope.spacingProperty]
              }
            })
          },
          $scope.refreshButton = function () {
            $scope.varButtonLabel = '';
            var ctr = 0;
            if (0 === $scope.outputModel.length) $scope.varButtonLabel = $scope.lang.nothingSelected;
             else {
              var tempMaxLabels = $scope.outputModel.length;
              'undefined' != typeof attrs.maxLabels && '' !== attrs.maxLabels && (tempMaxLabels = attrs.maxLabels),
              $scope.more = $scope.outputModel.length > tempMaxLabels ? !0 : !1,
              angular.forEach($scope.inputModel, function (value) {
                'undefined' != typeof value && value[attrs.tickProperty] === !0 && (tempMaxLabels > ctr && ($scope.varButtonLabel += ($scope.varButtonLabel.length > 0 ? '</div>, <div class="buttonLabel">' : '<div class="buttonLabel">') + $scope.writeLabel(value, 'buttonLabel')), ctr++)
              }),
              $scope.more === !0 && (tempMaxLabels > 0 && ($scope.varButtonLabel += ', ... '), $scope.varButtonLabel += '(' + $scope.outputModel.length + ')')
            }
            $scope.varButtonLabel = $sce.trustAsHtml($scope.varButtonLabel + '<span class="caret"></span>')
          },
          $scope.itemIsDisabled = function (item) {
            return 'undefined' != typeof attrs.disableProperty && item[attrs.disableProperty] === !0 ? !0 : $scope.isDisabled === !0 ? !0 : !1
          },
          $scope.writeLabel = function (item, type) {
            var temp = attrs[type].split(' '),
            label = '';
            return angular.forEach(temp, function (value) {
              item[value] && (label += '&nbsp;' + value.split('.').reduce(function (prev, current) {
                return prev[current]
              }, item))
            }),
            'BUTTONLABEL' === type.toUpperCase() ? label : $sce.trustAsHtml(label)
          },
          $scope.toggleCheckboxes = function () {
            var clickedEl = element.children() [0];
            if (angular.element(document).off('click', $scope.externalClickListener), angular.element(document).off('keydown', $scope.keyboardListener), angular.element(checkBoxLayer).hasClass('show')) angular.element(checkBoxLayer).removeClass('show'),
            angular.element(clickedEl).removeClass('buttonClicked'),
            angular.element(document).off('click', $scope.externalClickListener),
            angular.element(document).off('keydown', $scope.keyboardListener),
            $scope.removeFocusStyle($scope.tabIndex),
            'undefined' != typeof formElements[$scope.tabIndex] && formElements[$scope.tabIndex].blur(),
            $timeout(function () {
              $scope.onClose()
            }, 0),
            element.children().children() [0].focus();
             else {
              $scope.inputLabel.labelFilter = '',
              $scope.updateFilter(),
              helperItems = [
              ],
              helperItemsLength = 0,
              angular.element(checkBoxLayer).addClass('show'),
              angular.element(clickedEl).addClass('buttonClicked'),
              angular.element(document).on('click', $scope.externalClickListener),
              angular.element(document).on('keydown', $scope.keyboardListener),
              $scope.getFormElements(),
              $scope.tabIndex = 0;
              var helperContainer = angular.element(element[0].querySelector('.helperContainer')) [0];
              if ('undefined' != typeof helperContainer) {
                for (var i = 0; i < helperContainer.getElementsByTagName('BUTTON').length; i++) helperItems[i] = helperContainer.getElementsByTagName('BUTTON') [i];
                helperItemsLength = helperItems.length + helperContainer.getElementsByTagName('INPUT').length
              }
              element[0].querySelector('.inputFilter') && (element[0].querySelector('.inputFilter').focus(), $scope.tabIndex = $scope.tabIndex + helperItemsLength - 2, angular.element(element).children() [0].blur()),
              $scope.onOpen()
            }
          },
          $scope.externalClickListener = function (e) {
            for (var targetsArr = element.find(e.target.tagName), i = 0; i < targetsArr.length; i++) if (e.target == targetsArr[i]) return;
            angular.element(checkBoxLayer.previousSibling).removeClass('buttonClicked'),
            angular.element(checkBoxLayer).removeClass('show'),
            angular.element(document).off('click', $scope.externalClickListener),
            angular.element(document).off('keydown', $scope.keyboardListener),
            $timeout(function () {
              $scope.onClose()
            }, 0),
            element.children().children() [0].focus()
          },
          $scope.select = function (type, e) {
            var helperIndex = helperItems.indexOf(e.target);
            switch ($scope.tabIndex = helperIndex, type.toUpperCase()) {
              case 'ALL':
                angular.forEach($scope.filteredModel, function (value) {
                  'undefined' != typeof value && value[attrs.disableProperty] !== !0 && 'undefined' == typeof value[attrs.groupProperty] && (value[$scope.tickProperty] = !0)
                }),
                $scope.refreshOutputModel(),
                $scope.refreshButton(),
                $scope.onSelectAll();
                break;
              case 'NONE':
                angular.forEach($scope.filteredModel, function (value) {
                  'undefined' != typeof value && value[attrs.disableProperty] !== !0 && 'undefined' == typeof value[attrs.groupProperty] && (value[$scope.tickProperty] = !1)
                }),
                $scope.refreshOutputModel(),
                $scope.refreshButton(),
                $scope.onSelectNone();
                break;
              case 'RESET':
                angular.forEach($scope.filteredModel, function (value) {
                  if ('undefined' == typeof value[attrs.groupProperty] && 'undefined' != typeof value && value[attrs.disableProperty] !== !0) {
                    var temp = value[$scope.indexProperty];
                    value[$scope.tickProperty] = $scope.backUp[temp][$scope.tickProperty]
                  }
                }),
                $scope.refreshOutputModel(),
                $scope.refreshButton(),
                $scope.onReset();
                break;
              case 'CLEAR':
                $scope.tabIndex = $scope.tabIndex + 1,
                $scope.onClear();
                break;
              case 'FILTER':
                $scope.tabIndex = helperItems.length - 1
            }
          },
          $scope.prepareGrouping = function () {
            var spacing = 0;
            angular.forEach($scope.filteredModel, function (value) {
              value[$scope.spacingProperty] = spacing,
              value[attrs.groupProperty] === !0 ? spacing += 2 : value[attrs.groupProperty] === !1 && (spacing -= 2)
            })
          },
          $scope.prepareIndex = function () {
            var ctr = 0;
            angular.forEach($scope.filteredModel, function (value) {
              value[$scope.indexProperty] = ctr,
              ctr++
            })
          },
          $scope.keyboardListener = function (e) {
            var key = e.keyCode ? e.keyCode : e.which,
            isNavigationKey = !1;
            if (27 === key) e.preventDefault(),
            e.stopPropagation(),
            $scope.toggleCheckboxes(e);
             else if (40 === key || 39 === key || !e.shiftKey && 9 == key) for (isNavigationKey = !0, prevTabIndex = $scope.tabIndex, $scope.tabIndex++, $scope.tabIndex > formElements.length - 1 && ($scope.tabIndex = 0, prevTabIndex = formElements.length - 1); formElements[$scope.tabIndex].disabled === !0 && ($scope.tabIndex++, $scope.tabIndex > formElements.length - 1 && ($scope.tabIndex = 0), $scope.tabIndex !== prevTabIndex); );
             else if (38 === key || 37 === key || e.shiftKey && 9 == key) for (isNavigationKey = !0, prevTabIndex = $scope.tabIndex, $scope.tabIndex--, $scope.tabIndex < 0 && ($scope.tabIndex = formElements.length - 1, prevTabIndex = 0); formElements[$scope.tabIndex].disabled === !0 && ($scope.tabIndex--, $scope.tabIndex !== prevTabIndex); ) $scope.tabIndex < 0 && ($scope.tabIndex = formElements.length - 1);
            if (isNavigationKey === !0) {
              e.preventDefault(),
              formElements[$scope.tabIndex].focus();
              var actEl = document.activeElement;
              'CHECKBOX' === actEl.type.toUpperCase() ? ($scope.setFocusStyle($scope.tabIndex), $scope.removeFocusStyle(prevTabIndex))  : ($scope.removeFocusStyle(prevTabIndex), $scope.removeFocusStyle(helperItemsLength), $scope.removeFocusStyle(formElements.length - 1))
            }
            isNavigationKey = !1
          },
          $scope.setFocusStyle = function (tabIndex) {
            angular.element(formElements[tabIndex]).parent().parent().parent().addClass('multiSelectFocus')
          },
          $scope.removeFocusStyle = function (tabIndex) {
            angular.element(formElements[tabIndex]).parent().parent().parent().removeClass('multiSelectFocus')
          },
          $scope.groupProperty = attrs.groupProperty,
          $scope.tickProperty = attrs.tickProperty,
          $scope.directiveId = attrs.directiveId;
          var tempStr = genRandomString(5);
          if ($scope.indexProperty = 'idx_' + tempStr, $scope.spacingProperty = 'spc_' + tempStr, 'undefined' != typeof attrs.orientation && ('HORIZONTAL' === attrs.orientation.toUpperCase() ? ($scope.orientationH = !0, $scope.orientationV = !1)  : ($scope.orientationH = !1, $scope.orientationV = !0)), checkBoxLayer = element.children().children().next() [0], 'undefined' != typeof attrs.maxHeight) {
            var layer = element.children().children().children() [0];
            angular.element(layer).attr('style', 'height:' + attrs.maxHeight + '; overflow-y:scroll;')
          }
          for (var property in $scope.helperStatus) $scope.helperStatus.hasOwnProperty(property) && 'undefined' != typeof attrs.helperElements && - 1 === attrs.helperElements.toUpperCase().indexOf(property.toUpperCase()) && ($scope.helperStatus[property] = !1);
          'undefined' != typeof attrs.selectionMode && 'SINGLE' === attrs.selectionMode.toUpperCase() && ($scope.helperStatus.all = !1, $scope.helperStatus.none = !1),
          $scope.icon = {
          },
          $scope.icon.selectAll = '&#10003;',
          $scope.icon.selectNone = '&times;',
          $scope.icon.reset = '&#8630;',
          $scope.icon.tickMark = '&#10003;',
          'undefined' != typeof attrs.translation ? ($scope.lang.selectAll = $sce.trustAsHtml($scope.icon.selectAll + '&nbsp;&nbsp;' + $scope.translation.selectAll), $scope.lang.selectNone = $sce.trustAsHtml($scope.icon.selectNone + '&nbsp;&nbsp;' + $scope.translation.selectNone), $scope.lang.reset = $sce.trustAsHtml($scope.icon.reset + '&nbsp;&nbsp;' + $scope.translation.reset), $scope.lang.search = $scope.translation.search, $scope.lang.nothingSelected = $sce.trustAsHtml($scope.translation.nothingSelected))  : ($scope.lang.selectAll = $sce.trustAsHtml($scope.icon.selectAll + '&nbsp;&nbsp;Select All'), $scope.lang.selectNone = $sce.trustAsHtml($scope.icon.selectNone + '&nbsp;&nbsp;Select None'), $scope.lang.reset = $sce.trustAsHtml($scope.icon.reset + '&nbsp;&nbsp;Reset'), $scope.lang.search = 'Search...', $scope.lang.nothingSelected = 'None Selected'),
          $scope.icon.tickMark = $sce.trustAsHtml($scope.icon.tickMark),
          'undefined' != typeof attrs.MinSearchLength && parseInt(attrs.MinSearchLength) > 0 && (vMinSearchLength = Math.floor(parseInt(attrs.MinSearchLength))),
          $scope.$watch('inputModel', function (newVal) {
            newVal && ($scope.refreshOutputModel(), $scope.refreshButton())
          }, !0),
          $scope.$watch('inputModel', function (newVal) {
            newVal && ($scope.backUp = angular.copy($scope.inputModel), $scope.updateFilter(), $scope.prepareGrouping(), $scope.prepareIndex(), $scope.refreshOutputModel(), $scope.refreshButton())
          }),
          $scope.$watch('isDisabled', function (newVal) {
            $scope.isDisabled = newVal
          });
          var onTouchStart = function () {
            $scope.$apply(function () {
              $scope.scrolled = !1
            })
          };
          angular.element(document).bind('touchstart', onTouchStart);
          var onTouchMove = function () {
            $scope.$apply(function () {
              $scope.scrolled = !0
            })
          };
          angular.element(document).bind('touchmove', onTouchMove),
          $scope.$on('$destroy', function () {
            angular.element(document).unbind('touchstart', onTouchStart),
            angular.element(document).unbind('touchmove', onTouchMove)
          })
        }
      }
    }
    ]).run(['$templateCache',
    function ($templateCache) {
      var template = '<span class="multiSelect inlineBlock"><button id="{{directiveId}}" type="button"ng-click="toggleCheckboxes( $event ); refreshSelectedItems(); refreshButton(); prepareGrouping; prepareIndex();"ng-bind-html="varButtonLabel"ng-disabled="disable-button"></button><div class="checkboxLayer"><div class="helperContainer" ng-if="helperStatus.filter || helperStatus.all || helperStatus.none || helperStatus.reset "><div class="line" ng-if="helperStatus.all || helperStatus.none || helperStatus.reset "><button type="button" class="helperButton"ng-disabled="isDisabled"ng-if="helperStatus.all"ng-click="select( \'all\', $event );"ng-bind-html="lang.selectAll"></button><button type="button" class="helperButton"ng-disabled="isDisabled"ng-if="helperStatus.none"ng-click="select( \'none\', $event );"ng-bind-html="lang.selectNone"></button><button type="button" class="helperButton reset"ng-disabled="isDisabled"ng-if="helperStatus.reset"ng-click="select( \'reset\', $event );"ng-bind-html="lang.reset"></button></div><div class="line" style="position:relative" ng-if="helperStatus.filter"><input placeholder="{{lang.search}}" type="text"ng-click="select( \'filter\', $event )" ng-model="inputLabel.labelFilter" ng-change="searchChanged()" class="inputFilter"/><button type="button" class="clearButton" ng-click="clearClicked( $event )" >×</button> </div> </div> <div class="checkBoxContainer"><div ng-repeat="item in filteredModel | filter:removeGroupEndMarker" class="multiSelectItem"ng-class="{selected: item[ tickProperty ], horizontal: orientationH, vertical: orientationV, multiSelectGroup:item[ groupProperty ], disabled:itemIsDisabled( item )}"ng-click="syncItems( item, $event, $index );" ng-mouseleave="removeFocusStyle( tabIndex );"> <div class="acol" ng-if="item[ spacingProperty ] > 0" ng-repeat="i in numberToArray( item[ spacingProperty ] ) track by $index"></div>  <div class="acol"><label><input class="checkbox focusable" type="checkbox" ng-disabled="itemIsDisabled( item )" ng-checked="item[ tickProperty ]" ng-click="syncItems( item, $event, $index )" /><span ng-class="{disabled:itemIsDisabled( item )}" ng-bind-html="writeLabel( item, \'itemLabel\' )"></span></label></div><span class="tickMark" ng-if="item[ groupProperty ] !== true && item[ tickProperty ] === true" ng-bind-html="icon.tickMark"></span></div></div></div></span>';
      $templateCache.put('isteven-multi-select.htm', template)
    }
    ])
  },
  function () {
    'use strict';
    angular.module('ui.checkbox', [
    ]).directive('checkbox', function () {
      return {
        scope: {
        },
        require: 'ngModel',
        restrict: 'E',
        replace: 'true',
        template: '<button type="button" ng-style="stylebtn" class="btn btn-default" ng-class="{\'btn-xs\': size===\'default\', \'btn-sm\': size===\'large\', \'btn-lg\': size===\'largest\'}">' + '<span ng-style="styleicon" class="fa" ng-class="{\'fa-check\': checked===true}"></span></button>',
        link: function (scope, elem, attrs, modelCtrl) {
          scope.size = 'default',
          scope.stylebtn = {
          },
          scope.styleicon = {
            width: '10px',
            left: '-1px'
          },
          void 0 !== attrs.large && (scope.size = 'large', scope.stylebtn = {
            'padding-top': '2px',
            'padding-bottom': '2px',
            height: '30px'
          }, scope.styleicon = {
            width: '8px',
            left: '-5px',
            'font-size': '17px'
          }),
          void 0 !== attrs.larger && (scope.size = 'larger', scope.stylebtn = {
            'padding-top': '2px',
            'padding-bottom': '2px',
            height: '34px'
          }, scope.styleicon = {
            width: '8px',
            left: '-8px',
            'font-size': '22px'
          }),
          void 0 !== attrs.largest && (scope.size = 'largest', scope.stylebtn = {
            'padding-top': '2px',
            'padding-bottom': '2px',
            height: '45px'
          }, scope.styleicon = {
            width: '11px',
            left: '-11px',
            'font-size': '30px'
          });
          var trueValue = !0,
          falseValue = !1;
          void 0 !== attrs.ngTrueValue && (trueValue = attrs.ngTrueValue),
          void 0 !== attrs.ngFalseValue && (falseValue = attrs.ngFalseValue),
          void 0 !== scope.name && (elem.name = scope.name),
          scope.$watch(function () {
            return modelCtrl.$setViewValue(modelCtrl.$modelValue === trueValue || modelCtrl.$modelValue === !0 ? trueValue : falseValue),
            modelCtrl.$modelValue
          }, function () {
            scope.checked = modelCtrl.$modelValue === trueValue
          }, !0),
          elem.bind('click', function () {
            scope.$apply(function () {
              modelCtrl.$setViewValue(modelCtrl.$modelValue === falseValue ? trueValue : falseValue)
            })
          })
        }
      }
    })
  },
  function (module, exports) {
    'use strict';
    Object.defineProperties(exports, {
      'default': {
        get: function () {
          return $__default
        }
      },
      __esModule: {
        value: !0
      }
    });
    var NavbarCtrl = function ($scope, $modal, $window, newWindowFeature, sso, MessageService) {
      function userInfoCallBack(profile) {
        $scope.profile = profile
      }
      function newMsgCallBack() {
        $scope.unread_msg = MessageService.get_list()
      }
      $scope.unread_msg = [
      ],
      $scope.status = {
        dropdown: !1,
        sidebar_toggled: !1,
        isopen: !1
      },
      $scope.drow_down = function () {
        $scope.status.dropdown = !$scope.status.dropdown
      },
      MessageService.setNotifyCallBack(newMsgCallBack),
      userInfoCallBack(),
      newMsgCallBack(),
      $scope.read = function (msg) {
        MessageService.read(msg)
      },
      $scope.login = function () {
        $scope.$state.go('login')
      },
      $scope.logout = function () {
        sso.logout()
      },
      $scope.$on('event:got-profile', function (evt, profile) {
        userInfoCallBack(profile)
      }),
      $scope.on_sidebar_toggled = function () {
        $scope.status.sidebar_toggled = !$scope.status.sidebar_toggled,
        $scope.status.sidebar_toggled === !0 ? angular.element('#page-container').addClass('page-sidebar-toggled')  : angular.element('#page-container').removeClass('page-sidebar-toggled')
      },
      $scope.user_profile = function () {
        $window.open('http://sso.wajinzi.me/?from=myquantclient', '红树用户中心', newWindowFeature)
      },
      $scope.about = function () {
        $modal.open({
          templateUrl: 'app/about/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'modal'
        })
      },
      $scope.clearAllMsg = function () {
        MessageService.removeAll()
      }
    };
    $traceurRuntime.createClass(NavbarCtrl, {
    }, {
    }),
    NavbarCtrl.$inject = [
      '$scope',
      '$modal',
      '$window',
      'newWindowFeature',
      'gmsdk.sso',
      'MessageService',
      'auth.helper',
      '$timeout'
    ];
    var $__default = NavbarCtrl
  },
  function (module, exports) {
    'use strict';
    Object.defineProperties(exports, {
      'default': {
        get: function () {
          return $__default
        }
      },
      __esModule: {
        value: !0
      }
    });
    var SidebarCtrl = function ($scope, appInfo, authHelper, $timeout, StrategyService) {
      function userInfoCallBack(profile) {
        $scope.profile = profile
      }
      $scope.permissions = authHelper.getPermissions(),
      $scope.minified = !1,
      userInfoCallBack(),
      $scope.permission_deny = function () {
        authHelper.permission_deny()
      },
      $scope.sidebar_minify = function () {
        $scope.minified = !$scope.minified,
        $scope.minified ? angular.element('#page-container').addClass('page-sidebar-minified')  : angular.element('#page-container').removeClass('page-sidebar-minified'),
        $scope.$root.$broadcast('event:page-sidebar-minified', $scope.minified)
      },
      $scope.$on('event:got-permission', function (evt, arg) {
        $scope.permissions = arg
      }),
      $scope.$on('event:got-profile', function (evt, profile) {
        userInfoCallBack(profile)
      }),
      $scope.$on('event:set_order_route', function (evt, arg) {
        $scope.strategy_type = StrategyService.getTradeType(arg)
      }),
      $scope.$on('$stateChangeStart', function (ev, to, toParams) {
        $scope.strategy_type = toParams.hasOwnProperty('strategy_id') && 'app.strategy.detail' === to.name ? StrategyService.getTradeType(toParams.strategy_id)  : null
      })
    };
    $traceurRuntime.createClass(SidebarCtrl, {
    }, {
    }),
    SidebarCtrl.$inject = [
      '$scope',
      'appInfo',
      'auth.helper',
      '$timeout',
      'StrategyService'
    ];
    var $__default = SidebarCtrl
  },
  function (module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperties(exports, {
      'default': {
        get: function () {
          return $__default
        }
      },
      __esModule: {
        value: !0
      }
    });
    var $__create_46_base_46_controller_46_js__,
    $__template_46_list_46_controller_46_js__,
    $__template_46_blank_46_modal_46_controller_46_js__,
    CreateBaseCtrl = ($__create_46_base_46_controller_46_js__ = __webpack_require__(46), $__create_46_base_46_controller_46_js__ && $__create_46_base_46_controller_46_js__.__esModule && $__create_46_base_46_controller_46_js__ || {
      'default': $__create_46_base_46_controller_46_js__
    }) ['default'],
    TmplListCrtl = ($__template_46_list_46_controller_46_js__ = __webpack_require__(47), $__template_46_list_46_controller_46_js__ && $__template_46_list_46_controller_46_js__.__esModule && $__template_46_list_46_controller_46_js__ || {
      'default': $__template_46_list_46_controller_46_js__
    }) ['default'],
    TmplBlankModalCtrl = ($__template_46_blank_46_modal_46_controller_46_js__ = __webpack_require__(48), $__template_46_blank_46_modal_46_controller_46_js__ && $__template_46_blank_46_modal_46_controller_46_js__.__esModule && $__template_46_blank_46_modal_46_controller_46_js__ || {
      'default': $__template_46_blank_46_modal_46_controller_46_js__
    }) ['default'],
    moduleName = 'create.controllers';
    angular.module(moduleName, [
    ]).controller('CreateBaseCtrl', CreateBaseCtrl).controller('TmplListCrtl', TmplListCrtl).controller('TmplBlankModalCtrl', TmplBlankModalCtrl);
    var $__default = moduleName
  },
  function (module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperties(exports, {
      'default': {
        get: function () {
          return $__default
        }
      },
      __esModule: {
        value: !0
      }
    });
    var $__create_46_service_46_js__,
    moduleName = 'create.services',
    CreateService = ($__create_46_service_46_js__ = __webpack_require__(49), $__create_46_service_46_js__ && $__create_46_service_46_js__.__esModule && $__create_46_service_46_js__ || {
      'default': $__create_46_service_46_js__
    }) ['default'];
    angular.module(moduleName, [
      'gmsdk'
    ]).factory('CreateService', CreateService.factory);
    var $__default = moduleName
  },
  function (module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperties(exports, {
      'default': {
        get: function () {
          return $__default
        }
      },
      __esModule: {
        value: !0
      }
    });
    var $__backtest_46_list_46_controller_46_js__,
    $__backtest_46_detail_46_controller_46_js__,
    $__detail_46_perfchart_46_controller_46_js__,
    $__detail_46_order_46_controller_46_js__,
    $__detail_46_position_46_controller_46_js__,
    $__detail_46_log_46_controller_46_js__,
    $__delete_46_backtest_46_confirm_46_controller_46_js__,
    BacktestListCtrl = ($__backtest_46_list_46_controller_46_js__ = __webpack_require__(52), $__backtest_46_list_46_controller_46_js__ && $__backtest_46_list_46_controller_46_js__.__esModule && $__backtest_46_list_46_controller_46_js__ || {
      'default': $__backtest_46_list_46_controller_46_js__
    }) ['default'],
    BacktestDetailCtrl = ($__backtest_46_detail_46_controller_46_js__ = __webpack_require__(53), $__backtest_46_detail_46_controller_46_js__ && $__backtest_46_detail_46_controller_46_js__.__esModule && $__backtest_46_detail_46_controller_46_js__ || {
      'default': $__backtest_46_detail_46_controller_46_js__
    }) ['default'],
    BacktestPerfChartCtrl = ($__detail_46_perfchart_46_controller_46_js__ = __webpack_require__(54), $__detail_46_perfchart_46_controller_46_js__ && $__detail_46_perfchart_46_controller_46_js__.__esModule && $__detail_46_perfchart_46_controller_46_js__ || {
      'default': $__detail_46_perfchart_46_controller_46_js__
    }) ['default'],
    BacktestOrderCtrl = ($__detail_46_order_46_controller_46_js__ = __webpack_require__(55), $__detail_46_order_46_controller_46_js__ && $__detail_46_order_46_controller_46_js__.__esModule && $__detail_46_order_46_controller_46_js__ || {
      'default': $__detail_46_order_46_controller_46_js__
    }) ['default'],
    BacktestPositionCtrl = ($__detail_46_position_46_controller_46_js__ = __webpack_require__(56), $__detail_46_position_46_controller_46_js__ && $__detail_46_position_46_controller_46_js__.__esModule && $__detail_46_position_46_controller_46_js__ || {
      'default': $__detail_46_position_46_controller_46_js__
    }) ['default'],
    BacktestLogCtrl = ($__detail_46_log_46_controller_46_js__ = __webpack_require__(57), $__detail_46_log_46_controller_46_js__ && $__detail_46_log_46_controller_46_js__.__esModule && $__detail_46_log_46_controller_46_js__ || {
      'default': $__detail_46_log_46_controller_46_js__
    }) ['default'],
    DeleteBacktestCtrl = ($__delete_46_backtest_46_confirm_46_controller_46_js__ = __webpack_require__(58), $__delete_46_backtest_46_confirm_46_controller_46_js__ && $__delete_46_backtest_46_confirm_46_controller_46_js__.__esModule && $__delete_46_backtest_46_confirm_46_controller_46_js__ || {
      'default': $__delete_46_backtest_46_confirm_46_controller_46_js__
    }) ['default'],
    moduleName = 'backtest.controllers';
    angular.module(moduleName, [
    ]).controller('BacktestListCtrl', BacktestListCtrl).controller('BacktestDetailCtrl', BacktestDetailCtrl).controller('BacktestPerfChartCtrl', BacktestPerfChartCtrl).controller('BacktestOrderCtrl', BacktestOrderCtrl).controller('BacktestPositionCtrl', BacktestPositionCtrl).controller('BacktestLogCtrl', BacktestLogCtrl).controller('DeleteBacktestCtrl', DeleteBacktestCtrl);
    var $__default = moduleName
  },
  function (module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperties(exports, {
      'default': {
        get: function () {
          return $__default
        }
      },
      __esModule: {
        value: !0
      }
    });
    var $__backtest_46_service__,
    moduleName = 'backtest.services',
    BacktestService = ($__backtest_46_service__ = __webpack_require__(50), $__backtest_46_service__ && $__backtest_46_service__.__esModule && $__backtest_46_service__ || {
      'default': $__backtest_46_service__
    }) ['default'];
    angular.module(moduleName, [
      'gmsdk'
    ]).factory('BacktestService', BacktestService.factory);
    var $__default = moduleName
  },
  function (module, exports) {
    'use strict';
    Object.defineProperties(exports, {
      'default': {
        get: function () {
          return $__default
        }
      },
      __esModule: {
        value: !0
      }
    });
    var moduleName = 'strategy.filters';
    angular.module(moduleName, [
    ]).filter('direction', function () {
      return function (val) {
        var s = null;
        switch (val[1]) {
          case 1:
            switch (val[0]) {
              case 1:
                s = '买/开';
                break;
              case 2:
                s = '卖/开'
            }
            break;
          case 2:
          case 3:
            switch (val[0]) {
              case 1:
                s = '卖/平';
                break;
              case 2:
                s = '买/平'
            }
            break;
          case 4:
            switch (val[0]) {
              case 1:
                s = '卖/平昨';
                break;
              case 2:
                s = '买/平昨'
            }
            break;
          default:
            switch (val[0]) {
              case 1:
                s = '买/多';
                break;
              case 2:
                s = '卖/空'
            }
        }
        return s
    }
}).filter('position_volume', function () {
  return function (val) {
    return val[1] ? val[0] + '/' + val[1] : val[0] + '/0'
  }
}).filter('price', function () {
  return function (val) {
    return 0 === val[1] ? 'number' == typeof val[0] ? val[0].toFixed(2)  : val[0] : '市价'
  }
}).filter('unfinish_order', function () {
  return function (val) {
    var s = null;
    if (1 == val[1]) switch (val[0]) {
      case 1:
        s = '买';
        break;
      case 2:
        s = '卖'
    } else if (2 === val[1] || 3 === val[1] || 4 === val[1]) switch (val[0]) {
      case 1:
        s = '卖';
        break;
      case 2:
        s = '买'
    } else switch (val[0]) {
      case 1:
        s = '买';
        break;
      case 2:
        s = '卖'
    }
    return s += ' ',
    s += val[2]
}
}).filter('side', function () {
return function (val) {
var s = null;
switch (val) {
  case 1:
    s = '买/多';
    break;
  case 2:
    s = '卖/空'
}
return s
}
}).filter('exchange', function () {
return function (val) {
var ex_map = {
  SHSE: '上交所',
  SZSE: '深交所',
  CFFEX: '中金所',
  SHFE: '上期所',
  DCE: '大商所',
  CZCE: '郑商所'
};
return ex_map[val]
}
}).filter('order_type', function () {
return function (val) {
var ot_map = {
  1: '市价单',
  0: '限价单'
};
return ot_map[val]
}
}).filter('pos_effect', function () {
return function (val) {
var pe_map = {
  1: '开',
  2: '平',
  3: '平昨'
};
return pe_map[val]
}
}).filter('status', function () {
return function (val) {
var status_map = {
  1: '已报',
  2: '部成',
  3: '全成',
  4: '收市',
  5: '已撤',
  6: '待撤',
  7: '停止',
  8: '拒绝',
  9: '挂起',
  10: '待报',
  11: '折算',
  12: '过期',
  13: '竞价',
  14: '待改'
};
return status_map[val]
}
}).filter('indicator', function () {
return function (val) {
var indicator_map = {
  nav: '权益',
  pnl: '赢亏',
  profit_ratio: '绝对收益',
  annual_return: '年化收益',
  win_ratio: '胜率',
  max_drawdown: '最大回撤',
  risk_ratio: '风险比例',
  sharp_ratio: '夏普率',
  trade_count: '交易次数',
  win_count: '赢利次数',
  lose_count: '亏损次数',
  max_profit: '最大赢利',
  min_profit: '最大亏损',
  max_single_trade_profit: '单笔最大赢利',
  min_single_trade_profit: '单笔最大亏损',
  daily_max_single_trade_profit: '单日最大赢利',
  daily_min_single_trade_profit: '单日最大亏损',
  max_position_value: '最大持仓',
  min_position_value: '最小持仓',
  daily_pnl: '日赢亏',
  daily_return: '日收益'
};
return indicator_map[val]
}
}).filter('strategy_category', function () {
return function (val) {
var category_map = {
  1: '人工喊单',
  2: '量化交易',
  3: '投资组合'
};
return category_map[val]
}
}).filter('strategy_style', function () {
return function (val) {
var style_map = {
  1: '稳健',
  2: '进取',
  3: '激进'
};
return style_map[val]
}
}).filter('strategy_status', function () {
return function (val) {
var stat_map = {
  1: '已连接',
  2: '已断开',
  3: '错误'
};
if (void 0 !== val && val.hasOwnProperty('state')) {
  var tip = stat_map[val.state];
  return 3 == val.state && (tip = tip + ': ' + val.err_msg),
  tip
}
return '-'
}
}).filter('percentage', function () {
return function (val, fix) {
return void 0 !== val && null !== val ? 'number' == typeof fix ? (100 * val).toFixed(fix) + '%' : (100 * val).toFixed(2) + '%' : '-'
}
}).filter('available', function () {
return function (val) {
return void 0 === val || null === val ? '-' : val
}
}).filter('cny', function () {
return function (val) {
return '-' === val ? val : val + ' 元'
}
}).filter('numlimit', function () {
return function (val, lim) {
return val > lim ? lim + '+' : val
}
}).filter('str_len', function () {
return function (val, lim) {
return val ? val.length <= lim ? val : val.substr(0, lim) + '...' : val
}
}).filter('orderObjectBy', function () {
return function (items, field, reverse) {
var filtered = [
];
return angular.forEach(items, function (item) {
  filtered.push(item)
}),
filtered.sort(function (a, b) {
  return a[field] > b[field] ? 1 : - 1
}),
reverse && filtered.reverse(),
filtered
}
}).filter('price_type', function () {
return function (val) {
var type_map = {
  0: '不复权',
  1: '前复权'
};
return type_map[val]
}
}).filter('execrpt_type', function () {
return function (val) {
var type_map = {
  1: '已报',
  4: '当日已完成',
  5: '已撤销',
  6: '待撤销',
  7: '已停止',
  8: '已拒绝',
  9: '挂起',
  10: '待报',
  11: '已计算',
  12: '过期',
  13: '重置',
  14: '待修改',
  15: '成交',
  16: '成交更正',
  17: '撤销',
  18: '委托状态',
  19: '撤单被拒绝'
};
return type_map[val]
}
}); var $__default = moduleName
},
function (module, exports, __webpack_require__) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
  return $__default
}
},
__esModule: {
value: !0
}
});
var $__strategy_46_list_46_controller_46_js__,
$__detail_46_controller_46_js__,
$__detail_46_transactions_46_controller_46_js__,
$__detail_46_positions_46_controller_46_js__,
$__detail_46_orders_46_controller_46_js__,
$__detail_46_unfinishedorders_46_js__,
$__detail_46_execrpts_46_controller_46_js__,
$__strategy_46_setting_46_js__,
$__strategy_46_remove_46_js__,
$__detail_46_perfchart_46_controller_46_js__,
$__detail_46_indicators_46_controller_46_js__,
$__strategy_46_sidebar_46_controller_46_js__,
$__detail_46_symbol_46_controller_46_js__,
$__strategy_46_placeorder_46_js__,
$__cancel_46_order_46_js__,
$__setting_46_account_46_controller_46_js__,
$__setting_46_base_46_controller_46_js__,
$__setting_46_position_46_controller_46_js__,
$__setting_46_sync_46_controller_46_js__,
$__setting_46_export_46_controller_46_js__,
$__detail_46_indicator_46_sort_46_controller_46_js__,
StrategyListCtrl = ($__strategy_46_list_46_controller_46_js__ = __webpack_require__(62), $__strategy_46_list_46_controller_46_js__ && $__strategy_46_list_46_controller_46_js__.__esModule && $__strategy_46_list_46_controller_46_js__ || {
'default': $__strategy_46_list_46_controller_46_js__
}) ['default'],
StrategyDetailCtrl = ($__detail_46_controller_46_js__ = __webpack_require__(63), $__detail_46_controller_46_js__ && $__detail_46_controller_46_js__.__esModule && $__detail_46_controller_46_js__ || {
'default': $__detail_46_controller_46_js__
}) ['default'],
StrategyTransactionsCtrl = ($__detail_46_transactions_46_controller_46_js__ = __webpack_require__(64), $__detail_46_transactions_46_controller_46_js__ && $__detail_46_transactions_46_controller_46_js__.__esModule && $__detail_46_transactions_46_controller_46_js__ || {
'default': $__detail_46_transactions_46_controller_46_js__
}) ['default'],
StrategyPositionsCtrl = ($__detail_46_positions_46_controller_46_js__ = __webpack_require__(65), $__detail_46_positions_46_controller_46_js__ && $__detail_46_positions_46_controller_46_js__.__esModule && $__detail_46_positions_46_controller_46_js__ || {
'default': $__detail_46_positions_46_controller_46_js__
}) ['default'],
StrategyOrdersCtrl = ($__detail_46_orders_46_controller_46_js__ = __webpack_require__(66), $__detail_46_orders_46_controller_46_js__ && $__detail_46_orders_46_controller_46_js__.__esModule && $__detail_46_orders_46_controller_46_js__ || {
'default': $__detail_46_orders_46_controller_46_js__
}) ['default'],
StrategyUnfinishedOrdersCtrl = ($__detail_46_unfinishedorders_46_js__ = __webpack_require__(67), $__detail_46_unfinishedorders_46_js__ && $__detail_46_unfinishedorders_46_js__.__esModule && $__detail_46_unfinishedorders_46_js__ || {
'default': $__detail_46_unfinishedorders_46_js__
}) ['default'],
StrategyExecRptsCtrl = ($__detail_46_execrpts_46_controller_46_js__ = __webpack_require__(68), $__detail_46_execrpts_46_controller_46_js__ && $__detail_46_execrpts_46_controller_46_js__.__esModule && $__detail_46_execrpts_46_controller_46_js__ || {
'default': $__detail_46_execrpts_46_controller_46_js__
}) ['default'],
StrSettingCtrl = ($__strategy_46_setting_46_js__ = __webpack_require__(69), $__strategy_46_setting_46_js__ && $__strategy_46_setting_46_js__.__esModule && $__strategy_46_setting_46_js__ || {
'default': $__strategy_46_setting_46_js__
}) ['default'],
StrRemoveCtrl = ($__strategy_46_remove_46_js__ = __webpack_require__(70), $__strategy_46_remove_46_js__ && $__strategy_46_remove_46_js__.__esModule && $__strategy_46_remove_46_js__ || {
'default': $__strategy_46_remove_46_js__
}) ['default'],
StrategyPerfChartCtrl = ($__detail_46_perfchart_46_controller_46_js__ = __webpack_require__(71), $__detail_46_perfchart_46_controller_46_js__ && $__detail_46_perfchart_46_controller_46_js__.__esModule && $__detail_46_perfchart_46_controller_46_js__ || {
'default': $__detail_46_perfchart_46_controller_46_js__
}) ['default'],
StrategyIndicatorsCtrl = ($__detail_46_indicators_46_controller_46_js__ = __webpack_require__(72), $__detail_46_indicators_46_controller_46_js__ && $__detail_46_indicators_46_controller_46_js__.__esModule && $__detail_46_indicators_46_controller_46_js__ || {
'default': $__detail_46_indicators_46_controller_46_js__
}) ['default'],
StrategySidebarCrtl = ($__strategy_46_sidebar_46_controller_46_js__ = __webpack_require__(73), $__strategy_46_sidebar_46_controller_46_js__ && $__strategy_46_sidebar_46_controller_46_js__.__esModule && $__strategy_46_sidebar_46_controller_46_js__ || {
'default': $__strategy_46_sidebar_46_controller_46_js__
}) ['default'],
SymbolCtrl = ($__detail_46_symbol_46_controller_46_js__ = __webpack_require__(74), $__detail_46_symbol_46_controller_46_js__ && $__detail_46_symbol_46_controller_46_js__.__esModule && $__detail_46_symbol_46_controller_46_js__ || {
'default': $__detail_46_symbol_46_controller_46_js__
}) ['default'],
PlaceOrderCtrl = ($__strategy_46_placeorder_46_js__ = __webpack_require__(75), $__strategy_46_placeorder_46_js__ && $__strategy_46_placeorder_46_js__.__esModule && $__strategy_46_placeorder_46_js__ || {
'default': $__strategy_46_placeorder_46_js__
}) ['default'],
CancelOrderCtrl = ($__cancel_46_order_46_js__ = __webpack_require__(76), $__cancel_46_order_46_js__ && $__cancel_46_order_46_js__.__esModule && $__cancel_46_order_46_js__ || {
'default': $__cancel_46_order_46_js__
}) ['default'],
SettingAccountCtrl = ($__setting_46_account_46_controller_46_js__ = __webpack_require__(77), $__setting_46_account_46_controller_46_js__ && $__setting_46_account_46_controller_46_js__.__esModule && $__setting_46_account_46_controller_46_js__ || {
'default': $__setting_46_account_46_controller_46_js__
}) ['default'],
SettingBaseCtrl = ($__setting_46_base_46_controller_46_js__ = __webpack_require__(78), $__setting_46_base_46_controller_46_js__ && $__setting_46_base_46_controller_46_js__.__esModule && $__setting_46_base_46_controller_46_js__ || {
'default': $__setting_46_base_46_controller_46_js__
}) ['default'],
SettingPositionCtrl = ($__setting_46_position_46_controller_46_js__ = __webpack_require__(79), $__setting_46_position_46_controller_46_js__ && $__setting_46_position_46_controller_46_js__.__esModule && $__setting_46_position_46_controller_46_js__ || {
'default': $__setting_46_position_46_controller_46_js__
}) ['default'],
SettingSyncCtrl = ($__setting_46_sync_46_controller_46_js__ = __webpack_require__(80), $__setting_46_sync_46_controller_46_js__ && $__setting_46_sync_46_controller_46_js__.__esModule && $__setting_46_sync_46_controller_46_js__ || {
'default': $__setting_46_sync_46_controller_46_js__
}) ['default'],
SettingExportCtrl = ($__setting_46_export_46_controller_46_js__ = __webpack_require__(81), $__setting_46_export_46_controller_46_js__ && $__setting_46_export_46_controller_46_js__.__esModule && $__setting_46_export_46_controller_46_js__ || {
'default': $__setting_46_export_46_controller_46_js__
}) ['default'],
IndicatorSortCtrl = ($__detail_46_indicator_46_sort_46_controller_46_js__ = __webpack_require__(82), $__detail_46_indicator_46_sort_46_controller_46_js__ && $__detail_46_indicator_46_sort_46_controller_46_js__.__esModule && $__detail_46_indicator_46_sort_46_controller_46_js__ || {
'default': $__detail_46_indicator_46_sort_46_controller_46_js__
}) ['default'],
moduleName = 'strategy.controllers';
angular.module(moduleName, [
]).controller('StrategyListCtrl', StrategyListCtrl).controller('StrategyDetailCtrl', StrategyDetailCtrl).controller('StrategyPositionsCtrl', StrategyPositionsCtrl).controller('StrategyOrdersCtrl', StrategyOrdersCtrl).controller('StrategyUnfinishedOrdersCtrl', StrategyUnfinishedOrdersCtrl).controller('StrategyExecRptsCtrl', StrategyExecRptsCtrl).controller('StrategyTransactionsCtrl', StrategyTransactionsCtrl).controller('StrategyPerfChartCtrl', StrategyPerfChartCtrl).controller('StrategyIndicatorsCtrl', StrategyIndicatorsCtrl).controller('SymbolCtrl', SymbolCtrl).controller('PlaceOrderCtrl', PlaceOrderCtrl).controller('CancelOrderCtrl', CancelOrderCtrl).controller('StrSettingCtrl', StrSettingCtrl).controller('StrRemoveCtrl', StrRemoveCtrl).controller('StrategySidebarCrtl', StrategySidebarCrtl).controller('SettingAccountCtrl', SettingAccountCtrl).controller('SettingBaseCtrl', SettingBaseCtrl).controller('IndicatorSortCtrl', IndicatorSortCtrl).controller('SettingPositionCtrl', SettingPositionCtrl).controller('SettingSyncCtrl', SettingSyncCtrl).controller('SettingExportCtrl', SettingExportCtrl);
var $__default = moduleName
},
function (module, exports, __webpack_require__) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
  return $__default
}
},
__esModule: {
value: !0
}
});
var $__strategy_46_service__,
moduleName = 'strategy.services',
StrategyService = ($__strategy_46_service__ = __webpack_require__(51), $__strategy_46_service__ && $__strategy_46_service__.__esModule && $__strategy_46_service__ || {
'default': $__strategy_46_service__
}) ['default'];
angular.module(moduleName, [
]).factory('StrategyService', StrategyService.factory);
var $__default = moduleName
},
function (module, exports, __webpack_require__) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
  return $__default
}
},
__esModule: {
value: !0
}
});
var $__list_46_controller_46_js__,
$__info_46_controller_46_js__,
$__remove_46_controller_46_js__,
$__edit_46_controller_46_js__,
$__connect_46_controller_46_js__,
$__disconnect_46_controller_46_js__,
AccListCtrl = ($__list_46_controller_46_js__ = __webpack_require__(83), $__list_46_controller_46_js__ && $__list_46_controller_46_js__.__esModule && $__list_46_controller_46_js__ || {
'default': $__list_46_controller_46_js__
}) ['default'],
AccInfoCtrl = ($__info_46_controller_46_js__ = __webpack_require__(84), $__info_46_controller_46_js__ && $__info_46_controller_46_js__.__esModule && $__info_46_controller_46_js__ || {
'default': $__info_46_controller_46_js__
}) ['default'],
AccRemoveCtrl = ($__remove_46_controller_46_js__ = __webpack_require__(85), $__remove_46_controller_46_js__ && $__remove_46_controller_46_js__.__esModule && $__remove_46_controller_46_js__ || {
'default': $__remove_46_controller_46_js__
}) ['default'],
AccEditCtrl = ($__edit_46_controller_46_js__ = __webpack_require__(86), $__edit_46_controller_46_js__ && $__edit_46_controller_46_js__.__esModule && $__edit_46_controller_46_js__ || {
'default': $__edit_46_controller_46_js__
}) ['default'],
AccConnectCtrl = ($__connect_46_controller_46_js__ = __webpack_require__(87), $__connect_46_controller_46_js__ && $__connect_46_controller_46_js__.__esModule && $__connect_46_controller_46_js__ || {
'default': $__connect_46_controller_46_js__
}) ['default'],
AccDisconnectCtrl = ($__disconnect_46_controller_46_js__ = __webpack_require__(88), $__disconnect_46_controller_46_js__ && $__disconnect_46_controller_46_js__.__esModule && $__disconnect_46_controller_46_js__ || {
'default': $__disconnect_46_controller_46_js__
}) ['default'],
moduleName = 'account.controllers';
angular.module(moduleName, [
]).controller('AccListCtrl', AccListCtrl).controller('AccInfoCtrl', AccInfoCtrl).controller('AccRemoveCtrl', AccRemoveCtrl).controller('AccEditCtrl', AccEditCtrl).controller('AccConnectCtrl', AccConnectCtrl).controller('AccDisconnectCtrl', AccDisconnectCtrl);
var $__default = moduleName
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
  return $__default
}
},
__esModule: {
value: !0
}
});
var moduleName = 'account.services',
AccountService = function ($modal, $filter, $q, gmsdk, md, $rootScope, pinyin, $log) {
var that = this;
that.$modal = $modal,
this.$filter = $filter,
this.$q = $q,
that.log = $log,
that.backend = gmsdk,
that.md = md,
this.pinyin = pinyin,
this.rootScope = $rootScope,
that.broker_map = {
3: 'CTP',
4: 'LTS'
},
that.account_type_map = {
1: '模拟',
2: '仿真',
3: '真实'
},
that.brokers = [
],
that.queryBroker = !1,
this.account_type = function (id) {
return that.account_type_map[id]
},
that.accounts = [
],
that.acc_map_index = {
},
that.brokerChannelTypes = that.brokerChannelTypes = [
{
  id: 3,
  name: '期货CTP',
  desc: '连接期货公司提供的CTP接口',
  title: '期货CTP: 连接期货公司提供的CTP接口',
  exchanges: [
    'CFFEX',
    'SHFE',
    'DCE',
    'CZCE'
  ]
},
{
  id: 4,
  name: '华宝LTS',
  desc: '连接华宝证券提供的LTS接口',
  title: '华宝LTS: 连接华宝证券提供的LTS接口',
  exchanges: [
    'SHSE',
    'SZSE'
  ]
}
],
that.backend.getAccounts().success(function (resp) {
if (0 === resp.status.code) for (var i = 0, _data = resp.data, l = _data.length; l > i; i++) {
  var t = that.add_account_base(_data[i]);
  that.fetch_status(t),
  that.fetch_cash(t)
}
}).error(function () {
}),
that.backend.setOnBrokerStatus(function (status) {
$rootScope.$apply(function () {
  that.update_status(status)
})
}),
that.backend.setOnBrokerCash(function (cash) {
$rootScope.$apply(function () {
  that.update_cash(cash)
})
}),
that.backend.setOnBrokerPosition(function (resp) {
$rootScope.$apply(function () {
  that.process_positions(resp)
})
}),
that.run = !1;
setInterval(function () {
that.run && $rootScope.$apply(function () {
  that.accounts.forEach(function (t) {
    if (t.account_type >= 3) {
      t.status.state = Math.random() > 0.5 ? 2 : 1;
      var cash = {
        account_id: t.account_id,
        available: 1000 * Math.random(),
        nav: 1000 * Math.random()
      };
      that.update_cash(cash)
    }
  })
})
}, 1000)
},
$AccountService = AccountService;
$traceurRuntime.createClass(AccountService, {
get_list: function () {
return this.accounts
},
fetch_sec_name: function (pos) {
pos.sec_name = null;
var inst = this.md.symbolTypeAhead[pos.exchange.toUpperCase() + '.' + pos.sec_id.toUpperCase()];
inst && inst.forEach(function (ins) {
  pos.sec_name = ins.sec_name
})
},
fetchBrokerChannel: function () {
var that = this;
that.md.getBrokerChannelTypes().then(function (resp) {
  try {
    that.brokerChannelTypes = [
    ],
    resp.data.data.forEach(function (type) {
      type.id > 2 && (type.title = type.name + ': ' + type.desc, that.brokerChannelTypes.push(type))
    })
  } catch (e) {
  }
  that.fetch_brokers()
}, function () {
  that.fetch_brokers()
})
},
fetch_brokers: function () {
var that = this,
the_promises = [
];
if (that.queryBroker === !0) {
  var deferred = this.$q.defer();
  the_promises.push(deferred.promise)
} else that.queryBroker = !0,
that.brokerChannelTypes.forEach(function (channelType) {
  var deferred = that.$q.defer(),
  typeId = channelType.id;
  that.md.getBrokersByChannelType(typeId).then(function (resp) {
    if (void 0 !== resp.data.data) for (var len = resp.data.data.length, i = 0; len > i; i++) {
      var b = resp.data.data[i],
      key = b.name;
      that.brokers[typeId] || (that.brokers[typeId] = {
      }),
      that.brokers[typeId][key] ? that.brokers[typeId][key].push(b)  : that.brokers[typeId][key] = [
        b
      ];
      var t = that.pinyin.makePy(b.name);
      t.forEach(function (x) {
        that.brokers[typeId][x] ? that.brokers[typeId][x].push(b)  : that.brokers[typeId][x] = [
          b
        ]
      })
    } else that.brokers[typeId] = null;
    deferred.resolve()
  }, function () {
    deferred.reject()
  }),
  the_promises.push(deferred.promise)
});
return that.$q.all(the_promises)
},
get: function (id) {
var i = this.acc_map_index[id];
return void 0 === i || null === i ? null : this.accounts[i]
},
add_account_base: function (item) {
var t = angular.extend({
  status: {
  },
  cash: {
  },
  positions: [
  ]
}, item);
return t.account_type < 3 && (t.status.state = 2),
this.accounts.push(t),
this.acc_map_index[t.account_id] = this.accounts.length - 1,
t
},
del_local_account: function (acc_id) {
var i = this.acc_map_index[acc_id];
if (void 0 !== i && null !== i) {
  this.accounts.splice(i, 1),
  delete this.acc_map_index[acc_id];
  for (var x = 0; x < this.accounts.length; x++) this.acc_map_index[this.accounts[x].account_id] = x
}
},
update_account: function (id, item) {
var i = this.acc_map_index[id];
void 0 !== i && null !== i && (this.accounts[i] = item)
},
remove: function (id) {
return this.backend.deleteAccount(id)
},
insert: function (obj) {
return this.backend.insertAccount(obj)
},
update: function (obj) {
var t = angular.copy(obj);
return delete t.status,
this.backend.updateAccount(t)
},
login: function (acc) {
return this.backend.loginBroker(acc.account_id, acc.broker_password, acc.broker_captcha)
},
logout: function (acc) {
return this.backend.logoutBroker(acc.account_id)
},
isLoggedIn: function (acc) {
return 2 === acc.status.state
},
on_click_account: function (acc) {
if (!(acc.broker_channel_id < 3)) {
  var modalInstance;
  modalInstance = this.$modal.open(2 !== acc.status.state ? {
    templateUrl: 'app/account/connect.confirm.html',
    controller: 'AccConnectCtrl',
    backdrop: 'static',
    resolve: {
      acc: function () {
        return acc
      }
    }
  }
   : {
    templateUrl: 'app/account/disconnect.confirm.html',
    controller: 'AccDisconnectCtrl',
    backdrop: 'static',
    resolve: {
      acc: function () {
        return acc
      }
    }
  })
}
},
fetch_status: function (t) {
var that = this,
deferred = that.$q.defer();
return that.backend.getBrokerStatus(t.account_id).then(function (resp) {
  var _data = resp.data.data;
  _data && _data.length && that.update_status(_data[0]),
  deferred.resolve()
}, function () {
  deferred.reject()
}),
deferred.promise
},
update_status: function (_st) {
var that = this,
aid = _st.account_id,
x = that.get(aid);
x && angular.extend(x.status, _st.status)
},
fetch_cash: function (t) {
var that = this,
deferred = that.$q.defer();
return that.backend.getBrokerCash(t.account_id).then(function (resp) {
  if (resp.data.data && resp.data.data.length) {
    var _cash = resp.data.data[0];
    that.update_cash(_cash)
  }
  deferred.resolve()
}, function () {
  deferred.reject()
}),
deferred.promise
},
update_cash: function (cash) {
var that = this,
aid = cash.account_id,
x = that.get(aid);
x && angular.extend(x.cash, cash)
},
fetch_positions: function (t) {
var that = this,
deferred = that.$q.defer();
return that.backend.getBrokerPositions(t.account_id).then(function (resp) {
  that.process_positions(resp.data),
  deferred.resolve()
}, function () {
  deferred.reject()
}),
deferred.promise
},
process_positions: function (resp) {
var that = this,
_data = resp.data,
aid = resp.account_id,
t = that.get(aid);
t && (t.positions.length = 0, _data && _data.length && _data.forEach(function (x) {
  x.exchange = x.exchange || '',
  that.update_position(t, x)
}))
},
update_position: function (t, pos, update) {
if (t) if (this.fetch_sec_name(pos), update) {
  for (var found = !1, i = 0; i < t.positions.length; i++) {
    var o = t.positions[i];
    if (o.strategy_id === pos.strategy_id && o.exchange === pos.exchange && o.sec_id === pos.sec_id && o.side === pos.side) {
      found = !0;
      break
    }
  }
  found ? pos.volume > 0 ? t.positions[i] = pos : t.positions.splice(i, 1)  : t.positions.splice(0, 0, pos)
} else t.positions.push(pos)
}
}, {
factory: function ($modal, $filter, $q, gmsdk, md, $rootScope, pinyin, $log) {
return new $AccountService($modal, $filter, $q, gmsdk, md, $rootScope, pinyin, $log)
}
}),
AccountService.factory.$inject = [
'$modal',
'$filter',
'$q',
'gmsdk.td',
'gmsdk.md',
'$rootScope',
'pinyin',
'$log'
],
angular.module(moduleName, [
'gmsdk'
]).factory('AccountService', AccountService.factory);
var $__default = moduleName
},
function () {
'use strict';
var moduleName = 'account.filters';
angular.module(moduleName, [
]).filter('account_status', function () {
return function (val) {
var stat_map = {
  1: '已断开',
  2: '已登录',
  3: '已断开',
  4: '错误'
},
tip = stat_map[val.state];
return 4 == val.state && (tip = tip + ': ' + val.err_msg),
tip
}
})
},
function (module, exports, __webpack_require__) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
  return $__default
}
},
__esModule: {
value: !0
}
});
var $__risk_46_log_46_controller_46_js__,
$__risk_46_edit_46_controller_46_js__,
RiskLogCtrl = ($__risk_46_log_46_controller_46_js__ = __webpack_require__(59), $__risk_46_log_46_controller_46_js__ && $__risk_46_log_46_controller_46_js__.__esModule && $__risk_46_log_46_controller_46_js__ || {
'default': $__risk_46_log_46_controller_46_js__
}) ['default'],
RiskEditCtrl = ($__risk_46_edit_46_controller_46_js__ = __webpack_require__(60), $__risk_46_edit_46_controller_46_js__ && $__risk_46_edit_46_controller_46_js__.__esModule && $__risk_46_edit_46_controller_46_js__ || {
'default': $__risk_46_edit_46_controller_46_js__
}) ['default'],
moduleName = 'risk.controllers';
angular.module(moduleName, [
]).controller('RiskLogCtrl', RiskLogCtrl).controller('RiskEditCtrl', RiskEditCtrl);
var $__default = moduleName
},
function (module, exports, __webpack_require__) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
  return $__default
}
},
__esModule: {
value: !0
}
});
var $__risk_46_service__,
moduleName = 'risk.services',
RiskService = ($__risk_46_service__ = __webpack_require__(61), $__risk_46_service__ && $__risk_46_service__.__esModule && $__risk_46_service__ || {
'default': $__risk_46_service__
}) ['default'];
angular.module(moduleName, [
]).factory('RiskService', RiskService.factory);
var $__default = moduleName
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
  return $__default
}
},
__esModule: {
value: !0
}
});
var moduleName = 'risk.filters';
angular.module(moduleName, [
]).filter('risk_control_object', function () {
return function (val) {
return val[0] ? val[0] : val[1]
}
}).filter('rick_action', function () {
var str_map = {
1: '无',
2: '通知',
3: '警告',
4: '拒绝订单',
5: '强制平仓',
6: '停止'
};
return function (val) {
return str_map.hasOwnProperty(val) ? str_map[val] : '-'
}
}).filter('risk_state', function () {
var str_map = {
1: '正常',
2: '禁止开仓',
3: '禁止交易'
};
return function (val) {
return str_map.hasOwnProperty(val) ? str_map[val] : '-'
}
});
var $__default = moduleName
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
  return $__default
}
},
__esModule: {
value: !0
}
});
var moduleName = 'message.services',
MessageService = function ($q, $window, $filter, $rootScope) {
var that = this;
that.$q = $q,
that.$rootScope = $rootScope,
this.msg_list = [
],
this.count_msg = 0,
this.notifycbFun = [
],
$rootScope.$on('event:new_backtest', function (evt, backtest) {
if (!that.msg_list.some(function (msg) {
  return msg.backtest_id === backtest.id
})) {
  var new_msg = {
    heading: '回测: ' + backtest.strategy.name,
    content: $filter('date') (backtest.sending_time, 'yyyy-MM-dd HH:mm:ss.sss'),
    icon: '<i class="fa fa-newspaper-o media-object bg-green"></i>',
    onread: function () {
      $rootScope.$state.go('app.backtest.detail', {
        backtest_id: backtest.id
      })
    },
    type: 'backtest',
    backtest_id: backtest.id
  };
  that.push(new_msg)
}
}),
$window.appUpdateWatch.watch(function () {
that.receiveUpgradeMsg()
})
},
$MessageService = MessageService;
$traceurRuntime.createClass(MessageService, {
get_list: function () {
return this.msg_list
},
push: function (msg) {
var deferred = this.$q.defer(),
this_id = this.count_msg + 1;
return angular.extend(msg, {
  id: this_id
}),
this.msg_list.push(msg),
this.count_msg++,
this.fireNotifyCallBack(),
deferred.resolve(this_id),
deferred.promise
},
removeBacktest: function (id) {
var that = this,
the_msg = null;
that.msg_list.forEach(function (msg) {
  msg.type && 'backtest' === msg.type && msg.backtest_id === id && (the_msg = msg)
}),
null !== the_msg && that.remove(the_msg)
},
remove: function (msg) {
for (var that = this, deferred = that.$q.defer(), idx = - 1, i = 0; i < this.msg_list.length; i++) if (this.msg_list[i].id === msg.id) {
  idx = i;
  break
}
return idx > - 1 ? (this.msg_list.splice(idx, 1), this.fireNotifyCallBack(), deferred.resolve())  : deferred.reject(),
deferred.promise
},
removeAll: function () {
this.msg_list = [
],
this.fireNotifyCallBack()
},
read: function (msg) {
msg.onread && 'function' == typeof msg.onread && msg.onread(),
this.remove(msg)
},
setNotifyCallBack: function (fun) {
this.notifycbFun.push(fun)
},
fireNotifyCallBack: function () {
this.notifycbFun.forEach(function (func) {
  func()
})
},
receiveUpgradeMsg: function () {
this.push({
  heading: '系统消息',
  content: '获取到最新版本，重启后即可使用',
  icon: '<i class="fa fa-envelope media-object bg-green"></i>'
})
}
}, {
factory: function ($q, $window, $filter, $rootScope) {
return new $MessageService($q, $window, $filter, $rootScope)
}
}),
MessageService.factory.$inject = [
'$q',
'$window',
'$filter',
'$rootScope'
],
angular.module(moduleName, [
]).factory('MessageService', MessageService.factory);
var $__default = moduleName
},
function (module, exports, __webpack_require__) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
  return $__default
}
},
__esModule: {
value: !0
}
});
var $__analysis_46_list_46_controller_46_js__,
$__analysis_46_detail_46_controller_46_js__,
AnalysisListCtrl = ($__analysis_46_list_46_controller_46_js__ = __webpack_require__(89), $__analysis_46_list_46_controller_46_js__ && $__analysis_46_list_46_controller_46_js__.__esModule && $__analysis_46_list_46_controller_46_js__ || {
'default': $__analysis_46_list_46_controller_46_js__
}) ['default'],
AnalysisDetailCtrl = ($__analysis_46_detail_46_controller_46_js__ = __webpack_require__(90), $__analysis_46_detail_46_controller_46_js__ && $__analysis_46_detail_46_controller_46_js__.__esModule && $__analysis_46_detail_46_controller_46_js__ || {
'default': $__analysis_46_detail_46_controller_46_js__
}) ['default'],
moduleName = 'analysis.controllers';
angular.module(moduleName, [
]).controller('AnalysisListCtrl', AnalysisListCtrl).controller('AnalysisDetailCtrl', AnalysisDetailCtrl);
var $__default = moduleName
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
  return $__default
}
},
__esModule: {
value: !0
}
});
var AnalysisService = function (md, $filter, $q) {
this.md = md,
this.$filter = $filter,
this.$q = $q,
this.line_type_options = [
{
  label: 'K线',
  type: 'candlestick'
},
{
  label: '分时线',
  type: 'line'
}
];
var date = new Date;
this.y = date.getFullYear(),
this.m = date.getMonth(),
this.d = date.getDate()
},
$AnalysisService = AnalysisService;
$traceurRuntime.createClass(AnalysisService, {
toTimeStr: function (time) {
return this.$filter('date') (time, 'yyyy-MM-dd HH:mm:ss')
},
getOpenTimeStr: function (exchange) {
var that = this;
return that.$filter('date') (that.getOpenUTC(exchange), 'yyyy-MM-dd HH:mm:ss')
},
getOpenUTC: function (exchange) {
var res = null,
that = this,
d = null;
switch (exchange) {
  case 'SHSE':
  case 'SZSE':
  case 'HKSE':
    d = new Date(that.y, that.m, that.d, 9, 30, 0),
    res = d.getTime();
    break;
  case 'CFFEX':
    d = new Date(that.y, that.m, that.d, 9, 15, 0),
    res = d.getTime();
    break;
  default:
    d = new Date(that.y, that.m, that.d, 9, 0, 0),
    res = d.getTime()
}
return res
},
getNow: function () {
var that = this;
return that.$filter('date') (new Date, 'yyyy-MM-dd HH:mm:ss')
},
tidy_bar: function (res) {
var data = null;
try {
  data = res.data.data
} catch (e) {
}
return null === data || void 0 === data ? null : data.map(function (bar) {
  return [1000 * bar.utc_time,
  bar.open,
  bar.high,
  bar.low,
  bar.close]
})
},
tidy_bar_as_tick: function (res) {
var data = null;
try {
  data = res.data.data
} catch (e) {
}
return null === data || void 0 === data ? null : data.map(function (bar) {
  return [1000 * bar.utc_time,
  bar.close]
})
},
tidy_tick: function (res) {
var data = null;
try {
  data = res.data.data
} catch (e) {
}
return null === data || void 0 === data ? null : data.map(function (tick) {
  return [1000 * tick.utc_time,
  tick.last_price]
})
},
getTodayTicks: function (symbol) {
var that = this,
deferred = that.$q.defer(),
exchange = symbol.split('.') [0],
then = that.getOpenTimeStr(exchange),
now = that.getNow();
return that.md.getTicks(symbol, then, now).then(function (resp) {
  var data = that.tidy_tick(resp);
  null === data ? deferred.reject()  : deferred.resolve(data)
}, function () {
  deferred.reject()
}),
deferred.promise
},
getTodayBarsAsTicks: function (symbol) {
var that = this,
deferred = that.$q.defer(),
exchange = symbol.split('.') [0],
then = that.getOpenTimeStr(exchange),
now = that.getNow();
return that.md.getBars(symbol, 60, then, now).then(function (resp) {
  var data = that.tidy_bar_as_tick(resp);
  null === data ? deferred.reject()  : deferred.resolve(data)
}, function () {
  deferred.reject()
}),
deferred.promise
},
getTodayBars: function (symbol, bar_type, as_tick) {
var that = this,
deferred = that.$q.defer(),
exchange = symbol.split('.') [0],
then = that.getOpenTimeStr(exchange),
now = that.getNow();
return that.md.getBars(symbol, bar_type, then, now).then(function (resp) {
  var data;
  data = as_tick ? that.tidy_bar_as_tick(resp)  : that.tidy_bar(resp),
  null === data ? deferred.reject()  : deferred.resolve(data)
}, function () {
  deferred.reject()
}),
deferred.promise
},
getBars: function (symbol, bar_type, start_time, end_time, as_tick) {
var that = this,
deferred = that.$q.defer(),
from = that.toTimeStr(start_time),
to = that.toTimeStr(end_time);
return that.md.getBars(symbol, bar_type, from, to).then(function (resp) {
  var data;
  data = as_tick ? that.tidy_bar_as_tick(resp)  : that.tidy_bar(resp),
  null === data ? deferred.reject()  : deferred.resolve(data)
}, function () {
  deferred.reject()
}),
deferred.promise
},
getDailyBars: function (symbol, start_time, end_time, as_tick) {
var that = this,
deferred = that.$q.defer(),
from = that.toTimeStr(start_time),
to = that.toTimeStr(end_time);
return that.md.getDailyBars(symbol, from, to).then(function (resp) {
  var data;
  data = as_tick ? that.tidy_bar_as_tick(resp)  : that.tidy_bar(resp),
  null === data ? deferred.reject()  : deferred.resolve(data)
}, function () {
  deferred.reject()
}),
deferred.promise
},
getCloseUTC: function (exchange) {
var res = null,
that = this,
d = null;
switch (exchange) {
  case 'SHSE':
  case 'SZSE':
    d = new Date(that.y, that.m, that.d, 15, 0, 0),
    res = d.getTime();
    break;
  case 'CFFEX':
    d = new Date(that.y, that.m, that.d, 15, 15, 0),
    res = d.getTime();
    break;
  case 'HKSE':
    d = new Date(that.y, that.m, that.d, 16, 0, 0),
    res = d.getTime();
    break;
  default:
    d = new Date(that.y, that.m, that.d, 15, 30, 0),
    res = d.getTime()
}
return res
}
},
{
factory: function (md, $filter, $q) {
return new $AnalysisService(md, $filter, $q)
}
}),
AnalysisService.factory.$inject = [
'gmsdk.md',
'$filter',
'$q'
];
var moduleName = 'analysis.service';
angular.module(moduleName, [
'gmsdk'
]).factory('AnalysisService', AnalysisService.factory);
var $__default = moduleName
}, function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
  return $__default
}
},
__esModule: {
value: !0
}
});
var LoginController = function ($scope, $window, $timeout, $modal, newWindowFeature, sso, $log, authHelper) {
var port = '8002';
$scope.profile = authHelper.getProfile(),
$scope.username = '',
$scope.password = '';
var modalInstance = null;
$scope.error = !1,
$scope.login = function () {
$scope.error = !1,
window.localStorage.setItem('username', $scope.username),
sso.login($scope.username, $scope.password)
},
$scope.reset_password = function () {
$window.open('http://sso.wajinzi.me/resetpwd_step1/', '重置密码', newWindowFeature)
},
$scope.sign_up = function () {
$window.open('http://sso.wajinzi.me/register/', '注册账户', newWindowFeature)
},
$scope.$on('event:auth-loginFailed', function (evt, args) {
$scope.error = !0,
$scope.error_msg = args && args.non_field_errors ? args.non_field_errors[0] : '网络错误'
}),
$scope.oauth_login = function (target) {
var src = null;
switch (target) {
  case 'qq':
    src = 'https://graph.qq.com/oauth2.0/authorize?client_id=101191361&response_type=code&redirect_uri=http%3A%2F%2Fsso.wajinzi.me%2Faccount%2Foauth%2Fqq&state=http://localhost:' + port + '/?from=myquantclient';
    break;
  case 'weibo':
    src = 'https://api.weibo.com/oauth2/authorize?client_id=392971908&response_type=code&redirect_uri=http%3A%2F%2Fsso.wajinzi.me%2Faccount%2Foauth%2Fweibo&state=http://localhost:' + port + '/?from=myquantclient';
    break;
  case 'weixin':
    src = 'https://open.weixin.qq.com/connect/qrconnect?appid=wx2de844e2876efb34&redirect_uri=http%3A%2F%2Fsso.wajinzi.me%2Fweixin%2Foauth%2F&response_type=code&scope=snsapi_login&state=http://localhost:' + port + '/?from=myquantclient&response_type=code&scope=snsapi_login#wechat_redirect';
    break;
  case 'phone':
    src = 'http://sso.wajinzi.me/phone_add/?sitename=weixin&netloc=localhost:' + port
}
try {
  modalInstance.close()
} catch (e) {
}
modalInstance = $modal.open({
templateUrl: 'app/auth/login.oauth.html',
controller: function () {
},
size: 'lg'
}),
modalInstance.opened.then($timeout(function () {
var iFrameWin = document.getElementById('oauth_login');
iFrameWin.src = src
}, 500)),
modalInstance.result.then(function () {
}, function (val) {
'manual' == val && sso.logout()
})
},
window.xssWatch.watch(function (token) {
try {
modalInstance.close()
} catch (e) {
}
sso.loginWithToken(token)
}),
null !== $scope.$root.token && $scope.$root.noPhone === !0 && 'login' === $scope.$root.currentState && 0 === $scope.$root.modalCount && ($scope.oauth_login('phone'), $scope.$root.modalCount = 1),
null !== $scope.$root.token && $scope.$root.noPhone === !1 && sso.loginWithToken($scope.$root.token),
$scope.$on('$destroy', function () {
try {
modalInstance.close(),
modalInstance = null
} catch (e) {
}
$scope.$root.modalCount = 0
})
};
$traceurRuntime.createClass(LoginController, {
}, {
}),
LoginController.$inject = [
'$scope',
'$window',
'$timeout',
'$modal',
'newWindowFeature',
'gmsdk.sso',
'$log',
'auth.helper'
];
var $__default = LoginController
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
SEC_TYPE_MAP: {
get: function () {
return SEC_TYPE_MAP
}
},
__esModule: {
value: !0
}
});
var SEC_TYPE_MAP = {
1: '股票',
2: '基金',
3: '指数',
4: '期货',
5: '期权'
}
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var CreateBaseCtrl = function ($scope, $filter, CreateService, md, StrategyService, typeahead, $interval, authHelper) {
function createStrategy() {
StrategyService.save($scope.strategy).then(function (strategy) {
$scope.strategy = strategy,
$scope.args.strategy_id = $scope.strategy.strategy_id,
getFile()
}, function () {
})
}
function getFile() {
$scope.datetime.start_time && ($scope.args.start_time = $filter('date') ($scope.datetime.start_time, 'yyyy-MM-dd HH:mm:ss')),
$scope.datetime.end_time && ($scope.args.end_time = $filter('date') ($scope.datetime.end_time, 'yyyy-MM-dd HH:mm:ss')),
CreateService.getBaseTemplate($scope.args).success(function (resp) {
$scope.code = resp.data,
$scope.code_display = angular.copy($scope.code)
})
}
function update_process() {
for (var cur = 0, i = 0; i < $scope.steps.length - 1; i++) {
var step = $scope.steps[i];
step.valid_leave() && (cur += 100 / ($scope.steps.length - 1))
}
$scope.process !== cur && ($scope.process < cur && ($scope.has_error = !1), $scope.process = cur, getFile())
}
function num_valid(val, min, max) {
if (null === val || void 0 === val) return !1;
var type_valid = 'number' == typeof val,
min_valid = !0,
max_valid = !0;
return null !== min && void 0 !== min && 'number' == typeof min && (min_valid = val > min || min === val),
null !== max && void 0 !== max && 'number' == typeof max && (max_valid = max > val || val === max),
type_valid && min_valid && max_valid
}
function str_valid(val) {
return 'string' == typeof val && '' !== val
}
var profile = authHelper.getProfile(),
non_live_strateies = StrategyService.get_non_live_strategies(),
limit = null;
try {
limit = profile.group_extinfo.allowed_nonlive_strategies
} catch (e) {
}
null !== limit && non_live_strateies.length >= limit && authHelper.permission_deny('非实盘策略数量限制', '您当前用户权限下的非实盘策略数量限制为' + limit + '，此向导将无法将代码关联到策略。').then(function () {
$scope.strategy.strategy_id = ''
}),
$scope.process = 0,
$scope.code = '',
$scope.code_display = '',
$scope.strategy = {
},
$scope.args = {
template: 'base',
td_addr: 'localhost:8001',
username: CreateService.getUser().username,
password: CreateService.getUser().password
},
$scope.has_error = !1,
$scope.valid = {
name_valid: null,
lang_valid: null,
td_addr_valid: null,
strategy_name_valid: null,
project_valid: null,
mode_valid: null,
start_time_valid: null,
end_time_valid: null,
initial_cash_valid: null,
transaction_ratio_valid: null,
commission_ratio_valid: null,
slippage_ratio_valid: null,
price_type_valid: null
},
$scope.steps = [
{
id: 0,
title: '基本设定',
subtitle: '与编程开发相关的设定',
active: !0,
visited: !1,
valid_leave: function () {
return $scope.valid.name_valid = str_valid($scope.strategy.name),
$scope.valid.lang_valid = str_valid($scope.args.language),
$scope.valid.td_addr_valid = 'string' == typeof $scope.args.td_addr,
$scope.valid.strategy_name_valid = str_valid($scope.args.strategy_name) && isValidFilename($scope.args.strategy_name),
$scope.valid.project_valid = null !== $scope.args.project && void 0 !== $scope.args.project,
$scope.valid.name_valid && $scope.valid.lang_valid && $scope.valid.td_addr_valid && $scope.valid.strategy_name_valid && $scope.valid.project_valid
},
on_leave: function () {
$scope.strategy.hasOwnProperty('strategy_id') ? getFile()  : createStrategy()
}
},
{
id: 1,
title: '初始化参数',
subtitle: '与策略运行相关的设定',
active: !1,
visited: !1,
valid_leave: function () {
return $scope.valid.mode_valid = num_valid($scope.args.mode, 1, 4),
$scope.args.mode && 4 === $scope.args.mode ? ($scope.valid.start_time_valid = null !== $scope.datetime.start_time, $scope.valid.end_time_valid = null !== $scope.datetime.end_time && $scope.datetime.end_time > $scope.datetime.start_time, $scope.valid.initial_cash_valid = num_valid($scope.args.initial_cash, 0), $scope.valid.transaction_ratio_valid = num_valid($scope.args.transaction_ratio, 0, 1), $scope.valid.commission_ratio_valid = num_valid($scope.args.commission_ratio, 0, 1), $scope.valid.slippage_ratio_valid = num_valid($scope.args.slippage_ratio, 0, 1), $scope.valid.price_type_valid = num_valid($scope.args.price_type, 0, 1), $scope.valid.mode_valid && $scope.valid.start_time_valid && $scope.valid.end_time_valid && $scope.valid.initial_cash_valid && $scope.valid.transaction_ratio_valid && $scope.valid.commission_ratio_valid && $scope.valid.slippage_ratio_valid && $scope.valid.price_type_valid)  : $scope.valid.mode_valid
},
on_leave: function () {
getFile()
}
},
{
id: 2,
title: '行情订阅',
subtitle: '订阅期货、股票的行情数据',
active: !1,
visited: !1,
valid_leave: function () {
var is_ok = !0;
return $scope.selected_symbols.forEach(function (symbol) {
  symbol.is_ok = !1,
  symbol.sub_type.forEach(function (sub) {
    sub.hasOwnProperty('selected') && sub.selected === !0 && (symbol.is_ok = !0)
  }),
  is_ok = is_ok && symbol.is_ok
}),
is_ok && str_valid($scope.args.subscribe_symbols)
},
on_leave: function () {
getFile()
}
},
{
id: 3,
title: '事件处理',
subtitle: '需要响应处理的事件类别',
active: !1,
visited: !1,
valid_leave: function () {
return $scope.steps[3].visited || $scope.steps[3].active > 0
},
on_leave: function () {
getFile()
}
},
{
id: 4,
title: '完成',
subtitle: '保存代码文件',
active: !1,
visited: !1,
valid_leave: function () {
return !0
},
on_leave: function () {
getFile()
}
}
],
$scope.languages = CreateService.languages,
$scope.order_router = CreateService.order_router,
$scope.run_mode = CreateService.run_mode,
$scope.price_types = CreateService.price_types,
$scope.datetime = {
start_time: null,
end_time: null
},
$scope.translation = {
nothingSelected: '请选择订阅数据'
},
$scope.selected_symbols = [
],
$scope.selected_symbols_display = [
].concat($scope.selected_symbols),
$scope.getSymbolsTypeahead = typeahead.getSymbolSuggestions(md.symbolTypeAhead),
$scope.selectSymbol = function (item) {
for (var find_duplicate = !1, i = 0; i < $scope.selected_symbols.length; i++) {
var $__1 = $scope.selected_symbols[i],
sec_id = $__1.sec_id,
exchange = $__1.exchange;
if (sec_id == item.sec_id && exchange === item.exchange) {
find_duplicate = !0;
break
}
}
if (!find_duplicate) {
var symbol = item;
symbol.sub_type = angular.copy(CreateService.sub_types),
$scope.selected_symbols.push(symbol)
}
$scope.onSubTypeChange()
},
$scope.onSubTypeChange = function () {
var sub_list = [
],
missing = !1,
sub_tick = !1,
sub_bar = !1;
$scope.selected_symbols.forEach(function (symbol) {
var count = 0;
symbol.sub_type.forEach(function (type) {
if (type.selected && type.selected === !0) {
  'tick' === type.type && (sub_tick = !0),
  'bar' === type.type && (sub_bar = !0),
  count++;
  var str = symbol.exchange + '.' + symbol.sec_id + '.' + type.code;
  sub_list.push(str)
}
}),
0 === count && (missing = !0)
}),
$scope.events.forEach(function (event) {
'on_tick' === event.type && (event.is_selected = !1, event.is_selected = sub_tick),
'on_bar' === event.type && (event.is_selected = !1, event.is_selected = sub_bar),
$scope.onEventChecked()
}),
$scope.args.subscribe_symbols = missing ? '' : sub_list.join(',')
},
$scope.removeSymbol = function (row) {
var index = $scope.selected_symbols.indexOf(row);
- 1 !== index && $scope.selected_symbols.splice(index, 1),
$scope.onSubTypeChange()
};
var event_map = {
csharp: CreateService.csharp_events,
cpp: CreateService.python_events,
python: CreateService.python_events,
matlab: CreateService.matlab_events
};
$scope.events = [
],
$scope.onDevLangChange = function () {
'cpp' === $scope.args.language ? ($scope.projects = CreateService.cpp_projects, $scope.args.project = null)  : 'csharp' === $scope.args.language ? ($scope.projects = CreateService.csharp_projects, $scope.args.project = null)  : $scope.args.project = '-',
$scope.aceOption.mode = function () {
return 'cpp' === $scope.args.language || 'c' === $scope.args.language ? 'c_cpp' : $scope.args.language
}(),
$scope.args.events = '',
$scope.events = event_map[$scope.args.language],
$scope.events.forEach(function (event) {
event.is_selected = !1,
event.label = event.description + ' (' + event.type + ')'
}),
$scope.onSubTypeChange(),
$scope.steps[0].visited === !0 && getFile()
},
$scope.onProjectChange = function () {
'linux' === $scope.args.project && ($scope.args.td_addr = '')
},
$scope.onRouterChange = function () {
'linux' === $scope.args.project && 'localhost:8001' === $scope.args.td_addr && ($scope.args.project = null)
},
$scope.onEventChecked = function () {
var checked = [
];
$scope.events.forEach(function (event) {
event.is_selected === !0 && checked.push(event.type)
}),
$scope.args.events = checked.join(',')
},
$scope.downloadFile = function () {
[
'csharp',
'cpp',
'c'
].indexOf($scope.args.language) >= 0 ? ($scope.datetime.start_time && ($scope.args.start_time = $filter('date') ($scope.datetime.start_time, 'yyyy-MM-dd HH:mm:ss')), $scope.datetime.end_time && ($scope.args.end_time = $filter('date') ($scope.datetime.end_time, 'yyyy-MM-dd HH:mm:ss')), CreateService.getBaseTemplateZip($scope.args).success(function (data) {
saveAs(new Blob([data], {
type: 'application/zip\''
}), $scope.args.strategy_name + '.zip')
}))  : saveAs(new Blob([$scope.code], {
type: 'text/plain;charset=utf-8'
}), $scope.args.strategy_name + CreateService.extension_map[$scope.args.language])
};
var interval = $interval(function () {
update_process()
}, 500);
$scope.$on('$destroy', function () {
$interval.cancel(interval)
}),
$scope.current_step = 0,
$scope.setStep = function (num) {
$scope.steps[$scope.current_step].valid_leave() ? ($scope.has_error = !1, $scope.steps[$scope.current_step].visited = !0, $scope.steps[$scope.current_step].on_leave && $scope.steps[$scope.current_step].on_leave(), $scope.steps[$scope.current_step].active = !1, $scope.steps[num].active = !0, $scope.current_step = num, update_process())  : $scope.has_error = !0
},
$scope.isFirstStep = function () {
return 0 === $scope.current_step
},
$scope.isLastStep = function () {
return $scope.current_step === $scope.steps.length - 1
},
$scope.handlePrevious = function () {
$scope.isFirstStep() || $scope.setStep($scope.current_step - 1)
},
$scope.handleNext = function () {
$scope.isLastStep() || $scope.setStep($scope.current_step + 1)
},
$scope.onRefreshClick = function () {
getFile()
},
$scope.aceOption = {
theme: 'dreamweaver',
onLoad: function (_editor) {
var _session = _editor.getSession(),
_renderer = _editor.renderer;
_editor.setReadOnly(!0),
_editor.setHighlightActiveLine(!1),
_editor.setShowPrintMargin(!1),
_editor.$blockScrolling = 1 / 0,
_renderer.setShowGutter(!0),
_session.setUseWrapMode(!0)
}
};
var isValidFilename = function () {
var rg1 = /^[^\\/:\*\?"<>\|]+$/,
rg2 = /^\./,
rg3 = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i;
return function (fname) {
return rg1.test(fname) && !rg2.test(fname) && !rg3.test(fname)
}
}()
};
$traceurRuntime.createClass(CreateBaseCtrl, {
}, {
}),
CreateBaseCtrl.$inject = [
'$scope',
'$filter',
'CreateService',
'gmsdk.md',
'StrategyService',
'util.typeahead',
'$interval',
'auth.helper'
];
var $__default = CreateBaseCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var TmplListCrtl = function ($scope, $modal, authHelper, StrategyService, CreateService) {
var profile = authHelper.getProfile();
$scope.templates = CreateService.template_list.filter(profile && profile.orginfo && profile.orginfo.tpl_list ? function (tpl) {
return - 1 !== profile.orginfo.tpl_list.indexOf('' + tpl.id)
}
 : function (tpl) {
return tpl.id < 3
}),
$scope.$on('event:got-profile', function (evt, profile) {
$scope.templates = CreateService.template_list.filter(function (tpl) {
return - 1 !== profile.orginfo.tpl_list.indexOf('' + tpl.id)
})
}),
$scope.onTmplClick = function (state) {
state && $scope.$state.go(state)
},
$scope.strategy = {
},
$scope.createStrategy = function () {
if ($scope.strategy.name && $scope.strategy.name.length) {
var non_live_strateies = StrategyService.get_non_live_strategies(),
limit = null;
try {
limit = profile.group_extinfo.allowed_nonlive_strategies
} catch (e) {
}
null !== limit && non_live_strateies.length >= limit ? authHelper.permission_deny('非实盘策略数量限制', '您当前用户权限下的非实盘策略数量限制为' + limit + '。').then(function () {
$scope.strategy = {
}
})  : StrategyService.save($scope.strategy).then(function (strategy) {
$scope.strategy = strategy,
$scope.open_blank_modal('构建成功', $scope.strategy)
}, function () {
$scope.open_blank_modal('构建失败', $scope.strategy)
})
}
},
$scope.open_blank_modal = function (msg, strategy) {
var modalInstance = $modal.open({
templateUrl: 'app/create/template.blank.modal.html',
controller: 'TmplBlankModalCtrl',
controllerAs: 'modal',
backdrop: 'static',
resolve: {
msg: function () {
  return msg
},
strategy: function () {
  return strategy
}
}
});
modalInstance.result.then(function () {
$scope.strategy = {
}
}, function () {
$scope.strategy = {
}
})
},
$scope.open_github_modal = function () {
$modal.open({
templateUrl: 'app/create/template.github.modal.html',
controller: function () {
},
backdrop: 'static'
})
}
};
$traceurRuntime.createClass(TmplListCrtl, {
}, {
}),
TmplListCrtl.$inject = [
'$scope',
'$modal',
'auth.helper',
'StrategyService',
'CreateService'
];
var $__default = TmplListCrtl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var TmplBlankModalCtrl = function ($scope, toastr, msg, strategy) {
$scope.msg = msg,
$scope.strategy = strategy,
$scope.on_copied = function () {
toastr.success('成功复制到剪贴板', '', {
timeOut: 1500
})
}
};
$traceurRuntime.createClass(TmplBlankModalCtrl, {
}, {
}),
TmplBlankModalCtrl.$inject = [
'$scope',
'toastr',
'msg',
'strategy'
];
var $__default = TmplBlankModalCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var CreateService = function (sso, td, tmpl) {
this.sso = sso,
this.td = td,
this.tmpl = tmpl,
this.extension_map = {
csharp: '.cs',
c: '.c',
cpp: '.cpp',
python: '.py',
matlab: '.m',
r: '.r'
},
this.sub_types = [
{
label: 'Tick数据',
code: 'tick',
type: 'tick'
},
{
label: '15秒Bar数据',
code: 'bar.15',
type: 'bar'
},
{
label: '1分钟Bar数据',
code: 'bar.60',
type: 'bar'
}
],
this.run_mode = [
{
num: 1,
label: '不接收行情流'
},
{
num: 2,
label: '实时行情模式'
},
{
num: 3,
label: '模拟行情模式'
},
{
num: 4,
label: '回测模式'
}
],
this.price_types = [
{
num: 0,
label: '不复权'
},
{
num: 1,
label: '前复权'
}
],
this.order_router = [
{
label: '云端服务器',
addr: ''
},
{
label: '本地终端',
addr: this.td.getRestAddr()
}
],
this.languages = [
{
label: 'C++',
type: 'cpp'
},
{
label: 'C#',
type: 'csharp'
},
{
label: 'Python',
type: 'python'
},
{
label: 'Matlab',
type: 'matlab'
}
],
this.cpp_projects = [
{
label: 'Linux Makefile',
type: 'linux'
},
{
label: 'Visual Studio 2010 Solution',
type: 'vs2010'
},
{
label: 'Visual Studio 2013 Solution',
type: 'vs2013'
}
],
this.csharp_projects = [
{
label: 'Visual Studio 2010 Solution',
type: 'vs2010'
},
{
label: 'Visual Studio 2013 Solution',
type: 'vs2013'
}
],
this.python_events = [
{
type: 'on_login',
description: '登录'
},
{
type: 'on_error',
description: '错误'
},
{
type: 'on_tick',
description: '逐笔行情',
is_hided: !0
},
{
type: 'on_bar',
description: '分时行情',
is_hided: !0
},
{
type: 'on_execrpt',
description: '委托回报'
},
{
type: 'on_order_status',
description: '订单状态'
},
{
type: 'on_order_new',
description: '订单接受'
},
{
type: 'on_order_filled',
description: '订单完全成交'
},
{
type: 'on_order_partiall_filled',
description: '订单部分成交'
},
{
type: 'on_order_stop_executed',
description: '订单停止'
},
{
type: 'on_order_canceled',
description: '撤单成功'
},
{
type: 'on_order_cancel_rejected',
description: '撤单失败'
}
],
this.csharp_events = [
{
type: 'on_login',
description: '登录'
},
{
type: 'on_error',
description: '错误'
},
{
type: 'on_tick',
description: '逐笔行情',
is_hided: !0
},
{
type: 'on_bar',
description: '分时行情',
is_hided: !0
},
{
type: 'on_execrpt',
description: '委托回报'
},
{
type: 'on_order_new',
description: '订单接受'
},
{
type: 'on_order_filled',
description: '订单完全成交'
},
{
type: 'on_order_partiall_filled',
description: '订单部分成交'
},
{
type: 'on_order_stop_executed',
description: '订单停止'
},
{
type: 'on_order_canceled',
description: '撤单成功'
},
{
type: 'on_order_cancel_rejected',
description: '撤单失败'
}
],
this.matlab_events = [
{
type: 'on_login',
description: '登录'
},
{
type: 'on_error',
description: '错误'
},
{
type: 'on_tick',
description: '逐笔行情',
is_hided: !0
},
{
type: 'on_bar',
description: '分时行情',
is_hided: !0
},
{
type: 'on_execrpt',
description: '委托回报'
},
{
type: 'on_order',
description: '订单状态更新'
}
],
this.template_list = [
{
id: 1,
label: '空策略',
state: null,
description: '生成空策略',
template: 'app/create/template.blank.partial.html'
},
{
id: 2,
label: '基本架构模板',
state: 'app.create.base',
description: '生成策略代码的基本架构',
img: 'assets/images/c2.jpg'
},
{
id: 3,
label: '均线策略',
state: null,
description: '敬请期待',
img: 'assets/images/c2.jpg'
},
{
id: 4,
label: '海龟策略',
state: null,
description: '敬请期待',
img: 'assets/images/c2.jpg'
},
{
id: 5,
label: '金肯特纳系统',
state: null,
description: '敬请期待',
img: 'assets/images/c2.jpg'
},
{
id: 6,
label: '横盘突破',
state: null,
description: '敬请期待',
img: 'assets/images/c2.jpg'
},
{
id: 7,
label: 'Alpha策略',
state: null,
description: '敬请期待',
img: 'assets/images/c2.jpg'
},
{
id: 8,
label: '开源策略分享',
state: null,
description: '用掘金SDK实现经典策略',
img: 'assets/images/c2.jpg'
}
]
},
$CreateService = CreateService;
$traceurRuntime.createClass(CreateService, {
getBaseTemplate: function (args) {
return this.tmpl.getTemplate(args)
},
getBaseTemplateZip: function (args) {
return this.tmpl.getTemplateZip(args)
},
getUser: function () {
return this.sso.user()
}
}, {
factory: function (sso, td, tmpl) {
return new $CreateService(sso, td, tmpl)
}
}),
CreateService.factory.$inject = [
'gmsdk.sso',
'gmsdk.td',
'gmsdk.tmpl'
];
var $__default = CreateService
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var BacktestService = function (bt, StrategyService, $log, $rootScope, $q, $modal) {
this.backend = bt,
this.strategies = [
],
this.StrategyService = StrategyService,
this.$q = $q,
this.$modal = $modal,
this.limit = 10,
this.$rootScope = $rootScope,
this.inited = !1,
this.StrategyService.setInitCallBack(this.onStrategyServiceInited.bind(this)),
this.$rootScope.$on('event:add_strategy', this.onStrategyAdded.bind(this)),
this.$rootScope.$on('event:del_strategy', this.onStrategyDeleted.bind(this)),
this.backend.setOnBacktest(this.onBacktest.bind(this))
},
$BacktestService = BacktestService;
$traceurRuntime.createClass(BacktestService, {
onBacktest: function (backtest) {
backtest = this.tidyData(backtest);
var isNew = this.processNewBacktest(backtest);
isNew ? this.$rootScope.$broadcast('event:new_backtest', backtest)  : this.$rootScope.$broadcast('event:backtest_data', backtest)
},
onStrategyDeleted: function (evt, args) {
for (var idx = - 1, i = 0; i < this.strategies.length; i++) if (this.strategies[i].strategy_id === args.strategy_id) {
idx = i;
break
}
idx > - 1 && this.strategies.splice(i, 1)
},
onStrategyAdded: function (evt, args) {
this.subStrategy(args.strategy_id);
var theStrategy = this.StrategyService.get(args.strategy_id);
theStrategy.backtests = [
],
this.strategies.push(theStrategy)
},
processNewBacktest: function (backtest) {
backtest.strategy = this.StrategyService.get(backtest.req.strategyId);
var the_strategy = this.getStrategyById(backtest.req.strategyId);
if (the_strategy) {
var idx = this.getBacktestNoOfStrategy(backtest.id, the_strategy.strategy_id);
if (null === idx) return the_strategy.backtests.splice(0, 0, backtest),
!0;
if (the_strategy.backtests[idx].hasOwnProperty('progress')) {
var req = the_strategy.backtests[idx].req,
utc = the_strategy.backtests[idx].utc;
return the_strategy.backtests[idx] = backtest,
req && (the_strategy.backtests[idx].req = req),
utc && (the_strategy.backtests[idx].utc = utc),
!1
}
}
},
onStrategyServiceInited: function () {
this.strategies = angular.copy(this.StrategyService.get_list().map(function (strategy) {
return {
strategy_id: strategy.strategy_id,
name: strategy.name,
backtests: [
]
}
})),
this.subStrategies()
},
getBacktestsOfStrategy: function (strategy) {
var that = this;
strategy.hasOwnProperty('backtests') && strategy.backtests.length || (strategy.backtests = [
]);
var parm = {
fields: '*',
limit: that.limit
},
deferred = this.$q.defer();
return that.getStrategyBacktest(strategy.strategy_id, parm).then(function (resp) {
var newBtIds = resp.map(function (bt) {
return bt.id
}),
len = strategy.backtests.length;
if (len > 0) for (var i = len - 1; i > - 1; i -= 1) - 1 == newBtIds.indexOf(strategy.backtests[i].id) && strategy.backtests.splice(i, 1);
 else strategy.backtests = resp;
deferred.resolve(resp)
}, function (resp) {
strategy.backtests = [
],
deferred.resolve(resp)
}),
deferred.promise
},
subStrategies: function () {
var that = this;
that.strategies.forEach(function (st) {
that.backend.sub(st.strategy_id + '.*')
})
},
subStrategy: function (strategy_id) {
var that = this;
that.backend.sub(strategy_id + '.*')
},
getAllBacktestID: function () {
var the_promises = [
],
that = this;
return that.strategies.forEach(function (strategy) {
var deferred = that.$q.defer();
that.getBacktestsOfStrategy(strategy).then(function () {
deferred.resolve()
}, function () {
deferred.reject()
}),
the_promises.push(deferred.promise)
}),
this.$q.all(the_promises)
},
getRawList: function () {
return this.strategies
},
getList: function () {
var that = this,
deferred = this.$q.defer();
return that.inited === !0 ? deferred.resolve(that.strategies)  : that.getAllBacktestID().then(function () {
that.inited = !0,
deferred.resolve(that.strategies)
}, function () {
that.inited = !1,
deferred.reject(that.strategies)
}),
deferred.promise
},
getStrategyById: function (sid) {
for (var that = this, the_strategy = null, i = 0; i < that.strategies.length; i++) if (this.strategies[i].strategy_id === sid) {
the_strategy = this.strategies[i];
break
}
return the_strategy
},
getStrategyBelone: function (bid) {
for (var sid = null, that = this, i = 0; i < that.strategies.length; i++) if (that.strategies[i].backtests && that.strategies[i].backtests.length) for (var j = 0; j < that.strategies[i].backtests.length; j++) that.strategies[i].backtests[j].id === bid && (sid = that.strategies[i].strategy_id);
return sid
},
getTheNBacktestID: function (sid, n) {
var the_strategy = this.getStrategyById(sid);
return the_strategy && the_strategy.backtests.length >= n ? the_strategy.backtests[n].id : null
},
hasNext: function (bid, sid) {
var that = this,
n = that.getBacktestNoOfStrategy(bid, sid),
the_strategy = that.getStrategyById(sid);
return n < the_strategy.backtests.length - 1
},
getBacktestNoOfStrategy: function (bid, sid) {
var the_strategy = this.getStrategyById(sid),
idx = null;
if (the_strategy && the_strategy.backtests) for (var i = 0; i < the_strategy.backtests.length; i++) if (the_strategy.backtests[i].id === bid) {
idx = i;
break
}
return idx
},
getBacktestDetailFromLocal: function (bid) {
var that = this,
the_strategy_id = that.getStrategyBelone(bid),
the_strategy = that.getStrategyById(the_strategy_id),
ret = null,
deferred = this.$q.defer();
if (the_strategy) {
var idx = that.getBacktestNoOfStrategy(bid, the_strategy_id);
null !== idx && the_strategy.backtests[idx].hasOwnProperty('progress') && (ret = the_strategy.backtests[idx])
}
return null === ret ? deferred.reject()  : deferred.resolve(ret),
deferred.promise
},
getBacktestDetail: function (bid) {
var that = this,
deferred = this.$q.defer();
return that.getBacktestDetailFromLocal(bid).then(function (data) {
deferred.resolve(data)
}, function () {
that.getBacktestDetailFromServer(bid).then(function (data) {
deferred.resolve(data)
}, function () {
deferred.reject()
})
}),
deferred.promise
},
getBacktestDetailFromServer: function (bid) {
var parm = {
fields: '*'
},
that = this,
deferred = this.$q.defer();
return this.getBacktest(bid, parm).then(function (resp) {
var backtest = resp;
backtest.strategy = that.StrategyService.get(backtest.req.strategyId);
var the_strategy = that.getStrategyById(backtest.req.strategyId);
if (the_strategy) {
var idx = that.getBacktestNoOfStrategy(backtest.id, the_strategy.strategy_id);
null !== idx && (the_strategy.backtests[idx] = backtest)
}
deferred.resolve(backtest)
}, function () {
deferred.reject()
}),
deferred.promise
},
updataBacktestsOfStrategy: function (sid) {
var that = this,
the_strategy = that.getStrategyById(sid);
return that.getBacktestsOfStrategy(the_strategy)
},
tidyData: function (backtest) {
return backtest = humps.camelizeKeys(backtest),
backtest.orders && backtest.orders.length && backtest.orders.forEach(function (order) {
order && order.sendingTime && (order.sendingTime *= 1000)
}),
backtest.dailyStats && backtest.dailyStats.length && backtest.dailyStats.forEach(function (res) {
res && res.utc && (res.utc *= 1000)
}),
backtest && backtest.utc && (backtest.utc *= 1000),
backtest
},
getBacktest: function (bid, parm) {
var that = this,
deferred = that.$q.defer();
return that.backend.getBacktest(bid, parm).then(function (resp) {
if (resp.hasOwnProperty('data') && resp.data.hasOwnProperty('data') && resp.data.data.length > 0) {
var backtest = that.tidyData(resp.data.data[0]);
deferred.resolve(backtest)
} else deferred.reject()
}, function () {
deferred.reject()
}),
deferred.promise
},
getUserBacktest: function (uid, parm) {
return this.backend.getUserBacktest(uid, parm)
},
getStrategyBacktest: function (sid, parm) {
var that = this,
deferred = that.$q.defer();
return this.backend.getStrategyBacktest(sid, parm).then(function (resp) {
var backtests = resp.data.data;
deferred.resolve(backtests ? backtests.map(function (backtest) {
return that.tidyData(backtest)
})  : [
])
}, function () {
deferred.reject(null)
}),
deferred.promise
},
deleteBacktest: function (bid) {
var deferred = this.$q.defer(),
that = this;
return this.backend.deleteBacktest(bid).then(function () {
var sid = that.getStrategyBelone(bid);
that.updataBacktestsOfStrategy(sid).then(function () {
deferred.resolve()
}, function () {
deferred.reject()
})
}, function () {
deferred.reject()
}),
deferred.promise
},
deleteBacktests: function (bids) {
var deferred = this.$q.defer(),
that = this;
return this.backend.deleteBacktests(bids.join(',')).then(function () {
var sid = that.getStrategyBelone(bids[0]);
that.updataBacktestsOfStrategy(sid).then(function () {
deferred.resolve()
}, function () {
deferred.reject()
})
}, function () {
deferred.reject()
}),
deferred.promise
},
deleteUserBacktest: function (uid) {
return this.backend.deleteUserBacktest(uid)
},
deleteStrategyBacktest: function (sid) {
var deferred = this.$q.defer(),
that = this;
return this.backend.deleteStrategyBacktest(sid).then(function () {
var theStrategy = that.getStrategyById(sid);
theStrategy.backtests = [
],
deferred.resolve()
}, function () {
deferred.reject()
}),
deferred.promise
},
deleteConfirm: function () {
var deferred = this.$q.defer(),
modalInstance = this.$modal.open({
templateUrl: 'app/backtest/delete.backtest.confirm.html',
controller: function () {
},
backdrop: 'static',
resolve: {
}
});
return modalInstance.result.then(function (ok) {
deferred.resolve(ok)
}),
deferred.promise
}
}, {
factory: function (bt, StrategyService, $log, $rootScope, $q, $modal) {
return new $BacktestService(bt, StrategyService, $log, $rootScope, $q, $modal)
}
}),
BacktestService.factory.$inject = [
'gmsdk.bt',
'StrategyService',
'$log',
'$rootScope',
'$q',
'$modal'
];
var $__default = BacktestService
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var StrategyService = function ($timeout, $filter, $q, td, md, account_service, $log, $rootScope, toastr, $interval) {
var $__0 = this,
that = this;
that.list = [
],
that.str_map_index = {
},
that.$filter = $filter,
that.log = $log,
that.AccountService = account_service,
that.backend = td,
that.md = md,
that.$rootScope = $rootScope,
that.$q = $q,
that.categories_map = {
1: '人工喊单',
2: '量化交易',
3: '投资组合'
},
that.styles_map = {
1: '稳健',
2: '进取',
3: '激进'
},
that.initCb = [
],
that.inited = !1,
that.sound = new Audio('assets/sounds/warn.mp3'),
that.init().then(function () {
that.fireInitCallBack()
}, function () {
}),
that.backend.setOnIndicator(function (ind) {
var t = that.get(ind.strategy_id);
if (that.gen_indicators(ind, t), ind.nav) {
ind = Number.parseFloat((ind.nav / 10000).toFixed(2));
var v = [
(new Date).getTime(),
ind
],
len = t.trends.length;
len > 0 ? t.trends[len - 1][0] < v[0] && t.trends.push(v)  : t.trends.push(v)
}
$rootScope.$apply()
}),
that.backend.setOnStrategyStatus(function (_st) {
$rootScope.$apply(function () {
var t = that.get(_st.strategy_id);
if (t) {
if (1 === t.running_status.state && 2 === _st.status.state) {
  that.sound.play();
  var title = '策略 - ' + t.name + ' @ ' + that.$filter('date') ((new Date).getTime(), 'HH:mm:ss');
  toastr.info('连接断开', title, {
    timeOut: 10000
  }),
  document.webkitHidden === !0 && window.open().close()
}
angular.extend(t.running_status, _st.status)
}
})
}),
that.backend.setOnOrderStatus(function (order) {
that.fetch_sec_name(order);
var t = that.get(order.strategy_id);
that.update_orders(t, order),
that.update_unfinished_orders(t, order),
$rootScope.$apply()
}),
that.backend.setOnPosition(function (pos) {
that.fetch_sec_name(pos);
for (var t = that.get(pos.strategy_id), i = 0, limit = t.positions.length, find = !1; limit > i; i++) {
var o = t.positions[i];
if (o.strategy_id === pos.strategy_id && o.sec_id === pos.sec_id && o.exchange === pos.exchange && o.side === pos.side) {
find = !0;
break
}
}
find ? pos.volume > 0 ? t.positions[i] = pos : t.positions.splice(i, 1)  : pos.volume > 0 && t.positions.splice(0, 0, pos),
$rootScope.$apply()
}),
that.backend.setOnExecRpt(function (exec) {
that.fetch_sec_name(exec);
var t = that.get(exec.strategy_id);
switch (exec.exec_type) {
case 19:
t.execrpts ? (t.execrpts.push(exec), t.execrpts.length > 50 && t.execrpts.shift())  : t.execrpts = [
  exec
];
break;
default:
t.trans.push(exec),
t.trans.length > 50 && t.trans.shift()
}
}), $interval(function () {
$__0.list.forEach(function (t) {
$__0.backend.getIntradayIndicators(t.strategy_id).then(function (resp) {
var inds = resp.data.data || [
];
if (inds.length > 0) {
  var trends = inds.filter(function (ind) {
    return ind.hasOwnProperty('nav')
  }).map(function (ind) {
    return [1000 * ind.transact_time,
    ind.nav / 10000]
  });
  trends.length > 0 && (t.trends = trends)
}
}, function () {
})
})
}, 1800000)
},
$StrategyService = StrategyService;
$traceurRuntime.createClass(StrategyService, {
fetch_sec_name: function (pos) {
pos.sec_name = null;
var inst = this.md.symbolTypeAhead[pos.exchange.toUpperCase() + '.' + pos.sec_id.toUpperCase()];
inst && inst.forEach(function (ins) {
pos.sec_name = ins.sec_name
})
},
init: function () {
var that = this,
deferred = that.$q.defer();
return that.backend.getStrategies().then(function (response) {
0 !== response.status.code && deferred.resolve();
for (var _data = response.data.data, l = Math.min(_data.length, 200), i = 0; l > i; i++) {
var x = _data[i],
t = that.add_strategy_base(x);
that.fetch_indicators(t),
that.fetch_trends(t),
that.fetch_accounts(t),
that.fetch_orders(t, 20),
that.fetch_positions(t),
that.fetch_trans(t)
}
that.inited = !0,
deferred.resolve()
}, function () {
deferred.reject()
}),
deferred.promise
},
get_list: function () {
return this.list
},
get_non_live_strategies: function () {
return this.list.filter(function (item) {
return item.accounts.length ? item.accounts[0].account_type < 3 : !0
})
},
get_live_strategies: function () {
return this.list.filter(function (item) {
return item.accounts.length && 3 === item.accounts[0].account_type
})
},
fetch_accounts: function (t) {
var that = this,
deferred = that.$q.defer();
return that.backend.getOrderRoute(t.strategy_id).then(function (resp) {
if (0 !== resp.data.status.code) deferred.reject();
 else {
var _accs = resp.data.data || [
];
_accs.length && (t.accounts.length = 0, _accs.forEach(function (acc) {
  var item = that.AccountService.get(acc.account_id);
  t.accounts.push(item)
})),
deferred.resolve(t.accounts)
}
}, function () {
deferred.reject()
}),
deferred.promise
},
fetch_indicators: function (t) {
var that = this,
deferred = that.$q.defer();
return t ? that.backend.getIndicator(t.strategy_id).then(function (res) {
if (res.hasOwnProperty('data') && 0 === res.data.status.code) {
var _ind = res.data.data[0];
_ind.transact_time *= 1000,
that.gen_indicators(_ind, t),
deferred.resolve(t.indicators)
} else deferred.reject()
}, function () {
deferred.reject()
})  : deferred.reject(),
deferred.promise
},
gen_indicators: function (_ind, t) {
var keys = Object.keys(_ind);
keys.forEach(function (k) {
function _get_class(v) {
return - 1 !== $.inArray(k, [
  'nav',
  'win_ratio',
  'max_drawdown',
  'risk_ratio'
]) ? '' : v > 0 ? 'red' : 'green'
}
if ( - 1 === $.inArray(k, [
'strategy_id',
'transact_time'
])) {
var v = _ind[k],
u = '',
p = 2;
- 1 !== $.inArray(k, [
  'annual_return',
  'max_drawdown',
  'risk_ratio',
  'profit_ratio',
  'win_ratio',
  'daily_return'
]) && (v = 100 * v, u = '%'),
- 1 !== $.inArray(k, [
  'trade_count',
  'win_count',
  'lose_count'
]) && (p = 0),
t.indicators[k] = {
  name: k,
  value: v,
  unit: u,
  color_class: _get_class(v),
  precision: p
}
}
})
},
fetch_trends: function (t) {
var the_promises = [
],
that = this,
deferred1 = that.$q.defer();
this.backend.getLastNDailyIndicators(t.strategy_id, 60).then(function (resp) {
var inds = resp.data.data || [
];
inds.length && (t.long_trends.length = 0, inds.reverse().forEach(function (ind) {
t.long_trends.push([1000 * ind.transact_time,
Number.parseFloat((ind.nav / 10000).toFixed(2))])
})),
deferred1.resolve()
}, function () {
deferred1.reject()
}),
the_promises.push(deferred1.promise);
var deferred2 = that.$q.defer();
return this.backend.getIntradayIndicators(t.strategy_id).then(function (resp) {
var inds = resp.data.data || [
];
inds.length && (t.trends.length = 0, inds.forEach(function (ind) {
ind.nav && t.trends.push([1000 * ind.transact_time,
ind.nav / 10000])
})),
deferred2.resolve()
}, function () {
deferred2.reject()
}),
the_promises.push(deferred2.promise),
this.$q.all(the_promises)
},
fetch_unfinishedOrders: function (t) {
if (t) {
var that = (this.md, this);
that.backend.getUnfinishedOrders(t.strategy_id).success(function (resp) {
var _data = [
].concat(resp.data || [
]);
_data.length && (t.unfinished_orders.length = 0, _data.forEach(function (x) {
  that.fetch_sec_name(x),
  t.unfinished_orders.push(x)
}))
})
}
},
fetch_cash: function (t) {
var that = this,
deferred = this.$q.defer();
return t ? that.backend.getCash(t.strategy_id).then(function (resp) {
resp.data && resp.data.data && resp.data.data.length ? (t.cash = resp.data.data[0], deferred.resolve(t.cash))  : deferred.reject()
}, function () {
deferred.reject()
})  : deferred.reject(),
deferred.promise
},
fetch_positions: function (t) {
var that = this,
deferred = this.$q.defer();
if (t) {
{
that.md
}
that.backend.getPositions(t.strategy_id).then(function (resp) {
var _ps = [
].concat(resp.data.data || [
]);
t.positions.length = 0,
_ps.length && (_ps.forEach(function (x) {
  x.exchange = x.exchange || '',
  that.fetch_sec_name(x),
  t.positions.push(x)
}), t.positions.length && t.positions.length > 0 && (t.positions[0].sec_name || t.positions.forEach(function (tr) {
  that.fetch_sec_name(tr)
}))),
deferred.resolve(t.positions)
}, function () {
deferred.reject()
})
} else deferred.reject();
return deferred.promise
},
fetch_orders: function (t, limit) {
var that = this,
deferred = this.$q.defer();
if (t) {
var count = (this.md, limit || 20);
that.backend.getLastNOrder(t.strategy_id, count).then(function (resp) {
var _data = [
].concat(resp.data.data || [
]);
_data.length ? (t.orders.length = 0, _data.forEach(function (x) {
  that.fetch_sec_name(x),
  t.orders.push(x)
}))  : t.orders = [
],
deferred.resolve(t.orders)
}, function () {
deferred.reject()
})
} else deferred.reject();
return deferred.promise
},
fetch_trans: function (t, limit) {
var that = this,
deferred = this.$q.defer();
if (t) {
var count = (this.md, limit || 30);
this.backend.getLastNTrades(t.strategy_id, count).then(function (resp) {
var _data = [
].concat(resp.data.data || [
]);
_data.length && (t.trans.length = 0, _data.forEach(function (x) {
  that.fetch_sec_name(x),
  t.trans.push(x)
}), t.trans.length && t.trans.length > 0 && (t.trans[0].sec_name || t.trans.forEach(function (tr) {
  that.fetch_sec_name(tr)
}))),
deferred.resolve(t.trans)
}, function () {
deferred.reject()
})
} else deferred.reject();
return deferred.promise
},
cancel_order_sent: function (t, cl_ord_id) {
t.unfinished_orders.filter(function (o) {
return o.cl_ord_id == cl_ord_id
}).forEach(function (o) {
return o.status = 6
}),
t.orders.filter(function (o) {
return o.cl_ord_id == cl_ord_id
}).forEach(function (o) {
return o.status = 6
})
},
update_orders: function (t, order) {
for (var found = [
], i = 0, limit = t.orders.length; limit > i; i++) {
var o = t.orders[i];
o.cl_ord_id === order.cl_ord_id && found.push(i)
}
if (found.length > 0) {
for (var x = 0; x < found.length - 1; x++) t.orders.splice(found[x], 1);
var s = found[found.length - 1];
angular.extend(t.orders[s], order)
} else t.orders.push(order),
t.orders.length > 200 && t.orders.shift();
return t
},
update_unfinished_orders: function (t, order) {
for (var i = 0, limit = t.unfinished_orders.length, found = [
]; limit > i; i++) {
var o = t.unfinished_orders[i];
if (o.cl_ord_id === order.cl_ord_id) {
found.push(i);
break
}
}
if (found.length) {
for (var x = 0; x < found.length - 1; x++) t.orders.splice(found[x], 1);
var s = found[found.length - 1];
- 1 === $.inArray(order.status, [
3,
5,
8,
12
]) ? t.unfinished_orders[s] = order : t.unfinished_orders.splice(s, 1)
} else {
if ( - 1 !== $.inArray(order.status, [
3,
5,
8,
12
])) return;
t.unfinished_orders.splice(0, 0, order)
}
},
find_strategy_by_id: function (str_id) {
var i = this.str_map_index[str_id];
return void 0 === i || null === i ? null : this.list[i]
},
get strategies() {
return this.list
},
get: function (id) {
return this.find_strategy_by_id(id)
},
remove: function (id) {
return this.backend.deleteStrategy(id)
},
save: function (obj) {
var that = this,
deferred = that.$q.defer();
if (obj.strategy_id) this.backend.updateStrategy(obj).then(function () {
var t = that.get(obj.strategy_id);
angular.extend(t.base, obj),
t.name = obj.name,
deferred.resolve(t)
}, function (resp) {
deferred.reject(resp)
});
 else {
var default_config = {
category: '2',
is_local: !1,
is_public: !1
};
angular.extend(obj, default_config),
this.backend.insertStrategy(obj).then(function (resp) {
var res = resp.data.data[0];
that.add_strategy_base(res);
var the_strategy = that.get(res.strategy_id);
the_strategy && that.setOrderRoute(the_strategy.strategy_id, [
  'prosim'
]),
that.fetch_indicators(the_strategy),
deferred.resolve(the_strategy)
}, function (resp) {
deferred.reject(resp)
})
}
return deferred.promise
},
add_strategy_base: function (str_base) {
var t = {
strategy_id: str_base.strategy_id,
name: str_base.name,
base: str_base,
trends: [
],
long_trends: [
],
indicators: {
},
accounts: [
],
positions: [
],
cash: {
},
orders: [
],
unfinished_orders: [
],
trans: [
],
running_status: str_base.status
};
return this.list.push(t),
this.str_map_index[str_base.strategy_id] = this.list.length - 1,
this.$rootScope.$broadcast('event:add_strategy', {
strategy_id: str_base.strategy_id
}),
t
},
del_local_strategy: function (str_id) {
var i = this.str_map_index[str_id];
if (void 0 !== i && null !== i) {
this.list.splice(i, 1),
delete this.str_map_index[str_id];
for (var x = 0; x < this.list.length; x++) this.str_map_index[this.list[x].strategy_id] = x;
this.$rootScope.$broadcast('event:del_strategy', {
strategy_id: str_id
})
}
},
on_click_account: function (acc) {
this.AccountService.on_click_account(acc)
},
setInitCallBack: function (fun) {
this.initCb.push(fun)
},
fireInitCallBack: function () {
this.initCb.forEach(function (fun) {
'function' == typeof fun && fun()
})
},
setOrderRoute: function (strategy_id, selected_account_ids) {
var that = this,
deferred = this.$q.defer();
return that.backend.setOrderRoute(strategy_id, selected_account_ids).then(function () {
var the_strategy = that.get(strategy_id);
that.fetch_accounts(the_strategy).then(function () {
deferred.resolve()
}, function () {
deferred.reject()
})
}, function () {
deferred.reject()
}),
deferred.promise
},
getTradeType: function (strategy_id) {
if (!strategy_id) return null;
var the_strategy = this.get(strategy_id);
return the_strategy && the_strategy.accounts ? 0 === the_strategy.accounts.length ? null : 1 === the_strategy.accounts.length && [
'stdsim',
'prosim'
].indexOf(the_strategy.accounts[0].account_id) > - 1 ? 'simtrade' : 'realtrade' : null
}
}, {
factory: function ($timeout, $filter, $q, td, md, account_service, $log, $rootScope, toastr, $interval) {
return new $StrategyService($timeout, $filter, $q, td, md, account_service, $log, $rootScope, toastr, $interval)
}
}),
StrategyService.factory.$inject = [
'$timeout',
'$filter',
'$q',
'gmsdk.td',
'gmsdk.md',
'AccountService',
'$log',
'$rootScope',
'toastr',
'$interval'
];
var $__default = StrategyService
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var BacktestListCtrl = function ($scope, $rootScope, $modal, BacktestService, toastr) {
var $__0 = this;
this.$scope = $scope,
this.$rootScope = $rootScope,
this.$modal = $modal,
this.BacktestService = BacktestService,
this.toastr = toastr,
this.strategies = BacktestService.getRawList(),
this.getStrategyListWithBacktest(),
$scope.$on('event:new_backtest', function () {
$__0.getStrategyListWithBacktest()
}),
this.currentStrategy = $rootScope.backtestStrategySelected ? $rootScope.backtestStrategySelected : this.strategies.length ? this.strategies[0] : {
backtests: [
]
},
this.select(this.currentStrategy)
};
$traceurRuntime.createClass(BacktestListCtrl, {
toggleItem: function (strategy, backtest) {
backtest.selected = !backtest.selected,
strategy.backtests.forEach(function (backtest) {
return strategy.allSelected &= backtest.selected
})
},
toggleList: function (strategy) {
strategy.backtests.length && (strategy.allSelected = !strategy.allSelected, strategy.backtests.forEach(function (backtest) {
return backtest.selected = strategy.allSelected
}))
},
getStrategyListWithBacktest: function () {
var $__0 = this;
this.BacktestService.getList().then(function (strategies) {
$__0.strategies = strategies
}).then(function () {
$__0.highlightCurrent($__0.currentStrategy)
})
},
select: function (strategy) {
this.currentStrategy.allSelected = !1,
this.currentStrategy.backtests && this.currentStrategy.backtests.forEach(function (bt) {
return bt.selected = !1
}),
strategy.backtests || this.toastr.error('后台错误', '查询' + strategy.name + '回测报告出错'),
this.strategies.forEach(function (strategy) {
strategy.is_active = !1
}),
strategy.is_active = !0,
this.currentStrategy = strategy,
this.$rootScope.backtestStrategySelected = strategy
},
highlightCurrent: function (the_strategy) {
this.strategies.forEach(function (strategy) {
strategy.is_active = strategy.strategy_id === the_strategy.strategy_id
})
},
deleteBacktest: function (bid) {
var $__0 = this;
this.BacktestService.deleteConfirm().then(function (ok) {
ok && $__0.BacktestService.deleteBacktest(bid)
})
},
deleteSelected: function (strategy) {
var $__0 = this,
toDelete = strategy.backtests.filter(function (bt) {
return bt.selected
}).map(function (bt) {
return bt.id
});
toDelete.length && this.BacktestService.deleteConfirm().then(function (ok) {
ok && $__0.BacktestService.deleteBacktests(toDelete)
})
},
deleteAllBacktestsOfStrategy: function (sid) {
var $__0 = this;
this.BacktestService.deleteConfirm().then(function (ok) {
ok && $__0.BacktestService.deleteStrategyBacktest(sid)
})
}
}, {
}),
BacktestListCtrl.$inject = [
'$scope',
'$rootScope',
'$modal',
'BacktestService',
'toastr'
];
var $__default = BacktestListCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var BacktestDetailCtrl = function ($scope, $filter, $modal, BacktestService, MessageService) {
this.$scope = $scope,
this.$modal = $modal,
this.$filter = $filter,
this.BacktestService = BacktestService,
$('body').addClass('panel-expand'),
this.backtestId = $scope.$state.params.backtest_id,
MessageService.removeBacktest(this.backtestId),
this.progress = 0,
this.currentTab = 'perf',
$scope.$on('$destroy', function () {
$('body').removeClass('panel-expand')
}),
this.ordersSheetHeader = [
'时间',
'代码',
'方向',
'价格',
'数量',
'状态',
'已成交量',
'成交均价',
'拒绝原因'
],
this.posSheetHeader = [
'时间',
'代码',
'方向',
'当前价',
'数量',
'成本价',
'金额',
'浮盈'
],
this.getBacktest(),
$scope.$on('event:backtest_data', this.onNewBacktest.bind(this))
};
$traceurRuntime.createClass(BacktestDetailCtrl, {
onNewBacktest: function (evt, backtest) {
backtest.id === this.backtestId && (this.$scope.backtest = backtest, this.progress = backtest.progress)
},
exportJson: function () {
var backtestJson = angular.copy(this.$scope.backtest);
delete backtestJson.strategy,
saveAs(new Blob([JSON.stringify(backtestJson)], {
type: 'data:text/json;charset=utf8'
}), '回测结果.json')
},
exportLog: function () {
var logs = this.$scope.backtest.logs ? this.$scope.backtest.logs.join('\r\n')  : null;
saveAs(new Blob([logs], {
type: 'data:text/plain;charset=utf8'
}), '交易日志.txt')
},
exportOrders: function () {
var $__0 = this,
orders = this.$scope.backtest.orders.map(function (order) {
return {
'时间': $__0.$filter('date') (order.sendingTime, 'yyyy-MM-dd HH:mm:ss.sss'),
'代码': order.symbol,
'方向': $__0.$filter('direction') ([order.side,
order.positionEffect]),
'价格': $__0.$filter('price') ([order.price,
order.orderType]),
'数量': $__0.$filter('number') (order.volume, 0),
'状态': $__0.$filter('status') (order.status),
'已成交量': $__0.$filter('number') (order.filledVolume, 2),
'成交均价': $__0.$filter('number') (order.filledVwap, 2),
'拒绝原因': order.ordRejReasonDetail
}
});
if (orders.length) {
var encoded = new CSV(orders, {
header: !0
}).encode();
saveAs(new Blob(['﻿' + encoded], {
type: 'data:text/csv;charset=utf8'
}), '交易明细.csv')
}
},
exportPos: function () {
var $__0 = this,
pos = [
];
if (this.$scope.backtest.dailyStats.forEach(function (st) {
st.dailyPositions && st.dailyPositions.length && st.dailyPositions.forEach(function (p) {
pos.push({
  '时间': $__0.$filter('date') (st.utc, 'yyyy-MM-dd HH:mm:ss.sss'),
  '代码': p.exchange + '.' + p.secId,
  '方向': $__0.$filter('direction') ([p.side,
  p.positionEffect]),
  '数量': $__0.$filter('number') (p.volume, 0),
  '当前价': $__0.$filter('number') (p.price, 2),
  '成交价': $__0.$filter('number') (p.vwap, 2),
  '金额': $__0.$filter('number') (p.amount, 2),
  '浮盈': $__0.$filter('number') (p.fpnl, 2)
})
})
}), pos.length) {
var encoded = new CSV(pos, {
header: !0
}).encode();
saveAs(new Blob(['﻿' + encoded], {
type: 'data:text/csv;charset=utf8'
}), '持仓记录.csv')
}
},
shareResult: function () {
$('#backtest-result').slideToggle(400, function () {
$('#backtest-share').slideToggle()
})
},
quitShare: function () {
$('#backtest-share').slideToggle(400, function () {
$('#backtest-result').slideToggle()
})
},
changeTab: function (val) {
this.currentTab = val,
this.$scope.$broadcast('event:tab-change', null)
},
getBacktest: function () {
var $__0 = this;
this.BacktestService.getBacktestDetail(this.backtestId).then(function (resp) {
$__0.$scope.backtest = resp,
$__0.$scope.$broadcast('event:backtest_data', $__0.$scope.backtest)
}, function () {
$__0.$scope.$state.go('app.backtest.list')
})
}
}, {
}),
BacktestDetailCtrl.$inject = [
'$scope',
'$filter',
'$modal',
'BacktestService',
'MessageService'
];
var $__default = BacktestDetailCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var BacktestPerfChartCtrl = function ($scope, $filter, md, typeahead) {
var $__0 = this,
seriesBinarySearch = this.seriesBinarySearch,
filter = $filter;
this.typeahead = typeahead,
this.symbolSource = md.symbolTypeAhead;
var seriesDailyReturn,
seriesProfitRatio,
seriesProfitRatioBenchReturn,
seriesPositiveTransactions,
seriesNegativeTransactions,
cHeight = $('#chart-container').height(),
heightFactor = cHeight / 500,
y0Pos = {
height: 150 * heightFactor
},
y1Pos = {
height: 100 * heightFactor,
top: y0Pos.height + 40
},
y2Pos = {
height: 100 * heightFactor,
top: y1Pos.top + y1Pos.height + 40
};
$('.chart-label.daily-returns').css('top', y1Pos.top - 24),
$('.chart-label.transactions').css('top', y2Pos.top - 24),
Highcharts.setOptions({
global: {
useUTC: !1,
timezoneOffset: - (new Date).getTimezoneOffset()
},
lang: {
thousandsSep: ',',
numericSymbols: [
' 千',
' 百万'
],
rangeSelectorZoom: '缩放',
rangeSelectorFrom: '从',
rangeSelectorTo: '到',
weekdays: [
'周日',
'周一',
'周二',
'周三',
'周四',
'周五',
'周六'
],
shortMonths: [
'一月',
'二月',
'三月',
'四月',
'五月',
'六月',
'七月',
'八月',
'九月',
'十月',
'十一月',
'十二月'
],
months: [
'一月',
'二月',
'三月',
'四月',
'五月',
'六月',
'七月',
'八月',
'九月',
'十月',
'十一月',
'十二月'
]
}
});
var defaultChartConfig = {
options: {
subtitle: {
text: null
},
chart: {
animation: !1,
backgroundColor: 'transparent',
spacingLeft: 0,
spacingRight: 0,
alignTicks: !1,
marginBottom: 20,
spacingBottom: 0
},
credits: {
enabled: !1
},
navigator: {
enabled: !0,
adaptToUpdatedData: !1,
series: {
  color: 'transparent',
  lineWidth: 0
},
height: 20,
maskFill: 'rgba(180, 198, 220, 0.75)',
xAxis: {
  ordinal: !1,
  dateTimeLabelFormats: {
    second: '%H:%M:%S',
    minute: '%H:%M:%S',
    hour: '%H:%M',
    day: '%Y<br>%m-%d',
    week: '%m-%e',
    month: '%Y-%m',
    year: '%Y'
  }
}
},
scrollbar: {
enabled: !0,
liveRedraw: !1
},
rangeSelector: {
enabled: !1
},
plotOptions: {
series: {
  marker: {
    enabled: !1,
    states: {
      hover: {
        radiusPlus: 0,
        lineWidthPlus: 1,
        lineColor: '#fff'
      }
    },
    symbol: 'circle'
  },
  states: {
    hover: {
      radiusPlus: 0,
      lineWidthPlus: 0,
      halo: {
        size: 0
      }
    }
  },
  animation: !1,
  point: {
    events: {
      mouseOver: function () {
        var $__0 = this,
        series = this.series.chart.series;
        series.forEach(function (series) {
          series.data.filter(function (datum) {
            return datum.x === $__0.x
          }).forEach(function (point) {
            return point.setState('hover')
          })
        }),
        this.series.chart.xAxis[0].addPlotLine({
          value: this.x,
          color: 'lightgray',
          width: 1,
          id: 'cross-vertical'
        }),
        $('#date-chart-label').text(Highcharts.dateFormat('%Y-%m-%d', this.x));
        var profitRatio = seriesBinarySearch(seriesProfitRatio, this.x),
        dailyReturn = seriesBinarySearch(seriesDailyReturn, this.x),
        profitRatioBenchmark = seriesBinarySearch(seriesProfitRatioBenchReturn, this.x),
        positiveTransaction = seriesBinarySearch(seriesPositiveTransactions, this.x),
        negativeTransaction = seriesBinarySearch(seriesNegativeTransactions, this.x),
        transactions = [
        ];
        if (positiveTransaction && positiveTransaction.length && transactions.push('买 ￥' + filter('number') (positiveTransaction[1], 0)), negativeTransaction && Math.abs(negativeTransaction.length) && transactions.push(' 卖 (￥' + filter('number') (Math.abs(negativeTransaction[1]), 0) + ')'), $('#transactions-value').text(transactions.length ? transactions.join(',')  : ''), dailyReturn) {
          var dailyPnl = dailyReturn[1].toFixed(0),
          dailyPnlEle = $('#daily-returns-value');
          dailyPnlEle.text('￥' + filter('number') (dailyPnl, 0)),
          dailyPnlEle.addClass(dailyPnl > 0 ? 'red' : 'green')
        }
        if (profitRatio) {
          var perfVal = profitRatio[1],
          perfValEle = $('#performance-value');
          perfValEle.text(filter('number') (100 * perfVal, 2) + '%'),
          perfValEle.addClass(perfVal > 0 ? 'red' : 'green')
        }
        if (profitRatioBenchmark) {
          var benchmarkVal = profitRatioBenchmark[1],
          benchmarkEle = $('#benchmark-value');
          benchmarkEle.text(filter('number') (100 * benchmarkVal, 2) + '%'),
          benchmarkEle.addClass(benchmarkVal > 0 ? 'red' : 'green')
        }
      },
      mouseOut: function () {
        var $__0 = this,
        series = this.series.chart.series;
        series.forEach(function (series) {
          series.data.filter(function (datum) {
            return datum.x === $__0.x
          }).forEach(function (point) {
            return point.setState('')
          })
        });
        try {
          this.series.chart.xAxis[0].removePlotLine('cross-vertical')
        } catch (e) {
        }
        $('#date-chart-label').text(''),
        $('#transactions-value').text('');
        var dailyPnlEle = $('#daily-returns-value');
        dailyPnlEle.text(''),
        dailyPnlEle.removeClass('red'),
        dailyPnlEle.removeClass('green');
        var perfValEle = $('#performance-value');
        perfValEle.text(''),
        perfValEle.removeClass('red'),
        perfValEle.removeClass('green');
        var benchmarkEle = $('#benchmark-value');
        benchmarkEle.text(''),
        benchmarkEle.removeClass('red'),
        benchmarkEle.removeClass('green')
      }
    }
  }
},
column: {
  stacking: 'normal'
}
},
exporting: !1,
legend: {
enabled: !1
},
title: {
text: null
},
xAxis: {
type: 'datetime',
ordinal: !1,
dateTimeLabelFormats: {
  second: '%m-%d<br/>%H:%M:%S',
  minute: '%m-%d<br/>%H:%M',
  hour: '%m-%d<br/>%H:%M',
  day: '%Y<br/>%m-%d',
  week: '%Y-%m-%d',
  month: '%Y-%m',
  year: '%Y'
},
gridLineWidth: 1,
gridLineColor: 'lightgray',
tickAmount: 0,
lineWidth: 0,
minRange: 1,
startOnTick: !0,
endOnTick: !0
},
yAxis: [
{
  height: y0Pos.height,
  labels: {
    align: 'right',
    x: - 3,
    formatter: function () {
      return filter('number') (100 * parseFloat(this.value), 2) + '%'
    }
  },
  align: 'right',
  opposite: !0,
  title: {
    text: null
  },
  minorGridLineWidth: 1,
  minorTickInterval: 'auto',
  minorTickWidth: 0,
  lineWidth: 1,
  plotLines: [
    {
      value: 0,
      color: 'black',
      width: 1.5
    }
  ]
},
{
  height: y1Pos.height,
  top: y1Pos.top,
  labels: {
    align: 'right',
    x: - 3
  },
  align: 'right',
  opposite: !0,
  title: {
    text: null
  },
  offset: 0,
  tickAmount: 3,
  lineWidth: 1,
  plotLines: [
    {
      value: 0,
      color: 'black',
      width: 1.5
    }
  ]
},
{
  height: y2Pos.height,
  top: y2Pos.top,
  labels: {
    align: 'right',
    x: - 3
  },
  align: 'right',
  opposite: !0,
  title: {
    text: null
  },
  tickAmount: 3,
  offset: 0,
  lineWidth: 1,
  plotLines: [
    {
      value: 0,
      color: 'black',
      width: 1.5
    }
  ]
}
],
tooltip: {
enabled: !1
},
useHighStocks: !0
}
};
this.chartConfig = defaultChartConfig;
var initChart = function (evt, bt) {
seriesDailyReturn = bt.dailyStats.map(function (st) {
return [st.utc,
st.dailyPnl]
}),
seriesProfitRatio = bt.dailyStats.map(function (st) {
return [st.utc,
st.profitRatio]
}),
seriesProfitRatioBenchReturn = bt.dailyStats.map(function (st) {
return [st.utc,
st.profitRatioBench]
}),
seriesPositiveTransactions = bt.dailyStats.map(function (st) {
return [st.utc,
st.dailyBuy || 0]
}),
seriesNegativeTransactions = bt.dailyStats.map(function (st) {
return [st.utc,
st.dailySell ? - st.dailySell : 0]
}),
$__0.chartConfig = $.extend(!0, {
}, defaultChartConfig, {
series: [
{
  data: seriesProfitRatio,
  type: 'area',
  name: 'cumReturn',
  yAxis: 0,
  color: '#4572A7',
  fillOpacity: 0.2
},
{
  data: seriesProfitRatioBenchReturn,
  type: 'line',
  name: 'benchmarkReturn',
  yAxis: 0,
  lineWidth: 1,
  color: '#aa4643'
},
{
  type: 'column',
  name: 'dailyPnl',
  data: seriesDailyReturn,
  color: '#4572A7',
  yAxis: 1
},
{
  data: seriesPositiveTransactions,
  type: 'column',
  name: 'positiveTransactions',
  yAxis: 2,
  color: '#C47D7A',
  fillOpacity: 0.2,
  stack: 'transactions'
},
{
  data: seriesNegativeTransactions,
  type: 'column',
  name: 'negativeTransactions',
  yAxis: 2,
  color: '#54C07C',
  fillOpacity: 0.2,
  stack: 'transactions'
}
],
options: {
xAxis: {
  min: bt.dailyStats[0].utc,
  max: bt.dailyStats[bt.dailyStats.length - 1].utc
}
}
});
var benchVal = '基准';
if (bt.req && bt.req.benchSymbol) {
var symbol = $__0.typeahead.getByExactSymbol($__0.symbolSource, bt.req.benchSymbol),
secName = null;
try {
secName = symbol.sec_name
} catch (e) {
}
benchVal = secName ? '基准(' + secName + ')' : benchVal
}
$('#bench-symbol').text(benchVal)
};
$scope.$parent.backtest && $scope.$parent.backtest.dailyStats && initChart(null, $scope.$parent.backtest),
$scope.$on('event:backtest_data', function (evt, backtest) {
var isThisBacktest = backtest.id === $scope.$state.params.backtest_id,
isCompleted = backtest.progress && 1 == backtest.progress,
hasValidData = backtest.dailyStats && backtest.dailyStats.length;
isThisBacktest && isCompleted && hasValidData && initChart(null, backtest)
}),
$scope.$on('event:page-sidebar-minified', this.handleResize.bind(this))
};
$traceurRuntime.createClass(BacktestPerfChartCtrl, {
handleResize: function () {
this.chartConfig.getHighcharts().reflow()
},
seriesBinarySearch: function (arr, el) {
for (var k, m = 0, n = arr.length - 1; n >= m; ) {
k = n + m >> 1;
var cmp = el - arr[k][0];
if (cmp > 0) m = k + 1;
 else {
if (!(0 > cmp)) return arr[k];
n = k - 1
}
}
return null
}
}, {
}),
BacktestPerfChartCtrl.$inject = [
'$scope',
'$filter',
'gmsdk.md',
'util.typeahead'
];
var $__default = BacktestPerfChartCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var BacktestOrderCtrl = function ($scope, $filter, md, typeahead) {
var $__0 = this;
this.$filter = $filter,
this.typeahead = typeahead,
this.symbolSource = md.symbolTypeAhead,
this.dataGrouped = !0,
this.groupCollapsed = !1,
this.idLoading = !0,
this.columns = [
{
id: 'time',
name: '时间',
field: 'sendingTime',
type: 'text',
width: 180,
sortable: !0,
resizable: !1,
formatter: this.dateTimeFormatter.bind(this)
},
{
id: 'symbol',
name: '代码',
field: 'symbol',
type: 'text',
width: 80,
sortable: !0,
minWidth: 140,
formatter: this.secNameFormatter.bind(this)
},
{
id: 'direction',
name: '方向',
type: 'text',
width: 50,
formatter: this.directionFormatter.bind(this)
},
{
id: 'price',
name: '价格',
type: 'number',
width: 80,
formatter: this.priceFormatter.bind(this)
},
{
id: 'volume',
name: '数量',
field: 'volume',
type: 'number',
width: 80,
sortable: !0,
formatter: this.intergerFormatter.bind(this)
},
{
id: 'status',
name: '状态',
field: 'status',
type: 'text',
width: 80,
sortable: !0,
formatter: this.orderStatusFormatter.bind(this)
},
{
id: 'filledVolume',
name: '已成交量',
field: 'filledVolume',
type: 'number',
width: 80,
sortable: !0,
formatter: this.intergerFormatter.bind(this)
},
{
id: 'filledVwap',
name: '成交均价',
field: 'filledVwap',
type: 'number',
width: 80,
sortable: !0,
formatter: this.decimalFormatter.bind(this)
},
{
id: 'ordRejReasonDetail',
name: '拒绝原因',
field: 'ordRejReasonDetail',
type: 'text',
width: 80,
sortable: !0
}
],
this.columns.forEach(function (col) {
col.cssClass = 'column ' + humps.decamelize(col.id, {
separator: '-'
}) + '-column ' + col.type + '-column',
col.headerCssClass = 'header ' + humps.decamelize(col.id, {
separator: '-'
}) + '-header'
}),
this.options = {
enableCellNavigation: !0,
enableColumnReorder: !1,
fullWidthRows: !0,
syncColumnCellResize: !0,
rowHeight: 32,
forceFitColumns: !0
},
Handlebars.registerHelper('dateFilter', this.dateFilter.bind(this)),
Handlebars.registerHelper('positionAggregator', this.positionAggregator.bind(this)),
this.groupRowTemplate = Handlebars.compile('\n         <div class="group-row-cell">\n         <span class="icon">\n           {{#if collapsed}}\n                 <i class="fa fa-chevron-down"></i>\n                 {{else}}\n                 <i class="fa fa-chevron-right"></i>\n                 {{/if}}\n         </span>\n\n                 <span class="group-date">{{dateFilter value}}</span>\n             <span class="dash">-</span>\n             {{#positionAggregator value \'buyAmount\'}}{{/positionAggregator}}\n             {{#positionAggregator value \'sellAmount\'}}{{/positionAggregator}}\n             <span class="transaction-count">( {{ count }}项委托 )</span>\n         </div>\n        ');
var groupItemMetadataProvider = new Slick.Data.GroupItemMetadataProvider({
groupFormatter: this.groupFormatter.bind(this)
});
this.dataView = new Slick.Data.DataView({
groupItemMetadataProvider: groupItemMetadataProvider,
inlineFilters: !1,
enableTextSelectionOnCells: !1
}),
this.grid = new Slick.Grid('#order-grid', this.dataView, this.columns, this.options),
this.grid.registerPlugin(groupItemMetadataProvider),
this.grid.setSelectionModel(new Slick.RowSelectionModel),
this.dataView.onRowCountChanged.subscribe(function () {
$__0.grid.updateRowCount(),
$__0.grid.render()
}),
this.dataView.onRowsChanged.subscribe(function (e, args) {
$__0.grid.invalidateRows(args.rows),
$__0.grid.render()
}),
this.grid.onClick.subscribe(this.handleGroupClick.bind(this)),
this.grid.onSort.subscribe(function (e, args) {
$__0.sortCol = args.sortCol.field,
$__0.dataView.sort($__0.comparer.bind($__0), args.sortAsc)
}),
$scope.$parent.backtest && $scope.$parent.backtest.orders && this.initGrid(null, $scope.$parent.backtest),
$scope.$on('event:backtest_data', function (evt, backtest) {
var isThisBacktest = backtest.id === $scope.$state.params.backtest_id,
isCompleted = backtest.progress && 1 == backtest.progress;
isThisBacktest && isCompleted && $__0.initGrid(null, backtest)
});
var resizeHandler = this.handleResize.bind(this);
$(window).resize(resizeHandler),
$scope.$on('event:page-sidebar-minified', resizeHandler),
$scope.$on('event:tab-change', function () {
setTimeout(resizeHandler, 0)
})
};
$traceurRuntime.createClass(BacktestOrderCtrl, {
onNewBacktest: function (evt, backtest) {
backtest.id === $scope.$state.params.backtest_id && this.initGrid(null, backtest)
},
initGrid: function (evt, bt) {
this.isLoading = !1,
this.dataView.beginUpdate(),
this.loadData(bt),
this.groupByDate(),
this.dataView.endUpdate()
},
loadData: function (bt) {
var $__0 = this;
if (bt.orders && bt.dailyStats) {
var data = bt.orders;
data.forEach(function (datum, i) {
datum.id = i
}),
this.dailyStats = {
},
bt.dailyStats.forEach(function (item) {
$__0.dailyStats[item.utc] = item
}),
this.dataView.setItems(bt.orders)
}
},
handleResize: function () {
this.grid.resizeCanvas(),
$('.slick-viewport').css('height', $('#order-grid').height() - 29)
},
handleGroupClick: function (e) {
var cell = this.grid.getCellFromEvent(e),
item = this.dataView.getItem(cell.row);
item.__group && (item.collapsed ? this.dataView.expandGroup(item.groupingKey)  : this.dataView.collapseGroup(item.groupingKey))
},
expandAllGroups: function () {
this.groupCollapsed = !0,
this.dataView.expandAllGroups()
},
collapseAllGroups: function () {
this.groupCollapsed = !1,
this.dataView.collapseAllGroups()
},
toggleGrouping: function () {
this.dataGrouped ? (this.dataGrouped = !1, this.dataView.setGrouping([]))  : (this.dataGrouped = !0, this.groupByDate())
},
comparer: function (a, b) {
var x = a[this.sortCol],
y = b[this.sortCol];
return x == y ? 0 : x > y ? 1 : - 1
},
groupByDate: function () {
this.dataView.setGrouping({
getter: this.getDate,
aggregators: [
],
aggregateCollapsed: !1,
lazyTotalsCalculation: !0
})
},
getDate: function (val) {
var e = new Date(val.sendingTime),
theDate = new Date(e.getFullYear(), e.getMonth(), e.getDate());
return theDate.getTime()
},
groupFormatter: function (row, cell, value, columnDef, item) {
return this.groupRowTemplate(item)
},
dateFilter: function (value) {
return this.$filter('date') (value, 'yyyy-MM-dd')
},
positionAggregator: function (val, arg) {
var amount = 0;
try {
amount = this.dailyStats[val][arg]
} catch (e) {
}
var ret;
switch (arg) {
case 'buyAmount':
ret = '<span class="transaction buy-amount red">买 ￥' + amount + ', </span>';
break;
case 'sellAmount':
ret = '<span class="transaction sell-amount blue">卖 (￥' + amount + ')</span>';
break;
default:
ret = ''
}
return amount ? ret : ''
},
dateTimeFormatter: function (row, cell, value) {
return this.dataGrouped ? this.$filter('date') (value, 'HH:mm:ss.sss')  : this.$filter('date') (value, 'yyyy-MM-dd HH:mm:ss.sss')
},
decimalFormatter: function (row, cell, value) {
return this.$filter('number') (value, 2)
},
intergerFormatter: function (row, cell, value) {
return this.$filter('number') (value, 0)
},
priceFormatter: function (row, cell, value, columnDef, dataContext) {
return this.$filter('price') ([dataContext.price,
dataContext.orderType])
},
orderStatusFormatter: function (row, cell, value) {
return this.$filter('status') (value)
},
directionFormatter: function (row, cell, value, columnDef, dataContext) {
return this.$filter('direction') ([dataContext.side,
dataContext.positionEffect])
},
secNameFormatter: function (row, cell, value) {
var symbol = this.typeahead.getByExactSymbol(this.symbolSource, value),
secName = null;
try {
secName = symbol.sec_name || null
} catch (e) {
}
return secName ? value + ' - ' + secName : value
}
},
{
}), BacktestOrderCtrl.$inject = [
'$scope',
'$filter',
'gmsdk.md',
'util.typeahead'
]; var $__default = BacktestOrderCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var BacktestPositionCtrl = function ($scope, $filter, md, typeahead) {
var $__0 = this;
this.$filter = $filter,
this.typeahead = typeahead,
this.symbolSource = md.symbolTypeAhead,
this.backtestId = $scope.$state.params.backtest_id,
this.dataGrouped = !0,
this.groupCollapsed = !1,
this.columns = [
{
id: 'time',
name: '时间',
field: 'utc',
type: 'text',
sortable: !0,
resizable: !1,
formatter: this.dateTimeFormatter.bind(this)
},
{
id: 'symbol',
name: '代码',
type: 'text',
field: 'symbol',
sortable: !0,
minWidth: 130,
formatter: this.secNameFormatter.bind(this)
},
{
id: 'direction',
name: '方向',
type: 'text',
width: 50,
formatter: this.directionFormatter.bind(this)
},
{
id: 'volume',
name: '数量',
field: 'volume',
type: 'number',
sortable: !0,
formatter: this.intergerFormatter.bind(this)
},
{
id: 'price',
name: '当前价',
field: 'price',
type: 'number',
sortable: !0,
formatter: this.decimalFormatter.bind(this)
},
{
id: 'vwap',
name: '成本价',
field: 'vwap',
type: 'number',
sortable: !0,
formatter: this.decimalFormatter.bind(this)
},
{
id: 'amount',
name: '金额',
field: 'amount',
type: 'number',
sortable: !0,
minWidth: 70,
groupTotalsFormatter: this.sumTotalsFormatter.bind(this),
formatter: this.returnFormatter.bind(this)
},
{
id: 'fpnl',
name: '浮盈',
field: 'fpnl',
type: 'number',
sortable: !0,
minWidth: 60,
groupTotalsFormatter: this.sumTotalsFormatter.bind(this),
formatter: this.returnFormatter.bind(this)
}
],
this.columns.forEach(function (col) {
col.cssClass = 'column ' + humps.decamelize(col.id, {
separator: '-'
}) + '-column ' + col.type + '-column',
col.headerCssClass = 'header ' + humps.decamelize(col.id, {
separator: '-'
}) + '-header'
}),
this.options = {
enableCellNavigation: !0,
enableColumnReorder: !1,
fullWidthRows: !0,
syncColumnCellResize: !0,
rowHeight: 32,
forceFitColumns: !0
},
Handlebars.registerHelper('dateFilter', this.dateFilter.bind(this)),
Handlebars.registerHelper('decimalFilter', this.decimalFilter.bind(this)),
this.groupRowTemplate = Handlebars.compile('\n         <span class="group-row-cell l7 r{{#if collapsed}}6{{else}}8{{/if}}">\n         <span class="icon">\n           {{#if collapsed}}\n                 <i class="fa fa-chevron-down"></i>\n                 {{else}}\n                 <i class="fa fa-chevron-right"></i>\n                 {{/if}}\n         </span>\n         <span class="group-date">{{ dateFilter value }}</span>\n         </span>\n           {{#if collapsed}}\n             {{#if amount}}\n                 <span class="slick-cell l6 r6 amount-column number-column {{amountClass}}">\n                     {{ decimalFilter amount }}\n                 </span>\n             {{/if}}\n             {{#if fpnl}}\n                 <span class="slick-cell l7 r7 fpnl-column number-column {{fpnlClass}}">\n                     {{ decimalFilter fpnl }}\n                 </span>\n             {{/if}}\n           {{/if}}\n        ');
var groupItemMetadataProvider = new Slick.Data.GroupItemMetadataProvider({
groupFormatter: this.groupFormatter.bind(this)
});
this.dataView = new Slick.Data.DataView({
groupItemMetadataProvider: groupItemMetadataProvider,
inlineFilters: !1,
enableTextSelectionOnCells: !1
}),
this.grid = new Slick.Grid('#pos-grid', this.dataView, this.columns, this.options),
this.grid.registerPlugin(groupItemMetadataProvider),
this.grid.setSelectionModel(new Slick.RowSelectionModel),
this.dataView.onRowCountChanged.subscribe(function () {
$__0.grid.updateRowCount(),
$__0.grid.render()
}),
this.dataView.onRowsChanged.subscribe(function (e, args) {
$__0.grid.invalidateRows(args.rows),
$__0.grid.render()
}),
this.grid.onClick.subscribe(this.handleGroupClick.bind(this)),
this.grid.onSort.subscribe(function (e, args) {
$__0.sortCol = args.sortCol.field,
$__0.dataView.sort($__0.comparer.bind($__0), args.sortAsc)
}),
$scope.$parent.backtest && $scope.$parent.backtest.dailyStats && this.initGrid(null, $scope.$parent.backtest),
$scope.$on('event:backtest_data', function (evt, backtest) {
var isThisBacktest = backtest.id === $scope.$state.params.backtest_id,
isCompleted = backtest.progress && 1 == backtest.progress;
isThisBacktest && isCompleted && $__0.initGrid(null, backtest)
});
var resizeHandler = this.handleResize.bind(this);
$(window).resize(resizeHandler),
$scope.$on('event:page-sidebar-minified', resizeHandler),
$scope.$on('event:tab-change', function () {
setTimeout(resizeHandler, 0)
})
};
$traceurRuntime.createClass(BacktestPositionCtrl, {
initGrid: function (evt, bt) {
this.dataView.beginUpdate(),
this.loadData(bt),
this.groupByDate(),
this.dataView.endUpdate()
},
loadData: function (bt) {
if (bt.dailyStats) {
var data = [
];
bt.dailyStats.forEach(function (st) {
st.dailyPositions && st.dailyPositions.length && (st.dailyPositions.forEach(function (p) {
  p.utc = st.utc,
  p.symbol = p.exchange + '.' + p.secId,
  data.push(p)
}), data.push({
  utc: st.utc,
  amount: st.dailyCash,
  type: 'cash'
}))
}),
data.forEach(function (datum, i) {
datum.id = i
}),
this.dataView.setItems(data)
}
},
onNewBacktest: function (evt, backtest) {
backtest.id === this.backtestId && this.initGrid(null, backtest)
},
handleResize: function () {
this.grid.resizeCanvas(),
$('.slick-viewport').css('height', $('#order-grid').height() - 29)
},
handleGroupClick: function (e) {
var cell = this.grid.getCellFromEvent(e),
item = this.dataView.getItem(cell.row);
item.__group && (item.collapsed ? this.dataView.expandGroup(item.groupingKey)  : this.dataView.collapseGroup(item.groupingKey))
},
expandAllGroups: function () {
this.groupCollapsed = !0,
this.dataView.expandAllGroups()
},
collapseAllGroups: function () {
this.groupCollapsed = !1,
this.dataView.collapseAllGroups()
},
toggleGrouping: function () {
this.dataGrouped ? (this.dataGrouped = !1, this.dataView.setGrouping([]))  : (this.dataGrouped = !0, this.groupByDate())
},
comparer: function (a, b) {
var x = a[this.sortCol],
y = b[this.sortCol];
return x == y ? 0 : x > y ? 1 : - 1
},
groupByDate: function () {
this.dataView.setGrouping({
getter: this.getDate,
aggregators: [
new Slick.Data.Aggregators.Sum('amount'),
new Slick.Data.Aggregators.Sum('fpnl')
],
aggregateCollapsed: !1,
lazyTotalsCalculation: !1,
displayTotalsRow: !0
})
},
getDate: function (val) {
var e = new Date(val.utc),
theDate = new Date(e.getFullYear(), e.getMonth(), e.getDate());
return theDate.getTime()
},
groupFormatter: function (row, cell, value, columnDef, item) {
item.row = row;
try {
item.amount = item.totals.sum.amount,
item.amountClass = item.amount > 0 ? 'red' : 'green'
} catch (e) {
}
try {
item.fpnl = item.totals.sum.fpnl,
item.fpnlClass = item.fpnl > 0 ? 'red' : 'green'
} catch (e) {
}
return this.groupRowTemplate(item)
},
dateFilter: function (value) {
return this.$filter('date') (value, 'yyyy-MM-dd')
},
decimalFilter: function (value) {
return this.$filter('number') (value, 2)
},
dateTimeFormatter: function (row, cell, value) {
return this.dataGrouped ? '' : this.$filter('date') (value, 'yyyy-MM-dd')
},
decimalFormatter: function (row, cell, value) {
return this.$filter('number') (value, 2)
},
intergerFormatter: function (row, cell, value) {
return this.$filter('number') (value, 0)
},
directionFormatter: function (row, cell, value, columnDef, dataContext) {
return this.$filter('direction') ([dataContext.side,
dataContext.positionEffect])
},
secNameFormatter: function (row, cell, value, columnDef, dataContext) {
if (!value) return 'cash' === dataContext.type ? '<span class="label label-cash red">现金</span>' : '';
var symbol = this.typeahead.getByExactSymbol(this.symbolSource, value),
secName = null;
try {
secName = symbol.sec_name || null
} catch (e) {
}
return secName ? '<span class="text symbol">' + value + ' - ' + secName + '</span>' : '<span class="text symbol">' + value + '</span>'
},
returnFormatter: function (row, cell, value) {
return '<span class="' + (value > 0 ? 'red' : 'green') + '">' + (value ? this.decimalFormatter(null, null, value)  : '') + '</span>'
},
sumTotalsFormatter: function (totals, columnDef) {
var val = totals.sum && totals.sum[columnDef.field];
return null != val ? '<small>合计: </small><span class="' + (val > 0 ? 'red' : 'green') + '">' + this.decimalFormatter(null, null, val) + '</span>' : ''
}
}, {
}),
BacktestPositionCtrl.$inject = [
'$scope',
'$filter',
'gmsdk.md',
'util.typeahead'
];
var $__default = BacktestPositionCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var BacktestLogCtrl = function ($scope) {
var $__0 = this;
this.aceOption = {
theme: 'kr_theme',
onLoad: function (_editor) {
var _session = _editor.getSession(),
_renderer = _editor.renderer;
_editor.session.setMode('ace/mode/log'),
_editor.setReadOnly(!0),
_editor.setHighlightActiveLine(!1),
_editor.setShowPrintMargin(!1),
_editor.$blockScrolling = 1 / 0,
_renderer.setShowGutter(!0),
_session.setUseWrapMode(!0)
}
},
$scope.$parent.backtest && $scope.$parent.backtest.logs && this.loadData(null, $scope.$parent.backtest),
$scope.$on('event:backtest_data', function (evt, backtest) {
var isThisBacktest = backtest.id === $scope.$state.params.backtest_id,
isCompleted = backtest.progress && 1 == backtest.progress,
hadData = backtest.hasOwnProperty('logs');
isThisBacktest && isCompleted && hadData && $__0.loadData(null, backtest)
})
};
$traceurRuntime.createClass(BacktestLogCtrl, {
loadData: function (evt, backtest) {
this.data = backtest.logs.join('\n')
}
}, {
}),
BacktestLogCtrl.$inject = [
'$scope'
];
var $__default = BacktestLogCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var DeleteBacktestCtrl = function () {
};
$traceurRuntime.createClass(DeleteBacktestCtrl, {
}, {
}),
DeleteBacktestCtrl.$inject = [
];
var $__default = DeleteBacktestCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var RiskEditCtrl = function ($scope, RiskService) {
var strategy_id = $scope.$state.params.strategy_id;
RiskService.getTodayRiskLog(strategy_id).then(function (logs) {
logs && logs.length && ($scope.logs = logs, $scope.displayedCollection = [
].concat($scope.logs))
}, function () {
}),
$scope.getter = {
utc: function (value) {
return new Date(value.utc)
}
}
};
$traceurRuntime.createClass(RiskEditCtrl, {
}, {
}),
RiskEditCtrl.$inject = [
'$scope',
'RiskService'
];
var $__default = RiskEditCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var RiskEditCtrl = function ($scope, RiskService, StrategyService, md, typeahead, $timeout) {
function initConfig() {
RiskService.getRiskConfig(strategy_id).then(function (resp) {
if ($scope.indicator_rules = [
default_indicator_rule
], $scope.instrument_rules = [
{
}
], $scope.position_rules = [
{
}
], $scope.is_blacklist = !1, $scope.exchanges = angular.copy(RiskService.exchanges), $scope.symbols = [
], $scope.target.flag = null, !resp.data || !resp.data.data || !resp.data.data[0]) return void angular.extend($scope.target, {
flag: !1
});
var config = resp.data.data[0];
if ($scope.instrument_rules = [
], $scope.position_rules = [
], $scope.target.flag = void 0 !== config.enable ? config.enable : !1, config.indicator_rules && config.indicator_rules.length && ($scope.indicator_rules = [
], config.indicator_rules.forEach(function (rule) {
var rule_item = {
  action: RiskService.getActionInstance(rule.action),
  indicator: RiskService.getIndicatorInstance(rule.indicator),
  operator: RiskService.getOperatorInstance(rule.operator),
  state: RiskService.getStateInstance(rule.state),
  threshold: rule.value
};
$scope.indicator_rules.push(rule_item)
})), config.position_rules && config.position_rules.length ? config.position_rules.forEach(function (rule) {
var rule_item = {
  side: RiskService.getSideInstance(rule.side),
  symbol: $scope.getTypeahead(rule.symbol) [0],
  threshold: rule.value
};
$scope.position_rules.push(rule_item)
})  : $scope.position_rules = [
{
}
], config.instrument_rules) {
if ($scope.is_blacklist = void 0 !== config.instrument_rules.is_blacklist ? config.instrument_rules.is_blacklist : !1, config.instrument_rules.exchanges) {
  var exchanges = config.instrument_rules.exchanges.split(',');
  exchanges.forEach(function (config_ex) {
    $scope.exchanges.forEach(function (view_ex) {
      config_ex === view_ex.type && (view_ex.is_selected = !0)
    })
  })
}
if (config.instrument_rules.symbols) {
  var symbols = config.instrument_rules.symbols.split(',');
  symbols.forEach(function (symbol) {
    $scope.symbols.push($scope.getTypeahead(symbol) [0])
  })
}
}
}, function () {
})
}
function showThenHide(time) {
var temp = $scope.submit_success;
$timeout(function () {
$scope.submit_success === temp && ($scope.submit_success = null)
}, time)
}
var strategy_id = $scope.$state.params.strategy_id;
$scope.action_active = RiskService.ActionActive,
$scope.indicators = RiskService.IndicatorName,
$scope.operators = RiskService.Operators,
$scope.states = RiskService.RiskState,
$scope.actions = RiskService.RiskAction,
$scope.sides = RiskService.sides,
$scope.blacklistFlags = RiskService.BlacklistFlag,
$scope.getTypeahead = typeahead.getSymbolSuggestions(md.symbolTypeAhead),
$scope.target = {
strategy: StrategyService.get(strategy_id)
},
$scope.default_action = RiskService.getActionInstance(3),
$scope.default_state = RiskService.getStateInstance(1);
var default_indicator_rule = {
action: $scope.default_action,
state: $scope.default_state
};
initConfig(),
$scope.addIndicatorRulesItem = function () {
$scope.indicator_rules.push({
action: $scope.default_action,
state: $scope.default_state
})
},
$scope.addPositionRulusItem = function () {
$scope.position_rules.push({
})
},
$scope.removeIndicatorRulesItem = function (item) {
var index = $scope.indicator_rules.indexOf(item);
- 1 !== index && ($scope.indicator_rules.splice(index, 1), 0 === $scope.indicator_rules.length && $scope.addIndicatorRulesItem())
},
$scope.removePositionRulesItem = function (item) {
var index = $scope.position_rules.indexOf(item);
- 1 !== index && ($scope.position_rules.splice(index, 1), 0 === $scope.position_rules.length && $scope.addPositionRulusItem())
};
var getSymbolsTypeahead;
$scope.getSymbolsTypeahead = typeahead.getSymbolSuggestions(md.symbolTypeAhead),
$scope.typeaheadOpts = {
minLength: 1,
onSelect: getSymbolsTypeahead,
waitMs: 0,
allowsEditable: !1
},
$scope.sure = function () {
var complete = !0,
config_obj = {
};
$scope.submit_success = null,
$scope.target.strategy ? config_obj.strategy_id = $scope.target.strategy.strategy_id : $scope.target.account && (config_obj.account_id = $scope.target.account.account_id),
config_obj.enable = void 0 !== $scope.target.flag ? $scope.target.flag : !1,
config_obj.instrument_rules = {
is_blacklist: $scope.is_blacklist
};
var selected_exchange = [
];
$scope.exchanges.forEach(function (exchange) {
exchange.is_selected === !0 && selected_exchange.push(exchange.type)
}),
selected_exchange.length > 0 && (config_obj.instrument_rules.exchanges = selected_exchange.join(','));
var selected_symbols = [
];
$scope.symbols.forEach(function (obj) {
selected_symbols.push(obj.symbol)
}),
selected_symbols.length > 0 && (config_obj.instrument_rules.symbols = selected_symbols.join(',')),
config_obj.indicator_rules = [
],
$scope.indicator_rules.forEach(function (rule) {
rule.error_msg = [
];
var has_indicator = rule.hasOwnProperty('indicator') && null !== rule.indicator && 'object' == typeof rule.indicator,
has_operator = rule.hasOwnProperty('operator') && null !== rule.operator && 'object' == typeof rule.operator,
has_threshold = rule.hasOwnProperty('threshold') && 'number' == typeof rule.threshold,
fully_captured = has_indicator && has_operator && has_threshold;
fully_captured === !0 ? (config_obj.indicator_rules.push({
indicator: rule.indicator.id,
operator: rule.operator.type,
value: rule.threshold,
state: rule.state.id,
action: rule.action.id
}), rule.error_msg = '')  : has_indicator || has_operator || has_threshold ? (has_indicator || rule.error_msg.push('指标没有选择'), has_operator || rule.error_msg.push('操作符没有选择'), has_threshold || rule.error_msg.push('阈值没有输入'), complete = !1, rule.error_msg = rule.error_msg.join(', '))  : rule.error_msg = ''
}),
config_obj.position_rules = [
],
$scope.position_rules.forEach(function (rule) {
rule.error_msg = [
];
var has_symbol = rule.hasOwnProperty('symbol') && 'object' == typeof rule.symbol && rule.symbol.hasOwnProperty('symbol'),
error_symbol_input = rule.hasOwnProperty('symbol') && 'string' == typeof rule.symbol,
has_side = rule.hasOwnProperty('side') && null !== rule.side && rule.side.hasOwnProperty('id'),
has_value = rule.hasOwnProperty('threshold') && 'number' == typeof rule.threshold,
fully_captured = has_symbol && has_side && has_value;
fully_captured === !0 ? (config_obj.position_rules.push({
symbol: rule.symbol.symbol,
side: rule.side.id,
value: rule.threshold
}), rule.error_msg = '')  : has_symbol || has_side || has_value || error_symbol_input ? ((!has_symbol || error_symbol_input) && rule.error_msg.push('代码不在列表'), has_side || rule.error_msg.push('方向没有选择'), has_value || rule.error_msg.push('持仓量没有输入'), complete = !1, rule.error_msg = rule.error_msg.join(', '))  : rule.error_msg = ''
}),
complete === !0 ? RiskService.setRiskConfig(config_obj.strategy_id, config_obj).then(function (resp) {
200 === resp.status && ($scope.submit_success = !0, showThenHide(4000))
}, function () {
$scope.submit_success = !1,
showThenHide(4000)
})  : ($scope.submit_success = 'tobecompleted', showThenHide(6000))
}
};
$traceurRuntime.createClass(RiskEditCtrl, {
}, {
}),
RiskEditCtrl.$inject = [
'$scope',
'RiskService',
'StrategyService',
'gmsdk.md',
'util.typeahead',
'$timeout'
];
var $__default = RiskEditCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var RiskService = function ($rootScope, $q, td, md, StrategyService) {
function onRiskLog(risk_log) {
risk_log.utc *= 1000;
var the_strategy = StrategyService.get(risk_log.strategy_id);
the_strategy.risk_state = risk_log.state,
risk_log.strategy_name = the_strategy.name,
the_strategy.risk_log && the_strategy.risk_log.length ? the_strategy.risk_log.splice(0, 0, risk_log)  : the_strategy.risk_log = [
risk_log
],
$rootScope.$broadcast('event:new_risklog', {
data: risk_log
})
}
function strategyInitCallBack() {
that.StrategyService.get_list().forEach(function (strategy) {
that.getRiskConfig(strategy.strategy_id).then(function (resp) {
try {
  var config = resp.data.data[0];
  strategy.risk_config = config,
  strategy.risk_config.enable = void 0 !== config.enable ? config.enable : !1,
  strategy.risk_config.enable === !0 ? that.getLastNRiskLog(strategy.strategy_id, 1).then(function (log) {
    strategy.risk_state = log.state
  }, function () {
    strategy.risk_state = 1
  })  : strategy.risk_state = null
} catch (e) {
  strategy.risk_config = {
    enable: !1
  }
}
}, function () {
})
})
}
var that = this;
this.backend = td,
this.md = md,
this.$q = $q,
this.StrategyService = StrategyService,
this.$rootScope = $rootScope,
this.Operators = [
{
type: '>'
},
{
type: '>='
},
{
type: '<'
},
{
type: '<='
},
{
type: '='
}
],
this.RiskState = [
{
id: 1,
label: '正常状态'
},
{
id: 2,
label: '禁止开仓状态'
},
{
id: 3,
label: '禁止交易状态'
}
],
this.IndicatorName = [
{
id: 1,
label: '盈亏',
val: 'IndicatorName_PNL'
},
{
id: 2,
label: '浮动盈亏',
val: 'IndicatorName_FPNL'
},
{
id: 3,
label: '权益',
val: 'IndicatorName_NAV'
},
{
id: 4,
label: '收益率(0~1)',
val: 'IndicatorName_ProfitRatio'
},
{
id: 5,
label: '持仓占用资金',
val: 'IndicatorName_Frozen'
},
{
id: 6,
label: '挂单占用资金',
val: 'IndicatorName_OrderFrozen'
},
{
id: 7,
label: '可用资金',
val: 'IndicatorName_Available'
},
{
id: 8,
label: '风险度',
val: 'IndicatorName_RiskRatio'
}
],
this.RiskAction = [
{
id: 3,
label: '告警'
},
{
id: 5,
label: '强制平仓'
},
{
id: 6,
label: '强平并禁止交易'
}
],
this.exchanges = [
{
type: 'CFFEX'
},
{
type: 'SHFE'
},
{
type: 'DCE'
},
{
type: 'CZCE'
},
{
type: 'SHSE'
},
{
type: 'SZSE'
}
],
this.sides = [
{
id: 1,
label: '买/多'
},
{
id: 2,
label: '卖/空'
}
],
this.BlacklistFlag = [
{
type: !0,
label: '使用黑名单',
constraint: '限制交易'
},
{
type: !1,
label: '使用白名单',
constraint: '允许交易'
}
],
this.ActionActive = [
{
type: !0,
label: '激活'
},
{
type: !1,
label: '不激活'
}
],
this.backend.setOnRiskLog(onRiskLog),
$rootScope.$on('event:add_strategy', function (evt, args) {
var the_strategy = StrategyService.get(args.strategy_id);
angular.extend(the_strategy, {
risk_config: {
enable: !1
},
risk_state: null
})
}),
StrategyService.setInitCallBack(strategyInitCallBack)
},
$RiskService = RiskService;
$traceurRuntime.createClass(RiskService, {
tidy_data: function (log) {
return log && log.strategy_id && (log.strategy_name = this.StrategyService.get(log.strategy_id).name),
log && log.utc && (log.utc *= 1000),
log
},
changeRiskSwitch: function (strategy) {
var that = this,
deferred = that.$q.defer();
return strategy.risk_config.enable = !strategy.risk_config.enable,
that.setRiskConfig(strategy.strategy_id, strategy.risk_config).then(function () {
strategy.risk_config.enable === !1 && (strategy.risk_state = null),
deferred.resolve()
}, function () {
strategy.risk_config.enable = !strategy.risk_config.enable,
deferred.reject()
}),
deferred.promise
},
getRiskConfig: function (strategy_id) {
return this.backend.getRiskConfig(strategy_id)
},
setRiskConfig: function (strategy_id, risk_config) {
var that = this,
deferred = that.$q.defer();
return that.backend.setRiskConfig(strategy_id, risk_config).then(function (resp) {
var the_strategy = that.StrategyService.get(strategy_id);
the_strategy && (the_strategy.risk_config = risk_config),
deferred.resolve(resp)
}, function () {
deferred.reject()
}),
deferred.promise
},
deleteRiskConfig: function (strategy_id) {
return this.backend.deleteRiskConfig(strategy_id)
},
getRiskLog: function (strategy_id, start_time, end_time) {
return this.backend.getRiskLog(strategy_id, start_time, end_time)
},
getTodayRiskLog: function (strategy_id) {
var that = this,
deferred = that.$q.defer();
return that.getTodayRiskLogFromLocal(strategy_id).then(function (log) {
deferred.resolve(log)
}, function () {
that.getTodayRiskLogFromServer(strategy_id).then(function (log) {
deferred.resolve(log)
}, function () {
deferred.reject()
})
}),
deferred.promise
},
getTodayRiskLogFromLocal: function (strategy_id) {
var that = this,
deferred = that.$q.defer(),
the_strategy = that.StrategyService.get(strategy_id);
return the_strategy.risk_log && the_strategy.risk_log.length ? deferred.resolve(the_strategy.risk_log)  : deferred.reject(),
deferred.promise
},
getTodayRiskLogFromServer: function (strategy_id) {
var that = this,
deferred = that.$q.defer();
return this.backend.getTodayRiskLog(strategy_id).then(function (resp) {
if (resp.data && resp.data.data) {
resp.data.data.forEach(function (log) {
  log = that.tidy_data(log)
});
var the_strategy = that.StrategyService.get(strategy_id);
the_strategy && (the_strategy.risk_log = resp.data.data),
deferred.resolve(the_strategy.risk_log)
} else deferred.resolve()
}, function () {
deferred.reject()
}),
deferred.promise
},
getLastNRiskLog: function (strategy_id, n) {
var that = this,
deferred = that.$q.defer();
return that.backend.getLastNRiskLog(strategy_id, n).then(function (resp) {
try {
var log = resp.data.data[0];
log = that.tidy_data(log),
deferred.resolve(log)
} catch (e) {
deferred.reject()
}
}, function () {
deferred.reject()
}),
deferred.promise
},
deleteRiskLog: function (strategy_id) {
return this.backend.deleteRiskLog(strategy_id)
},
getActionActiveInstance: function (type) {
for (var i = 0; i < this.ActionActive.length; i++) if (type === this.ActionActive[i].type) return this.ActionActive[i]
},
getActionInstance: function (id) {
for (var i = 0; i < this.RiskAction.length; i++) if (id === this.RiskAction[i].id) return this.RiskAction[i]
},
getIndicatorInstance: function (id) {
for (var i = 0; i < this.IndicatorName.length; i++) if (id === this.IndicatorName[i].id) return this.IndicatorName[i]
},
getOperatorInstance: function (type) {
for (var i = 0; i < this.Operators.length; i++) if (type === this.Operators[i].type) return this.Operators[i]
},
getStateInstance: function (id) {
for (var i = 0; i < this.RiskState.length; i++) if (id === this.RiskState[i].id) return this.RiskState[i]
},
getBlacklistFlagInstance: function (type) {
for (var i = 0; i < this.BlacklistFlag.length; i++) if (type === this.BlacklistFlag[i].type) return this.BlacklistFlag[i]
},
getSideInstance: function (id) {
for (var i = 0; i < this.sides.length; i++) if (id === this.sides[i].id) return this.sides[i]
},
getSymbolInstance: function (symbol) {
return this.getSymbolsTypeahead(symbol) [0]
}
}, {
factory: function ($rootScope, $q, td, md, StrategyService, $log) {
return new $RiskService($rootScope, $q, td, md, StrategyService, $log)
}
}),
RiskService.factory.$inject = [
'$rootScope',
'$q',
'gmsdk.td',
'gmsdk.md',
'StrategyService',
'$log'
];
var $__default = RiskService
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var StrategyListCtrl = function ($scope, $filter, color, toastr, StrategyService, RiskService, authHelper) {
$scope.permissions = authHelper.getPermissions(),
$scope.title = $scope.$state.includes('app.simtrade') ? '模拟交易' : '实盘交易',
$scope.strategies = StrategyService.get_list(),
$scope.$watch(function ($scope) {
return $scope.strategies.map(function (obj) {
return obj.running_status
})
}, function () {
$scope.strategies.forEach(function (strategy) {
strategy.connected_account = 0,
strategy.accounts.forEach(function (account) {
2 == account.status.state && strategy.connected_account++
})
})
}, !0),
'free' === authHelper.getProfile().group_infos && $scope.strategies.forEach(function (strategy) {
'simtrade' !== StrategyService.getTradeType(strategy.strategy_id) && StrategyService.setOrderRoute(strategy.strategy_id, [
'prosim'
])
}),
$scope.options = {
series: {
shadowSize: 0,
color: color.golden,
lines: {
show: !0,
fill: !1
}
},
color: color.golden,
grid: {
show: !1,
hoverable: !0
}
},
$scope.click_account = function (acc) {
StrategyService.on_click_account(acc)
},
$scope.trade_filter = function (item) {
return $scope.$state.includes('app.simtrade') ? item.accounts.length ? item.accounts[0].account_type < 3 : !0 : item.accounts.length && 3 === item.accounts[0].account_type
},
$scope.change_risk_onoff = function (strategy) {
RiskService.changeRiskSwitch(strategy)
},
$scope.$on('event:new_risklog', function (evt, args) {
var risk_log = args.data,
title = '策略 - ' + risk_log.strategy_name + ' @ ' + $filter('date') (risk_log.utc, 'HH:mm:ss'),
msg = risk_log.msg + '<br>' + risk_log.rule;
switch (risk_log.action) {
case 2:
toastr.info(msg, title);
break;
case 3:
toastr.warning(msg, title)
}
}), $scope.permission_deny = function () {
authHelper.permission_deny()
}
};
$traceurRuntime.createClass(StrategyListCtrl, {
}, {
}),
StrategyListCtrl.$inject = [
'$scope',
'$filter',
'color',
'toastr',
'StrategyService',
'RiskService',
'auth.helper'
];
var $__default = StrategyListCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var StrategyDetailCtrl = function ($scope, $modal, $filter, color, toastr, StrategyService, authHelper) {
$scope.permissions = authHelper.getPermissions(),
$scope.permission_deny = function () {
authHelper.permission_deny()
},
$scope.flags = {
is_sim_trade: $scope.$state.includes('app.simtrade')
},
$scope.row_id = $scope.$state.params.strategy_id,
$scope.row = StrategyService.get($scope.row_id),
null === $scope.row ? $scope.$state.go($scope.$state.includes('app.realtrade') ? 'app.realtrade.list' : 'app.simtrade.list')  : (StrategyService.fetch_cash($scope.row), 0 === $scope.row.accounts.length && StrategyService.fetch_accounts($scope.row)),
$scope.$watchCollection('row.positions', function (newVal, oldVal) {
newVal != oldVal && ($scope.positions = [
].concat($scope.row.positions))
}),
$scope.current_tab = 'positions',
$scope.change_tab = function (tab) {
$scope.current_tab = tab
},
$scope.current_chart = 'today',
$scope.change_chart = function (chart) {
$scope.current_chart = chart
},
$scope.options = {
series: {
shadowSize: 0,
color: color.golden,
lines: {
show: !0,
fill: !1
}
},
color: color.golden,
grid: {
show: !1,
hoverable: !0
},
yaxis: {
}
},
angular.element('#page-container').addClass('page-with-two-sidebar'),
$scope.$on('$destroy', function () {
angular.element('#page-container').removeClass('page-with-two-sidebar')
}),
$scope.$on('event:new_risklog', function (evt, args) {
var risk_log = args.data,
title = '策略 - ' + risk_log.strategy_name + ' @ ' + $filter('date') (risk_log.utc, 'HH:mm:ss'),
msg = risk_log.msg + '<br>' + risk_log.rule;
if ($scope.row_id === risk_log.strategy_id) switch (risk_log.action) {
case 1:
break;
case 2:
toastr.info(msg, title);
break;
case 3:
toastr.warning(msg, title);
break;
default:
toastr.error(msg, title)
}
}), $scope.getters = {
timestamp: function (value) {
return new Date(parseInt(1000 * value.transact_time))
},
sending_time: function (value) {
return new Date(parseInt(1000 * value.sending_time))
},
utc: function (value) {
return new Date(value.utc)
}
}, $scope.on_copied = function () {
toastr.success('成功复制到剪贴板', {
timeOut: 1500
})
}, $scope.sort_indicator = function () {
$modal.open({
templateUrl: 'app/strategy/detail.indicator.sort.html',
controller: 'IndicatorSortCtrl',
controllerAs: 'modal',
backdrop: 'static',
resolve: {
}
})
}, $scope.show_realtrade = function () {
return $scope.row && $scope.row.accounts ? 0 === $scope.row.accounts.length ? !1 : 1 != $scope.row.accounts.length || 'stdsim' != $scope.row.accounts[0].account_id && 'prosim' != $scope.row.accounts[0].account_id ? 2 == $scope.row.accounts.length && ('stdsim' == $scope.row.accounts[0].account_id && 'prosim' == $scope.row.accounts[1].account_id || 'stdsim' == $scope.row.accounts[1].account_id && 'prosim' == $scope.row.accounts[0].account_id) ? !1 : !0 : !1 : !1
}, $scope.position_io = function () {
$modal.open({
templateUrl: 'app/strategy/setting.position.html',
controller: 'SettingPositionCtrl',
controllerAs: 'modal',
backdrop: 'static',
size: 'lg'
})
}
};
$traceurRuntime.createClass(StrategyDetailCtrl, {
}, {
}),
StrategyDetailCtrl.$inject = [
'$scope',
'$modal',
'$filter',
'color',
'toastr',
'StrategyService',
'auth.helper'
];
var $__default = StrategyDetailCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var StrategyTransactionsCtrl = function ($scope, StrategyService) {
$scope.limit = 500,
$scope.getters = $scope.$parent.getters,
$scope.strategy = $scope.$parent.row,
$scope.strategy.trans.length && 0 !== $scope.strategy.trans.length ? $scope.strategy.trans.length && $scope.strategy.trans.length > 0 && ($scope.strategy.trans[0].sec_name || $scope.strategy.trans.forEach(function (tr) {
StrategyService.fetch_sec_name(tr)
}))  : StrategyService.fetch_trans($scope.strategy),
$scope.tran_list = $scope.strategy ? $scope.strategy.trans : [
],
$scope.trans = [
].concat($scope.tran_list),
$scope.displayedTransactions = [
].concat($scope.tran_list),
$scope.$watchCollection('tran_list', function () {
$scope.trans = [
].concat($scope.tran_list)
})
};
$traceurRuntime.createClass(StrategyTransactionsCtrl, {
}, {
}),
StrategyTransactionsCtrl.$inject = [
'$scope',
'StrategyService'
];
var $__default = StrategyTransactionsCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var StrategyPositionsCtrl = function ($scope, $modal, StrategyService) {
$scope.limit = 500,
$scope.getters = $scope.$parent.getters,
$scope.strategy = $scope.$parent.row,
$scope.position_list = $scope.strategy ? $scope.strategy.positions : [
],
$scope.positions = [
].concat($scope.position_list),
$scope.displayedCollection = [
].concat($scope.positions),
$scope.$watch(function () {
return $scope.$parent.positions
}, function () {
$scope.$parent.positions && ($scope.positions = [
].concat($scope.$parent.positions))
}, !0),
$scope.position_list.length && 0 !== $scope.position_list.length ? $scope.strategy.positions.length && $scope.strategy.positions.length > 0 && ($scope.strategy.positions[0].sec_name || $scope.strategy.positions.forEach(function (tr) {
StrategyService.fetch_sec_name(tr)
}))  : StrategyService.fetch_positions($scope.strategy),
$scope.closePosition = function (pos) {
$scope.exchange = pos.exchange,
$scope.sec_id = pos.sec_id,
$scope.sec_name = pos.sec_name;
var modalInstance = $modal.open({
templateUrl: 'app/strategy/strategy.placeorder.html',
controller: 'PlaceOrderCtrl',
backdrop: 'static',
resolve: {
instrument: function () {
  return {
    sec_id: $scope.sec_id,
    exchange: $scope.exchange,
    sec_name: $scope.sec_name
  }
},
order: function () {
  return {
    side: pos.side,
    position_effect: 2,
    price: pos.price,
    volume: pos.volume,
    volume_today: pos.volume_today,
    is_close: !0
  }
},
strategy: function () {
  return $scope.strategy
}
}
});
modalInstance.result.then(function () {
}, function () {
})
}
};
$traceurRuntime.createClass(StrategyPositionsCtrl, {
}, {
}),
StrategyPositionsCtrl.$inject = [
'$scope',
'$modal',
'StrategyService',
'$log'
];
var $__default = StrategyPositionsCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var StrategyOrdersCtrl = function ($scope, StrategyService) {
$scope.limit = 200,
$scope.getters = $scope.$parent.getters,
$scope.strategy = $scope.$parent.row,
$scope.order_list = $scope.strategy ? $scope.strategy.orders : [
],
$scope.strategy.orders.length && 0 !== $scope.strategy.orders.length || StrategyService.fetch_orders($scope.strategy, 20),
$scope.orders = [
].concat($scope.order_list),
$scope.displayedCollection = [
].concat($scope.order_list),
$scope.$watchCollection('order_list', function () {
$scope.orders = [
].concat($scope.order_list)
}),
$scope.$watch(function ($scope) {
return $scope.order_list.map(function (obj) {
return obj.status
})
}, function () {
$scope.orders = [
].concat($scope.order_list)
}, !0)
};
$traceurRuntime.createClass(StrategyOrdersCtrl, {
}, {
}),
StrategyOrdersCtrl.$inject = [
'$scope',
'StrategyService'
];
var $__default = StrategyOrdersCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var StrategyUnfinishedOrdersCtrl = function ($scope, $modal, StrategyService) {
$scope.getters = $scope.$parent.getters,
$scope.limit = 300,
$scope.strategy = $scope.$parent.row,
null !== $scope.strategy && 0 === $scope.strategy.unfinished_orders.length && StrategyService.fetch_unfinishedOrders($scope.strategy),
$scope.unfinished = $scope.strategy ? $scope.strategy.unfinished_orders : [
],
$scope.unfinishedOrders = [
].concat($scope.unfinished),
$scope.displayedCollection = [
].concat($scope.unfinished),
$scope.$watchCollection('unfinished', function () {
$scope.unfinishedOrders = [
].concat($scope.unfinished)
}),
$scope.$watch(function ($scope) {
return $scope.unfinished.map(function (obj) {
return obj.status
})
}, function () {
$scope.unfinishedOrders = [
].concat($scope.unfinished)
}, !0),
$scope.cancelOrder = function (order) {
$scope.sec_id = [
order.exchange,
order.sec_id
].join('.'),
$scope.sec_name = order.sec_name,
$scope.volume = order.volume - order.filled_volume;
var modalInstance = $modal.open({
templateUrl: 'app/strategy/cancel.order.html',
controller: 'CancelOrderCtrl',
backdrop: 'static',
resolve: {
order: function () {
  return order
},
ok: function () {
  return '撤单'
}
}
});
modalInstance.result.then(function () {
}, function () {
})
}
};
$traceurRuntime.createClass(StrategyUnfinishedOrdersCtrl, {
}, {
}),
StrategyUnfinishedOrdersCtrl.$inject = [
'$scope',
'$modal',
'StrategyService',
'$log'
];
var $__default = StrategyUnfinishedOrdersCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var StrategyExecRptsCtrl = function ($scope, StrategyService) {
var that = this;
this.limit = 100,
that.strategy_id = $scope.$state.params.strategy_id,
that.strategy = StrategyService.get(that.strategy_id),
that.execrpts = that.strategy.execrpts ? that.strategy.execrpts : [
],
that.displayedCollection = [
].concat(that.execrpts),
that.getters = $scope.$parent.getters
};
$traceurRuntime.createClass(StrategyExecRptsCtrl, {
}, {
}),
StrategyExecRptsCtrl.$inject = [
'$scope',
'StrategyService'
];
var $__default = StrategyExecRptsCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var StrSettingCtrl = function ($scope, $modalInstance, strategy_id, title, StrategyService, AccountService, $timeout, $interval) {
function get_position_diff() {
if ($scope.strategy.positions) {
var diff = [
],
st_pos = angular.copy($scope.strategy.positions),
acc_pos = angular.copy($scope.rl_acc_positions);
if (st_pos.length > 0 && 0 === acc_pos.length) st_pos.forEach(function (pos) {
pos.strategy_volume = pos.volume,
pos.account_volume = 0,
pos.volume_diff = pos.volume,
pos.strategy_vwap = pos.vwap,
pos.account_vwap = 0,
pos.volume_diff = pos.volume,
diff.push(pos)
});
 else if (0 === st_pos.length && acc_pos.length > 0) acc_pos.forEach(function (pos) {
pos.strategy_volume = 0,
pos.account_volume = pos.volume,
pos.volume_diff = pos.volume,
pos.strategy_vwap = 0,
pos.account_vwap = pos.vwap,
pos.vwap_diff = pos.vwap,
diff.push(pos)
});
 else if (st_pos.length > 0 && acc_pos.length > 0) {
for (var i = 0; i < st_pos.length; i++) {
  for (var find = !1, ps = st_pos[i], j = 0; j < acc_pos.length; j++) {
    var pa = acc_pos[j];
    if (ps.sec_id === pa.sec_id && ps.side === pa.side) {
      find = !0;
      var volume_diff = Math.abs(pa.volume - ps.volume),
      vwap_diff = Math.abs(ps.vwap - pa.vwap);
      (volume_diff > 0 || vwap_diff > 0) && (ps.strategy_volume = ps.volume, ps.account_volume = pa.volume, ps.volume_diff = volume_diff, ps.strategy_vwap = ps.vwap, ps.account_vwap = pa.vwap, ps.vwap_diff = vwap_diff, ps.vwap = pa.vwap, diff.push(ps));
      break
    }
  }
  find || (ps.strategy_volume = ps.volume, ps.account_volume = 0, ps.volume_diff = ps.volume, ps.strategy_vwap = ps.vwap, ps.account_vwap = 0, ps.vwap_diff = ps.vwap, diff.push(ps))
}
for (var i$__1 = 0; i$__1 < acc_pos.length; i$__1++) {
  for (var find$__2 = !1, pa$__3 = acc_pos[i$__1], j$__4 = 0; j$__4 < st_pos.length; j$__4++) {
    var ps$__5 = st_pos[j$__4];
    if (ps$__5.sec_id === pa$__3.sec_id && ps$__5.side === pa$__3.side) {
      find$__2 = !0;
      break
    }
  }
  find$__2 || (pa$__3.strategy_volume = 0, pa$__3.account_volume = pa$__3.volume, pa$__3.volume_diff = pa$__3.volume, pa$__3.strategy_vwap = 0, pa$__3.account_vwap = pa$__3.vwap, pa$__3.vwap_diff = pa$__3.vwap, diff.push(pa$__3))
}
}
return diff
}
}
function get_cash_diff() {
if ($scope.strategy.cash) {
var cash_diff = {
};
return cash_diff.strategy_available = $scope.strategy.cash.available ? $scope.strategy.cash.available : 0,
cash_diff.account_available = $scope.rl_acc_cash && $scope.rl_acc_cash.available ? $scope.rl_acc_cash.available : 0,
cash_diff.available_diff = Math.abs(cash_diff.strategy_available - cash_diff.account_available),
cash_diff
}
}
function make_st_pos_mirror() {
var mirror = [
];
return $scope.strategy.positions && (mirror = [
].concat($scope.strategy.positions), mirror.forEach(function (pos) {
pos.vwap = Math.round(100 * pos.vwap) / 100,
pos.input = pos.volume,
pos.vwap_input = pos.vwap
})),
mirror
}
function get_all_acc() {
var accs = AccountService.get_list();
return accs.forEach(function (acc) {
acc.isSelected = check_account_used(acc.account_id),
AccountService.fetch_positions(acc),
AccountService.fetch_cash(acc)
}),
accs
}
function get_rl_acc_pos() {
var rl_acc_positions = [
];
return $scope.all_accounts.forEach(function (acc) {
acc.isSelected === !0 && acc.positions && acc.positions.forEach(function (pos) {
rl_acc_positions.push(pos)
})
}),
merge_pos(rl_acc_positions)
}
function get_rl_acc_cash() {
var rl_acc_cash = [
];
return $scope.all_accounts.forEach(function (acc) {
acc.isSelected === !0 && acc.cash && rl_acc_cash.push(acc.cash)
}),
merge_cash(rl_acc_cash)
}
function merge_pos(positions) {
var uni_pos = [
];
return positions.forEach(function (pos) {
for (var count = uni_pos.length, find = !1, i = 0; count > i; i++) if (uni_pos[i].side == pos.side && uni_pos[i].sec_id == pos.sec_id) {
find = !0,
uni_pos[i].vwap = (uni_pos[i].vwap * uni_pos[i].volume + pos.vwap * pos.volume) / (uni_pos[i].volume + pos.volume),
uni_pos[i].volume += pos.volume;
break
}
find || uni_pos.push(pos)
}),
uni_pos
}
function merge_cash(cash) {
if (cash.length) {
for (var uni_cash = {
available: 0
}, i = 0; i < cash.length; i++) cash[i].available && (uni_cash.available += cash[i].available);
return uni_cash
}
}
function check_account_used(aid) {
if ($scope.strategy.ready === !1) return !1;
for (var i = 0; i < $scope.strategy.accounts.length; i++) if ($scope.strategy.accounts[i].account_id == aid) return !0;
return !1
}
function show_sync() {
return $scope.strategy.accounts ? 0 === $scope.strategy.accounts.length ? !1 : 1 != $scope.strategy.accounts.length || 'stdsim' != $scope.strategy.accounts[0].account_id && 'prosim' != $scope.strategy.accounts[0].account_id ? 2 == $scope.strategy.accounts.length && ('stdsim' == $scope.strategy.accounts[0].account_id && 'prosim' == $scope.strategy.accounts[1].account_id || 'stdsim' == $scope.strategy.accounts[1].account_id && 'prosim' == $scope.strategy.accounts[0].account_id) ? !1 : !0 : !1 : !1
}
function save_strategy() {
$scope.saving = !0,
$scope.save_succeed = !1,
StrategyService.save(modal.wizard).then(function (resp) {
var data = modal.wizard;
if (data.strategy_id) {
var t = StrategyService.get(data.strategy_id);
angular.extend(t.base, data)
} else data = resp.data[0],
StrategyService.add_strategy_base(data),
$scope.strategy = StrategyService.get(data.strategy_id),
angular.extend(modal.wizard, $scope.strategy.base),
$scope.get_cash();
$scope.saving = !1,
$scope.save_succeed = !0,
$scope.strategy.ready = !0
}, function () {
$scope.errors = '保存策略失败！',
$scope.saving = !1,
$scope.save_succeed = !1
})
}
function cash_io() {
$scope.cash_io_error = !1;
var sign = 1;
2 === modal.cash_io_flag && (sign = - 1),
$scope.saving = !0,
$scope.cash_save_succeed = !1,
StrategyService.backend.setCashInout(modal.wizard.strategy_id, sign * modal.cash_inout).success(function () {
$scope.saving = !1,
$scope.cash_save_succeed = !0,
$scope.get_cash()
}).error(function () {
$scope.cash_io_error = !0,
$scope.errors = '资金出入操作失败！',
$scope.saving = !1,
$scope.cash_save_succeed = !1
})
}
function select_account() {
var selected_account_ids = [
];
$scope.all_accounts.forEach(function (x) {
x.isSelected === !0 && selected_account_ids.push(x.account_id)
}),
$scope.saving = !0,
$scope.account_save_succeed = !1,
StrategyService.backend.setOrderRoute($scope.strategy.strategy_id, selected_account_ids).success(function () {
$scope.saving = !1,
$scope.account_save_succeed = !0,
$scope.update_account()
}).error(function () {
$scope.saving = !1,
$scope.account_save_succeed = !1
})
}
function sync_account() {
$scope.block_button(),
$scope.sync_save_succeed = !1,
$scope.sync_error = !1,
$scope.sync_error_msg = '',
$scope.saving = !0;
var no_sync = !0;
if ($scope.position_diff.length > 0) {
no_sync = !1;
var pos_to_io = {
data: $scope.position_diff.map(function (pos) {
  return {
    exchange: pos.exchange,
    sec_id: pos.sec_id,
    side: pos.side,
    strategy_id: $scope.strategy.strategy_id,
    volume: pos.account_volume - pos.strategy_volume,
    vwap: '-' === pos.vwap ? 0 : pos.vwap
  }
})
};
StrategyService.backend.setPositionInout($scope.strategy.strategy_id, pos_to_io).success(function () {
$scope.saving = !1,
$scope.sync_save_succeed = !0,
$scope.get_position()
}).error(function () {
$scope.saving = !1,
$scope.sync_save_succeed = !1,
$scope.sync_error = !0,
$scope.sync_error_msg += '持仓同步出错'
})
}
if ($scope.cash_diff.available_diff > 0) {
no_sync = !1;
var cash_to_io = $scope.cash_diff.account_available - $scope.cash_diff.strategy_available;
StrategyService.backend.setCashInout($scope.strategy.strategy_id, cash_to_io).success(function () {
$scope.saving = !1,
$scope.sync_save_succeed = !0,
$scope.get_cash()
}).error(function () {
$scope.saving = !1,
$scope.sync_save_succeed = !1,
$scope.sync_error = !0,
$scope.sync_error_msg += ' 资金同步出错'
})
}
no_sync && ($scope.saving = !1, $scope.sync_save_succeed = !0)
}
var modal = this;
$scope.title = title,
$scope.strategy = StrategyService.get(strategy_id) || {
base: {
},
ready: !1
},
$scope.strategy.strategy_id && ($scope.strategy.ready = !0);
var accs = AccountService.get_list();
accs.forEach(function (acc) {
AccountService.fetch_positions(acc),
AccountService.fetch_cash(acc)
});
var interval = $interval(function () {
var accs = AccountService.get_list();
accs.forEach(function (acc) {
AccountService.fetch_positions(acc),
AccountService.fetch_cash(acc)
}),
$scope.rl_acc_positions = get_rl_acc_pos(),
$scope.rl_acc_cash = get_rl_acc_cash(),
$scope.position_diff = get_position_diff(),
$scope.cash_diff = get_cash_diff()
}, 1000);
$scope.$on('$destroy', function () {
$interval.cancel(interval)
}),
modal.wizard = angular.copy($scope.strategy.base),
modal.indicators = $scope.strategy.indicators,
$scope.categories = [
],
Object.keys(StrategyService.categories_map).forEach(function (k) {
$scope.categories.push({
id: k,
name: StrategyService.categories_map[k]
})
}),
$scope.styles = [
],
Object.keys(StrategyService.styles_map).forEach(function (k) {
$scope.styles.push({
id: k,
name: StrategyService.styles_map[k]
})
}),
$scope.cash_inout_dir = [
{
id: 1,
name: '转入'
},
{
id: 2,
name: '转出'
}
],
$scope.all_accounts = get_all_acc(),
$scope.rl_acc_positions = get_rl_acc_pos(),
$scope.rl_acc_cash = get_rl_acc_cash(),
$scope.st_position = make_st_pos_mirror(),
$scope.position_diff = get_position_diff(),
$scope.position_diff_collection = [
].concat($scope.position_diff),
$scope.cash_diff = get_cash_diff(),
$scope.show_sync = show_sync(),
$scope.$watch(function ($scope) {
return $scope.strategy.cash
}, function () {
$scope.cash_diff = get_cash_diff()
}, !0),
$scope.$watch(function ($scope) {
return $scope.all_accounts.map(function (acc) {
return acc.isSelected
})
}, function (n, o) {
n !== o && ($scope.rl_acc_positions = get_rl_acc_pos(), $scope.position_diff = get_position_diff(), $scope.position_diff_collection = [
].concat($scope.position_diff))
}, !0),
$scope.$watch(function ($scope) {
return $scope.strategy.positions
}, function () {
$scope.position_diff = get_position_diff()
}, !0),
$scope.$watch(function ($scope) {
return $scope.strategy.accounts ? $scope.strategy.accounts.map(function (obj) {
return obj.account_id
})  : void 0
}, function (newVal, oldVal) {
newVal != oldVal && ($scope.rl_acc_positions = get_rl_acc_pos(), $scope.rl_acc_cash = get_rl_acc_cash(), $scope.cash_diff = get_cash_diff(), $scope.position_diff = get_position_diff(), $scope.st_position = make_st_pos_mirror(), $scope.show_sync = show_sync())
}, !0),
$scope.accordion = {
},
modal.cash_io_flag = 1,
modal.cash_inout = 0,
$scope.get_cash = function () {
$scope.strategy.strategy_id && StrategyService.fetch_cash($scope.strategy).then(function (data) {
modal.cash = data
}, function () {
})
},
$scope.get_cash(),
$scope.get_position = function () {
$scope.strategy.strategy_id && StrategyService.backend.getPositions($scope.strategy.strategy_id).success(function (res) {
$scope.strategy.positions = [
],
res.data && res.data.length && ($scope.strategy.positions = [
].concat(res.data)),
$scope.position_diff = get_position_diff(),
$scope.st_position = make_st_pos_mirror()
})
},
$scope.cash_io_error = !1,
$scope.account_save_succeed = !1,
$scope.update_account = function () {
$scope.strategy.accounts.length = 0,
$scope.all_accounts.forEach(function (acc) {
if (acc.isSelected === !0) {
var item = AccountService.get(acc.account_id);
$scope.strategy.accounts.push(item)
}
})
},
$scope.pos_save_succeed = !1,
$scope.pos_io_error = !1,
$scope.pos_io_error_msg = '',
$scope.position_io = function () {
$scope.pos_save_succeed = !1,
$scope.pos_io_error = !1,
$scope.saving = !0;
var pos_to_io = {
data: $scope.st_position.map(function (pos) {
return {
  exchange: pos.exchange,
  sec_id: pos.sec_id,
  side: pos.side,
  strategy_id: $scope.strategy.strategy_id,
  volume: pos.input - pos.volume,
  vwap: pos.vwap_input
}
})
};
StrategyService.backend.setPositionInout($scope.strategy.strategy_id, pos_to_io).success(function () {
$scope.saving = !1,
$scope.pos_save_succeed = !0,
$scope.get_position()
}).error(function () {
$scope.saving = !1,
$scope.pos_save_succeed = !1,
$scope.pos_io_error = !0,
$scope.pos_io_error_msg = '提交出错'
})
},
$scope.disable_button = !1,
$scope.block_button = function () {
$scope.disable_button = !0,
$timeout(function () {
$scope.disable_button = !1
}, 1500)
},
$scope.sync_save_succeed = !1,
$scope.sync_error = !1,
$scope.sync_error_msg = '',
$scope.title_map = {
base_info: '修改基本信息',
account: '修改关联账户',
sync: '同步账户',
cash_io: '资金出入'
},
modal.sure = function () {
switch ($scope.title) {
case 'base_info':
save_strategy();
break;
case 'account':
select_account();
break;
case 'sync':
sync_account();
break;
case 'cash_io':
cash_io()
}
}
};
$traceurRuntime.createClass(StrSettingCtrl, {
}, {
}),
StrSettingCtrl.$inject = [
'$scope',
'$modalInstance',
'strategy_id',
'title',
'StrategyService',
'AccountService',
'$timeout',
'$interval',
'$log'
];
var $__default = StrSettingCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var StrRemoveCtrl = function ($scope, $modalInstance, strategy_id, StrategyService) {
$scope.strategy_id = strategy_id,
$scope.strategy = StrategyService.get(strategy_id),
$scope.ok = function () {
{
var str_id = $scope.strategy_id;
StrategyService.remove(str_id).success(function () {
$modalInstance.close($scope.strategy_id)
}).error(function () {
$scope.errors = '删除策略失败！'
})
}
},
$scope.cancel = function () {
$modalInstance.dismiss('cancel')
}
};
$traceurRuntime.createClass(StrRemoveCtrl, {
}, {
}),
StrRemoveCtrl.$inject = [
'$scope',
'$modalInstance',
'strategy_id',
'StrategyService',
'$log'
];
var $__default = StrRemoveCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var StrategyPerfChartCtrl = function ($scope, color, StrategyService) {
var strategy_id = $scope.$state.params.strategy_id,
strategy = StrategyService.get(strategy_id);
$scope.long_trends = strategy ? strategy.long_trends : [
],
Highcharts.setOptions({
global: {
useUTC: !1,
timezoneOffset: - (new Date).getTimezoneOffset()
}
}),
$scope.chartConfig = {
options: {
chart: {
backgroundColor: 'transparent',
zoomType: '',
animation: !1,
height: 229
},
navigator: {
enabled: !1
},
rangeSelector: {
enabled: !1
},
exporting: !1,
legend: {
enabled: !1
},
title: {
text: null
},
xAxis: {
type: 'datetime',
ordinal: !0,
title: {
  text: null
},
labels: {
  enabled: !1
},
lineWidth: 0,
minorGridLineWidth: 0,
lineColor: 'transparent',
minorTickLength: 0,
tickLength: 0,
dateTimeLabelFormats: {
  day: '%Y<br/>%m-%d',
  month: '%Y-%m',
  year: '%Y'
}
},
yAxis: {
title: {
  text: null
},
labels: {
  enabled: !1
},
lineWidth: 0,
minorGridLineWidth: 0,
lineColor: 'transparent',
minorTickLength: 0,
tickLength: 0
},
tooltip: {
xDateFormat: '%Y-%m-%d'
},
plotLines: {
tickAmount: 0
},
plotOptions: {
area: {
  marker: {
    enabled: !1
  }
},
series: {
  animation: !1
}
},
loading: !1,
useHighStocks: !0
},
series: [
{
name: '策略权益',
data: $scope.long_trends,
type: 'area',
tooltip: {
  valueSuffix: '万元'
},
color: color.golden,
fillColor: {
  linearGradient: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 1
  },
  stops: [
    [0,
    color.golden],
    [
      1,
      Highcharts.Color(color.golden).setOpacity(0).get('rgba')
    ]
  ]
},
threshold: null
}
]
}
};
$traceurRuntime.createClass(StrategyPerfChartCtrl, {
}, {
}),
StrategyPerfChartCtrl.$inject = [
'$scope',
'color',
'StrategyService'
];
var $__default = StrategyPerfChartCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var StrategyIndicatorsCtrl = function ($scope, StrategyService) {
function gen_indicator_array(inds) {
var keys = Object.keys(inds),
sorted = window.localStorage.getItem('gm_client_indicator_order'),
indicators = [
];
if (sorted) {
for (var sorted_key = sorted.split(','), i = 0; i < sorted_key.length; i++) {
var k = sorted_key[i];
if (inds[k]) {
  indicators.push(inds[k]);
  var idx = keys.indexOf(k);
  idx > - 1 && keys.splice(idx, 1)
}
}
keys.length && keys.forEach(function (k) {
indicators.push(inds[k])
})
} else keys.forEach(function (k) {
indicators.push(inds[k])
});
return indicators
}
var strategy_id = $scope.$state.params.strategy_id,
strategy = StrategyService.get(strategy_id);
$scope.indicator_obj = strategy ? strategy.indicators : {
},
$scope.indicators = gen_indicator_array($scope.indicator_obj),
$scope.$watchCollection('indicator_obj', function () {
$scope.indicators = gen_indicator_array($scope.indicator_obj)
}),
$scope.$on('event:change_indicator_order', function () {
$scope.indicators = gen_indicator_array($scope.indicator_obj)
})
};
$traceurRuntime.createClass(StrategyIndicatorsCtrl, {
}, {
}),
StrategyIndicatorsCtrl.$inject = [
'$scope',
'StrategyService'
];
var $__default = StrategyIndicatorsCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var StrategySidebarCtrl = function ($scope, $modal, toastr, StrategyService, AccountService, RiskService, authHelper) {
function check_sync_show() {
return $scope.strategy && $scope.strategy.accounts ? 0 === $scope.strategy.accounts.length ? !1 : 1 != $scope.strategy.accounts.length || 'stdsim' != $scope.strategy.accounts[0].account_id && 'prosim' != $scope.strategy.accounts[0].account_id ? 2 == $scope.strategy.accounts.length && ('stdsim' == $scope.strategy.accounts[0].account_id && 'prosim' == $scope.strategy.accounts[1].account_id || 'stdsim' == $scope.strategy.accounts[1].account_id && 'prosim' == $scope.strategy.accounts[0].account_id) ? !1 : !0 : !1 : !1
}
$scope.permissions = authHelper.getPermissions();
var strategy_id = $scope.$state.params.strategy_id;
$scope.strategy = StrategyService.get(strategy_id),
$scope.categories = StrategyService.categories_map,
$scope.styles = StrategyService.styles_map,
$scope.change_risk_onoff = function (strategy) {
RiskService.changeRiskSwitch(strategy)
},
$scope.edit_strategy = function (target) {
var modalInstance = $modal.open({
templateUrl: 'app/strategy/strategy.setting.html',
controller: 'StrSettingCtrl',
controllerAs: 'modal',
backdrop: 'static',
resolve: {
strategy_id: function () {
  return strategy_id
},
title: function () {
  return target
}
}
});
modalInstance.result.then(function (data) {
angular.extend($scope.strategy.base, data),
StrategyService.fetch_positions($scope.strategy)
}, function (reason) {
StrategyService.fetch_positions($scope.strategy),
$scope.reason = reason
})
},
$scope.data_export = function () {
$modal.open({
templateUrl: 'app/strategy/setting.export.html',
controller: 'SettingExportCtrl',
controllerAs: 'modal',
backdrop: 'static'
})
},
$scope.setting_account = function () {
$modal.open({
templateUrl: 'app/strategy/setting.account.html',
controller: 'SettingAccountCtrl',
backdrop: 'static'
})
},
$scope.setting_base = function () {
$modal.open({
templateUrl: 'app/strategy/setting.base.html',
controller: 'SettingBaseCtrl',
backdrop: 'static'
})
},
$scope.sync_account = function () {
$modal.open({
templateUrl: 'app/strategy/setting.sync.html',
controller: 'SettingSyncCtrl',
controllerAs: 'modal',
size: 'lg',
backdrop: 'static'
})
},
$scope.remove_strategy = function () {
var modalInstance = $modal.open({
templateUrl: 'app/strategy/strategy.remove.confirm.html',
controller: 'StrRemoveCtrl',
controllerAs: 'modal',
backdrop: 'static',
resolve: {
strategy_id: function () {
  return $scope.strategy.strategy_id
}
}
});
modalInstance.result.then(function (str_id) {
var strategy_type = StrategyService.getTradeType(str_id);
switch (StrategyService.del_local_strategy(str_id), strategy_type) {
case 'simtrade':
  $scope.$state.go('app.simtrade.list');
  break;
case 'realtrade':
  $scope.$state.go('app.realtrade.list');
  break;
default:
  $scope.$state.go('app.create.list')
}
},
function (reason) {
$scope.reason = reason
})
},
$scope.click_account = function (acc) {
AccountService.on_click_account(acc)
},
$scope.risk_config = function () {
var modalInstance = $modal.open({
backdrop: 'static',
templateUrl: 'app/risk/risk.edit.html',
controller: 'RiskEditCtrl',
controllerAs: 'modal',
size: 'lg',
resolve: {
strategy_id: function () {
  return strategy_id
}
}
});
modalInstance.result.then(function () {
}, function () {
})
},
$scope.on_copied = function () {
toastr.success('成功复制到剪贴板', '', {
timeOut: 1500
})
},
$scope.show_sync = check_sync_show,
$scope.permission_deny = function () {
authHelper.permission_deny()
}
};
$traceurRuntime.createClass(StrategySidebarCtrl, {
}, {
}),
StrategySidebarCtrl.$inject = [
'$scope',
'$modal',
'toastr',
'StrategyService',
'AccountService',
'RiskService',
'auth.helper',
'$log'
];
var $__default = StrategySidebarCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var SymbolCtrl = function ($scope, $modal, md, typeahead) {
function handleTypeaheadSelect(evt, selectedItem) {
$modal.open({
templateUrl: 'app/strategy/strategy.placeorder.html',
controller: 'PlaceOrderCtrl',
controllerAs: 'PlaceOrderCtrl',
backdrop: 'static',
resolve: {
instrument: function () {
  return selectedItem
},
order: function () {
  return 1 === selectedItem.sec_type ? {
    side: 1,
    position_effect: 1,
    volume: 100
  }
   : {
    side: 1,
    position_effect: 1,
    volume: 1
  }
},
strategy: function () {
  return strategy
}
}
})
}
var strategy = $scope.$parent.row,
dataSets = typeahead.getDataSets(md.symbolTypeAhead, 'is_active', 1),
targetInput = $('#symbol-input'),
enterPressHandler = typeahead.getFirstMapSymbol(md.symbolTypeAhead, function (symbol) {
handleTypeaheadSelect(null, symbol),
targetInput.val(symbol.sec_name || '')
}, function () {
targetInput.typeahead('close'),
targetInput.blur()
});
setTimeout(function () {
var $__1;
($__1 = targetInput).typeahead.apply($__1, $traceurRuntime.spread([typeahead.options], dataSets)).on('typeahead:selected', handleTypeaheadSelect).keypress(enterPressHandler)
}, 0),
$scope.handlePlaceOrderClick = function () {
var evt = {
};
evt.which = 13,
evt.target = {
value: targetInput.val()
},
enterPressHandler(evt)
}
};
$traceurRuntime.createClass(SymbolCtrl, {
}, {
}),
SymbolCtrl.$inject = [
'$scope',
'$modal',
'gmsdk.md',
'util.typeahead'
];
var $__default = SymbolCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var PlaceOrderCtrl = function ($scope, $modalInstance, instrument, order, strategy, QuoteService, StrategyService, $log, $timeout, typeahead) {
function update_tick(tick) {
var asks = [
],
bids = [
];
tick.hasOwnProperty('quotes') && tick.quotes.forEach(function (t) {
asks.push(t.ask_v <= 0 ? {
}
 : {
price: t.ask_p,
vol: t.ask_v
}),
bids.push(t.bid_v <= 0 ? {
}
 : {
price: t.bid_p,
vol: t.bid_v
})
});
for (var i = 5 - asks.length; i-- > 0; ) asks.push({
}),
bids.push({
});
$scope.quotes = {
asks: asks,
bids: bids
},
$scope.pre_close = tick.pre_close,
$scope.last_price = tick.last_price,
$scope.last_volume = tick.last_volume,
$scope.upper_limit = tick.upper_limit,
$scope.lower_limit = tick.lower_limit,
$scope.gain = (tick.last_price - tick.pre_close) / tick.pre_close * 100
}
function fetch_tick() {
QuoteService.getLastTicks($scope.symbol).success(function (resp) {
var tick = resp.data[0];
update_tick(tick),
$scope.order.price = Math.round(100 * $scope.last_price) / 100
})
}
function showThenHide(time) {
var temp = $scope.submit_status;
timer = $timeout(function () {
$scope.submit_status === temp && ($scope.submit_status = null)
}, time)
}
var that = this;
$scope.strategy = strategy,
StrategyService.fetch_cash(strategy),
$scope.inst = instrument,
$scope.symbol = [
$scope.inst.exchange,
$scope.inst.sec_id
].join('.'),
$scope.is_index = 3 == instrument.sec_type,
$scope.pricePrecision = this.getPricePrecision(instrument),
that.autoClose = 'true' === window.localStorage.getItem('gm_client_place_order_modal_auto_close'),
$scope.order = {
position_effect: 1,
side: 1,
order_type: 0
},
angular.extend($scope.order, order),
order.is_close && ($scope.position = {
volume: order.volume,
volume_today: order.volume_today ? order.volume_today : 0
}),
$scope.order.buysell = 2 === $scope.order.position_effect ? 3 - $scope.order.side : $scope.order.side,
$scope.order.price = Math.round(100 * $scope.order.price) / 100,
$scope.ok_value = '下单',
$scope.cancel_value = '取消',
$scope.numbers = [
'一',
'二',
'三',
'四',
'五'
],
$scope.quotes_len = 5,
$scope.buysells = [
{
id: 1,
name: '买'
},
{
id: 2,
name: '卖'
}
],
$scope.position_effects = 'SHFE' == $scope.inst.exchange ? [
{
id: 1,
name: '开'
},
{
id: 2,
name: '平今'
}
] : [
{
id: 1,
name: '开'
},
{
id: 2,
name: '平'
}
],
$scope.order_types = [
{
id: 1,
name: '市价'
},
{
id: 0,
name: '限价'
}
],
QuoteService.setOnTick(function (tick) {
tick.symbol.toUpperCase() === $scope.symbol.toUpperCase() && $scope.$apply(function () {
update_tick(tick)
})
}),
fetch_tick(),
QuoteService.connect('livemd', $scope.symbol + '.tick'),
QuoteService.sub($scope.symbol + '.tick'),
$scope.pick_price = function (v) {
$scope.order.price = v
},
$scope.submit_status = null,
$scope.place_order = function () {
$scope.order.side = 1 !== $scope.order.position_effect ? 3 - $scope.order.buysell : $scope.order.buysell,
StrategyService.backend.placeOrder($scope.strategy.strategy_id, $scope.inst.exchange, $scope.inst.sec_id, $scope.order.position_effect, $scope.order.side, $scope.order.order_type, $scope.order.price, $scope.order.volume).success(function (resp) {
if (0 === resp.status.code) {
resp.data[0]
}
$scope.submit_status = 'success',
showThenHide(2000),
that.autoClose === !0 && (QuoteService.unsub('*'), $modalInstance.close($scope.order.sec_id))
}).error(function () {
$scope.submit_status = 'error',
showThenHide(2000)
})
},
$scope.hide_alert = function () {
$scope.submit_status = null
},
$scope.cancel = function () {
QuoteService.unsub('*'),
$modalInstance.dismiss('cancel')
};
var dataSets = typeahead.getDataSets(QuoteService.symbolTypeAhead, 'is_active', 1),
selectSymbol = function (evt, $item) {
$scope.inst = $item,
QuoteService.unsub('*'),
$scope.symbol = [
$scope.inst.exchange,
$scope.inst.sec_id
].join('.'),
fetch_tick(),
QuoteService.sub($scope.symbol + '.tick')
};
setTimeout(function () {
var $__1;
if (!order.is_close) {
var targetInput = $('#place-order-symbol-input');
($__1 = targetInput).typeahead.apply($__1, $traceurRuntime.spread([typeahead.options], dataSets)).on('typeahead:selected', selectSymbol).keypress(typeahead.getFirstMapSymbol(QuoteService.symbolTypeAhead, function (symbol) {
selectSymbol(null, symbol),
targetInput.val(symbol.sec_name || '')
}, function () {
targetInput.typeahead('close'),
targetInput.blur()
}))
}
}, 0);
var timer = null;
$scope.$on('$destroy', function () {
$timeout.cancel(timer)
})
};
$traceurRuntime.createClass(PlaceOrderCtrl, {
changeAutoCloseSetting: function (val) {
window.localStorage.setItem('gm_client_place_order_modal_auto_close', val)
},
handleInstChange: function () {
},
getPricePrecision: function (inst) {
var PrecisionMap = {
1: 2,
2: 3,
3: 2,
4: 1,
5: 2
};
return inst.sec_type ? PrecisionMap[inst.sec_type] || 2 : [
'CFFEX',
'SHFE'
].indexOf(inst.exchange) > - 1 ? 1 : [
'1',
'5'
].indexOf(inst.sec_id.substring(0, 1)) > - 1 ? 3 : 2
}
}, {
}),
PlaceOrderCtrl.$inject = [
'$scope',
'$modalInstance',
'instrument',
'order',
'strategy',
'gmsdk.md',
'StrategyService',
'$log',
'$timeout',
'util.typeahead'
];
var $__default = PlaceOrderCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var CancelOrderCtrl = function ($scope, $modalInstance, StrategyService, order) {
var strategy_id = order.strategy_id;
$scope.strategy = StrategyService.get(strategy_id),
$scope.order = order,
$scope.ok = function () {
StrategyService.backend.cancelOrder(order.cl_ord_id).success(function (resp) {
0 === resp.status.code && StrategyService.cancel_order_sent($scope.strategy, order.cl_ord_id),
$modalInstance.close(order)
}).error(function () {
$scope.errors = '撤单失败！'
})
},
$scope.cancel = function () {
$modalInstance.dismiss('cancel')
}
};
$traceurRuntime.createClass(CancelOrderCtrl, {
}, {
}),
CancelOrderCtrl.$inject = [
'$scope',
'$modalInstance',
'StrategyService',
'order',
'$log'
];
var $__default = CancelOrderCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var SettingAccountCtrl = function ($scope, StrategyService, AccountService, $timeout, authHelper) {
function check_account_used(aid) {
for (var i = 0; i < strategy.accounts.length; i++) if (strategy.accounts[i].account_id == aid) return !0;
return !1
}
function showThenHide(time) {
var temp = $scope.submit_success;
$timeout(function () {
$scope.submit_success === temp && ($scope.submit_success = null)
}, time)
}
function allowLiveStrategy() {
var strateies = StrategyService.get_live_strategies(),
limit = null;
try {
limit = profile.group_extinfo.allowed_live_strategies
} catch (e) {
}
return null === limit || strateies.length < limit || - 1 === ['prosim',
'stdsim'].indexOf(strategy.accounts[0].account_id)
}
function allowNonLiveStrategy() {
var strateies = StrategyService.get_non_live_strategies(),
limit = null;
try {
limit = profile.group_extinfo.allowed_nonlive_strategies
} catch (e) {
}
return null === limit || strateies.length < limit || [
'prosim',
'stdsim'
].indexOf(strategy.accounts[0].account_id) > - 1
}
$scope.permissions = authHelper.getPermissions();
var profile = authHelper.getProfile(),
strategy_id = $scope.$state.params.strategy_id,
strategy = StrategyService.get(strategy_id);
$scope.accounts = AccountService.get_list(),
$scope.accounts.forEach(function (acc) {
acc.is_selected = check_account_used(acc.account_id)
}),
$scope.submit_success = null,
$scope.sim_acc_filter = function (item) {
return 3 !== item.account_type
},
$scope.sure = function () {
var selected_account_ids = [
],
sim = null,
real = null,
stdsim = null,
prosim = null;
$scope.accounts.forEach(function (x) {
if (x.is_selected === !0) switch (selected_account_ids.push(x.account_id), x.account_type) {
case 1:
  stdsim = !0,
  sim = !0;
  break;
case 2:
  prosim = !0,
  sim = !0;
  break;
case 3:
  real = !0
}
}), sim === !0 && real === !0 ? (check_account_used(), $scope.submit_success = 'mixed', showThenHide(6000))  : null === sim && null === real ? (check_account_used(), $scope.submit_success = 'required', showThenHide(6000))  : prosim === !0 && stdsim === !0 ? (check_account_used(), $scope.submit_success = 'simmixed', showThenHide(6000))  : real && !allowLiveStrategy() ? ($scope.submit_success = 'reallimited', showThenHide(6000))  : sim && !allowNonLiveStrategy() ? ($scope.submit_success = 'simlimited', showThenHide(6000))  : StrategyService.setOrderRoute(strategy_id, selected_account_ids).then(function () {
check_account_used(),
$scope.submit_success = !0,
showThenHide(4000),
$scope.$root.$broadcast('event:set_order_route', strategy_id)
}, function () {
check_account_used(),
$scope.submit_success = !1,
showThenHide(4000)
})
}
};
$traceurRuntime.createClass(SettingAccountCtrl, {
}, {
}),
SettingAccountCtrl.$inject = [
'$scope',
'StrategyService',
'AccountService',
'$timeout',
'auth.helper'
];
var $__default = SettingAccountCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var SettingBaseCtrl = function ($scope, StrategyService, $timeout) {
function showThenHide(time) {
var temp = $scope.submit_success;
$timeout(function () {
$scope.submit_success === temp && ($scope.submit_success = null)
}, time)
}
var strategy_id = $scope.$state.params.strategy_id;
$scope.strategy = angular.copy(StrategyService.get(strategy_id)),
$scope.submit_success = null,
$scope.categories = [
],
Object.keys(StrategyService.categories_map).forEach(function (k) {
$scope.categories.push({
id: k,
name: StrategyService.categories_map[k]
})
}),
$scope.styles = [
],
Object.keys(StrategyService.styles_map).forEach(function (k) {
$scope.styles.push({
id: k,
name: StrategyService.styles_map[k]
})
}),
$scope.sure = function () {
StrategyService.save($scope.strategy.base).then(function (strategy) {
$scope.strategy = strategy,
$scope.submit_success = !0,
showThenHide(4000)
}, function () {
$scope.submit_success = !1,
showThenHide(4000)
})
}
};
$traceurRuntime.createClass(SettingBaseCtrl, {
}, {
}),
SettingBaseCtrl.$inject = [
'$scope',
'StrategyService',
'$timeout'
];
var $__default = SettingBaseCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var SettingPositionCtrl = function ($scope, $modalInstance, StrategyService, RiskService, md, typeahead, $timeout) {
function make_st_pos_mirror(strategy) {
var mirror = [
];
return strategy.positions && (mirror = [
].concat(strategy.positions), mirror.forEach(function (pos) {
pos.vwap = pos.vwap ? Math.round(100 * pos.vwap) / 100 : 0,
pos.volume = pos.volume ? pos.volume : 0,
pos.volume_today = pos.volume_today ? pos.volume_today : 0,
pos.volume_input = pos.volume,
pos.volume_today_input = pos.volume_today,
pos.vwap_input = pos.vwap
})),
mirror
}
function showThenHide(time) {
var temp = modal.submit_status;
$timeout(function () {
modal.submit_status === temp && (modal.submit_status = null)
}, time)
}
var modal = this,
strategy_id = $scope.$state.params.strategy_id,
strategy = StrategyService.get(strategy_id) || {
base: {
},
ready: !1
};
modal.pos_display = make_st_pos_mirror(strategy),
modal.sides = RiskService.sides,
modal.new_item = {
},
modal.submit_status = null,
modal.position_io = function () {
modal.submit_status = null;
var pos_to_io = {
data: modal.pos_display.map(function (pos) {
return {
  exchange: pos.exchange,
  sec_id: pos.sec_id,
  side: pos.side,
  strategy_id: strategy_id,
  volume: pos.volume_input - pos.volume,
  volume_today: pos.volume_today_input - pos.volume_today,
  vwap: pos.vwap_input
}
})
};
StrategyService.backend.setPositionInout(strategy_id, pos_to_io).success(function () {
StrategyService.fetch_positions(strategy),
modal.submit_status = 'success',
showThenHide(4000)
}).error(function () {
modal.submit_status = 'error',
showThenHide(4000)
})
},
modal.submit = function () {
modal.submit_status = null;
var has_error = !1;
modal.pos_display.forEach(function (pos) {
pos.volume_input < pos.volume_today_input ? (pos.volume_error = !0, has_error = !0)  : pos.volume_error = !1
}),
has_error ? modal.submit_status = 'volume_input_error' : modal.position_io()
},
modal.hide_alert = function () {
modal.submit_status = null
},
modal.getSymbolsTypeahead = typeahead.getSymbolSuggestions(md.symbolTypeAhead),
modal.selectSymbol = function (item) {
switch (item.sec_type) {
case 3:
modal.new_item.side = void 0,
modal.new_item.symbol = void 0,
modal.submit_status = 'index_added';
break;
case 4:
modal.submit_status = null;
break;
default:
modal.submit_status = null,
modal.new_item.side = 1
}
},
modal.add_item = function (item) {
if (modal.submit_status = null, item.hasOwnProperty('symbol') && 'object' == typeof item.symbol && 3 === item.symbol.sec_type) return void (modal.submit_status = 'index_added');
var not_future = item.hasOwnProperty('symbol') && 'object' == typeof item.symbol && 4 !== item.symbol.sec_type,
is_short = item.hasOwnProperty('side') && 'number' == typeof item.side && 2 === item.side;
if (not_future && is_short) return modal.submit_status = 'stock_open_short',
void (item.side = 1);
var has_side = item.hasOwnProperty('side') && 'number' == typeof item.side,
has_symbol = item.hasOwnProperty('symbol') && 'object' == typeof item.symbol,
error_symbol_input = item.hasOwnProperty('symbol') && 'string' == typeof item.symbol,
has_volume = item.hasOwnProperty('volume') && 'number' == typeof item.volume,
has_volume_today = item.hasOwnProperty('volume_today') && 'number' == typeof item.volume_today,
has_vwap = item.hasOwnProperty('vwap') && 'number' == typeof item.vwap,
input_valid = has_side && has_symbol && has_volume && has_volume_today && has_vwap;
if (!input_valid) return modal.add_error_msg = [
],
(!has_symbol || error_symbol_input) && modal.add_error_msg.push('代码不在列表'),
has_side || modal.add_error_msg.push('方向没有选择'),
has_volume || modal.add_error_msg.push('持仓量没有输入'),
has_volume_today || modal.add_error_msg.push('今仓量没有输入'),
has_vwap || modal.add_error_msg.push('均价没有输入'),
modal.add_error_msg = modal.add_error_msg.join(', '),
void (modal.submit_status = 'to_be_completed');
for (var i = 0; i < modal.pos_display.length; i++) {
var this_pos = modal.pos_display[i];
if (this_pos.sec_id === item.symbol.sec_id && this_pos.exchange === item.symbol.exchange && this_pos.side === item.side) return void (modal.submit_status = 'duplicated')
}
modal.pos_display.push({
exchange: item.symbol.exchange,
sec_id: item.symbol.sec_id,
sec_name: item.symbol.sec_name,
side: item.side,
volume: 0,
volume_input: item.volume,
volume_today: 0,
volume_today_input: item.volume_today,
vwap: item.vwap,
vwap_input: item.vwap
}),
modal.new_item = {
}
}
};
$traceurRuntime.createClass(SettingPositionCtrl, {
}, {
}),
SettingPositionCtrl.$inject = [
'$scope',
'$modalInstance',
'StrategyService',
'RiskService',
'gmsdk.md',
'util.typeahead',
'$timeout'
];
var $__default = SettingPositionCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var SettingSyncCtrl = function ($scope, StrategyService, AccountService, $timeout, $interval) {
var $__0 = this;
this.strategy = StrategyService.get($scope.$state.params.strategy_id),
this.AccountService = AccountService,
this.StrategyService = StrategyService,
this.$timeout = $timeout,
this.submit_status = null,
this.button_blocked = !1,
this.timeOutTimer = null,
this.accs = this.AccountService.get_list(),
this.linkedAccounts = this._getLinkedAccounts(),
this.linkedAccounts.forEach(function (acc) {
AccountService.fetch_positions(acc),
AccountService.fetch_cash(acc)
}),
this.linkedAccsPos = this._getLkAccsPos(this.linkedAccounts),
this.linkedAccsCash = this._getLkAccsCash(this.linkedAccounts),
this.posDiff = this._getPosDiff(this.strategy.positions, this.linkedAccsPos),
this.posDiffCollection = [
].concat(this.posDiff),
this.cashDiff = this._getCashDiff(this.strategy.positions, this.linkedAccsCash),
$scope.$watch(function () {
return $__0.strategy.cash
}, function () {
$__0.cashDiff = $__0._getCashDiff($__0.strategy.cash, $__0.linkedAccsCash)
}, !0),
$scope.$watch(function () {
return $__0.strategy.positions
}, function () {
$__0.posDiff = $__0._getPosDiff($__0.strategy.positions, $__0.linkedAccsPos)
}, !0),
this.intervalTimer = $interval(function () {
$__0.linkedAccounts.forEach(function (acc) {
AccountService.fetch_positions(acc),
AccountService.fetch_cash(acc)
}),
$__0.StrategyService.fetch_cash($__0.strategy),
$__0.linkedAccsPos = $__0._getLkAccsPos($__0.linkedAccounts),
$__0.linkedAccsCash = $__0._getLkAccsCash($__0.linkedAccounts),
$__0.posDiff = $__0._getPosDiff($__0.strategy.positions, $__0.linkedAccsPos),
$__0.cashDiff = $__0._getCashDiff($__0.strategy.cash, $__0.linkedAccsCash)
}, 1000),
$scope.$on('$destroy', function () {
$interval.cancel($__0.intervalTimer),
$timeout.cancel($__0.timeOutTimer)
})
};
$traceurRuntime.createClass(SettingSyncCtrl, {
_blockButton: function () {
var that = this;
that.button_blocked = !0,
that.timeOutTimer = that.$timeout(function () {
that.button_blocked = !1
}, 4000)
},
syncAccount: function () {
var that = this;
if (that.submit_status = null, that._blockButton(), this.posDiff.length > 0) {
var pos_to_io = {
data: that.posDiff.map(function (pos) {
  return {
    exchange: pos.exchange,
    sec_id: pos.sec_id,
    side: pos.side,
    strategy_id: that.strategy.strategy_id,
    volume: pos.account_volume - pos.strategy_volume,
    volume_today: pos.account_volume_today - pos.strategy_volume_today,
    available: pos.account_available - pos.strategy_available,
    available_today: pos.account_available_today - pos.strategy_available_today,
    vwap: pos.vwap
  }
})
};
that.StrategyService.backend.setPositionInout(this.strategy.strategy_id, pos_to_io).success(function () {
that.submit_status = 'success',
that.showThenHide(4000),
that.StrategyService.fetch_positions(that.strategy)
}).error(function () {
that.submit_status = 'pos_error',
that.showThenHide(4000)
})
}
if (this.cashDiff.available_diff > 0) {
var cash_to_io = this.cashDiff.account_available - this.cashDiff.strategy_available;
this.StrategyService.backend.setCashInout(this.strategy.strategy_id, cash_to_io).success(function () {
that.submit_status = 'success',
that.showThenHide(4000)
}).error(function () {
that.submit_status = 'cash_error',
that.showThenHide(4000)
})
}
},
_getLinkedAccounts: function () {
var $__0 = this,
ret = [
];
return this.accs.forEach(function (acc) {
for (var i = 0; i < $__0.strategy.accounts.length; i++) if ($__0.strategy.accounts[i].account_id === acc.account_id) {
ret.push(acc);
break
}
}),
ret
},
_getLkAccsPos: function (lkAccs) {
var lkAccsPos = [
];
return lkAccs.forEach(function (acc) {
acc.positions && acc.positions.forEach(function (pos) {
lkAccsPos.push(pos)
})
}),
this._mergePos(lkAccsPos)
},
_getLkAccsCash: function (lkAccs) {
var lkAccCash = [
];
return lkAccs.forEach(function (acc) {
acc.cash && lkAccCash.push(acc.cash)
}),
this._mergeCash(lkAccCash)
},
_mergePos: function (positions) {
var uni_pos = [
];
return positions.forEach(function (pos) {
for (var count = uni_pos.length, find = !1, i = 0; count > i; i++) if (uni_pos[i].side == pos.side && uni_pos[i].sec_id == pos.sec_id && uni_pos[i].exchange == pos.exchange) {
find = !0,
uni_pos[i].vwap = (uni_pos[i].vwap * uni_pos[i].volume + pos.vwap * pos.volume) / (uni_pos[i].volume + pos.volume),
uni_pos[i].volume += pos.volume,
uni_pos[i].volume_today += pos.volume_today,
uni_pos[i].available += pos.available,
uni_pos[i].available_today += pos.available_today;
break
}
find || uni_pos.push(pos)
}),
uni_pos
},
_mergeCash: function (cash) {
for (var uni_cash = {
available: 0
}, i = 0; i < cash.length; i++) cash[i].available && (uni_cash.available += cash[i].available);
return uni_cash
},
_getCashDiff: function (strCash, accCash) {
var cash_diff = {
};
return cash_diff.strategy_available = strCash.available ? strCash.available : 0,
cash_diff.account_available = accCash.available ? accCash.available : 0,
cash_diff.available_diff = Math.abs(cash_diff.strategy_available - cash_diff.account_available),
cash_diff
},
_getPosDiff: function (strPos, accPos) {
var diff = [
],
st_pos = angular.copy(strPos),
acc_pos = angular.copy(accPos);
if (st_pos.length > 0 && 0 === acc_pos.length) st_pos.forEach(function (pos) {
pos.strategy_volume = pos.volume,
pos.account_volume = 0,
pos.strategy_volume_today = pos.volume_today || 0,
pos.account_volume_today = 0,
pos.volume_diff = pos.volume,
pos.volume_today_diff = pos.strategy_volume_today,
pos.strategy_available = pos.available || 0,
pos.account_available = 0,
pos.available_diff = pos.strategy_available,
pos.strategy_available_today = pos.available_today || 0,
pos.account_available_today = 0,
pos.available_today_diff = pos.strategy_available_today,
pos.strategy_vwap = pos.vwap,
pos.account_vwap = 0,
pos.volume_diff = pos.volume,
pos.vwap_diff = pos.vwap,
diff.push(pos)
});
 else if (0 === st_pos.length && acc_pos.length > 0) acc_pos.forEach(function (pos) {
pos.strategy_volume = 0,
pos.account_volume = pos.volume,
pos.strategy_volume_today = 0,
pos.account_volume_today = pos.volume_today || 0,
pos.volume_diff = pos.volume,
pos.volume_today_diff = pos.account_volume_today,
pos.strategy_available = 0,
pos.account_available = pos.available || 0,
pos.available_diff = pos.account_available,
pos.strategy_available_today = 0,
pos.account_available_today = pos.available_today || 0,
pos.available_today_diff = pos.account_available_today,
pos.strategy_vwap = 0,
pos.account_vwap = pos.vwap,
pos.vwap_diff = pos.vwap,
diff.push(pos)
});
 else if (st_pos.length > 0 && acc_pos.length > 0) {
for (var i = 0; i < st_pos.length; i++) {
for (var find = !1, ps = st_pos[i], j = 0; j < acc_pos.length; j++) {
  var pa = acc_pos[j];
  if (ps.exchange === pa.exchange && ps.sec_id === pa.sec_id && ps.side === pa.side) {
    find = !0;
    var volume_diff = Math.abs(pa.volume - ps.volume),
    strategy_volume_today = ps.volume_today || 0,
    account_volume_today = pa.volume_today || 0,
    volume_today_diff = Math.abs(strategy_volume_today - account_volume_today),
    strategy_available = ps.available || 0,
    account_available = pa.available || 0,
    available_diff = Math.abs(strategy_available - account_available),
    strategy_available_today = ps.available_today || 0,
    account_available_today = pa.available_today || 0,
    available_today_diff = Math.abs(strategy_available_today - account_available_today),
    vwap_diff = Math.abs(ps.vwap - pa.vwap);
    (volume_diff > 0 || volume_today_diff > 0 || vwap_diff > 0 || available_diff > 0 || available_today_diff > 0) && (ps.strategy_volume = ps.volume, ps.account_volume = pa.volume, ps.strategy_volume_today = strategy_volume_today, ps.account_volume_today = account_volume_today, ps.volume_diff = volume_diff, ps.volume_today_diff = volume_today_diff, ps.strategy_available = strategy_available, ps.account_available = account_available, ps.available_diff = available_diff, ps.strategy_available_today = strategy_available_today, ps.account_available_today = account_available_today, ps.available_today_diff = available_today_diff, ps.strategy_vwap = ps.vwap, ps.account_vwap = pa.vwap, ps.vwap_diff = vwap_diff, ps.vwap = pa.vwap, diff.push(ps));
    break
  }
}
find || (ps.strategy_volume = ps.volume, ps.account_volume = 0, ps.strategy_volume_today = ps.volume_today ? ps.volume_today : 0, ps.account_volume_today = 0, ps.volume_diff = ps.volume, ps.volume_today_diff = ps.strategy_volume_today, ps.strategy_available = ps.available || 0, ps.account_available = 0, ps.available_diff = ps.strategy_available, ps.strategy_available_today = ps.available_today || 0, ps.account_available_today = 0, ps.available_today_diff = ps.strategy_available_today, ps.strategy_vwap = ps.vwap, ps.account_vwap = 0, ps.vwap_diff = ps.vwap, diff.push(ps))
}
for (var i$__2 = 0; i$__2 < acc_pos.length; i$__2++) {
for (var find$__3 = !1, pa$__4 = acc_pos[i$__2], j$__5 = 0; j$__5 < st_pos.length; j$__5++) {
  var ps$__6 = st_pos[j$__5];
  if (ps$__6.exchange === pa$__4.exchange && ps$__6.sec_id === pa$__4.sec_id && ps$__6.side === pa$__4.side) {
    find$__3 = !0;
    break
  }
}
find$__3 || (pa$__4.strategy_volume = 0, pa$__4.account_volume = pa$__4.volume, pa$__4.strategy_volume_today = 0, pa$__4.account_volume_today = pa$__4.volume_today || 0, pa$__4.volume_diff = pa$__4.volume, pa$__4.volume_today_diff = pa$__4.account_volume_today, pa$__4.strategy_available = 0, pa$__4.account_available = pa$__4.available || 0, pa$__4.available_diff = pa$__4.account_available, pa$__4.strategy_available_today = 0, pa$__4.account_available_today = pa$__4.available_today || 0, pa$__4.available_today_diff = pa$__4.account_available_today, pa$__4.strategy_vwap = 0, pa$__4.account_vwap = pa$__4.vwap, pa$__4.vwap_diff = pa$__4.vwap, diff.push(pa$__4))
}
}
return diff
},
showThenHide: function (time) {
var temp = this.submit_status,
that = this;
this.$timeout(function () {
that.submit_status === temp && (that.submit_status = null)
}, time)
}
}, {
}),
SettingSyncCtrl.$inject = [
'$scope',
'StrategyService',
'AccountService',
'$timeout',
'$interval'
];
var $__default = SettingSyncCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var SettingExportCtrl = function ($scope, td, $q, $filter) {
this.ind = !1,
this.pos = !1,
this.trans = !1,
this.orders = !1,
this.indsStart = null,
this.indsEnd = null,
this.transStart = null,
this.transEnd = null,
this.ordersStart = null,
this.ordersEnd = null,
this.indsError = null,
this.transError = null,
this.ordersError = null,
this.status = '',
this.strategyId = $scope.$state.params.strategy_id,
this.td = td,
this.$q = $q,
this.$filter = $filter,
this.posSheetHeader = [
'时间',
'代码',
'方向',
'价格',
'数量',
'成本',
'金额',
'浮盈'
]
};
$traceurRuntime.createClass(SettingExportCtrl, {
submit: function () {
var $__0 = this;
this.valid() && this.fetch().then(function () {
Object.keys($__0.res).length && saveAs(new Blob([JSON.stringify($__0.res)], {
type: 'data:text/json;charset=utf8'
}), 'export.json')
})
},
validateInd: function () {
return this.indsError = null,
this.indsStart && this.indsEnd ? this.indsStart.getTime() > this.indsEnd.getTime() && (this.indsError = '无效的时间范围')  : this.indsError = '必须选择时间范围',
this.indsError
},
validateTran: function () {
return this.transError = null,
this.transStart && this.transEnd ? this.transStart.getTime() > this.transEnd.getTime() && (this.transError = '无效的时间范围')  : this.transError = '必须选择时间范围',
this.transError
},
validateOrder: function () {
return this.ordersError = null,
this.ordersStart && this.ordersEnd ? this.ordersStart.getTime() > this.ordersEnd.getTime() && (this.ordersError = '无效的时间范围')  : this.ordersError = '必须选择时间范围',
this.ordersError
},
fetchPos: function () {
var deferredPos = this.$q.defer();
return this.td.getPositions(this.strategyId).then(function (resp) {
if (200 === resp.status) try {
deferredPos.resolve(resp.data.data)
} catch (e) {
deferredPos.reject(null)
} else deferredPos.reject('error')
}, function () {
deferredPos.reject('error')
}),
deferredPos.promise
},
fetchInd: function () {
var deferredInd = this.$q.defer();
return this.td.getIndicators(this.strategyId, this.$filter('date') (this.indsStart, 'yyyy-MM-dd'), this.$filter('date') (this.indsEnd, 'yyyy-MM-dd')).then(function (resp) {
if (200 === resp.status) try {
deferredInd.resolve(resp.data.data)
} catch (e) {
deferredInd.reject()
} else deferredInd.reject()
}, function () {
deferredInd.reject()
}),
deferredInd.promise
},
fetchTran: function () {
var deferredTrans = this.$q.defer();
return this.td.getTrades(this.strategyId, this.$filter('date') (this.transStart, 'yyyy-MM-dd HH:mm:ss'), this.$filter('date') (this.transEnd, 'yyyy-MM-dd HH:mm:ss')).then(function (resp) {
if (200 === resp.status) try {
deferredTrans.resolve(resp.data.data)
} catch (e) {
deferredTrans.reject(null)
} else deferredTrans.reject('error')
}, function () {
deferredTrans.reject('error')
}),
deferredTrans.promise
},
fetchOrder: function () {
var deferredOrders = this.$q.defer();
return this.td.getOrders(this.strategyId, this.$filter('date') (this.ordersStart, 'yyyy-MM-dd HH:mm:ss'), this.$filter('date') (this.ordersEnd, 'yyyy-MM-dd HH:mm:ss')).then(function (resp) {
if (200 === resp.status) try {
deferredOrders.resolve(resp.data.data)
} catch (e) {
deferredOrders.reject(null)
} else deferredOrders.reject('error')
}, function () {
deferredOrders.reject('error')
}),
deferredOrders.promise
},
exportPosCsv: function () {
this.fetchPos().then(function (res) {
var encoded = new CSV(res, {
header: !0
}).encode();
saveAs(new Blob([encoded], {
type: 'data:text/csv;charset=utf8'
}), '当前持仓.csv')
}, function () {
})
},
exportPosJson: function () {
this.fetchPos().then(function (res) {
saveAs(new Blob([JSON.stringify(res)], {
type: 'data:text/json;charset=utf8'
}), '当前持仓.json')
})
},
exportIndCsv: function () {
var error = this.validateInd();
error || this.fetchInd().then(function (res) {
var encoded = new CSV(res, {
header: !0
}).encode();
saveAs(new Blob([encoded], {
type: 'data:text/json;charset=utf8'
}), '历史绩效.csv')
})
},
exportIndJson: function () {
var error = this.validateInd();
error || this.fetchInd().then(function (res) {
saveAs(new Blob([JSON.stringify(res)], {
type: 'data:text/json;charset=utf8'
}), '历史绩效.json')
})
},
exportTranCsv: function () {
var error = this.validateTran();
error || this.fetchTran().then(function (res) {
saveAs(new Blob([new CSV(res, {
header: !0
}).encode()], {
type: 'data:text/json;charset=utf8'
}), '历史成交.csv')
})
},
exportTranJson: function () {
var error = this.validateTran();
error || this.fetchTran().then(function (res) {
saveAs(new Blob([JSON.stringify(res)], {
type: 'data:text/json;charset=utf8'
}), '历史成交.json')
})
},
exportOrderJson: function () {
var error = this.validateOrder();
error || this.fetchOrder().then(function (res) {
saveAs(new Blob([JSON.stringify(res)], {
type: 'data:text/json;charset=utf8'
}), '历史委托.json')
})
},
exportOrderCsv: function () {
var error = this.validateOrder();
error || this.fetchOrder().then(function (res) {
saveAs(new Blob([new CSV(res, {
header: !0
}).encode()], {
type: 'data:text/json;charset=utf8'
}), '历史委托.csv')
})
}
}, {
}),
SettingExportCtrl.$inject = [
'$scope',
'gmsdk.td',
'$q',
'$filter'
];
var $__default = SettingExportCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var IndicatorSortCtrl = function ($scope, $modalInstance, StrategyService) {
function gen_indicator_array(inds) {
var keys = Object.keys(inds),
sorted = window.localStorage.getItem('gm_client_indicator_order'),
indicators = [
];
if (sorted) {
for (var sorted_key = sorted.split(','), i = 0; i < sorted_key.length; i++) {
var k = sorted_key[i];
if (inds[k]) {
  indicators.push(inds[k]);
  var idx = keys.indexOf(k);
  idx > - 1 && keys.splice(idx, 1)
}
}
keys.length && keys.forEach(function (k) {
indicators.push(inds[k])
})
} else keys.forEach(function (k) {
indicators.push(inds[k])
});
return indicators
}
var strategy_id = $scope.$state.params.strategy_id,
strategy = StrategyService.get(strategy_id);
$scope.indicator_obj = strategy.indicators,
$scope.indicators = gen_indicator_array($scope.indicator_obj),
$scope.selected = null;
var target = [
];
$scope.save = function () {
for (var i = 0; i < $scope.indicators.length; i++) target.push($scope.indicators[i].name);
window.localStorage.setItem('gm_client_indicator_order', target),
$scope.$root.$broadcast('event:change_indicator_order', null),
$modalInstance.close('success')
}
};
$traceurRuntime.createClass(IndicatorSortCtrl, {
}, {
}),
IndicatorSortCtrl.$inject = [
'$scope',
'$modalInstance',
'StrategyService',
'toastr'
];
var $__default = IndicatorSortCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var AccListCtrl = function ($scope, $modal, $log, AccountService, authHelper) {
var profile = authHelper.getProfile();
$scope.accounts = AccountService.get_list(),
$scope.displayedCollection = [
].concat($scope.accounts),
$scope.$watchCollection('accounts', function () {
$scope.displayedCollection = [
].concat($scope.accounts)
}),
$scope.$watch(function ($scope) {
return $scope.accounts.map(function (obj) {
return obj.status
})
}, function () {
$scope.displayedCollection = [
].concat($scope.accounts)
}, !0),
$scope.acc = {
},
$scope.type = function (id) {
return AccountService.account_type(id)
},
$scope.isConnected = function (acc) {
return AccountService.isLoggedIn(acc)
},
$scope.open = function (customTitle, size) {
var title = customTitle || '新增账户',
modalInstance = $modal.open({
templateUrl: 'app/account/setting.html',
controller: 'AccEditCtrl',
backdrop: 'static',
size: size,
resolve: {
acc: function () {
  return $scope.acc
},
title: function () {
  return title
}
}
});
modalInstance.result.then(function (acc) {
acc.new_created === !1 ? (delete acc.new_created, AccountService.update_account(acc.account_id, acc))  : acc.new_created === !0 && (delete acc.new_created, AccountService.add_account_base(acc)),
$scope.acc = {
},
$scope.displayedCollection = [
].concat($scope.accounts)
}, function () {
})
},
$scope.addItem = function () {
$scope.acc = {
};
var limit = null;
try {
limit = profile.group_extinfo.allowed_broker_accounts
} catch (e) {
}
var liveAccount = $scope.accounts.filter(function (acc) {
return 3 === acc.account_type
});
limit && liveAccount.length >= limit ? authHelper.permission_deny('柜台账户数量限制', '您当前用户权限下的柜台账户数量限制为' + limit + '。')  : $scope.open()
},
$scope.removeItem = function (row) {
AccountService.del_local_account(row.account_id)
},
$scope.editItem = function (row) {
$scope.acc = angular.copy(row),
$scope.acc.new_created = !1,
$scope.open('修改账户')
},
$scope.remove_confirm = function (row) {
var modalInstance = $modal.open({
templateUrl: 'app/account/remove.confirm.html',
controller: 'AccRemoveCtrl',
controllerAs: 'modal',
backdrop: 'static',
resolve: {
acc: function () {
  return row
}
}
});
modalInstance.result.then(function (data) {
$scope.removeItem(data)
}, function (reason) {
$scope.reason = reason
})
},
$scope.click_account = function (acc) {
AccountService.on_click_account(acc)
}
};
$traceurRuntime.createClass(AccListCtrl, {
}, {
}),
AccListCtrl.$inject = [
'$scope',
'$modal',
'$log',
'AccountService',
'auth.helper'
];
var $__default = AccListCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var AccInfoCtrl = function ($scope, AccountService) {
this.$scope = $scope,
$scope.account_id = $scope.$state.params.account_id,
$scope.acc = AccountService.get($scope.account_id),
AccountService.fetch_positions($scope.acc),
AccountService.fetch_cash($scope.acc),
null === $scope.acc ? $scope.$state.go('app.account.list')  : ($scope.dispCash = $scope.acc.cash, $scope.positions = $scope.acc.positions, $scope.displayedCollection = [
].concat($scope.positions), $scope.$watchCollection('positions', function () {
$scope.displayedCollection = [
].concat($scope.positions)
}), $scope.$watch(function ($scope) {
return $scope.positions.map(function (obj) {
return obj.volume
})
}, function () {
$scope.displayedCollection = [
].concat($scope.positions)
}, !0)),
$scope.refreshCash = function () {
AccountService.fetch_cash($scope.acc)
},
$scope.refreshPosition = function () {
AccountService.fetch_positions($scope.acc)
}
};
$traceurRuntime.createClass(AccInfoCtrl, {
}, {
}),
AccInfoCtrl.$inject = [
'$scope',
'AccountService'
];
var $__default = AccInfoCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var AccRemoveCtrl = function ($scope, $modalInstance, acc, AccountService) {
$scope.acc_id = acc.account_id,
$scope.account = acc,
$scope.type = function (id) {
return AccountService.account_type(id)
},
$scope.ok = function () {
var id = $scope.acc_id;
AccountService.remove(id).success(function () {
$modalInstance.close($scope.account)
}).error(function () {
$scope.errors = '删除账户失败！'
})
},
$scope.cancel = function () {
$modalInstance.dismiss('cancel')
}
};
$traceurRuntime.createClass(AccRemoveCtrl, {
}, {
}),
AccRemoveCtrl.$inject = [
'$scope',
'$modalInstance',
'acc',
'AccountService',
'$log'
];
var $__default = AccRemoveCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var AccEditCtrl = function ($scope, $modalInstance, acc, title, AccountService, md) {
function uploadChange() {
var brokerEdited = !1;
if ($scope.acc.broker_uri != addrChoosed && (brokerEdited = !0, currentBroker.uris)) for (var ispLen = currentBroker.uris.length, i = 0; ispLen > i; i++) for (var addrLen = currentBroker.uris[i].td.length, find = !1, j = 0; addrLen > j; j++) if (currentBroker.uris[i].td[j] == addrChoosed) {
currentBroker.uris[i].td[j] = $scope.acc.broker_uri,
find = !0;
break
}
$scope.acc.broker_id != currentBroker.id && (brokerEdited = !0, currentBroker.id = $scope.acc.broker_id),
brokerEdited === !0 && md.setBroker(currentBroker).success(function () {
}).error(function () {
})
}
$scope.brokerChannelTypes = angular.copy(AccountService.brokerChannelTypes);
var addMode = '新增账户' === title;
$scope.acc = acc,
$scope.title = title,
$scope.addrGrouped = [
];
var addrChoosed = null,
currentBroker = {
};
$scope.localLang = {
nothingSelected: '请选择柜台交易服务地址'
},
$scope.flags = {
editBrokerUri: '新增账户' !== $scope.title,
editBrokerId: !1
},
$scope.onChannelSelect = function () {
$scope.flags.editBrokerUri = !1,
$scope.acc.broker_name = null,
$scope.acc.broker_id = null,
$scope.acc.broker_uri = null,
$scope.addrGrouped = [
]
},
$scope.getTypeaheads = function (val) {
if (!AccountService.brokers[acc.broker_channel_id]) return [];
for (var part = val.toUpperCase(), objs = [
], uuids = [
], keys = Object.keys(AccountService.brokers[acc.broker_channel_id]), i = 0; i < keys.length; i++) {
var key = keys[i],
idx = key.indexOf(part);
if ( - 1 != idx) {
var vals = AccountService.brokers[acc.broker_channel_id][key];
uuids.push(vals[0].uuid),
uuids.indexOf(vals[0].uuid) == uuids.lastIndexOf(vals[0].uuid) && vals.forEach(function (val) {
  objs.length < 10 && objs.push(val)
})
}
}
return $scope.addrGrouped = [
],
$scope.acc.broker_name = null,
$scope.acc.broker_id = null,
objs
},
$scope.onUriSelect = function (data) {
addrChoosed = data.label,
$scope.acc.broker_uri = data.label
},
$scope.onBrokerSelect = function (item) {
$scope.flags.editBrokerUri = !1,
$scope.flags.showUriReBtn = !1,
$scope.acc.broker_id = item.id,
md.getBrokerAddr(item.uuid).success(function (resp) {
if (resp.data) {
currentBroker = resp.data[0];
var uris = currentBroker.uris;
uris.forEach(function (addr) {
  $scope.addrGrouped.push({
    label: '<strong>' + addr.name + '</strong>',
    group: !0
  });
  var tdUris = addr.td.map(function (tdAddr) {
    return {
      label: tdAddr,
      selected: !1
    }
  });
  $scope.addrGrouped.push.apply($scope.addrGrouped, tdUris),
  $scope.addrGrouped.push({
    group: !1
  })
})
}
}).error(function () {
})
},
$scope.onUriBtnClick = function () {
$scope.flags.editBrokerUri = !0
},
$scope.ok = function () {
addMode && uploadChange();
var channel_type = parseInt($scope.acc.broker_channel_id);
$scope.acc.broker_channel_id = channel_type,
$scope.acc.account_type = channel_type,
$scope.acc.account_type > 3 && ($scope.acc.account_type = 3),
$scope.acc.account_id ? AccountService.update($scope.acc).success(function () {
$modalInstance.close($scope.acc)
}).error(function () {
$scope.errors = '修改账户失败!'
})  : ($scope.acc.permissible = !0, AccountService.insert($scope.acc).success(function (resp) {
var na = resp.data[0];
$scope.acc.account_id || (angular.extend($scope.acc, na), $scope.acc.new_created = !0),
$modalInstance.close($scope.acc)
}).error(function () {
$scope.errors = '增加账户失败!'
}))
},
$scope.cancel = function () {
$modalInstance.dismiss('cancel')
}
};
$traceurRuntime.createClass(AccEditCtrl, {
}, {
}),
AccEditCtrl.$inject = [
'$scope',
'$modalInstance',
'acc',
'title',
'AccountService',
'gmsdk.md',
'$log'
];
var $__default = AccEditCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var AccConnectCtrl = function ($scope, $modalInstance, acc, backend, $timeout) {
$scope.account = acc,
$scope.backend = backend,
$scope.dataLoading = !1,
acc.account_type < 3 && ($scope.errors = '内置账户不需要［登录或退出交易］操作！'),
$scope.check_logged = function () {
$scope.backend.isLoggedIn($scope.account) ? ($scope.errors = null, $modalInstance.close($scope.account))  : $scope.account.status.state > 3 && ($scope.errors = '登录交易失败！' + $scope.account.status.err_msg)
},
$scope.$watch(function ($scope) {
return $scope.account.status.state
}, function () {
$scope.dataLoading = !1,
$scope.timer && ($timeout.cancel($scope.timer), $scope.check_logged())
}),
$scope.ok = function () {
$scope.errors = null,
$scope.timer && ($timeout.cancel($scope.timer), $scope.timer = null),
acc.account_type < 3 && $modalInstance.dismiss('cancel'),
$scope.dataLoading = !0,
$scope.backend.login($scope.account).success(function (x) {
0 === x.status.code ? $scope.timer = $timeout(function () {
$scope.dataLoading = !1,
$scope.check_logged()
}, 3000)  : $scope.errors = x.status.msg
}).error(function () {
$scope.dataLoading = !1,
$scope.errors = '登录交易失败！'
})
},
$scope.cancel = function () {
$modalInstance.dismiss('cancel')
}
};
$traceurRuntime.createClass(AccConnectCtrl, {
}, {
}),
AccConnectCtrl.$inject = [
'$scope',
'$modalInstance',
'acc',
'AccountService',
'$timeout',
'$log'
];
var $__default = AccConnectCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var AccDisconnectCtrl = function ($scope, $modalInstance, acc, backend) {
$scope.account = acc,
$scope.backend = backend,
acc.account_type < 3 && ($scope.errors = '内置账户不需要［登录或退出交易］操作！'),
$scope.ok = function () {
acc.account_type < 3 && $modalInstance.dismiss('cancel');
$scope.account.account_id;
$scope.backend.logout($scope.account).success(function () {
$modalInstance.close($scope.account)
}).error(function () {
$scope.errors = '退出交易失败！'
})
},
$scope.cancel = function () {
$modalInstance.dismiss('cancel')
}
};
$traceurRuntime.createClass(AccDisconnectCtrl, {
}, {
}),
AccDisconnectCtrl.$inject = [
'$scope',
'$modalInstance',
'acc',
'AccountService',
'$log'
];
var $__default = AccDisconnectCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var AnalysisListCtrl = function ($scope, BacktestService) {
function highlightCurrent(the_strategy) {
$scope.strategies.forEach(function (strategy) {
strategy.is_active = !1
});
for (var i = 0; i < $scope.strategies.length; i++) if ($scope.strategies[i].strategy_id === the_strategy.strategy_id) {
$scope.strategies[i].is_active = !0;
break
}
}
$scope.strategies = BacktestService.getRawList(),
BacktestService.getList().then(function (strategies) {
$scope.strategies = strategies
});
var strategy_id = $scope.$state.params.strategy_id ? $scope.$state.params.strategy_id : null;
if ($scope.selected_strategy = $scope.strategies[0], strategy_id) for (var i = 0; i < $scope.strategies.length; i++) if ($scope.strategies[i].strategy_id === strategy_id) {
$scope.selected_strategy = $scope.strategies[i];
break
}
highlightCurrent($scope.selected_strategy)
};
$traceurRuntime.createClass(AnalysisListCtrl, {
}, {
}),
AnalysisListCtrl.$inject = [
'$scope',
'BacktestService',
'StrategyService'
];
var $__default = AnalysisListCtrl
},
function (module, exports) {
'use strict';
Object.defineProperties(exports, {
'default': {
get: function () {
return $__default
}
},
__esModule: {
value: !0
}
});
var AnalysisDetailCtrl = function ($scope, $filter, StrategyService, QuoteService, AnalysisService, typeahead, highcharts_i18n_zh_cn) {
var $__0 = this,
that = this;
this.typeaheadCallBack = typeahead.getSymbolSuggestions(QuoteService.symbolTypeAhead),
this.StrategyService = StrategyService,
this.QuoteService = QuoteService,
QuoteService.connect('livemd', ''),
this.$filter = $filter,
this.AnalysisService = AnalysisService,
this.highcharts_i18n_zh_cn = highcharts_i18n_zh_cn;
var strategy_id = $scope.$state.params.strategy_id ? $scope.$state.params.strategy_id : $scope.$parent.selected_strategy.strategy_id;
this.strategy = StrategyService.get(strategy_id);
var orders = this.strategy ? this.strategy.orders : [
];
this.orders = that.filteOrderToShow(orders),
this.positions = this.strategy ? this.strategy.positions : [
],
this.sub_line_limit = 5,
this.current_tab = 'realtime',
this.panelExpaned = !1,
this.args_realtime = {
additionals: [
],
show_signal: [
{
label: '不显示交易信号',
selected: !1
},
{
label: '显示所有交易信号',
selected: !0
},
{
label: '显示相关品种交易信号',
selected: !1
}
],
line_type: 'line',
sub_line: this.makeSubLines('realtime'),
show_chart: !1
},
this.args_history = {
additionals: [
],
show_signal: [
{
label: '不显示交易信号',
selected: !1
},
{
label: '显示所有交易信号',
selected: !0
},
{
label: '显示相关品种交易信号',
selected: !1
}
],
line_type: 'candlestick',
sub_line: this.makeSubLines('history'),
show_chart: !1
},
this.symbolToSub = [
],
Highcharts.setOptions({
global: {
useUTC: !1,
timezoneOffset: - (new Date).getTimezoneOffset()
},
lang: highcharts_i18n_zh_cn.lang
}),
this.line_type_options = AnalysisService.line_type_options,
this.tr_line = {
nothingSelected: '请选择显示曲线'
},
this.default_yaxis = {
title: {
text: null
},
labels: {
enabled: !1
},
lineWidth: 0,
gridLineWidth: 0,
lineColor: 'transparent',
minorTickLength: 0,
tickLength: 0
},
this.chart_config = {
options: {
credits: {
enabled: !1
},
chart: {
backgroundColor: 'transparent',
zoomType: '',
alignTicks: !0
},
navigator: {
enabled: !0,
series: {
  dataGrouping: {
    smoothed: !1
  }
},
xAxis: {
  dateTimeLabelFormats: {
    second: '%H:%M:%S',
    minute: '%H:%M:%S',
    hour: '%H:%M',
    day: '%%m-%d',
    week: '%m-%e',
    month: '%Y-%m',
    year: '%Y'
  }
}
},
rangeSelector: {
buttonSpacing: 10,
buttons: highcharts_i18n_zh_cn.today_buttons,
selected: highcharts_i18n_zh_cn.today_buttons.length - 1,
enabled: !0,
inputEnabled: !1
},
exporting: !1,
legend: {
enabled: !1
},
title: {
text: null
},
xAxis: {
startOnTick: !1,
endOnTick: !1,
type: 'datetime',
ordinal: !0,
title: {
  text: null
},
labels: {
  enabled: !0
},
dateTimeLabelFormats: {
  second: '%H:%M:%S',
  minute: '%H:%M:%S',
  hour: '%H:%M',
  day: '%m-%e',
  week: '%m-%e',
  month: '%Y-%m',
  year: '%Y'
}
},
yAxis: this.default_yaxis,
tooltip: {
xDateFormat: '%Y-%m-%d %H:%M:%S',
shadow: !1,
shared: !1,
followPointer: !0
},
plotLines: {
tickAmount: 0
},
plotOptions: {
line: {
  marker: {
    enabled: !1
  },
  lineWidth: 1
},
series: {
  animation: !1
}
},
loading: !1,
useHighStocks: !0
}
},
$scope.$watch(function () {
return $__0.strategy.orders.map(function (order) {
return order.status
})
}, function () {
that.args_realtime.show_signal[0].selected === !1 && (that.orders = that.filteOrderToShow($__0.strategy.orders), that.updateToday())
}, !0),
QuoteService.setOnBar(function (bar) {
for (var i = 0; i < that.realtimeSeries.length; i++) if (that.realtimeSeries[i].hasOwnProperty('name') && that.realtimeSeries[i].name.toUpperCase() === bar.symbol.toUpperCase()) {
that.realtimeSeries[i].data.push('line' === that.args_realtime.line_type ? [
1000 * bar.utc_time,
bar.close
] : [
1000 * bar.utc_time,
bar.open,
bar.high,
bar.low,
bar.close
]);
break
}
that.updateToday()
}),
this.realtimeSeries = [
],
this.historySeries = [
],
$scope.$on('$destroy', function () {
that.symbolToSub.length && QuoteService.unsub('*')
})
};
$traceurRuntime.createClass(AnalysisDetailCtrl, {
hide_alert: function () {
this.submit_status = null
},
change_tab: function (tab) {
this.sub_line_output = {
},
this.current_tab = tab;
var currentArgs = null;
'realtime' === tab ? (currentArgs = this.args_realtime, this.chart_config.options.rangeSelector.buttons = this.highcharts_i18n_zh_cn.today_buttons, this.chart_config.options.rangeSelector.selected = this.highcharts_i18n_zh_cn.today_buttons.length - 1)  : (currentArgs = this.args_history, this.chart_config.options.rangeSelector.buttons = this.highcharts_i18n_zh_cn.history_buttons, this.chart_config.options.rangeSelector.selected = this.highcharts_i18n_zh_cn.history_buttons.length - 1),
currentArgs.submitted ? this.notifySeriesChange(tab)  : this.chart_config.series = [
]
},
filterRelativeOrders: function (mixedOrders, args) {
var symbolToShow = [
],
res = [
];
return args.sub_line.forEach(function (sub) {
sub.selected === !0 && symbolToShow.push(sub.symbol)
}),
symbolToShow.length && mixedOrders.forEach(function (order) {
var thisSymbol = order.exchange + '.' + order.sec_id;
symbolToShow.indexOf(thisSymbol) > - 1 && res.push(order)
}),
res
},
get_typeahead: function (input) {
return this.typeaheadCallBack(input)
},
filteOrderToShow: function (orders) {
var res = [
],
toShow = [
2,
3,
5
];
return orders.forEach(function (order) {
toShow.indexOf(order.status) > - 1 && res.push(order)
}),
orders
},
makeSubLines: function (type) {
var that = this,
res = {
},
orders = this.orders;
return 'realtime' === type && (orders = this.filteToday(orders)),
orders.forEach(function (order) {
var symbol = order.exchange + '.' + order.sec_id;
res[symbol] ? res[symbol].transact_time = Math.min(res[symbol].transact_time, 1000 * order.transact_time)  : res[symbol] = {
exchange: order.exchange,
sec_id: order.sec_id,
sec_name: order.sec_name,
symbol: symbol,
transact_time: 1000 * order.transact_time
}
}),
this.positions.forEach(function (po) {
var symbol = po.exchange + '.' + po.sec_id;
res[symbol] || (res[symbol] = {
exchange: po.exchange,
sec_id: po.sec_id,
sec_name: po.sec_name,
symbol: symbol,
transact_time: 1000 * po.transact_time
})
}),
res = Object.keys(res).map(function (key) {
return res[key]
}),
res.forEach(function (r) {
that.StrategyService.fetch_sec_name(r)
}),
res
},
submit: function (type) {
this.checkInput(type) && ('realtime' === type ? (this.args_realtime.submitted = !0, this.refreshRealTimeChart())  : (this.args_history.submitted = !0, this.refreshHistoryChart()))
},
checkInput: function (type) {
this.submit_status = '';
var args = 'realtime' === type ? this.args_realtime : this.args_history,
sub_count = 0;
return args.sub_line.forEach(function (sub) {
sub.selected === !0 && sub_count++
}),
args.additionals.length + sub_count === 0 && (this.submit_status = 'no_ref_series'),
args.additionals.length + sub_count > this.sub_line_limit && (this.submit_status = 'too_much_series'),
0 === this.submit_status.length
},
find_start_time: function (trs) {
var arr = trs.map(function (tr) {
return tr.transact_time
});
return Math.min.apply(Math, arr)
},
filteToday: function (trs) {
var now = new Date,
this_year = now.getFullYear(),
this_month = now.getMonth(),
this_date = now.getDate(),
res = [
];
return trs.forEach(function (tr) {
if (8 !== tr.status) {
var tr_time = new Date(1000 * tr.transact_time),
that_year = tr_time.getFullYear(),
that_month = tr_time.getMonth(),
that_date = tr_time.getDate();
that_year === this_year && that_month === this_month && that_date === this_date && res.push(tr)
}
}),
res
},
filteDirection: function (trs, side, pos_eft, ord_status) {
var res = [
];
switch (pos_eft) {
case 'open':
trs.forEach(function (tr) {
  1 === tr.position_effect && tr.side === side && tr.status === ord_status && res.push(tr)
});
break;
case 'close':
trs.forEach(function (tr) {
  tr.position_effect > 1 && tr.side === side && tr.status === ord_status && res.push(tr)
})
}
return res
},
mergeMsg: function (trs, realtime) {
var that = this,
res = {
};
return trs.forEach(function (tr) {
var tr_time = new Date(1000 * tr.transact_time),
that_time = new Date(tr_time.getFullYear(), tr_time.getMonth(), tr_time.getDate());
realtime && (that_time = new Date(tr_time.getFullYear(), tr_time.getMonth(), tr_time.getDate(), tr_time.getHours(), tr_time.getMinutes()));
var k = that_time.getTime();
res[k] ? res[k].push(tr)  : res[k] = [
tr
]
}),
Object.keys(res).map(function (key) {
return {
transact_time: key,
text: res[key].map(function (tr) {
  return that.makeMsg(tr)
}).join('<br>')
}
})
},
refreshHistoryChart: function () {
var that = this,
dataJoin = that.checkSeriesChange(that.args_history, that.historySeries);
that.historySeries = dataJoin.seriesToKeep;
var end_time = (new Date).getTime(),
start_time = that.find_start_time(this.args_history.sub_line);
if (start_time = that.minDays(start_time, 60), dataJoin.subLineToAdd.length > 0) {
var as_ticks = 'line' === that.args_history.line_type;
dataJoin.subLineToAdd.forEach(function (sub) {
that.AnalysisService.getDailyBars(sub, start_time, end_time, as_ticks).then(function (resp) {
  that.historySeries.push({
    name: sub,
    data: resp,
    type: that.args_history.line_type
  }),
  that.notifySeriesChange('history', start_time, end_time)
}, function () {
})
})
}
if (dataJoin.additionalToAdd.length > 0 && dataJoin.additionalToAdd.forEach(function (ad) {
that.AnalysisService.getDailyBars(ad, start_time, end_time).then(function (resp) {
that.historySeries.push({
  name: ad,
  data: resp,
  type: 'line'
}),
that.notifySeriesChange('history', start_time, end_time)
}, function () {
})
}), this.args_history.show_signal[0].selected === !1) {
var ordersToshow = that.orders;
this.args_history.show_signal[2].selected === !0 && (ordersToshow = that.filterRelativeOrders(ordersToshow, that.args_history));
var points = that.mergeMsg(ordersToshow).map(function (tr) {
return {
  x: tr.transact_time,
  title: ' ',
  text: tr.text
}
}),
signals = {
type: 'flags',
data: that.sortPoints(points),
shape: 'url(http://localhost:8002/assets/images/trade-signal.png)',
y: - 10,
tooltip: {
  headerFormat: '',
  pointFormatter: function () {
    return '<span>' + that.$filter('date') (this.x, 'yyyy-MM-dd') + '<br>' + this.text + '</span>'
  }
}
};
that.historySeries.push(signals)
}
that.notifySeriesChange('history', start_time, end_time)
},
updateToday: function () {
var that = this,
todays = that.filteToday(this.orders);
that.args_realtime.show_signal[2].selected === !0 && (todays = that.filterRelativeOrders(todays, that.args_realtime));
for (var seriesMap = [
{
side: 1,
pos_effect: 'open',
order_status: 5,
icon: 'url(http://localhost:8002/assets/images/openlong-empty.png)'
},
{
side: 1,
pos_effect: 'open',
order_status: 2,
icon: 'url(http://localhost:8002/assets/images/openlong-half.png)'
},
{
side: 1,
pos_effect: 'open',
order_status: 3,
icon: 'url(http://localhost:8002/assets/images/openlong-full.png)'
},
{
side: 1,
pos_effect: 'close',
order_status: 5,
icon: 'url(http://localhost:8002/assets/images/closelong-empty.png)'
},
{
side: 1,
pos_effect: 'close',
order_status: 2,
icon: 'url(http://localhost:8002/assets/images/closelong-half.png)'
},
{
side: 1,
pos_effect: 'close',
order_status: 3,
icon: 'url(http://localhost:8002/assets/images/closelong-full.png)'
},
{
side: 2,
pos_effect: 'open',
order_status: 5,
icon: 'url(http://localhost:8002/assets/images/openshort-empty.png)'
},
{
side: 2,
pos_effect: 'open',
order_status: 2,
icon: 'url(http://localhost:8002/assets/images/openshort-half.png)'
},
{
side: 2,
pos_effect: 'open',
order_status: 3,
icon: 'url(http://localhost:8002/assets/images/openshort-full.png)'
},
{
side: 2,
pos_effect: 'close',
order_status: 5,
icon: 'url(http://localhost:8002/assets/images/closeshort-empty.png)'
},
{
side: 2,
pos_effect: 'close',
order_status: 2,
icon: 'url(http://localhost:8002/assets/images/closeshort-half.png)'
},
{
side: 2,
pos_effect: 'close',
order_status: 3,
icon: 'url(http://localhost:8002/assets/images/closeshort-full.png)'
}
], i = 0; i < seriesMap.length; i++) {
var orders = that.filteDirection(todays, seriesMap[i].side, seriesMap[i].pos_effect, seriesMap[i].order_status);
if (orders.length) {
for (var merged = that.mergeMsg(orders, !0), points = merged.map(function (tr) {
  return {
    x: tr.transact_time,
    title: ' ',
    text: tr.text
  }
}), foundDuplicated = !1, j = 0; j < that.realtimeSeries.length; j++) if (that.realtimeSeries[j].shape === seriesMap[i].icon) {
  that.realtimeSeries[j].data = that.sortPoints(points),
  foundDuplicated = !0;
  break
}
foundDuplicated || that.realtimeSeries.push({
  type: 'flags',
  data: that.sortPoints(points),
  shape: seriesMap[i].icon,
  tooltip: {
    headerFormat: '',
    pointFormatter: function () {
      return '<span>' + that.$filter('date') (this.x, 'yyyy-MM-dd HH:mm') + '<br>' + this.text + '</span>'
    }
  }
})
}
}
},
refreshRealTimeChart: function () {
var that = this,
dataJoin = that.checkSeriesChange(that.args_realtime, that.realtimeSeries);
if (that.realtimeSeries = dataJoin.seriesToKeep, dataJoin.subLineToAdd.length > 0) {
var asTicks = 'line' === that.args_realtime.line_type;
dataJoin.subLineToAdd.forEach(function (sub) {
that.AnalysisService.getTodayBars(sub, 60, asTicks).then(function (resp) {
  that.realtimeSeries.push({
    name: sub,
    data: resp,
    type: that.args_realtime.line_type
  }),
  that.notifySeriesChange('realtime')
}, function () {
})
})
}
dataJoin.additionalToAdd.length > 0 && dataJoin.additionalToAdd.forEach(function (ad) {
that.AnalysisService.getTodayBarsAsTicks(ad).then(function (resp) {
that.realtimeSeries.push({
  name: ad,
  data: resp,
  type: 'line'
}),
that.notifySeriesChange('realtime')
}, function () {
})
}),
that.args_realtime.show_signal[0].selected === !1 && that.updateToday(),
that.notifySeriesChange('realtime')
},
checkSeriesChange: function (args, series) {
for (var seriesToKeep = [
], subLineToAdd = [
], additionalToAdd = [
], i = 0; i < series.length; i++) if (series[i].type === args.line_type) {
for (var inSubLine = !1, j = 0; j < args.sub_line.length; j++) if (args.sub_line[j].selected === !0 && series[i].name.toUpperCase() === args.sub_line[j].symbol.toUpperCase()) {
seriesToKeep.push(series[i]),
inSubLine = !0;
break
}
inSubLine || args.additionals.forEach(function (ad) {
var ad_symbol = ad.exchange + '.' + ad.sec_id;
series[i].name.toUpperCase() === ad_symbol.toUpperCase() && seriesToKeep.push(series[i])
})
} else args.additionals.forEach(function (ad) {
var ad_symbol = ad.exchange + '.' + ad.sec_id;
series[i].hasOwnProperty('name') && series[i].name.toUpperCase() === ad_symbol.toUpperCase() && seriesToKeep.push(series[i])
});
for (var i$__2 = 0; i$__2 < args.sub_line.length; i$__2++) if (args.sub_line[i$__2].selected === !0) {
for (var subSymbol = args.sub_line[i$__2].exchange + '.' + args.sub_line[i$__2].sec_id, alreadyPloted = !1, j$__3 = 0; j$__3 < seriesToKeep.length; j$__3++) if (seriesToKeep[j$__3].hasOwnProperty('name') && seriesToKeep[j$__3].name.toUpperCase() === subSymbol.toUpperCase() && seriesToKeep[j$__3].type === args.line_type) {
alreadyPloted = !0;
break
}
alreadyPloted || subLineToAdd.push(subSymbol)
}
return args.additionals.length > 0 && args.additionals.forEach(function (ad) {
for (var adSymbol = ad.exchange + '.' + ad.sec_id, alreadyPloted = !1, j = 0; j < seriesToKeep.length; j++) if (seriesToKeep[j].hasOwnProperty('name') && seriesToKeep[j].name.toUpperCase() === adSymbol.toUpperCase()) {
alreadyPloted = !0;
break
}
alreadyPloted || additionalToAdd.push(adSymbol)
}),
{
seriesToKeep: seriesToKeep,
subLineToAdd: subLineToAdd,
additionalToAdd: additionalToAdd
}
},
notifySeriesChange: function (type) {
var seriesOptions,
args,
that = this;
'realtime' === type ? (seriesOptions = this.realtimeSeries, args = this.args_realtime)  : (seriesOptions = this.historySeries, args = this.args_history);
for (var yaxes = [
], i = 0; i < seriesOptions.length; i++) yaxes.push({
title: {
text: null
},
labels: {
enabled: !1
},
lineWidth: 0,
minorGridLineWidth: 0,
lineColor: 'transparent',
minorTickLength: 0,
tickLength: 0,
opposite: !0
});
if (this.chart_config.options.yAxis = yaxes, this.chart_config.series = that.sortSeries(seriesOptions), args.show_chart = this.chart_config.series.length > 0, seriesOptions.length > 0 && 'realtime' === type) {
var toSub = [
],
flagsCount = 0;
seriesOptions.forEach(function (se) {
se.name ? toSub.push(se.name + '.bar.60')  : (flagsCount += 1, se.y = flagsCount % 2 === 1 ? (flagsCount + 1) / 2 * - 10 : (flagsCount + 1) / 2 * 10)
}),
toSub.sort(),
that.symbolToSub.sort();
var subStr = toSub.join(',');
if (subStr !== that.symbolToSub.join(',')) {
var deltaToSub = [
],
deltaUnSub = [
];
toSub.forEach(function (symbol) {
  - 1 === that.symbolToSub.indexOf(symbol) && deltaToSub.push(symbol)
}),
that.symbolToSub.forEach(function (symbol) {
  - 1 === toSub.indexOf(symbol) && deltaUnSub.push(symbol)
}),
deltaToSub.length > 0 && (that.QuoteService.sub(deltaToSub.join(',')), deltaToSub.forEach(function (toSub) {
  that.symbolToSub.push(toSub)
})),
deltaUnSub.length > 0 && (that.args_realtime.sub_line.forEach(function (subLine) {
  var subStr = subLine.symbol + '.bar.60';
  if (subLine.selected === !0 && deltaUnSub.indexOf(subStr) > - 1) {
    var idx = deltaUnSub.indexOf(subStr);
    idx > - 1 && deltaUnSub.splice(idx, 1)
  }
}), deltaUnSub.length > 0 && (that.QuoteService.unsub(deltaUnSub.join(',')), deltaUnSub.forEach(function (unSub) {
  var idx = that.symbolToSub.indexOf(unSub);
  idx > - 1 && that.symbolToSub.splice(idx, 1)
})))
}
}
},
sortPoints: function (arr) {
if (arr.length <= 1) return arr;
for (var pivotIndex = Math.floor(arr.length / 2), pivot = arr.splice(pivotIndex, 1) [0], left = [
], right = [
], i = 0; i < arr.length; i++) arr[i].x < pivot.x ? left.push(arr[i])  : right.push(arr[i]);
return this.sortPoints(left).concat([pivot], this.sortPoints(right))
},
sortSeries: function (series) {
var res = [
],
count = 0;
return series.forEach(function (se) {
'flags' !== se.type && (se.yAxis = count, 0 === count ? se.id = 'ref' : se.hasOwnProperty('id') && delete se.id, count++, res.push(se))
}),
series.forEach(function (se) {
'flags' === se.type && (se.onSeries = 'ref', res.push(se))
}),
res
},
makeMsg: function (tr) {
var mag_obj = {
exchange: tr.exchange,
sec_id: tr.sec_id,
direction: this.$filter('direction') ([tr.side,
tr.position_effect]),
price: '￥' + this.$filter('number') (tr.price, 2),
volume: ' x' + this.$filter('number') (tr.volume, 0)
};
return Object.keys(mag_obj).map(function (key) {
return mag_obj[key]
}).join(' ')
},
minDays: function (time, tobe) {
var now = (new Date).getTime(),
ms = now - time,
days = Math.floor(ms / 86400000);
return tobe > days && (time = now - 24 * tobe * 3600 * 1000),
time
},
selectTypeChange: function (vals) {
for (var found = !1, i = 0; i < vals.length; i++) vals[i].selected && (vals[i].selected = !found, found = !0)
},
panelExpand: function (event) {
this.panelExpaned = !this.panelExpaned,
event.preventDefault();
var t = $(event.target).closest('.panel'),
n = $(t).find('.panel-body'),
r = 40;
if (0 !== $(n).length) {
var i = $(t).offset().top,
s = $(n).offset().top;
r = s - i
}
if ($('body').hasClass('panel-expand') && $(t).hasClass('panel-expand')) $('body, .panel').removeClass('panel-expand'),
$('.panel').removeAttr('style'),
$(n).removeAttr('style');
 else if ($('body').addClass('panel-expand'), $(event.target).closest('.panel').addClass('panel-expand'), 0 !== $(n).length && 40 != r) {
var o = 40;
$(t).find(' > *').each(function () {
var e = $(event.target).attr('class');
'panel-heading' != e && 'panel-body' != e && (o += $(event.target).height() + 30)
}),
40 != o && $(n).css('top', o + 'px')
}
$(window).trigger('resize')
}
},
{
}), AnalysisDetailCtrl.$inject = [
'$scope',
'$filter',
'StrategyService',
'gmsdk.md',
'AnalysisService',
'util.typeahead',
'highcharts_i18n_zh_cn'
]; var $__default = AnalysisDetailCtrl
}
]),
angular.module('myApp').run(['$templateCache',
function ($templateCache) {
$templateCache.put('app/about/about.html', '<div class="modal-header"><button type="button" class="close" ng-click="$dismiss()">×</button><h4 class="modal-title">关于</h4></div><div class="modal-body"><address class="a-plain a-active"><strong>版本信息</strong><br>当前版本：{{ modal.appInfo.version|available }}<br>发布时间：{{ modal.appInfo.time|date:\'yyyy-MM-dd HH:mm\'|available }}</address></div><div class="modal-footer text-muted"><p class="text-center m-b-5"><span class="m-r-10"><i class="fa fa-globe"></i> myquant.cn</span> <span class="m-r-10"><i class="fa fa-phone"></i> 0755-86962125</span> <span class="m-r-10"><i class="fa fa-envelope"></i> support@myquant.cn</span></p><p class="text-center m-b-0">© 2015 深圳红树科技有限公司 保留所有权利</p></div>'),
$templateCache.put('app/about/help.html', '<div id="content" class="content position"><div class="iframe"><iframe src="http://www.myquant.cn/docs/"></iframe></div></div>'),
$templateCache.put('app/account/account.info.html', '<div id="content" class="content animated fadeIn" ng-controller="AccInfoCtrl"><ol class="breadcrumb pull-right"><li><a ui-sref="app.account.list">实盘账户</a></li><li class="active">{{acc.account_name}}</li></ol><h1 class="page-header"></h1><div class="row"><div class="col-md-12"><div class="panel-1 b-color"><div class="panel-heading"><div class="panel-heading-btn" ng-click="refreshCash()"><a class="btn btn-xs btn-success pull-right"><i class="fa fa-refresh"></i> 刷新</a></div><h4 class="panel-title span-a ng-binding">账户资金</h4></div><div class="panel-footer text-center"><div class="row"><div class="col-md-6"><div class="col-md-3">动态权益：</div><div class="col-md-9">{{ dispCash.nav |number: 2 }}</div></div><div class="col-md-6"><div class="col-md-3">可用资金：</div><div class="col-md-9">{{ dispCash.available | number: 2 }}</div></div></div></div></div></div></div><div class="row m-t-20"><div class="col-md-12"><div class="panel-1 b-color"><div class="panel-heading"><div class="panel-heading-btn" ng-click="refreshPos()"><a class="btn btn-xs btn-success pull-right"><i class="fa fa-refresh"></i> 刷新</a></div><h4 class="panel-title span-a ng-binding">持仓明细</h4></div><div class="panel-footer text-center"><div class="row"><div class="col-md-12"><table st-table="displayedCollection" st-safe-src="positions" class="table table-condensed table-hover"><thead><tr><th st-skip-natural="true" st-sort="exchange" class="text-center">交易所</th><th st-skip-natural="true" st-sort="sec_id" class="text-center" st-sort-default="true">代码</th><th st-skip-natural="true" st-sort="sec_name" class="text-center">名称</th><th st-skip-natural="true" st-sort="side" class="text-center">多空</th><th st-skip-natural="true" class="text-right" st-sort="volume">数量</th><th st-skip-natural="true" class="text-right" st-sort="available">可用</th><th st-skip-natural="true" class="text-right">成本</th><th st-skip-natural="true" class="text-right">成本金额</th></tr></thead><tbody><tr ng-repeat="row in displayedCollection | limitTo:200" ng-class-odd="\'tr-odd\'" ng-class-even="\'tr-even\'"><td class="text-center">{{ row.exchange |exchange}}</td><td class="text-center">{{ row.sec_id }}</td><td class="text-center">{{ row.sec_name |available}}</td><td class="text-center">{{ row.side | side }}</td><td class="text-right"><a tooltip-placement="left" tooltip="总仓:{{row.volume }} / 今仓:{{row.volume_today?row.volume_today:0}}">{{ [row.volume, row.volume_today] | position_volume }}</a></td><td class="text-right">{{ row.available | number:0 }}</td><td class="text-right">{{ row.vwap | number:2 }}</td><td class="text-right">{{ row.amount |number:2 }}</td></tr></tbody></table></div><div ng-show="pos_errors" class="col-md-10"><i class="fa fa-warning text-warning"></i> <span>{{ pos_errors }}</span></div></div></div></div></div></div></div>'),
$templateCache.put('app/account/account.list.html', '<div id="content" class="content animated fadeIn" ng-controller="AccListCtrl"><ol class="breadcrumb pull-right"><li class="active">实盘账户</li></ol><h1 class="page-header">实盘账户</h1><div class="row"><div class="col-md-12"><div class="panel"><div class="panel-heading b-color"><div class="panel-heading-btn" ng-click="addItem()"><a class="btn btn-xs btn-success pull-right"><i class="fa fa-plus"></i> 新增账户</a></div><h4 class="panel-title" style="color:#FFF">账户管理</h4></div><div class="panel-body"><table st-table="displayedCollection" st-safe-src="accounts" class="table table-hover"><thead><tr><th st-skip-natural="true" st-sort="account_name" st-sort-default="true" class="hand">账户名称</th><th st-skip-natural="true" st-sort="broker_name" class="hand text-center">柜台类型</th><th st-skip-natural="true" st-sort="broker_id" class="hand text-center">机构代码</th><th st-skip-natural="true" st-sort="broker_uri" class="hand">柜台地址</th><th st-skip-natural="true" st-sort="broker_username" class="hand">交易账号</th><th st-skip-natural="true" st-sort="status.state" class="hand text-center">连接状态</th><th st-skip-natural="true" class="text-center">操作</th></tr></thead><tbody><tr ng-repeat="row in displayedCollection |filter: { account_type: 3}|orderObjectBy:\'account_name\':false"><td><a ui-sref="app.account.info({account_id: row.account_id})" tooltip-placement="right" tooltip="点击查看详情">{{row.account_name}}</a></td><td class="text-center">{{row.broker_name}}</td><td class="text-center">{{row.broker_id}}</td><td>{{row.broker_uri}}</td><td>{{row.broker_username}}</td><td class="text-center">{{row.status | account_status }}</td><td class="text-center"><button ng-click="click_account(row)" class="btn" ng-class="{\'btn-success\': !isConnected(row), \'btn-warning\': isConnected(row)}" ng-bind="isConnected(row)?\'断开\':\'连接\'"></button> <button type="button" ng-click="editItem(row)" class="btn btn-success">修改</button> <button type="button" ng-click="remove_confirm(row)" class="btn btn-danger">删除</button></td></tr></tbody></table></div></div></div></div></div>'),
$templateCache.put('app/account/connect.confirm.html', '<div><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">&times;</button><h4 class="modal-title">登录交易</h4></div><div class="modal-body"><div class="alert alert-warning" ng-if="errors"><i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>{{ errors }}</p></div><form class="form-horizontal account-form"><div class="col-md-12"><h4>确认登录交易账户</h4></div><div class="form-group readonly"><label class="control-label col-md-2">账户名称</label><div class="col-md-10"><div class="form-control readonly col-md-10">{{ account.account_name }}</div></div></div><div class="form-group readonly"><label class="control-label col-md-2">经纪商</label><div class="col-md-10"><div class="form-control readonly">{{ account.broker_name }}</div></div></div><div class="form-group readonly"><label class="control-label col-md-2">交易账号</label><div class="col-md-10"><div class="form-control readonly">{{ account.broker_username }}</div></div></div><div class="form-group readonly"><label class="control-label col-md-2">交易密码:</label><div class="col-md-10"><input class="form-control" name="acc_password" type="password" ng-model="account.broker_password" placeholder="您的交易密码, 请先确认账户信息填写正确" required=""></div></div><div class="form-group readonly m-t-5" ng-if="account.broker_channel_id==6"><label class="control-label col-md-2">通讯密码:</label><div class="col-md-10"><input class="form-control" name="acc_captcha" type="password" ng-model="account.broker_captcha" placeholder="来自券商的通讯密码，若没有则不用填写" required=""></div></div></form></div><div class="modal-footer"><span ng-if="dataLoading"><i class="fa fa-spinner fa-spin fa-lg"></i></span> <button type="button" class="btn btn-success" ng-click="ok()">登录交易</button></div></div>'),
$templateCache.put('app/account/disconnect.confirm.html', '<div><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">&times;</button><h4 class="modal-title">退出交易</h4></div><div class="modal-body my-row"><div class="col-md-12"><h4>确认要退出这个交易账户？</h4></div><form class="form-horizontal account-form"><div class="form-group readonly"><label class="control-label col-md-2">账户名称</label><div class="col-md-10"><div class="form-control readonly col-md-10">{{ account.account_name }}</div></div></div><div class="form-group readonly"><label class="control-label col-md-2">经纪商</label><div class="col-md-10"><div class="form-control readonly">{{ account.broker_name }}</div></div></div><div class="form-group readonly"><label class="control-label col-md-2">交易账号</label><div class="col-md-10"><div class="form-control readonly">{{ account.broker_username }}</div></div></div><div ng-show="errors" class="col-md-10 error-fail"><i class="fa fa-warning text-warning"></i> <span>{{ errors }}</span></div></form></div><div class="modal-footer"><button type="button" class="btn btn-warning" ng-click="ok()">退出交易</button></div></div>'),
$templateCache.put('app/account/remove.confirm.html', '<div><div class="modal-header"><button type="button" class="close" ng-click="cancel()" aria-hidden="true">&times;</button><h4 class="modal-title">删除账户</h4></div><div class="modal-body"><div class="alert alert-danger m-b-0"><h4>确认删除账户</h4><div class="row"><div class="col-md-2 col-md-offset-1">账户名称</div><div class="col-md-9">{{ account.account_name }}</div><div class="col-md-2 col-md-offset-1">经纪商</div><div class="col-md-9">{{ account.broker_name }}</div><div class="col-md-2 col-md-offset-1">交易账号</div><div class="col-md-9">{{ account.broker_username }}</div></div></div><div ng-show="errors" class="col-md-10 error-fail"><i class="fa fa-warning text-warning"></i> <span>{{ errors }}</span></div></div><div class="modal-footer"><button type="button" class="btn btn-danger" ng-click="ok()">删除</button></div></div>'),
$templateCache.put('app/account/setting.html', '<div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">&times;</button><h4 class="modal-title">{{ ::title }}</h4></div><div class="modal-body"><form name="acc-form" novalidate="novalidate" class="form-horizontal account-form"><div class="form-group"><label class="control-label col-md-2">账户名称:</label><div class="col-md-10"><input class="form-control" ng-model="acc.account_name" placeholder="请给您的交易账户取个名" required=""></div></div><div class="form-group form-inline"><label class="control-label col-md-2">柜台类型:</label><div class="col-md-10"><select class="form-control full-width" ng-model="acc.broker_channel_id" ng-options="b.id as b.title for b in brokerChannelTypes" ng-change="onChannelSelect()"><option class="full-width" value="" disabled="" selected="" ng-hide="acc.broker_channel_id">请选择您开户柜台的类型</option></select></div></div><div class="form-group form-inline"><label class="control-label col-md-2">经纪机构:</label><div class="col-md-10" id="broker-select" ng-switch="" on="flags.editBrokerName"><input class="form-control full-width" ng-model="acc.broker_name" placeholder="请输入您开户的经纪机构名称或拼音缩写，如：‘上海中期\'、\'SHZQ\'" typeahead="broker.name for broker in getTypeaheads($viewValue)" typeahead-min-length="1" typeahead-on-select="onBrokerSelect($item)" required=""></div></div><div class="form-group"><label class="control-label col-md-2">机构代码:</label><div class="col-md-10"><input class="form-control" name="broker_id" ng-model="acc.broker_id" placeholder="您开户公司的机构代码" required=""></div></div><div class="form-group"><label class="control-label col-md-2">柜台地址:</label><div class="col-md-10 vertical middle" ng-switch="" on="flags.editBrokerUri"><div ng-switch-when="false"><div isteven-multi-select="" input-model="addrGrouped" output-model="addrChoosed" button-label="label" item-label="label" selection-mode="single" group-property="group" tick-property="selected" helper-elements="" translation="localLang" max-height="200px" class="inline float-left" id="acc-multi-select" on-item-click="onUriSelect( data )"></div><div class="float-left m-l-5"><button class="btn btn-primary" ng-click="onUriBtnClick()">编辑</button></div></div><div ng-switch-when="true"><input class="form-control" name="broker_addr" type="text" ng-model="acc.broker_uri" value="acc.broker_uri" placeholder="您开户柜台的交易服务IP和端口，格式: tcp://1.1.1.1:41205"></div></div></div><div class="form-group"><label class="control-label col-md-2">交易账号:</label><div class="col-md-10"><input class="form-control" name="acc_client_no" ng-model="acc.broker_username" placeholder="您的交易账号（请注意：交易密码在连接柜台时输入）" required=""></div></div></form></div><div class="modal-footer"><div ng-show="errors" class="alert alert-danger text-left">{{ errors }}</div><button class="btn btn-success" ng-click="ok()">保存</button></div>'),
$templateCache.put('app/analysis/analysis.list.html', '<div id="content" class="content" ng-controller="AnalysisListCtrl"><ol class="breadcrumb pull-right"><li><a ui-sref="app.analysis.list">信号分析</a></li><li class="active">{{selected_strategy.name}}</li></ol><h1 class="page-header">信号分析</h1><div class="row"><div class="col-md-2"><div class="hidden-sm hidden-xs"><ul class="nav nav-pills nav-stacked nav-inbox"><li ng-repeat="strategy in strategies|orderObjectBy:\'name\':false" ng-class="{\'active\':strategy.is_active}"><a ui-sref="app.analysis.detail({strategy_id: strategy.strategy_id})"><i class="fa fa-inbox fa-fw m-r-5"></i>{{strategy.name}}</a></li></ul></div></div><div class="col-md-10"><div ng-include="\'app/analysis/analysis.panel.html\'"></div></div></div></div>'),
$templateCache.put('app/analysis/analysis.panel.html', '<div class="panel" ng-controller="AnalysisDetailCtrl as panel"><div class="panel-heading b-color"><div class="panel-heading-btn"><a class="btn btn-xs btn-icon btn-circle btn-success" tooltip-placement="left" tooltip="展开 / 收起" ng-click="panel.panelExpand($event)"><i class="fa fa-expand"></i></a></div><h4 class="panel-title text-white"><a ui-sref="app.strategy.detail({strategy_id: panel.strategy.strategy_id})"><span tooltip-placement="right" tooltip="返回策略详情"><i class="fa fa-arrow-left"></i> {{panel.strategy.name}}</span></a></h4></div><div class="panel-body"><div class="alert alert-warning" ng-if="panel.submit_status===\'no_ref_series\'"><button type="button" class="close" ng-click="panel.hide_alert()"><span>&times;</span></button> <i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>未选择显示的曲线</p></div><div class="alert alert-warning" ng-if="panel.submit_status===\'too_much_series\'"><button type="button" class="close" ng-click="panel.hide_alert()"><span>&times;</span></button> <i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>选择曲线数目超出限制({{panel.sub_line_limit}})</p></div><div class="alert alert-warning" ng-if="panel.submit_status===\'too_much_candlestick\'"><button type="button" class="close" ng-click="panel.hide_alert()"><span>&times;</span></button> <i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>选择K线数目超出限制(1)</p></div><ul class="nav nav-pills"><li ng-class="{\'active\': panel.current_tab==\'realtime\'}" ng-click="panel.change_tab(\'realtime\')"><a>实时数据</a></li><li ng-class="{\'active\': panel.current_tab==\'history\'}" ng-click="panel.change_tab(\'history\')"><a>历史数据</a></li></ul><div class="tab-content" ng-switch="panel.current_tab"><div class="tab-pane active" ng-switch-when="realtime"><div class="row"><div class="col-md-9"><highchart config="panel.chart_config"></highchart><div class="text-center code-mask" ng-hide="panel.args_realtime.show_chart"><span>暂无数据</span></div></div><div class="col-md-3"><form><fieldset><legend>选择显示数据</legend><div class="m-b-15"><label>曲线类型</label><select class="form-control" ng-model="panel.args_realtime.line_type" ng-options="op.type as op.label for op in panel.line_type_options" ng-change="panel.selectTypeChange(panel.args_realtime.sub_line)"></select></div><div class="m-b-15"><label>显示曲线</label><div isteven-multi-select="" input-model="panel.args_realtime.sub_line" output-model="panel.sub_line_output" button-label="sec_name" item-label="sec_name" tick-property="selected" helper-elements="" translation="panel.tr_line" max-labels="1" selection-mode="{{panel.args_realtime.line_type==\'line\'?\'multiple\':\'single\'}}" class="default-multi-select"></div></div><div class="m-b-15"><label>显示信号</label><div isteven-multi-select="" input-model="panel.args_realtime.show_signal" output-model="panel.show_signal_output" button-label="label" item-label="label" tick-property="selected" helper-elements="" translation="panel.tr_line" max-labels="1" selection-mode="single" class="default-multi-select"></div></div><div class="m-b-15"><label>叠加曲线</label><tags-input ng-model="panel.args_realtime.additionals" display-property="sec_name" placeholder="代码/拼音缩写"><auto-complete source="panel.get_typeahead($query)" debounce-delay="0" min-length="1"></auto-complete></tags-input></div><button ng-click="panel.submit(\'realtime\')" type="button" class="btn btn-sm btn-success btn-block">提交</button></fieldset></form></div></div></div><div class="tab-pane active" ng-switch-when="history"><div class="row"><div class="col-md-9"><highchart config="panel.chart_config"></highchart><div class="text-center code-mask" ng-hide="panel.args_history.show_chart"><span>暂无数据</span></div></div><div class="col-md-3"><form><fieldset><legend>选择显示数据</legend><div class="m-b-15"><label>曲线类型</label><select class="form-control" ng-model="panel.args_history.line_type" ng-options="op.type as op.label for op in panel.line_type_options" ng-change="panel.selectTypeChange(panel.args_history.sub_line)"></select></div><div class="m-b-15"><label>显示曲线</label><div isteven-multi-select="" input-model="panel.args_history.sub_line" output-model="panel.sub_line_output" button-label="sec_name" item-label="sec_name" tick-property="selected" helper-elements="" translation="panel.tr_line" selection-mode="{{panel.args_history.line_type==\'line\'?\'multiple\':\'single\'}}" max-labels="1" class="default-multi-select"></div></div><div class="m-b-15"><label>显示信号</label><div isteven-multi-select="" input-model="panel.args_history.show_signal" output-model="panel.show_signal_output" button-label="label" item-label="label" tick-property="selected" helper-elements="" translation="panel.tr_line" max-labels="1" selection-mode="single" class="default-multi-select"></div></div><div class="m-b-15"><label>叠加曲线</label><tags-input ng-model="panel.args_history.additionals" display-property="label" placeholder="代码/拼音缩写"><auto-complete source="panel.get_typeahead($query)" debounce-delay="0" min-length="1"></auto-complete></tags-input></div><button ng-click="panel.submit(\'history\')" type="button" class="btn btn-sm btn-success btn-block">提交</button></fieldset></form></div></div></div></div></div></div>'),
$templateCache.put('app/error/404.html', '<div class="container"><h1>Not found <span>:(</span></h1><p>Sorry, but the page you were trying to view does not exist.</p><p>It looks like this was the result of either:</p><ul><li>a mistyped address</li><li>an out-of-date link</li></ul><style>\r\n        ::-moz-selection {\r\n            background: #b3d4fc;\r\n            text-shadow: none;\r\n        }\r\n\r\n        ::selection {\r\n            background: #b3d4fc;\r\n            text-shadow: none;\r\n        }\r\n\r\n        html {\r\n            padding: 30px 10px;\r\n            font-size: 20px;\r\n            line-height: 1.4;\r\n            color: #737373;\r\n            background: #f0f0f0;\r\n            -webkit-text-size-adjust: 100%;\r\n            -ms-text-size-adjust: 100%;\r\n        }\r\n\r\n        html,\r\n        input {\r\n            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n        }\r\n\r\n        body {\r\n            max-width: 500px;\r\n            _width: 500px;\r\n            padding: 30px 20px 50px;\r\n            border: 1px solid #b3b3b3;\r\n            border-radius: 4px;\r\n            margin: 0 auto;\r\n            box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\r\n            background: #fcfcfc;\r\n        }\r\n\r\n        h1 {\r\n            margin: 0 10px;\r\n            font-size: 50px;\r\n            text-align: center;\r\n        }\r\n\r\n        h1 span {\r\n            color: #bbb;\r\n        }\r\n\r\n        h3 {\r\n            margin: 1.5em 0 0.5em;\r\n        }\r\n\r\n        p {\r\n            margin: 1em 0;\r\n        }\r\n\r\n        ul {\r\n            padding: 0 0 0 40px;\r\n            margin: 1em 0;\r\n        }\r\n\r\n        .container {\r\n            max-width: 380px;\r\n            _width: 380px;\r\n            margin: 0 auto;\r\n        }\r\n\r\n        /* google search */\r\n\r\n        #goog-fixurl ul {\r\n            list-style: none;\r\n            padding: 0;\r\n            margin: 0;\r\n        }\r\n\r\n        #goog-fixurl form {\r\n            margin: 0;\r\n        }\r\n\r\n        #goog-wm-qt,\r\n        #goog-wm-sb {\r\n            border: 1px solid #bbb;\r\n            font-size: 16px;\r\n            line-height: normal;\r\n            vertical-align: top;\r\n            color: #444;\r\n            border-radius: 2px;\r\n        }\r\n\r\n        #goog-wm-qt {\r\n            width: 220px;\r\n            height: 20px;\r\n            padding: 5px;\r\n            margin: 5px 10px 0 0;\r\n            box-shadow: inset 0 1px 1px #ccc;\r\n        }\r\n\r\n        #goog-wm-sb {\r\n            display: inline-block;\r\n            height: 32px;\r\n            padding: 0 10px;\r\n            margin: 5px 0 0;\r\n            white-space: nowrap;\r\n            cursor: pointer;\r\n            background-color: #f5f5f5;\r\n            background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\r\n            background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\r\n            background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\r\n            background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\r\n            -webkit-appearance: none;\r\n            -moz-appearance: none;\r\n            appearance: none;\r\n            *overflow: visible;\r\n            *display: inline;\r\n            *zoom: 1;\r\n        }\r\n\r\n        #goog-wm-sb:hover,\r\n        #goog-wm-sb:focus {\r\n            border-color: #aaa;\r\n            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n            background-color: #f8f8f8;\r\n        }\r\n\r\n        #goog-wm-qt:hover,\r\n        #goog-wm-qt:focus {\r\n            border-color: #105cb6;\r\n            outline: 0;\r\n            color: #222;\r\n        }\r\n\r\n        input::-moz-focus-inner {\r\n            padding: 0;\r\n            border: 0;\r\n        }\r\n    </style></div>'),
$templateCache.put('app/auth/login.html', '<div class="overflow-hidden"><div class="login-cover"><div class="login-cover-image"><img src="{{profile.orginfo.login_backbround_img}}" data-id="login-cover-image" alt=""></div><div class="login-cover-bg"></div></div><div ng-controller="LoginController"><div class="login login-v2 animated flipInX"><div class="login-header"><img src="{{profile.orginfo.login_logo}}" width="373" height="52"><font>v2.0</font></div><div class="login-content"><form class="margin-bottom-0"><div class="form-group m-b-20"><input type="text" class="form-control input-lg" placeholder="请输入邮箱或手机号" ng-model="username"></div><div class="form-group m-b-20"><input type="password" class="form-control input-lg" placeholder="请输入登录密码" ng-model="password"></div><div class="checkbox m-b-20"><ul class="parsley-errors-list filled"><li class="parsley-type">{{ error_msg }}</li></ul></div><div class="login-buttons"><button class="btn btn-success btn-block btn-lg" ng-click="login()">登录</button></div><div class="m-t-20 a-plain a-active" ng-if="profile.orginfo.registe_entry==1">忘记密码？<a ng-click="reset_password()">找回密码</a><span style="float:right;">没有账号？<a ng-click="sign_up()">立即注册</a></span></div><div class="m-t-20 a-plain a-active" ng-if="profile.orginfo.registe_entry==0"></div></form></div><div class="login02 m-t-10" ng-if="profile.orginfo.third_part_login_entry==1"><ul><li>第三方账号登录：</li><li class="a-plain a-active" ng-click="oauth_login(\'qq\')"><a><i class="fa fa-qq fa-2x"></i></a></li><li class="a-plain a-active" ng-click="oauth_login(\'weixin\')"><a><i class="fa fa-weixin fa-2x"></i></a></li><li class="a-plain a-active" ng-click="oauth_login(\'weibo\')"><a><i class="fa fa-weibo fa-2x"></i></a></li></ul></div></div></div></div>'),
$templateCache.put('app/auth/login.oauth.html', '<div class="modal-header"><button type="button" class="close" ng-click="$dismiss(\'manual\')">&times;</button><h4>第三方登录</h4></div><div class="modal-body height-md"><iframe id="oauth_login" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe></div>'),
$templateCache.put('app/auth/password.reset.html', '<!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title></title></head><body></body></html>'),
$templateCache.put('app/auth/permission.deny.dialog.html', '<div class="modal-header"><button type="button" class="close" ng-click="$close()" aria-hidden="true">&times;</button><h4>功能受限</h4></div><div class="modal-body"><div class="alert alert-danger m-b-0"><h4>{{modal.title}}</h4>{{modal.description}}<br>如需继续使用，请联系我们。<br>邮箱：support@myquant.cn / 电话：0755-86962125。</div></div>'),
$templateCache.put('app/risk/risk.edit.html', '<div ng-controller="RiskEditCtrl"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()">×</button><h4 class="modal-title">风控设置</h4></div><div class="modal-body"><div class="alert alert-success anime-i-fadeIn" ng-if="submit_success===true"><i class="fa fa-check fa-2x pull-left"></i><p>保存成功</p></div><div class="alert alert-error anime-i-bounceIn" ng-if="submit_success===false"><i class="fa fa-times fa-2x pull-left"></i><p>保存失败</p></div><div class="alert alert-warning anime-i-flashIn" ng-if="submit_success===\'tobecompleted\'"><i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>存在不完整的规则，请填写/选择该规则的所有选项</p></div><div class="animate-slide"><form class="form-horizontal"><div class="form-group"><div class="col-md-2 control-label">风控状态：</div><div class="col-md-10"><div class="float-left"><span class="switch ng-valid" ng-click="target.flag = !target.flag" ng-class="{ \'checked\':target.flag }"><div class="circle"></div><input type="checkbox" ng-model="target.flag" style="display:none" class="ng-pristine ng-untouched ng-valid"></span></div><div class="m-l-5 m-t-4"><a class="btn btn-xs btn-success disabled m-l-5" ng-class="{\'btn-success\':target.flag, \'btn-default\':!target.flag}" ng-bind="target.flag?\'开启\':\'关闭\'"></a></div></div></div><div class="form-group"><div class="col-md-2 control-label">指标限制：</div><div class="col-md-10"><table><tbody><tr ng-repeat="item in indicator_rules"><td class="b-t-0"><div class="input-group float-left"><select class="form-control" ng-model="item.indicator" ng-options="indicator as indicator.label for indicator in indicators"><option value="">指标类型</option></select></div><div class="input-group float-left m-l-10"><select class="form-control" ng-model="item.operator" ng-options="operator as operator.type for operator in operators"><option value="">操作符</option></select></div><div class="input-group float-left m-l-10"><input class="form-control" ng-model="item.threshold" type="number" placeholder="阈值"></div><div class="input-group float-left m-l-10" tooltip-placement="top" tooltip="风控动作"><select class="form-control" ng-model="item.action" ng-options="action as action.label for action in actions"></select></div><div class="input-group float-left m-l-10" tooltip-placement="top" tooltip="状态变更"><select class="form-control" ng-model="item.state" ng-options="state as state.label for state in states"></select></div><div class="float-left m-l-10 m-t-5"><p><a ng-click="addIndicatorRulesItem()" tooltip-placement="top" tooltip="增加规则" class="btn btn-default btn-icon btn-circle btn-sm"><i class="fa fa-plus"></i></a></p></div><div class="float-left m-l-10 m-t-5"><p><a ng-click="removeIndicatorRulesItem(item)" tooltip-placement="top" tooltip="删除此项" class="btn btn-default btn-icon btn-circle btn-sm"><i class="fa fa-minus"></i></a></p></div><div class="float-left m-l-10 m-t-5 anime-s-flash" ng-show="item.error_msg.length>0"><i class="fa fa-warning fa-lg text-warning" tooltip-placement="top" tooltip="{{item.error_msg}}"></i></div></td></tr></tbody></table></div></div><div class="form-group"><div class="col-md-2 control-label">持仓限制：</div><div class="col-md-10"><table><tbody><tr ng-repeat="item in position_rules"><td class="b-t-0"><div class="input-group float-left"><input class="form-control" ng-model="item.symbol" type="text" placeholder="代码/名称/拼音缩写" value="item.sec_name" typeahead="symbol as symbol.exchange+\'.\'+symbol.sec_id+\' \'+symbol.sec_name for symbol in getSymbolsTypeahead($viewValue)" typeahead-on-select="selectSymbol($item)" typeahead-no-results="{}"></div><div class="input-group float-left m-l-10"><select class="form-control" ng-model="item.side" ng-options="side as side.label for side in sides"><option value="">方向</option></select></div><div class="input-group float-left m-l-10"><input class="form-control" ng-model="item.threshold" type="number" placeholder="最大允许持仓(股)"></div><div class="float-left m-l-10 m-t-5"><p><a ng-click="addPositionRulusItem()" tooltip-placement="top" tooltip="增加规则" class="btn btn-default btn-icon btn-circle btn-sm"><i class="fa fa-plus"></i></a></p></div><div class="float-left m-l-10 m-t-5"><p><a ng-click="removePositionRulesItem(item)" tooltip-placement="top" tooltip="删除此项" class="btn btn-default btn-icon btn-circle btn-sm"><i class="fa fa-minus"></i></a></p></div><div class="float-left m-l-10 m-t-5 anime-s-flash" ng-show="item.error_msg.length>0"><i class="fa fa-warning fa-lg text-warning" tooltip-placement="top" tooltip="{{item.error_msg}}"></i></div></td></tr></tbody></table></div></div><div class="form-group"><div class="col-md-2 control-label">交易设置：</div><div class="col-md-10"><div class="row"><label class="radio-inline"><input type="radio" ng-model="is_blacklist" ng-value="false"> 允许交易</label> <label class="radio-inline"><input type="radio" ng-model="is_blacklist" ng-value="true"> 限制交易</label></div><div class="row m-t-10"><div class="col-md-2 control-label">代码：</div><div class="col-md-8 pull-left"><tags-input ng-model="symbols" display-property="sec_name" placeholder="代码/名称/拼音缩写"><auto-complete source="getSymbolsTypeahead($query)" debounce-delay="0" min-length="1"></auto-complete></tags-input></div></div><div class="row m-t-5"><div class="col-md-2 control-label">交易所：</div><div class="col-md-8"><div class="col-md-3 p-l-0" ng-repeat="exchange in exchanges"><checkbox ng-model="exchange.is_selected" class="btn-normal"></checkbox><label>{{::exchange.type|exchange}}</label></div></div></div></div></div></form></div></div><div class="modal-footer"><a ng-click="sure()" class="btn btn-success">保存</a></div></div>'),
$templateCache.put('app/risk/risk.log.html', '<div ng-controller="RiskLogCtrl"><table st-table="displayedCollection" st-safe-src="logs" class="table table-hover"><thead><tr><th class="hand text-center" st-sort="getter.utc" st-sort-default="reverse">时间</th><th st-skip-natural="true" st-sort="state" class="hand text-center">状态</th><th st-skip-natural="true" st-sort="action" class="hand text-center">动作</th><th st-skip-natural="true" st-sort="msg" class="hand text-center">消息</th><th st-skip-natural="true" st-sort="rule" class="hand text-center">规则</th></tr></thead><tbody><tr ng-repeat="row in displayedCollection | limitTo:200" ng-class-even="even" ng-class-odd="odd"><td class="text-center">{{row.utc | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td class="text-center">{{row.state|risk_state}}</td><td class="text-center">{{row.action|rick_action}}</td><td class="text-center"><a class="disable" tooltip-placement="left" tooltip="{{row.msg }}">{{ row.msg | str_len: 20}}</a></td><td class="text-center"><a class="disable" tooltip-placement="left" tooltip="{{row.rule}}">{{ row.rule | str_len: 20}}</a></td></tr></tbody></table></div>'),
$templateCache.put('app/backtest/backtest.detail.html', '<div class="panel panel-expand" id="backtest-panel" ng-controller="BacktestDetailCtrl as btCtrl"><div class="panel-heading b-color"><div class="panel-heading-btn"><a class="btn btn-xs btn-icon btn-circle btn-info" ui-sref="app.backtest.list"><i class="fa fa-reply"></i></a></div><h4 class="panel-title text-white"><a ui-sref="app.backtest.list"><i class="fa fa-chevron-left m-r-10"></i>回测列表</a></h4></div><div class="panel-body"><div class="backtest-detail-header"><div class="pull-left"><div class="backtest-info p-t-15 p-b-15 p-l-15"><div class="backtest-args"><span class="m-r-0">设置:</span> <span class="time m-l-20">从<span class="semi-bold" style="font-size:13px">{{btCtrl.$scope.backtest.req.startTime|available}}</span> 到 <span class="semi-bold" style="font-size:13px">{{btCtrl.$scope.backtest.req.endTime|available}}</span></span> <span class="initial-cash">初始资金: <span class="semi-bold" style="font-size:13px">￥{{btCtrl.$scope.backtest.req.initialCash|number:0|available}}</span></span> <span class="trans-ratio">成交比率: <span class="semi-bold" style="font-size:13px">{{btCtrl.$scope.backtest.req.transactionRatio|percentage|available}}</span></span> <span class="com-ratio">手续费率:<span class="semi-bold" style="font-size:13px">{{btCtrl.$scope.backtest.req.commissionRatio|number:4|available}}</span></span> <span class="slip-ratio">滑点比率:<span class="semi-bold" style="font-size:13px">{{btCtrl.$scope.backtest.req.slippageRatio | number:3|available}}</span></span> <span class="price-type">是否复权: <span class="semi-bold" style="font-size:13px">{{btCtrl.$scope.backtest.req.priceType|price_type|available}}</span></span></div><div class="backtest-progress"><span>状态:</span> <span class="progress-status m-l-20" ng-if="btCtrl.progress<1">回测中...</span> <span class="progress-status m-l-20" ng-if="btCtrl.progress==1"><i class="fa fa-check"></i>回测完成</span><div class="progress progress-striped active" ng-show="btCtrl.progress<1"><div class="progress-bar" style="width: {{btCtrl.progress*100}}%"></div></div><span class="m-l-5" ng-show="btCtrl.progress<1">{{btCtrl.progress*100| number: 2 }}%</span></div></div></div><div class="pull-right btn-group inline-block"><a class="btn"></a> <a class="btn dropdown-toggle" data-toggle="dropdown" href="#" id="backtest-menu-toggle">导出数据 <i class="fa fa-caret-down"></i></a><ul class="dropdown-menu pull-right"><li><a ng-click="btCtrl.exportJson()">回测结果.JSON</a></li><li><a ng-click="btCtrl.exportOrders()">交易明细.CSV</a></li><li><a ng-click="btCtrl.exportPos()">持仓记录.CSV</a></li><li><a ng-click="btCtrl.exportLog()">交易日志.TXT</a></li></ul></div></div><div class="vertical-box"><div class="vertical-box-column nav"><ul class="nav backtest-nav"><li ng-class="{\'active\': btCtrl.currentTab==\'perf\'}" ng-click="btCtrl.changeTab(\'perf\')"><a>收益概览</a></li><li ng-class="{\'active\': btCtrl.currentTab==\'order\'}" ng-click="btCtrl.changeTab(\'order\')"><a>交易明细</a></li><li ng-class="{\'active\': btCtrl.currentTab==\'position\'}" ng-click="btCtrl.changeTab(\'position\')"><a>每日持仓&收益</a></li><li ng-class="{\'active\': btCtrl.currentTab==\'log\'}" ng-click="btCtrl.changeTab(\'log\')"><a>输出日志</a></li></ul></div><div class="vertical-box-column bg-white"><div class="wrapper"><div class="backtest-perf-pane" ng-show="btCtrl.currentTab==\'perf\'"><div ng-include="\'app/backtest/detail.indicator.html\'"></div><div ng-include="\'app/backtest/detail.perfchart.html\'"></div></div><div class="backtest-detail-pane" ng-show="btCtrl.currentTab==\'order\'"><div ng-include="\'app/backtest/detail.order.html\'"></div></div><div class="backtest-detail-pane" ng-show="btCtrl.currentTab==\'position\'"><div ng-include="\'app/backtest/detail.position.html\'"></div></div><div class="backtest-detail-pane" ng-show="btCtrl.currentTab==\'log\'"><div ng-include="\'app/backtest/detail.log.html\'"></div></div></div></div></div></div></div>'),
$templateCache.put('app/backtest/backtest.list.html', '<div id="content" class="content animated fadeIn" ng-controller="BacktestListCtrl as btListCtrl"><ol class="breadcrumb pull-right"><li class="active">回测报告</li></ol><h1 class="page-header">回测报告</h1><div class="row"><div class="col-md-2"><div class="hidden-sm hidden-xs"><ul class="nav nav-pills nav-stacked nav-inbox"><li ng-repeat="strategy in btListCtrl.strategies|orderObjectBy:\'name\':false" ng-class="{\'active\':strategy.is_active}"><a ng-click="btListCtrl.select(strategy)"><i class="fa fa-inbox fa-fw m-r-5"></i>{{strategy.name}}<span ng-if="strategy.backtests.length > 0" class="badge pull-right">{{strategy.backtests.length}}</span></a></li></ul></div></div><div class="col-md-10"><div class="email-btn-row hidden-xs"><a ng-click="btListCtrl.deleteAllBacktestsOfStrategy(btListCtrl.currentStrategy.strategy_id)" class="btn btn-sm btn-inverse">删除策略所有回测</a> <a ng-click="btListCtrl.deleteSelected(btListCtrl.currentStrategy)" class="btn btn-sm btn-inverse">删除所选</a></div><div class="email-content"><table st-table="current_strategy.backtests" class="table table-email"><thead><tr ng-class="{\'active\':btListCtrl.currentStrategy.allSelected}"><th class="email-select text-center"><a ng-click="btListCtrl.toggleList(btListCtrl.currentStrategy)"><i class="fa fa-square-o fa-fw"></i></a></th><th class="text-center">创建时间</th><th class="text-center">收益率</th><th class="text-center">最大回撤</th><th class="text-center">夏普比率</th><th class="text-center">回测进度</th><th class="text-center">操作</th></tr></thead><tbody><tr ng-repeat="backtest in btListCtrl.currentStrategy.backtests" ng-class="{\'active\':backtest.selected}"><td class="email-select text-center"><a ng-click="btListCtrl.toggleItem(btListCtrl.currentStrategy, backtest)"><i class="fa fa-square-o fa-fw"></i></a></td><td class="text-center"><a ui-sref="app.backtest.detail({backtest_id: backtest.id})" tooltip-placement="right" tooltip-template="\'app/backtest/backtest.list.tooltip.html\'">{{backtest.utc | date:\'yyyy-MM-dd HH:mm:ss\'|available}}</a></td><td class="text-center">{{backtest.indicator.profitRatio | percentage|available}}</td><td class="text-center">{{backtest.indicator.maxDrawdown | percentage |available}}</td><td class="text-center">{{backtest.indicator.sharpRatio | number:2 |available}}</td><td class="text-center"><div class="progress progress-striped progress-sm active m-0" ng-show="backtest.progress==1||backtest.progress===undefined"><div class="progress-bar progress-bar-success" style="width: 100%">100%</div></div><div class="progress progress-striped progress-sm active m-0" ng-show="backtest.progress<1"><div class="progress-bar progress-bar-success" style="width: {{backtest.progress*100}}%">{{backtest.progress*100|number:0|available}}%</div></div></td><td class="text-center"><a ng-click="btListCtrl.deleteBacktest(backtest.id)">删除</a></td></tr></tbody></table><div class="email-footer clearfix">共计：{{btListCtrl.currentStrategy.backtests.length?btListCtrl.currentStrategy.backtests.length:0}}项</div></div></div></div></div>'),
$templateCache.put('app/backtest/backtest.list.tooltip.html', '<div class="text-left width-200 text-ellipsis"><span>开始时间:{{backtest.req.startTime | date:\'yyyy-MM-dd HH:mm:ss\'}}</span><br><span>结束时间:{{backtest.req.endTime | date:\'yyyy-MM-dd HH:mm:ss\'}}</span><br>代码:{{backtest.req.symbols}}<br><span>初始资金:{{backtest.req.initialCash | number: 2 | available | cny}}</span><br><span>成交比率:{{backtest.req.transactionRatio| percentage: 0}}</span><br><span>手续费率:{{backtest.req.commissionRatio * 10000 | number: 2}}‱</span><br><span>滑点比率:{{backtest.req.slippageRatio | percentage : 0}}</span><br><span>行情复权模式:{{backtest.req.priceType|price_type|available}}</span></div>'),
$templateCache.put('app/backtest/delete.backtest.confirm.html', '<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" ng-click="$close(false)" class="close" data-dismiss="modal" aria-hidden="false">×</button><h4 class="modal-title">删除回测结果</h4></div><div class="modal-body"><div class="alert alert-danger m-b-0"><h4>确认删除回测结果</h4><p>这将会从本地数据库彻底删除该回测结果</p></div></div><div class="modal-footer"><a ng-click="$close(true)" class="btn btn-sm btn-danger" data-dismiss="modal">删除</a></div></div></div>'),
$templateCache.put('app/backtest/detail.indicator.html', '<div class="top-level-stats-container white-on-tour" id="headline-results"><div class="top-level-stat"><div class="stat-label">策略收益</div><div class="stat-value">{{backtest.indicator.profitRatio| percentage: 2 | available}}</div></div><div class="top-level-stat"><div class="stat-label">基准收益</div><div class="stat-value">{{backtest.indicator.profitRatioBench | percentage: 2 | available}}</div></div><div class="top-level-stat"><div class="stat-label">年化收益</div><div class="stat-value">{{backtest.indicator.annualReturn| percentage| available}}</div></div><div class="top-level-stat"><div class="stat-label">夏普比率</div><div class="stat-value">{{backtest.indicator.sharpRatio| number:2 | available}}</div></div><div class="top-level-stat"><div class="stat-label">最大回撤</div><div class="stat-value">{{btCtrl.$scope.backtest.indicator.maxDrawdown| percentage| available}}</div></div><div class="top-level-stat"><div class="stat-label">交易费</div><div class="stat-value">{{backtest.indicator.cumCommission| number:0 | available}}</div></div><div class="top-level-stat"><div class="stat-label">净值</div><div class="stat-value">{{backtest.indicator.nav| number:0 | available }}</div></div><div class="top-level-stat"><div class="stat-label">净收益</div><div class="stat-value">{{backtest.indicator.pnl| number:0 | available}}</div></div><div class="top-level-stat"><div class="stat-label">开仓次数</div><div class="stat-value">{{backtest.indicator.openCount| number:0| available}}</div></div><div class="top-level-stat"><div class="stat-label">平仓次数</div><div class="stat-value">{{backtest.indicator.tradeCount| number:0| available}}</div></div><div class="top-level-stat"><div class="stat-label">胜率</div><div class="stat-value">{{backtest.indicator.winRatio |percentage| available}}</div></div></div>'),
$templateCache.put('app/backtest/detail.log.html', '<div ng-controller="BacktestLogCtrl as logCtrl"><div class="table-header"><div class="table-title">交易日志</div></div><div ui-ace="logCtrl.aceOption" ng-model="logCtrl.data" id="log-container" class="grid-container"></div></div>'),
$templateCache.put('app/backtest/detail.order.html', '<div ng-controller="BacktestOrderCtrl as orderCtrl" id="order-container"><div class="table-header"><div class="table-title">委托记录</div><span><span class="separator">.</span> <a class="show-when-grouped expand-all-link" ng-click="orderCtrl.expandAllGroups()">展开所有分组</a> <span class="separator">.</span> <a class="show-when-grouped collapse-all-link" ng-click="orderCtrl.collapseAllGroups()">收起所有分组</a></span><div class="filter-nav pull-right"><span class="grouping-controls"><button class="btn" ng-class="{\'active\': orderCtrl.dataGrouped}" ng-click="orderCtrl.toggleGrouping()" type="button">按日分组</button></span></div></div><div id="order-grid" class="grid-container"></div></div>'),
$templateCache.put('app/backtest/detail.perfchart.html', '<div id="perfchart" ng-controller="BacktestPerfChartCtrl as perf"><div class="chart-label date"><span id="date-chart-label">2016-02-09</span></div><div class="chart-label daily-returns"><span id="daily-returns-label">每日盈亏</span> <span class="chart-value" id="daily-returns-value"></span></div><div class="chart-label transactions"><span id="transactions-label">每日成交</span> <span class="chart-value black" id="transactions-value"></span></div><div class="chart-label profit-performance">累计收益 <span class="payload"><span class="legend-item"><span class="square blue"></span> <span class="blue">策略</span> <span class="chart-value" id="performance-value"></span></span> <span class="legend-item"><span class="square red margin_15l"></span> <span class="red full_backtest_benchmark" id="bench-symbol">基准</span> <span class="chart-value" id="benchmark-value"></span></span></span></div><highchart config="perf.chartConfig" id="chart-container"></highchart></div>'),
$templateCache.put('app/backtest/detail.position.html', '<div ng-controller="BacktestPositionCtrl as posCtrl"><div class="table-header"><div class="table-title">持仓记录</div><span><span class="separator">.</span> <a class="show-when-grouped expand-all-link" ng-click="posCtrl.expandAllGroups()">展开所有分组</a> <span class="separator">.</span> <a class="show-when-grouped collapse-all-link" ng-click="posCtrl.collapseAllGroups()">收起所有分组</a></span><div class="filter-nav pull-right"><span class="grouping-controls"><button class="btn" ng-class="{\'active\': posCtrl.dataGrouped}" ng-click="posCtrl.toggleGrouping()" type="button">按日分组</button></span></div></div><div id="pos-grid" class="grid-container"></div></div>'),
$templateCache.put('components/sidebar/sidebar.html', '<div id="sidebar" class="sidebar" ng-controller="SidebarCtrl"><div custom-slimscroll="" data-height="100%"><ul class="nav"><li class="nav-profile"><div class="info">{{profile.username}} <small ng-if="profile.orginfo.validity_period_tag == 1">有效期至：{{profile.out_of_date}}</small></div></li></ul><ul class="nav"><li class="nav-header">策略研究</li><li ui-sref="app.create.list" ng-class="{ active: $state.includes(\'app.create\') }"><a tooltip-placement="right" tooltip="模板"><i class="fa fa-laptop"></i> <span>策略向导</span></a></li><li ui-sref="app.backtest.list" ng-class="{ active: $state.includes(\'app.backtest\') }"><a tooltip-placement="right" tooltip="回测"><i class="fa fa-align-left"></i> <span>回测报告</span></a></li><li class="nav-header">模拟交易</li><li ui-sref="app.simtrade.list" ng-class="{ active: $state.includes(\'app.simtrade\') ||strategy_type==\'simtrade\' }"><a tooltip-placement="right" tooltip="模拟交易"><i class="fa fa-th"></i> <span>模拟交易</span></a></li><li ng-if="permissions.realTradePMSN!==\'0\'" class="nav-header">实盘交易</li><li ng-if="permissions.realTradePMSN===\'1\'" ui-sref="app.realtrade.list" ng-class="{ active: $state.includes(\'app.realtrade\')||strategy_type==\'realtrade\' }"><a tooltip-placement="right" tooltip="实盘交易"><i class="fa fa-area-chart"></i> <span>实盘交易</span></a></li><li ng-if="permissions.realTradePMSN===\'2\'" ng-click="permission_deny()"><a tooltip-placement="right" tooltip="实盘交易"><i class="fa fa-area-chart"></i> <span>实盘交易</span></a></li><li ng-if="permissions.accountPMSN===\'1\'" ui-sref="app.account.list" ng-class="{ active: $state.includes(\'app.account\') }"><a tooltip-placement="right" tooltip="实盘账户"><i class="fa fa-key"></i> <span>实盘账户</span></a></li><li ng-if="permissions.accountPMSN===\'2\'" ng-click="permission_deny()"><a tooltip-placement="right" tooltip="实盘账户"><i class="fa fa-key"></i> <span>实盘账户</span></a></li><li ng-if="permissions.analysisPMSN!==\'0\'" class="nav-header">信号分析</li><li ng-if="permissions.analysisPMSN===\'2\'" ng-click="permission_deny()"><a tooltip-placement="right" tooltip="信号分析"><i class="fa fa-line-chart"></i> <span>信号分析</span></a></li><li ng-if="permissions.analysisPMSN===\'1\'" ui-sref="app.analysis.list" ng-class="{ active: $state.includes(\'app.analysis\') }"><a tooltip-placement="right" tooltip="信号分析"><i class="fa fa-line-chart"></i> <span>信号分析</span></a></li><li class="nav-header" ng-if="profile.orginfo.doc_entry == 1">帮助</li><li ui-sref="app.help" ng-if="profile.orginfo.doc_entry == 1" ng-class="{ active: $state.is(\'app.help\') }"><a tooltip-placement="right" tooltip="文档中心"><i class="fa fa-book"></i> <span>文档中心</span></a></li><li><a class="sidebar-minify-btn" ng-click="sidebar_minify()"><i class="fa fa-angle-double-left"></i></a></li></ul></div></div>'),
$templateCache.put('components/navbar/navbar.html', '<div id="header" class="header navbar navbar-default navbar-fixed-top" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand"><img ng-src="{{profile.orginfo.logo_url}}"></a><button type="button" class="navbar-toggle" ng-click="on_sidebar_toggled()"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button></div><ul class="nav navbar-nav navbar-right m-r-20"><li class="dropdown" ng-class="{\'open\': dropdown}" dropdown="" on-toggle="drow_down()"><a dropdown-toggle="" href="javascript:;" class="dropdown-toggle f-s-14"><i class="fa fa-bell-o"></i> <span ng-if="unread_msg.length>0" class="label">{{ unread_msg.length }}</span></a><ul class="dropdown-menu media-list pull-right animated fadeInDown"><li class="dropdown-header" style="display:flex;justify-content:space-between">未读消息({{ unread_msg.length }})<span class="text-right" ng-if="unread_msg.length>0"><a ng-click="clearAllMsg()">清空</a></span></li><li class="media" ng-repeat="msg in unread_msg"><a ng-click="read(msg)"><div class="media-left" ng-bind-html="msg.icon"></div><div class="media-body"><h6 class="media-heading" ng-bind="msg.heading"></h6><div class="text-muted f-s-11" ng-bind="msg.content"></div></div></a></li></ul></li><li class="dropdown navbar-user" ng-class="{\'open\': dropdown}" dropdown="" on-toggle="drow_down()"><a dropdown-toggle="" class="dropdown-toggle"><img ng-src="{{profile.avatar_file}}" alt=""> <span class="hidden-xs">{{ profile.username }}</span> <i class="fa fa-caret-down"></i></a><ul class="dropdown-menu animated fadeInLeft"><li ng-if="profile.orginfo.user_profile_entry == 1" ng-click="user_profile()"><a>用户中心</a></li><li ng-if="profile.orginfo.about_software_entry == 1" ng-click="about()"><a>关于平台</a></li><li ng-if="profile.orginfo.user_profile_entry == 1" class="divider"></li><li ng-click="logout()"><a>退出系统</a></li></ul></li></ul></div></div>'),
$templateCache.put('app/create/create.base.html', '<div id="content" class="content animated fadeIn" ng-controller="CreateBaseCtrl"><ol class="breadcrumb pull-right"><li><a ui-sref="app.create.list">策略向导</a></li><li class="active">基本架构模板</li></ol><div style="float:left"><h1 class="page-header">基本架构模板 <small>生成策略代码的基本架构，不实现具体算法</small></h1></div><div class="row"><div class="col-md-12"><div class="panel"><div class="panel-heading b-color"><div class="panel-heading-btn"><a class="btn btn-xs btn-success pull-right" ng-click="onRefreshClick()"><i class="fa fa-repeat"></i> 刷新</a></div><div class="progress progress-striped progress-sm active pull-right m-t-5"><div class="progress-bar progress-bar-success" style="width: {{ process }}%">{{process}}%</div></div><h4 class="panel-title text-white">构建向导</h4></div><div class="panel-body"><div class="bwizard clearfix"><ol class="bwizard-steps clearfix clickable" role="tablist"><li role="tab" ng-repeat="step in steps" ng-class="{\'active\': step.active}" ng-click="setStep(step.id)"><span class="label">{{::$index + 1}}</span> <a class="hidden-phone">{{::step.title}}</a> <a class="hidden-phone"><small>{{::step.subtitle}}</small></a></li></ol><div class="well"><div class="alert alert-warning fade in m-b-15" ng-show="has_error"><strong>参数错误!</strong> 参数输入未完成或输入的值不符合要求 <span class="close" ng-click="has_error = null">×</span></div><div class="row"><div class="col-md-6" ng-switch="current_step"><div ng-switch-when="0" class="bwizard-activated anime-i-fadeIn"><fieldset><div class="row"><div class="form-group" ng-class="{\'has-error\':valid.name_valid===false&&has_error}"><label class="col-md-3 control-label bwizard-label">策略名称</label><div class="col-md-9"><div class="input-group full-width"><input class="form-control" ng-disabled="strategy.strategy_id" type="text" ng-model="strategy.name"></div></div></div></div><div class="row"><div class="form-group" ng-class="{\'has-error\':valid.lang_valid===false&&has_error}"><label class="col-md-3 control-label bwizard-label">编程语言<a class="btn btn-xs btn-icon btn-circle btn-success" tooltip-placement="top" tooltip="SDK开发所使用的语言"><i class="fa fa-question"></i></a></label><div class="col-md-9"><div class="input-group full-width"><select class="form-control" ng-model="args.language" ng-options="lang.type as lang.label for lang in languages" ng-change="onDevLangChange()"></select></div></div></div></div><div class="row"><div class="form-group" ng-class="{\'has-error\':valid.td_addr_valid===false&&has_error}"><label class="col-md-3 control-label bwizard-label">交易路由<a class="btn btn-xs btn-icon btn-circle btn-success" tooltip-placement="top" tooltip="交易服务地址"><i class="fa fa-question"></i></a></label><div class="col-md-9"><div class="input-group full-width"><select class="form-control" ng-model="args.td_addr" ng-options="router.addr as router.label for router in order_router" ng-change="onRouterChange()"></select></div></div></div></div><div class="row"><div class="form-group" ng-class="{\'has-error\':valid.strategy_name_valid===false&&has_error}"><label class="col-md-3 control-label bwizard-label">项目名称</label><div class="col-md-9"><div class="input-group full-width"><input class="form-control" type="text" ng-model="args.strategy_name"></div></div></div></div><div class="row" ng-show="args.language==\'cpp\'||args.language==\'csharp\'"><div class="form-group" ng-class="{\'has-error\':valid.project_valid===false&&has_error}"><label class="col-md-3 control-label bwizard-label">项目类型</label><div class="col-md-9"><div class="input-group full-width"><select class="form-control" ng-model="args.project" ng-options="project.type as project.label for project in projects" ng-change="onProjectChange()"></select></div></div></div></div></fieldset></div><div ng-switch-when="1" class="bwizard-activated anime-i-fadeIn"><div><div class="row form-group" ng-class="{\'has-error\':valid.mode_valid===false&&has_error}"><label class="col-md-3 control-label bwizard-label">运行模式<a class="btn btn-xs btn-icon btn-circle btn-success" tooltip-placement="top" tooltip="接收行情数据的模式"><i class="fa fa-question"></i></a></label><div class="col-md-9"><div class="input-group full-width"><select class="form-control" ng-model="args.mode" ng-options="mode.num as mode.label for mode in run_mode"></select></div></div></div><div ng-show="args.mode == 4"><div class="row form-group" ng-class="{\'has-error\':valid.start_time_valid===false&&has_error}"><label class="col-md-3 control-label bwizard-label">开始时间<a class="btn btn-xs btn-icon btn-circle btn-success" tooltip-placement="top" tooltip="回测开始时间"><i class="fa fa-question"></i></a></label><div class="col-md-9"><div class="input-group full-width"><input class="form-control" type="text" date-time="" auto-close="true" ng-model="datetime.start_time" view="hours"></div></div></div><div class="row form-group" ng-class="{\'has-error\':valid.end_time_valid===false&&has_error}"><label class="col-md-3 control-label bwizard-label">结束时间<a class="btn btn-xs btn-icon btn-circle btn-success" tooltip-placement="top" tooltip="回测结束时间"><i class="fa fa-question"></i></a></label><div class="col-md-9"><div class="input-group full-width"><input class="form-control" type="text" date-time="" auto-close="true" ng-model="datetime.end_time" view="hours"></div></div></div><div class="row form-group" ng-class="{\'has-error\':valid.initial_cash_valid===false&&has_error}"><label class="col-md-3 control-label bwizard-label">初始资金<a class="btn btn-xs btn-icon btn-circle btn-success" tooltip-placement="top" tooltip="回测初始资金（元）"><i class="fa fa-question"></i></a></label><div class="col-md-9"><div class="input-group full-width"><input class="form-control" type="number" min="0" ng-model="args.initial_cash"></div></div></div><div class="row form-group" ng-class="{\'has-error\':valid.transaction_ratio_valid===false&&has_error}"><label class="col-md-3 control-label bwizard-label">成交比率<a class="btn btn-xs btn-icon btn-circle btn-success" tooltip-placement="top" tooltip="委托成交比率，0~1"><i class="fa fa-question"></i></a></label><div class="col-md-9"><div class="input-group full-width"><input class="form-control" type="number" min="0" max="1" step="0.01" ng-model="args.transaction_ratio"></div></div></div><div class="row form-group" ng-class="{\'has-error\':valid.commission_ratio_valid===false&&has_error}"><label class="col-md-3 control-label bwizard-label">手续费率<a class="btn btn-xs btn-icon btn-circle btn-success" tooltip-placement="top" tooltip="单笔交易的手续费率，0~1"><i class="fa fa-question"></i></a></label><div class="col-md-9"><div class="input-group full-width"><input class="form-control" type="number" min="0" max="1" step="0.0001" ng-model="args.commission_ratio"></div></div></div><div class="row form-group" ng-class="{\'has-error\':valid.slippage_ratio_valid===false&&has_error}"><label class="col-md-3 control-label bwizard-label">滑点比率<a class="btn btn-xs btn-icon btn-circle btn-success" tooltip-placement="top" tooltip="滑点比率，0~1"><i class="fa fa-question"></i></a></label><div class="col-md-9"><div class="input-group full-width"><input class="form-control" type="number" min="0" max="1" step="0.01" ng-model="args.slippage_ratio"></div></div></div><div class="row form-group" ng-class="{\'has-error\':valid.price_type_valid===false&&has_error}"><label class="col-md-3 control-label bwizard-label">行情复权模式</label><div class="col-md-9"><div class="input-group full-width"><select class="form-control" ng-model="args.price_type" ng-options="type.num as type.label for type in price_types"></select></div></div></div></div></div></div><div ng-switch-when="2" class="bwizard-activated anime-i-fadeIn"><fieldset><div class="row"><div class="col-md-12" id="tmpl-symbol-input"><div class="form-group"><div class="input-group full-width"><input type="text" ng-model="symbol_input" placeholder="股票、期货的代码/拼音缩写" typeahead="symbol as symbol.exchange+\'.\'+symbol.sec_id+\' \'+symbol.sec_name for symbol in getSymbolsTypeahead($viewValue)" class="form-control" typeahead-on-select="selectSymbol($item)"></div></div></div></div><div custom-slimscroll="" data-height="348px"><div class="row" ng-hide="selected_symbols.length === 0"><div class="col-md-12"><table st-table="selected_symbols_display" st-safe-src="selected_symbols" class="table table-hover"><tbody><tr ng-repeat="symbol in selected_symbols_display" class="form-group"><td class="text-center">{{symbol.sec_name}}</td><td class="text-left"><div class="symbol-multi-select" isteven-multi-select="" input-model="symbol.sub_type" output-model="sub_type_output" button-label="label" item-label="label" tick-property="selected" group-property="group" helper-elements="" on-item-click="onSubTypeChange()" translation="translation" max-labels="1"></div></td><td class="text-center"><button type="button button-danger" ng-click="removeSymbol(symbol)" class="btn btn-danger">删除</button></td><td ng-show="!symbol.is_ok&&has_error"><i class="fa fa-warning fa-lg text-warning" tooltip-placement="top" tooltip="未选择订阅数据"></i></td></tr></tbody></table></div></div></div></fieldset></div><div ng-switch-when="3" class="bwizard-activated anime-i-fadeIn"><div custom-slimscroll="" data-height="402px"><div class="form-group" ng-repeat="event in events"><div class="row" ng-hide="event.is_hided"><div class="col-md-11 col-md-offset-1"><checkbox ng-model="event.is_selected" name="custom-name" class="btn-normal" ng-change="onEventChecked()"></checkbox><label>{{event.label}}</label></div></div></div></div></div><div ng-switch-when="4" class="bwizard-activated anime-i-fadeIn"><div class="jumbotron m-b-0 text-center" style="height:402px" ng-if="process == 100"><h1>构建成功</h1><p>您能通过 SDK 进一步开发，以完成您的交易策略</p><p><a class="btn btn-success btn-lg" role="button" ng-click="downloadFile()">保存代码文件</a></p></div><div class="jumbotron m-b-0 text-center" style="height:402px" ng-if="process != 100"><h1>未完成</h1><p>部分参数没有填写/选择，不能构成完整的策略</p><p><a class="btn btn-default btn-lg disabled" role="button">保存代码文件</a></p></div></div></div><div class="col-md-6"><div ui-ace="aceOption" ng-model="code_display"></div><div class="text-center code-mask" ng-hide="code_display"><span>代码预览</span></div></div></div></div><ul class="pager bwizard-buttons"><li class="previous" ng-hide="isFirstStep()" role="button"><a ng-click="handlePrevious()"><i class="fa fa-arrow-left"></i> 上一步</a></li><li class="next" ng-hide="isLastStep()" role="button"><a ng-click="handleNext()">下一步 <i class="fa fa-arrow-right"></i></a></li></ul></div></div></div></div></div></div>'),
$templateCache.put('app/create/create.sidebar.html', '<div class="sidebar" ng-controller="TmplListCrtl"><div custom-slimscroll="" data-height="100%"><ul class="nav" ng-repeat="template in templates"><li><a ng-click="onTmplClick(template.state)"><i class="fa fa-file"></i> <span>{{template.label}}<span ng-if="!template.state" class="label label-theme m-l-5">敬请期待</span></span></a></li></ul></div></div>'),
$templateCache.put('app/create/template.blank.modal.html', '<div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">&times;</button><h3 class="modal-title">{{::msg}}</h3></div><div class="modal-body"><div class="note note-info" ng-show="strategy.strategy_id"><h4>关联终端与代码文件</h4><ul><li><span id="js-textareacopybtn">本策略的ID： <span class="semi-bold">{{::strategy.strategy_id}}</span> <a clipboard="" text="strategy.strategy_id" on-copied="on_copied()">[复制]</a></span></li><li><span>将策略ID填写到代码文件中的strategy_id处，即完成策略在终端与代码文件之间的关联</span></li><li><span>此策略ID将会是您的策略: "{{ ::strategy.name }}"，在回测、模拟交易、实盘交易时的唯一标识</span></li></ul></div><div class="note note-danger" ng-hide="strategy.strategy_id"><h4><i class="fa fa-exclamation-triangle"></i> 策略构建失败，请重新操作</h4></div></div><div class="modal-footer" ng-show="strategy.strategy_id"><a class="btn btn-white" ui-sref="app.strategy.detail({strategy_id: strategy.strategy_id})">查看策略详情</a> <a class="btn btn-success" ng-click="$close()">确定</a></div>'),
$templateCache.put('app/create/template.blank.partial.html', '<input type="text" class="width-full m-t-10" placeholder="策略名称" ng-model="strategy.name"> <button class="btn btn-sm btn-primary width-full m-t-5" ng-click="createStrategy()" ng-hide="strategy.strategy_id">确定</button>'),
$templateCache.put('app/create/template.github.modal.html', '<div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">&times;</button><h3 class="modal-title">掘金策略开源项目</h3></div><div class="modal-body"><h3 class="m-t-10">项目访问和参与</h3><p style="text-indent:2em">为了方便策略代码的分享和展示， 以及Bug的管理， 我们决定在Github上用开源项目的方式把一些经典策略在掘金量化平台上的实现管理起来，方便大家学习和分享， 项目地址为 https://github.com/myquant/strategy <a clipboard="" text="\'https://github.com/myquant/strategy\'">[复制链接]</a>。</p><p style="text-indent:2em">如果您有兴趣，可以直接Fork代码，自己再做修改；如果您愿意为开源社区贡献代码，欢迎在Github提交Pull request；如果您有任何意见或建议，欢迎在Github提交Issue。</p></div><div class="modal-footer"><a class="btn btn-success" ng-click="$close()">确定</a></div>'),
$templateCache.put('app/create/template.list.html', '<div id="content" class="content animated fadeIn" ng-controller="TmplListCrtl"><ol class="breadcrumb pull-right"><li class="active">策略向导</li></ol><h1 class="page-header">策略向导</h1><div id="gallery" class="gallery"><div class="image gallery-group-1 float-left" ng-repeat="template in templates"><a ng-click="onTmplClick(template.state)"><div class="image-inner"><h3>{{ template.label}}</h3><span>{{ template.description}}</span></div><div ng-if="template.id==1" class="image-info"><div style="height:100px"><input type="text" class="width-full m-t-10" placeholder="策略名称" ng-model="strategy.name"> <button class="btn btn-sm btn-success width-full m-t-5" ng-click="createStrategy()">确定</button></div></div><div ng-if="template.id<8&&template.id>1" class="image-info"><img src="{{template.img}}" width="356" height="100"></div><div ng-if="template.id===8" class="image-info"><div style="height:100px"><button class="btn btn-lg btn-success height-90" ng-click="open_github_modal()"><i class="fa fa-github fa-2x pull-left"></i> Myquant@Github<br><small>github.com/myquant</small></button></div></div></a></div></div></div>'),
$templateCache.put('app/strategy/cancel.order.html', '<div><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">&times;</button><h4 class="modal-title">确认撤单</h4></div><div class="modal-body"><dl class="dl-horizontal"><dt>策略:</dt><dd>{{ strategy.name }}</dd><dt>名称:</dt><dd>{{ order.sec_name }}</dd><dt>代码:</dt><dd>{{ order.sec_id }}</dd><dt>方向:</dt><dd>{{ [order.side, order.position_effect] | direction }}</dd><dt>委托价</dt><dd>{{ order.price }}</dd><dt>下单量</dt><dd>{{ order.volume }}</dd><dt>已成交</dt><dd>{{ order.filled_volume }}</dd></dl><div ng-show="errors" class="col-md-10 error-fail"><i class="glyphicon glyphicon-warning-sign text-danger"></i> <span>{{ errors }}</span></div></div><div class="modal-footer"><button type="button" class="btn btn-success" ng-click="ok()">撤单</button></div></div>'),
$templateCache.put('app/strategy/detail.indicator.sort.html', '<div class="modal-header"><button type="button" class="close" ng-click="save()" aria-hidden="true">&times;</button><h4 class="modal-title">自定义指标显示顺序</h4></div><div class="modal-body dndsort-list"><div class="alert alert-info fade in m-b-15"><strong>说明:</strong> 拖拽与拖放表格单元格进行排序 <span class="close" data-dismiss="alert">×</span></div><ul dnd-list="indicators"><li ng-repeat="item in indicators" class="cursor-pointer" dnd-draggable="item" dnd-moved="indicators.splice($index, 1)" dnd-effect-allowed="move" dnd-selected="selected = item"><span><span class="width-100 text-right">{{ item.name | indicator }}:</span> <span class="{{ item.color_class }}">{{ item.value |number:item.precision }}{{ item.unit }}</span></span></li></ul></div><div class="modal-footer"><button type="button" class="btn btn-success" ng-click="save()">保存</button></div>'),
$templateCache.put('app/strategy/setting.account.html', '<div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">&times;</button><h4>关联账户</h4></div><div class="modal-body"><div class="alert alert-success anime-i-fadeIn" ng-if="submit_success===true"><i class="fa fa-check fa-2x pull-left"></i><p>保存成功</p></div><div class="alert alert-error anime-i-bounceIn" ng-if="submit_success===false"><i class="fa fa-times fa-2x pull-left"></i><p>保存失败</p></div><div class="alert alert-warning anime-i-flashIn" ng-if="submit_success===\'mixed\'"><i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>不能同时关联模拟账户与实盘账户</p></div><div class="alert alert-warning anime-i-flashIn" ng-if="submit_success===\'required\'"><i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>至少关联一个账户</p></div><div class="alert alert-warning anime-i-flashIn" ng-if="submit_success===\'simmixed\'"><i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>只能关联一个模拟账户</p></div><div class="alert alert-warning anime-i-flashIn" ng-if="submit_success===\'simlimited\'"><i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>非实盘策略数量已达到限制</p></div><div class="alert alert-warning anime-i-flashIn" ng-if="submit_success===\'reallimited\'"><i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>实盘策略数量已达到限制</p></div><div class="row"><div class="col-md-2 text-right">模拟账户：</div><div class="col-md-10"><div class="col-md-5" ng-repeat="account in accounts|filter: sim_acc_filter|orderObjectBy:\'account_name\':false"><checkbox ng-model="account.is_selected" class="btn-normal"></checkbox><label>{{account.account_name}}</label></div></div></div><div class="row m-t-5" ng-if="permissions.accountPMSN===\'1\'"><div class="col-md-2 text-right">实盘账户：</div><div class="col-md-10"><div class="col-md-5" ng-repeat="account in accounts |filter: { account_type: 3}|orderObjectBy:\'account_name\':false"><checkbox ng-model="account.is_selected" class="btn-normal"></checkbox><label>{{account.account_name}}</label></div></div></div></div><div class="modal-footer"><a class="btn btn-success" ng-click="sure()">保存</a></div>'),
$templateCache.put('app/strategy/setting.base.html', '<div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">&times;</button><h4>修改基本信息</h4></div><div class="modal-body"><div class="alert alert-success anime-i-fadeIn" ng-if="submit_success===true"><i class="fa fa-check fa-2x pull-left"></i><p>保存成功</p></div><div class="alert alert-error anime-i-bounceIn" ng-if="submit_success===false"><i class="fa fa-times fa-2x pull-left"></i><p>保存失败</p></div><form name="form" novalidate="novalidate" class="form-horizontal"><div class="form-group"><label class="control-label col-md-2" for="name">策略名称</label><div class="col-md-10"><input autofocus="" class="form-control" type="text" id="name" ng-model="strategy.base.name" placeholder="您的策略名称" ng-required="true"></div></div><div class="form-group"><label class="control-label col-md-2" for="lang">编程语言</label><div class="col-md-10"><input class="form-control" type="text" id="lang" ng-model="strategy.base.dev_lang" placeholder="您的策略开发语言"></div></div><div class="form-group"><label class="control-label col-md-2" for="str-category">策略类型</label><div class="col-md-10"><select class="form-control" id="str-category" data-ng-model="strategy.base.category" ng-options="b.id as b.name for b in categories"><option value="" disabled="" selected="" ng-hide="strategy.base.category">请选择您的策略类型</option></select></div></div><div class="form-group"><label class="control-label col-md-2" for="str-style">策略风格</label><div class="col-md-10"><select class="form-control" id="str-style" data-ng-model="strategy.base.style" ng-options="b.id as b.name for b in styles"><option value="" disabled="" selected="" ng-hide="strategy.base.category">请选择您的策略风格</option></select></div></div><div class="form-group"><label class="control-label col-md-2" for="desc">策略描述</label><div class="col-md-10"><textarea class="form-control" type="text" id="desc" ng-model="strategy.base.description" placeholder="请简要描述您的策略">\r\n            </textarea></div></div></form></div><div class="modal-footer"><a class="btn btn-success" ng-click="sure()">保存</a></div>'),
$templateCache.put('app/strategy/setting.export.html', '<div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">&times;</button><h4>导出数据</h4></div><div class="modal-body"><div class="alert alert-success anime-i-fadeIn" ng-if="modal.status===\'success\'"><i class="fa fa-check fa-2x pull-left"></i><p>保存成功</p></div><div class="alert alert-error anime-i-fadeIn" ng-if="modal.status===\'error\'"><i class="fa fa-times fa-2x pull-left"></i><p>保存失败</p></div><div class="alert alert-warning anime-i-fadeIn" ng-if="modal.status===\'invalid\'"><i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>请填写必须的选项</p></div><div><ul class="nav nav-tabs"><li class="active"><a href="#tab-pos" data-toggle="tab">当前持仓</a></li><li class=""><a href="#tab-ind" data-toggle="tab">历史绩效</a></li><li class=""><a href="#tab-tran" data-toggle="tab">历史成交</a></li><li class=""><a href="#tab-ord" data-toggle="tab">历史委托</a></li></ul><div class="tab-content"><div class="tab-pane fade active in" id="tab-pos"><p class="text-right m-b-0"><a class="btn btn-success" ng-click="modal.exportPosCsv()">导出CSV</a> <a class="btn btn-success" ng-click="modal.exportPosJson()">导出JSON</a></p></div><div class="tab-pane fade" id="tab-ind"><div class="horizon-flex-box"><span class="m-r-5 m-l-5">从</span> <input class="form-control text-right width-xs" date-time="" auto-close="true" ng-model="modal.indsStart" placeholder="开始日期" format="yyyy-MM-dd" view="date" min-view="date"> <span class="m-r-5 m-l-5">到</span> <input class="form-control text-right width-xs" date-time="" auto-close="true" ng-model="modal.indsEnd" placeholder="结束日期" format="yyyy-MM-dd" view="date" min-view="date"><div class="m-l-10" ng-show="modal.indsError"><i class="fa fa-warning fa-lg text-warning" tooltip-placement="top" tooltip="{{modal.indsError}}"></i></div></div><p class="text-right m-b-0 m-t-10"><a class="btn btn-success" ng-click="modal.exportIndCsv()">导出CSV</a> <a class="btn btn-success" ng-click="modal.exportIndJson()">导出JSON</a></p></div><div class="tab-pane fade" id="tab-tran"><div class="horizon-flex-box"><span class="m-r-5 m-l-5">从</span> <input class="form-control text-right width-xs" type="text" date-time="" auto-close="true" ng-model="modal.transStart" placeholder="开始时间" view="hours"> <span class="m-r-5 m-l-5">到</span> <input class="form-control text-right width-xs" type="text" date-time="" auto-close="true" ng-model="modal.transEnd" placeholder="结束时间" view="hours"><div class="m-l-10" ng-show="modal.transError"><i class="fa fa-warning fa-lg text-warning" tooltip-placement="top" tooltip="{{modal.transError}}"></i></div></div><p class="text-right m-b-0 m-t-10"><a class="btn btn-success" ng-click="modal.exportTranCsv()">导出CSV</a> <a class="btn btn-success" ng-click="modal.exportTranJson()">导出JSON</a></p></div><div class="tab-pane fade" id="tab-ord"><div class="horizon-flex-box"><span class="m-r-5 m-l-5">从</span> <input class="form-control text-right width-xs" type="text" date-time="" auto-close="true" ng-model="modal.ordersStart" placeholder="开始时间" view="hours"> <span class="m-r-5 m-l-5">到</span> <input class="form-control text-right width-xs" type="text" date-time="" auto-close="true" ng-model="modal.ordersEnd" placeholder="结束时间" view="hours"><div class="m-l-10" ng-show="modal.ordersError"><i class="fa fa-warning fa-lg text-warning" tooltip-placement="top" tooltip="{{modal.ordersError}}"></i></div></div><p class="text-right m-b-0 m-t-10"><a class="btn btn-success" ng-click="modal.exportOrderCsv()">导出CSV</a> <a class="btn btn-success" ng-click="modal.exportOrderJson()">导出JSON</a></p></div></div></div></div>'),
$templateCache.put('app/strategy/setting.position.html', '<div class="modal-header"><button type="button" class="close" ng-click="$dismiss()">×</button><h4 class="modal-title">持仓调整</h4></div><div class="modal-body"><div class="alert alert-success anime-i-fadeIn" ng-if="modal.submit_status===\'success\'"><button type="button" class="close" ng-click="modal.hide_alert()"><span aria-hidden="true">&times;</span></button> <i class="fa fa-check fa-2x pull-left"></i><p>保存成功</p></div><div class="alert alert-danger anime-i-bounceIn" ng-if="modal.submit_status===\'error\'"><button type="button" class="close" ng-click="modal.hide_alert()"><span aria-hidden="true">&times;</span></button> <i class="fa fa-times fa-2x pull-left"></i><p>保存失败</p></div><div class="alert alert-warning anime-i-flashIn" ng-if="modal.submit_status===\'stock_open_short\'"><button type="button" class="close" ng-click="modal.hide_alert()"><span aria-hidden="true">&times;</span></button> <i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>不能卖空</p></div><div class="alert alert-warning anime-i-flashIn" ng-if="modal.submit_status===\'index_added\'"><button type="button" class="close" ng-click="modal.hide_alert()"><span aria-hidden="true">&times;</span></button> <i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>不能买卖指数</p></div><div class="alert alert-warning anime-i-flashIn" ng-if="modal.submit_status===\'to_be_completed\'"><button type="button" class="close" ng-click="modal.hide_alert()"><span aria-hidden="true">&times;</span></button> <i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>{{modal.add_error_msg}}</p></div><div class="alert alert-warning anime-i-flashIn" ng-if="modal.submit_status===\'duplicated\'"><button type="button" class="close" ng-click="modal.hide_alert()"><span aria-hidden="true">&times;</span></button> <i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>已经持有该品种</p></div><div class="alert alert-warning anime-i-flashIn" ng-if="modal.submit_status===\'volume_input_error\'"><button type="button" class="close" ng-click="modal.hide_alert()"><span aria-hidden="true">&times;</span></button> <i class="fa fa-exclamation-triangle fa-2x pull-left"></i> <strong>仓位输入错误!</strong>今仓位大于总仓位</div><div class="m-r-10 m-l-10 m-t-5 m-b-5"><form class="form-inline"><legend>新增仓位(保存后生效)</legend><div class="form-group m-r-10"><input class="form-control" ng-model="modal.new_item.symbol" type="text" placeholder="代码/拼音缩写" typeahead="symbol as symbol.exchange+\'.\'+symbol.sec_id+\' \'+symbol.sec_name for symbol in modal.getSymbolsTypeahead($viewValue)" typeahead-on-select="modal.selectSymbol($item)"></div><div class="form-group m-r-10"><select class="form-control" ng-model="modal.new_item.side" ng-options="side.id as side.label for side in modal.sides"><option value="">方向</option></select></div><div class="form-group m-r-10"><input class="form-control text-right" ng-model="modal.new_item.volume" type="number" placeholder="总仓位"></div><div class="form-group m-r-10"><input class="form-control text-right" ng-model="modal.new_item.volume_today" type="number" placeholder="今仓位"></div><div class="form-group m-r-10"><input class="form-control text-right" ng-model="modal.new_item.vwap" type="number" placeholder="均价"></div><div class="form-group m-r-10"><button type="button" class="btn btn-success" ng-click="modal.add_item(modal.new_item)">增加</button></div></form></div><div class="m-r-10 m-l-10 m-t-5 m-b-5"><from class="form-group"><legend>调整仓位</legend><table st-table="st_position" class="table table-condensed table-hover" style="vertical-align:text-top;"><thead><tr><th class="text-center" st-sort="exchange" st-skip-natural="true">交易所</th><th class="text-center" st-sort="sec_id" st-skip-natural="true">代码</th><th class="text-center" st-sort="sec_name" st-skip-natural="true">名称</th><th class="text-center" st-sort="side">方向</th><th st-sort="volume" st-skip-natural="true">总仓位</th><th st-sort="volume_today" st-skip-natural="true">今仓位</th><th st-sort="vwap" st-skip-natural="true">均价</th><th></th></tr></thead><tbody><tr ng-repeat="pos in modal.pos_display"><td class="text-center">{{ pos.exchange|exchange }}</td><td class="text-center">{{ pos.sec_id }}</td><td class="text-center">{{ pos.sec_name }}</td><td class="text-center">{{ [pos.side, pos.position_effect] | direction }}</td><td><div class="form-group novalidate"><input name="volume" class="num text-right" ng-model="pos.volume_input" type="number" min="0" step="1" value="{{ pos.volume | number: 0 }}"></div></td><td><div class="form-group novalidate"><input name="volume_today" class="num text-right" ng-model="pos.volume_today_input" type="number" min="0" step="1" value="{{ pos.volume_today | number: 0 }}"></div></td><td><div class="form-group novalidate"><input name="vwap" class="num text-right" ng-model="pos.vwap_input" type="number" min="0" step="1" value="{{ pos.vwap | number: 2 }}"></div></td><td><div class="float-left m-l-10 m-t-5 anime-s-flash" ng-show="pos.volume_error"><i class="fa fa-warning fa-lg text-warning" tooltip-placement="top" tooltip="仓位输入错误"></i></div></td></tr></tbody></table></from></div></div><div class="modal-footer"><a ng-click="modal.submit()" class="btn btn-success">保存</a></div>'),
$templateCache.put('app/strategy/setting.sync.html', '<div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">&times;</button><h4>同步账户<small>同步柜台交易账户的资金与持仓数据到本地策略子账户</small></h4></div><div class="modal-body"><div class="alert alert-success anime-i-fadeIn" ng-if="modal.submit_status===\'success\'"><button type="button" class="close" ng-click="modal.hide_alert()"><span aria-hidden="true">&times;</span></button> <i class="fa fa-check fa-2x pull-left"></i><p>同步成功</p></div><div class="alert alert-danger anime-i-bounceIn" ng-if="modal.submit_status===\'error\'"><button type="button" class="close" ng-click="modal.hide_alert()"><span aria-hidden="true">&times;</span></button> <i class="fa fa-times fa-2x pull-left"></i><p>同步失败</p></div><div class="alert alert-danger anime-i-bounceIn" ng-if="modal.submit_status===\'pos_error\'"><button type="button" class="close" ng-click="modal.hide_alert()"><span aria-hidden="true">&times;</span></button> <i class="fa fa-times fa-2x pull-left"></i><p>仓位同步失败</p></div><div class="alert alert-danger anime-i-bounceIn" ng-if="modal.submit_status===\'cash_error\'"><button type="button" class="close" ng-click="modal.hide_alert()"><span aria-hidden="true">&times;</span></button> <i class="fa fa-times fa-2x pull-left"></i><p>资金同步失败</p></div><div class="alert alert-warning anime-i-flashIn" ng-if="modal.submit_status===\'stock_open_short\'"><button type="button" class="close" ng-click="modal.hide_alert()"><span aria-hidden="true">&times;</span></button> <i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p>不能卖空</p></div><div class="alert alert-warning anime-i-flashIn" ng-if="modal.submit_status===\'index_added\'"><button type="button" class="close" ng-click="modal.hide_alert()"><span aria-hidden="true">&times;</span></button> <i class="fa fa-exclamation-triangle fa-2x pull-left"></i><p></p></div><div class="note note-info"><span>同步服务每秒一次比较两边账户的可用资金与持仓数据的差额，并将差额显示在下面列表中。</span><br><span>您点击同步按钮后，差额部分会自动同步到本地策略子账户。</span><br><span>注意：在交易时段，因为资金（包含浮动盈亏）不断变化，可能刚同步后又会看到有资金差异变动，这是正常的。</span></div><form class=""><accordion close-others="true"><accordion-group is-open="accordion.cash"><accordion-heading>资金差额: {{modal.cashDiff.available_diff | number : 2}} 元 <i class="pull-right fa" ng-class="{\'fa-chevron-down\': accordion.cash, \'fa-chevron-right\': !accordion.cash}"></i></accordion-heading><table st-table="cash_diff" class="table"><thead><tr><th class="text-center">策略可用资金</th><th class="text-center">账户可用资金</th><th class="text-center">差额</th></tr></thead><tbody><tr><td class="text-center">{{ modal.cashDiff.strategy_available | number : 2 }}</td><td class="text-center">{{ modal.cashDiff.account_available | number : 2 }}</td><td class="text-center">{{ modal.cashDiff.available_diff | number : 2 }}</td></tr></tbody></table></accordion-group><accordion-group is-open="accordion.pos"><accordion-heading>持仓差异: {{modal.posDiff.length}}条记录 <i class="pull-right fa" ng-class="{\'fa-chevron-down\': accordion.pos, \'fa-chevron-right\': !accordion.pos}"></i></accordion-heading><table st-table="modal.posDiffCollection" st-safe-src="modal.posDiff" class="table table-condensed table-hover"><thead><tr><th class="cursor-pointer text-center" st-sort="sec_id">代<br>码</th><th class="text-center">方<br>向</th><th class="cursor-pointer text-center" st-sort="strategy_volume">策略<br>总仓</th><th class="cursor-pointer text-center" st-sort="account_volume">账户<br>总仓</th><th class="cursor-pointer text-center" st-sort="volume_diff">总仓<br>差额</th><th class="cursor-pointer text-center" st-sort="strategy_volume_today">策略<br>今仓</th><th class="cursor-pointer text-center" st-sort="account_volume_today">账户<br>今仓</th><th class="cursor-pointer text-center" st-sort="volume_today_diff">今仓<br>差额</th><th class="cursor-pointer text-center" st-sort="strategy_available">策略<br>可用</th><th class="cursor-pointer text-center" st-sort="account_available">账户<br>可用</th><th class="cursor-pointer text-center" st-sort="available_diff">可用<br>差额</th><th class="cursor-pointer text-center" st-sort="strategy_available_today">策略<br>今日<br>可用</th><th class="cursor-pointer text-center" st-sort="account_available_today">账户<br>今日<br>可用</th><th class="cursor-pointer text-center" st-sort="available_today_diff">今日<br>可用<br>差额</th><th class="cursor-pointer text-right" st-sort="strategy_vwap">策略<br>均价</th><th class="cursor-pointer text-right" st-sort="account_vwap">账户<br>均价</th><th class="cursor-pointer text-right" st-sort="vwap_diff">均价<br>差额</th></tr></thead><tbody><tr ng-repeat="pos in modal.posDiffCollection"><td class="text-center">{{ pos.sec_id }}</td><td class="text-center">{{ [pos.side, pos.position_effect] | direction }}</td><td class="text-center">{{ pos.strategy_volume }}</td><td class="text-center">{{ pos.account_volume }}</td><td class="text-center">{{ pos.volume_diff }}</td><td class="text-center">{{ pos.strategy_volume_today }}</td><td class="text-center">{{ pos.account_volume_today }}</td><td class="text-center">{{ pos.volume_today_diff }}</td><td class="text-center">{{ pos.strategy_available }}</td><td class="text-center">{{ pos.account_available }}</td><td class="text-center">{{ pos.available_diff }}</td><td class="text-center">{{ pos.strategy_available_today }}</td><td class="text-center">{{ pos.account_available_today }}</td><td class="text-center">{{ pos.available_today_diff }}</td><td class="text-right">{{ pos.strategy_vwap | number : 2 }}</td><td class="text-right">{{ pos.account_vwap | number : 2 }}</td><td class="text-right">{{ pos.vwap_diff | number : 2 }}</td></tr></tbody></table></accordion-group></accordion></form></div><div class="modal-footer"><button class="btn btn-success" ng-disabled="modal.button_blocked" ng-click="modal.syncAccount()">{{modal.button_blocked?\'同步中...\':\'同步\'}}</button></div>'),
$templateCache.put('app/strategy/strategy.detail.execrpts.html', '<div ng-controller="StrategyExecRptsCtrl as execCtrl"><table st-table="execCtrl.displayedCollection" st-safe-src="execCtrl.execrpts" class="table table-condensed table-hover"><thead><tr><th class="hand text-center" st-skip-natural="true" st-sort="execCtrl.getters.timestamp" st-sort-default="reverse">时间</th><th class="hand text-center" st-skip-natural="true" st-sort="sec_id">代码</th><th class="hand text-center" st-skip-natural="true" st-sort="side">方向</th><th class="hand text-right" st-skip-natural="true" st-sort="price">价格</th><th class="hand text-right" st-skip-natural="true" st-sort="volume">数量</th><th class="hand text-center" st-skip-natural="true" st-sort="execrpt">成交回报类型</th><th class="hand text-center" st-skip-natural="true" st-sort="reason">拒绝原因</th></tr></thead><tbody><tr ng-repeat="row in execCtrl.displayedCollection | limitTo:execCtrl.limit"><td class="hand text-center">{{ row.transact_time*1000 | date: \'yyyy-M-dd H:mm:ss\'| available }}</td><td class="hand text-center">{{ row.sec_id |available}}</td><td class="hand text-center">{{ [row.side, row.position_effect] | direction | available }}</td><td class="hand text-right">{{ row.price|number:2 | available }}</td><td class="hand text-right">{{ row.volume | number:0 | available }}</td><td class="hand text-center">{{ row.exec_type | execrpt_type | available }}</td><td class="hand rej-reason"><a class="disable" tooltip-placement="left" tooltip="{{row.ord_rej_reason_detail}}">{{ row.ord_rej_reason_detail | str_len: 8| available }}</a></td></tr></tbody></table></div>'),
$templateCache.put('app/strategy/strategy.detail.html', '<div id="content" class="content animated fadeIn" ng-controller="StrategyDetailCtrl"><ol class="breadcrumb pull-right"><li ng-if="!show_realtrade()"><a ui-sref="app.simtrade.list">模拟交易</a></li><li ng-if="show_realtrade()"><a ui-sref="app.realtrade.list">实盘交易</a></li><li class="active">{{ row.name }}</li></ol><div class="row p-l-10"><h1 class="page-header pull-left">{{ row.name }}</h1><span class="pull-left p-5">策略ID: {{row.strategy_id}}<a clipboard="" text="row.strategy_id" on-copied="on_copied()">[复制]</a></span></div><div class="row"><div class="col-md-8"><div class="panel-1 b-color"><div class="panel-heading"><div class="btn-group pull-right" data-toggle="buttons"><label class="btn btn-success btn-xs" ng-class="{\'active\': current_chart==\'today\'}" ng-click="change_chart(\'today\')"><input type="radio" name="options"> 日内权益</label> <label class="btn btn-success btn-xs" ng-class="{\'active\': current_chart==\'history\'}" ng-click="change_chart(\'history\')"><input type="radio" name="options"> 历史权益</label><label class="btn btn-success btn-xs b-0" ng-click="sort_indicator()"><abbr title="自定义指标显示顺序" class="plain"><i class="fa fa-exchange fa-rotate-90"></i></abbr></label></div><h4 class="panel-title">权益曲线</h4></div><div class="panel-footer panel-height"><div class="row"><div class="col-md-8" ng-switch="current_chart"><div class="anime-i-fadeIn" ng-switch-when="today" flotchart="" style="height:230px" options="options" data="row.trends"></div><div class="anime-i-fadeIn" ng-switch-when="history"><div ng-include="" src="\'app/strategy/strategy.detail.perf.html\'"></div></div></div><div class="col-md-4 panel-height3"><div ng-include="" src="\'app/strategy/strategy.detail.indicators.html\'"></div></div></div></div></div></div><div class="col-md-4"><div class="input-group" ng-controller="SymbolCtrl"><div class="input-group-addon bg-green-lighter text-white"><i class="fa fa-search"></i></div><input type="text" placeholder="代码/名称/拼音缩写" class="form-control b-t-0 b-b-0" id="symbol-input"><div class="input-group-btn"><button type="button" class="btn btn-success" ng-click="handlePlaceOrderClick()">下单</button></div></div><div class="panel-1 b-color m-t-10"><div class="panel-heading"><h4 class="panel-title">未完成委托</h4></div><div class="panel-footer panel-height2" ng-include="" src="\'app/strategy/strategy.detail.unfinishedorders.html\'"></div></div></div></div><div class="row m-t-15"><div class="col-md-12"><ul class="nav nav-tabs b-color a-color" ng-switch="permissions.riskControlPMSN"><li ng-class="{\'active\': current_tab == \'positions\'}"><a ng-click="change_tab(\'positions\')">当前持仓</a></li><li ng-class="{\'active\': current_tab == \'transacts\'}"><a ng-click="change_tab(\'transacts\')">最近成交</a></li><li ng-class="{\'active\': current_tab == \'orders\'}"><a ng-click="change_tab(\'orders\')">最近委托</a></li><li ng-class="{\'active\': current_tab == \'execrpts\'}"><a ng-click="change_tab(\'execrpts\')">最近回报</a></li><li ng-switch-when="1" ng-class="{\'active\': current_tab == \'logs\'}"><a ng-click="change_tab(\'logs\')">风控日志</a></li><li ng-switch-when="2" ng-click="permission_deny()"><a>风控日志</a></li><li class="pull-right" ng-if="current_tab == \'positions\'"><a ng-click="position_io()">持仓调整</a></li></ul><div class="tab-content" ng-switch="current_tab"><div class="tab-pane active anime-i-fadeIn" ng-switch-when="positions"><div ng-include="" src="\'app/strategy/strategy.detail.positions.html\'"></div></div><div class="tab-pane active anime-i-fadeIn" ng-switch-when="transacts"><div ng-include="" src="\'app/strategy/strategy.detail.transacts.html\'"></div></div><div class="tab-pane active anime-i-fadeIn" ng-switch-when="orders"><div ng-include="" src="\'app/strategy/strategy.detail.orders.html\'"></div></div><div class="tab-pane active anime-i-fadeIn" ng-switch-when="execrpts"><div ng-include="" src="\'app/strategy/strategy.detail.execrpts.html\'"></div></div><div class="tab-pane active anime-i-fadeIn" ng-switch-when="logs"><div ng-include="" src="\'app/risk/risk.log.html\'"></div></div></div></div></div></div>'),
$templateCache.put('app/strategy/strategy.detail.indicators.html', '<div ng-controller="StrategyIndicatorsCtrl"><table class="table table-striped table-style"><tbody><tr ng-repeat="ind in indicators"><th>{{ ind.name | indicator }}:</th><td class="{{ ind.color_class }} text-right">{{ ind.value |number:ind.precision }}{{ ind.unit }}</td></tr></tbody></table></div>'),
$templateCache.put('app/strategy/strategy.detail.orders.html', '<div class="table-responsive" ng-controller="StrategyOrdersCtrl"><table st-table="displayedCollection" st-safe-src="orders" class="table table-condensed table-hover"><thead><tr><th class="hand text-center" st-skip-natural="true" st-sort="getters.sending_time" st-sort-default="reverse">时间</th><th class="hand text-center" st-skip-natural="true" st-sort="sec_id">代码</th><th class="hand text-center" st-skip-natural="true" st-sort="side">方向</th><th class="hand text-right" st-skip-natural="true" st-sort="price">价格</th><th class="hand text-right" st-skip-natural="true" st-sort="volume">数量</th><th class="hand text-center" st-skip-natural="true" st-sort="status">状态</th><th class="hand text-right" st-skip-natural="true" st-sort="filled_volume">已成交</th><th class="hand text-right" st-skip-natural="true" st-sort="filled_vwap">成交均价</th><th class="hand text-center" st-skip-natural="true" st-sort="reason">拒绝原因</th></tr></thead><tbody><tr ng-repeat="row in displayedCollection | limitTo:limit"><td class="text-center">{{ row.sending_time*1000 | date: \'yyyy-M-dd H:mm:ss\'}}</td><td class="text-center">{{ row.sec_id }}</td><td class="text-center">{{ [row.side, row.position_effect] | direction }}</td><td class="text-right">{{ [row.price, row.order_type ]| price }}</td><td class="text-right">{{ row.volume | number:0 }}</td><td class="text-center">{{ row.status | status }}</td><td class="text-right">{{ row.filled_volume | number:0 }}</td><td class="text-right">{{ row.filled_vwap | number:2 }}</td><td class="rej-reason"><a class="disable" tooltip-placement="left" tooltip="{{row.ord_rej_reason_detail}}">{{ row.ord_rej_reason_detail | str_len: 8}}</a></td></tr></tbody></table></div>'),
$templateCache.put('app/strategy/strategy.detail.perf.html', '<div ng-controller="StrategyPerfChartCtrl"><highchart config="chartConfig"></highchart></div>'),
$templateCache.put('app/strategy/strategy.detail.positions.html', '<div ng-controller="StrategyPositionsCtrl"><table st-table="displayedCollection" st-safe-src="positions" class="table table-condensed table-hover"><thead><tr><th class="hand text-center" st-sort="exchange" st-skip-natural="true">交易所</th><th class="hand text-center" st-sort="sec_id" st-skip-natural="true">代码</th><th class="hand text-center" st-sort="sec_name" st-skip-natural="true">名称</th><th class="hand text-center" st-sort="side">方向</th><th class="hand text-right" st-sort="volume" st-skip-natural="true">数量</th><th class="hand text-right" st-sort="price" st-skip-natural="true">价格</th><th class="hand text-right" st-sort="vwap" st-skip-natural="true">成本</th><th class="hand text-right" st-sort="fpnl" st-skip-natural="true">浮盈</th><th class="hand text-center" st-sort="getters.timestamp" st-skip-natural="true" st-sort-default="reverse">创建时间</th><th class="hand text-center">操作</th></tr></thead><tbody><tr ng-repeat="row in displayedCollection | limitTo:limit"><td class="text-center">{{ row.exchange | exchange}}</td><td class="text-center">{{ row.sec_id }}</td><td class="text-center">{{ row.sec_name }}</td><td class="text-center">{{ [row.side, row.position_effect] | direction }}</td><td class="text-right"><a tooltip-placement="left" tooltip="总仓:{{row.volume }} / 今仓:{{row.volume_today?row.volume_today:0}}">{{ [row.volume, row.volume_today] | position_volume }}</a></td><td class="text-right">{{ row.price | number:2 }}</td><td class="text-right">{{ row.vwap | number:2 | available}}</td><td class="text-right" ng-class="{\'red\':row.fpnl>0,\'green\':row.fpnl<0}">{{ row.fpnl | number:2 }}</td><td class="text-center">{{ row.transact_time*1000 | date: \'yyyy-M-dd H:mm:ss\' }}</td><td class="text-center"><a ng-click="closePosition(row)">平仓</a></td></tr></tbody></table></div>'),
$templateCache.put('app/strategy/strategy.detail.transacts.html', '<div ng-controller="StrategyTransactionsCtrl"><table st-table="displayedTransactions" st-safe-src="trans" class="table table-condensed table-hover"><thead><tr><th class="hand text-center" st-sort="getters.timestamp" st-skip-natural="true" st-sort-default="reverse">时间</th><th class="hand text-center" st-sort="sec_id" st-skip-natural="true">代码</th><th class="hand text-center" st-sort="sec_name" st-skip-natural="true">名称</th><th class="hand text-center" st-sort="side" st-skip-natural="true">方向</th><th class="hand text-right" st-sort="price" st-skip-natural="true">价格</th><th class="hand text-right" st-sort="volume" st-skip-natural="true">数量</th><th class="hand text-right" st-sort="amount" st-skip-natural="true">成本金额</th></tr></thead><tbody><tr ng-repeat="row in displayedTransactions | limitTo:limit"><td class="text-center">{{row.transact_time*1000 | date: \'yyyy-M-dd H:mm:ss\'}}</td><td class="text-center">{{row.sec_id}}</td><td class="text-center">{{row.sec_name}}</td><td class="text-center">{{ [row.side, row.position_effect] | direction }}</td><td class="text-right">{{row.price | number:2 }}</td><td class="text-right">{{row.volume | number:0 }}</td><td class="text-right">{{row.amount | number:2 }}</td></tr></tbody></table></div>'),
$templateCache.put('app/strategy/strategy.detail.unfinishedorders.html', '<div ng-controller="StrategyUnfinishedOrdersCtrl"><table st-table="displayedCollection" st-safe-src="unfinishedOrders" class="table table-style2"><thead><tr><th class="hand" st-sort="getters.sending_time" st-skip-natural="true" st-sort-default="reverse">时间</th><th class="hand" st-sort="sec_id" st-skip-natural="true">委托</th><th class="hand text-right" st-sort="price" st-skip-natural="true">价格</th><th class="hand text-right" st-sort="volume" st-skip-natural="true">数量</th><th class="text-center">操作</th></tr></thead><tbody><tr ng-repeat="row in displayedCollection | limitTo:limit"><td>{{ row.sending_time*1000 | date: \'H:mm:ss\'}}</td><td>{{ [row.side, row.position_effect, row.sec_id]|unfinish_order }}</td><td class="text-right">{{[row.price, row.order_type ]| price }}</td><td class="text-right">{{ row.volume | number:0 }}</td><td class="text-center"><a ng-click="cancelOrder(row)">撤单</a></td></tr></tbody></table></div>'),
$templateCache.put('app/strategy/strategy.list.html', '<div id="content" class="content animated fadeIn" ng-controller="StrategyListCtrl"><ol class="breadcrumb pull-right"><li class="active">{{title}}</li></ol><h1 class="page-header">{{title}}</h1><div class="col-md-3 w-md-3 p-5" ng-repeat="strategy in strategies|filter:trade_filter| orderObjectBy:\'name\':false"><div class="panel-1 b-color"><div class="panel-heading"><h4 class="panel-title span-a">{{ strategy.name }} <span class="pull-right label" ui-sref="app.strategy.detail({strategy_id: strategy.strategy_id})"><a>详情</a></span></h4></div><div class="panel-footer text-center"><div class="row"><div class="col-md-7"><div flotchart="" style="height:150px" options="options" data="strategy.trends"></div></div><div class="col-md-5"><ul class="list-unstyled"><li>盈亏：{{strategy.indicators.pnl.value | number:2|available}}</li><li>权益：{{strategy.indicators.nav.value | number:2|available}}</li><li>绝对收益：{{strategy.indicators.profit_ratio.value | number:2|available}}</li><li>年化收益：{{strategy.indicators.annual_return.value | number:2|available}} %</li><li>胜率：{{strategy.indicators.win_ratio.value | number:2}} %</li><li>风险比率：{{strategy.indicators.risk_ratio.value | number:2}} %</li><li>最大回撤：{{strategy.indicators.max_drawdown.value | number:2 |available}} %</li></ul></div></div><div class="row"><div class="col-md-5 p-r-5 p-l-5" ng-class="{\'t-color\': strategy.running_status.state == \'1\', \'t-color3\': strategy.running_status.state==\'2\'}"><a class="btn w-btn btn-lg p-10 p-b-0"><p class="p-f">量化交易<span>策略状态</span></p><p>{{ strategy.running_status | strategy_status }}</p></a></div><div class="col-md-7 p-r-5 p-l-5"><div class="bootstrap-select"><div ng-if="permissions.riskControlPMSN===\'0\'" class="btn w-btn b-color"><span ng-repeat="account in strategy.accounts">{{account.account_name}}</span></div><div ng-if="permissions.riskControlPMSN!==\'0\'" class="btn w-btn b-color" ng-switch="permissions.riskControlPMSN"><div ng-switch-when="1" class="btn-group pull-right"><button type="button" class="btn btn-success btn-xs active">风控</button> <button ng-if="strategy.risk_config.enable==true" type="button" class="btn btn-on btn-xs dropdown-toggle" ng-click="change_risk_onoff(strategy)">开</button> <button ng-if="strategy.risk_config.enable==false" type="button" class="btn btn-success btn-xs dropdown-toggle active" ng-click="change_risk_onoff(strategy)">关</button></div><div ng-switch-when="2" class="btn-group pull-right" ng-click="permission_deny()"><button type="button" class="btn btn-success btn-xs active">风控</button> <button type="button" class="btn btn-success btn-xs dropdown-toggle active">关</button></div><div ng-switch-when="0" class="btn-group pull-right"><button type="button" class="btn btn-success btn-xs active">风控</button> <button type="button" class="btn btn-success btn-xs dropdown-toggle active">关</button></div><div ng-switch-when="1" class="panel-heading-btn pull-left" ng-switch="strategy.risk_state"><span ng-switch-when="1"><a tooltip-placement="top" tooltip="正常状态" class="btn btn-xxs btn-icon btn-color"></a> <a class="btn btn-success btn-xxs btn-icon active"></a> <a class="btn btn-success btn-xxs btn-icon active"></a></span> <span ng-switch-when="2"><a class="btn btn-success btn-xxs btn-icon active"></a> <a tooltip-placement="top" tooltip="禁止开仓状态" class="btn btn-xxs btn-icon btn-color2"></a> <a class="btn btn-success btn-xxs btn-icon active"></a></span> <span ng-switch-when="3"><a class="btn btn-success btn-xxs btn-icon active in"></a> <a class="btn btn-success btn-xxs btn-icon active in"></a> <a tooltip-placement="top" tooltip="禁止交易状态" class="btn btn-xxs btn-icon btn-color3"></a></span> <span ng-switch-default=""><a class="btn btn-success btn-xxs btn-icon active in"></a> <a class="btn btn-success btn-xxs btn-icon active in"></a> <a class="btn btn-success btn-xxs btn-icon active in"></a></span></div><div ng-switch-when="2" class="panel-heading-btn pull-left"><span><a class="btn btn-success btn-xxs btn-icon active in"></a> <a class="btn btn-success btn-xxs btn-icon active in"></a> <a class="btn btn-success btn-xxs btn-icon active in"></a></span></div></div></div><div class="bootstrap-select"><button type="button" class="btn w-btn dropdown-toggle selectpicker b-color" ng-class="{\'b-color\': strategy.connected_account>0,\'b-color2\': strategy.connected_account==0}" data-toggle="dropdown" aria-expanded="false"><span class="filter-option pull-left">绑定账户:{{strategy.accounts.length}}个 连接中:{{strategy.connected_account}}个</span> &nbsp;<span ng-if="strategy.accounts.length>0" class="caret"></span></button><div class="dropdown-menu open"><ul class="dropdown-menu inner selectpicker" role="menu"><li ng-repeat="account in strategy.accounts|orderObjectBy:\'account_name\':false"><a><span class="text">{{account.account_name}}</span><i class="fa fa-check icon-ok check-mark" ng-if="account.status.state==2"></i></a></li></ul></div></div></div></div></div></div></div></div>'),
$templateCache.put('app/strategy/strategy.placeorder.html', '<div ng-cloak=""><div class="modal-header"><button type="button" class="close" ng-click="cancel()" aria-hidden="true">&times;</button><h4 class="modal-title">手动下单</h4></div><div class="modal-body"><div class="alert alert-success fade in m-b-15" ng-if="submit_status==\'success\'">下单成功 <span class="close" ng-click="hide_alert()">×</span></div><div class="alert alert-danger fade in m-b-15" ng-if="submit_status==\'error\'">下单失败 <span class="close" ng-click="hide_alert()">×</span></div><div class="row place-order my-row"><div class="col-md-7 pull-right"><div class="order-form" ng-hide="is_index"><div class="strategy-info"><div class="col-md-12"><h2 class="text-center f-s-26 m-t-15 m-b-10">{{ strategy.base.name }}</h2></div><div class="col-md-12 m-t-20"><div class="col-md-4 text-center">可用资金</div><div class="col-md-8 money">{{ strategy.cash.available | number: 2 }}</div><div class="row" ng-if="order.is_close"><div class="col-md-4 text-center">总仓位</div><div class="col-md-8 money">{{ position.volume | number: 0 }}</div></div><div class="row" ng-if="order.is_close"><div class="col-md-4 text-center">今仓位</div><div class="col-md-8 money">{{ position.volume_today | number: 0 }}</div></div></div></div><div class="col-md-12"><form class="form-place-order form-horizontal"><div class="form-group"><label class="control-label col-md-4">证券代码</label><div class="col-md-8"><input id="place-order-symbol-input" class="form-control" type="text" value="{{::inst.sec_name}}" placeholder="请输入代码或拼音首字母" ng-readonly="order.position_effect !== 1"></div></div><div class="form-group"><label class="control-label col-md-4">方向</label><div class="col-md-8"><label ng-repeat="g in buysells" class="side"><input type="radio" name="side" ng-model="order.buysell" ng-value="g.id">{{g.name}}</label></div></div><div class="form-group"><label class="control-label col-md-4">开平</label><div class="col-md-8"><label ng-repeat="g in position_effects" class="side"><input type="radio" name="position_effect" ng-model="order.position_effect" ng-value="g.id">{{g.name}}</label> <label class="side" ng-if="inst.exchange==\'SHFE\'"><input type="radio" name="position_effect" ng-model="order.position_effect" ng-value="4">平昨</label></div></div><div class="form-group"><label class="control-label col-md-4">类型</label><div class="col-md-8"><label ng-repeat="g in order_types" class="side"><input type="radio" name="order_type" ng-model="order.order_type" ng-value="g.id">{{g.name}}</label></div></div><div class="form-group"><label class="control-label col-md-4">价格</label><div class="col-md-8"><input class="form-control" type="number" ng-model="order.price" ng-value="last_price"></div></div><div class="form-group"><label class="control-label col-md-4">数量</label><div class="col-md-8"><input class="form-control" type="number" ng-model="order.volume" ng-value="100"></div></div></form></div></div></div><div class="col-md-5"><div class="stock-info"><h2>{{ inst.sec_name }}</h2><ul class="summary"><li><span class="strong hand" ng-class="{\'green\': last_price < pre_close, \'red\': last_price > pre_close }" ng-click="pick_price(last_price)">{{ last_price | number:pricePrecision }}</span></li><li><span>涨幅</span> <span ng-class="{\'green\': gain < 0, \'red\': gain > 0 }">{{ gain | number:2 }}%</span></li><li><span>涨停</span> <span class="high-limit red hand" ng-click="pick_price(upper_limit)">{{ upper_limit | number:pricePrecision }}</span></li><li><span>跌停</span> <span class="low-limit green hand" ng-click="pick_price(lower_limit)">{{ lower_limit | number:pricePrecision }}</span></li></ul><div class="list"><ul><li ng-repeat="ask in quotes.asks.slice().reverse()"><span class="col1">卖{{ numbers[quotes_len - 1 - $index] }}</span> <span class="col2 hand" ng-class="{\'green\': ask.price < pre_close, \'red\': ask.price > pre_close }" ng-click="pick_price(ask.price)">{{ ask.price | number:pricePrecision }}</span> <span class="col3 blue">{{ ask.vol | number: 0}}</span></li></ul><ul><li ng-repeat="bid in quotes.bids"><span class="col1">买{{ numbers[$index] }}</span> <span class="col2 hand" ng-class="{\'green\': bid.price < pre_close, \'red\': bid.price > pre_close }" ng-click="pick_price(bid.price)">{{ bid.price | number:pricePrecision }}</span> <span class="col3 blue">{{ bid.vol | number: 0 }}</span></li></ul></div></div></div></div></div><div class="modal-footer"><checkbox ng-model="PlaceOrderCtrl.autoClose" class="btn-normal pull-left" ng-change="PlaceOrderCtrl.changeAutoCloseSetting(PlaceOrderCtrl.autoClose)"></checkbox><label class="pull-left">下单后自动关闭对话框</label> <button class="btn btn-success" ng-hide="is_index" ng-click="place_order()">{{ ok_value }}</button></div></div>'),
$templateCache.put('app/strategy/strategy.remove.confirm.html', '<div><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">&times;</button><h4 class="modal-title">删除策略</h4></div><div class="modal-body"><div class="alert alert-danger m-b-0"><h4>确认删除策略</h4><div class="row"><div class="col-md-1 col-md-offset-1">策略名</div><div class="col-md-10">{{ strategy.name }}</div><div class="col-md-1 col-md-offset-1">策略ID</div><div class="col-md-10">{{ strategy.strategy_id }}</div></div></div></div><div class="modal-footer"><button type="button" class="btn btn-danger" ng-click="ok()">删除</button></div></div>'),
$templateCache.put('app/strategy/strategy.setting.html', '<div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-hidden="true">&times;</button><h4>{{ title_map[title] }}</h4></div><div class="modal-body my-row"><div><div ng-switch="title" class="strategy-wizard"><div ng-switch-when="base_info" class=""><form name="form" novalidate="novalidate" class="form-horizontal"><div class="form-group" ng-class="{ \'has-error\': form.name.$dirty && form.name.$error.required }"><label class="control-label col-md-2" for="name">策略名称</label><div class="col-md-10"><input autofocus="" class="form-control" type="text" id="name" ng-model="modal.wizard.name" placeholder="您的策略名称" ng-required="true"></div></div><div class="form-group"><label class="control-label col-md-2" for="lang">编程语言</label><div class="col-md-10"><input class="form-control" type="text" id="lang" ng-model="modal.wizard.dev_lang" placeholder="您的策略开发语言"></div></div><div class="form-group"><label class="control-label col-md-2" for="str-category">策略类型</label><div class="col-md-10"><select class="form-control" id="str-category" data-ng-model="modal.wizard.category" ng-options="b.id as b.name for b in categories"><option value="" disabled="" selected="" ng-hide="modal.wizard.category">请选择您的策略类型</option></select></div></div><div class="form-group"><label class="control-label col-md-2" for="str-style">策略风格</label><div class="col-md-10"><select class="form-control" id="str-style" data-ng-model="modal.wizard.style" ng-options="b.id as b.name for b in styles"><option value="" disabled="" selected="" ng-hide="modal.wizard.category">请选择您的策略风格</option></select></div></div><div class="form-group"><label class="control-label col-md-2" for="desc">策略描述</label><div class="col-md-10"><textarea class="form-control" type="text" id="desc" ng-model="modal.wizard.description" placeholder="请简要描述您的策略">\n            </textarea></div></div><div class="col-md-12"><span ng-if="saving"><i class="fa fa-spinner fa-spin fa-lg"></i>正在保存...</span> <span ng-if="save_succeed"><i class="fa fa-check fa-lg text-primary">保存成功！</i></span></div></form></div><div ng-switch-when="account" class="form-horizontal"><form novalidate="novalidate" class="form-horizontal"><div custom-slimscroll="" data-height="287px"><div class="form-group" ng-repeat="account in all_accounts | orderObjectBy:\'account_name\':false"><div class="row"><div class="col-md-11 col-md-offset-1"><checkbox ng-model="account.isSelected" class="btn-normal"></checkbox><label>{{account.account_name}}</label></div></div></div></div><div class="col-md-12"><span ng-if="saving"><i class="fa fa-spinner fa-spin fa-lg"></i>正在保存...</span> <span ng-if="account_save_succeed"><i class="fa fa-check fa-lg text-primary">保存成功！</i></span></div></form></div><div ng-switch-when="sync" class="form-horizontal" ng-show="show_sync"><div ng-show="sync_error" class="alert alert-danger"><i class="fa fa-ban fa-lg"></i>{{ sync_error_msg }}</div><div><accordion close-others="true"><accordion-group is-open="accordion.cash"><accordion-heading>资金差额: {{cash_diff.available_diff | number : 2}} 元 <i class="pull-right fa" ng-class="{\'fa-chevron-down\': accordion.cash, \'fa-chevron-right\': !accordion.cash}"></i></accordion-heading><table st-table="cash_diff" class="table"><thead><tr><th class="text-center">策略可用资金</th><th class="text-center">账户可用资金</th><th class="text-center">差额</th></tr></thead><tbody><tr><td class="text-center">{{ cash_diff.strategy_available | number : 2 }}</td><td class="text-center">{{ cash_diff.account_available | number : 2 }}</td><td class="text-center">{{ cash_diff.available_diff | number : 2 }}</td></tr></tbody></table></accordion-group><accordion-group is-open="accordion.pos"><accordion-heading>持仓差异: {{position_diff.length}}条记录 <i class="pull-right fa" ng-class="{\'fa-chevron-down\': accordion.pos, \'fa-chevron-right\': !accordion.pos}"></i></accordion-heading><table st-table="position_diff_collection" st-safe-src="position_diff" class="table"><thead><tr><th class="text-center" st-sort="sec_id">代<br>码</th><th class="text-center">方<br>向</th><th class="text-center" st-sort="strategy_volume">策略<br>持仓</th><th class="text-center" st-sort="account_volume">账户<br>持仓</th><th class="text-center" st-sort="volume_diff">持仓<br>差额</th><th class="text-center" st-sort="strategy_vwap">策略<br>均价</th><th class="text-center" st-sort="account_vwap">账户<br>均价</th><th class="text-center" st-sort="vwap_diff">均价<br>差额</th></tr></thead><tbody><tr ng-repeat="pos in position_diff_collection"><td class="text-center">{{ pos.sec_id }}</td><td class="text-center">{{ [pos.side, pos.position_effect] | direction }}</td><td class="text-center">{{ pos.strategy_volume }}</td><td class="text-center">{{ pos.account_volume }}</td><td class="text-center">{{ pos.volume_diff }}</td><td class="text-center">{{ pos.strategy_vwap | number : 2 }}</td><td class="text-center">{{ pos.account_vwap | number : 2 }}</td><td class="text-center">{{ pos.vwap_diff | number : 2 }}</td></tr></tbody><tfoot><tr><td colspan="5" class="text-center"><div st-pagination="" st-items-by-page="4" st-displayed-pages=""></div></td></tr></tfoot></table></accordion-group></accordion></div><form novalidate="novalidate" class="form-horizontal"><div class="col-md-12"><span ng-if="saving"><i class="fa fa-spinner fa-spin fa-lg"></i>正在同步...</span> <span ng-if="sync_save_succeed"><i class="fa fa-check fa-lg text-primary">同步成功！</i></span></div></form></div><div ng-switch-when="cash_io" class="strategy-setting" ng-disabled="!strategy.ready"><div ng-show="cash_io_error" class="alert alert-danger"><i class="fa fa-ban fa-lg"></i> 转出金额大于可用资金，请重新输入</div><form novalidate="novalidate" class="form-horizontal"><div class="form-group"><label class="control-label col-md-2">可用资金</label><div class="col-md-10"><span class="form-control readonly">{{ strategy.cash.available | number:2 }}</span></div></div><div class="form-group"><label class="control-label col-md-2">累计出入金</label><div class="col-md-10"><span class="form-control readonly">{{ strategy.cash.cum_inout | number:2 }}</span></div></div><div class="form-group"><label class="control-label col-md-2">赢亏</label><div class="col-md-10"><span class="form-control readonly {{ strategy.indicators.pnl.color_class }}">{{ modal.indicators.pnl.value | number:2 }}</span></div></div><div class="form-group"><label class="control-label col-md-2">资金操作</label><div class="col-md-10"><select class="form-control" type="digit" ng-model="modal.cash_io_flag" ng-options="b.id as b.name for b in cash_inout_dir"></select></div></div><div class="form-group"><label class="control-label col-md-2">金额</label><div class="col-md-10"><input class="form-control input-xlarge" type="digit" ng-model="modal.cash_inout" value="modal.cash_inout | number:2" placeholder="请输入正确的金额数字"></div></div><div class="col-md-12"><span ng-if="saving"><i class="fa fa-spinner fa-spin fa-lg"></i>正在保存...</span> <span ng-if="cash_save_succeed"><i class="fa fa-check fa-lg text-primary">保存成功！</i></span></div></form></div><div ng-switch-when="position_io" class="" ng-disabled="!strategy.ready"><div ng-show="pos_io_error" class="alert alert-danger"><i class="fa fa-ban fa-lg"></i> {{$scope.pos_io_error_msg}}</div><form novalidate="novalidate" class="form-horizontal"><div style="min-height: 250px"><table st-table="st_position" class="table table-condensed table-hover" style="vertical-align:text-top;"><thead><tr><th class="hand" st-sort="exchange" st-skip-natural="true">交易所</th><th class="hand" st-sort="sec_id" st-skip-natural="true">代码</th><th class="hand" st-sort="sec_name" st-skip-natural="true">名称</th><th class="hand" st-sort="side">方向</th><th class="hand" st-sort="volume" st-skip-natural="true">数量</th><th class="hand" st-sort="vwap" st-skip-natural="true">均价</th></tr></thead><tbody><tr ng-repeat="pos in st_position"><td>{{ pos.exchange }}</td><td>{{ pos.sec_id }}</td><td>{{ pos.sec_name }}</td><td>{{ [pos.side, pos.position_effect] | direction }}</td><td><div class="form-group novalidate"><input name="volume" class="num" ng-model="pos.input" type="number" min="0" step="1" value="{{ pos.volume | number: 0 }}"></div></td><td><div class="form-group novalidate"><input name="vwap" class="num" ng-model="pos.vwap_input" type="number" min="0" step="1" value="{{ pos.vwap | number: 2 }}"></div></td></tr></tbody><tfoot><tr><td colspan="5" class="text-center"><div st-pagination="" st-items-by-page="6" st-displayed-pages=""></div></td></tr></tfoot></table></div><div class="col-md-12"><button class="btn btn-sm btn-primary text-right col-md-offset-5" ng-disabled="saving" ng-click="position_io()"><i class="fa fa-check-square-o"></i>提交</button> <span ng-if="saving && st_position.length > 0"><i class="fa fa-spinner fa-spin fa-lg"></i>正在提交...</span> <span ng-if="pos_save_succeed && st_position.length > 0"><i class="fa fa-check fa-lg text-primary">提交成功！</i></span></div></form></div></div></div></div><div class="modal-footer"><a ng-if="title!=\'sync\'" class="btn btn-success" ng-click="modal.sure()">保存</a> <a ng-if="title==\'sync\'" class="btn btn-success" ng-show="show_sync" ng-click="modal.sure()">保存</a></div>'),
$templateCache.put('app/strategy/strategy.sidebar.html', '<div id="sidebar-right" class="sidebar sidebar-right animated fadeIn" ng-controller="StrategySidebarCrtl"><div custom-slimscroll="" data-height="100%"><ul class="nav m-t-10 p-t-5 p-b-10"><li class="nav-widget" ng-if="permissions.riskControlPMSN!==\'0\'"><p ng-if="permissions.riskControlPMSN===\'1\'" class="m-b-5">风控状态<span><a ng-click="risk_config()" tooltip-placement="left" tooltip="风控设置"><i class="fa fa-gear"></i></a></span></p><p ng-if="permissions.riskControlPMSN===\'2\'" class="m-b-5">风控状态<span><a ng-click="permission_deny()" tooltip-placement="left" tooltip="风控设置"><i class="fa fa-gear"></i></a></span></p><div class="btn w-btn" ng-switch="permissions.riskControlPMSN"><div ng-switch-when="1" class="btn-group pull-right"><button type="button" class="btn btn-success btn-xs active">风控</button> <button ng-if="strategy.risk_config.enable==true" type="button" class="btn btn-on btn-xs dropdown-toggle" ng-click="change_risk_onoff(strategy)">开</button> <button ng-if="strategy.risk_config.enable==false" type="button" class="btn btn-success btn-xs dropdown-toggle active" ng-click="change_risk_onoff(strategy)">关</button></div><div ng-switch-when="2" class="btn-group pull-right" ng-click="permission_deny()"><button type="button" class="btn btn-success btn-xs active">风控</button> <button type="button" class="btn btn-success btn-xs dropdown-toggle active">关</button></div><div ng-switch-when="1" class="panel-heading-btn pull-left" ng-switch="strategy.risk_state"><span ng-switch-when="1"><a tooltip-placement="top" tooltip="正常状态" class="btn btn-xxs btn-icon btn-color"></a> <a class="btn btn-success btn-xxs btn-icon active2"></a> <a class="btn btn-success btn-xxs btn-icon active2"></a></span> <span ng-switch-when="2"><a class="btn btn-success btn-xxs btn-icon active2"></a> <a tooltip-placement="top" tooltip="禁止开仓状态" class="btn btn-xxs btn-icon btn-color2"></a> <a class="btn btn-success btn-xxs btn-icon active2"></a></span> <span ng-switch-when="3"><a class="btn btn-success btn-xxs btn-icon active2"></a> <a class="btn btn-success btn-xxs btn-icon active2"></a> <a tooltip-placement="top" tooltip="禁止交易状态" class="btn btn-xxs btn-icon btn-color3"></a></span> <span ng-switch-default=""><a class="btn btn-success btn-xxs btn-icon active2"></a> <a class="btn btn-success btn-xxs btn-icon active2"></a> <a class="btn btn-success btn-xxs btn-icon active2"></a></span></div><div ng-switch-when="2" class="panel-heading-btn pull-left"><span><a class="btn btn-success btn-xxs btn-icon active2"></a> <a class="btn btn-success btn-xxs btn-icon active2"></a> <a class="btn btn-success btn-xxs btn-icon active2"></a></span></div></div></li><li class="nav-widget p-t-5 p-b-10"><p class="m-b-5">策略状态</p><div class="pull-left"><div class="pull-left p-r-20"><ul><li ng-class="{\'font-color\': strategy.running_status.state == \'1\'}">{{categories[strategy.base.category]|available}}（{{ strategy.running_status | strategy_status }}）</li></ul></div></div></li><li class="nav-widget p-t-5 p-b-10"><p class="m-b-5">关联账户<span><a ng-click="setting_account()" tooltip-placement="left" tooltip="修改关联账户"><i class="fa fa-gear"></i></a></span></p><ul><li ng-repeat="account in strategy.accounts | orderObjectBy:\'account_name\':false" ng-class="{\'font-color\': account.status.state==2, \'font-color2\': account.status.state!=2}"><a ng-if="account.account_type == 3" tooltip-placement="right" tooltip="点击登录" ng-click="click_account(account)">{{account.account_name}}</a> <a ng-if="account.account_type < 3">{{account.account_name}}</a></li></ul></li><li class="nav-widget p-t-5 p-b-10"><div class="panel-group m-b-0" id="accordion"><div class="panel panel-inverse"><div class="panel-heading"><h3 class="panel-title"><a class="accordion-toggle accordion-toggle-styled collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><i class="fa fa-plus-circle pull-right text-success"></i>资金出入</a></h3></div><div id="collapseOne" class="panel-collapse collapse"><div class="panel-body"><ul><li>可用资金：{{strategy.cash.available|number:2|available}}</li><li>累计出入金：{{strategy.cash.cum_inout|number:2|available}}</li><li>赢亏：<span class="{{ strategy.indicators.pnl.color_class }}">{{strategy.indicators.pnl.value|number:2|available}}</span></li></ul><a ng-click="edit_strategy(\'cash_io\')" class="btn btn-success btn-block">修改资金出入</a></div></div></div><div class="panel panel-inverse"><div class="panel-heading"><h3 class="panel-title"><a class="accordion-toggle accordion-toggle-styled collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><i class="fa fa-plus-circle pull-right text-success"></i>基本信息</a></h3></div><div id="collapseTwo" class="panel-collapse collapse"><div class="panel-body"><ul><li>策略名称：{{strategy.name}}</li><li>编程语言：{{strategy.base.dev_lang|available}}</li><li>策略类型：{{categories[strategy.base.category]|available}}</li><li>策略风格：{{styles[strategy.base.style]|available}}</li><li>策略描述：{{strategy.base.description|available}}</li></ul><a ng-click="setting_base()" class="btn btn-success btn-block">修改基本信息</a></div></div></div></div></li></ul><ul style="height:60px"></ul><ul class="sidebar-button text-center"><li tooltip-placement="top" tooltip="导出数据"><a ng-click="data_export()" class="btn btn-success m-r-5"><i class="fa fa-share"></i><font>导出数据</font></a></li><li ng-if="permissions.riskControlPMSN===\'1\'" tooltip-placement="top" tooltip="风控设置"><a ng-click="risk_config()" class="btn btn-success m-r-5"><i class="fa fa-umbrella"></i><font>风控设置</font></a></li><li ng-if="permissions.riskControlPMSN===\'2\'" tooltip-placement="top" tooltip="风控设置"><a ng-click="permission_deny()" class="btn btn-default m-r-5"><i class="fa fa-umbrella"></i><font>风控设置</font></a></li><li ng-if="permissions.analysisPMSN===\'1\'" tooltip-placement="top" tooltip="信号分析"><a ui-sref="app.analysis.detail({strategy_id: strategy.strategy_id})" class="btn btn-success m-r-5"><i class="fa fa-line-chart"></i><font>信号分析</font></a></li><li ng-if="permissions.analysisPMSN===\'2\'" tooltip-placement="top" tooltip="信号分析"><a ng-click="permission_deny()" class="btn btn-default m-r-5"><i class="fa fa-line-chart"></i><font>信号分析</font></a></li><li ng-if="permissions.accountPMSN==\'1\'&&show_sync()" tooltip-placement="top" tooltip="同步账户"><a ng-click="sync_account()" class="btn btn-success m-r-5"><i class="fa fa-refresh"></i><font>同步账户</font></a></li><li tooltip-placement="top" tooltip="删除策略"><a ng-click="remove_strategy()" class="btn btn-danger m-r-5"><i class="fa fa-trash-o"></i><font>删除策略</font></a></li></ul></div></div><div class="sidebar-bg sidebar-right"></div>')
}
]);
