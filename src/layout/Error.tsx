import * as React from 'react';
import { useEffect, useRef } from 'react'; // Import useEffect and useRef
import Button from '@mui/material/Button';
import ErrorIcon from '@mui/icons-material/Report';
import History from '@mui/icons-material/History';
import { Title, useTranslate } from 'react-admin';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useHistory

interface CustomErrorProps {
    error: Error; // Use the Error type for the error prop
    resetErrorBoundary: () => void; // Define the type of resetErrorBoundary
    // Add other props as needed
}

export const CustomErrorPage: React.FC<CustomErrorProps> = ({
    error,
    resetErrorBoundary,
    ...rest
}) => {
    const { pathname } = useLocation();
    const originalPathname = useRef<string>(pathname); // Add type annotation

    const navigate = useNavigate(); // Create a history instance

    // Effect that resets the error state whenever the location changes
    useEffect(() => {
        if (pathname !== originalPathname.current) {
            resetErrorBoundary();
        }
    }, [pathname, resetErrorBoundary]);

    const translate = useTranslate();
    return (
        <div>
            <Title title="Error" />
            <h1><ErrorIcon /> Something Went Wrong </h1>
            <div>A client error occurred and your request couldn't be completed.</div>
            {process.env.NODE_ENV !== 'production' && (
                <details>
                    {/* errorInfo is not defined in the original code */}
                    {/* <h2>{translate(error.toString())}</h2>
                    {errorInfo.componentStack} */}
                </details>
            )}
            <div>
                <Button
                    variant="contained"
                    startIcon={<History />}
                    onClick={() => navigate(-1)}
                >
                    Back
                </Button>
            </div>
        </div>
    );
};
