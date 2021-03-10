const print = () => {
  let text = "";
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      if (i === 1) text = '\r|   ';
      if (i === 2) text = '\r/   ';
      if (i === 3) text = '\r-   ';
      if (i === 4) text = '\r\\   ';
      if (i === 5) text = '\r|   ';
      process.stdout.write(text);
    }, i * 500);
  }
};

print();