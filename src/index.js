// You should implement your task here.

module.exports = function towelSort(matrix) {
    let a = []
    let direction = 1
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (direction > 0) {
                a.push(...matrix[i])
            } else {
                a.push(...(matrix[i].reverse()))
            }
            direction *= -1
        }
    }
    return a;
}
