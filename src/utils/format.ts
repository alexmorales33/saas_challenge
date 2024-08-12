export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB');
};

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return Math.round(num / 1000000) + 'M';
  }
  if (num >= 1000) {
    return Math.round(num / 1000) + 'K';
  }
  return num.toString();
};

