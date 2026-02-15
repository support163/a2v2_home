interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  fallback?: string;
  className?: string;
}

const sizes = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
};

export function Avatar({
  src,
  alt,
  size = "md",
  fallback,
  className = "",
}: AvatarProps) {
  const initials =
    fallback ||
    alt
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`rounded-infinite object-cover ${sizes[size]} ${className}`}
      />
    );
  }

  return (
    <div
      className={`rounded-infinite bg-accent-100 text-accent-700 flex items-center justify-center font-semibold ${sizes[size]} ${className}`}
      role="img"
      aria-label={alt}
    >
      {initials}
    </div>
  );
}
