# Jay Cina
# 10/15/2024
# Desc: 
# Sources:
    # Learn to create your virtual environment here https://www.youtube.com/watch?v=MBFDLpQHZpg&ab_channel=MikeColbert
    # Cool dude: https://www.youtube.com/watch?v=qSpFAgRrgqs&ab_channel=BrandonHarding

# Useful commands (copy + paste into terminal)
    # activate virtual environment VERY IMPORTANT when downloading new pip packages:
    #       >> .\venv\Scripts\activate
    # to leave (venv) when done downloading:
    #       >> deactivate

    # if you have errors with pip PATH run this in the Lets-Meet directory:
    #       >> python -m pip install --upgrade --force-reinstall pip

    # update list of package requirements (will save it to requirements.txt) for user reference:
    #       >> pip freeze > requirements.txt


# Imports:
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello, World!'})

if __name__ == '__main__':
    app.run(debug=True)