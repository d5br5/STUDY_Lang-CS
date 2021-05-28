import java.util.Iterator;
import java.util.LinkedList;

public class Node {
	String stationName;
	LinkedList<String> stationNumbers = new LinkedList<>();
	LinkedList<String> lineNumbers = new LinkedList<>();
	
	Iterator<String> numIter;
	Iterator<String> lineIter;
	
	public Node(String stNum, String stName, String lnNum){
		stationName = stName;
		stationNumbers.add(stNum);
		lineNumbers.add(lnNum);
	}
	
	public void printstationNums() {
		numIter = stationNumbers.iterator();
		String curr;
		while(numIter.hasNext()) {
			curr = numIter.next();
			System.out.println(curr);
		}
	}
	
	public void printLineNums() {
		lineIter = lineNumbers.iterator();
		String curr;
		while(lineIter.hasNext()) {
			curr = lineIter.next();
			System.out.println(curr);
		}
	}
	
	public String getStationName() {
		return stationName;
	}
	
	public void addNewLine(String stNum, String lnNum) {
		stationNumbers.add(stNum);
		lineNumbers.add(lnNum);
	}
	
	
	
}
