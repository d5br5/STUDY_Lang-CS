
public class Variable {

	public static void main(String[] args) {
		
		int a = 1;
		double b = 3;
		String c = "Hello World";
		
		String name = "egoing";
		System.out.println("Hello, "+name+"..."+"bye");
		
		//casting
		double b2 = (double)1;	//�ս��� �����Ƿ� �ڵ����� casting
		System.out.println(b2);
		
		int e = (int) 1.1;		//�ս��� �߻��ϹǷ� �ڵ����� X
		System.out.println(e);
		
		String f = Integer.toString(23);
		System.out.println(f.getClass());

	}

}
