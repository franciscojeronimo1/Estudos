public class uchiha extends ninja {

  public void sharingaAtivado() {
    System.out.println("sharingan ativado");
  }

  @Override
  public void ataqueBase() {
    System.out.println("joguei uma kunai do elemento fogo");
  }

  public void ataqueBase(int nivelDeChacra) {
    if (nivelDeChacra > 2) {
      System.out.println("Susano ativado");
    } else if (nivelDeChacra < 1) {
      System.out.println("Eu só consegui ativar o sharingan");
    } else {
      System.out.println("Eu to sem chacra");
    }
  }
}
