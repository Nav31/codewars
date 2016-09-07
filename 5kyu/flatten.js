const flatten = (...args) => args.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(...b) : b), []);