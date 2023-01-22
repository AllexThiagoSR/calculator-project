import React from "react";

const addCharToScreen = (event) => {
  document.getElementById('screen').innerText += event.target.value;
  console.log(event.target);
};

const del = () => {
  const screen = document.getElementById('screen');
  const text = screen.innerText;
  screen.innerText = text.slice(text.indexOf(text[text.length - 1]));
};

const equal = () => {
  const screen = document.getElementById('screen');
  const sum = Number('1 + 1');
  console.log(sum);
}

const specialFuncs = {
  clear: () => document.getElementById('screen').innerText = '',
  del,
  equal,
};

const chooseKeyEventFunc = (value) => specialFuncs[value] || addCharToScreen;

const Key = (key) => {
  let value = key;
  if (key === '←') value = 'del';
  if (key === '=') value = 'equal';
  return (
    <button value={ value } key={ value } onClick={ chooseKeyEventFunc(value) }>
      { key }
    </button>
  );
};

export default Key;
