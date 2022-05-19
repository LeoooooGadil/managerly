import React from "react";
import { IconType } from "react-icons";

export interface IPrimaryButton {
    text: string;
    onClick: () => void;
}

export interface IIconButton {
    size?: number;
    icon: IconType;
    href?: string;
    onClick?: () => void;
}

export interface ISelect {
    placeholder?: string;
    options: any;
    onChange?: (value: string) => void;
    value?: string;
    components?: React.ReactComponentElement<any>;    
}

export interface ISidebarLayout {
    children: React.ReactNode;
    title: string;
}

export interface ILoggedInLayout {
    children: React.ReactNode;
}

export interface ISidebarTitle {
    title: string;
}

export interface ISubTitle {
    text: string;
}

export interface  ISideBarListLayout {
    list: any[];
    icon?: IconType;
}

export interface ISideBarListItem {
    text: string;
    icon?: IconType;
}

export interface IController {
    children: React.ReactNode;
}