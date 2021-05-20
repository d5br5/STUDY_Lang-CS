import java.io.*;


public class Matching
{
	public static void main(String args[]) throws IOException
	{
		String input = "99999999999999999999999999999999999999999999999";
		command(input);
	}

	private static void command(String input)
	{	
		OpenHashTable<String> HT = new OpenHashTable<>(100);
		
		String substr;
		int k = 1;
		int hashnum;
		
		for(int i=0; i<input.length()-5; i++) {
			substr = input.substring(i, i+6);
			hashnum = HT.hash(substr);
			
			HT.insert(k, i, substr);
		}
		
		HT.table[HT.search("999999")].search("999999").list.PrintList();
		
		
		
//		String txt = "1"; 
//		HT.insert(txt);
//		System.out.println(HT.search(txt));
//		
//		for(int i=0; i<input.length; i++) {
//			HT.table[49].insert(input[i]);
//		}
//		
//		System.out.println(HT.table[50]);
//		System.out.println(HT.table[49].Print());
		
	}
}
