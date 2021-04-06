import java.io.*;

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
				String input = "123123+12123sdf";
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
				
	}
}
