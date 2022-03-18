public class List<T extends Comparable<T>> {
	private Node<T, T> head;
	private int numItems;
		
	public List() {
		head = new Node<T, T>();
		numItems = 0;
	}
	
	public List(T k, T v) {
		head = new Node<T, T>(k, v);
		numItems = 1;
	}
	
	private class Node<K, V>{
		K key;
		V value;
		Node<K,V> next;
		
		public Node(K nkey, V nvalue) {
			key = nkey;
			value = nvalue;
			next = null;
		}		
		
		public Node() {
			key = null;
			value = null;
			next = null;
		}
	}
	
	public void insert(T x1, T x2) {
		Node<T, T> lastNode = head;
		while(lastNode.next!=null) {
			lastNode = lastNode.next;
		}
		Node<T, T> newNode = new Node<T, T>(x1, x2);
		lastNode.next = newNode;
		numItems++;
	}
	
	public void PrintList() {
		String liststr="";
		String[] elems = getList();
		liststr += elems[0];
		for(int i=1; i<numItems; i++) {
			liststr+=" "+elems[i];
		}
		System.out.println(liststr);
	}
	
	public String[] getList() {
		String[] sets = new String[numItems];
		Node<T, T> lastpoint = head;
		
		for(int i=0; i<numItems; i++) {
			sets[i] = "("+lastpoint.key.toString()+", "+lastpoint.value.toString()+")";
			if(lastpoint.next!=null) lastpoint = lastpoint.next;
			else break;
		}
		return sets;
	}
	
	public boolean vaildpair(T k, T v) {
		Node<T, T> lastpoint = head;
		boolean ispair = false;
		
		while(lastpoint.key!=null) {
			if(lastpoint.key.equals(k) && lastpoint.value.equals(v)) {
				ispair = true;
				break;
			}
			if(lastpoint.next!=null) {
				lastpoint = lastpoint.next;
			}else {
				break;
			}
		}
		
		return ispair;
 	}
	
	public int[][] getpairs(){
		int[][] pairs = new int[numItems][2];
		Node<T, T> lastpoint = head;
		int point = 0;
		while(lastpoint.key!=null) {
			if(lastpoint.key instanceof Integer) {
				pairs[point][0] = Integer.parseInt(lastpoint.key.toString());
				pairs[point][1] = Integer.parseInt(lastpoint.value.toString());
			}
			if(lastpoint.next!=null) {
				lastpoint = lastpoint.next;
				point++;
			}else {
				break;
			}
			
		}
		
		return pairs;
	}
	
	public int getLength() {
		return numItems;
	}
	
}