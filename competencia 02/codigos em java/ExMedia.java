/**
 *  Competência 2 | Estruturas para controle de fluxo
 *  Exemplo 01 - função que calcula uma média
 */
public class ExMedia {
    public static void calculaMedia(float nota1, float nota2, String nome) {
        
        float media = (nota1 + nota2)/2;

        if(media >= 7) {
            System.out.println(nome + "foi aprovado!!");
        } else if (media >= 3 && media < 7) {
            System.out.println(nome + "está em recuperação!");
        } else {
            System.out.println(nome + "está em reprovado!");
        }
        System.out.println(nome + "Obteve média: " + media);
    }
}