module.exports = function isTapString (str) {
  return /^\s*(not )?ok/.test(str) ||
    /^TAP version [0-9]+/.test(str) ||
    /^[0-9]+\.\.[0-9]+/.test(str) ||
    /^\s+(\.\.\.)|(\-\-\-)$/.test(str) ||
    /^\s*(actual|operator|expected|at)\:/.test(str) ||
    /^\#\s/.test(str)
}
