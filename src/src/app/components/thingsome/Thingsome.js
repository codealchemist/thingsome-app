export default class Thingsome {
  constructor(params) {
    params = params || {}
    let {ip='192.168.4.1', name, description, type, id} = params

    this.ip = ip;
    this.name = name;
    this.description = description;
    this.type = type;
    this.id = id;
  }

  getHost() {
    return `http://${this.ip}`
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

  setSwitch(state) {
    let host = this.getHost();
    let url = `${host}/set/${state}`;
    console.log('--- set switch url:', url);
    let request = new Request(url);
    return fetch(request);
  }
}
