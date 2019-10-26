export class Contrato {
    constructor(
        public CONTRATO_ID: number,
        public CONTRATO_DESCRIPCION: string,
        public CONTRATO_FECHA_INICIO:Date,
        public CONTRATO_FECHA_FIN:Date,
        public CANT_CAPATICACION:number,
        public CANT_ASESORIA:number,
        public CONTRATO_ACTIVO:number, 
        public CLIENTE_ID:number
    ){}
}