# Load Monitoring Web Application

We would like you to demonstrate your skills by creating a small example of a web-based CPU load monitoring application with ReactJS.
The application should display time-series data provided by the small server bundled in this package. The visual design is up to you. We don't expect it to be fully polished, the only requirement is that the app is easy to navigate and understand.

The application should be able to answer the following questions:

- What is my computer's current (instantaneous) average CPU load?
- How did the average CPU load change over a 5 minute window?
- Has my computer been under heavy CPU load for 1 minute or more? When? How many times?
- Has my computer recovered from heavy CPU load? When? How many times?

## Product requirements:

- The app communicates with the local back-end service to retrieve CPU load average information (more details on the server [here](./server/README.md#api-documentation)).
- It should poll CPU load information every 10 seconds.
- It should maintain a 5 minute window of historical CPU load information.
- It should alert/notify the user of high CPU load.
- It should alert/notify the user when CPU load has recovered.

### Thresholds:

- A CPU is considered under high average load when it has exceeded 1 for 2 minutes or more.
- A CPU is considered recovered from high average load when it drops below 1 for 2 minutes or more.

### Extra goals

- Turn all the default settings into user configurable parameter (poll interval, historical cpu load window, cpu overload threshold, event duration, etc)
- Show cpu loads per core, along with the different clock times (check [here](./server/README.md#current-loads) for details) 
- Export overload/recovery event list to a file

## Other requirements:

- Please include instructions on how to set up the app
- Include documentation on the app's high level architecture and structure, along with any tech decision you took which you deem valuable to explain
- Please write up a small explanation of how you would extend or improve your application design if you were building this for production, along with possible future features.
- You should use `React` to build the UI. You can use whatever other frameworks/libs you see fit, but we'd appreciate a small explanation as to why you chose the.

## Getting started

Clone this repo (do **not** fork it on GitHub) and import to your own public repo:
```
git clone -o upstream https://github.com/Exabel/cpu-loads.git
cd cpu-loads
git remote add origin <your repo>
git push -u origin master
```
