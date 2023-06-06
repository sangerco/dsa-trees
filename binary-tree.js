/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class QueueItem {
  constructor(node, depth) {
    this.node = node;
    this.depth = depth;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(this.root === null) return 0;

    const minDepthRecursion = (root) => {
      if(root.left === null && root.left === null) return 1;

      if(root.left === null) return minDepthRecursion(root.right) + 1;

      if(root.right === null) return minDepthRecursion(root.left) + 1;

      return Math.min(minDepthRecursion(root.left), minDepthRecursion(root.right)) + 1;
    }

    return minDepthRecursion(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(this.root === null) return 0;

    const maxDepthRecursion = (root) => {
      if(root.left === null && root.right === null) return 1;

      if(root.left === null) return maxDepthRecursion(root.right) + 1;

      if(root.right === null) return maxDepthRecursion(root.left) + 1;

      return Math.max(maxDepthRecursion(root.left), maxDepthRecursion(root.right)) + 1
    }

    return maxDepthRecursion(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let max = 0;

    const maxSumRecursion = (node) => {
      if(node === null) return 0;
      let left = maxSumRecursion(node.left);
      let right = maxSumRecursion(node.right);
      let sumAll = left + right + node.val;
      let leftNodeSum = left + node.val;
      let rightNodeSum = right + node.val;

      max = Math.max(max, node.val, sumAll, leftNodeSum, rightNodeSum);
      return Math.max(leftNodeSum, rightNodeSum, node.val);

    };

    maxSumRecursion(this.root);

    return max;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(this.root === null) return null;

    let toCompareQueue = [this.root];
    let nextLargest = null;

    while(toCompareQueue.length) {
      let current = toCompareQueue.shift();

      if((current.val > lowerBound) && (current.val < nextLargest || nextLargest === null)) {
        nextLargest = current.val
      }

      if(current.left) toCompareQueue.push(current.left);
      if(current.right) toCompareQueue.push(current.right);
    }

    return nextLargest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
