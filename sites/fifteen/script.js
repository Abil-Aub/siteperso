window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');
    const winBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 
    var board;
    let currentPosition;

    /*
        Indexes within the board
        [ 0] [ 1] [ 2] [ 3]
        [ 4] [ 5] [ 6] [ 7]
        [ 8] [ 9] [10] [11]
        [12] [13] [14] [15]
    */

    function shuffleArray(array) {
        let sum = 0;
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            for (let k = array.length - 1; k > i; k--) {
                if(array[k] < array[i]) sum+=1;
            }
        }
        if(sum%2===1) [array[0], array[1]] = [array[1], array[0]];
    }
    const updateBoard =  () => {
        tiles.forEach( (tile, index) => {
            tile.innerText = board[index];
        });
    }
    const resetBoard = () => {
        board = [...winBoard];
        shuffleArray(board)
        board.push(' ');
        currentPosition = 15;
        updateBoard();
        isGameActive = true;
        announcer.classList.add('hide');
    }
    const isValidAction = (index) => {
        let d = Math.abs(index - currentPosition);
        if (d === 1 || d === 4){
            return true;
        }
        return false;
    };
    const changePosition = (index) => {
        board[currentPosition] = board[index];
        board[index] = ' ';
        currentPosition = index;
    }
    function handleResultValidation() {
        for (let i = 0; i < winBoard.length; i++) {
            if(board[i] !== winBoard[i]) return;
        }
        announcer.innerText = 'You Won!';
        announcer.classList.remove('hide');
        isGameActive = false;
    }
    const userAction = (tile, index) => {
        if(isValidAction(index) && isGameActive) {
            changePosition(index);
            updateBoard();
            handleResultValidation();
        }
    }

    resetBoard();

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);

});