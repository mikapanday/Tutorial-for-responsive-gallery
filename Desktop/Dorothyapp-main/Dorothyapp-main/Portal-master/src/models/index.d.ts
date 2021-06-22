import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Post {
  readonly id: string;
  readonly username?: string;
  readonly img_url?: string;
  readonly photo_description?: string;
  readonly child_name?: string;
  readonly child_id?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}