class Thingsome {
  constructor(params) {
    params = params || {}
    let {isAccessPoint=true, defaultAccessPointHost='http://192.168.4.1', stationHost=''} = params

    this.defaultAccessPointHost = defaultAccessPointHost
    this.isAccessPoint = isAccessPoint
    this.stationHost = stationHost
  }

  getHost() {
    if (this.isAccessPoint) return this.defaultAccessPointHost
    return this.stationHost
  }

  getSetupUrl({ssid, pass}) {
    let host = this.getHost()
    return `${host}/setup?ssid=${ssid}&pass=${pass}`
  }

  getInfoUrl() {
    let host = this.getHost()
    return `${host}/device-info`
  }

  setup(params) {
    // console.log('thingsome.setup, params:', params)
    let url = this.getSetupUrl(params)
    let request = new Request(url)
    return fetch(request)
  }

  getInfo() {
    console.log('thingsome.getInfo')
    let url = this.getInfoUrl()
    let request = new Request(url)
    return fetch(request)
  }
}

export default Thingsome
