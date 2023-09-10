class EngineUtil {
    private static _isntance: EngineUtil

    public static _getInstance(): EngineUtil {
        if (!EngineUtil._isntance) EngineUtil._isntance = new EngineUtil()
        return EngineUtil._isntance
    }
    public localStorageGetItem(key: string, defaultValue: string) {
        var value = cc.sys.localStorage.getItem(key)
        if (!value || value == "" || value == undefined || value == "nan") {
            return defaultValue
        }
        return value
    }
    public localStorageSetItem(key: string, value: string) {
        cc.sys.localStorage.setItem(key, value)
    }


    //本地存储
    setLocalData(name: string, value: string) {
        cc.sys.localStorage.setItem(name, value)
    }
    //获取本地存储
    getLocalData(name: string): string {
        return cc.sys.localStorage.getItem(name) || ''
    }
}
