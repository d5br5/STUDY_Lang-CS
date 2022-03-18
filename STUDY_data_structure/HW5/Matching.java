import java.io.*;

public class Matching
{
	public static void main(String args[]) throws IOException
	{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		OpenHashTable<String> HT = null;

		while (true)
		{
			try
			{
				String input = br.readLine();
				if (input.compareTo("QUIT") == 0)
					break;

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

			}
			catch (IOException e)
			{
				System.out.println("Wrong Input. Error : " + e.toString());
			}
		}

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

				int gapnum = 6;
				if(i==iternum-2) 	gapnum = gap;

				if((slotnow != -1 && HT.table[slotnow].search(substrNow).item != null)&&(slotnext != -1 && HT.table[slotnext].search(substrNext).item != null)) {

					thislist = HT.table[slotnow].search(substrNow).list;
					nextlist = HT.table[slotnext].search(substrNext).list;

					listlength = thislist.getLength();
					listpairs = thislist.getpairs();

					if(netpairs!=null) {
						listlength = netpairs.length;
						listpairs = netpairs;
					}

					if(validpairs == null) 	validpairs = new int[listlength][2];
					else validpairs = netpairs;

					for(int k=0; k<listlength; k++) {
						if(nextlist.vaildpair(listpairs[k][0], listpairs[k][1]+gapnum)) {
							validpairs[validcount][0] = listpairs[k][0];
							validpairs[validcount][1] = listpairs[k][1]+gapnum;
							validcount++;
						}
					}

					if(validcount>0) isIn = true;
					else {
						isIn=false;
						break;
					}

					netpairs = new int[validcount][2];

					for(int k=0; k<validcount; k++) {
						netpairs[k][0] = validpairs[k][0];
						netpairs[k][1] = validpairs[k][1];
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
