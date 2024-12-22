module.exports = {
    plugins: {
        'postcss-pxtorem': {
            // 判断是否是vant的文件 如果是就使用 37.5为根节点字体大小
            rootValue({ file }) {
                // 否则使用75，因为vant使用的设计标准为375 但市场现在的主流设置尺寸是750
                return file.indexOf('vant') !== -1 ? 37.5 : 75;
            },
            // 配置的文件尺寸需要转化为rem *表示所有的都要转化
            // 需要转换的css属性，默认*全部
            propList: ['*'],
        },
    },
};