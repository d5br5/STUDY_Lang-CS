public class AVLNode<T> { // src : lecture Note
	public Comparable<T> item;
	public List<Integer> list;
	public AVLNode<T> left, right;
	public int height;
	
	public AVLNode(Comparable<T> x) {
		item = x;
		left= right= AVLTree.NIL;
		list = new List<Integer>();
		height=1;
	}
	
	public AVLNode(int k, int v, Comparable<T> x) {
		item = x;
		left= right= AVLTree.NIL;
		list = new List<Integer>(k, v);
		height=1;
	}
	
	public AVLNode(Comparable<T> x, AVLNode<T> leftChild, AVLNode<T> rightChild, int h) {
		item = x;
		left = leftChild;
		right = rightChild;
		list = new List<Integer>();
		height = h;
	}
}