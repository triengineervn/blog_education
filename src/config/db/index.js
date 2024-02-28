import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog_education_dev");
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}
