export const createDataTree = dataset => {
    let hashTable = Object.create(null);
    dataset.forEach(a => hashTable[a.id] = { ...a, childNodes: [] });
    let dataTree = [];
    dataset.forEach(a => {
        if (a.parentId) hashTable[a.parentId].childNodes.push(hashTable[a.id]);
        else dataTree.push(hashTable[a.id])
    });
    return dataTree;
}
