
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Stack;

public class LineList {
	
	int INF = Integer.MAX_VALUE;
	LinkedList<StationList> stationLines = new LinkedList<>();
	Iterator<StationList> iter;
	
	int[][] adjMat;
	int[][] edgeMat;
	boolean[] visited;
	int[] dist;
	int totalSize;
	Stack<Integer> routeDetailWithKey;
	
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
	
	public int getKeyByStNum(String stnum) {
		iter = stationLines.iterator();
		StationList curr;
		while(iter.hasNext()) {
			curr = iter.next();
			Node currStation = curr.searchByStNum(stnum);
			if(currStation != null) {
//				System.out.println(currStation.getStationName()+" : key "+currStation.getKey());
				return currStation.getKey();
			}
		}
		return -1;
	}
	
	public String getNameByKey(int key) {
		iter = stationLines.iterator();
		StationList curr;
		while(iter.hasNext()) {
			curr = iter.next();
			Node currStation = curr.searchByKey(key);
			if(currStation != null) {
				return currStation.getStationName();
			}
		}
		return "EMPTY";
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
	
	public void crossInfo(String lnName, String stName) {
		iter = stationLines.iterator();
		StationList curr=null;
		while(iter.hasNext()) {
			curr = iter.next();
			if(curr.getName().equals(lnName)) break;
		}
		
		Node station = curr.searchStation(stName);
		station.printAllCross();		
		
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
	
	public void makeAdjMatrix(int size) {
		adjMat = new int[size][size];
		totalSize = size;
		for(int i=0; i<size; i++) {
			for(int j=0; j<size; j++) {
				adjMat[i][j]=-1;
			}
		}
	}
	
	public void addCrossToAdj() {
		iter = stationLines.iterator();
		StationList curr;
		while(iter.hasNext()) {
			curr = iter.next();
			curr.addCrossToAdj(adjMat);
		}
	}
	
	public void makeEdgeMatrix(int size) {
		edgeMat = new int[size][size];
		for(int i=0; i<size; i++) {
			for(int j=0; j<size; j++) {
				edgeMat[i][j]=0;
			}
		}
	}
	
	public int[] distInit(Node start, boolean isCross) {
		dist = new int[totalSize];
		for(int i=0; i<totalSize;i++) {
			dist[i]=INF;
		}
		dist[start.getKey()]=0;
		if(isCross) {
			start.distInitCross(dist);
		}
		return dist;
	}
	
	public void getRoute(Node start, Node end) {
		
		int startKey = start.getKey();
		int endKey = end.getKey();
		boolean isStartCross = start.isCross();
		int[] whoChanged = new int[totalSize];
		makeEdgeMatrix(totalSize);
		dist = distInit(start, isStartCross);
		visited = new boolean[totalSize];
		
		int lastVisited = startKey;
		visited[startKey] = true;
		
		int minKey;
		int minValue;
		
		while(!visited[endKey]) {
			
			minKey = totalSize-1;
			minValue = INF;
			
			for(int i=0; i<totalSize; i++) { //relaxation
				if(adjMat[lastVisited][i]>0 && !visited[i]) {
					if(dist[i]>dist[lastVisited]+adjMat[lastVisited][i]) {
						dist[i] = dist[lastVisited]+adjMat[lastVisited][i];
						whoChanged[i] = lastVisited;
					}
				}
			}
			
			for(int i=0; i<totalSize; i++) {
				if(!visited[i]&&dist[i]<minValue) {
					minValue = dist[i];
					minKey = i;
				}
			}
			
			visited[minKey] = true;
			edgeMat[whoChanged[minKey]][minKey] = 1;
			lastVisited = minKey;
			if(end.hasCrossKey(lastVisited)) break;
			
		}
		
		routeDetailWithKey = new Stack<>();
		
		int DFSKey = lastVisited;
		
		
		while(startKey!=DFSKey) {
			routeDetailWithKey.push(DFSKey);
			for(int i=0; i<totalSize; i++) {
				if(edgeMat[i][DFSKey]==1) {
					DFSKey = i;
					break;
				}
			}
		
			if(start.getKey()==DFSKey||start.hasCrossKey(DFSKey)) {
				routeDetailWithKey.push(DFSKey);		
				break;
			}
		}
//		System.out.println("total time : "+dist[endKey]);
		printRoute(routeDetailWithKey);
		System.out.println(dist[lastVisited]);
	}
	
	public void printRoute(Stack<Integer> keyroute) {
		String route = "";
		String attachment;
		while(!keyroute.empty()) {
			attachment = getNameByKey(keyroute.pop());
			if(!keyroute.isEmpty() && attachment.equals(getNameByKey(keyroute.peek()))) {
				keyroute.pop();
				attachment = "["+attachment+"]";
			}
			route += attachment;
			if(!keyroute.empty()) route += " ";
		}
		
		System.out.println(route);
	}
}
