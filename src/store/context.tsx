import { ModalProps } from 'antd';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GeneralFace {
    theme: string;
    language: string;
    [key: string]: any; // Add more settings as needed
}

interface ModalsProps {
    login: boolean;
    signup: boolean;
    [key: string]: any;
}

interface ContextProps {
    settings: GeneralFace;
    updateSettings: (newSettings: Partial<GeneralFace>) => void;
    modals: ModalsProps,
    updateModals: (update: Partial<ModalProps>) => void;
}

const GeneralProvider = createContext<ContextProps | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<GeneralFace>({
        theme: 'light',
        language: 'en',
    });
    const [modals, setModals] = useState({
        login: false,
        signup: false
    })

    const updateModals = (update: ModalsProps) => {
        setModals((prev) => ({ ...prev, ...update }));
    };

    const updateSettings = (newSettings: Partial<GeneralFace>) => {
        setSettings((prevSettings) => ({ ...prevSettings, ...newSettings }));
    };

    return (
        <GeneralProvider.Provider value={{ settings, updateSettings, modals, updateModals }}>
            {children}
        </GeneralProvider.Provider>
    );
};

export const useContextProvider = (): ContextProps => {
    const context = useContext(GeneralProvider);
    if (!context) {
        throw new Error('useGeneralSettings must be used within a GeneralSettingsProvider');
    }
    return context;
};
