export const getIdFromPath = () => {
    let parts = window.location.pathname.split('/');
    let pathId = parts.pop() || parts.pop();
    return pathId;
}
