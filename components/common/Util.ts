import _debug from 'debug';
import { DateTime } from 'luxon';
import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';
import { name } from '../../package.json';

const uniqueKeys = new Set<number>();

function getUniqueKey() {
  let index = 0;
  while (uniqueKeys.has(index)) {
    index += Math.random();
  }
  uniqueKeys.add(index);
  return index;
}

async function generatePDF() {
  const element = document.getElementById('pdfArea');
  if (element) {
    const oriWidth = element.style.width;
    element.style.width = '230mm';

    const canvas = await html2canvas(element, { scale: 1, useCORS: true });
    const imgData = canvas.toDataURL('image/png');

    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    const pdf = new JsPDF();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position -= pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    element.style.width = oriWidth;
    pdf.save('Online Resume.pdf');
  }
}

enum LUXON_DATE_FORMAT {
  YYYY_LL_DD = 'yyyy-LL-dd',
  YYYY_LL = 'yyyy-LL',
  YYYY_DOT_LL = 'yyyy. LL',
  YYYY_DOT_LL_DOT_DD = 'yyyy. LL. dd',
  KINDNESS_FULL = 'DDDD',

  DURATION_KINDNESS = 'y년 M개월',
  DURATION_KINDNESS_ONLY_MONTH = 'M개월',
}

function getFormattingDuration(from: DateTime, to: DateTime = DateTime.local()) {
  const log = debug('Util:getFormattingDuration');
  const diff = to.plus({ month: 1 }).diff(from);
  log(diff.milliseconds, diff.get('years'));
  const format =
    diff.milliseconds < 31536000000
      ? LUXON_DATE_FORMAT.DURATION_KINDNESS_ONLY_MONTH
      : LUXON_DATE_FORMAT.DURATION_KINDNESS;
  return diff.toFormat(format);
}

function debug(channel: string) {
  return _debug(`${name}:${channel}`);
}

const Util = {
  generatePDF,
  getUniqueKey,
  LUXON_DATE_FORMAT,
  getFormattingDuration,
  debug,
};

export default Util;
