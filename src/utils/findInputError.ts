function findInputError(errors: any, name: string): { error: { message: string; ref: string; type: string } } {
  return Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => Object.assign(cur, { error: errors[key] }), {}) as {
    error: { message: string; ref: string; type: string };
  };
}

export default findInputError;
