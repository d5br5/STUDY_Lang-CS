
public class classstudy {
	static final int VMAX =21;
	
	static class PhyscData{
		String name;
		int height;
		double vision;
		
		 PhyscData(String name, int height, double vision){
			this.name = name;
			this.height = height;
			this.vision = vision;
		}
		
	}
	
	public static void main(String[] args) {
		
		PhyscData[] x = {
				new PhyscData("������", 162, 0.3),
				new PhyscData("������", 153, 0.5)
		};

	}

}
