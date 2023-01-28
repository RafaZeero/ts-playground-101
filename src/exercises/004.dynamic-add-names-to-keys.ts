// https://www.typescriptlang.org/play?#code/C4TwDgpgBAogdsAlqKBeAUFKAfKBvTLI0SALigHIBXAZwgCcKBuQrAX0NwKOPAnIpgA9jWDNWUDli4SsJfpQDGQgLYqICcTzYt0Aej1QAwgAsAhnADm0YCcQ0o89PNgJkIAOrITASQAmaJz4so58ArQMWjxQEfT+5KL0iFYs2kHc0fICwqJRPDnA8VCJyZapRFI4wdGhZEqq6prlPMpqGoV+CcBJKRI66OjKcKJQ9BA0VAA2wOTwSKBetv5o1bUKFK2NYgA0hJvtRRQAjABMAMwU6DpAA

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
  type: 'post',
  postId: 'd1as62dsa1',
};

export {};
