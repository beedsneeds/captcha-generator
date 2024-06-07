// add a handleSubmit prop
export function ButtonSubmit({
  disabledState,
  buttonText,
}: {
  disabledState: boolean;
  buttonText: string;
}) {
  return (
    <button
      type="submit"
      disabled={disabledState}
      className="rounded-md bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 disabled:bg-slate-500 ring-1 ring-inset ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {buttonText}
    </button>
  );
}

export function ButtonSecondary({buttonText} : {buttonText: string}) {
  return (
    <button
      type="reset"
      className="text-sm font-semibold leading-6 text-gray-900"
    >
      {buttonText}
    </button>
  );
}
