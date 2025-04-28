if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    data() {
      return {
        loginForm: {
          username: "admin",
          password: "123456"
        },
        rememberMe: false
      };
    },
    onLoad() {
    },
    methods: {
      // 处理登录
      handleLogin() {
        if (!this.loginForm.username) {
          uni.showToast({
            title: "请输入用户名",
            icon: "none"
          });
          return;
        }
        if (!this.loginForm.password) {
          uni.showToast({
            title: "请输入密码",
            icon: "none"
          });
          return;
        }
        formatAppLog("log", "at pages/index/index.vue:81", "登录信息:", this.loginForm);
        uni.showLoading({
          title: "登录中..."
        });
        setTimeout(() => {
          uni.hideLoading();
          uni.showToast({
            title: "登录成功",
            icon: "success",
            duration: 1500,
            success: () => {
              setTimeout(() => {
                uni.navigateTo({
                  url: "/pages/home/home"
                });
              }, 1500);
            }
          });
        }, 1500);
      },
      // 忘记密码
      forgotPassword() {
        uni.showToast({
          title: "忘记密码功能开发中",
          icon: "none"
        });
      },
      // 跳转到注册页面
      goToRegister() {
        uni.showToast({
          title: "注册功能开发中",
          icon: "none"
        });
      },
      // 第三方登录
      otherLogin(type) {
        uni.showToast({
          title: `${type}登录功能开发中`,
          icon: "none"
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "login-container" }, [
      vue.createElementVNode("view", { class: "logo-area" }, [
        vue.createCommentVNode(' <image class="logo" src="/static/logo.png" mode="aspectFit"></image> '),
        vue.createElementVNode("text", { class: "title" }, "欢迎登录")
      ]),
      vue.createElementVNode("view", { class: "form-area" }, [
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "input-label" }, "用户名"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "input",
              type: "text",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.loginForm.username = $event),
              placeholder: "请输入用户名"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.loginForm.username]
          ])
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "input-label" }, "密码"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "input",
              type: "password",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.loginForm.password = $event),
              placeholder: "请输入密码"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.loginForm.password]
          ])
        ]),
        vue.createElementVNode("button", {
          class: "login-btn",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.handleLogin && $options.handleLogin(...args))
        }, "登录")
      ]),
      vue.createElementVNode("view", { class: "other-login" }, [
        vue.createElementVNode("view", { class: "divider" }, [
          vue.createElementVNode("view", { class: "line" }),
          vue.createElementVNode("text", { class: "divider-text" }, "其他登录方式"),
          vue.createElementVNode("view", { class: "line" })
        ]),
        vue.createElementVNode("view", { class: "icon-row" }, [
          vue.createElementVNode("view", {
            class: "icon-item",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.otherLogin("wechat"))
          }, [
            vue.createElementVNode("text", { class: "iconfont" }, "微信")
          ]),
          vue.createElementVNode("view", {
            class: "icon-item",
            onClick: _cache[4] || (_cache[4] = ($event) => $options.otherLogin("qq"))
          }, [
            vue.createElementVNode("text", { class: "iconfont" }, "QQ")
          ]),
          vue.createElementVNode("view", {
            class: "icon-item",
            onClick: _cache[5] || (_cache[5] = ($event) => $options.otherLogin("weibo"))
          }, [
            vue.createElementVNode("text", { class: "iconfont" }, "微博")
          ])
        ])
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/Documents/HBuilderProjects/uniappV3Demo1/pages/index/index.vue"]]);
  const _imports_0 = "/static/avatar.png";
  const _sfc_main$2 = {
    data() {
      return {
        username: "admin",
        notificationCount: 3,
        bannerList: [
          {
            id: 1,
            image: "/static/banner1.jpg",
            url: "/pages/detail/detail?id=1"
          },
          {
            id: 2,
            image: "/static/banner2.jpg",
            url: "/pages/detail/detail?id=2"
          },
          {
            id: 3,
            image: "/static/banner3.jpg",
            url: "/pages/detail/detail?id=3"
          }
        ],
        navList: [
          {
            name: "扫一扫",
            icon: "扫码",
            url: "/pages/scan/scan",
            bgColor: "#007AFF"
          },
          {
            name: "日报表",
            icon: "订单",
            url: "/pages/order/order",
            bgColor: "#FF9500"
          },
          {
            name: "我的收藏",
            icon: "收藏",
            url: "/pages/favorite/favorite",
            bgColor: "#FF2D55"
          },
          {
            name: "个人中心",
            icon: "我的",
            url: "/pages/profile/profile",
            bgColor: "#4CD964"
          }
        ],
        contentList: [
          {
            id: 1,
            title: "如何提高工作效率",
            description: "这篇文章将介绍几种提高日常工作效率的方法...",
            image: "/static/content1.jpg",
            views: 1234,
            likes: 88
          },
          {
            id: 2,
            title: "健康饮食指南",
            description: "均衡的饮食对身体健康至关重要，本文将为您介绍...",
            image: "/static/content2.jpg",
            views: 986,
            likes: 76
          },
          {
            id: 3,
            title: "旅游攻略：春季出行",
            description: "春季是出行的好时节，这里有几个值得推荐的目的地...",
            image: "/static/content3.jpg",
            views: 1567,
            likes: 120
          }
        ]
      };
    },
    onLoad() {
      this.getUserInfo();
      this.getNotificationCount();
      this.getBannerList();
      this.getContentList();
    },
    methods: {
      // 获取用户信息
      getUserInfo() {
        const userInfo = uni.getStorageSync("userInfo");
        if (userInfo) {
          this.username = userInfo.username || "admin";
        }
      },
      // 获取通知数量
      getNotificationCount() {
        setTimeout(() => {
          this.notificationCount = Math.floor(Math.random() * 5);
        }, 1e3);
      },
      // 获取轮播图数据
      getBannerList() {
      },
      // 获取推荐内容
      getContentList() {
      },
      // 处理轮播图点击
      handleBannerClick(item) {
        uni.navigateTo({
          url: item.url
        });
      },
      // 页面导航
      navigateTo(url) {
        formatAppLog("log", "at pages/home/home.vue:177", "正在跳转到:", url);
        if (url === "/pages/scan/scan") {
          uni.navigateTo({
            url,
            fail: (err) => {
              formatAppLog("error", "at pages/home/home.vue:184", "跳转失败:", err);
              uni.showToast({
                title: "页面跳转失败",
                icon: "none"
              });
            }
          });
        } else {
          uni.navigateTo({
            url,
            fail: (err) => {
              formatAppLog("error", "at pages/home/home.vue:196", "跳转失败:", err);
              uni.showToast({
                title: "页面跳转失败",
                icon: "none"
              });
            }
          });
        }
      },
      // 查看内容详情
      viewContent(item) {
        uni.navigateTo({
          url: `/pages/content/content?id=${item.id}`
        });
      },
      // 跳转到用户资料页
      goToUserProfile() {
        uni.navigateTo({
          url: "/pages/profile/profile"
        });
      },
      // 跳转到通知页面
      goToNotification() {
        uni.navigateTo({
          url: "/pages/notification/notification"
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "home-container" }, [
      vue.createCommentVNode(" 顶部状态栏 "),
      vue.createElementVNode("view", { class: "status-bar" }, [
        vue.createElementVNode("view", {
          class: "user-info",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goToUserProfile && $options.goToUserProfile(...args))
        }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: _imports_0
          }),
          vue.createElementVNode(
            "text",
            { class: "welcome" },
            "你好，" + vue.toDisplayString($data.username),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", {
          class: "notification",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goToNotification && $options.goToNotification(...args))
        }, [
          vue.createElementVNode("text", { class: "iconfont" }, "消息"),
          $data.notificationCount > 0 ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: "badge"
            },
            vue.toDisplayString($data.notificationCount),
            1
            /* TEXT */
          )) : vue.createCommentVNode("v-if", true)
        ])
      ]),
      vue.createCommentVNode(" 功能导航 "),
      vue.createElementVNode("view", { class: "nav-grid" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.navList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "nav-item",
              key: index,
              onClick: ($event) => $options.navigateTo(item.url)
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: "nav-icon",
                  style: vue.normalizeStyle({ background: `linear-gradient(135deg, ${item.bgColor} 0%, ${item.bgColor}99 100%)` })
                },
                [
                  vue.createElementVNode(
                    "text",
                    { class: "iconfont" },
                    vue.toDisplayString(item.icon),
                    1
                    /* TEXT */
                  )
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "text",
                { class: "nav-text" },
                vue.toDisplayString(item.name),
                1
                /* TEXT */
              )
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 内容区域 "),
      vue.createElementVNode("view", { class: "content-section" }, [
        vue.createElementVNode("view", { class: "section-header" }, [
          vue.createElementVNode("text", { class: "section-title" }, "推荐内容"),
          vue.createElementVNode("text", {
            class: "more-link",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.navigateTo("/pages/more/more"))
          }, "更多")
        ]),
        vue.createElementVNode("view", { class: "content-list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.contentList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "content-item",
                key: index,
                onClick: ($event) => $options.viewContent(item)
              }, [
                vue.createElementVNode("image", {
                  class: "content-image",
                  src: item.image,
                  mode: "aspectFill"
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "content-info" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "content-title" },
                    vue.toDisplayString(item.title),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "content-desc" },
                    vue.toDisplayString(item.description),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "content-meta" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "meta-text" },
                      vue.toDisplayString(item.views) + " 浏览",
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "meta-text" },
                      vue.toDisplayString(item.likes) + " 点赞",
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/Documents/HBuilderProjects/uniappV3Demo1/pages/home/home.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        scanResult: ""
        // 扫描结果
      };
    },
    methods: {
      // 开始扫描
      startScan() {
        uni.scanCode({
          scanType: ["qrCode", "barCode", "datamatrix", "pdf417"],
          success: (res) => {
            this.scanResult = res.result;
            uni.vibrateLong();
          },
          fail: (err) => {
            formatAppLog("error", "at pages/scan/scan.vue:36", "扫码失败：", err);
            uni.showToast({
              title: "扫码失败",
              icon: "none"
            });
          }
        });
      },
      // 重置扫描
      resetScan() {
        this.scanResult = "";
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "scan-container" }, [
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("text", { class: "title" }, "扫一扫")
      ]),
      !$data.scanResult ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "scan-btn-container"
      }, [
        vue.createElementVNode("button", {
          class: "scan-btn",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.startScan && $options.startScan(...args))
        }, "开始扫码")
      ])) : vue.createCommentVNode("v-if", true),
      $data.scanResult ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "result-container"
      }, [
        vue.createElementVNode("view", { class: "result-title" }, "扫描结果"),
        vue.createElementVNode(
          "view",
          { class: "result-content" },
          vue.toDisplayString($data.scanResult),
          1
          /* TEXT */
        ),
        vue.createElementVNode("button", {
          class: "scan-again-btn",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.resetScan && $options.resetScan(...args))
        }, "再次扫描")
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesScanScan = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/Documents/HBuilderProjects/uniappV3Demo1/pages/scan/scan.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/scan/scan", PagesScanScan);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Documents/HBuilderProjects/uniappV3Demo1/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
