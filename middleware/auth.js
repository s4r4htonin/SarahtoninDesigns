const auth    = require("basic-auth"),
      compare = require("tsscmp");

const check = (name, pass) => {
    let valid = true;

    valid = compare(name, "s4r4htonin") && valid;
    valid = compare(pass, process.env.SARAHTONINDESIGNS) && valid;

    return valid;
}

const basicAuth = (req, res, next) => {
    const credentials = auth(req);

    if (credentials && check(credentials.name, credentials.pass)) {
        return next();
    }

    res.set('WWW-Authenticate', 'Basic realm="my website"');
    return res.status(401).send("Invalid credentials");
};

module.exports = basicAuth;