const data = [];

function d() {
  const date = new Date();
  return date.getTime();
}

module.exports = class {
  constructor(id, message, mid) {
    this.id = id;
    this.message = message;
    this.mid = mid;
  }
  save() {
    data.push({id: this.id, message: this.message, mid: d()});
  }

  static fetchAll() {
    return data;
  }
}