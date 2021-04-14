import java.util.Stack;
import java.io.*;

public class CalculatorTest
{
	public static void main(String args[])
	{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		while (true)
		{
			try
			{
				String input = br.readLine();
				if (input.compareTo("q") == 0)
					break;

				command(input);
			}
			catch (Exception e)
			{
				System.out.println("error :  " + e.toString());
			}
		}
	}

	private static void command(String input)
	{

		try {
			//trim input -> src : https://blog.naver.com/success87pch/220776190125
			input = input.replaceAll("\t", " ").trim().replaceAll(" +", " ");

			Stack<String> parsedInput = makeStack(input);
			Stack<String> postfix = convert(reverse(parsedInput));

			int postfixSize = postfix.size();
			String[] postfixArr = new String[postfixSize];
			Stack<Long> resultStack;
			long result;

			if(postfix.peek()!="ERROR") {
				Stack<String> reversedPostfix = reverse(postfix);
				for(int i = 0; i<postfixSize ; i++) {
					postfixArr[i] = reversedPostfix.pop();
				}
				resultStack = eval(postfixArr);

				if(resultStack.size()!=1) {
					System.out.println("ERROR");
					return;
				}else {
					result = resultStack.pop();
					System.out.println(toString(postfixArr));
					System.out.println(result);
				}
			}else {
				System.out.println("ERROR");
				return;
			}

		}catch(Exception e){
			System.out.println("ERROR");

		}

	}


	public static Stack<Long> eval(String[] pfArr){  // src : lecture code
		long A, B;

		Stack<Long> result = new Stack<>();
		Stack<Long> error = new Stack<>();

		for(int i =0; i<pfArr.length; i++) {
			String str = pfArr[i];
			if(str.equals("~")) {
				A = result.pop();
				A *= -1;
				result.push(A);
			}else if(isOperator(str)) {		// operator
				A = result.pop();
				B = result.pop();
				if(A==0&&(str.equals("/")||str.equals("%"))) {
					return error;
				}
				if(B==0&&str.equals("^")&&A<0) {
					return error;
				}
				result.push(oper(A,B,str));

			}else {		// number
				result.push(Long.parseLong(str));
			}
		}

		return result;
	}

	public static long oper(long a,  long b, String oper) { // src : lecture code
		long val = 0;
		switch(oper) {
			case "+" : val = b+a; break;
			case "-" : val = b-a; break;
			case "*" : val = b*a; break;
			case "/" : val = b/a; break;
			case "%" : val = b%a; break;
			case "^" : val = (long)Math.pow(b, a); break;
		}
		return val;
	}

	public static Stack<String> convert(Stack<String> arr) {

		Stack<String> postfix = new Stack<>();
		Stack<String> tmp = new Stack<>();
		Stack<Boolean> parenthesis = new Stack<>();
		Stack<String> error = new Stack<>();

		while(!arr.empty()) {

			if(!isOperator(arr.peek())) {	// number
				postfix.push(arr.pop());
			}else {		// operator
				if(arr.peek().equals("(")) {
					parenthesis.push(true);
					tmp.push(arr.pop());
					if(arr.peek().equals("-")) {
						while(arr.peek().equals("-")) {
							arr.pop();
							tmp.push("~");
						}
					}
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
						return error;
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
						while(arr.peek().equals("-")) {
							arr.pop();
							tmp.push("~");
						}
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

	public static Stack<String> makeStack(String input){

		Stack<String> parsed = new Stack<>();

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

	public static Stack<String> reverse(Stack<String> input){
		Stack<String> reverseParsed = new Stack<>();
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
		if(before.equals("^")&&after.equals("^")) return true;
		if(before.equals(after)) return false;
		if(before.equals("^")) return false;
		if(after.equals("~")) return true;
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

	public static String toString(Stack<String> Stack) {
		String res="";
		while(!Stack.empty()) {
			res+=Stack.pop();
			if(!Stack.empty()) res+=" ";
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

}
