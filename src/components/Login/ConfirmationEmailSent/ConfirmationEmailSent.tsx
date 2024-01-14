import { MdMarkEmailUnread } from 'react-icons/md';

interface Props {
  email: string;
  handleBack: any;
}

function ConfirmationEmailSent({ email, handleBack }: Props): JSX.Element {
  return (
    <div className="w-full max-w-md m-auto bg-indigo-100 rounded p-5">
      <header className="justify-center inline-flex w-full">
        <MdMarkEmailUnread className="text-8xl text-indigo-500" />
      </header>
      <div className="justify-center inline-flex w-full">
        <h1 className="text-2xl text-indigo-500">Confirmation Email Sent To:</h1>
      </div>
      <div className="justify-center inline-flex w-full mt-6 mb-6">
        <p className="text-xl text-indigo-500">{email}</p>
      </div>
      <div className="justify-center inline-flex w-full">
        <p className="text-indigo-500 text-sm">Please check your email for a confirmation link.</p>
      </div>
      <div className="mt-5">
        <button
          className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4 rounded"
          type="button"
          onClick={handleBack}
        >
          Back to login
        </button>
        <button
          className="w-full bg-white border-solid hover:bg-gray-100 text-black font-bold py-2 px-4 mb-2 rounded inline-flex items-center justify-center gap-2"
          type="button"
        >
          Go to home
        </button>
      </div>
    </div>
  );
}

export default ConfirmationEmailSent;
