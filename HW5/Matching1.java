import java.io.*;


public class Matching
{
	public static void main(String args[]) throws IOException
	{
		
//		OpenHashTable<String> HT = new OpenHashTable<>(100);
				
		OpenHashTable<String> HT = null;
		String input = "< D:\\dev\\github\\snu_data_structure\\HW5\\code5test\\text\\alexferguson.txt";
		
		char cmd = input.charAt(0);
		String content = input.substring(2);
		
		if(cmd=='<') {
			HT = buildHT(content);
		}else if(cmd=='@') {
			int slotnum = Integer.parseInt(content);
			slotPrint(HT, slotnum);
		}else if(cmd=='?') {
			patternPrint(HT, content);
		}
		
//		String input = "Sir Alex Ferguson took charge of Manchester United for the final time at Old Trafford as his team celebrated the club's 20th title with a 2-1 win over Swansea.";
//		convert(HT, input, 3);
		
		String tmp = "expecta";
		patternPrint(HT, tmp);
		
	}
	
	private static OpenHashTable<String> buildHT(String datalink) throws FileNotFoundException{
		
		OpenHashTable<String> HT = new OpenHashTable<>(100);
		
		// file read src : https://jeong-pro.tistory.com/69
		File file =new File(datalink);
		BufferedReader BR = new BufferedReader(new FileReader(file));
		String line = "";
		int linecount = 0;
		try {
			while((line = BR.readLine()) != null) {
				linecount ++;
				convert(HT, line, linecount);
//				System.out.println("line "+linecount+" : "+line);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		
		return HT;
	}
	
	private static void convert(OpenHashTable<String> HT, String text, int order) {
		String substr;
		
		for(int i=0; i<text.length()-5; i++) {
			substr = text.substring(i, i+6);
			HT.insert(order, i+1, substr);
		}
	}
	
	private static void printZero() {
		System.out.println("(0, 0)");
	}
	
	private static void slotPrint(OpenHashTable<String> HT, int slot) {
		if(HT.table[slot]==null) {
			System.out.println("EMPTY");
		}else {
			HT.table[slot].PrintSlot();
		}
	}
	
	private static void patternPrint(OpenHashTable<String> HT, String str) {
		int length = str.length();
		int iternum;
		int gap = (length-1) % 6 +1;
				
		if(length%6==0) iternum = length / 6;
		else iternum = length / 6 + 1;
		
		System.out.println("gap : "+gap+" / iter : "+iternum);
		
		String[] substrs = new String[iternum];
		int[] subStartPoints = new int[iternum];
		
		for(int i=0; i<iternum-1; i++) {
			subStartPoints[i] = 6*i;
		}
		subStartPoints[iternum-1] = length-6;
		
		for(int i=0; i<iternum; i++) {
			substrs[i] = str.substring(subStartPoints[i], subStartPoints[i]+6);
		}
		
		patternCheck(HT, substrs, gap);
	}
	
	private static void patternCheck(OpenHashTable<String> HT, String[] substrs, int gap) {
		
		int iternum = substrs.length;
		boolean isIn = false;
		int[][] listpairs, validpairs=null, netpairs=null;
				
		if(iternum==1) {
			if(HT.search(substrs[0])!=-1 && HT.table[HT.search(substrs[0])].search(substrs[0]).item!=null) {
				HT.table[HT.search(substrs[0])].search(substrs[0]).list.PrintList();	
				return;
			}else {
				printZero();
				return;
			}
		}else {
			int patternLength = 6;
			if(substrs.length!=1) patternLength = (substrs.length-1)*6+gap;
			
			int listlength;
			int validcount=0;
			List<Integer> thislist, nextlist;
					
			for(int i=0; i<iternum-1; i++) {
				
				String substrNow = substrs[i];
				String substrNext = substrs[i+1];
				
				validcount = 0;
				int slotnow = HT.search(substrNow);
				int slotnext = HT.search(substrNext);
				
				System.out.println("------------iter "+(i+1)+"-------------");
				System.out.println("strnow : "+substrNow);
				System.out.println("strnext : "+substrNext);
				System.out.println("slotnot : "+slotnow);
				System.out.println("slotnext : "+slotnext);
				
				int gapnum = 6;
				if(i==iternum-2) 	gapnum = gap;
			
				if((slotnow != -1 && HT.table[slotnow].search(substrNow).item != null)&&(slotnext != -1 && HT.table[slotnext].search(substrNext).item != null)) {
					
					thislist = HT.table[slotnow].search(substrNow).list;
					nextlist = HT.table[slotnext].search(substrNext).list;
					
					listlength = thislist.getLength();
					listpairs = thislist.getpairs();
					
					if(netpairs!=null) {
						listlength = netpairs.length;
//						System.out.println("pair changes");
						listpairs = netpairs;
					}
					
					System.out.println("list pairs : "+listpairs[0][0]+", "+listpairs[0][1]);
					
					if(validpairs == null) 	validpairs = new int[listlength][2];
					else validpairs = netpairs;
							
					System.out.println(listlength);
					for(int k=0; k<listlength; k++) {
						System.out.println(listpairs[k][0]+", "+(listpairs[k][1]+gapnum));
						System.out.println(nextlist.vaildpair(12, 207));
						nextlist.PrintList();
						if(nextlist.vaildpair(listpairs[k][0], listpairs[k][1]+gapnum)) {
							System.out.println("valid : "+listpairs[k][0]+", "+listpairs[k][1]+" at k : "+k);
							validpairs[validcount][0] = listpairs[k][0];
							validpairs[validcount][1] = listpairs[k][1]+gapnum;
							validcount++;
						}
					}
					
					for(int k=0; k<validpairs.length;k++) {
						System.out.println("validpairs["+k+"][1]: "+validpairs[k][1] );
					}
					
					if(validcount>0) isIn = true;
					else {
						isIn=false;
						break;
					}
					
					netpairs = new int[validcount][2];
					System.out.println("validcount : "+validcount);
					for(int k=0; k<validcount; k++) {
						netpairs[k][0] = validpairs[k][0];
						netpairs[k][1] = validpairs[k][1];
					}
					for(int k=0; k<netpairs.length; k++) {
						System.out.println("net pairs : ("+netpairs[k][0]+", "+netpairs[k][1]+")" );
					}
				
				}else {
					isIn = false;
					break;
				}
			}
			
			if(isIn) {
				if(patternLength>6) {
					if(gap==6) gap =0;
					for(int i=0; i<netpairs.length; i++) {
						netpairs[i][1] = netpairs[i][1] + 6 - patternLength;
					}
				}
				pairPrint(netpairs);
			}else {
				printZero();
			}	
		}
		
	}
	
	public static void pairPrint(int[][] strs) {
		
		String result = "";
		
		if(strs.length == 0 ) {
			System.out.println("(0, 0)");
			return;
		}
		
		result += "("+strs[0][0]+", "+strs[0][1]+")";
		if(strs.length>1) {
			for(int i=1; i<strs.length; i++) {
				result += " ("+strs[i][0]+", "+strs[i][1]+")";
			}
		}
		
		System.out.println(result);	
	}
	
}
