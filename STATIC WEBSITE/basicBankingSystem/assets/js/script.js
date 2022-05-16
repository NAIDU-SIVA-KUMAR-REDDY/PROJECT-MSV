let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var e=1
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 8) {
      alert("Insufficient Query in list")
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + e;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - e
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Query Registration !!  SL-N0: 
      ${enterAmount} Query sent to ${enterName}@email.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`SL-NO:${enterAmount} concern query  is sent to LOCAL SUPPORT with Email-id ${enterName}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}