export class SolicitudAsesoriaEspecial{
    constructor(
        public solicitudFechaAsesoria: Date,
        public solicitudAsesoriaDescripcion: string,
        public cotrato_id:number,
        public solicitudAsesoriaTipoEspecial: number
    ){}
}