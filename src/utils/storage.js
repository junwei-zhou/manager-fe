/**
 * localStorage的封装
 * 后期需要分模块封装
*/
import config from "../config"
export default{
    setItem(key,val){
        let storage = this.getStorage()
        // 由于key是变量不是个字符串，故而不可以使用storage.key=val的方式
        storage[key] = val
        window.localStorage.setItem(config.namespace,JSON.stringify(storage));
    },
    getItem(key){
        return this.getStorage()[key]
    },
    getStorage(){
        return  JSON.parse(window.localStorage.getItem(config.namespace)||"{}");
       },
    clearItem(key){
        let storage = this.getStorage()
        delete storage[key]
        window.localStorage.setItem(config.namespace,JSON.stringify(storage));
    },
    clearAll(){
        window.localStorage.clear()
    },
}