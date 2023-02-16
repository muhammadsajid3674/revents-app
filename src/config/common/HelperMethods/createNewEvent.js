export const createNewEvent = (user, photoURL, event) => {
    return {
        ...event,
        hostUid: user.uid,
        hostedBy: user.displayName,
        hostPhotoURL: photoURL,
        created: new Date(),
        attendees: {
            [user.uid]: {
                isGoing: true,
                joinDate: new Date(),
                photoURL: photoURL,
                displayName: user.displayName,
                host: true
            }
        }
    }
}