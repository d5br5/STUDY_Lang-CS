
import java.util.Stack;



public class CalculatorTest
{
	public static void main(String args[])
	{
//		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int i = 0;
		while (i++<1) //true
		{
			try
			{
//				String input = br.readLine();
				String input = "3209 - 6506 + 9719 / 1359 * ( 9503 ^ 1 * 1533 * ( 8309 ) - 837 ) ^ 2 / ( 9959 / 7774 )";
				if (input.compareTo("q") == 0)
					break;

				command(input);
			}
			catch (Exception e)
			{
				System.out.println("error : " + e.toString());
			}
		}
	}

	private static void command(String input)
	{
		
		//trim input -> src : https://blog.naver.com/success87pch/220776190125
		
		input = input.replaceAll("\t", " ").trim().replaceAll(" +", " "); 		
		System.out.println(input);
		MyStack<String> parsedInput = makeStack(input);
//		System.out.println("test "+toString(reverseParsed));
		MyStack<String> postfix = convert(reverse(parsedInput));
		
		int postfixSize = postfix.size();
		
		MyStack<String> reversedPostfix = reverse(postfix); 
		
		String[] postfixArr = new String[postfixSize];
		for(int i = 0; i<postfixSize ; i++) {
			postfixArr[i] = reversedPostfix.pop(); 
		}
		
		System.out.println(toString(postfixArr));
		
	}
		
	public static MyStack<String> convert(MyStack<String> arr) {
		
		MyStack<String> postfix = new MyStack<>();
		MyStack<String> tmp = new MyStack<>();
		Stack<Boolean> parenthesis = new Stack<>();
		MyStack<String> error = new MyStack<>();
		
		while(!arr.empty()) {
			
			if(!isOperator(arr.peek())) {	// number	
				postfix.push(arr.pop());
			}else {		// operator
				if(arr.peek().equals("(")) {
					parenthesis.push(true);
					tmp.push(arr.pop());
					continue;
				}
				if(arr.peek().equals(")")) {
					while(!tmp.empty()&&!tmp.peek().equals("(")) {
						postfix.push(tmp.pop());
					}
					if(!parenthesis.empty()) {
						parenthesis.pop();
					}else {
						parenthesis.push(false);
					}
						
					arr.pop();
					if(!tmp.empty())tmp.pop();
					
					continue;
				}
				if(tmp.empty()&&postfix.empty()&&arr.peek().equals("-")) { //first - is ~
					arr.pop();
					tmp.push("~");
					if(arr.peek().equals("-")) {
						while(arr.peek().equals("-")) {
							arr.pop();
							tmp.push("~");
						}
					}
					continue;
				}
				if(tmp.empty()) {	// no waiting operator
					tmp.push(arr.pop());
					if(arr.peek().equals("-")) {
						if(!beforeMustWait(tmp.peek(),"~")) {
							postfix.push(tmp.pop());
						}
						arr.pop();
						tmp.push("~");
					}
					continue;
				}
				if(beforeMustWait(tmp.peek(), arr.peek())) {	// compare wait list
					
					tmp.push(arr.pop());
					if(arr.peek().equals("-")) {
						while(arr.peek().equals("-")) {
							arr.pop();
							tmp.push("~");
						}
					}
				}else {
					while(!tmp.empty()&&!beforeMustWait(tmp.peek(), arr.peek())) {
						
						postfix.push(tmp.pop());
					}
					tmp.push(arr.pop());
					if(arr.peek().equals("-")) {
						while(arr.peek().equals("-")) {
							arr.pop();
							tmp.push("~");
						}
					}
						
				}
			}
		}
	
		if(!parenthesis.empty()) {
			error.push("ERROR");
			return error;
		}
		
		while(!tmp.empty()) {
			postfix.push(tmp.pop());
		}
		
		return postfix;
	}
	
	public static MyStack<String> makeStack(String input){
		
		MyStack<String> parsed = new MyStack<>();
		
		String strLump="";
		
		for(int i=0; i<input.length(); i++) {
			String slice = Character.toString(input.charAt(i));
			if(slice.equals(" ")) {
				if(strLump.length()==0) continue;
				parsed.push(strLump);
				strLump="";
				continue;
			}
			if(isOperator(slice)) {
				if(strLump.length()!=0) {
					parsed.push(strLump);
					parsed.push(slice);
					strLump="";	
				}else {
					parsed.push(slice);
				}
			}else {
				strLump += slice;			
			}
			
		}
		if(strLump.length()!=0) parsed.push(strLump);
		
		return parsed;
	}
	
	public static MyStack<String> reverse(MyStack<String> input){
		MyStack<String> reverseParsed = new MyStack<>();
		while(input.size()>0) {
			reverseParsed.push(input.pop());
		}
		return reverseParsed;
	}
	
	public static boolean isOperator(String str) {
		String operator = "+-*/%^()";
		return operator.contains(str);
	}
	
	public static boolean beforeMustWait(String before, String after) {
		if(after.equals("(")) return true;
		if(before.equals("(")) return true;
		if(before.equals(after)) return false;
		if("+-".contains(before)&&"+-".contains(after)) return false;
		if("*/%".contains(before)&&"*/%".contains(after)) return false;
		
		if(before.equals("^")) return false;
		if(before.equals("~")) {
			if(after.equals("^")) return true;
			else return false;
		}
		if("*/%".contains(before)) {
			if("^~".contains(after)) return true;
			else return false;
		}
		
		if("+-".contains(before)) return true;
		
		
		
		return false;
	}
	
	public static String toString(MyStack<String> mystack) {
		String res="";
		while(!mystack.empty()) {
			res+=mystack.pop();
			if(!mystack.empty()) res+=" ";
		}
		return res;
	}
	
	public static String toString(String[] arr) {
		String res="";
		for(int i=0; i<arr.length-1; i++) {
			res+=arr[i];
			res+=" ";
		}
		res+= arr[arr.length-1];
		return res;
	}
	
	public static class MyStack<E> extends Stack<E>{
		
		
	}
	
}
