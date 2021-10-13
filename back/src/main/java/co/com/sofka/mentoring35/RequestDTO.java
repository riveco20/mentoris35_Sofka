package co.com.sofka.mentoring35;


public class RequestDTO {
    private String list;
    private Integer numberInitial;
    private  Integer numberFinal;

    public String getList() {
        return list;
    }

    public Integer getNumberFinal() {
        return numberFinal;
    }

    public void setNumberFinal(Integer numberFinal) {
        this.numberFinal = numberFinal;
    }

    public Integer getNumberInitial() {
        return numberInitial;
    }

    public void setNumberInitial(Integer numberInitial) {
        this.numberInitial = numberInitial;
    }

    public void setList(String list) {
        this.list = list;
    }


}
