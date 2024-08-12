import axios from 'axios';
import { Post, MetricType, Metric } from '@/src/types';

const getFeedPostsList = async (account: string): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>('/api/feed', { params: { account } });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('Failed to fetch posts from the server');
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

const getFeedPostMetrics = async (metric: MetricType, account: string): Promise<Metric[]> => {
  try {
    const response = await axios.get<Metric[]>('/api/feed', { params: { account, metric } });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('Failed to fetch post metrics from the server');
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const feedController = {
  getFeedPostsList,
  getFeedPostMetrics,
};