use FacultySystemDB

db.students.insertOne({
  "FirstName": "John",
  "LastName": "Doe",
  "Age": 25,
  "Faculty": {
    "Name": "Engineering",
    "Address": "123 Main Street"
  },
  "Grades": [
    {
      "CourseName": "Mathematics",
      "Grade": 90,
      "Pass": true
    },
    {
      "CourseName": "Physics",
      "Grade": 85,
      "Pass": true
    },
    {
      "CourseName": "Computer Science",
      "Grade": 78,
      "Pass": true
    }
  ],
  "IsFired": false
})

db.students.insertMany({
  "FirstName": "Ahmed",
  "LastName": "Hamada",
  "Age": 30,
  "Faculty": {
    "Name": "Business",
    "Address": "456 Oak Avenue"
  },
  "Grades": [
    {
      "CourseName": "Marketing",
      "Grade": 88,
      "Pass": true
    },
    {
      "CourseName": "Economics",
      "Grade": 75,
      "Pass": true
    },
    {
      "CourseName": "Finance",
      "Grade": 92,
      "Pass": true
    }
  ],
  "IsFired": false
},
{
  "FirstName": "Bob",
  "LastName": "Johnson",
  "Age": 22,
  "Faculty": {
    "Name": "Science",
    "Address": "789 Pine Street"
  },
  "Grades": [
    {
      "CourseName": "Biology",
      "Grade": 80,
      "Pass": true
    },
    {
      "CourseName": "Chemistry",
      "Grade": 65,
      "Pass": false
    },
    {
      "CourseName": "Physics",
      "Grade": 75,
      "Pass": true
    }
  ],
  "IsFired": true
})

db.students.find().pretty()

db.students.find({"FirstName": "John"})
    
db.students.find({"$or": [{"FirstName": "Ahmed"}, {"LastName": "Ahmed"}]})

db.students.find({"FirstName": {"$ne": "Ahmed"}})

db.students.find({"Age": {"$gte": 21}, "Faculty": {"$exists": true}})

db.students.find({"FirstName": "John"}, {"FirstName": 1, "LastName": 1, "IsFired": 1, "_id": 0})

db.students.updateOne({"FirstName": "John"}, {$set: {"LastName": "Mourad"}})

db.students.deleteMany({"IsFired": true})

db.students.deleteMany({})

db.dropDatabase()
