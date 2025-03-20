function func(str) {
    const [protocol, rest] = str.trim().split('://');
    const [hostname, ...path] = rest.split('/')
    
    const rek = (part) => {
      if(part.length === 0) return ''
      const [current, ...rest] = part
      return {
        current: current,
        path: rek(rest)
      }
    }
    return {protocol, hostname, child: rek(path)}
  }
  
func('https://www.google.com/doodles/rubiks-cube/fadlsj/ghasfhqe/adf')