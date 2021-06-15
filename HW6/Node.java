import java.util.Iterator;
import java.util.LinkedList;

public class Node {
	String stationName;
	String stationNumber;
	String lineNumber;
	int key;
	LinkedList<Node> crossStations;
	boolean cross;
	
	Iterator<Node> crossIter;
	
	public Node(String stNum, String stName, String lnNum, int keyNm){
		cross = false;
		stationName = stName;
		stationNumber = stNum;
		key = keyNm;
		lineNumber = lnNum;
		crossStations = new LinkedList<>();
	}
		
	public String getStationName() {
		return stationName;
	}

	public String getStationNumber() {
		return stationNumber;
	}
	
	public String getLineNumber() {
		return lineNumber;
	}
	
	public int getKey() {
		return key;
	}
	
	public boolean isCross() {
		return cross;
	}
	
	public boolean hasCrossKey(int crossKey) {
		crossIter = crossStations.iterator();
		Node curr;
		
		while(crossIter.hasNext()) {
			curr = crossIter.next();
			if(curr.getKey()==crossKey) {
				return true;
			}
		}
		
		return false;
	}
	
	
	public void printAllCross() {
		crossIter = crossStations.iterator();
		Node curr;
		System.out.println(lineNumber+" "+stationName+" & key : "+key);
		
		while(crossIter.hasNext()) {
			curr = crossIter.next();
			System.out.println(curr.lineNumber+" "+curr.stationName+" & key : "+curr.key);
		}
	}
	
	public void makeThisCross() {
		if(!cross) cross = true;
	}
	
	public void addPastToNew(Node pastLine) {
		crossStations.add(pastLine);
		
		if(pastLine.cross) {
			crossIter = pastLine.crossStations.iterator();
			Node curr;
			
			while(crossIter.hasNext()) {
				curr = crossIter.next();
				crossStations.add(curr);
			}
		}
	}
	
	public void addNewToPast(Node newLine) {
		if(cross) {
			crossIter = crossStations.iterator();
			Node curr;
			
			while(crossIter.hasNext()) {
				curr = crossIter.next();
				curr.crossStations.add(newLine);
			}	
		}
		crossStations.add(newLine);
	}
	
	public void addAllCrossToAdj(int fromindex, int[][] mat) {
		crossIter = crossStations.iterator();
		Node curr;
		
		while(crossIter.hasNext()) {
			curr = crossIter.next();
			mat[fromindex][curr.getKey()]=5;
		}
	}
	
	public void distInitCross(int[] mat) {
		crossIter = crossStations.iterator();
		Node curr;
		
		while(crossIter.hasNext()) {
			curr = crossIter.next();
			mat[curr.getKey()]=0;
		}
	}
	
	
	
	
	
}
