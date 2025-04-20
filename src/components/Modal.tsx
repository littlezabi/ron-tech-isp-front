import React from 'react';
import { Modal as AntModal } from 'antd';

interface AppProps {
    children: React.ReactNode;
    title: string;
    open: boolean;
    setOpen: () => void;
    onOk: () => void;
    onCancel: () => void;
    loading: boolean;
    confirmLoading?: boolean;
}


const Modal: React.FC<AppProps> = ({ children, title, onOk, onCancel, loading }) => {
    return (
        <>
            <AntModal
            title={title}
                open={true}
                onOk={onOk}
                confirmLoading={loading}
                onCancel={onCancel}
            >
                {children}
            </AntModal>
        </>
    );
};

export default Modal;
