public class Main {
  public static void main(String[] args) {

    uzumaki naruto = new uzumaki();

    naruto.setNome("naruto uzumaki");
    naruto.temBiju = true;
    naruto.getNome();
    System.out.println(naruto.getNome());
    naruto.ataqueBase();

    naruto.chacraInfinito();

    naruto.estilo = "vento";

    // obj 2
    uchiha sasuke = new uchiha();

    sasuke.estilo = "fogo";

    sasuke.ataqueBase();

    sasuke.ataqueBase(0);

  }
}
