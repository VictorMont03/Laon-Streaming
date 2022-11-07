export function Base({
  slug,
  label,
  isRequired,
  isErrored,
  errorMessage,
  children,
}) {
  return (
    <div className=" tw-my-[15px] tw-w-[100%] tw-bg-transparent tw-text-white tw-placeholder-white tw-font-light tw-border-[1px] tw-border-lightPurple tw-text-lightPink tw-rounded-[10px] desktop:tw-w-[430px] mobile:tw-w-[300px]">
      {children}
      {isErrored && <span className="tw-text-red">{errorMessage}</span>}
    </div>
  );
}
