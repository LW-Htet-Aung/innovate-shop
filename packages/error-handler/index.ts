export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly details: any;

  constructor(
    message: string,
    statusCode: number,
    isOperational = true,
    details?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;
    Error.captureStackTrace(this);
  }
}

// Not Found error
export class NotFoundError extends AppError {
  constructor(message = 'Resources Not Found') {
    super(message, 404);
  }
}

// validation error (use for joi/zod/react-hook-form validation errors)

export class validationError extends AppError {
  constructor(message = 'Invalid request data', details?: any) {
    super(message, 400, true, details);
  }
}

// Authentication error
export class AuthError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

//  Forbidden Error (For Insufficient Permission)
export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden') {
    super(message, 403);
  }
}

// Database Error (MongoDB/Postgres Errors)
export class DatabaseError extends AppError {
  constructor(message = 'Database Error', details?: any) {
    super(message, 500, true, details);
  }
}

// Rate Limit Error (If user exceeds API limits)
export class RateLimitError extends AppError {
  constructor(message = 'Too many requests, please try again later') {
    super(message, 429);
  }
}
