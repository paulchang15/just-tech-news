// import all models
const Post = require("./Post");
const User = require("./User");
const Vote = require("./Vote");
const Comment = require("./Comment");

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  allowNull: false,
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  allowNull: false,
});

User.belongsToMany(Post, {
  through: Vote,
  as: "voted_posts",

  foreignKey: "user_id",
  onDelete: "CASCADE",
  allowNull: false,
});

Post.belongsToMany(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "post_id",
  onDelete: "CASCADE",
  allowNull: false,
});

Vote.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  allowNull: false,
});

Vote.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
  allowNull: false,
});

User.hasMany(Vote, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  allowNull: false,
});

Post.hasMany(Vote, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
  allowNull: false,
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  allowNull: false,
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
  allowNull: false,
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  allowNull: false,
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
  allowNull: false,
});

module.exports = { User, Post, Vote, Comment };
