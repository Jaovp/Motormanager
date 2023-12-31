import { Identifier, RaRecord } from 'react-admin';

export type tipoCliente = 'fisico' | 'juridico';

export interface Cliente extends RaRecord {
    cliente_id: Identifier;
    nome: string;
    email: string;
    telefone: string;
    tipo: tipoCliente;
    doc: string;
}

export interface Servico extends RaRecord {
    servico_id: Identifier;
    nome: string;
    valor: number;
}

export interface Veiculo extends RaRecord {
    veiculo_id: Identifier;
    placa: string;
    cor: string;
    modelo: string;
    ano: number;
    cliente_id: Cliente['cliente_id'];
}


export interface OrdemServico extends RaRecord {
    ordemServico_id: Identifier;
    dataSolicitacao: Date;
    dataEntrega: Date;
    status: string;
    veiculo_id: Veiculo['veiculo_id'];
    servicos_id: Servico['servico_id'][];
    orcamento: number;
}