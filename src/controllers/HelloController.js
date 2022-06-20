// Get Method 
exports.HelloGet = (req, res) => {
    res.status(200).json({status: "success", data: "Hello! This is first rest-api get"})
}

// Post Method 
exports.HelloPost = (req, res) => {
    res.status(201).json({status: "created", data: "Hello! This is first rest-api post"})
}