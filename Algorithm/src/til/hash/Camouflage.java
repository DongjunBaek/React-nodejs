package til.hash;

import java.util.HashMap;
import java.util.Map;

public class Camouflage {
	public static void main(String[] args) {
		Camouflage cf = new Camouflage();
		System.out.println("Answer is "+cf.solution());
		
	}
	public int solution() {
		//[의상명, 의상분류]
		//의상수 1이상 30이하
		//중복 불가
		//value -> String
		//length <= 20 자연수, 소문자, _
		//최소 한 개이상 선택
		String[][] clothes1 = {
				{"yellow_hat","headgear"},
				{"blue_sunglasses","eyewear"},
				{"green_turban","headgear"}
//				,{"red_hat","headgear"}
				};
		// 2 1 -> 5
		String[][] clothes = {
				{"crow_mask","face"},
				{"blue_sunglasses","face"},
				{"smoky_makeup","face"},
		};
		// 3 -> 3
		
		int answer = 1;
 
		HashMap<String, Integer> hp = new HashMap<String, Integer>();
		for(int i = 0; i < clothes.length ; i++) {
			
			if(hp.containsKey(clothes[i][1])) {
				hp.put(clothes[i][1],hp.get(clothes[i][1])+1);				
			}else {
				hp.put(clothes[i][1], 1);
			}
		}
		
		
		for(String h : hp.keySet()) {
			answer *= hp.get(h)+1;
		}
			
		
		answer -= 1;
		return answer;
	}
	
}
