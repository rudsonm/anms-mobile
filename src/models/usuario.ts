export class Usuario {
    public Id: number;
    public Ativo: boolean;
    public Nome: string;
    public Apelido: string;
    public Tipo: string;
    public Email: string;
    public Senha: string;
    public SenhaExpirada: boolean;
    public SuperAdmin: boolean;
    public CpfCnpj: string;
    public DataCadastro: Date;
    public DataModificacao: Date;
    public DataExclusao: Date;
}