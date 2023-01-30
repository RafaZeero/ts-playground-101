type NestedObjectType = {
  prop1: {
    prop2: number
    prop3: number
  }
  prop4: {
    prop5: {
      prop6: number
    }
  }
}

const nested: NestedObjectType = {
  prop1: {
    prop2: 3,
    prop3: 1,
  },
  prop4: {
    prop5: {
      prop6: 1,
    },
  },
}

const nested2: NestedObjectType = {
  prop1: {
    prop2: 1,
    prop3: 4,
  },
  prop4: {
    prop5: {
      prop6: 3,
    },
  },
}

export {}
