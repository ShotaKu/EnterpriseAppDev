package app;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
    }
    public boolean assess(int score) {
        if (score >= 50 && score <= 100) {
            return true;
        } else {
            return false;
        }
    }
    public String grade(int score){
        String grade = "ERROR";
        if(0<= score && score <=24){
            grade = "F";
        }
        else if(25 <= score && score <= 49){
            grade = "C";
        }
        else if(50 <= score && score <= 74){
            grade = "B";
        }
        else if(75 <= score && score <= 100){
            grade = "A";
        }
        return grade;
    }
}
