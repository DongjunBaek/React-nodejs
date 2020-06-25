package codingtest.cynap;

import java.util.Scanner;

public class RomeCal {

	public static void main(String[] args) {
		// i = 1  
		// ii = 2 
		// iii = 3
		// iv = 4
		// v = 5
		// vi = 6
		// vii = 7
		// viii = 8
		// ix = 9
		// x = 10
		
		// xi = 11
		// xii = 12
		// xiii = 13
		// xiv = 14
		// xv = 15
		// xvi = 16
		// xvii = 17
		// xviii = 18
		// xix = 19
		// xx = 20
		RomeCal r = new RomeCal();
		Scanner sc = new Scanner(System.in);
//		System.out.print("Rome =");
//		String s1 = sc.next();
		String[] testcase = {
				"i",
				"ii",
				"iii",
				"iv",
				"v",
				"vi",
				"vii",
				"viii",
				"ix",
				"x",
				"xi",
				"xii",
				"xiii",
				"xiv",
				"xv",
				"xvi",
				"xvii",
				"xviii",
				"xix",
				"xx"				
				}; 
//		System.out.println(s1+" = "+r.convertDex(s1));
		for(String s : testcase) {
			System.out.println(s+" = "+r.convertDex(s));
		}
		
	}
	
	public int convertDex(String s) {
		int answer = 0;
		s = s.toLowerCase();
				
		for(int i = 0 ; i < s.length(); i++) {
			if(s.charAt(i) == 'i') {
				answer += 1;
			}else if(s.charAt(i) == 'v'){
				if(i+1 == s.length() && (s.indexOf('i') != -1)) {
					answer += 3;																			
				}else {
					answer += 5;
				}			
			}else { 
				if(i+1 == s.length() && (s.indexOf('i') != -1)) {
					answer += 8;					
				}else {
					answer += 10;
				}
			}
		}
		
		return answer;
		
	}

}
