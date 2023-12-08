const APIError = require("./APIError");

function logError(err, req, res, next) {
  if (!(err instanceof APIError)) {
    console.error(err);
  }

  next(err);
}

function handleError(err, req, res, next) {
  if (err instanceof APIError) {
    res.status(err.status).json({ message: err.message, status: err.status, type: err.name })
  } else {
    res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports = { logError, handleError }
