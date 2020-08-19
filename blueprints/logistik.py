########################################################################

from flask import Blueprint, render_template, session,abort

app_file3 = Blueprint('app_file3',__name__)

@app_file3.route("/logistik")
def function():
    return render_template('logistik.html')
