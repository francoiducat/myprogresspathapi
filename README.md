# myprogresspathapi

Time Tracker App built with EXPRESS, SEQUELIZE, POSTGRESQL.


My progress path API enables you to track time you spend on different tasks. Each task serving a mission. 


## Load dummy data locally

Data is handled with sequelize tool.

To load dummy data locally, run these 3 commands :

```sequelize db:create```

```sequelize db:migrate```

```sequelize db:seed:all```


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

To run migration files, execute this command :

```sequelize db:migrate```


### Seeds generation

missions :

```sequelize seed:generate --name missions```

missions_items :


### Load Seed
```sequelize db:seed:all```



