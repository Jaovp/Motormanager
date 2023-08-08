import { RaRecord } from "react-admin";

export interface Servico extends RaRecord {
    nome: string;
    valor: number;  
}