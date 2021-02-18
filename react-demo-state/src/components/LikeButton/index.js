import React from "react";

class LikeButton extends React.Component {
  state = {
    liked: false
  };

  handleLikeStatus = () => {
    this.setState({
      liked: !this.state.liked
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleLikeStatus}>{(this.state.liked && "Unlike") || "Like"}</button>
        {this.state.liked && <div>Thanks for liking me!</div>}
      </div>
    );
  }
}

export default LikeButton;
