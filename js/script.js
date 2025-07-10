'use strict';

function findValuesByKey(obj, targetKey) {
    const result = [];

    function search(current) {
        if (Array.isArray(current)) {
            for (const item of current) {
                search(item);
            }
        } else if (typeof current === 'object' && current !== null) {
            for (const key in current) {
                if (key === targetKey) {
                    result.push(current[key]);
                }
                search(current[key]);
            }
        }
    }
    search(obj);
    return result;
}

const data = {
    id: 1,
    name: "root",
    meta: {
        id: 2,
        parent: {
            id: 3,
            name: "leaf",
        },
    },
    array: [
        { id: 4 },
        { name: "node", children: [{ id: 5 }] },
    ],
};

console.log(findValuesByKey(data, "id"));








