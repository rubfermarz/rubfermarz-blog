import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';
import { MdError } from 'react-icons/md';
import findInputError from '../../utils/findInputError';
import isFormInvalid from '../../utils/isFormInvalid';

export interface InputProps {
  label: string;
  type: string;
  id?: string;
  autocomplete?: string;
  placeholder?: string;
  validation?: any;
  name: string;
  multiline?: boolean;
  className?: string;
}

interface InputErrorProps {
  message: string;
}

const framerError = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

function InputError({ message }: InputErrorProps): JSX.Element {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md block mb-2"
      {...framerError}
    >
      <MdError />
      {message}
    </motion.p>
  );
}

export function Input({
  name,
  label,
  type,
  id,
  placeholder,
  autocomplete,
  validation,
  multiline,
  className,
}: InputProps): JSX.Element {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  const inputTailwind = 'w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300';

  return (
    <div className={cn('flex flex-col w-full gap-2', className)}>
      <div className="flex justify-between">
        <label htmlFor={id} className="block mb-2 text-indigo-500">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && <InputError message={inputErrors.error.message} key={inputErrors.error.message} />}
        </AnimatePresence>
      </div>
      {multiline ? (
        <textarea
          id={id}
          className={cn(inputTailwind, 'min-h-[10rem] max-h-[20rem] resize-y')}
          placeholder={placeholder}
          {...register(`${name}`, validation)}
          disabled={isSubmitting}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={cn(inputTailwind)}
          placeholder={placeholder}
          autoComplete={autocomplete}
          {...register(name, validation)}
          disabled={isSubmitting}
        />
      )}
    </div>
  );
}
