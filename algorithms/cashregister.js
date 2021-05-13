function checkCashRegister(price, cash, cid) {
  var billValue = [ 0.01,0.05,0.10,0.25,1.00,5.00,10.00,20.00,100.00];
  var change = {
    status:"",
    change:""
  };
  var changeDue = []; //empty array initialized to hold currency type and amount

  //find total amount in the register
  var totalInDrawer = 0;
  for (let i=0; i < cid.length; i++) {
    totalInDrawer = totalInDrawer + cid[i][1];
  }

  var amtToReturn = cash-price;

  for (let i=billValue.length-1;i>=0; i--) {
    if (amtToReturn >= billValue[i]) {

      while(true) //infinite loop for current currency type
      {
        cid[i][1]=cid[i][1]-billValue[i]; //take money out from drawer.
        cid[i][1]=cid[i][1].toFixed(2);
        cid[i][1]=parseFloat(cid[i][1]);

        amtToReturn=amtToReturn-billValue[i];
        amtToReturn=amtToReturn.toFixed(2);
        amtToReturn=parseFloat(amtToReturn);

        if (amtToReturn<0 || cid[i][1]<0)
        {//insufficient funds of current type, put back into register and change queued and break out;
          amtToReturn+=billValue[i];
          cid[i][1]+=billValue[i];
          break;
        }

        //insert into array to be returned.

        function arrExists(arr, search) { //helper function for 2D arrays
          return arr.some(row => row.includes(search));
        }

        if (!arrExists(changeDue,cid[i][0])) {
          changeDue.push([cid[i][0],billValue[i]]);
        }

        else
        {
          //search array for x position of key, value
          //console.log(changeDue.length);
          for (let k = 0; k < changeDue.length; k++) {
            if (changeDue[k][0]==cid[i][0]){
              var arrInd = k;
            }
          }
          changeDue[arrInd][1]+=billValue[i];
          changeDue[arrInd][1]=changeDue[arrInd][1].toFixed(2);
          changeDue[arrInd][1]=parseFloat(changeDue[arrInd][1]);
        }
        if (amtToReturn==0 || cid[i][1]==0)
        {
          break;
        }
      }
     }
  }
  //console.log(changeDue);
  var zeroCash = true;
  while(zeroCash) {
    for (let i = 0; i < cid.length; i++) {
      if (cid[i][1]>0) {
        zeroCash=false;
        break;
    }
    }
    if(zeroCash){
      for (let i=0; i<cid.length;i++){
        for (let k=0;k<changeDue.length;k++) {
        if(changeDue[k][0]==cid[i][0]){
          //console.log(changeDue);
          cid[i][1]=changeDue[k][1];
          //console.log(cid);
          }
        }
      }
      break;
    }
  }
  if (amtToReturn>0 || (totalInDrawer < cash-price))
  {
    change.status = "INSUFFICIENT_FUNDS";
    change.change = [];
  }
  else if (amtToReturn == 0 && zeroCash == true) {
    change.status = "CLOSED";
    change.change = cid;
  }
  else
  {
    change.status = "OPEN";
    change.change = changeDue;
  }
  console.log(change);
  return change;
}
