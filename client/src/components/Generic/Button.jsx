const Button = ({
  type = "secondary",
  size = "base",
  label,
  Icon,
  iconClass,
  buttonClassName = "",
}) => {
  let buttonClass =
    type === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600 shadow-lg"
      : type === "secondary"
      ? "border border-blue-500 hover:border-blue-600 shadow-lg"
      : "";

  let buttonSize =
    size === "lg"
      ? "text-sm md:text-base xl:text-lg font-bold px-6 md:px-6 xl:px-8 py-3 md:py-3 xl:py-4"
      : size === "base"
      ? "text-sm lg:text-base font-semibold px-6 py-3"
      : size === "sm"
      ? "text-xs xl:text-sm font-semibold px-6 py-3"
      : "";

  return (
    <div
      className={`rounded-lg transition-all duration-500 ease-in-out cursor-pointer ${buttonClass} ${buttonSize} ${buttonClassName}`}
    >
      {label || (Icon && <Icon className={iconClass} />)}
    </div>
  );
};

export default Button;
