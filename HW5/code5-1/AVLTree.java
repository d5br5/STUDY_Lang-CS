
public class AVLTree {
	public AVLNode root;
	static final AVLNode NIL = new AVLNode(null,null,null,0);
	
	private final int LL=1, LR=2, RR=3, RL=4, NO_NEED =0, ILLEGAL =-1;
	
	public AVLTree() {
		root = NIL;
	}
	
	public AVLNode search(String x) {
		return searchItem(root, x);
	}
	
	private AVLNode searchItem(AVLNode tNode, String x) {
		if(tNode == NIL) return NIL;
		else if(x.compareTo(tNode.item)==0) return tNode;
		else if(x.compareTo(tNode.item)<0) return searchItem(tNode.left, x);
		else return searchItem(tNode.right, x);
	}
	
	public void insert(String x) {
		root = insertItem(root, x);
	}
	
	private AVLNode insertItem(AVLNode tNode, String x){
		int type;
		if(tNode==NIL) tNode = new AVLNode(x);
		else if(x.compareTo(tNode.item)<0) {
			tNode.left = insertItem(tNode.left, x);
			tNode.height = 1+ Math.max(tNode.right.height, tNode.left.height);
			type = needBalance(tNode);
			if(type != NO_NEED) tNode = balanceAVL(tNode, type);
		}else {
			tNode.right = insertItem(tNode.right, x);
			tNode.height = 1+ Math.max(tNode.right.height, tNode.left.height);
			type = needBalance(tNode);
			if(type != NO_NEED) tNode = balanceAVL(tNode, type);
		}
		
		return tNode;
	}
	
	
	private class returnPair{
		String item;
		AVLNode node;
		private returnPair(String it, AVLNode nd) {
			item = it;
			node = nd;
		}
	}
		
	private int needBalance(AVLNode t) {
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
	
	private AVLNode balanceAVL(AVLNode tNode, int type){
		AVLNode returnNode = NIL;
		switch(type) {
		case LL:
			returnNode = rightRotate(tNode);
			break;
		case LR:
			tNode.left = leftRotate(tNode);
			returnNode = rightRotate(tNode);
			break;
		case RR:
			returnNode = leftRotate(tNode);
			break;
		case RL:
			tNode.right = rightRotate(tNode);
			returnNode = leftRotate(tNode);
			break;
		default:
			System.out.println("Impossible type. should be LL LR RR Rl");
			break;
		}
		return returnNode;
	}
	
	private AVLNode leftRotate(AVLNode t){
		AVLNode RChild = t.right;
		if(RChild ==NIL) System.out.println("t's RChild shouldn't be NIL");
		AVLNode RLChild = RChild.left;
		RChild.left = t;
		t.right = RLChild;
		t.height = 1+Math.max(t.left.height, t.right.height);
		RChild.height = 1+Math.max(RChild.left.height, RChild.right.height);
		return RChild;
	}
	
	private AVLNode rightRotate(AVLNode t){
		AVLNode LChild = t.left;
		if(LChild ==NIL) System.out.println("t's LChild shouldn't be NIL");
		AVLNode LRChild = LChild.left;
		LChild.left = t;
		t.right = LRChild;
		t.height = 1+Math.max(t.left.height, t.right.height);
		LChild.height = 1+Math.max(LChild.left.height, LChild.right.height);
		return LChild;
	}
	
}

