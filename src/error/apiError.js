class ApiError extends Error {
  status;
  errors;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static unauthorizedError() {
    return new ApiError(401, "User is not logged in")
  }

  static badRequests(message, errors = []) {
    return new ApiError(404, message, errors);
  }


}

export default ApiError;
