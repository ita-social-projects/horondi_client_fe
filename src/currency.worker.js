const onMessage = () =>
  this.addEventListener('message', (e) => {
    console.log(e);
    this.postMessage('received', e);
  });
onMessage();
