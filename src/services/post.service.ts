import Post from "@models/post";
import AuthService from "@services/auth.service";
import PostRepository from "@repositories/post.repository";
import { Service } from "typedi";
import PostRequest from "@lib/request/post/post.request";

@Service()
export default class PostService {

  constructor(
    private readonly authService: AuthService,
    private readonly postRepository: PostRepository,
  ) { }

  /**
   * @description 게시글 게시
   */
  public addPost = async (content: PostRequest, userId: string): Promise<Post> => {
    const user = this.authService.findUserById(userId);

    const post = this.postRepository.create(content);
    post.user = user;
  }
}