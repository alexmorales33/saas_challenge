export interface Post {
  postId: string;
  account: string;
  imageUrl: string;
  title: string;
  likes: string;
  comments: string;
  engagement?: number;
  viewEngagement?: number;
  videoViewCount?: string;
  date: string;
  isVideo: boolean;
  assetType: string;
  code: string;
  formattedDate: string;
}
