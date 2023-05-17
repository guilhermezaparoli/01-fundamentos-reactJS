import { Header } from "./Components/Header";
import { Post } from "./Components/Post";
import styles from "./App.module.css";
import { Sidebar } from "./Components/Sidebar";

import "./styles.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure expedita enim placeat pariatur consequatur, repellendus reprehenderit? Mollitia modi reprehenderit dolor in! A, est. Quasi, autem cupiditate? Laboriosam, eius obcaecati."
          />

          <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
