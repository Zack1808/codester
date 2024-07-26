import React from "react";
import { LinkProps } from "react-router-dom";

export type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  to?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<LinkProps>;

export type InputProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type SearchProps = {
  placeholder?: string;
} & React.FormHTMLAttributes<HTMLFormElement>;

export type SelectProps = {
  label?: string;
  options?: { label: string; value: string }[];
  initialValue?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type TextareaProps = {
  label?: string;
  resize?: "none" | "both" | "horizontal" | "vertical";
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type SliderProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type PreviewProps = {
  html: string;
  css: string;
  js: string;
  zoom?: number;
};

export type NoteCardProps = {
  info: {
    id: string;
    html: string;
    css: string;
    js: string;
    userName: string;
    title: string;
    userImage: string;
    likedBy: string[];
    comments: string[];
  };
};

export type UserCardProps = {
  userSnippet: {
    uid: string;
    imgUrl: string;
    userName: string;
    notesAmount: number;
    followedBy: string[];
  };
};

export type CodeEditorProps = {
  code: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  displayName: string;
  language: string;
  lineWrap?: boolean;
};

export type HorizontalResizeProps = React.HTMLAttributes<HTMLDivElement>;
