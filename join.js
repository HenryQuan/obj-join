const a = {
    hello: {
        world: 'hello'
    },
    number: {
        one: 2
    },
    test: {
        two: 3
    },
    extra: {
        more: {
            info: 1
        }
    }
};

const b = {
    hello: {
        world: 3
    },
    number: {
        one: 2
    },
    test: {
        two: 1
    }
};

/**
 * Take in two objs and mode ('a' for sum, 's' for subtract)
 * Join only both objs have certain key
 */
ObjJoin = (a, b, mode) => {
    for (let k in a) {
        if (b[k] != null) {
            if (typeof b[k] !== 'object') {
                // Add or subtract values
                if (mode === 's') a[k] -= b[k];
                if (mode === 'a') a[k] += b[k];
            } else {
                // go deeper
                ObjJoin(a[k], b[k], mode);
            }
        } else {
            delete a[k];
        }
    }
    return a;
}

let obj = ObjJoin(a, b, 's');
console.log(obj);
