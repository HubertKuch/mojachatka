/**
 * @returns {val}
 */
function getOrThrow(val, error) {
  if (!val) {
    throw error;
  }

  return val;
}

module.exports = getOrThrow;
