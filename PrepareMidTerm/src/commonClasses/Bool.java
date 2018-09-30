package commonClasses;

public class Bool {
    public static Boolean parseBool(String param){
        try {
            return java.lang.Boolean.valueOf(param);
        } catch(NumberFormatException e) {
            return false;
        }
    }
}
