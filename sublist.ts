type Comparison = 'equal' | 'sublist' | 'superlist' | 'unequal';

export class List {
  public list: number[] = [];
  constructor(...args: number[]) {
    this.list = [...args];
  }

  private areTheyEqual(listA: number[], listB: number[]): boolean {
    let failedCount = 0;
    listB.forEach((number, i) => {
      if (number !== listA[i]) {
        failedCount++;
      }
    })
    return !(failedCount > 0);
  }

  public compare(secondList: List): Comparison {
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
      let hasCompleteSet = false;
      listB.forEach((number, i) => {
        if (number === listA[0]) {
          const sliceToCompare = listB.slice(i, i + (listA.length));
          if (this.areTheyEqual(sliceToCompare, listA)) {
            hasCompleteSet = true;
          }
        }
      })
      return hasCompleteSet ? 'sublist' : 'unequal';
    } else {
      // this list lengths are the same.
      return this.areTheyEqual(listA, listB) ? 'equal' : 'unequal';
    }
  }
}
