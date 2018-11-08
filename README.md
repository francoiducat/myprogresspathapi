# myprogresspathapi

Time Tracker App built with EXPRESS, SEQUELIZE, POSTGRESQL.


My progress path API enables you to track time you spend on different tasks. Each task serving a mission. 


## How to run the app ?

Follow these steps to run the API locally

### 1. Setup config file

Create file ```server/config/config.json```  based on the file ```config.sample.json```

### 2. Setup environement variables

Export environment variables.

Locally it is possible to store them in a file ```.env.local```

 

### 3. Setup database

Run these commands (Data is handled with sequelize tool):

Install sequelize :

```npm install -g sequelize-cli```

>Create database

```sequelize db:create```

This command will load the config.json file in the background.

>Create tables (based on migration files)

```sequelize db:migrate```

/!\ This command can fail if there are more than one migration file for the same table. 

>Load dummy data locally (optional)

```sequelize db:seed:all```

### Install dependencies

```npm install```

### Run the app

```npm run dev```

## Database & sequelize, how it works ?

### Database creation

```sequelize db:create```

### Models creation

missions :

```sequelize model:create --underscored --name missions --attributes title:string,owner:string,complete:boolean```

missions_items :

```sequelize model:create --underscored --name mission_items --attributes content:string,duration:integer,complete:boolean,start_date:date,end_date:date```

After these 2 commands, models are refactored to ES6 manually.

### Database migration

Running migration files will create tables in database.
Execute this command to do it:

```sequelize db:migrate```


### Seeds generation



missions :

```sequelize seed:generate --name missions```

missions_items :


### Load Seed
```sequelize db:seed:all```



