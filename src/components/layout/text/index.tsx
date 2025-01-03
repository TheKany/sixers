import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: number;
  height?: number;
  color?: string;
  variant: keyof typeof variants;
  style?: React.CSSProperties;
}

interface TextProps {
  children: React.ReactNode;
  type: "p" | "span" | "a" | "title";
  href?: string;
  fontSize?: number;
  color?: string;
  style?: React.CSSProperties;
}

const variants = {
  default: {
    color: "#fff",
    backgroundColor: "#7661FB",
    border: "none",
  },
  warning: {
    color: "#fff",
    backgroundColor: "#FF1E1E",
    border: "none",
  },
  disabled: {
    color: "#636A64",
    backgroundColor: "#F1F1F1",
    border: "none",
  },
  clicked: {
    color: "#636A64",
    backgroundColor: "#fff",
    border: "1px solid #7661FB",
  },
  kakao: {
    color: "#191919",
    backgroundColor: "#FFDC00",
    border: "none",
  },
};

export function Button({
  children,
  height,
  color,
  variant = "default",
  style,
}: ButtonProps) {
  return (
    <StyledButton
      color={color || variants[variant].color}
      variant={variant}
      height={height}
      style={style}
    >
      {children}
    </StyledButton>
  );
}

export function Text({
  children,
  type,
  href,
  fontSize,
  color,
  style,
}: TextProps) {
  const commonProps = { fontSize, color, style };

  switch (type) {
    case "p":
      return <StyledP {...commonProps}>{children}</StyledP>;
    case "span":
      return <StyledSpan {...commonProps}>{children}</StyledSpan>;
    case "a":
      return (
        <StyledLink {...commonProps} href={href}>
          {children}
        </StyledLink>
      );
    case "title":
      return <StyledTitle {...commonProps}>{children}</StyledTitle>;
    default:
      return <StyledP {...commonProps}>text-type 설정 해주세요</StyledP>;
  }
}

const sharedTextStyles = css<{ fontSize?: number; color?: string }>`
  font-size: ${(props) => `${props.fontSize || 16}px`};
  line-height: ${(props) => `${(props.fontSize || 16) * 1.5}px`};
  color: ${(props) => props.color};
`;

const StyledButton = styled.button<ButtonProps>`
  ${sharedTextStyles}
  width: 100%;
  height: ${(props) => `${props.height}px`};
  border-radius: 12px;
  background-color: ${(props) => variants[props.variant].backgroundColor};
  outline: ${(props) => variants[props.variant].border};
`;

const StyledP = styled.p<{ fontSize?: number }>`
  ${sharedTextStyles}
`;

const StyledSpan = styled.span<{ fontSize?: number }>`
  ${sharedTextStyles}
`;

const StyledLink = styled.a<{ fontSize?: number }>`
  ${sharedTextStyles}
`;

const StyledTitle = styled.h1<{ fontSize?: number }>`
  ${sharedTextStyles}
  font-family: "Jua";
`;
