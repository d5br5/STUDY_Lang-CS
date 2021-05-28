import java.util.Iterator;
import java.util.LinkedList;

public class LineList {
	
	LinkedList<StationList> stationLines = new LinkedList<>();
	Iterator<StationList> iter;
	
	public StationList addLine(String lnName) {
		StationList newLine = new StationList(lnName);
		stationLines.add(newLine);
		return newLine;
	}
	
	public StationList searchLine(String lnName) {
		iter = stationLines.iterator();
		StationList curr;
		while(iter.hasNext()) {
			curr = iter.next();
			if(curr.getName().equals(lnName)) {
				return curr;
			}
		}	
		return null;
	}
	
	public Node searchStation(String stName) {
		iter = stationLines.iterator();
		StationList curr;
		while(iter.hasNext()) {
			curr = iter.next();
			Node currStation = curr.searchStation(stName);
			if(currStation !=null) return currStation;
		}
		return null;
	}
	
	public void printAllLines() {
		iter = stationLines.iterator();
		StationList curr;
		while(iter.hasNext()) {
			curr=iter.next();
			System.out.println(curr.getName());
		}
	}
	
	public void printAllStations(String lnName) {
		StationList stations = searchLine(lnName);
		stations.printAllStations();
	}
}
