const a = {
    hello: {
        world: 999
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
    },
    extra: {
        more: {
            info: 1
        }
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
                if (mode === '-') a[k] -= b[k];
                if (mode === '+') a[k] += b[k];
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

// obj is basically a and this is not really good although it works
let obj = ObjJoin(a, b, '+');
console.log(obj);
