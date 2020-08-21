let damageElem = document.getElementById('total-fish')

let clickUpgrades = {
  Spear: {
    cost: 10,
    modifier: 2,
    id: 12
  },
  Net: {
    cost: 100,
    modifier: 5,
    id: 123
  },
  MachineGun: {
    cost: 10000,
    modifier: 10,
    id: 1234
  },

};


let automaticUpgrades = {
  rovers: {
    price: 600,
    quantity: 0,
    multiplier: 20
  }
};


let fisher = {
  fish: 1

}


function drawDamage() {
  let template = `${fisher.fish}`
  damageElem.innerText = template
}
drawDamage()

function cast() {
  fisher.fish += 1
  drawDamage();
}

function equipWeapon(id) {
  console.log(id);
  let item = shop.find(i => i.id == id)
  console.log(item);

  //check if can buy
  //increase damage and decrease money
  //
}