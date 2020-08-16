from flask import Blueprint, render_template, session,abort

app_file4 = Blueprint('app_file4',__name__)

@app_file4.route("/rapport")
def function():
    return render_template('rapport.html')