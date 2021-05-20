
public class AVLTree<T> {
	//src : lecture Note
	
	public AVLNode<T> root;
	static final AVLNode NIL = new AVLNode(null, null, null, 0);
	private final int LL=1, LR=2, RR=3, RL=4, NO_NEED =0, ILLEGAL =-1;
	
	public AVLTree() {
		root = NIL;
	}
	
	public void PrintSlot() {
		String res =  getAll(root, "");
		System.out.println(res.substring(0, res.length()-1));
	}
	
	public String getAll(AVLNode<T> node, String res) {
		if(node != NIL) {
			res += node.item.toString()+" ";
			res = getAll(node.left, res);
			res = getAll(node.right, res);
		}
		return res;
	}
	
	public AVLNode<T> search(Comparable x) {
		return searchItem(root, x);
	}
	
	private AVLNode<T> searchItem(AVLNode<T> tNode, Comparable x) {
		if(tNode == NIL) return NIL;
		else if(x.compareTo(tNode.item)==0) return tNode;
		else if(x.compareTo(tNode.item)<0) return searchItem(tNode.left, x);
		else return searchItem(tNode.right, x);
	}
	
	public void insert(int k, int v, Comparable<T> x) {
		root = insertItem(root, k, v, x);
	}
	
	private AVLNode<T> insertItem(AVLNode<T> tNode, int k, int v, Comparable x){
		int type;
		if(tNode==NIL) tNode = new AVLNode<T>(k, v, x);
		else if(x.compareTo(tNode.item)==0) {
			tNode.list.insert(k, v);
		}else if(x.compareTo(tNode.item)<0) {
			tNode.left = insertItem(tNode.left, k, v, x);
			tNode.height = 1+ Math.max(tNode.right.height, tNode.left.height);
			type = needBalance(tNode);
			if(type != NO_NEED) tNode = balanceAVL(tNode, type);
		}else {
			tNode.right = insertItem(tNode.right, k, v, x);
			tNode.height = 1+ Math.max(tNode.right.height, tNode.left.height);
			type = needBalance(tNode);
			if(type != NO_NEED) tNode = balanceAVL(tNode, type);
		}
		
		return tNode;
	}
	
	
	private class returnPair<T>{
		Comparable item;
		AVLNode<T> node;
		private returnPair(Comparable it, AVLNode<T> nd) {
			item = it;
			node = nd;
		}
	}
	
	
	private int needBalance(AVLNode<T> t) {
		int type = ILLEGAL;
		if(t.left.height+2<=t.right.height) {
			if(t.right.left.height<=t.right.right.height) type =RR;
			else type = RL;
		}else if(t.left.height>=t.right.height+2) {
			if(t.left.left.height>=t.left.right.height) type=LL;
			else type = LR;
		}else {
			type=NO_NEED;
		}
		return type;
	}
	
	private AVLNode<T> balanceAVL(AVLNode<T> tNode, int type){
		AVLNode<T> returnNode = NIL;
		switch(type) {
		case LL:
			returnNode = rightRotate(tNode);
			break;
		case LR:
			tNode.left = leftRotate(tNode.left);
			returnNode = rightRotate(tNode);
			break;
		case RR:
			returnNode = leftRotate(tNode);
			break;
		case RL:
			tNode.right = rightRotate(tNode.right);
			returnNode = leftRotate(tNode);
			break;
		default:
			System.out.println("Impossible type. should be LL LR RR RL");
			break;
		}
		return returnNode;
	}
	
	private AVLNode<T> leftRotate(AVLNode<T> t){
		AVLNode<T> RChild = t.right;
		if(RChild ==NIL) System.out.println("t's RChild shouldn't be NIL");
		AVLNode<T> RLChild = RChild.left;
		RChild.left = t;
		t.right = RLChild;
		t.height = 1+Math.max(t.left.height, t.right.height);
		RChild.height = 1+Math.max(RChild.left.height, RChild.right.height);
		return RChild;
	}
	
	private AVLNode<T> rightRotate(AVLNode<T> t){
		AVLNode<T> LChild = t.left;
		if(LChild ==NIL) System.out.println("t's LChild shouldn't be NIL");
		AVLNode<T> LRChild = LChild.right;
		LChild.right = t;
		t.left = LRChild;
		t.height = 1+Math.max(t.left.height, t.right.height);
		LChild.height = 1+Math.max(LChild.left.height, LChild.right.height);
		return LChild;
	}
	
}

