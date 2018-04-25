const db = require("../db");
const utils = require("utility");

var getAllPost = async (ctx, next) => {
  ctx.response.body = db.get("post").filter(o => {
    return !o.deleted
  }).value();
};

var getPost = async (ctx, next) => {
  let permaLink = ctx.params.permaLink;
  ctx.response.body = db.get("post").filter(o => {
    return !o.deleted
  }).find({ permaLink }).value();
};

var addPost = async (ctx, next) => {
  db
    .get("post")
    .insert(ctx.request.body)
    .write();
  ctx.response.body = { success: true };
};

var modifyPost = async (ctx, next) => {
  let id = ctx.params.id;
  db
    .get("post")
    .find({ id })
    .assign(ctx.request.body)
    .write();
  ctx.response.body = { success: true };
};

var deletePost = async (ctx, next) => {
  let id = ctx.params.id;
  db
    .get("post")
    //.remove({ id })
    .find({ id })
    .assign({
      deleted: true
    })
    .write();
  ctx.response.body = { success: true };
};

module.exports = {
  "GET /post": getAllPost,
  "GET /post/:permaLink": getPost,

  "POST /admin/post": addPost,
  "PUT /admin/post/:id": modifyPost,
  "DELETE /admin/post/:id": deletePost
};
