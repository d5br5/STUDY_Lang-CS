import java.util.Iterator;
import java.util.LinkedList;

public class StationList {
	private int stationLength;
	private String lineName;
	LinkedList<Node> stations;
	Iterator<Node> iter;
	
	public StationList(String linename) {
		lineName = linename;
		stationLength = 0;
		stations = new LinkedList<>();
	}
	
	public void addStation(Node station) {
		stations.add(station);
		stationLength ++;
	}
	
	public String getName() {
		return lineName;
	}
	
	public int getLength() {
		return stationLength;
	}
	
	public Node searchByStNum(String stNum) {
		iter = stations.iterator();
		Node curr;
		while(iter.hasNext()) {
			curr=iter.next();
			if(curr.getStationNumber().equals(stNum)) {
				return curr;
			}
		}
		return null;
	}
	
	public Node searchByKey(int key) {
		iter = stations.iterator();
		Node curr;
		while(iter.hasNext()) {
			curr = iter.next();
			if(curr.getKey() == key) {
				return curr;
			}
		}
		return null;
	}
	
	public Node searchStation(String stName) {
		iter = stations.iterator();
		Node curr;
		while(iter.hasNext()) {
			curr = iter.next();
			if(curr.getStationName().equals(stName)) {
				return curr;
			}
		}	
		return null;
	}
	
	public void printAllStations() {
		iter = stations.iterator();
		Node curr;
		while(iter.hasNext()) {
			curr=iter.next();
			System.out.println(curr.getStationName());
		}
	}
	
	public void addCrossToAdj(int[][] mat) {
		iter = stations.iterator();
		Node curr;
		while(iter.hasNext()) {
			curr = iter.next();
			if(curr.isCross()) {
				curr.addAllCrossToAdj( curr.getKey(), mat);
			}
		}
	}
}
