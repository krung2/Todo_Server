import Post from "@models/post";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Post)
export default class PostRepository extends Repository<Post> {


}