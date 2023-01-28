// https://www.typescriptlang.org/play?#code/C4TwDgpgBAogdsAlqKBeAUFKAfKBvTLI0SALigHIBXAZwgCcKBuQrAX0NwKOPAnIpgA9jWDNWUDli4SsJfpQDGQgLYqICcTzYt0Aej1R5sBMhAB1ZAAsAkgBM0+w9PxOevMpVoNxB91m96e3JRekQ4AHMWP203FwIY93kBYVFfZ3dU4GCoUPCouKIORJlEnmSlVXVNaIyeZTUNbLsQ4DDI2vcddHRjeCRQS2BbB1RXLABtfrMAFT4ocJMBkAmKeQoAXQ3ybg8FadA5yBZ2KAAyKAAlCGV6OwAeAAMAEjwDkCOINntHgBpctr5AB8LDYU1MoFW6y2umUcFEUHoEBoVAANsByO8hiM0OMjHwBA1qmJfoQiU0chQAIwAJgAzBR0N10BAAB7CejAfDdIA

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

// type EntityWithId =
//   | {
//       type: 'user';
//       userId: string;
//     }
//   | {
//       type: 'post';
//       postId: string;
//     }
//   | {
//       type: 'comment';
//       commentId: string;
//     };

type EntityWithId = {
  [EntityType in Entity['type']]: {
    type: EntityType;
  } & Record<`${EntityType}Id`, string>;
}[Entity['type']];

const result: EntityWithId = {
  type: 'comment',
  commentId: '123',
};

const basket = {
  market: 'fruits',
  library: 'books',
};

type AddPriceAndID = {
  [Key in keyof typeof basket]: {
    [P in Key]: {
      aaaa: typeof basket[Key];
    };
  } & Record<`${typeof basket[Key]}Price`, number> &
    Record<`${typeof basket[Key]}ID`, string>;
}[keyof typeof basket];

const example: AddPriceAndID = {
  market: {
    aaaa: '',
  },
};

export {};
