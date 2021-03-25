
public class papar {
	public static void main(String[] args) {
		String input = " 999 + + 99990 ";
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
		
		//=================================
		
		int addlength;
		int minuslength;
		
		int[] shortnum;
		int shortlength;
		int[] longnum;
		int longlength;
		
		if(onelength>twolength) {
			addlength = onelength+1;
			shortnum = numtwo;
			shortlength = twolength;
			longnum = numone;
			longlength = onelength;
		}else {
			addlength = twolength+1;
			shortnum = numone;
			shortlength = onelength;
			longnum = numtwo;
			longlength = twolength;
		}
		
		int[] addnum = new int[addlength];
		
		int tmp=0;
		int midsum=0;
		
		for(int i=0;i<shortlength;i++) {
			midsum = shortnum[shortlength-1-i] + longnum[longlength-1-i]+tmp;
			addnum[addlength-1-i]=midsum%10;
			
			if(midsum>=10) {
				tmp=1;
			}else {
				tmp=0;
			}
		}
		
		for(int i=shortlength;i<longlength;i++) {
			midsum = longnum[longlength-1-i]+tmp;
			addnum[addlength-1-i]=midsum%10;
			
			if(midsum>=10) {
				tmp=1;
			}else {
				tmp=0;
			}

		}
		
		if(tmp==1) {addnum[0]=1;}
		
		System.out.println("---------plus");
		for(int i=0;i<addlength;i++) {
			System.out.println(addnum[i]);
		}
		System.out.println("============");
		
		
		boolean oneisbigger = false;
		
		if(onelength>twolength) {
			oneisbigger=true;
		}else if(onelength<twolength) {
			oneisbigger=false;
		}
		
		if(onelength==twolength) {
			for(int i=0; i<onelength; i++) {
				if(numone[i]>numtwo[i]) {
					oneisbigger=true;
					break;
				}else if(numone[i]<numtwo[i]) {
					oneisbigger=false;
					break;
				}else {
					continue;
				}
			}
		}
		
		
		if(oneisbigger) {
			minuslength = onelength;
			shortnum = numtwo;
			shortlength = twolength;
			longnum = numone;
			longlength = onelength;
		}else {
			minuslength = twolength;
			shortnum = numone;
			shortlength = onelength;
			longnum = numtwo;
			longlength = twolength;
		}
		
		int[] minusnum = new int[minuslength];
		
		tmp=0;
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
		
		System.out.println("=====minus=======");
		for(int i=0;i<minuslength;i++) {
			System.out.println(minusnum[i]);
		}
		
		

	}
}
