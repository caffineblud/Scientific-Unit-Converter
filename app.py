from flask import Flask, render_template, request, jsonify
from converter import convert_unit

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/convert", methods=["POST"])
def convert():

    data = request.get_json()

    value = float(data["value"])
    from_unit = data["from_unit"]
    to_unit = data["to_unit"]

    category = data["category"]

    result = convert_unit(
        category,
        value,
        from_unit,
        to_unit
    )

    return jsonify({
        "result": round(result, 6)
    })


if __name__ == "__main__":
    app.run(debug=True)