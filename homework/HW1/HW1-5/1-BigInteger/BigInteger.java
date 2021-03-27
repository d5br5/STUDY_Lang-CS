import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
  
  
public class BigInteger
{
    public static final String QUIT_COMMAND = "quit";
    public static final String MSG_INVALID_INPUT = "wrong answer!! sad..";
  
    // implement this
    public static final Pattern EXPRESSION_PATTERN = Pattern.compile("");
    
    private char sign;
    private int[] set;
    private int length;
    
    
    public BigInteger(char c, int[] num, int len) {
    	this.sign = c;
    	this.set = num;
    	this.length = len;
    }
    
  
    public BigInteger add(BigInteger big) {//++ or -- only input
    	
    	int addlength;
    	
		int[] shortnum;
		int shortlength;
		int[] longnum;
		int longlength;
		
		if(this.length>big.length) {
			addlength = this.length + 1;
			shortnum = big.set;
			shortlength = big.length;
			longnum = this.set;
			longlength = this.length;
		}else {
			addlength = big.length + 1;
			shortnum = this.set;
			shortlength = this.length;
			longnum = big.set;
			longlength = big.length;
		}
		
		int[] addnum = new int[addlength];
		
		int tmp=0;
		int midsum=0;
		
		for(int i=0;i<shortlength;i++) {
			midsum = shortnum[shortlength-1-i] + longnum[longlength-1-i]+tmp;
			addnum[addlength-1-i]=midsum%10;
			if(midsum>=10) {tmp=1;}else {tmp=0;}
		}
		
		for(int i=shortlength;i<longlength;i++) {
			midsum = longnum[longlength-1-i]+tmp;
			addnum[addlength-1-i]=midsum%10;
			if(midsum>=10) {tmp=1;}else {tmp=0;}
		}
		
		if(tmp==1) {addnum[0]=1;}
		
		return new BigInteger(this.sign, addnum, addlength);
    }
  
    public BigInteger subtract(BigInteger big) { // ++ only input
    	
    	int minuslength;
    	char resultsign='+';
    
    	int[] shortnum;
		int shortlength;
		int[] longnum;
		int longlength;
    	
		boolean oneisbigger = false;
		
		if(this.length>big.length) {
			oneisbigger=true;
		}else if(this.length<big.length) {
			oneisbigger=false;
		}
		
		if(this.length==big.length) {
			for(int i=0; i<this.length; i++) {
				if(this.set[i]>big.set[i]) {
					oneisbigger=true;
					break;
				}else if(this.set[i]<big.set[i]) {
					oneisbigger=false;
					break;
				}else {
					continue;
				}
			}
		}
		
		if(oneisbigger) {
			minuslength = this.length;
			shortnum = big.set;
			shortlength = big.length;
			longnum = this.set;
			longlength = this.length;
			resultsign='+';
		}else {
			minuslength = big.length;
			shortnum = this.set;
			shortlength = this.length;
			longnum = big.set;
			longlength = big.length;
			resultsign='-';
		}
		
		int[] minusnum = new int[minuslength];
		int tmp=0;
		int midsub=0;
		
		for(int i=0;i<shortlength;i++) {
			
			midsub = longnum[longlength-1-i]-shortnum[shortlength-1-i] +tmp;
			if(midsub<0) {
				midsub+=10;
				tmp=-1;
			}else {
				tmp=0;
			}
			minusnum[minuslength-1-i]=midsub;
			
		}
		
		for(int i=shortlength;i<longlength;i++) {
			midsub = longnum[longlength-1-i]+tmp;
			if(midsub<0) {
				midsub+=10;
				tmp=-1;
			}else {
				tmp=0;
			}
			minusnum[minuslength-1-i]=midsub;
			
		}
		
		return new BigInteger(resultsign, minusnum, minuslength);
		
    }
  
    public BigInteger multiply(BigInteger big)
    {
    	int[] shortnum;
		int shortlength;
		int[] longnum;
		int longlength;
		
		char resultsign='+';
		if(this.sign!=big.sign) {
			resultsign='-';
		}
		
		boolean oneisbigger = false;
		
		if(this.length>big.length) {
			oneisbigger=true;
		}else if(this.length<big.length) {
			oneisbigger=false;
		}
		
		if(this.length==big.length) {
			for(int i=0; i<this.length; i++) {
				if(this.set[i]>big.set[i]) {
					oneisbigger=true;
					break;
				}else if(this.set[i]<big.set[i]) {
					oneisbigger=false;
					break;
				}else {
					continue;
				}
			}
		}
		
		int mullength = this.length+big.length;
		
		if(oneisbigger) {
			shortnum = big.set;
			shortlength = big.length;
			longnum = this.set;
			longlength = this.length;
		}else {
			shortnum = this.set;
			shortlength = this.length;
			longnum = big.set;
			longlength = big.length;
		}
		
		int[] mulnum = new int[mullength];
		int[][] muloperator = new int[shortlength][mullength];
		
		int tmp=0;
		int midmul=0;
		
		for(int i=0; i<shortlength; i++) {
			tmp=0;
			for(int j=0; j<longlength; j++) {
				midmul = longnum[longlength-1-j]*shortnum[shortlength-1-i]+tmp;
				tmp = midmul / 10;
				midmul = midmul % 10;
				muloperator[i][mullength-1-i-j] = midmul;
			}
			if(tmp!=0) {muloperator[i][shortlength-1-i]=tmp;}
		}			
		
		tmp = 0;
		int midsum=0;
		
		for(int i=0; i<mullength; i++) {
			for(int j=0; j<shortlength; j++) {
				midsum = midsum + muloperator[j][mullength-i-1];
			}
			midsum += tmp;
			mulnum[mullength-1-i] = midsum%10;
			tmp = midsum/10;
			midsum = 0;
			
		}
		
		return new BigInteger(resultsign, mulnum, mullength);
    	
    }
  
