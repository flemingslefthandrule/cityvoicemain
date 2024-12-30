export interface CommentProps {
  userProfile: string;
  username: string;
  timeStamp: string;
  comment: string;
  likes: number;
  dislikes: number;
}
export interface PostProps {
  src: string;
  username: string;
  userLink: string;
  postTitle: string;
  postImage?: string;
  upvotes: number;
  downvotes: number;
  comments: CommentProps[];
  postLink: string;
  location: string;
  locationLink: string;
}
export interface ProfileProps {
  src: string;
  username: string;
  userLink: string;
  location: string;
  locationLink: string;
}
