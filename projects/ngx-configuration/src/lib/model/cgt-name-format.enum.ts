
export enum CgtNameFormat {
  /**
   * Will format the person's name using just the First and Last names as 'Last, First'
   */
  ShortLastFirst = 'shortLastFirst',

  /**
   * Will format the person's name using just the First and Last names as 'First Last'
   */
  ShortFirstLast = 'shortFirstLast',

  /**
   * Will format the person's name using the First, Last and Middle names as 'Last, First Middle'
   */
  MediumLastFirst = 'mediumLastFirst',

  /**
   * Will format the person's name using the First, Middle, and Last names as 'First Middle Last'
   */
  MediumFirstLast = 'mediumFirstLast',

  /**
   * Will format the person's name as 'Last Suffix, Prefix First Middle'
   */
  LongLastFirst = 'longLastFirst',

  /**
   * Will format the person's name as 'Prefix First Middle Last Suffix'
   */
  LongFirstLast = 'longFirstLast'
}
