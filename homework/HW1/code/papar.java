
public class papar {
	public static void main(String[] args) {
		String input = "-112344564564564546451231231895678945642132400--112312121231231321231231321213212313213121300";
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
			
			if(setnum=='*'||setnum=='+'||setnum=='-') {
				signCount+=1;
			}
			
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
		
		
		
		System.out.println("num1 : ");
		System.out.println(num1);
		System.out.println("operator : "+operator);
		System.out.println("num2 : ");
		System.out.println(num2);
		
		
	}
}
