import { defaultTheme } from 'react-admin';


export const darkTheme = {
    palette: {
        primary: {
            main: '#62B6CB',
        },
        secondary: {
            main: '#62B6CB',
        },
        mode: 'dark' as 'dark',
    },
    sidebar: {
        width: 200,
    
    },
    typography: {
        fontFamily: 'Raleway, Arial',
      },
    components: {
        ...defaultTheme.components,
        RaMenuItemLink: {
            styleOverrides: {
                root: {
                    borderLeft: '3px solid #000',
                    '&.RaMenuItemLink-active': {
                        borderLeft: '3px solid #62B6CB',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                colorSecondary: {
                    color: '#1B4965',
                    backgroundColor: '#62B6CB',
                },
            },
        },
    },
};

export const lightTheme = {
    palette: {
        primary: {
            main: '#5FA8D3',
        },
        secondary: {
            light: '#5f5fc4',
            main: '#283593',
            dark: '#001064',
            contrastText: '#fff',
        },
        background: {
            default: '#fcfcfe',
        },
        mode: 'light' as 'light',
    },
    shape: {
        borderRadius: 1,
    },
    sidebar: {
        width: 200,
    },
    typography: {
        fontFamily: 'Raleway, Arial',
      },
    components: {
        ...defaultTheme.components,
        RaMenuItemLink: {
            styleOverrides: {
                root: {
                    borderLeft: '3px solid #fff',
                    '&.RaMenuItemLink-active': {
                        borderLeft: '3px solid #5FA8D3',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                elevation1: {
                    boxShadow: 'none',
                },
                root: {
                    border: '1px solid #e0e0e3',
                    backgroundClip: 'padding-box',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                colorSecondary: {
                    color: '#5FA8D3',
                    backgroundColor: '#CAE9FF',
                },
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: '#f5f5f5',
                },
                barColorPrimary: {
                    backgroundColor: '#d7d7d7',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:last-child td': { border: 10 },
                },
            },
        },
    },
};