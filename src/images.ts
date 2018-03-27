/**
 * PHOTOS:
 * http://www.ngcicproject.org/dss/n/7/n7662.jpg
 * http://stdatu.stsci.edu/cgi-bin/dss_form?target=ngc1976&resolver=SIMBAD
 */

import leftpad = require('left-pad');

export const getObjectImgSrc = (ngc: number): string =>
  `http://www.ngcicproject.org/dss/n/${Math.floor(ngc / 1000)}/n${leftpad(ngc, 4, 0)}.jpg`;
