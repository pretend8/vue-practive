/**

 * @author zzx

 * @date 2020-06-27 15:43

 */
const Mock = require('mockjs')

const { params2obj } = require('./utils')

const user = require('./user')
const table = require('./table')

const mocks = [
    ...user,
    ...table
]

// for front mock 

function mockXMR(){
    Mock.XHR.prorotype.proxy_send = Mock.XHR.prorotype.send
    Mock.XHR.prototype.send = function(){
        if(this.custom.xhr){
            this.custom.xhr.widthCreadentials = this.widthCreadentials
            if(this.responseType){
                this.custom.xhr.responseType = this.responseType
            }
        }
        this.proxy_send(...arguments)
    }
}
function XHR2ExpressReqWrap(respond){
    return function(options){
        let result = null
        if(respond instanceof Function){
            const {body,type,url} = options
            result = respond({
                method: type,
                body: JSON.parse(body),
                query: params2obj(url)
            })
        }else{
            result = respond
        }
        return Mock.mock(result)
    }
}

for(const  i of mocks){
    Mock.mock(new RegExp(i,url),i.type||'get',XHR2ExpressReqWrap(i.response))
}

module.exports = {
    mocks,
    mockXMR
}

