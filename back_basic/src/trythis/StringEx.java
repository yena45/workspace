package trythis;

public class StringEx {
	public static void main(String[] args) {
		StringBuffer sb = new StringBuffer("this");
		System.out.println(sb.hashCode());

		sb.append(" is a pencil");
		sb.insert(7, " my");
		sb.delete(10, 12);
		System.out.println("sb =" + "012345679".repeat(3));
		System.out.println(sb.toString());

		System.out.println("sb.toString() = " + sb.toString());
	}
}
