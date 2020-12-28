import json
from werkzeug.wrappers import Request, Response

with open('Result.json') as book:
 booksDetail = json.load(book)

for i in booksDetail['bookName']:
  print(i)

print(booksDetail)
print(booksDetail['anotherListofBooks'])
