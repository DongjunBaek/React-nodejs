package til.hash;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

public class BestAlbum {
	public static void main(String[] args) {
		BestAlbum ba = new BestAlbum();		
		ba.solution();
	}

	private int[] solution() {
		int answer[] = {};
		String[] genres = {"classic","pop","classic","classic","pop"};
		int[] plays = {500,600,150,800,2500};
		
		answer = new int[4];
		String[] selectedGenre = new String[2];
		ArrayList<Integer> list = new ArrayList<Integer>();
		int cnt = 0;
		HashMap<String, Integer> hp = new HashMap<String, Integer>();
		
		
		for(int i = 0; i < genres.length;i++) {
			if(hp.containsKey(genres[i])) {
				hp.put(genres[i], hp.get(genres[i])+plays[i]);
			}else {				
				hp.put(genres[i], plays[i]);					
			}							
		}
		
		for(String h : hp.keySet()) {
			list.add(hp.get(h));			
		}
		//genre 2개 찾기
		Collections.sort(list);
		Collections.reverse(list);
		
		for(String h : hp.keySet()) {
			if(hp.get(h) == list.get(0)) {
				selectedGenre[0] = h;					
			}else if(hp.get(h) == list.get(1)) {
				selectedGenre[1] = h;
			}			
		}
		
		
		
		for(int k = 0; k < 2; k++) {
			list = new ArrayList<Integer>();
			
			for(int i = 0; i < genres.length;i++) {
				if(selectedGenre[k].equals(genres[i])) {
					list.add(plays[i]);				
				}
			}
			Collections.sort(list);
			Collections.reverse(list);
			
			HashMap<Integer, Integer> selectedSong = new HashMap<Integer, Integer>();
			for(int i = 0; i < plays.length;i++) {
				if(!selectedSong.containsKey(plays[i])) {
					selectedSong.put(plays[i], i );												
				}
			}
			
			
			for(int i= 0; i < (list.size()<2?1:2); i++) {				
				answer[cnt] = selectedSong.get(list.get(i));				
				cnt++;
			}
		}
		System.out.println(answer[0]);
		System.out.println(answer[1]);
		System.out.println(answer[2]);
		System.out.println(answer[3]);
		return answer;
	}
}
