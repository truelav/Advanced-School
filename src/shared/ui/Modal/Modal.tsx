import React, { ReactNode } from 'react';
import {classNames} from 'shared/lib/classNames/classNames'

import cls from './Modal.module.scss'

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}


export const Modal = (props: ModalProps) => {
    const {className, children, isOpen, onClose} = props
    
    const closeHandler = () => {
        if(onClose){
            onClose
        }
    }

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const mods: Record<string, boolean> = {
        [cls.opened] : isOpen
    }

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={onClose}>
                <div className={cls.content} onClick={onContentClick}>
                    <button >Close</button>
                    {children}
                </div>
            </div>
        </div>
    )
}