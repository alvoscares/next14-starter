const { NextResponse } = require("next/server");
const { connectToDb } = require("@/lib/utils");
const { Post } = require("@/lib/models");

export const GET = async (request) => {
  try {
    connectToDb();

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};
