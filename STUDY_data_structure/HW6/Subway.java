import java.io.*;

public class Subway {
	
	// java Subway data <- make it 
	// src : https://keichee.tistory.com/275
	
	public static void main(String[] args) {
		
				
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String datalink = args[0];
		LineList submap = buildMap(datalink);
		
		while(true) {
			try {
				String input = br.readLine();
				if (input.compareTo("QUIT") == 0)
					break;
				
				routeSearch(submap, input);
			}
			catch(IOException e) {
				System.out.println("Wrong Input. Error : " + e.toString());
			}
		}
		
//		String routeSearchInput = "회현 서대문";
//		routeSearch(submap, routeSearchInput);
		
			
//		System.out.println("==============crossinfo============");	
//		submap.crossInfo("AREX", "김포공항");
//		
//		System.out.println("==================================");
//		System.out.println(submap.adjMat[703][702]);
//		System.out.println(submap.getKeyByStNum("Y123"));
//		System.out.println(submap.edgeMat[0][5]);
		
	}
	
	
	private static LineList buildMap(String dataLink) {
		
		LineList submap = new LineList();
		
		File file = new File(dataLink);
		BufferedReader BR = null;
		
		int totalSubSize = 0;
		
		String READ_STATUS = "info";
		String line;	
		
		try {
			// file read src : https://jeong-pro.tistory.com/69
			BR = new BufferedReader(new FileReader(file));
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		}
		
		try {
			while((line= BR.readLine()) != null && READ_STATUS.equals("info")) {
				if(line.equals("")) {
					READ_STATUS = "time";
					break;
				}
				makeStation(submap, line, totalSubSize++);
			}
			
			submap.makeAdjMatrix(totalSubSize);
			
			// time list
			while((line= BR.readLine()) != null && READ_STATUS.equals("time")) {
				FillAdj(submap, line);
			}
			
			submap.addCrossToAdj();
			
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return submap;
	}
	
	private static void makeStation(LineList submap, String station, int key) {
		
		String[] stationInfo = station.split(" ");
		
		String stationNum = stationInfo[0];
		String stationName = stationInfo[1];
		String lineName = stationInfo[2];
		
		Node pastStation = submap.searchStation(stationName);
		Node newStation = new Node(stationNum, stationName, lineName, key); 
		
		if(pastStation != null) {
			newStation.addPastToNew(pastStation);
			pastStation.addNewToPast(newStation);
			newStation.makeThisCross();
			pastStation.makeThisCross();
		}
		
		StationList currLine = submap.searchLine(lineName);
		if(currLine == null) currLine = submap.addLine(lineName);
		currLine.addStation(newStation);
				
		return ;
	}
	
	private static void FillAdj(LineList submap, String command) {
		String[] timeCmd = command.split(" ");
		
		String start = timeCmd[0];
		int startKey = submap.getKeyByStNum(start);
		String end = timeCmd[1];
		int endKey = submap.getKeyByStNum(end);
		int time = Integer.parseInt(timeCmd[2]);
		
		submap.adjMat[startKey][endKey] = time;
		
//		System.out.println(start+" "+startKey+" / "+end+" "+endKey+" / time : "+time);
	}
	
	private static void routeSearch(LineList submap, String searchStr) {
		String[] routeEnd = searchStr.split(" ");
		
		Node starting = submap.searchStation(routeEnd[0]) ;
		Node ending = submap.searchStation(routeEnd[1]) ;
		
//		System.out.println("starting : "+starting.getStationName());
//		starting.printAllCross();
//		System.out.println("ending : "+ending.getStationName());
//		ending.printAllCross();
		
		submap.getRoute(starting, ending);
	}
	
	
}

