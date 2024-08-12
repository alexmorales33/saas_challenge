import { Post } from "@/src/types";

export interface CardProps {
  post: Post;
  onCopyUrl: () => void;
}
