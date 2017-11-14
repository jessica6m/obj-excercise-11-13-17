var money = {
  color: "hex #85bb65",
  material: "paper",
  currency: "dollar",
  type: "bill",
  donomination: ["singles", "fives", "tens", "twenties", "fifties", "hundreads"],
  presidents: ["Washington", "Lincoln", "Jefferson", "Jackson", "Grant", "Benjamin"],
  hasMoney: true,
  coins: {
    penny: 1,
    nickel: 5,
    dime: 10,
    quarter: 25,
    halfDollar: 50,
    material: ["copper", "nickel", "zinc"]
  },
  spendmoney: function(num) {
    num--;
  },
  earnsmoney: function(amount) {
    amount * 100;
  }
};
