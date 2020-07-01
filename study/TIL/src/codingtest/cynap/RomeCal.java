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
//		Scanner sc = new Scanner(System.in);
//		System.out.print("Rome =");
//		String s1 = sc.next();
//		String[] testcase = {
//				"i",
//				"ii",
//				"iii",
//				"iv",
//				"v",
//				"vi",
//				"vii",
//				"viii",
//				"ix",
//				"x",
//				"xi",
//				"xii",
//				"xiii",
//				"xiv",
//				"xv",
//				"xvi",
//				"xvii",
//				"xviii",
//				"xix",
//				"xx"				
//				}; 
//		System.out.println(s1+" = "+r.convertDex(s1));
		String testcase[] = new String[] {"I + I", "XX - IV","III * VI","X / III","III / X","X - XXX","XX + XX"} ;
		
		for(String s : testcase) {
			System.out.println(s+" = "+r.solution(s));
//			System.out.println(r.solution(s));
//			r.solution(s);
		}

		
	}
	
	private String solution(String s) {
		
		String answer = "";
		
		String msg = "";
		
		String[] sArr = s.split(" ");
		
		int num1 = convertDex(sArr[0]);
		int num2 = convertDex(sArr[2]);
		char op = sArr[1].charAt(0);

		int result = 0;
		
		if(!checkNum(num1) || !checkNum(num2)) {
			msg= "입력값의 범위를 벗어났습니다.";
			return msg;
			
		} else {
			
			switch(op) {
			case '+':
				result = (num1 + num2);
				break;
			case '-':
			case '–':
				if(num1 > num2) {
					result = num1 - num2;					
				}else {
					msg= "작은 수에서 큰수를 뺄 수 없습니다.";
				}
				break;
			case '*':
				result = num1 * num2;
				break;
			case '/':
				if(num1 > num2) {
					result = num1 / num2;					
				} else { 
					msg = "작은 수를 큰 수로 나눌 수 없습니다.";
				}				
				break;
			default:
				msg = "입력된 연산자의 형식이 옳지 않습니다."+op;
				
				return msg;
			}
		}
		
		if(!checkNum(result) && msg.length() == 0) {
			return answer = "범위를 벗어났습니다.";
		} else if(msg.length()>0) {
			return msg;
		} 
		
		answer = convertRome(result);
		
		return answer;
	}

	
	
	private String convertRome(int result) {
		
		String answer = "";
				
		for(int i = 0; i < result/10;i++) {
			answer += "X";
		}
		
		switch(result % 10) {
			case 9:
				answer += "ix";
				break;
			case 8:
				answer += "viii";
				break;
			case 7:
				answer += "vii";
				break;
			case 6:
				answer += "vi";
				break;
			case 5:
				answer += "v";
				break;
			case 4:
				answer += "iv";
				break;
			case 3:
			case 2:
			case 1:
				for(int i =0 ; i < result%10 ;i++) {
					answer += 'i';
				}
				break;
		}
		
		return answer.toUpperCase();
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
	
	public boolean checkNum(int num) {
		boolean bool = true;
		if(num > 39 || num < 1) {
			bool = false;
		}
		return bool;
	}


}
