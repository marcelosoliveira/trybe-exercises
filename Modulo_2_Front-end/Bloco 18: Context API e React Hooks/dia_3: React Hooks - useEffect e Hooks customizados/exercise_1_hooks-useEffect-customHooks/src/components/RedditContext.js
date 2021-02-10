import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getPostsBySubreddit } from '../services/redditAPI';

const Context = createContext();

function RedditProvider({ children }) {
  const [postsBySubreddit, setPostsBySubreddit] = useState(
    {
      frontend: {},
      reactjs: {},
    },
  );
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');
  const [shouldRefreshSubreddit, setShouldRefreshSubreddit] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect((_prevProps, prevState) => {
    const selectedSubredditChanged = prevState.selectedSubreddit !== selectedSubreddit;

    if (selectedSubredditChanged || shouldRefreshSubreddit) {
      fetchPosts();
    }
  }, []);

  const fetchPosts = () => {
    if (!shouldFetchPosts()) return;

      setShouldRefreshSubreddit(false);
      setIsFetching(true);

    getPostsBySubreddit(selectedSubreddit)
      .then(handleFetchSuccess, handleFetchError);
  }

  const shouldFetchPosts = () => {
    setPostsBySubreddit(postsBySubreddit[selectedSubreddit]);

    if (!postsBySubreddit.items) return true;
    if (isFetching) return false;
    return shouldRefreshSubreddit;
  }

  const handleFetchSuccess = (json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

    setShouldRefreshSubreddit(false);
    setIsFetching(false);  

    setPostsBySubreddit(postsBySubreddit[selectedSubreddit] = {
        items,
        lastUpdated,
      });

      return postsBySubreddit;
  }

  const handleFetchError = (error) => {
    setShouldRefreshSubreddit(false);
    setIsFetching(false);  

    setPostsBySubreddit(postsBySubreddit[selectedSubreddit] = {
        error: error.message,
        items: [],
      });

      return postsBySubreddit;
  }

  const handleSubredditChange = (selectedSubreddit) => {
    setSelectedSubreddit(selectedSubreddit);
    return selectedSubreddit;
  }

  const handleRefreshSubreddit = () => {
    setShouldRefreshSubreddit(true);
  }
    const context = {
      selectSubreddit: handleSubredditChange,
      fetchPosts: fetchPosts,
      refreshSubreddit: handleRefreshSubreddit,
      availableSubreddits: Object.keys(postsBySubreddit),
      posts: postsBySubreddit.items,
      postsBySubreddit
    };

    return (
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    );
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditProvider as Provider, Context };