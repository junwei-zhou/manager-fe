/**
 * 环境配置封装 
 * 
 */

const env = import.meta.MODE||'prod'
console.log(env)
const EnvConfig = {
    dev:{
        baseApi:"/api",
        mockApi:"https://www.fastmock.site/mock/9514585b69cc1173f0265da5ea2a7f1c/api"
    },
    test:{
        baseApi:"www.fastmock.site",
        mockApi:"https://www.fastmock.site/mock/9514585b69cc1173f0265da5ea2a7f1c/api",
    },
    prod:{baseApi:"/api",
        mockApi:"https://www.fastmock.site/mock/9514585b69cc1173f0265da5ea2a7f1c/api",
    }
}

export default{
    env:"dev",
    mock:false,
    namespace:'manager',
    ...EnvConfig[env]
}