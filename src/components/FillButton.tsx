import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const variants = {
  "black-white": "fill-btn-black-white",
  "white-orange": "fill-btn-white-orange",
  "orange-white": "fill-btn-orange-white",
  "white-black": "fill-btn-white-black",
  "black-orange": "fill-btn-black-orange",
  "orange-black": "fill-btn-orange-black",
} as const;

export type FillButtonVariant = keyof typeof variants;

type Shared = {
  variant: FillButtonVariant;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = Shared &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & { href: string };

type NativeButtonProps = Shared &
  Omit<ComponentProps<"button">, "className" | "children"> & { href?: undefined };

function faces(children: ReactNode) {
  return (
    <>
      <span className="fill-btn__face">{children}</span>
      <span className="fill-btn__face fill-btn__face-hover" aria-hidden="true">
        {children}
      </span>
    </>
  );
}

export function FillButton(props: LinkButtonProps | NativeButtonProps) {
  const classes = `fill-btn inline-flex items-center justify-center font-semibold ${variants[props.variant]} ${props.className ?? ""}`;
  const content = faces(props.children);

  if (props.href != null) {
    const {
      href,
      variant: _variant,
      className: _className,
      children: _children,
      ...linkProps
    } = props;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  const {
    variant: _variant,
    className: _className,
    children: _children,
    href: _href,
    ...buttonProps
  } = props;

  return (
    <button className={classes} type="button" {...buttonProps}>
      {content}
    </button>
  );
}
