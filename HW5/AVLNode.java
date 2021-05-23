public class AVLNode<T extends Comparable<T>> { // src : lecture Note
	public T item;
	public List<Integer> list;
	public AVLNode<T> left, right;
	public int height;
	
	@SuppressWarnings("unchecked")
	public AVLNode(T x) {
		item = x;
		left= right= AVLTree.NIL;
		list = new List<Integer>();
		height=1;
	}
	
	@SuppressWarnings("unchecked")
	public AVLNode(int k, int v, T x) {
		item = x;
		left= right= AVLTree.NIL;
		list = new List<Integer>(k, v);
		height=1;
	}
	
	public AVLNode(T x, AVLNode<T> leftChild, AVLNode<T> rightChild, int h) {
		item = x;
		left = leftChild;
		right = rightChild;
		list = new List<Integer>();
		height = h;
	}
	
	
}