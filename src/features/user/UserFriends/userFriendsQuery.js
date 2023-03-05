export const userFriendQuery = (auth) => {
    return [
        {
          collection: 'users',
          doc: auth.uid,
          subcollections: [
            { collection: 'followers' },
          ],
          storeAs: 'followers',
        },
        {
          collection: 'users',
          doc: auth.uid,
          subcollections: [
            { collection: 'following' },
          ],
          storeAs: 'following',
        },
      ]
}