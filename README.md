
## How To Use
```bash
git clone https://github.com/californianseabass/jspm-typescript-react-boilerplate.git $my-repo
cd $my_repo
rm -rf .git
npm i
```

### Installation
Install postgres native bindings:
https://github.com/brianc/node-pg-native
```bash
apt-get install libpq-dev g++ make
```
```bash
npm i
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


## Adding User Authentication
Update the query strings in the lib/passport files to call out to the correct table storing the user information and their passwords, or its better to update the environment parameters in the config folder for dotenv to use. Also update the devops/init.sql file to match desires for user information.