    @Override
    public String toString()
    {
    	String resString = "";
		int breakpoint=0;
		
		for(int i=0; i<this.length; i++) {
			breakpoint=i;
			if(this.set[i]!=0) {
				break;
			}
		}
		
		for(int i=breakpoint; i<this.length; i++) {
			resString+=this.set[i];
		}
		
		if(this.sign=='-') {
			resString=this.sign+resString;
		}
		
		return resString;
		
    }
  
    static BigInteger evaluate(String input) throws IllegalArgumentException
    {
    	// input = " 999 + + 99990 ";
		input = input.replaceAll(" ", "");
		int length = input.length();
		
		int signCount=0;
		char operator;
		int breakPoint=0;
		
		int onelength;
		int twolength;
		
		char[] num1 = new char[length];
		char[] num2 = new char[length];
		
		char firstOp;
		char secondOp;
		
		int start1=0;
		int start2=0;
		
		firstOp = input.charAt(0);
		
		if((firstOp!='-')&&(firstOp!='+')) {signCount +=1;}
		
		for(int i=0; i<length; i++) {
			char setnum = input.charAt(i);
			if(setnum=='*'||setnum=='+'||setnum=='-') {signCount+=1;}
			if(signCount==2) {
				breakPoint=i;
				break;
			}
			num1[i]=setnum;
		}
				
		operator=input.charAt(breakPoint);
		
		for(int i=breakPoint+1; i<length; i++) {
			num2[i-breakPoint-1]=input.charAt(i);
		}
		
		//===================================
		
		if(num1[0]=='-') {
			firstOp='-';
			start1=1;
			onelength=breakPoint-1;
		}else if(num1[0]=='+') {
			firstOp='+';
			start1=1;
			onelength=breakPoint-1;
		}else {
			firstOp='+';
			start1=0;
			onelength=breakPoint;
		}
		
		int[] numone = new int[onelength];
		
		for(int i=start1;i<onelength+start1;i++) {
			numone[i-start1]=Integer.parseInt(String.valueOf(num1[i]));
			
		}
		
		BigInteger first = new BigInteger(firstOp,numone,onelength);
		
		
		//===================================
		
		if(num2[0]=='-') {
			secondOp = '-';
			start2=1;
			twolength=length-breakPoint-2;
		}else if(num2[0]=='+') {
			secondOp = '+';
			start2=1;
			twolength=length-breakPoint-2;
		}else {
			secondOp = '+';
			start2=0;
			twolength=length-breakPoint-1;
		}
		
		int[] numtwo = new int[twolength];
		
		for(int i=start2;i<twolength+start2;i++) {
			numtwo[i-start2]=Integer.parseInt(String.valueOf(num2[i]));
		}
		
		BigInteger second = new BigInteger(secondOp, numtwo, twolength);
		
		//=================================
		
		if(operator=='+') {
			if(first.sign==second.sign) {
				return first.add(second);
			}else if(first.sign=='-') {
				BigInteger tmpnum = new BigInteger('+', first.set, first.length);
				return second.subtract(tmpnum);
			}else {
				BigInteger tmpnum = new BigInteger('+', second.set, second.length);
				return first.subtract(tmpnum);
			}
		}else if(operator=='-') {
			if((first.sign=='+')&&(second.sign=='+')) {
				return first.subtract(second);
			}else if((first.sign=='+')&&(second.sign=='-')){
				BigInteger tmpnum = new BigInteger('+', second.set, second.length);
				return first.add(tmpnum);
			}else if((first.sign=='-')&&(second.sign=='+')){
				BigInteger tmpnum = new BigInteger('-', second.set, second.length);
				return first.add(tmpnum);
			}else {// - -
				BigInteger tmpnum1 = new BigInteger('+', first.set, first.length);
				BigInteger tmpnum2 = new BigInteger('+', second.set, second.length);
				return tmpnum2.subtract(tmpnum1);
			}
		}else {
			return first.multiply(second);
		}
		
		
		
		//========================================
		
		
		
    	
        // implement here
        // parse input
        // using regex is allowed
  
        // One possible implementation
        // BigInteger num1 = new BigInteger(arg1);
        // BigInteger num2 = new BigInteger(arg2);
        // BigInteger result = num1.add(num2);
        // return result;
    }
  
    public static void main(String[] args) throws Exception
    {
        try (InputStreamReader isr = new InputStreamReader(System.in))
        {
            try (BufferedReader reader = new BufferedReader(isr))
            {
                boolean done = false;
                while (!done)
                {
                    String input = reader.readLine();
  
                    try
                    {
                        done = processInput(input);
                    }
                    catch (IllegalArgumentException e)
                    {
                        System.err.println(MSG_INVALID_INPUT);
                    }
                }
            }
        }
    }
  
    static boolean processInput(String input) throws IllegalArgumentException
    {
        boolean quit = isQuitCmd(input);
  
        if (quit)
        {
            return true;
        }
        else
        {
            BigInteger result = evaluate(input);
            System.out.println(result.toString());
  
            return false;
        }
    }
  
    static boolean isQuitCmd(String input)
    {
        return input.equalsIgnoreCase(QUIT_COMMAND);
    }
}
