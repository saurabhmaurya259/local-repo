export default function Button({ children, type = "button", variant = "primary", disabled, className = "", ...props }) {
  const base = "w-full rounded-lg px-4 py-2.5 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600",
    secondary: "bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50 focus:ring-primary-600",
    danger: "bg-danger-600 text-white hover:bg-danger-700 focus:ring-danger-600",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}