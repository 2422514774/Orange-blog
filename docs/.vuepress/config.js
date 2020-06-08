module.exports = {
  dest: 'blog',
  theme: 'reco',
  title: "A little black orange",
  description: 'study programs and record life',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#FF66CC' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/LatteAndCat.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/LatteAndCat.svg', color: '#FF66CC' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/LatteAndCat.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    type: 'blog',
    huawei: false,
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'Notes', link: '/note/', icon: 'reco-document' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      // { text: 'PhotoAlbum', link: 'http://photo.smallsunnyfox.com/', icon: 'reco-blog'},
      { text: 'About', link: '/about/', icon: 'reco-account'},
      { text: 'GitHub', link: 'https://github.com/smallsunnyfox', icon: 'reco-github' }
    ],
    friendLink: [
      {
        title: 'latte and cat',
        desc: '该博客主题借鉴latte and cat作者博客 点击GO原作者传送门',
        email: '1156743527@qq.com',
        link: 'https://blog.smallsunnyfox.com//'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    logo: '/nadouzi.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: {
      '/note/': [
        {
          title: 'HTML5',
          collapsable: true,
          children: [
            'html5/HTML5的语义元素',
            'html5/HTML5多媒体标签',
            'html5/HTML5表单元素',
            'html5/HTML5中的API',
            'html5/Canvas'
          ]
        },
        {
          title: 'CSS',
          collapsable: true,
          children: [
            'css/css3新特性',
            'css/css3Flip'
          ]
        },
        {
          title: 'JS',
          collapsable: true,
          children: [
            'js/js数据类型',
            'js/js对象',
            'js/js继承',
            'js/js原型链、闭包',
            'js/js函数的四种调用方式'
          ]
        },
        {
          title: 'Vue.js',
          collapsable: true,
          children: [
            'Vue/Vue基础笔记',
            'Vue/Vue组件'
          ]
        },
        {
          title: '前端单元测试',
          collapsable: true,
          children: [
            'fe-unit-test/chai',
            'fe-unit-test/mocha',
            'fe-unit-test/vueTestUtils'
          ]
        },
        {
          title: '微信小程序',
          collapsable: true,
          children: [
            'wechat-mini-program/初识微信小程序',
          ]
        }
      ]
    },
    // 最后更新时间
    lastUpdated: 'A little black orange',
    // 作者
    author: '小黑的橘子',
    authorAvatar: '/nadouzi.png',
    // 备案号
    record: '豫ICP备19035192号',
    recordLink: 'http://www.beian.miit.gov.cn/',
    cyberSecurityRecord: '豫公网安备41172602000151号',
    cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41172602000151',
    // 项目开始时间
    startYear: '2019',
    /**
     * valine 设置 (if you need valine comment )
     */
    valineConfig: {
      appId: 'XDwlSXS2pD137bPrPpwQaqqD-gzGzoHsz',// your appId
      appKey: 'CQ8FKrMUP76LwycPcKlDoRqV', // your appKey
      placeholder: '是时候展现真正的技术了',
      avatar: 'wavatar',
      serverUrl: 'https://leanserver.smallsunnyfox.com'
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      require('./plugins/KanBanNiang'),
      {
        theme: ['blackCat'],
        width: 200,
        height: 400,
        modelStyle: {
          position: 'fixed',
          right: '70px',
          bottom: '50px',
          opacity: '0.9' 
        },
        messageStyle: {
          position: 'fixed',
          right: '70px',
          bottom: '380px'
        },
        btnStyle: {
          bottom: '60px',
          right: '80px'
        }
      }
    ],
    [
      require('./plugins/BgMusic'),
      {
        audios: [
          {
            name: 'Play Date',
            artist: 'Melanie Martinez',
            url: 'http://link.hhtjim.com/kw/28435479.mp3',
            cover: 'http://p1.music.126.net/IHyAWLmjhKpH8VAAdt-0Bw==/109951163331928390.jpg?param=130y130'
          },
          {
            name: 'Candy_Wind-英雄联盟（Nzzy remix）',
            artist: '阿LieA remix',
            url: 'http://y2-p-p.qq190.net/UserSongs/2020/01/c7e308f2fb474fcba2e340da0bf2b94a_mp3.m4a',
            cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591612205729&di=9f970f200d44ab6a2df720646c89a7e8&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170116%2F1f268b59aa1b4fd4953d182408b3ccb1_th.jpeg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ]
      }
    ]
    ,
    [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ]
  ]
}  