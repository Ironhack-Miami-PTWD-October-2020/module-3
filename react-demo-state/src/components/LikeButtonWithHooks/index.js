import React, { useState } from "react";

const LikeButtonWithHooks = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      {liked ? (
        <>
          <em>Thanks for liking! 🙌</em>
          <button onClick={() => setLiked(false)}>Unlike</button>
        </>
      ) : (
        <button onClick={() => setLiked(true)}>Like</button>
      )}
    </>
  );
};

export default LikeButtonWithHooks;
