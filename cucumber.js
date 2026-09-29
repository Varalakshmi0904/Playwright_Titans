module.exports = {
    default: {
      //  paths: ['features/**/*.feature'],
        import: [
            //'step-definitions/**/*.js',
            'steps/**/*.js',
            'support/**/*.js'
        ],
        format: ['progress']
    }
};