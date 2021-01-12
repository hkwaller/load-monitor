# Getting started

## Prerequisites

The server below has been tested with node `v13.12.0`, and we're aware it breaks with newer versions. Please stick to `v13.12.0` to avoid unnecessary issues.  
We're working on updating it asap!

We recommend using [nvm](https://github.com/nvm-sh/nvm) for easy version management.   

## Running the server

After cloning the repo, start the server by running

```
cd server
npm install
npm start
```
This will run the server on `http://localhost:9999`

## Health Check

Run the following command to check if the server is running.

```
curl --request GET --url 'http://localhost:9999'
```

You should get a response like:

```
Health Check! yay!
```

## API documentation

The server has a few endpoints you can check:

* `/loads/mock` - Retrieves mock data.  
* `/loads/current` - Instantaneous CPU load data
* `/loads/list` - All the CPU data recorded so far.
* `/loads/stop` - Stop recording data
* `/loads/restart` - Restart (or just start) recording
* `/loads/clear` - Clear all recorder data

When you start up the server, it will immediately start recording CPU loads every second.  
Feel free to `GET` these endpoints to get a feel for the response types.  

### Mock data

```
localhost:9999/loads/mock
```

When the server starts, it generates mock data for a period of 30 minutes, and adds 10 new entries per second to it. This data has no relation to real time, other than the first timestamp used as a seed. However, it does still keep the one second per record convention.   


>**NOTE**: On windows machines, there could be some problems with the `os` package. If that happens, we recommend sticking to the mock data.   
>Feel free to modify the generation algorithm if you deem it necessary.  


### Current loads

```
localhost:9999/loads/mock
```

The response object is of type:
```
{
    normalized: Array<number>,
    timestamp: number,
    cpus: Array<Array<number>>
}
```

`normalized` is an array of length 3, with the load averages for 1, 5 and 15 min. It uses [this](https://nodejs.org/api/os.html#os_os_loadavg) and the normalizes the values.   
`cpus` will give you an array the size of the number of cores in your machine, each element with 5 different cpu clock times. Check [here](https://nodejs.org/api/os.html#os_os_cpus) for details.   


## CPU Load Averaging

*We use the following process to calculate the average and build the response objects.*


Modern computers often have multiple CPUs, and you will need to normalize the load average to account for this. For example, on macOS or linux using NodeJS one can get the number of CPUs on your computer with:

`const cpus = os.cpus().length`

And then normalize the average with:

`const loadAverage = os.loadavg()[0] / cpus`

On Windows there are packages available to provide this information. 

Learn about CPU load here: https://en.wikipedia.org/wiki/Load_%28computing%29

