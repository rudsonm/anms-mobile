import { Doacao } from "./doacao";
import { Usuario } from "./usuario";

export class Candidatura {
    constructor(
        public Doacao: Doacao,
        public Usuario: Usuario,
        public Motivo: string
    ){}
}