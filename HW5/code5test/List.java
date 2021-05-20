public class List<T> {
	private Node<T, T> head;
	
		
	public List() {
		head = new Node();
	}
	
	public List(T k, T v) {
		head = new Node(k, v);
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
		Node<T, T> newNode = new Node(x1, x2);
		lastNode.next = newNode;
	}
	
	public void PrintList() {
		String liststr="";
		System.out.println("hi");
		Node<T, T> lastpoint = head;
		if(lastpoint.key!=null) {
			liststr += "("+lastpoint.key.toString()+", "+lastpoint.value.toString()+")";
		}else {
			System.out.println("fuck");
			return ;
		}
		while(lastpoint.next!=null) {
			lastpoint = lastpoint.next;
			liststr += " ("+lastpoint.key.toString()+", "+lastpoint.value.toString()+")";
		}
		System.out.println(liststr);
		System.out.println("bye");
	}
	
}