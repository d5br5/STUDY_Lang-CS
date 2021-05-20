public class AVLNode { // src : lecture Note
	public String item;
	public List<Integer> list;
	public AVLNode left, right;
	public int height;
	
	public AVLNode(String x) {
		item = x;
		left= right= AVLTree.NIL;
		list = new List<Integer>();
		height=1;
	}
	
	public AVLNode(String x, AVLNode leftChild, AVLNode rightChild, int h) {
		item = x;
		left = leftChild;
		right = rightChild;
		list = new List<Integer>();
		height = h;
	}
}