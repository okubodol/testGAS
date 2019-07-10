function myFunction1() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('E6').activate()
  .setValue('cccAS');
  spreadsheet.getActiveRange().autoFill(spreadsheet.getRange('E6:E10'), SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
  spreadsheet.getRange('E6:E10').activate();
  spreadsheet.getActiveRange().autoFill(spreadsheet.getRange('E6:G10'), SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
  spreadsheet.getRange('F8').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  spreadsheet.getRange('E6:G10').activate();
  spreadsheet.getActiveRangeList().setFontColor('#ff0000');
};

function myFunction2() {
  var inbox = GmailApp.getInboxThreads(); // Gmailの受信ボックスを取得
  var thread =  inbox[0];// 先頭のスレッドを取り出す(確認用)
  var msg = thread.getMessages()[0]; // スレッドの先頭のメッセージを取り出す(確認用)
  
  var date = msg.getDate(); // 日付
  var from = msg.getFrom(); // 送信元アドレス
  var to = msg.getTo(); // 受信アドレス
  var subject = msg.getSubject(); // 件名
  var body = msg.getBody(); // 本文
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var sheet = ss.getSheetByName("シート1");
  var sheet = ss.getActiveSheet() ;
  //var range = sheet.getRange(1,2,3);
  var cell = sheet.getRange('A1');
  cell.setValue(subject);
  
};

function _1() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('B6').activate();
  spreadsheet.getRange('D6').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getRange('B7').activate();
  spreadsheet.getCurrentCell().setFormula('=B6*D10');
  spreadsheet.getRange('B8').activate();
};