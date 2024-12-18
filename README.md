# myclinic

> Simple Clinic App Api, that have the most of the basics clinic operations, made by express and mongo db, to serve [this app.](https://github.com/Dimah02/myclinic-app).
<br>

if you want to use it, after cloning run:
```
git clone https://github.com/Dimah02/myclinic-api.git
cd myclinic-api
npm i
npm run serve
```

# Authentication

- HTTP Authentication, scheme: bearer, required for all endpoints except login and signup.

<br>


# Endpoints

<br>


## POST signup

POST /user/signup

> Body Parameters

```json
{
  "name": "user_name",
  "email": "example@example.com",
  "password": "strongpassword"
}
```



<br>

## POST login

POST /user/login

> Body Parameters

```json
{
  "email": "example@example.com",
  "password": "strongpassword"
}
```
 
<br>

## POST update_info

POST /user/update_info

> Body Parameters

```json
{
  "id": "user_id",
  "name": "user_name",
  "email": "example@example.com",
  "gender": "femal",
  "height": "168",
  "weight": "78",
  "medical_history": "medical_history",
  "allergy_to_medications": "allergy_to_medications",
  "birth_date": "birth_date",
  "blood_type": "blood_type"
}
```
<br>

## GET get_clinics

GET /clinics

 
<br>

## GET get_doctor

GET /doctors/{id}

 
<br>

## POST make_review

POST /doctors/{id}/reviews

> Body Parameters

```json
{
  "userId": "userId",
  "userName": "userName",
  "rating": 5,
  "comment": "awesome"
}
```
 
<br>

## DELETE cancel_review

DELETE /doctors/{id}/reviews/{reviewId}

 
<br>

## POST create_appointments

POST /appointments

> Body Parameters

```json
{
  "doctorId": "doctorId",
  "date": "2024-11-29T00:00:00.000",
  "time": "15:00",
  "userId": "userId"
}
```
<br>


## POST cancel_appointments

POST /appointments/{id}/cancel

<br>

## POST get_appointments

POST /users/{id}/appointments

---
<br> 
<br> 
<br> 
   

> This is my first deployed API! I want to thank myself and everyone who has contributed to my knowledge over the years (✿◠‿◠). If you have any comments, please feel free to reach out.


