import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import ControleEditora from "../../classes/controle/ControleEditora";
import Livro from "../../classes/modelo/Livro";
import Head from "next/head";
import { Menu } from "../../componente/Menu";
import styles from "../styles/Home.module.css";

export default function LivroDados() {
  const controleEditora: ControleEditora = new ControleEditora();
  const router = useRouter();
  const baseURL = "http://localhost:3000/api/livros";

  const [codEditora, setCodEditora] = useState<number>(0);
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");

  // Importa a função getEditoras do ControleEditora
  const getEditoras = controleEditora.getEditoras.bind(controleEditora);

  const opcoes = getEditoras().map((editora) => {
    return { value: editora.codEditora, text: editora.nome };
  });

  function tratarCombo(event: React.ChangeEvent<HTMLSelectElement>) {
    setCodEditora(Number(event.target.value));
  }

  async function incluir(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const autoresArray = autores.split("\n");
    const novoLivro: Livro = {
      codigo: 0,
      codEditora: codEditora,
      titulo: titulo,
      resumo: resumo,
      autores: autoresArray,
    };
    const resposta = await fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoLivro),
    });
    if (resposta.ok) {
      router.push("/LivroLista");
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Novo Livro</title>
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>Novo Livro</h1>

        <form onSubmit={incluir}>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <label htmlFor="resumo">Resumo:</label>
          <textarea
            id="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          ></textarea>

          <label htmlFor="autores">Autores:</label>
          <textarea
            id="autores"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            required
          ></textarea>

          <label htmlFor="codEditora">Editora:</label>
          <select id="codEditora" onChange={tratarCombo} required>
            {opcoes.map((editora) => (
              <option key={editora.value} value={editora.value}>
                {editora.text}
              </option>
            ))}
          </select>

          <button type="submit">Incluir</button>
        </form>
      </main>
    </div>
  );
}
