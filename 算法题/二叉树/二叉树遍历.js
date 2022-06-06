


// 深度遍历
// 前序
var preorderTraversal = function (root) {
  const res = [];
  // 递归函数
  function _preorder(node) {
    if (!node) return;
    res.push(node.val);
    _preorder(node.left);
    _preorder(node.right);
  }
  _preorder(root);
  return res;
};


// 中序
var inorderTraversal = function (root) {
  const res = [];
  // 递归函数
  function _inorder(node) {
    if (!node) return;
    _inorder(node.left);
    res.push(node.val);
    _inorder(node.right);
  }
  _inorder(root);
  return res;
};


// 后续
var postorderTraversal = function (root) {
  const res = [];
  // 递归函数
  function _postorder(node) {
    if (!node) return;
    _postorder(node.left);
    _postorder(node.right);
    res.push(node.val);
  }
  _postorder(root);
  return res;
};


// 层序
// 时间和空间复杂度都是 O(n)
var levelOrder = function (root) {
  const res = [];
  function _levelOrder(node, level) {
    if (!node) return null;
    // 当前层数组初始化
    res[level] = res[level] || [];
    res[level].push(node.val);
    // 下一层 +1
    _levelOrder(node.left, level + 1);
    _levelOrder(node.right, level + 1);
  }
  _levelOrder(root, 0);

  return res;
};


var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  function getLevel(node, level) {
    if (!node) return null;
    res[level] = res[level] || [];
    res[level].push(node.val);
    getLevel(node.left, level + 1);
    getLevel(node.right, level + 1);
  }
  getLevel(root, 0);
  return res;
};