export class Animal {
    constructor(
        public name:string,
        public specie:string,
        public description:string,
        public birth?:Date,
        public weight?:number,
        public photos?:Array<string>
    ) {}
}