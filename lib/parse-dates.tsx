import moment from 'moment';

const caBeginning = /^ca. (.*)/;
const endsInQuestionMarks = /^(.*)\?$/;
const insideParens = /^\[(.*)\]$/;
const monthDateYear = /^\w*\s\d*,\s+\d{4}$/;
const onlyYear = /^\d{4}$/;

export function parseYear(date: string) {
  if (onlyYear.test(date)) {
    return parseInt(date);
  } else if (monthDateYear.test(date)) {
    return moment(date, 'MMM D, YYYY').year();
  } else if (insideParens.test(date)) {
    const str = insideParens.exec(date)[1];
    return parseYear(str);
  } else if (caBeginning.test(date)) {
    return parseYear(caBeginning.exec(date)[1]);
  } else if (endsInQuestionMarks.test(date)) {
    return parseYear(endsInQuestionMarks.exec(date)[1]);
  } else {
    return null;
  }
}
