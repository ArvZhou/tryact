# Tryact

#### A DIY React
```
  const root = document.querySelector('#root');
  const list = ['Tryact', 'Tryvue', 'Tryvue'];
  
  render(root, (
      <div>
          <h3>Welcome to tryact!!!</h3>
          <ul onClick={() => {console.log(list)}}>
              {
                  list.map(item => (<li>{item}</li>))
              }
          </ul>
      </div>
  ))
```

## License

The MIT License (MIT)