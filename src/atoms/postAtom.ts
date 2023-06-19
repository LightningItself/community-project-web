import {atom} from "recoil";

export interface Post {
    postId: String;
    description: String;
    upvotes: Number;
    downvotes: Number;
    tags: Array<String>;
    time: Date; 
    // comments: Array<any>;   // will be added later   
}

export const postState = atom<Post | null>({
    key: "postState",
    default: null,
});

export const postListState = atom<Array<Post>>({
    key: "postListState",
    default: [],
});
