const reactRedux = jest.createMockFromModule('react-redux');
reactRedux.Provider = ({ children }) => children;
module.exports = reactRedux;
