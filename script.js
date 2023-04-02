function load() {
    if (localStorage.getItem('setting-currentTab')) {
      if (localStorage.getItem('setting-currentTab') == 'slime-bank') {
        document.getElementById('slime-bank-calculator').style.display = 'block';
        document.getElementById('anvil-calculator').style.display = 'none';
        document.getElementById('slime-bank').style.color = '#f2e009';
        document.getElementById('lab-calculator').style.display = 'none';    
      }
      else if (localStorage.getItem('setting-currentTab') == 'lab') {
        document.getElementById('slime-bank-calculator').style.display = 'none';
        document.getElementById('anvil-calculator').style.display = 'none';
        document.getElementById('lab-calculator').style.display = 'block';
        document.getElementById('lab').style.color = '#f2e009';
      }
      else if (localStorage.getItem('setting-currentTab') == 'anvil') {
        document.getElementById('slime-bank-calculator').style.display = 'none';
        document.getElementById('lab-calculator').style.display = 'none';
        document.getElementById('anvil-calculator').style.display = 'block';
        document.getElementById('anvil').style.color = '#f2e009';
      }

    } else {
      localStorage.setItem('setting-currentTab', 'slime-bank');
      document.getElementById('anvil-calculator').style.display = 'none';
      document.getElementById('slime-bank').style.color = '#f2e009';
      document.getElementById('lab-calculator').style.display = 'none';   
    }
    // loading anvil calc from localStorage
    if (localStorage.getItem('anvil-nitro-speed')) {document.getElementById('anvil-nitro-speed').value = localStorage.getItem('anvil-nitro-speed');} 
    else {localStorage.setItem('anvil-nitro-speed', 1)}
    if (localStorage.getItem('anvil-fox-dungeon-1-time')) {
      document.getElementById('anvil-fox-dungeon-1-time').value = localStorage.getItem('anvil-fox-dungeon-1-time');
      document.getElementById('anvil-fox-dungeon-2-time').value = localStorage.getItem('anvil-fox-dungeon-2-time');
      document.getElementById('anvil-fox-dungeon-3-time').value = localStorage.getItem('anvil-fox-dungeon-3-time');
      document.getElementById('anvil-fox-dungeon-4-time').value = localStorage.getItem('anvil-fox-dungeon-4-time');
      document.getElementById('anvil-fox-dungeon-5-time').value = localStorage.getItem('anvil-fox-dungeon-5-time');
      document.getElementById('anvil-bat-dungeon-1-time').value = localStorage.getItem('anvil-bat-dungeon-1-time');
      document.getElementById('anvil-bat-dungeon-2-time').value = localStorage.getItem('anvil-bat-dungeon-2-time');
      document.getElementById('anvil-bat-dungeon-3-time').value = localStorage.getItem('anvil-bat-dungeon-3-time');
      document.getElementById('anvil-bat-dungeon-4-time').value = localStorage.getItem('anvil-bat-dungeon-4-time');
      document.getElementById('anvil-bat-dungeon-5-time').value = localStorage.getItem('anvil-bat-dungeon-5-time');
      
      
      calc_anvil();
    } else {calc_anvil();}

    if (localStorage.getItem('slime-bank-research-stone-level')) {
      document.getElementById('slime-bank-research-stone-level').value = localStorage.getItem('slime-bank-research-stone-level');
      Research_Slime_Bank_Stone(localStorage.getItem('slime-bank-research-stone-level'));
  } else {Research_Slime_Bank_Stone(0);}

    if (localStorage.getItem('slime-bank-research-leaf-level')) {
      document.getElementById('slime-bank-research-leaf-level').value = localStorage.getItem('slime-bank-research-leaf-level');
      Research_Slime_Bank_Leaf(localStorage.getItem('slime-bank-research-leaf-level'));
    } else {Research_Slime_Bank_Leaf(0);}

    if (localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level')) {
      document.getElementById('slime-bank-upgrade-slime-coin-cap-1-level').value = convert(localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level'));
      Upgrade_Slime_Bank_Gold_Cap_1(localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level'));
    } else {Upgrade_Slime_Bank_Gold_Cap_1(0);}

    if (localStorage.getItem('slime-bank-upgrade-slime-coin-cap-2-level')) {
      document.getElementById('slime-bank-upgrade-slime-coin-cap-2-level').value = localStorage.getItem('slime-bank-upgrade-slime-coin-cap-2-level');
      Upgrade_Slime_Bank_Gold_Cap_2(localStorage.getItem('slime-bank-upgrade-slime-coin-cap-2-level'));
    } else {Upgrade_Slime_Bank_Gold_Cap_2(0);}

    // if (localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-cost')) {
    //   document.getElementById('slime-bank-upgrade-slime-coin-cap-1-cost').value = localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-cost'); 
    // } else {}

    // regex.replace();
  // 14.63K
  // 24.51M
  // 101.24B
  // 120.3T
  // 2.55e+19      
    
    // document.getElementById('test').innerHTML = convert2('120.33k');
    // calc_anvil();
    Slime_Bank_Gold_Cap_Total();    
    Slime_Bank_Intrest();
    Slime_Bank_Optimiser();
    // document.getElementById('upgrade-slime-bank-cap-1-value-new').innerHTML = convert(localStorage.getItem('upgrade-slime-bank-cap-1-value'));
    // console.log(key);
    // console.log(localStorage.getItem(key));
}

function calc_anvil_save(input) {
  localStorage.setItem(input, document.getElementById(input).value);
  calc_anvil();
}


function calc_anvil() {
  const list = ['anvil-fox-dungeon-1','anvil-fox-dungeon-2','anvil-fox-dungeon-3','anvil-fox-dungeon-4','anvil-fox-dungeon-5',
  'anvil-bat-dungeon-1','anvil-bat-dungeon-2','anvil-bat-dungeon-3','anvil-bat-dungeon-4','anvil-bat-dungeon-5'];
  var nitro = localStorage.getItem('anvil-nitro-speed');

  list.forEach(element => {
    // console.log(element);
    value = element + '-value';
    time = element + '-time';
    reward = document.getElementById(element + '-reward').innerHTML;
    // console.log(reward);    
    document.getElementById(value).innerHTML = Math.round(3600 / document.getElementById(time).value * reward * nitro);
  });
  // list.forEach(myFunction);
  // if (localStorage.getItem('anvil-fox-dungeon-1-time') && document.getElementById('anvil-fox-dungeon-1-time').value != localStorage.getItem('anvil-fox-dungeon-1-time')) {
  //   document.getElementById('anvil-fox-dungeon-1-time').value = localStorage.getItem('anvil-fox-dungeon-1-time');
  // } 
  // else {localStorage.setItem('anvil-fox-dungeon-1-time', document.getElementById('anvil-fox-dungeon-1-time').value);}
   
  //  document.getElementById('anvil-fox-dungeon-1-value').innerHTML = 3600 / document.getElementById('anvil-fox-dungeon-1-time').value;
}



function currentTab(input) {
  localStorage.setItem('setting-currentTab', input);
}




function restart() {
  window.localStorage.clear();
}


function convert(input) {
  input = parseFloat(input);
  // console.log(input);
  var output = 0;
  if (input <= 10000) {output = Math.round(input);}
    else if (input < 1000000) {output = (input / 1000).toFixed(2) + 'K';}
    else if (input < 1000000000) {output = (input / 1000000).toFixed(2) + 'M';}
    else if (input < 1000000000000) {output = (input / 1000000000).toFixed(2) + 'B';}
    else if (input < 1000000000000000) {output = (input / 1000000000000).toFixed(2) + 'T';}
    else {output = input.toExponential(2);}

  return output; 
}

function convert2(input) {
  if (/^\d*\.?\d+$/.test(input)) {return Math.round(input);} // return rounded number if there is no abbreviete
  else {
  const regex = /(.*)(\D)$/gm;
  input = input.toLowerCase();
  input = input.replace(/ /g, ''); //removes all spaces
  input = regex.exec(input);

  if (input[2] == 't') {output = input[1] * 1000 ** 4;}
  else if (input[2] == 'b') {output = input[1] * 1000 ** 3;}
  else if (input[2] == 'm') {output = input[1] * 1000 ** 2;}
  else if (input[2] == 'k') {output = input[1] * 1000 ** 1;}
  

  // document.getElementById('test').innerHTML = input[0];
  // document.getElementById('test2').innerHTML = input[1];
  // document.getElementById('test3').innerHTML = input[2];
  return output;
  }
}


// document.getElementById('test').value = 'ss'; //

function Slime_Bank_Gold_Cap_Total() {
  output = localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-value') * ((localStorage.getItem('slime-bank-research-leaf-level') * 2 + 100) / 100) * (localStorage.getItem('slime-bank-upgrade-slime-coin-cap-2-value') / 100);
  localStorage.setItem('slime-bank-slime-coin-cap-total', output);
  document.getElementById('slime-bank-slime-coin-cap-value').innerHTML = convert(output);
  Slime_Bank_Intrest();
  Slime_Bank_Optimiser();
}

function Slime_Bank_Intrest() {
  intrest = (document.getElementById('slime-bank-research-stone-level').value * 0.001 ) * localStorage.getItem('slime-bank-slime-coin-cap-total');
  localStorage.setItem('slime-bank-intrest', intrest);
  document.getElementById('slime-bank-intrest').innerHTML = convert(intrest);
  Slime_Bank_Optimiser();
}

function Slime_Bank_Optimiser() {
  slime_coin_cap_1_level = localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level');
  intrest = localStorage.getItem('slime-bank-intrest') - localStorage.getItem('slime-bank-intrest') * 0.1;

    if (slime_coin_cap_1_level >= 1000000000) {slime_coin_cap_1_cost =     10000000000000000;} // 1.00+E16
    else if (slime_coin_cap_1_level >= 500000000) {slime_coin_cap_1_cost = 1000000000000000;} // 1.00+E15
    else if (slime_coin_cap_1_level >= 100000000) {slime_coin_cap_1_cost = 100000000000000;} // 100T
    else if (slime_coin_cap_1_level >= 50000000) {slime_coin_cap_1_cost =  10000000000000;} // 10T
    else if (slime_coin_cap_1_level >= 10000000) {slime_coin_cap_1_cost =  1000000000000;} // 1T
    else { slime_coin_cap_1_cost = 10000;} // need to find solution for less than 10M upgrades

  document.getElementById('slime-bank-upgrade-slime-coin-cap-1-cost').value = convert(slime_coin_cap_1_cost);
  output = Math.round(intrest  / slime_coin_cap_1_cost);
  document.getElementById('slime-bank-optimiser').innerHTML = output;
}

function Upgrade_Slime_Bank_Gold_Cap_1(input) {
  input = convert2(input);
  if (input != localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level')) {
    var base = 10000;
    var i = 1;
    var buffer = -10;
    var sum = 0;
  
    while (i <= input) {
      buffer += 20;
      sum += buffer;
      i++;
  }
    output = base + base * input + sum;
    document.getElementById('slime-bank-upgrade-slime-coin-cap-1-value').innerHTML = convert(output);
    localStorage.setItem('slime-bank-upgrade-slime-coin-cap-1-level', input);
    localStorage.setItem('slime-bank-upgrade-slime-coin-cap-1-value', output);
  } else {
    document.getElementById('slime-bank-upgrade-slime-coin-cap-1-value').innerHTML = convert(localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-value'));
  }
  Slime_Bank_Gold_Cap_Total();
  }
  
  function Upgrade_Slime_Bank_Gold_Cap_2(input) {
    var base = 10000;
    var i = 1;
    var buffer = -10;
    var sum = 0;
  
    while (i <= input) {
      buffer += 20;
      sum += buffer;
      i++;
  }
    document.getElementById('slime-bank-upgrade-slime-coin-cap-2-value').innerHTML = convert(sum+100)+'%';
    localStorage.setItem('slime-bank-upgrade-slime-coin-cap-2-level', input);
    localStorage.setItem('slime-bank-upgrade-slime-coin-cap-2-value', sum + 100);
    // return base + base * input + sum;
    Slime_Bank_Gold_Cap_Total();
  }

  function Slime_Bank_Upgrade_Slime_Coin_Cap_1_Cost(input) {
    localStorage.setItem('slime-bank-upgrade-slime-coin-cap-1-cost', input);
  }


  function Research_Slime_Bank_Stone(input) {
    document.getElementById('slime-bank-research-stone-value').innerHTML = +(input * 0.1).toFixed(8)+'%';
    localStorage.setItem('slime-bank-research-stone-level', input);
    Slime_Bank_Intrest();

  }

  function Research_Slime_Bank_Leaf(input) {
    document.getElementById('slime-bank-research-leaf-value').innerHTML = +(input * 2).toFixed(8)+100+'%';
    localStorage.setItem('slime-bank-research-leaf-level', input);
    Slime_Bank_Gold_Cap_Total();   
  }


  