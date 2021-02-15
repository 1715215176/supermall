module.exports = {
  plugins: {
    autoprefixer: {},
      "postcss-px-to-viewport": {
        // 标准的
        viewportWidth: 375,  //视窗的宽度，对应的是我们设计稿的宽度
        viewportHeight: 667,   //视窗的高度，对应的是我们设计稿的高度
        unitPrecision: 5,    //保留5位小数
        viewportUnit: 'vw',   //转化px为vw，也可以rem，建议vw
        selectorBlackList: ['.ignore'],   //有这个类的元素，它的单位不转换
        minPixelValue: 1,   //  小于或等于’1px‘不转换单位
        mediaQuery: false,  //  允许在媒体查询中转换'px'
        exclude:[/TabBar/]
      },
  }
};

/*  别人的版本
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {},
    "postcss-pxtorem": {
      rootValue: 37.5,
      unitPrecision: 5,   //保留5位小数
      propList: ["*"],
      selectorBlackList: [".ignore", ".hairlines"],
      replace: true,
      mediaQuery: true,
      minPixelValue: 1
    },
    cssnano: {
      "cssnano-preset-advanced": {
        zindex: false,
        autoprefixer: false
      }
    }
  }
};
*/
