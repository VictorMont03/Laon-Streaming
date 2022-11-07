export function Button({
  backgroundColor,
  textColor,
  type,
  identifier,
  content,
  ...props
}) {
  return (
    <button
      className={`tw-w-[100%] tw-text-[15px] tw-h-[55px] tw-cursor-pointer tw-my-[15px] tw-flex tw-items-center tw-justify-center tw-bg-white hover:tw-bg-transparent hover:tw-border-[1px] hover:tw-border-lightPink hover:tw-text-lightPink`}
      type={type}
      {...props}
      id={identifier}
    >
      {content}
    </button>
  );
}
