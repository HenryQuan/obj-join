let a = {
    hello: {
        world: 1
    },
    number: {
        one: 1
    },
    test: {
        two: 2
    }
};

let b = {
    hello: {
        world: 2
    },
    number: {
        one: 2
    },
    test: {
        two: 3
    }
};

/**
 * Take in two objs and mode ('a' for sum, 's' for subtract)
 */
ObjMerge = (a, b, mode) => {
    for (let key in a) {
        if (Object.keys(b[key]).length === 0) {
            a[key] += b[key];
        } else if (b[key] != null) {
            ObjMerge(a[key], b[key], mode);
        }
    }
    return a;
}

let obj = ObjMerge(a, b, 'a');
console.log(obj, a);
