// state
const state = {
  // can be O or X
  activePlayer: "O",
  // maintains the status of the game: turn or win or draw
  gameStatus: "turn",

  gameStatusMessage: `O's turn`,
  // no. of moves played by both players in a single game (max = 9)
  moves: 0,
  // stores the placement of X and O in cells by their cell number
  cells: {
    1: { frozen: false, mark: "" },
    2: { frozen: false, mark: "" },
    3: { frozen: false, mark: "" },
    4: { frozen: false, mark: "" },
    5: { frozen: false, mark: "" },
    6: { frozen: false, mark: "" },
    7: { frozen: false, mark: "" },
    8: { frozen: false, mark: "" },
    9: { frozen: false, mark: "" }
  },
  // contains all (8) possible winning conditions (3 rows, 3 columns, 1 diagnol)
  winningConditions: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]
};

const getters = {
  activePlayer: state => state.activePlayer,
  cells: state => state.cells,
  isGameWon: state =>
    state.winningConditions.forEach(winningCondition => {
      const winningPosition1 = winningCondition[0];
      const winningPosition2 = winningCondition[1];
      const winningPosition3 = winningCondition[2];
      return (
        (state.cells[winningPosition1] === state.cells[winningPosition2]) ===
        state.cells[winningPosition3]
      );
    }),
  moves: state => state.moves,
  gameStatus: state => state.gameStatus,
  winningConditions: state => state.winningConditions
};

// mutations
const mutations = {
  [SET_GAME_STATUS]: ({ state }, status) => {
    state.gameStatus = status;
  },
  [INCREMENT_MOVES]: ({ state }) => {
    state.moves = state.moves + 1;
  },
  [UPDATE_CELL_MAP]: ({ state }, turn) => {
    state.cells[turn.index].mark = turn.mark;
    state.cells[turn.index].frozen = turn.frozen;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
