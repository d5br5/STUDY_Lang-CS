import java.util.Iterator;
import java.util.NoSuchElementException;

public class MovieDB {
	
	public Node<MyLinkedList<String>> fullList;
	boolean yesGenre = false;
	boolean yesTitle = false;
	boolean midBreak = false;
	
    public MovieDB() {
       
    	fullList = new Node<>();
    	
    }
    
    public Node<String> searchTitlePoint(Node<MyLinkedList<String>> list, String title){
    	
    	String currName = null;
    	String nextName = null;
    	
    	yesTitle = false; 
    	midBreak = false;
    	
    	Node<String> stopPoint = list.getItem().head;
    	Node<String> nextPoint = stopPoint.getNext();
    	
    	while(nextPoint!=null) {
    		midBreak = false;
    		currName = nextPoint.getItem();
    		nextPoint = stopPoint.getNext();
    		
    		if(nextPoint!=null) {
    			nextName = nextPoint.getItem();
    		}else {
    			nextName = "z";
    		}

    		if(title.compareTo(currName)<0) {//new title will be first node
    			yesTitle = false;
    			midBreak = true;
    		}
    		
    		if(title.equals(currName)) { // already title
    			yesTitle = true;
    			break;
    		}else if(title.compareTo(nextName)==0) {
    			yesTitle = true;
    			break;
    		}else if(title.compareTo(nextName)>0) { // new genre will be add middle
    			stopPoint = nextPoint;
    			continue;
    		}else {	// new genre will be last
    			yesTitle = false;
    			midBreak = true;
    			break;
    		}
    	}
    	
    	return stopPoint;
    }
    
    public Node<MyLinkedList<String>> searchGenrePoint(Node<MyLinkedList<String>> list, String genre){
    	
    	String currName = null;
    	String nextName = null;
    	
    	yesGenre = false; 
    	midBreak = false;
    	
    	Node<MyLinkedList<String>> stopPoint = list.getNext();
    	Node<MyLinkedList<String>> nextPoint;
    	
    	Node<String> titlePoint;
    
    	while(stopPoint!=null) {
    		
    		midBreak = false;
    		currName = stopPoint.getItem().getName();
    		nextPoint = stopPoint.getNext();
    		
    		if(nextPoint!=null) {
    			nextName = nextPoint.getItem().getName();
    		}else {
    			nextName = "z";
    		}

    		if(genre.compareTo(currName)<0) {//new genre will be first node
    			yesGenre = false;
    			midBreak = true;
    			stopPoint = fullList;
    		}
    		
    		if(genre.equals(currName)) { // already genre and add
    			yesGenre = true;
    			break;
    		}else if(genre.compareTo(nextName)>=0) { // new genre will be add middle
    			stopPoint = nextPoint;
    			continue;
    		}else {	// new genre will be last
    			yesGenre = false;
    			midBreak = true;
    			break;
    		}
    	}
    	
    	return stopPoint;
    }

    public void insert(MovieDBItem item) {
        // FIXME implement this
        // Insert the given item to the MovieDB.

    	// Printing functionality is provided for the sake of debugging.
        // This code should be removed before submitting your work.
    	
    	Node<MyLinkedList<String>> genrePoint = searchGenrePoint(fullList, item.getGenre());
    	
    	if(yesGenre) { // already genre and add + after title check, insert 
    		Node<String> titlePoint = searchTitlePoint(genrePoint, item.getTitle());
    		if(!yesTitle) {titlePoint.insertNext(item.getTitle());}
    	}else if(!midBreak){ // new genre will be last
    		MyLinkedList<String> newList = new MyLinkedList<>(item.getGenre());
    		newList.add(item.getTitle());
        	fullList.insertLast(newList);
    	}else { // new genre will be add middle
    		MyLinkedList<String> newList = new MyLinkedList<>(item.getGenre());
    		newList.add(item.getTitle());
    		genrePoint.insertNext(newList);
    	}
    	
      
    }

    public void delete(MovieDBItem item) {
    	
    	Node<MyLinkedList<String>> genrePoint = searchGenrePoint(fullList, item.getGenre());
        if(yesGenre) {
        	Node<String> titlePoint = searchTitlePoint(genrePoint, item.getTitle());
        	if(yesTitle) {titlePoint.removeNext();}
        }
        		
    }

    public MyLinkedList<MovieDBItem> search(String term) {
        // FIXME implement this
        // Search the given term from the MovieDB.
        // You should return a linked list of MovieDBItem.
        // The search command is handled at SearchCmd class.
    	
    	// FIXME remove this code and return an appropriate MyLinkedList<MovieDBItem> instance.
    	// This code is supplied for avoiding compilation error.   
        MyLinkedList<MovieDBItem> results = new MyLinkedList<MovieDBItem>();

        return results;
    }
    
    public MyLinkedList<MovieDBItem> items() {
          
        MyLinkedList<MovieDBItem> results = new MyLinkedList<MovieDBItem>();
        
        Node<MyLinkedList<String>> stopPoint = fullList.getNext();
        Node<String> titlePoint;
        String currGenre;
        String currTitle;
        
        stopPoint = fullList.getNext();
        while(stopPoint!=null) {
    		titlePoint = stopPoint.getItem().head;
    		currGenre = stopPoint.getItem().getName();
    		while(titlePoint.getNext() != null) {
    			currTitle = titlePoint.getNext().getItem();
    			results.add(new MovieDBItem(currGenre, currTitle));
    			titlePoint = titlePoint.getNext();
    		}
    		stopPoint = stopPoint.getNext();
    	}
       
    	return results;
    }
}

class Genre extends Node<String> implements Comparable<Genre> {
	public Genre(String name) {
		super(name);
		throw new UnsupportedOperationException("not implemented yet");
	}
	
	@Override
	public int compareTo(Genre o) {
		throw new UnsupportedOperationException("not implemented yet");
	}

	@Override
	public int hashCode() {
		throw new UnsupportedOperationException("not implemented yet");
	}

	@Override
	public boolean equals(Object obj) {
		throw new UnsupportedOperationException("not implemented yet");
	}
}

class MovieList implements ListInterface<String> {	
	public MovieList() {
	}

	@Override
	public Iterator<String> iterator() {
		throw new UnsupportedOperationException("not implemented yet");
	}

	@Override
	public boolean isEmpty() {
		throw new UnsupportedOperationException("not implemented yet");
	}

	@Override
	public int size() {
		throw new UnsupportedOperationException("not implemented yet");
	}

	@Override
	public void add(String item) {
		throw new UnsupportedOperationException("not implemented yet");
	}

	@Override
	public String first() {
		throw new UnsupportedOperationException("not implemented yet");
	}

	@Override
	public void removeAll() {
		throw new UnsupportedOperationException("not implemented yet");
	}
}