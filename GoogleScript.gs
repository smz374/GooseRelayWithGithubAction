// GooseRelay forwarder – static version (manually updated after each tunnel creation)
// Replace RELAY_URL with the bore URL from the GitHub Action output.

const RELAY_URL = 'BORE TUNNEL ADDRESS'; // like 'http://bore.pub:3183/tunnel' <-- MANUALLY UPDATE THIS AFTER EACH WORKFLOW RUN

function doPost(e) {
  const payload = (e && e.postData && e.postData.contents) || '';
  const resp = UrlFetchApp.fetch(RELAY_URL, {
    method: 'post',
    contentType: 'text/plain',
    payload: payload,
    muteHttpExceptions: true,
    followRedirects: false,
    deadline: 30,
  });
  return ContentService
    .createTextOutput(resp.getContentText())
    .setMimeType(ContentService.MimeType.TEXT);
}

function doGet() {
  return ContentService.createTextOutput('GooseRelay forwarder active');
}
