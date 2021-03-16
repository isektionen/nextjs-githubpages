let basePath = ''
if (process.env.BASE_PATH != undefined) {
    basePath = process.env.BASE_PATH
}

module.exports = {
    basePath: basePath,
}
