export function getQueryStringValue(key) {
    if (!process.env.BROWSER) {
        return "";
    }
  return decodeURIComponent(window.location.search.replace(new RegExp(`^(?:.*[&\\?]${encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&')}(?:\\=([^&]*))?)?.*$`, 'i'), '$1'));
}


