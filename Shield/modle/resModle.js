/**
 * 成功与失败返回的模块
 * 
 * 例子：new SuccessModel()    //              new ErrorModel()
 * 
 * 写法：利用es6的语法   使用class 继承的语法   extends    
 * 
 */
class BaseModel {
    constructor(data, message) {
        if(typeof data === 'string'){
            this.message = data;
            data = null ;
            message = null;
        }
        if(data){
            this.data = data
        }
        if(message){
            this.message = message
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data, message){
        super(data, message)
        this.errno = 0
    }
}

class ErrorModel extends BaseModel{
    constructor(data, message){
        super(data, message)
        this.errno = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}