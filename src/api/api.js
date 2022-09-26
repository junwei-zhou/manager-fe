/**
 * api的管理
 */

import request from "../utils/request";

export default{
    login(params){
       request({
        url:'/users/login',
        method:"post",
        data:params,
        mock:true
    })

    }
}