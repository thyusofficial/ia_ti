
function findPath() {
    const maze = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 1, 1, 2],
        [0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    const traverse = (column, row) => {
        if (maze[column][row] == 2) {
            console.log(`Achei a saída em ${column} ${row}`);
        } else if (maze[column][row] == 1) {
            console.log(`Caminho válido`);
            maze[column][row] = 9
            if (column < maze.length - 1) {
                traverse(column + 1, row)
            }
            if (row < maze[column].length - 1) {
                traverse(column, row + 1)

            }
            if (column > 0) {
                traverse(column - 1, row)

            }
            if (row > 0) {
                traverse(column, row - 1)

            }
        }

    }
    const draw = (column, row) => {
        let container = document.querySelector('.maze-container')
        let mazeItem = document.createElement('div')
        mazeItem.className = 'unvisited'
    }
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze.length; j++) {
            if (i == 0 && j == 0) {
                draw(i, j)
            }
        }
    }
    //traverse(4, 0)
}
findPath()






