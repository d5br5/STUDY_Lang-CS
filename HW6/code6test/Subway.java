import java.io.*;

public class Subway {
	
	// java Subway data <- make it 
	// src : https://keichee.tistory.com/275
	
	public static void main(String[] args) {
		
//		command(input);
				
		String datalink = args[0];
		LineList submap = buildMap(datalink);
		
		String routeSearchInput = "옥수 왕십리";
		routeSearch(submap, routeSearchInput);
	
	}
	
	private static void command(String input) {
		try {
			
			
		}catch(Exception e) {
			System.out.println("ERROR");
		}
	}
	
	private static LineList buildMap(String dataLink) {
		
		LineList submap = new LineList();
		
		File file = new File(dataLink);
		BufferedReader BR = null;
		
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
				makeStation(submap, line);
//				System.out.println(line);
			}
			
			// time list
//			while((line= BR.readLine()) != null && READ_STATUS.equals("time")) {
//				System.out.println(line);
//			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return submap;
	}
	
	private static void makeStation(LineList submap, String station) {
		
		String[] stationInfo = station.split(" ");
		
		String stationNum = stationInfo[0];
		String stationName = stationInfo[1];
		String lineName = stationInfo[2];
		
		Node newStation = submap.searchStation(stationName);
		if(newStation == null) {
			newStation = new Node(stationNum, stationName, lineName);
		}else {
			newStation.addNewLine(stationNum, lineName);
		}
		
		StationList currLine = submap.searchLine(lineName);
		if(currLine == null) currLine = submap.addLine(lineName);
		currLine.addStation(newStation);
				
		return ;
	}
	
	private static void routeSearch(LineList submap, String searchStr) {
		String[] routeEnd = searchStr.split(" ");
		
		Node starting = submap.searchStation(routeEnd[0]) ;
		Node ending = submap.searchStation(routeEnd[1]) ;
		
		
		System.out.println("starting : "+starting.getStationName());
		starting.printLineNums();
		starting.printstationNums();
		System.out.println("ending : "+ending.getStationName());
		ending.printLineNums();
		ending.printstationNums();
	}
	
	
}

