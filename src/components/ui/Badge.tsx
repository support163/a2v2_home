interface BadgeProps {
  label: string;
  variant?: "purple" | "blue" | "green" | "amber";
  className?: string;
}

const variantStyles = {
  purple: "bg-purple-100 text-purple-700",
  blue: "bg-accent-100 text-accent-700",
  green: "bg-success-100 text-success-700",
  amber: "bg-amber-100 text-amber-700",
};

export function Badge({ label, variant = "blue", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-infinite text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
