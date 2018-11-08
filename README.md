# myprogresspathapi
my progress path api enables you to track time you spend on different tasks. Each task serving a mission.


## Database 

Data is handled with sequelize tool.

Here are the 3 main steps to do with sequelize when it comes to launch an app locally :

```sequelize db:create```

```sequelize db:migrate```

```sequelize db:seed:all```


### Database creation
```sequelize db:create```

### Models creation

missions :

```sequelize model:create --underscored --name missions --attributes title:string,owner:string,complete:boolean```

missions_items :

```sequelize model:create --underscored --name mission_items --attributes content:string,duration:integer,complete:boolean,start_date:date,end_date:date```


### Database migration
```sequelize db:migrate```


### Seeds generation

missions :

```sequelize seed:generate --name missions```

missions_items :


### Load Seed
```sequelize db:seed:all```



