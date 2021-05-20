import java.nio.charset.StandardCharsets;

public class OpenHashTable { // src : lecture note
	private int tableLength = 100;
	private AVLTree[] table;
	int numItems;
	
	static final Integer NOT_FOUND = -1;
	

	
	public OpenHashTable() {
		table = new AVLTree[tableLength];
		numItems=0;
	}
	
	public int hash(String input) {
		
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
	
	public Integer search(String x) {
		int slot = hash(x);
		if(table[slot]==null) return NOT_FOUND;
		else return slot;
	}
	
	public void insert(String x) {
		int slot = hash(x);
		
		if(table[slot]==null) {
			AVLTree newTree = new AVLTree();
			newTree.insert(x);
			table[slot] = newTree;
			numItems++;
		}else {
			table[slot].insert(x);
			numItems++;
		}
			
	} 
	
}



