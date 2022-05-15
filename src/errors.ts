class DivError extends Error {
  errorCode: number;

  constructor(errorCode: number, message = _getErrorMessage(errorCode)) {
    super(message);
    this.errorCode = errorCode;
  }
}

const _errorMessages = {
  102: "Could not load the palette, file not found.",
};

function _getErrorMessage(errorCode: number) {
  const errorMessage = _errorMessages[errorCode];
  if (errorMessage) {
    return errorMessage;
  }
  return "Unknown error";
}

export { DivError };
