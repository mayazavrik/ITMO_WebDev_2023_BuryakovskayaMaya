const maskForNum = (e, formater) => {
    const result = [];
    const {target} = e;
    for (let i = 0; i < target.value.length; i++) {
      if (i >= formater.length) break;
      result[i] = (
        typeof formater[i] === 'string' ? formater[i] : ''
      ) + target.value[i].replace(formater[i], '');
    }
    e.target.value = result.join('');
  }
  export {maskForNum};