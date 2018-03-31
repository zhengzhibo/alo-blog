var admin = async (ctx, next) => {
  ctx.response.body = "admin page";
};

module.exports = {
  "GET /admin": admin
};
