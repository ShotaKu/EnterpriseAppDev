package commonClasses;

public class Double {
    public static double parseDouble(String param){
        try {
            return java.lang.Double.valueOf(param);
        } catch(NumberFormatException e) {
            return -1;
        }
    }
}
