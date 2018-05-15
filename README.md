
## How To Use
```bash
git clone https://github.com/californianseabass/jspm-typescript-react-boilerplate.git $my-repo
cd $my_repo
rm -rf .git
npm i
```

### Installation
```bash
npm i
```

Installing babel-jest required

``` bash
jspm install --dev npm:babel-core@^7.0.0-0 npm:@babel/core
jspm install --dev npm:babel-jest
then saying no to install range
Enter any custom package resolution range: npm:babel-core@^7.0.0-0 7.0.0-bridge.0
```

### Running
```bash
npm run start
```

### Linting
```bash
npm run lint
```

## App Configuration
Uses dotenv to handle configuration.
