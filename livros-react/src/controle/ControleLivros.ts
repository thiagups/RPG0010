import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
    new Livro(1, 1, "A Garota no Trem", "Rachel pega o trem para Londres todos os dias. Ela passa por uma casa onde morava com seu ex-marido, que agora está com a nova esposa. Rachel cria um mundo de fantasias em torno de um casal que ela vê numa casa vizinha e, um dia, vê algo chocante acontecer lá. No dia seguinte, a mulher desse casal está desaparecida, e Rachel teme ter testemunhado uma cena de crime.", ["Paula Hawkins"]),
    new Livro(2, 2, "O Código Da Vinci", "O professor de simbologia Robert Langdon é chamado para investigar o assassinato de um curador do museu do Louvre em Paris. O professor descobre que a vítima deixou pistas sobre um mistério que envolve o Priorado de Sião e a vida de Jesus Cristo.", ["Dan Brown"]),
    new Livro(3, 3, "A Menina que Roubava Livros", "A história se passa na Alemanha nazista e é narrada pela Morte. Liesel Meminger é uma jovem que vive em uma família adotiva e descobre o amor pelos livros roubando-os para ler. Ela passa a dividir a biblioteca secreta com Max, um judeu que os pais adotivos escondem em casa.", ["Markus Zusak"])
];

class ControleLivro {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(livro: Livro): void {
        const codigo = livros.reduce((max, livro) => livro.codigo > max ? livro.codigo : max, 0) + 1;
        livro.codigo = codigo;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const indice = livros.findIndex(livro => livro.codigo === codigo);
        if (indice >= 0) {
            livros.splice(indice, 1);
        }
    }
}

export default ControleLivro;
    