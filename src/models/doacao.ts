import { Animal } from "./animal";
import { Usuario } from "./usuario";

export class Doacao {
    constructor(
        public Usuario: Usuario,
        public Animal: Animal,
        public Status?: string,
        public DataExpiracao?: Date,
        public DataCadastro?: Date,
        public DataExclusao?: Date,
        public Id?: number,
        public Ativo?: boolean      
    ) { }
}