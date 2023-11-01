public class RecursionFibonacci {
    public static void main(String[] args) {
        int n = 10;
        System.out.println("Числа Фібоначчі:");
        for (int i = 0; i < n; i++) {
            System.out.print(calculateFibonacci(i) + " ");
        }
    }

    public static int calculateFibonacci(int n) {
        if (n <= 1) {
            return n; 
        } else {
            return calculateFibonacci(n - 1) + calculateFibonacci(n - 2); 
        }
    }
}
