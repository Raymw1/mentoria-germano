function incrementNum(addNum) {
  let num = 0;
  setInterval(() => {
    console.log(num += addNum);
  }, 1200);
}

incrementNum(2)