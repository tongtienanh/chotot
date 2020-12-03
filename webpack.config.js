const path = require('path'), MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    // mode: process.env.NODE_ENV,
    entry: {
        index: [
            './assets/js/pages/index.js',
            './assets/scss/pages/index/index.scss'
        ],
        about: [
            './assets/js/pages/about.js',
            './assets/scss/pages/about/about.scss'
        ],
        house: [
            './assets/js/pages/house.js',
            './assets/scss/pages/house/house.scss'
        ],
         category_1:[
                     './assets/js/pages/category_1.js',
                     './assets/scss/pages/category_1/category_1.scss',
                 ],
        project:[
            './assets/scss/pages/project/project.scss',
        ],
        category_2:[
            './assets/scss/pages/category_2/category_2.scss',
        ],
        list_3:[
            './assets/scss/pages/list_3/list_3.scss',
        ],
        detail:[
            './assets/js/pages/detail.js',
            './assets/scss/pages/detail/detail.scss',
        ],
        login:[
            './assets/scss/pages/login/login.scss',
        ],
        purchase:[
            './assets/js/pages/purchase.js',
            './assets/scss/pages/purchase/purchase.scss',
        ],
        house_2:[
            './assets/scss/pages/house_2/house_2.scss',
        ],
        seller:[
            './assets/scss/pages/seller/seller.scss',
        ],
        personal_page:[
            './assets/scss/pages/personal_page/personal_page.scss',
        ],
        chat:[
            './assets/scss/pages/chat/chat.scss',
        ],
        project_info:[
            './assets/js/pages/project_info.js',
            './assets/scss/pages/project_info/project_info.scss',
        ],
        property_page:[
            './assets/js/pages/property_page.js',
            './assets/scss/pages/property_page/property_page.scss',
        ],
        jobs:[
            './assets/js/pages/jobs.js',
            './assets/scss/pages/jobs/jobs.scss',
        ],
        vehicle:[
            './assets/js/pages/vehicle.js',
            './assets/scss/pages/vehicle/vehicle.scss',
        ],
        car:[
            './assets/js/pages/car.js',
            './assets/scss/pages/car/car.scss',
        ],
        brand_car:[
            './assets/scss/pages/brand_car/brand_car.scss',
        ],
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // fallback to style-loader in development
                    // process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
};