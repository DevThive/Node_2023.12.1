import { prisma } from "../utils/prisma/index.js";
export class PostsRepository {
  findAllPosts = async () => {
    const posts = await prisma.posts.findMany();

    return posts;
  };

  createPost = async (nickname, title, content) => {
    const createdPost = await prisma.posts.create({
      data: {
        nickname,
        title,
        content,
      },
    });
    return createdPost;
  };

  findOnePost = async (postId) => {
    const findPost = await prisma.posts.findUnique({
      where: { postId: postId },
    });

    return findPost;
  };

  authPost = async (postId) => {
    const authPost = await prisma.posts.findUnique({
      where: { postId: postId },
    });

    return authPost;
  };

  findDeletePost = async (postId, nickname) => {
    const deletePost = await prisma.posts.delete({
      where: { postId: +postId, nickname: nickname },
    });

    return deletePost;
  };

  findPutPost = async (postId, title, content) => {
    const putPost = await prisma.posts.update({
      where: { postId: postId },
      data: {
        title,
        content,
      },
    });
    return putPost;
  };
}
