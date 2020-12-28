import json

bookDetail={
  "bookName": "Clean Code",
  "bookID": 2315,
  "auther": "Robert",
  "price": 700,
  "anotherListofBooks": {
    "id": 2234,
    "name": "BigData",
    "authername": "Srini Panchikala",
    "priceofbook": 650
    },
    "totalQuantity": [
      { "bookID": 115, "quantity": 200 }
    ]
  }

  
Result= open('Result.json', 'w')
json.dump(bookDetail, Result)