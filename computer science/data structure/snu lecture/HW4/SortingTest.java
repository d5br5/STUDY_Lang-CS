import java.io.*;
import java.util.*;

public class SortingTest
{
	public static void main(String args[])
	{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		try
		{
			boolean isRandom = false;	// random array?
			int[] value;	// input number array
			String nums = br.readLine();	// get first line input
			if (nums.charAt(0) == 'r')
			{
				// if random array
				isRandom = true;

				String[] nums_arg = nums.split(" ");

				int numsize = Integer.parseInt(nums_arg[1]);	// total length
				int rminimum = Integer.parseInt(nums_arg[2]);	// min
				int rmaximum = Integer.parseInt(nums_arg[3]);	// max

				Random rand = new Random();	// create random number instance

				value = new int[numsize];	// create array
				for (int i = 0; i < value.length; i++)	// create random number and insert into array
					value[i] = rand.nextInt(rmaximum - rminimum + 1) + rminimum;
			}
			else
			{
				// if not random array
				int numsize = Integer.parseInt(nums);

				value = new int[numsize];	// create array
				for (int i = 0; i < value.length; i++)	// get input line by line and insert into array
					value[i] = Integer.parseInt(br.readLine());
			}

			// number input done, select sorting method, and carry out
			while (true)
			{
				int[] newvalue = (int[])value.clone();	// to protect original num, do duplicate

				String command = br.readLine();

				long t = System.currentTimeMillis();
				switch (command.charAt(0))
				{
					case 'B':	// Bubble Sort
						newvalue = DoBubbleSort(newvalue);
						break;
					case 'I':	// Insertion Sort
						newvalue = DoInsertionSort(newvalue);
						break;
					case 'H':	// Heap Sort
						newvalue = DoHeapSort(newvalue);
						break;
					case 'M':	// Merge Sort
						newvalue = DoMergeSort(newvalue);
						break;
					case 'Q':	// Quick Sort
						newvalue = DoQuickSort(newvalue);
						break;
					case 'R':	// Radix Sort
						newvalue = DoRadixSort(newvalue);
						break;
					case 'X':
						return;	// quit program
					default:
						throw new IOException("no such sorting method");
				}
				if (isRandom)
				{
					// if random, print running time
					System.out.println((System.currentTimeMillis() - t) + " ms");
				}
				else
				{
					// if not random, print sorting result
					for (int i = 0; i < newvalue.length; i++)
					{
						System.out.println(newvalue[i]);
					}
				}

			}
		}
		catch (IOException e)
		{
			System.out.println("input error : " + e.toString());
		}
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////
	private static int[] DoBubbleSort(int[] value)
	{
		int tmp;
		for(int i=value.length-1; i>0; i--) {
			for(int j = 0; j<i; j++) {
				if(value[j]>value[j+1]) {
					tmp = value[j];
					value[j] = value[j+1];
					value[j+1] = tmp;
				}
			}
		}
		return (value);
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////
	private static int[] DoInsertionSort(int[] value)
	{
		int tmp;
		for(int i=1; i<value.length; i++) {
			int j=i;
			while(j>0&&value[j]<value[j-1]) {
				tmp = value[j-1];
				value[j-1] = value[j];
				value[j] = tmp;
				j--;
			}
		}
		return (value);
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////
	private static int[] DoHeapSort(int[] value)
	{
		for(int i=(value.length-2)/2; i>=0; i--) {
			percolateDown(value, i, value.length-1);
		}
		for(int i = value.length-1; i>0; i--) {
			value[i] = deleteMax(value, i);
		}
		return (value);
	}

	private static int deleteMax(int[] arr, int lastIndex) {
		int max = arr[0];
		arr[0] = arr[lastIndex];
		percolateDown(arr, 0, lastIndex-1);
		return max;
	}

	private static void percolateDown(int[] arr, int k, int lastIndex) {
		int child = 2*k+1;
		int right = 2*k+2;
		if(child<=lastIndex) {
			if(right<=lastIndex && arr[child]<arr[right]) {
				child = right;
			}
			if(arr[k]<arr[child]) {
				int tmp = arr[k];
				arr[k]= arr[child];
				arr[child] = tmp;
				percolateDown(arr, child, lastIndex);
			}
		}
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////
	private static int[] DoMergeSort(int[] value)
	{
		if(value.length>1) {
			int point = value.length/2;
			int[] left = new int[point];
			int[] right = new int[value.length - point];
			for(int i = 0; i<point; i++) {
				left[i] = value[i];
			}
			for(int i= point; i<value.length; i++) {
				right[i-point] = value[i];
			}

			left = DoMergeSort(left);
			right = DoMergeSort(right);
			value = Merge(left, right);
		}
		return (value);
	}

	private static int[] Merge(int[] left, int[] right) {

		int[] merged = new int[left.length+right.length];

		int totalpoint =0;
		int leftpoint=0;
		int rightpoint=0;

		while(leftpoint<left.length && rightpoint<right.length) {
			if(left[leftpoint]<=right[rightpoint]) {
				merged[totalpoint++] = left[leftpoint++];
			}else {
				merged[totalpoint++] = right[rightpoint++];
			}
		}
		while(leftpoint<left.length) {
			merged[totalpoint++] = left[leftpoint++];
		}
		while(rightpoint<right.length) {
			merged[totalpoint++] = right[rightpoint++];
		}

		return merged;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////
	private static int[] DoQuickSort(int[] value)
	{
		quickSort(value, 0, value.length-1);
		return (value);
	}

	private static void quickSort(int[] arr, int first, int last) {
		if(first<last) {
			int point = partition(arr, first, last);
			quickSort(arr, first, point-1);
			quickSort(arr, point+1, last);
		}
	}

	private static int partition(int[] arr, int first, int last) {
		int tmp;
		int point = arr[last];
		int i = first-1;
		for(int j=first; j<last; j++) {
			if(arr[j]<point) {
				i++;
				tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
		tmp = arr[i+1];
		arr[i+1] = arr[last];
		arr[last] = tmp;

		return i+1;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////
	private static int[] DoRadixSort(int[] value)
	{
		int max = 0;
		int min = 0;
		for(int i=0; i<value.length; i++) {
			if(max<value[i]) max = value[i];
			if(min>value[i]) min = value[i];
		}

		min = Math.abs(min);
		if(min>max) max = min;

		int maxsize = (int)(Math.log10(max)+1);		// src : https://oneprogram.tistory.com/116

		Queue<Integer> Q0 = new LinkedList<>();		// src : https://www.programiz.com/java-programming/queue
		Queue<Integer> Q1 = new LinkedList<>();
		Queue<Integer> Q2 = new LinkedList<>();
		Queue<Integer> Q3 = new LinkedList<>();
		Queue<Integer> Q4 = new LinkedList<>();
		Queue<Integer> Q5 = new LinkedList<>();
		Queue<Integer> Q6 = new LinkedList<>();
		Queue<Integer> Q7 = new LinkedList<>();
		Queue<Integer> Q8 = new LinkedList<>();
		Queue<Integer> Q9 = new LinkedList<>();
		Queue<Integer> N1 = new LinkedList<>();
		Queue<Integer> N2 = new LinkedList<>();
		Queue<Integer> N3 = new LinkedList<>();
		Queue<Integer> N4 = new LinkedList<>();
		Queue<Integer> N5 = new LinkedList<>();
		Queue<Integer> N6 = new LinkedList<>();
		Queue<Integer> N7 = new LinkedList<>();
		Queue<Integer> N8 = new LinkedList<>();
		Queue<Integer> N9 = new LinkedList<>();


		Queue[] qList = {N9,N8,N7,N6,N5,N4,N3,N2,N1,Q0,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9};

		for(int i=1; i<=maxsize; i++) {
			int div = (int) Math.pow(10,i);
			int point = 0;

			for(int j=0; j<value.length; j++) {
				switch((value[j]%div)*10/div) {
					case -9: N9.add(value[j]);
						break;
					case -8: N8.add(value[j]);
						break;
					case -7: N7.add(value[j]);
						break;
					case -6: N6.add(value[j]);
						break;
					case -5: N5.add(value[j]);
						break;
					case -4: N4.add(value[j]);
						break;
					case -3: N3.add(value[j]);
						break;
					case -2: N2.add(value[j]);
						break;
					case -1: N1.add(value[j]);
						break;
					case 0: Q0.add(value[j]);
						break;
					case 1: Q1.add(value[j]);
						break;
					case 2: Q2.add(value[j]);
						break;
					case 3: Q3.add(value[j]);
						break;
					case 4: Q4.add(value[j]);
						break;
					case 5: Q5.add(value[j]);
						break;
					case 6: Q6.add(value[j]);
						break;
					case 7: Q7.add(value[j]);
						break;
					case 8: Q8.add(value[j]);
						break;
					case 9: Q9.add(value[j]);
						break;
				}
			}

			for(int j=0; j<qList.length; j++) {
				while(qList[j].peek()!=null) {
					value[point++] = (int)qList[j].remove();
				}
			}

		}
		return (value);
	}
}
