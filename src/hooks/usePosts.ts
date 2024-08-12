import { useEffect, useState, useCallback, useMemo } from "react";
import { feedController } from "@/src/controllers/feed";
import { Account, Metric, MetricsState, Post } from "@/src/types";
import { formatDate, formatNumber } from "@/src/utils/format";
import { useAccounts } from "@/src/hooks/useAccounts";

export const usePosts = (selectedAccount: string) => {
  const { accounts } = useAccounts();
  const [posts, setPosts] = useState<Post[]>([]);
  const [metrics, setMetrics] = useState<MetricsState>({ engagement: [], viewEngagement: [] });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [accountMap, setAccountMap] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (accounts.length > 0) {
      const accountsMap = accounts.reduce((acc: { [key: string]: string }, account: Account) => {
        acc[account.name] = account.displayName;
        return acc;
      }, {});
      setAccountMap(accountsMap);
    }
  }, [accounts]);

  useEffect(() => {
    const fetchPostsAndMetrics = async () => {
      if (selectedAccount) {
        setLoading(true);
        setError(null);
        setPosts([]);

        try {
          const fetchedPosts = await feedController.getFeedPostsList(selectedAccount);
          setPosts(fetchedPosts);

          const engagementMetrics: Metric[] = await feedController.getFeedPostMetrics('engagement', selectedAccount);
          const viewEngagementMetrics: Metric[] = await feedController.getFeedPostMetrics('view-engagement', selectedAccount);
          setMetrics({
            engagement: engagementMetrics,
            viewEngagement: viewEngagementMetrics,
          });
        } catch (err) {
          setError('Failed to fetch posts or metrics');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPostsAndMetrics();
  }, [selectedAccount]);

  const getPostMetric = useCallback((postId: string, metric: keyof MetricsState): number => {
    const metricData = metrics[metric]?.find((m: Metric) => m.postId === postId);
    const value = metricData ? metricData[metric] || 0 : 0;
    return parseFloat((value * 100).toFixed(2));
  }, [metrics]);

  const formattedPosts = useMemo(() => {
    return posts.map((post: Post) => ({
      ...post,
      engagement: getPostMetric(post.postId, 'engagement'),
      viewEngagement: getPostMetric(post.postId, 'viewEngagement'),
      formattedDate: formatDate(post.date),
      likes: formatNumber(Number(post.likes)),
      comments: formatNumber(Number(post.comments)),
      videoViewCount: formatNumber(Number(post.videoViewCount ?? 0)),
      account: accountMap[post.account] || post.account
    }));
  }, [posts, getPostMetric, accountMap]);

  return { formattedPosts, loading, error };
};
