from flask import Flask, render_template, url_for, request
from home import app_file1
from blueprints.dashboard import app_file2
from blueprints.logistik import app_file3
from blueprints.rapport import app_file4
from blueprints.analytics import app_file5
from blueprints.settings import app_file6
from blueprints.admin import app_file7
from blueprints.support import app_file8

#from blueprints. import app_file2



# Flask constructure, which will create a global flask application object.
# Pass the name to the constructure
# __name__ is a speciall variable containing the name of the current module.
main_app = Flask(__name__)

main_app.register_blueprint(app_file1)
main_app.register_blueprint(app_file2)
main_app.register_blueprint(app_file3)
main_app.register_blueprint(app_file4)
main_app.register_blueprint(app_file5)
main_app.register_blueprint(app_file6)
main_app.register_blueprint(app_file7)
main_app.register_blueprint(app_file8)


if __name__ == '__main__':
    main_app.run(debug=True, use_reloader=False)