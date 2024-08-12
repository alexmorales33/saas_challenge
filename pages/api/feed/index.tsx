import { feedService } from '@/api/services/feed/feed.service';
import { MetricType } from '@/src/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { account, metric } = req.query;

  try {
    if (metric) {
      const metrics = await feedService.getFeedPostMetrics({ metric: metric as MetricType, accountName: account as string });
      res.status(200).json(metrics);
    } else {
      const posts = await feedService.getFeedPosts({ accountName: account as string });
      res.status(200).json(posts);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}