import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
    new Editora(1, "Companhia das Letras"),
    new Editora(2, "Record"),
    new Editora(3, "Intrínseca")
];

class ControleEditora {
    getEditoras(): Array<Editora> {
        return editoras;
    }

    getNomeEditora(codEditora: number): string | undefined {
        const editora = editoras.filter(editora => editora.codEditora === codEditora);
        return editora[0] ? editora[0].nome : undefined;
    }
}

export default ControleEditora;
