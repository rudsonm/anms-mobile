export class Animal {
    constructor(        
        public Nome?:string,
        public Especie?:string,
        public Descricao?:string,
        public Id?:number,
        public Ativo?:boolean,
        public Filo?:string,
        public DataNascimento?:Date,
        public Peso?:number,
        public Fotos?:number[],
        public DataCadastro?:Date,
        public DataModificacao?:Date,
        public DataExclusao?:Date
    ) {}
}