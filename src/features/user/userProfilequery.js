export const userProfilequery = ({ auth, userId, params }) => {
    if (userId !== null) {
        return [
            {
                collection: 'users',
                doc: userId,
                storeAs: 'profile'
            },
            {
                collection: 'users',
                doc: userId,
                subcollections: [
                    { collection: 'photos' }
                ],
                storeAs: 'photos'
            },
            {
                collection: 'users',
                doc: auth.uid,
                subcollections: [
                    { collection: 'following', doc: userId }
                ],
                storeAs: 'following'
            }
        ]
    } else {
        return [
            {
                collection: 'users',
                doc: auth.uid,
                subcollections: [
                    { collection: 'photos' }
                ],
                storeAs: 'photos'
            },
            {
                collection: 'users',
                doc: auth.uid,
                subcollections: [
                    { collection: 'following' }
                ],
                storeAs: 'following'
            },
            {
                collection: 'users',
                doc: auth.uid,
                subcollections: [
                    { collection: 'followers' }
                ],
                storeAs: 'followers'
            }
        ]
    }
}