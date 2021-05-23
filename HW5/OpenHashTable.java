import java.nio.charset.StandardCharsets;

public class OpenHashTable<T extends Comparable<T>> { // src : lecture note
	public AVLTree<T>[] table;
	int numItems;
	
	static final Integer NOT_FOUND = -1;
	
	
	@SuppressWarnings("unchecked")
	public OpenHashTable(int n) {
		table = new AVLTree[n];
		numItems=0;
	}
	
	public int hash(T input) {
		
		String str = input.toString();
		int length = str.length();
		int num = 0;
		
		// src : https://stackoverflow.com/questions/88838/how-to-convert-strings-to-and-from-utf8-byte-arrays-in-java
		byte[] bytes = str.getBytes(StandardCharsets.US_ASCII);
		for(int i=0; i<length; i++) {
			num += bytes[i];
		}
		
		return num % table.length;
	}
	
	public Integer search(T x) {
		int slot = hash(x);
		if(table[slot]==null) return NOT_FOUND;
		else return slot;
	}
	
	public void insert(int k, int v, T x) {
		int slot = hash((T)x);
		
		if(table[slot]==null) {
			AVLTree<T> newTree = new AVLTree<>();
			newTree.insert(k, v, x);
			table[slot] = newTree;
			numItems++;
		}else {
			table[slot].insert(k, v, x);
			numItems++;
		}
			
	} 
	
}