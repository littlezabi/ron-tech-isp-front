
import { Icon } from "@iconify-icon/react";
import { Modal } from "antd";
import React from "react";
import Login from '../pages/login/index'
import SignUp from '../pages/regsiter/index'
import { useContextProvider } from "../store/context";
import { Flex, Radio } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';


const options: CheckboxGroupProps<string>['options'] = [
    { label: <img src="/icons/flutterwave.png" className="h-[30px]" alt="" />, value: 'flutterwave',  },
    //   { label: <SelectPayment />, value: 'oneway'},
];

const ModalHub = () => {
    const { modals, updateModals } = useContextProvider();

    return <div>
        <Modal
            className="custom-modal"
            open={false}
            keyboard={true}
            centered={true}
            onCancel={() => updateModals({ login: false })}
            okButtonProps={{ hidden: true }}
            cancelButtonProps={{ hidden: true }}
            styles={{ body: { backgroundColor: "black", color: "white" } }}
            closeIcon={<Icon icon="mdi:close" style={{ color: "white" }} />}
        >

            <div className="py-3 px-4">
                <h1 className="mb-6 font-semibold text-center text-lg">Select your payment method</h1>
                <Flex vertical gap="middle">
                    <Radio.Group block options={options} defaultValue="flutterwave" />
                </Flex>
            </div>
        </Modal>
        {modals.login && (
            <Modal
                style={{ top: 20 }}
                className="custom-modal"
                open={modals.login}
                keyboard={true}
                centered={true}
                onCancel={() => updateModals({ login: false })}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
                styles={{ body: { backgroundColor: "black", color: "white" } }}
                closeIcon={<Icon icon="mdi:close" style={{ color: "white" }} />}
            >
                <Login />
            </Modal>
        )}

        {modals.signup && (
            <Modal
                style={{ top: 20 }}
                className="custom-modal"
                open={modals.signup}
                keyboard={true}
                centered={true}
                onCancel={() => updateModals({ signup: false })}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
                styles={{ body: { backgroundColor: "black", color: "white" } }}
                closeIcon={<Icon icon="mdi:close" style={{ color: "white" }} />}
            >
                <SignUp />
            </Modal>
        )}
    </div>
}
export default ModalHub;
