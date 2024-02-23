import { unstable_noStore as noStore } from "next/cache";

import { Post, User } from "./models";
import { connectToDb } from "./utils";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "Leanne Graham" },
//   { id: 2, name: "Ervin Howell" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "This is the body of post 1", userId: 1 },
//   { id: 2, title: "Post 2", body: "This is the body of post 2", userId: 1 },
//   { id: 3, title: "Post 3", body: "This is the body of post 3", userId: 2 },
//   { id: 4, title: "Post 4", body: "This is the body of post 4", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
