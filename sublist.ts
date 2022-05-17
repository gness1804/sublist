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

  private whichIsLonger(listA: number[], listB: number[]): number[][] {
    if (listA.length > listB.length) return [listA, listB];
    return [listB, listA];
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
    if (listA.length === listB.length)
      return this.areTheyEqual(listA, listB) ? 'equal' : 'unequal';
    // both lists have a length of 1+
    const [longerList, shorterList] = this.whichIsLonger(listA, listB);
    const listType: Comparison = longerList === listA ? 'superlist' : 'sublist';
    let hasCompleteSet = false;
    longerList.forEach((number, i) => {
      if (number === shorterList[0]) {
        const sliceToCompare = longerList.slice(i, i + (shorterList.length));
        if (this.areTheyEqual(sliceToCompare, shorterList)) {
          hasCompleteSet = true;
        }
      }
    })
    return hasCompleteSet ? listType : 'unequal';
  }
}
