var login = async (ctx, next) => {
    ctx.response.body = `<h1>Hello, Login!</h1>`;
};

module.exports = {
    'GET /login': login
};