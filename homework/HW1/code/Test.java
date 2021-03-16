import java.io.*;
import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        File testIn = new File("data/expression.txt");
        File testOut = new File("data/result.txt");
        boolean result = true;

        try {
            Scanner in = new Scanner(testIn);
            Scanner out = new Scanner(testOut);
            while(in.hasNext()) {
                String input = in.nextLine();
                String output = out.nextLine();
                String yourOutput = BigInteger.evaluate(input).toString();
                if(!output.equals(yourOutput)) {
                    result = false;
                    System.out.println("Test Result: X");
                    System.out.println("Expected result: " + output);
                    System.out.println("Your output: " + yourOutput);
                    break;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        if(result) System.out.println("Test Result: O");
    }
}
