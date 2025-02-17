class Helper {
    // This is necessary for determining if it is a build or a dev app
    static isDev() {
        const filename = (process.mainModule && process.mainModule.filename) || (require.main && require.main.filename);
        return filename.indexOf('app.asar') === -1;
    }
}

module.exports = Helper;
