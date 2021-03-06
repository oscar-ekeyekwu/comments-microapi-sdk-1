const rp = require('request-promise');

const upvoteSingleReply = async (token, commentId, replyId, userId) => {
  if (!userId) {
    return `User ID must not be empty!`;
  }
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}/replies/${replyId}/votes/upvote`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'PATCH',
    body: {
      ownerId: userId,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const upvoteReplyResponse = await rp(options);
    return upvoteReplyResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = upvoteSingleReply;
