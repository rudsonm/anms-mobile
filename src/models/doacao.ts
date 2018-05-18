import { Animal } from "./animal";
import { Usuario } from "./usuario";

export class Doacao {
    Status: string;
    DataExpiracao: Date;
    DataCadastro: Date;
    DataExclusao: Date;
    Id: number;
    Ativo: boolean;
    Animal: Animal;
    Usuario: Usuario;
}