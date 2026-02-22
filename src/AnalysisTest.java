
public class AnalysisTest {
    // Bug: empty catch block
    public void riskyMethod() {
        try {
            String s = null;
            int len = s.length(); // NullPointerException
        } catch (Exception e) {
            // swallowed exception - PMD will flag this
        }
    }
    
    // Bug: return inside finally
    public int finallyReturn() {
        try {
            return 1;
        } finally {
            return 2; // PMD: ReturnFromFinallyBlock
        }
    }
    
    // Code smell: overly complex method
    public String classify(int x) {
        if (x > 100) { return "high"; }
        else if (x > 50) { return "medium"; }
        else if (x > 25) { return "low-medium"; }
        else if (x > 10) { return "low"; }
        else { return "very-low"; }
    }
}
  