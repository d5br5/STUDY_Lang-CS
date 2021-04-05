public class Node<T> {
    private T item;
    private Node<T> next;
    private String name;
    
    public Node() {
    	this.item=null;
    	this.next=null;
    	this.name=null;
    }

    public Node(T obj) {
    	this.name = null;
        this.item = obj;
        this.next = null;
    }
    
    public Node(T obj, Node<T> next) {
    	this.name = null;
    	this.item = obj;
    	this.next = next;
    }
    
    public void setName(String nodeName) {
    	this.name=nodeName;
    }
    
    public String getName() {
    	return name;
    }
    
    public final T getItem() {
    	return item;
    }
    
    public final void setItem(T item) {
    	this.item = item;
    }
    
    public final void setNext(Node<T> next) {
    	this.next = next;
    }
    
    public Node<T> getNext() {
    	return this.next;
    }
    
    public final void insertNext(T obj) {
    	Node<T> tmp = new Node(obj);
    	tmp.next = this.next;
    	this.next = tmp;
    }
    
    
    public void insertLast(T obj) {
    	Node<T> last = this;
    	while(last.next!=null) {
    		last = last.next;
    	}
    	last.insertNext(obj);
    }
    
    public final void removeNext() {
    	if(this.next!=null) {
        	this.next = this.next.next;
    	}


    }
}