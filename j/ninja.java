public class ninja {
  private String nome;
  String aldeia;
  int idade;
  String estilo;

  /* Getter - criar getter para mostrar para o usuario */

  public String getNome() {
    return nome;
  }

  /* Setter - setar o valor da variavel */
  public void setNome(String nome) {
    this.nome = nome;
  }

  public void ataqueBase() {
    System.out.println("joguei uma kunai");
  }
}
