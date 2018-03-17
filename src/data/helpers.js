// We need something that will create our actions for ui
const actionCreator = (type) => (payload) => ({
    type,
    payload,
});

export default actionCreator;
