export class BadRequestError extends Error {
  constructor(message = 'Invalid request') {
    super(message);
  }
}

export class ServerError extends Error {
  constructor(message = 'Server error') {
    super(message);
  }
}

export class NotFoundError extends Error {
  constructor(message = 'Resource could not be found') {
    super(message);
  }
}
