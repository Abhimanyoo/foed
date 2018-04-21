import * as Raven from 'raven-js';

const options = {
  release: process.env.REACT_APP_GIT_VERSION,
  environment: process.env.NODE_ENV,
  ignoreUrls: [
    // Chrome extensions can cause unrelated errors
    /extensions\//i,
    /^chrome:\/\//i,
  ],
};

// It is a bit misleading that Sentry is configured immediately when loading this page,
// but otherwise it might be too late to catch some errors.
const dsn = process.env.REACT_APP_SENTRY_DSN;
if (dsn) {
  Raven.config(dsn, options).install();
}

interface User {
  id: string;
  email: string;
}

export function setSentryUserContext(user: User): void {
  let context;
  if (user.id) {
    context = {
      id: user.id,
      email: user.email,
    };
  }
  // Call with no options to reset user context
  Raven.setUserContext(context);
}
