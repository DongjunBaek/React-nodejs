package til.stack;

public class Truck {
	
	//프로그래머스 다리를 지나는 트럭
	
	public static void main(String[] args) {
		
		Truck t = new Truck();
		int truck_weights[] = {7,4,5,6};//8
		System.out.println("Time : "+ t.solution(2, 10, truck_weights));
		
		truck_weights = new int[] {10};//101
		System.out.println("Time : "+ t.solution(100, 100, truck_weights));
		
		truck_weights = new int[] {10,10,10,10,10,10,10,10,10,10};//110
		System.out.println("Time : "+ t.solution(100, 100, truck_weights));
	}
	
	
    public int solution(int bridge_length, int weight, int[] truck_weights) {
        
    	// bridge_lengtt, weight 1이상 10000 이하
    	// truck_weights 길이 1이상 10000 이하
    	// 모든 트럭의 무게 1 이상.
        int answer = 0;
        
        
        int bridges[] = new int[truck_weights.length];        
        int weights = 0;
        
        
        while(truck_weights.length != 0) {
        	
        	for(int i = 0; i < bridges.length;i++) {

        	}
        	
        	
        	answer++;
        	
        	if(true) {
        		break;
        	}
        }
        
        
        
        
        return answer;
    }
}
