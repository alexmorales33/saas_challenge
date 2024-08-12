import { feedClient } from '@/api/clients/feed/feed.client';
import { Post, MetricType, Metric } from '@/src/types';

const getFeedPosts = async ({ accountName }: { accountName: string }): Promise<Post[]> => {
  return feedClient.getPosts(accountName);
};

const getFeedPostMetrics = async ({ metric, accountName }: { metric: MetricType, accountName: string }): Promise<Metric[]> => {
  return feedClient.getPostMetrics(metric, accountName);
};

export const feedService = {
  getFeedPosts,
  getFeedPostMetrics,
};