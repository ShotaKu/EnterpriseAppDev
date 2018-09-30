package commonClasses;

public class Integer {
    public static int parseInt(String param){
        try {
            return java.lang.Integer.valueOf(param);
        } catch(NumberFormatException e) {
            return -1;
        }
    }
}
