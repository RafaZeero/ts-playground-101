type Entity =
  | {
      type: 'user';
    }
  | {
      type: 'post';
    }
  | {
      type: 'comment';
    };

// Change this type
type EntityWithId =
  | {
      type: 'user';
      userId: string;
    }
  | {
      type: 'post';
      postId: string;
    }
  | {
      type: 'comment';
      commentId: string;
    };

const result: EntityWithId = {
  type: 'comment',
  commentId: '123'
};
