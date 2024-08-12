export interface Metric {
    postId: string;
    engagement?: number;
    viewEngagement?: number;
}

export type MetricType = 'engagement' | 'viewEngagement' | 'view-engagement';

export interface MetricsState {
    engagement: Metric[];
    viewEngagement: Metric[];
}