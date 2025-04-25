import styles from "./SobreMim.module.css";
import PostModelo from "@/componentes/PostModelo";
import fotoCapa from "@/assets/sobre_mim_capa.png";
import fotoSobreMim from "@/assets/sobre_mim_foto.jpeg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o famoso Asdrubal!</h3>
      <img
        src={fotoSobreMim}
        alt="foto do asdrubal"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Desde muito jovem, sempre fui movido pela vontade de conquistar minhas
        próprias coisas tanto que comecei a trabalhar aos 15 anos para ter
        independência e comprar o que desejava com o meu próprio esforço. Esse
        senso de responsabilidade me acompanhou desde cedo e moldou muito da
        pessoa que sou hoje. Nos momentos de folga, gostava mesmo era de estar
        com os amigos. Reuníamos a turma para conversar, rir das coisas do dia a
        dia e beber uma boa Coca-Cola gelada, criando memórias simples, mas
        valiosas. Às vezes, a diversão era ir ao cyber café, onde a empolgação
        tomava conta a cada partida de jogos online. Ficávamos horas conectados,
        não só aos computadores, mas também uns aos outros, em amizades que
        cresciam a cada clique e estratégia compartilhada. Também éramos grandes
        fãs de RPG de mesa. Criávamos mundos, personagens e histórias, e
        mergulhávamos em aventuras que exigiam criatividade, trabalho em equipe
        e imaginação algo que, sem dúvida, contribuiu para meu gosto por
        projetos colaborativos e pelo pensamento fora da caixa. E claro, como
        ninguém vive só de tela e dados, dançar também fazia parte da nossa
        rotina. A gente se jogava na música sem medo de ser feliz, celebrando a
        vida e a juventude.
      </p>
      <p className={styles.paragrafo}>No ensino médio, ... </p>
      <p className={styles.paragrafo}>A trajetória ... </p>
      <p className={styles.paragrafo}>Hoje, ... </p>
    </PostModelo>
  );
}
