import { PostsRepository } from "../repositoryies/posts.repository.js";

export class PostsService {
  postsRepository = new PostsRepository();
  findAllPosts = async () => {
    const posts = await this.postsRepository.findAllPosts();

    //생성 날짜로 부터 내림차순 정렬
    posts.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    //password, content 를 제외한 상태로 controller에게 responsefmf 전달
    return posts.map((post) => {
      return {
        postId: post.postId,
        nickname: post.nickname,
        title: post.title,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      };
    });
  };

  //게시글 생성
  createPost = async (nickname, password, title, content) => {
    const createdPost = await this.postsRepository.createPost(
      nickname,
      password,
      title,
      content
    );

    return {
      postId: createdPost.postId,
      nickname: createdPost.nickname,
      title: createdPost.title,
      content: createdPost.content,
      createdAt: createdPost.createdAt,
      updatedAt: createdPost.updatedAt,
    };
  };

  // 게시글 상세 조회
  findOnePost = async (postId) => {
    const findPost = await this.postsRepository.findOnePost(postId);

    return findPost;
  };

  findDeletePost = async (postId) => {
    const deletePost = await this.postsRepository.findDeletePost(postId);

    return deletePost;
  };

  findPutPost = async (postId, title, content) => {
    const putPost = await this.postsRepository.findPutPost(
      postId,
      title,
      content
    );

    return putPost;
  };
}
