import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Bigger = 'bigger',
  Large = 'large',
  Small = 'small',
  Mini = 'mini'
}

export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
  Vip = 'vip',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Dark = 'dark',
  Link = 'link'
}

interface BaseButtonProps {
  className?: String;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonPrpps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonPrpps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    ...restPrpps
  } = props

  console.log(restPrpps)

  const classes = classNames('btn',className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': disabled
  })

  return (
    <button {...restPrpps} className={classes} disabled={disabled}>{children}</button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button