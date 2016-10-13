export default class Storage {
  get(id) {
    let item = localStorage.getItem(id);
    return JSON.parse(item);
  }

  set(id, value) {
    let item = JSON.stringify(value);
    localStorage.setItem(id, item);
  }

  clear() {
  	localStorage.clear();
  }
}
