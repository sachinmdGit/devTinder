const adminAuth = (req, res, next) => {
    console.log("Authorizing for Admin...")
    const token = "xyz";
    const isAdminAuthorized = token ==="xyz"
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized Admin!")
    } else {
        next();
    }
};

const userAuth = (req, res, next) => {
    console.log("Authorizing for User...")
    const token = "uvw";
    const isUserAuthorized = token ==="uvw"
    if(!isUserAuthorized){
        res.status(401).send("Unauthorized User!")
    } else {
        next();
    }
};

module.exports = {
    adminAuth, userAuth
}