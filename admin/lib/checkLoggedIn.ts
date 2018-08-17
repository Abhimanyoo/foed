import gql from 'graphql-tag';

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query currentUser {
          currentUser {
            id
            name
            email
            employments {
              id
            }
          }
        }
      `,
    })
    .then(({ data }) => {
      return { currentUser: data.currentUser };
    })
    .catch(() => {
      return { currentUser: {} };
    });
