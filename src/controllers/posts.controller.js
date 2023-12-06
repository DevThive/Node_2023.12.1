import { PostsService } from "../services/posts.service.js";
export class PostsController {
  postsService = new PostsService();
  //게시글 조회
  getPosts = async (req, res, next) => {
    try {
      const posts = await this.postsService.findAllPosts();

      return res.status(200).json({ data: posts });
    } catch (err) {
      next(err);
    }
  };

  //게시글 생성
  createPost = async (req, res, next) => {
    try {
      const { title, content } = req.body;
      const { nickname } = res.locals.user;

      const createPost = await this.postsService.createPost(
        nickname,
        title,
        content
      );

      return res
        .status(200)
        .json({ message: "게시글이 작성되었습니다.", data: createPost });
    } catch (err) {
      next(err);
    }
  };

  // 게시글 상세 조회
  getOne = async (req, res, next) => {
    try {
      const { postId } = req.params;

      const onePost = await this.postsService.findOnePost(Number(postId));

      return res.status(200).json({ data: onePost });
    } catch (err) {
      next(err);
    }
  };

  // 게시글 삭제
  deletePost = async (req, res, next) => {
    try {
      const { postId } = req.params;
      const { nickname } = res.locals.user;

      const deletePost = await this.postsService.findDeletePost(
        res,
        Number(postId),
        nickname
      );

      return res
        .status(200)
        .json({ message: "게시글이 삭제 되었습니다.", data: deletePost });
    } catch (err) {
      next(err);
    }
  };

  // 게시글 수정
  putPost = async (req, res, next) => {
    try {
      const { postId } = req.params;
      const { title, content } = req.body;
      const { nickname } = res.locals.user;

      const putPost = await this.postsService.findPutPost(
        res,
        Number(postId),
        title,
        content,
        nickname
      );

      return res
        .status(200)
        .json({ Messgae: "게시글이 수정되었습니다.", data: putPost });
    } catch (err) {
      next(err);
    }
  };
}
