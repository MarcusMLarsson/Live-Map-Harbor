from flask import Blueprint, render_template, session,abort

app_file8 = Blueprint('app_file8',__name__)

@app_file8.route("/support")
def function():
    return render_template('support.html')