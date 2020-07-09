package til.hash;


import java.util.Arrays;
import java.util.HashMap;
import java.util.*;
public class PhoneList {

	public static void main(String[] args) {
		
		PhoneList pl = new PhoneList();
		
		System.out.println(pl.solution2());
		
		
	}
	
	public boolean solution() {
		String[] phone_book = {"123","123","1235","5789","88" };
		String[] pb = new String[phone_book.length-1];
		String pre = phone_book[0];
		boolean answer = true;
		for(int i = 1; i < phone_book.length;i++) {
			pb[i-1] = phone_book[i];
		}
		Arrays.sort(pb);
		
		for (String p : pb) {
			System.out.println(p);
            if(p.length() >= pre.length()){
                if(p.startsWith(pre)) {
                    answer = false;
                    break;
                }
            }
		}
				
		return answer;
	}
	
	
	public boolean solution2() {

		boolean answer = true;
		String[] phone_book = { "12", "123", "1235", "5789", "88" };		    
        for(int i =0; i<phone_book.length; i++){
            for(int j =0; j<phone_book.length; j++){
                if(i == j) continue;
                if(phone_book[j].indexOf(phone_book[i])==0){//접두어라면
                    return false;   
                }
            }
        }

		return answer;
	}

}
