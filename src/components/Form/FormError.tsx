interface FormErrorProps {
  error: string | null;
  translationFile: any;
}

function FormError({ error, translationFile }: Readonly<FormErrorProps>): JSX.Element {
  let errorText: string | null = null;

  if (error) {
    errorText = translationFile[error]?.message;
  }

  return (
    <div>
      {errorText && (
        <div className="w-full inline-flex items-center justify-center p-2 mb-2 bg-red-200 rounded border-solid border-red-400 border-2">
          <p>{errorText}</p>
        </div>
      )}
    </div>
  );
}

export default FormError;
