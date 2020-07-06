package til.loop;

import java.util.Scanner;

public class loopNum {
	
	public static void main(String[] args) {
		
		/**
		 * Loop Exam in Number Box
		 */
		loopNum ln = new loopNum();
		Scanner sc =new Scanner(System.in);
		System.out.print("Select Number 1 ~ 100 :");
		int num = sc.nextInt();
		ln.solution(num);
	}
	
	private void solution(int n) {
				
		int[][] arr = new int[n][n];
		//top
		for(int i = 0; i < arr.length;i++) {
			for(int j=0; j < arr[i].length;j++) {				
				if(i > j) {
					System.out.print(n-j);
					arr[i][j] = n-j;
				}else {
					System.out.print(n-i);
					arr[i][j] = n-i;
				}
			}
			for(int j = arr[i].length-2; j >= 0 ; j-- ) {
				System.out.print(arr[i][j]);
			}					
			System.out.println();
		}
		//bottom
		for(int i = 1; i < arr.length;i++) {
			for(int j=0; j < arr[i].length;j++) {				
				System.out.print(arr[n-i-1][j]);				
			}
			for(int j=1; j < arr[i].length;j++) {				
				System.out.print(arr[n-i-1][n-j-1]);				
			}
			System.out.println();
		}
		
		
		
	}

}
