const getNoteList = () => (dispatch) => {
  // eslint-disable-next-line no-use-before-define
  fetchData().then((result) => {
    dispatch({
      type: '???????????',
      payload: result,
    });
  });
};

// eslint-disable-next-line consistent-return
async function fetchData() {
  try {
    // eslint-disable-next-line no-undef
    const result = await fetch('http://localhost:8080/api/posts');
    return await result.json();
  } catch (e) {
    console.error(e);
  }
}

export default { getNoteList };
