import { UserModel } from './user.model';

export interface PostModel {
    username: string,
    img_url: string,
    photoDescription: string,
    child_name: string,
    child_id: string
}

export interface PostModelSend {
    username: string,
    img_url: string,
    photoDescription: string,
    child_name: string,
    child_id: string
}