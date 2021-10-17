const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

module.exports = class BinarySearchTree {
  constructor (){
    this._root = null;
  }

  root() {
    return this._root ? this._root : null;
  }

  add(data) {
    this._root = addWithin(this._root, data);

    function addWithin(node, value) {
      if(!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this._root, data);

    function searchWithin(node, value) {
      if (!node && node !== 0) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return value < node.data ? 
        searchWithin(node.left, value) :
        searchWithin(node.right, value);
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}