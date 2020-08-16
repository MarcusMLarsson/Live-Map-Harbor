from flask import Blueprint, render_template, session,abort

app_file6 = Blueprint('app_file6',__name__)

@app_file6.route("/settings")
def function():
    return render_template('settings.html')