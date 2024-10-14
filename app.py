from flask import Flask, request, jsonify
# Learn to create your virtual environment here https://www.youtube.com/watch?v=MBFDLpQHZpg&ab_channel=MikeColbert
# Cool dude: https://www.youtube.com/watch?v=qSpFAgRrgqs&ab_channel=BrandonHarding
#  .venv\Scripts\activate

app = Flask(__name__)

@app.route('/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello, World!'})

if __name__ == '__main__':
    app.run(debug=True)