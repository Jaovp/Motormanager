import ptBrMessages from 'ra-language-pt-br';
import polyglotI18nProvider from 'ra-i18n-polyglot';


const customMessages = {
    resources: {
        veiculos: {
            name: 'Veículos',
        },
        servicos: {
            name: 'Serviços', // Nome com um acento no "i"
        },
        ordensServico: {
            name: 'Ordens de serviço', 
        },
        // Outros recursos (resources) aqui
    },
                
};

const messages = {
    'pt-br': { ...ptBrMessages, ...customMessages },
};

const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'pt-br');

export default i18nProvider;
