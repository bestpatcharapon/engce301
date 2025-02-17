class Helper {
    //This is necessary for determining if it is a build or a dev app
    static isDev() {
        return require.main?.filename.indexOf('app.asar') === -1;
    }
}

module.exports = Helper;
