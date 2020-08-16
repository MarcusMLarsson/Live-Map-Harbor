from flask import Blueprint, render_template, session,abort

app_file5 = Blueprint('app_file5',__name__)

@app_file5.route("/analytics")
def function():
    return render_template('analytics.html')