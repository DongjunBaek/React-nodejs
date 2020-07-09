package til.hash;

import java.util.HashMap;
import java.util.Map;

public class hash {
	public static void main(String[] args) {
		hash bfs = new hash();
		System.out.println("Answer is "+bfs.solution());
		
	}
	public String solution() {
		//미완주 선수 1명 -동명이인가능
		String answer ="";
		//참여자 1~100,000 , 원소의길이 1~20 알파벳
		String[] participant = {"leo","kiki","eden"};
		//완주선수 participant-1 
		String[] completion = {"eden","kiki"};
		
		HashMap<String, Integer> map = new HashMap<String, Integer>();
		
		for (String s : participant) {
			if(map.get(s) == null) {
				map.put(s, 1);				
			}
			else {
				map.put(s, map.get(s)+1);
			}
		}
		
		for (String s : completion) {
			map.put(s, map.get(s)-1);
		}
		
		for (String s : map.keySet()) {
			if(map.get(s) > 0) {
				answer = s;
				break;
			};
		}
		
		return answer;
	}
	
}
