# ![Foodometer](https://img.icons8.com/doodle/30/000000/french-fries.png) Foodometer

Problem with team joining the meetings late? \
Want a way to make them join the meeting on time but in a fun way? \
Try **Foodometer**.

**Foodometer** is a very simple tool to make your team attend a meeting on time.
Foodometer can help your team by tracking how many times a team member has attended the meeting late and automatically calculates the team member's share in a team party based on his attendence.

## 🥳 Features available in Foodometer

 - Login / Signup / Logout
 - Add team members
 - Increase/Decrease the count(no. of times he/she is late to the meeting) for a team member
 - Remove a team member
 - Automatically calculate one's share in the team party

## ⚙️ Foodometer is built using

- [ReactJs](https://reactjs.org) for Frontend
- [NodeJs](https://nodejs.org) for Backend
- [ExpressJs](https://expressjs.com/) - Web framework
- [PostgreSQL](https://www.postgresql.org/) for Database

## 🤩 Contributing

Fork this [repo](https://github.com/abhilashkasula/foodometer/fork).

Clone the repo using
```bash
git clone https://github.com/:your-github-username/foodometer
cd foodometer
```

#### 🏠 Setting up Foodometer in local

 - Export the following env variables:
   1. SECRET_NAME
   2. SECRET_KEY
   3. DATABASE_URL
 - Install the dependencies using `npm install && cd ui && npm install`
 - Start the backend server using `npm start`
 - Start the react dev server on 3000 using `cd ui && npm start`

#### 🔨 Building Foodometer

You can build the project and start the prod server using `npm build && npm start`. \
This will start the server on port 9000 by default.

If you wish to start the prod server on any other port, just export the **PORT** env variable.

_Feel free to open Pull Requests._
