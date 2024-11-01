package trythis;

import java.util.Scanner;

public class Basic {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int repreatNum = sc.nextInt();
		String arg = sc.next();

		printNum(arg, repreatNum);

	}

	public static int sum(int[] nums) {
		int sum = 0;
		for (int num : nums) {
			sum += num;
		}
		return sum;
	}

	public static double average(int[] nums) {
		int sum = 0;
		for (int num : nums) {
			sum += num;
		}
		return sum / nums.length;
	}

	public static void printNum(String s, int num) {
		for (int i = 1; i <= num; i++) {
			System.out.print(s);
		}
	}
}
