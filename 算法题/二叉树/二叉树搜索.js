


const searchBST = function (root, val) {
  if (root === null) {
    return root;
  }

  if (root.val = val) {
    return root;
  }

  return searchBST(root.val > val ? root.left : root.right, val);

}