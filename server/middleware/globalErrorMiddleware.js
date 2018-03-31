var errorHandler = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || err.cause.status || 500;
        ctx.body = { status:ctx.status, message:err.message || err };
        ctx.app.emit('error', err, ctx);
    }
}


module.exports = errorHandler;