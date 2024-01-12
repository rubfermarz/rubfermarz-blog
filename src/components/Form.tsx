import './Form.css';

interface Props {
  action?: string;
  children: React.ReactNode;
  error?: string | null;
  onSubmit: (data: FormData) => void;
}

function Form({ action, children, error, onSubmit }: Props): JSX.Element {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const isValid = formElement.checkValidity();

    formElement.classList.add('submitted');

    const firstInvalidField = formElement.querySelector(':invalid') as HTMLInputElement;

    firstInvalidField?.focus();

    if (isValid) {
      const dataObject = new FormData(formElement);
      onSubmit(dataObject);
    }
  };

  return (
    <form action={action} onSubmit={handleSubmit} noValidate className="form">
      <div className="wrapper">
        {children}
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
}

export default Form;
