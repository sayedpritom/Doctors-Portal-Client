## Doctors Portal Website. Live site: https://melodic-salamander-c2acfa.netlify.app/

**Website Features and Functionalities:**
* User authentication using email & password. 
* Private/Protected Route(Appointment page)
* Personalized dashboard for both user & admin
* Basic payment system(Implemented using stripe) 
* Functionalities: add new doctor, delete doctors, make appointments & payment for appointments, view all appointments. 

**Used technologies in the front-end:**
* HTML, CSS, 
* Tailwind CSS, DaisyUI
* React(react components, react router, react query, react hook form, day picker, date-fns, React Toastify)
* Firebase Authentication(user login and registration)



**Back-end(server) code link: https://github.com/sayedpritom/Doctors-Portal-Server**

**In the back-end, the implemented APIs are:**
1. Create users in MongoDB and issue a JWT token for the client
2. Create payment intent
3. Get all services
4. Get all appointments
5. Get all appointments for a particular user
6. Get a certain appointment for a particular user
7. Verify admin
8. Create new user in database
9. Get all available slots of a particular service
10. Store new booking in database
11. Update booking after payment
12. Get all doctors
13. Add new doctor in database
14. Delete doctor in database

**Used technologies in the back-end:**
* Node.js, express.js
* JSON Web Token,
* Mongodb(for database)
* Heroku(for server hosting)
