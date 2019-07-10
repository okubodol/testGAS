function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var sheet = ss.getSheetByName("シート1");
  var sheet = ss.getActiveSheet() ;
  //var range = sheet.getRange(1,2,3);
  var cell = sheet.getRange('A1');
  cell.setValue("cccaaAS");
  cell.setBackground('green');
  //range.setValue("cccAS");
}
function send(){
  // 送信
  GmailApp.sendEmail(
    "cqwrn622@gmail.com",  //送信先アドレス  
    "メールタイトル",
    "メール本文",
    {
      //cc:  "cc@example.com", // ccでの送信先アドレス
      //bcc: "bcc@example.com", // bccでの送信先アドレス
      from: "okubodol@gmail.com", // 送信元アドレス(利用しているgmailアカウントで設定可能な送信元のみ)
      name: "example" // 送信者名
    }
  );
}




function test() {
//フォーマット
const dates = Utilities.formatDate(new Date(), "Asia/Tokyo", 'yyyyMMdd'); 
//今日
const today = Utilities.formatDate( new Date(), "Asia/Tokyo", 'yyyyMMdd'); 
//フォーマット（数値）
const datesInt = parseInt(Utilities.formatDate(new Date(), "Asia/Tokyo", 'yyyyMMdd'), 10); 
//今日（数値）
const todayInt = parseInt(Utilities.formatDate( new Date(), "Asia/Tokyo", 'yyyyMMdd'), 10);  
  // スプレッドシートを開いた時にメッセージダイアログを表示する
  Browser.msgBox(today);
}