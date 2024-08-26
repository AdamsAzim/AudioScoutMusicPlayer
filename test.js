let sp = 0;
let pp = 0;
let profit = 0;
function Hk() {
  sp = 0;
  return;
}
function Dl() {
  pp = 100;
  profit = sp - pp;
  console.log(profit);
  return;
}
function Eoj() {
  console.log("Thanks for using the program");
  return;
}
Hk();
while (sp > 0) {
  Dl();
}
Eoj();
