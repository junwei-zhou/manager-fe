/**
 * 环境配置封装 
 * 
 */

const env = import.meta.MODE||'prod'
const EnvConfig = {
    dev:{
        baseApi:"/",
        mockApi:"https://www.fastmock.site/mock/9514585b69cc1173f0265da5ea2a7f1c/api"
    },
    test:{
        baseApi:"",
        mockApi:"https://www.fastmock.site/mock/9514585b69cc1173f0265da5ea2a7f1c/api",
    },
    prod:{baseApi:"",
    mockApi:"https://www.fastmock.site/mock/9514585b69cc1173f0265da5ea2a7f1c/api",
}
}

export default{
    env:"dev",
    mock:true,
    ...EnvConfig[env]
}