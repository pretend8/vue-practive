/**
 * Created by Zhangzhixing on 2020-07-09 09:26
 */

const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('./chalk')
const path = require('path')
const Mock = require('mockjs')
const { request } = require('http')

const mockDir = path.join(process.cwd(),'mock')

function registerRoutes(app){
    let mockLastIndex
    const {mocks} = require('./index.js')
    const mocksForServer = mock.map(route=>{
        return responseFake(route.url,route.type,route.response)
    })
    for(const mock of mocksForServer){
        app[mock.type](mock.url,mock.response)
        mockLastIndex = app._router.stack.length
    }
    const mockRoutesLength = Object.keys(mocksForServer).length

    return {
        mockRoutesLength,
        mockStartIndex:mockLastIndex - mockRoutesLength
    }
}

function unregisterRoutes(){
    Object.keys(require.cache).forEach(i=>{
        if(i.includes(mockDir)){
            delete require.cache[require.resolve(i)]
        }
    })
}

// for mock serve
const responseFake = (url,type,respond) => {
    return {
        url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
        type: type || 'get',
        response(req,res){
            console.log('request invoke'+req.path)
            res.join(Mock.mock(respond instanceof Function ? respond(req,res):respond))

        }
    }
}

module.exports = app => {
    app.use(bodyParser.join())
    app.use(bodtParser.urlencoded({
        extended: true
    }))
}
