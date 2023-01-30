type NestedObjectType = {
  prop1: {
    prop2: string
    prop3: string
  }
  prop4: {
    prop5: {
      prop6: string
    }
  }
  prop7: string
}

type NumberNestedObject<T> = T extends string
  ? number
  : {
      [Property in keyof T]: NumberNestedObject<T[Property]>
    }

type ConvertedNumberNestedObjectType = NumberNestedObject<NestedObjectType>
//     ^?

const nested: ConvertedNumberNestedObjectType = {
  prop1: {
    prop2: 3,
    prop3: 1,
  },
  prop4: {
    prop5: {
      prop6: 1,
    },
  },
  prop7: 1,
}

const nested2: ConvertedNumberNestedObjectType = {
  prop1: {
    prop2: 1,
    prop3: 4,
  },
  prop4: {
    prop5: {
      prop6: 3,
    },
  },
  prop7: 1,
}
