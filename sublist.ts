type Comparison = 'equal' | 'sublist' | 'superlist' | 'unequal';

export class List {
  list: number[] = [];
  constructor(...args: number[]) {
    this.list = [...args];
  }

  compare(secondList: List): Comparison {
    const listA = this.list;
    const listB = secondList.list;
    if (!listA.length) {
      if (!listB.length) return 'equal';
      return 'sublist';
    }
    // listA has a length of 1+
    if (!listB.length) return 'superlist';
    // both lists have a length of 1+
    if (listA.length > listB.length) {

    } else if (listA.length < listB.length) {

    } else {
      // this list lengths are the same.
      let failedCount = 0;
      listB.forEach((number, i) => {
        if (number !== listA[i]) {
          failedCount++;
        }
      })
      return !!failedCount ? 'unequal' : 'equal';
    }
  }
}
