var hello = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = {name:name};
};

module.exports = {
    'GET /hello/:name': hello
};