import { Carro } from "./carro.js";

export class transacao{
    constructor(
                private _data:Date, 
                private _endereco:string, 
                private _veiculo:Carro,
                private _valor_atual:number,
                private _status:string
            ){}
}