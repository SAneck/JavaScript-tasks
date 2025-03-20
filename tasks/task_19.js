function func(str) {
    const [username, domain] = str.trim().split('@');
    return { username, domain};
  }
  
  func('ivanov.oleg@pochta.com')