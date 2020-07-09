package codingtest.cynap;
import java.util.Scanner;
/**
 * 2020.07
 * 로마자 계산기
 * @author Dongjun
 * 문제 출처 : 사이냅소프트 채용퀴즈.
 */
public class RomeCal {

	public static void main(String[] args) {
		
		RomeCal r = new RomeCal();

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
		
		// TestCase
		String testcase[] = new String[] {"I + I", "XX - IV","III * VI","X / III","III / X","X - XXX","XX + XX"} ;
		
		for(String s : testcase) {
			System.out.println(s+" = "+r.solution(s));
		}
		
		// User input
		Scanner sc = new Scanner(System.in);
		while(true) {
			System.out.print("수식을 입력하세요(ex : I + I) (종료: n):");
			String userInput = sc.nextLine().toUpperCase();
			
			if(userInput.charAt(0) == 'N') {
				System.out.println("종료되었습니다.");
				break;
			} else if(userInput.split(" ").length != 3){
				System.out.println("잘못 된 입력입니다.");
			} else {
				System.out.println(userInput + "= " + r.solution(userInput));
			}
		}
		
		
		
		
	}
	
	private String solution(String s) {
		//결과 값 저장할 변수 선언 및 초기화
		String answer = "";
		
		//오류메세지를 저장할 변수 선언 및 초기화
		String msg = "";
		
		//입력받은 식을 저장할 객체 배열 선언 및 초기화
		String[] sArr = s.split(" ");
		
		//로마 숫자를 변환
		int num1 = convertDec(sArr[0]);
		int num2 = convertDec(sArr[2]);
		char op = sArr[1].charAt(0);

		int result = 0;
		
		
		// 입력값 검사		
		if(!checkNum(num1) || !checkNum(num2)) {
			msg= "입력값의 범위를 벗어났습니다.";
			return msg;
			
		} else {
			//계산
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
					return "몫 "+convertRome(result)+", 나머지 "+convertRome(num1%num2);
				} else { 
					msg = "작은 수를 큰 수로 나눌 수 없습니다.";
				}				
				break;
			default:
				msg = "입력된 연산자의 형식이 옳지 않습니다."+op;				
				return msg;
			}
		}
		
		//결과값 확인
		
		if(!checkNum(result) && msg.length() == 0) {
			return answer = "범위를 벗어났습니다.";
		} else if(msg.length()>0) {
			return msg;
		} 
		
		//결과 값을 로마자로 변환.
		answer = convertRome(result);
		
		return answer;
	}

	
	
	//10진수를 로마숫자로 변환하는 메소드
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
	
	//로마숫자를 10진수로 변환
	public int convertDec(String s) {
		// keyword : i의 개수는 0~3개
		// i가 1개일 때 위치에 따라 +1 or -1 결정
		// 앞의 수가 뒤의 오는 숫자보다 작을 수 없다.
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
	
	//숫자 범위 확인.	
	public boolean checkNum(int num) {
		boolean bool = true;
		if(num > 39 || num < 1) {
			//범위를 벗어나면 false
			bool = false;
		}
		return bool;
	}


}
