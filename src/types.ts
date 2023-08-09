import { RaRecord } from "react-admin";

export type tipoCliente = 'fisico' | 'juridico';

export interface Cliente extends RaRecord {
    nome: string;
    email: string;
    telefone: string;
    tipo: tipoCliente;
    doc: string;
}

export interface Servico extends RaRecord {
    nome: string;
    valor: number;
}

export interface Veiculo extends RaRecord {
    placa: string;
    cor: string;
    modelo: string;
    ano: number;
    clienteId: Cliente['id'];
}
