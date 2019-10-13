const initState = [];

export default (state = initState, action) => {
  // noinspection JSRedundantSwitchStatement
  switch (action.type) {
    case '???????????':
      return ([
        ...action.payload,
      ]
      );

    default:
      return state;
  }
};
