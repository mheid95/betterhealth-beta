import * as React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** This interface extends HTMLInputElement attributes without adding new properties */
  _?: never
}

declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>

export { Input } 