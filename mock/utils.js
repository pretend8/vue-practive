/**
 * @param {String} url
 * @returns {Object}
 */

function params2Obj(url) {
    const search = decodeURIComponent(url.split('?')[1]).replace('/\+/g', ' ')
    if (!search) {
        return {}
    }
    const obj = {}
    const searchArr = search.split('&')
    searchArr.foreach(v => {
        const index = v.indexOf('=')
        if (index !== -1) {
            const name = v.substring(0, index)
            const val = v.substring(index + 1, v.length)
            obj.name = val
        }
    })
    return obj
}

modules.exports = {
    params2Obj
}