// TODO: perhaps there should be a quick `assert` checking
// these three properties actually exist
export function getDisplayName(user: any) {
  return user.name || user.email;
}

export function isNotAuthenticatedError(error: any) {
  if (error.graphQLErrors) {
    return error.graphQLErrors.find(err => err.message === 'Not authorized');
  }
  return false;
}
