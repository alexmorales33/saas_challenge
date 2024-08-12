import { FEED_API } from '@/config/env';
import axios from 'axios';
import { Post, MetricType, Metric } from '@/src/types';

const getPosts = async (accountName: string): Promise<Post[]> => {
  try {
    const response = await axios.get<{ data: Post[] }>(`${FEED_API}/posts/${accountName}.json`);
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};

const getPostMetrics = async (metric: MetricType, accountName: string): Promise<Metric[]> => {
  try {
    const response = await axios.get<{ data: Metric[] }>(`${FEED_API}/posts/metrics/${metric}/${accountName}.json`);
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch post metrics');
  }
};

export const feedClient = {
  getPosts,
  getPostMetrics,
};
