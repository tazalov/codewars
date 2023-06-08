/* 

*/

function setCookie(name, value, domain, path, expires) {
  if (!name) {
    return 'Must include a cookie name';
  }
  const nameP = `${name}=${value ? value : name}`;
  const dateP = dateTransform(expires);
  const pathP = `path=${path ? path : '/'}`;
  const domainP = `${domain ? `domain=${domain}` : ''}`;
  const cookieArr = [nameP, dateP, pathP, domainP];
  const filteredCookieArr = cookieArr.filter((el) => el !== '');
  return `document.cookie = "${filteredCookieArr.join('; ')}"`;
}

function dateTransform(date) {
  if (!date) {
    return '';
  }
  if (typeof date === 'number') {
    const dTens = date * 24 * 60 * 60 * 1000;
    return `expires=${new Date(Date.now() + dTens)
      .toString()
      .slice(0, 15)} 00:00:00`;
  }
  const dArr = date.split('/');
  return `expires=${new Date(dArr[2], dArr[0] - 1, dArr[1])
    .toString()
    .slice(0, 15)} 00:00:00`;
}
