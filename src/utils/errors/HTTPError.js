const errorResponse = {
  status: "error",
  code: "INTERNAL_SERVER_ERROR",
  message: "An internal server error occurred. Please try again later.",
};

const errorMessage = (message) => {
  switch (message) {
    case "INVALID_REQUEST":
      return {
        ...errorResponse,
        code: "INVALID_REQUEST",
        message:
          "Invalid request. Please provide all required fields: username, email, password, full_name.",
      };

    case "username must be unique":
      return {
        ...errorResponse,
        code: "USERNAME_EXISTS",
        message:
          "The provided username is already taken. Please choose a different username.",
      };

    case "email must be unique":
      return {
        ...errorResponse,
        code: "EMAIL_EXISTS",
        message:
          "The provided email is already registered. Please use a different email address.",
      };

    case "INVALID_PASSWORD":
      return {
        ...errorResponse,
        code: "INVALID_PASSWORD",
        message:
          "The provided password does not meet the requirements. Password must be at least 8 characters long and contain a mix of uppercase and lowercase letters, numbers, and special characters.",
      };

    case "INVALID_CREDENTIALS":
      return {
        ...errorResponse,
        code: "INVALID_CREDENTIALS",
        message:
          "Invalid credentials. The provided username or password is incorrect.",
      };

    case "MISSING_FIELDS":
      return {
        ...errorResponse,
        code: "MISSING_FIELDS",
        message: "Missing fields. Please provide both username and password.",
      };

    case '"age" must be greater than 1':
      return {
        ...errorResponse,
        code: "INVALID_AGE",
        message: "Invalid age value. Age must be a positive integer.",
      };

    case '"gender" must be one of [male, female, non-binary)]':
      return {
        ...errorResponse,
        code: "GENDER_REQUIRED",
        message:
          "Gender field is required. Please specify the gender (e.g., male, female, non-binary).",
      };

    // More cases can be added here as needed.

    default:
      return errorResponse;
  }
};

class HTTPError extends Error {
  constructor(message, code) {
    super(message);
    message = errorMessage(message);
    this.message = message;
    this.code = code;
  }
}

module.exports = { HTTPError, errorMessage };
