from flask import Blueprint, render_template, session,abort

app_file7 = Blueprint('app_file7',__name__)

@app_file7.route("/admin")
def function():
    return render_template('admin.html')