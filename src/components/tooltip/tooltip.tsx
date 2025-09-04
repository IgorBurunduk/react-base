interface TooltipProps {
  text: string;
  icon?: string;
}

export const Tooltip = ({ text, icon = 'i' }: TooltipProps) => {
  return (
    <span>
      {icon} {text}
    </span>
  );
};
