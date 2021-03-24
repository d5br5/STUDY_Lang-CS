package classtime;

public interface IntegerListInterface{
	public void add(int i, Integer x);
	public void append(Integer x);
	public Integer remove(int i);
	public boolean removeItem(Integer x);
	public Integer get(int i);
	public void set(int i, Integer x);
	public int indexOf(Integer x);
	public int size();
	public boolean isEmpty();
	public void clear();
}

public class IntegerArrayList implements IntegerListInterface{
	private Integer[] item;
	private int numItems;
	private static final int DEFAULT_CAPACITY=64;
	
	public IntegerArrayList() {
		item = new Integer[DEFAULT_CAPACITY];
		numItems=0;
	}
	public IntegerArrayList(int n) {
		item = new Integer[n];
		numItems=0;
	}
	
	public void add(int k, Integer x) {
		if(numItems>=item.length) {
			
		}else {
			for(int i=numItems-1 ; i>=k ; i--) {
				item[i+1]=item[i];
			}
			item[k] = x;
			numItems++;
		}
	}
	
	public void append(Integer x) {
		if(numItems>=item.length) {
			
		}else {
			item[numItems++]=x;
		}
	}
	
	public Integer remove(int k) {
		if(isEmpty()||k<0||k>numItems-1) {
			return null;
		}else {
			Integer tmp = item[k];
			for(int i=k;i<numItems-2;i++) {
				item[i]=item[i+1];
			}
			numItems--;
			return tmp;
		}
	}
	
	public boolean removeItem(Integer x) {
		int k=0;
		while(k<numItems && item[k]!=x) {
			k++;
		}
		if(k==numItems) return false;
		else {
			for(int i=k; i<=numItems-2; i++) {
				item[i]=item[i+1];
			}
			numItems--;
			return true;
		}
	}
	
	public void clear() {
		item = new Integer[item.length];
		numItems = 0;
	}
	@Override
	public Integer get(int i) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void set(int i, Integer x) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public int indexOf(Integer x) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public int size() {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public boolean isEmpty() {
		// TODO Auto-generated method stub
		return false;
	}

	
	
	
	
}