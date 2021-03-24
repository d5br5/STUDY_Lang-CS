package complex;

public class complex {
	private double re,im;
	
	public complex(double re, double im) {
		this.re=re;
		this.im=im;
	}
	
	public complex(double re) {
		this.re=re;
		this.im=0;
	}
	
	public complex() {
		this.re=0;
		this.im=0;
	}
	
	public double real() {
		return this.re;
	}
	
	public double imag() {
		return this.im;
	}
	
	public complex add(complex that) {
		return new complex(this.re+that.real(), this.im+that.imag());
	}
	
	public complex subtract(complex that) {
		return new complex(this.re-that.real(), this.im-that.imag());
	}
	
	public boolean equals(complex that) {
		if (that==null) return false;
		if(this.re==that.real()&&this.im==that.imag()) {
			return true; 
		}else return false;
	}
	
	public static void main(String[] args) {
		complex a= new complex(5.5,5.5);
		complex b= new complex(5.5,5.5);
		
		System.out.println(a.equals(null));
	}
}
