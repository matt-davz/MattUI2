import {MouseEventHandler} from 'react';

export interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: MouseEventHandler<HTMLButtonElement>; // this decalres the type of the onClick prop which is MouseEventHandler from react which is a function that takes a mouse event and returns void
}