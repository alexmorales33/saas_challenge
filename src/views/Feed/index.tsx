import { Card, CopyNotification, Dropdown, Paginator } from "@/src/components";
import { useCallback, useEffect, useState } from "react";
import { CardsContainer, ErrorContainer, Grid, TopContainer } from "./styles";
import { usePosts } from "@/src/hooks/usePosts";
import { useAccounts } from "@/src/hooks/useAccounts";
import { usePagination } from "@/src/hooks/usePagination";

const Feed = () => {
  const [selectedAccount, setSelectedAccount] = useState<string>('');
  const [notification, setNotification] = useState<{ message: string, visible: boolean }>({ message: '', visible: false });
  
  const { accounts, loading: accountsLoading, error: accountsError } = useAccounts();
  const { formattedPosts, loading: postsLoading, error: postsError } = usePosts(selectedAccount);
  const { currentPage, totalPages, currentItems: currentPosts, handlePageChange } = usePagination(
    formattedPosts,
    12
  );

  const handleCopyUrl = useCallback((imageUrl: string) => {
    navigator.clipboard.writeText(imageUrl)
      .then(() => {
        setNotification({ message: 'Image URL copied to clipboard!', visible: true });
        setTimeout(() => setNotification({ message: '', visible: false }), 1500);
      })
      .catch(() => {
        setNotification({ message: 'Failed to copy URL.', visible: true });
        setTimeout(() => setNotification({ message: '', visible: false }), 1500);
      });
  }, []);

  useEffect(() => {
    if (accounts.length > 0 && !selectedAccount) {
      setSelectedAccount(accounts[0].name);
    }
  }, [accounts, selectedAccount]);

  if (accountsLoading) return <div>Loading...</div>;
  if (accountsError) return <div>{accountsError}</div>;

  const handleOptionSelect = (option: string) => {
    setSelectedAccount(option);
    handlePageChange(1);
  };

  return (
    <div>
      <TopContainer>
        <Dropdown
          options={accounts}
          selectedOption={selectedAccount}
          onOptionSelect={handleOptionSelect}
        />
      </TopContainer>
      {postsError && (
        <ErrorContainer>
          Error loading posts: {postsError}
        </ErrorContainer>
      )}
      <CardsContainer>
        {postsLoading ? (
          <p>Loading posts...</p>
        ) : (
          <Grid>
            {currentPosts.map((post) => (
              <Card
                key={post.postId}
                post={post}
                onCopyUrl={() => handleCopyUrl(post.imageUrl)}
              />
            ))}
          </Grid>
        )}
      </CardsContainer>

      {!postsLoading && !postsError && (
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      <CopyNotification message={notification.message} visible={notification.visible} />
    </div>
  );
};

export default Feed;
