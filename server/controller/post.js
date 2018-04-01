const db = require("../db");
const utils = require("utility");

var getAllPost = async (ctx, next) => {
  ctx.response.body = db.get("post").value();
};

var getPost = async (ctx, next) => {
  let permaLink = ctx.params.permaLink;
  ctx.response.body = db.get("post").find({ permaLink }).value();
};

var addPost = async (ctx, next) => {
  db
    .get("post")
    .insert(ctx.request.body)
    .write();
  ctx.response.body = { success: true };
};

var modifyPost = async (ctx, next) => {
  let permaLink = ctx.params.permaLink;
  db
    .get("post")
    .find({ permaLink })
    .assign(ctx.request.body)
    .write();
  ctx.response.body = { success: true };
};

var deletePost = async (ctx, next) => {
  let permaLink = ctx.params.permaLink;
  db
    .get("post")
    .remove({ permaLink })
    .write();
  ctx.response.body = { success: true };
};

module.exports = {
  "GET /post": getAllPost,
  "GET /post/:permaLink": getPost,

  "POST /admin/post": addPost,
  "PUT /admin/post/:permaLink": modifyPost,
  "DELETE /admin/post/:permaLink": deletePost
};
