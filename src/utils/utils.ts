export function fixFileNames(item) {
  for (const key in item) {
    const newKey = key.replace('.', '-');
    delete Object.assign(item, { [newKey]: item[key] })[key];
  }
}

export function hasClass(item, className) {
  const elem = document.querySelectorAll(`.${className}`);
  for (const el of elem) {
    if (item.composedPath().indexOf(el) > -1) return true;
  }
}

(function (e, d, w) {
  if (!e.composedPath) {
    e.composedPath = function () {
      if (this.path) {
        return this.path;
      }
      let { target } = this;

      this.path = [];
      while (target.parentNode !== null) {
        this.path.push(target);
        target = target.parentNode;
      }
      this.path.push(d, w);
      return this.path;
    };
  }
}(Event.prototype, document, window));
